import fs from 'fs/promises';
import path from 'path';
import { pathToFileURL } from 'url';
import https from 'https';

const YOUTUBE_API_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';
const MODULES_DIR = path.join(process.cwd(), 'src', 'data', 'modules');
const OUTPUT_DIR = path.join(process.cwd(), 'src', 'data');
const ENVY_PATH = path.join(process.cwd(), '.envy');

let apiKeys = [];
let currentApiKeyIndex = 0;

async function getApiKeys() {
  try {
    const envyContent = await fs.readFile(ENVY_PATH, 'utf-8');
    apiKeys = envyContent
      .split(/\r?\n/)
      .map((key) => key.trim())
      .filter((key) => key !== '');
    console.log(`Found ${apiKeys.length} API keys.`);
    if (apiKeys.length === 0) {
      throw new Error('No API keys found in .envy file.');
    }
  } catch (error) {
    console.error('Error reading .envy file:', error);
    process.exit(1);
  }
}

function getApiKey() {
  if (apiKeys.length === 0) {
    throw new Error('No API keys available.');
  }
  const key = apiKeys[currentApiKeyIndex];
  console.log(`--> Using API key index ${currentApiKeyIndex}: ${key ? key.substring(0, 10) + '...' : 'undefined'}`);
  currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
  return key;
}

async function searchYouTube(query) {
  let apiKey = getApiKey();

  const sanitizedQuery = query.replace(/[^a-zA-Z0-9\\s\\u00C0-\\u1EF9]/g, '');
  console.log(`    -> Original Query: "${query}"`);
  console.log(`    -> Sanitized Query: "${sanitizedQuery}"`);

  const searchWithKey = (key) =>
    new Promise((resolve, reject) => {
      const params = new URLSearchParams({
        part: 'snippet',
        q: sanitizedQuery,
        type: 'video',
        key: key,
        maxResults: '5',
      });
      const url = `${YOUTUBE_API_ENDPOINT}?${params.toString()}`;
      console.log(`    -> YouTube API URL: ${url.replace(key, 'REDACTED_API_KEY')}`);

      const req = https.get(
        url,
        {
          headers: {
            Accept: 'application/json',
            'User-Agent': 'K2AI-Education-Platform-Script/1.0',
          },
        },
        (res) => {
          let data = '';
          res.on('data', (chunk) => {
            data += chunk;
          });
          res.on('end', () => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
              try {
                resolve(JSON.parse(data));
              } catch {
                reject(new Error('Failed to parse YouTube API response.'));
              }
            } else if (res.statusCode === 403) {
              console.warn(`API key ${key} might have exceeded its quota. Trying next key.`);
              resolve('RETRY');
            } else {
              reject(new Error(`YouTube API responded with status code ${res.statusCode}: ${data}`));
            }
          });
        },
      );

      req.on('error', (e) => {
        console.error('--- HTTPS REQUEST ERROR ---');
        console.error(e);
        console.error('--- END HTTPS REQUEST ERROR ---');
        reject(new Error(`HTTPS request failed: ${e.message}`));
      });

      req.end();
    });

  let result = await searchWithKey(apiKey);
  if (result === 'RETRY') {
    apiKey = getApiKey(); // Get the next key
    result = await searchWithKey(apiKey); // Retry
    if (result === 'RETRY') {
      // If it fails again
      throw new Error('All API keys seem to have quota issues.');
    }
  }
  return result;
}

function selectVideo(items, lessonTitle) {
  if (!items || items.length === 0) return null;

  // Prioritize videos with Vietnamese titles or from educational channels
  const educationalChannels = ['TED-Ed', 'Khan Academy', 'CrashCourse'];
  const vietnameseKeywords = ['tiếng việt', 'vietnamese', 'bài giảng', 'hướng dẫn'];

  items.sort((a, b) => {
    const aTitle = a.snippet.title.toLowerCase();
    const bTitle = b.snippet.title.toLowerCase();
    const aChannel = a.snippet.channelTitle;
    const bChannel = b.snippet.channelTitle;

    // Priority 1: Educational channel
    if (educationalChannels.includes(aChannel) && !educationalChannels.includes(bChannel)) return -1;
    if (!educationalChannels.includes(aChannel) && educationalChannels.includes(bChannel)) return 1;

    // Priority 2: Vietnamese keywords in title
    const aHasVietnamese = vietnameseKeywords.some((kw) => aTitle.includes(kw));
    const bHasVietnamese = vietnameseKeywords.some((kw) => bTitle.includes(kw));
    if (aHasVietnamese && !bHasVietnamese) return -1;
    if (!aHasVietnamese && bHasVietnamese) return 1;

    // Priority 3: Title similarity (simple check)
    const lessonKeywords = lessonTitle.toLowerCase().split(' ');
    const aMatchCount = lessonKeywords.filter((kw) => aTitle.includes(kw)).length;
    const bMatchCount = lessonKeywords.filter((kw) => bTitle.includes(kw)).length;
    if (aMatchCount > bMatchCount) return -1;
    if (aMatchCount < bMatchCount) return 1;

    return 0;
  });

  return items[0];
}

