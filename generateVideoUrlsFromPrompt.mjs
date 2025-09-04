import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read API keys from .envy file
const envyPath = path.resolve(__dirname, '.envy');
if (!fs.existsSync(envyPath)) {
  console.error(`API key file not found at ${envyPath}`);
  process.exit(1);
}
const keys = fs
  .readFileSync(envyPath, 'utf-8')
  .split(/\r?\n/)
  .filter((k) => k.trim() !== '');
if (keys.length === 0) {
  console.error('.envy file is empty or not configured correctly.');
  process.exit(1);
}
let currentKeyIndex = 0;

const getApiKey = () => {
  const key = keys[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % keys.length;
  return key;
};

const searchYouTube = (query, apiKey) => {
  return new Promise((resolve, reject) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedQuery}&type=video&maxResults=1&key=${apiKey}`;

    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          let errorData = '';
          res.on('data', (chunk) => (errorData += chunk));
          res.on('end', () => {
            const errorBody = JSON.parse(errorData);
            const reason = errorBody.error?.errors?.[0]?.reason;
            if (reason === 'quotaExceeded') {
              console.warn(`  -> Quota exceeded for key. Trying next key.`);
              resolve('QUOTA_EXCEEDED');
            } else {
              reject(new Error(`YouTube API request failed with status ${res.statusCode}: ${errorData}`));
            }
          });
          return;
        }

        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(data);
            if (parsedData.items && parsedData.items.length > 0) {
              const videoId = parsedData.items[0].id.videoId;
              const videoTitle = parsedData.items[0].snippet.title;
              console.log(`  -> Found video: "${videoTitle}" (ID: ${videoId})`);
              resolve(`https://www.youtube.com/watch?v=${videoId}`);
            } else {
              resolve(null); // No results found
            }
          } catch (e) {
            reject(e);
          }
        });
      })
      .on('error', (err) => reject(err));
  });
};

const findAndReplaceUrl = async (lessonBlock) => {
  const placeholderUrl = null;
  if (!lessonBlock.includes(placeholderUrl)) {
    return lessonBlock;
  }

  const titleMatch = lessonBlock.match(/title:\s*['"`]([^'"`]+)['"`]/);
  if (!titleMatch) {
    return lessonBlock;
  }
  const title = titleMatch[1];
  console.log(`Processing lesson: "${title}"`);

  const searchQuery = `${title} tutorial`;
  let newUrl = null;
  let attempts = 0;

  while (attempts < keys.length) {
    const apiKey = getApiKey();
    try {
      const result = await searchYouTube(searchQuery, apiKey);
      if (result === 'QUOTA_EXCEEDED') {
        attempts++;
        continue;
      }
      newUrl = result;
      break;
    } catch (error) {
      console.error(`  -> Error searching video for "${title}":`, error.message);
      attempts++; // Treat other errors as a failed attempt for that key
    }
  }

  if (newUrl) {
    console.log(`  -> Replacing with new URL: ${newUrl}`);
    return lessonBlock.replace(placeholderUrl, newUrl);
  } else {
    console.log(`  -> No video found for "${title}". Keeping placeholder.`);
    return lessonBlock;
  }
};

const processFile = async (filePath) => {
  console.log(`\n========================================`);
  console.log(`Processing file: ${filePath}`);
  console.log(`========================================`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // This regex splits the file by lesson object, keeping the delimiter
  const lessonObjects = fileContent.split(/(?=\s*{\s*id:)/);

  const processedObjects = [];
  for (const lessonBlock of lessonObjects) {
    // The first element might be the import statements and array definition
    if (!lessonBlock.trim().startsWith('{')) {
      processedObjects.push(lessonBlock);
      continue;
    }
    const updatedBlock = await findAndReplaceUrl(lessonBlock);
    processedObjects.push(updatedBlock);
  }

  const updatedContent = processedObjects.join('');
  fs.writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`\nFinished processing ${filePath}.`);
};

const main = async () => {
  const filePaths = process.argv.slice(2);
  if (filePaths.length === 0) {
    console.error('Please provide at least one file path as an argument.');
    process.exit(1);
  }

  for (const filePath of filePaths) {
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {
      console.error(`File not found: ${absolutePath}`);
      continue;
    }
    await processFile(absolutePath);
  }
  console.log('\nAll files processed.');
};

main();
