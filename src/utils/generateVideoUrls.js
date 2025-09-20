import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __dirname = path.dirname(__filename);

// List of modules to process (12 modules as specified)
const MODULES_TO_PROCESS = [
  'digital-marketing',
  'financial-literacy',
  'green-technology',
  'game-development',
  'ai-art-creative-tech',
  'cybersecurity',
  'biotechnology',
  'python',
  'arduino',
  'robotics',
  'blockchain-technology',
  'renewable-energy',
];

// Default video URL to replace
const DEFAULT_VIDEO_URL = null;

// Read API keys from .envy file
function getApiKeys() {
  try {
    const envyPath = path.join(process.cwd(), '.envy');
    const envyContent = fs.readFileSync(envyPath, 'utf8');
    return envyContent
      .split(/\r?\n/)
      .filter((line) => line.trim() && !line.startsWith('#'))
      .map((line) => line.trim());
  } catch (error) {
    console.error('Error reading .envy file:', error);
    return [];
  }
}

// Parse lessons from TypeScript file content
function parseLessonsFromFile(fileContent, moduleName) {
  try {
    // Extract lessons array using regex
    const lessonsArrayRegex = /export const \w+Lessons[^=]*=\s*\[([\s\S]*?)\];/;
    const match = fileContent.match(lessonsArrayRegex);

    if (!match) {
      console.log(`⚠️ Could not find lessons array in ${moduleName}`);
      return [];
    }

    // Extract individual lesson objects
    const lessonsContent = match[1];
    const lessonObjects = [];

    // More robust regex to extract lesson objects
    const lessonRegex =
      /\{\s*(?:[^{}]|\{[^{}]*\})*id:\s*['"`]([^'"`]+)['"`](?:[^{}]|\{[^{}]*\})*title:\s*['"`]([^'"`]*?)['"`](?:[^{}]|\{[^{}]*\})*?\}/gs;

    let lessonMatch;
    while ((lessonMatch = lessonRegex.exec(lessonsContent)) !== null) {
      const lessonText = lessonMatch[0];

      // Extract videoUrl if present
      const videoUrlMatch = lessonText.match(/videoUrl:\s*['"`]([^'"`]+)['"`]/);
      const videoUrl = videoUrlMatch ? videoUrlMatch[1] : undefined;

      lessonObjects.push({
        id: lessonMatch[1],
        title: lessonMatch[2],
        videoUrl: videoUrl,
      });
    }

    console.log(`Parsed ${lessonObjects.length} lessons from ${moduleName}`);
    return lessonObjects;
  } catch (error) {
    console.error(`Error parsing lessons from ${moduleName}:`, error);
    return [];
  }
}

// Rate limiting delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Search YouTube for relevant videos
async function searchYouTubeVideo(query, apiKey) {
  try {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedQuery}&type=video&maxResults=5&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error('YouTube API Error:', data.error);
      return null;
    }

    if (data.pageInfo.totalResults === 0) {
      return null;
    }

    // Select best video (prioritize educational content)
    const videos = data.items.filter((item) => {
      const title = item.snippet.title.toLowerCase();
      const channel = item.snippet.channelTitle.toLowerCase();
      const description = item.snippet.description.toLowerCase();

      // Prioritize educational channels and content
      const educationalKeywords = ['tutorial', 'learn', 'education', 'course', 'lesson', 'guide', 'explained'];
      const educationalChannels = ['ted', 'khan academy', 'coursera', 'edx', 'crash course'];

      const hasEducationalContent = educationalKeywords.some(
        (keyword) => title.includes(keyword) || description.includes(keyword),
      );
      const isEducationalChannel = educationalChannels.some((channel_name) => channel.includes(channel_name));

      return hasEducationalContent || isEducationalChannel;
    });

    const selectedVideo = videos.length > 0 ? videos[0] : data.items[0];

    return {
      videoId: selectedVideo.id.videoId,
      title: selectedVideo.snippet.title,
      channel: selectedVideo.snippet.channelTitle,
      thumbnail: selectedVideo.snippet.thumbnails.high?.url || selectedVideo.snippet.thumbnails.default.url,
      publishedAt: selectedVideo.snippet.publishedAt,
    };
  } catch (error) {
    console.error('Error searching YouTube:', error);
    return null;
  }
}

// Process a single lesson
async function processLesson(lesson, filePath, moduleName, apiKeys, currentKeyIndex = 0) {
  console.log(`Processing lesson: ${lesson.id} - ${lesson.title}`);

  // Skip if lesson already has a valid video URL (not default)
  if (lesson.videoUrl && lesson.videoUrl !== DEFAULT_VIDEO_URL) {
    return {
      filePath,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      currentVideoUrl: lesson.videoUrl,
      newVideoUrl: null,
      status: 'skipped',
      reason: 'lesson already has valid video URL',
    };
  }

  // Create search query
  const searchQuery = `${lesson.title} ${moduleName}`;

  // Try with current API key
  if (currentKeyIndex >= apiKeys.length) {
    return {
      filePath,
      lessonId: lesson.id,
      lessonTitle: lesson.title,
      currentVideoUrl: lesson.videoUrl || 'undefined',
      newVideoUrl: null,
      status: 'no_match',
      reason: 'all API keys exhausted',
    };
  }

  const apiKey = apiKeys[currentKeyIndex];
  const videoResult = await searchYouTubeVideo(searchQuery, apiKey);

  if (!videoResult) {
    console.log(`⚠️ No video found for ${lesson.id}, trying next API key...`);
    await delay(1000);
    return processLesson(lesson, filePath, moduleName, apiKeys, currentKeyIndex + 1);
  }

  const newVideoUrl = `https://www.youtube.com/watch?v=${videoResult.videoId}`;
  console.log(`✅ Updated: ${lesson.id} with ${videoResult.title}`);

  await delay(1500); // Rate limiting

  return {
    filePath,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    currentVideoUrl: lesson.videoUrl || 'undefined',
    newVideoUrl,
    status: 'updated',
    searchQuery,
    videoDetails: {
      title: videoResult.title,
      channel: videoResult.channel,
      thumbnail: videoResult.thumbnail,
      publishedAt: videoResult.publishedAt,
    },
  };
}

// Process a single module
async function processModule(moduleName, apiKeys) {
  console.log(`\n🔄 Processing module: ${moduleName}`);

  const filePath = `src/data/${moduleName}.ts`;
  const fullPath = path.join(process.cwd(), filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️ Module file not found: ${filePath}`);
    return [];
  }

  try {
    // Read and parse the module file content
    const fileContent = fs.readFileSync(fullPath, 'utf8');
    const lessons = parseLessonsFromFile(fileContent, moduleName);

    if (lessons.length === 0) {
      console.log(`⚠️ No lessons found in ${moduleName}`);
      return [];
    }

    console.log(`Found ${lessons.length} lessons in ${moduleName}`);

    const results = [];
    for (let i = 0; i < lessons.length; i++) {
      console.log(`Processing lesson ${i + 1}/${lessons.length} in module ${moduleName}`);
      const result = await processLesson(lessons[i], filePath, moduleName, apiKeys);
      results.push(result);
    }

    return results;
  } catch (error) {
    console.error(`Error processing module ${moduleName}:`, error);
    return [];
  }
}

// Main execution function
async function main() {
  console.log('🚀 Starting YouTube video URL generation for modules...');

  const apiKeys = getApiKeys();
  if (apiKeys.length === 0) {
    console.error('❌ No API keys found in .envy file');
    return;
  }

  console.log(`Found ${apiKeys.length} API keys`);

  const allResults = [];

  for (const moduleName of MODULES_TO_PROCESS) {
    console.log(`\n📋 Starting module: ${moduleName}`);
    const moduleResults = await processModule(moduleName, apiKeys);
    allResults.push(...moduleResults);
    console.log(`✅ Completed module: ${moduleName} (${moduleResults.length} lessons processed)`);
  }

  // Save results to JSON file
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = `src/data/lessons-video-update-${timestamp}.json`;

  const summary = {
    totalLessonsProcessed: allResults.length,
    successfullyUpdated: allResults.filter((r) => r.status === 'updated').length,
    fallbackUsed: allResults.filter((r) => r.status === 'fallback').length,
    skipped: allResults.filter((r) => r.status === 'skipped').length,
    noMatch: allResults.filter((r) => r.status === 'no_match').length,
  };

  const output = {
    timestamp: new Date().toISOString(),
    summary,
    results: allResults,
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  console.log('\n📊 Summary:');
  console.log(`Total lessons processed: ${summary.totalLessonsProcessed}`);
  console.log(`Successfully updated: ${summary.successfullyUpdated}`);
  console.log(`Skipped (already valid): ${summary.skipped}`);
  console.log(`No match found: ${summary.noMatch}`);
  console.log(`\n💾 Results saved to: ${outputPath}`);
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { main };