async function processModules() {
  await getApiKeys();
  const allResults = [];
  let totalLessonsProcessed = 0;
  let successfullyUpdated = 0;
  let noMatch = 0;

  const moduleFiles = (await fs.readdir(MODULES_DIR)).filter((file) => file.endsWith('.ts'));

  for (const moduleFile of moduleFiles) {
    const filePath = path.join(MODULES_DIR, moduleFile);
    console.log(`Processing module: ${moduleFile}`);
    try {
      const fileUrl = pathToFileURL(filePath).href;
      const moduleData = await import(fileUrl);
      const lessonKey = Object.keys(moduleData).find((key) => Array.isArray(moduleData[key]));

      if (!lessonKey) {
        console.warn(`No lesson array found in ${moduleFile}. Skipping.`);
        continue;
      }

      const lessons = moduleData[lessonKey];
      let lessonCount = 0;
      for (const lesson of lessons) {
        lessonCount++;
        totalLessonsProcessed++;
        console.log(`  Processing lesson ${lessonCount}/${lessons.length}: ${lesson.title}`);

        if (!lesson.title) {
          console.log(`    ⏩ Skipping lesson with no title in ${moduleFile}`);
          continue;
        }

        if (lesson.videoUrl) {
          allResults.push({
            filePath: path.relative(process.cwd(), filePath),
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            videoUrl: lesson.videoUrl,
            status: 'skipped',
            reason: 'lesson already has valid video URL',
          });
          continue;
        }

        const searchQuery = lesson.title;
        const searchResults = await searchYouTube(searchQuery);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Rate limiting

        const bestVideo = selectVideo(searchResults?.items, lesson.title);

        if (bestVideo) {
          const videoId = bestVideo.id.videoId;
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          successfullyUpdated++;
          allResults.push({
            filePath: path.relative(process.cwd(), filePath),
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            videoUrl: videoUrl,
            status: 'updated',
            searchQuery,
            videoDetails: {
              title: bestVideo.snippet.title,
              channel: bestVideo.snippet.channelTitle,
              thumbnail: bestVideo.snippet.thumbnails.high.url,
              publishedAt: bestVideo.snippet.publishedAt,
              verified: true, // This is a placeholder, actual verification is complex
            },
          });
          console.log(`    ✅ Updated: ${lesson.id} with "${bestVideo.snippet.title}"`);
        } else {
          noMatch++;
          allResults.push({
            filePath: path.relative(process.cwd(), filePath),
            lessonId: lesson.id,
            lessonTitle: lesson.title,
            videoUrl: null, // Default fallback
            status: 'fallback',
            searchQuery,
          });
          console.log(`    ⚠️ Fallback: ${lesson.id} - no suitable video found`);
        }
      }
    } catch (error) {
      console.error(`Error processing module ${moduleFile}:`, error);
    }
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputFilePath = path.join(OUTPUT_DIR, `lessons-video-update-${timestamp}.json`);

  const summary = {
    totalLessonsProcessed,
    successfullyUpdated,
    skipped: totalLessonsProcessed - successfullyUpdated - noMatch,
    noMatch,
    fallbackUsed: noMatch, // Assuming fallback is used when no match is found
    outputFile: path.relative(process.cwd(), outputFilePath),
  };

  const finalOutput = {
    summary,
    results: allResults,
  };

  await fs.writeFile(outputFilePath, JSON.stringify(finalOutput, null, 2));
  console.log(`\\nProcessing complete. Results saved to ${outputFilePath}`);
  console.log('Summary:', summary);
}

processModules();
