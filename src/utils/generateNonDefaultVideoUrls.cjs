/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require('fs');
const path = require('path');
const https = require('https');
const { promisify } = require('util');

const sleep = promisify(setTimeout);

// Configuration
const DEFAULT_VIDEO_URL = 'https://www.youtube.com/watch?v=vd2dtkMINIw';
const API_KEY = fs.readFileSync(path.join(__dirname, '.envy'), 'utf-8').trim();
const DATA_DIR = path.join(__dirname, 'src', 'data');
const OUTPUT_FILE = path.join(__dirname, 'non-default-video-urls.json');

// Helper function for YouTube API calls
async function makeYouTubeRequest(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      })
      .on('error', reject);
  });
}

// Search for YouTube videos
async function searchYouTube(query, maxResults = 5) {
  const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=${maxResults}&key=${API_KEY}`;

  try {
    const response = await makeYouTubeRequest(searchUrl);
    return response.items || [];
  } catch (error) {
    console.error('YouTube search error:', error.message);
    return [];
  }
}

// Validate video exists
async function validateVideo(videoId) {
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=id&id=${videoId}&key=${API_KEY}`;

  try {
    const response = await makeYouTubeRequest(videoUrl);
    return response.pageInfo.totalResults > 0;
  } catch (error) {
    console.error('Video validation error:', error.message);
    return false;
  }
}

// Extract lessons from a TypeScript data file
function extractLessonsFromFile(filePath, fileName) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Find lesson arrays - look for patterns like "export const XxxLessons"
    const lessonArrayPattern = /export\s+const\s+\w*[Ll]essons?[^=]*=\s*\[([\s\S]*?)\];/g;
    const lessons = [];
    let match;

    while ((match = lessonArrayPattern.exec(content)) !== null) {
      const arrayContent = match[1];

      // Extract individual lesson objects
      const lessonPattern =
        /\{\s*id:\s*['"]([^'"]+)['"][^}]*title:\s*['"]([^'"]+)['"][^}]*?videoUrl\s*:\s*['"]([^'"]+)['"][^}]*?\}/gs;
      let lessonMatch;

      while ((lessonMatch = lessonPattern.exec(arrayContent)) !== null) {
        const [, id, title, videoUrl] = lessonMatch;

        // Only include lessons that DON'T use the default video URL
        if (videoUrl && videoUrl.trim() !== DEFAULT_VIDEO_URL) {
          lessons.push({
            id: id.trim(),
            title: title.trim(),
            videoUrl: videoUrl.trim(),
            fileName,
          });
        }
      }
    }

    return lessons;
  } catch (error) {
    console.error(`Error reading ${fileName}:`, error.message);
    return [];
  }
}

// Get all lessons from data files that don't use default video URL
function getAllNonDefaultLessons() {
  const lessons = [];

  try {
    const files = fs.readdirSync(DATA_DIR).filter((file) => file.endsWith('.ts'));

    for (const file of files) {
      const filePath = path.join(DATA_DIR, file);
      const fileLessons = extractLessonsFromFile(filePath, file);
      lessons.push(...fileLessons);
    }
  } catch (error) {
    console.error('Error scanning data directory:', error.message);
  }

  return lessons;
}

// Generate search query for a lesson
function generateSearchQuery(lesson, moduleName) {
  const moduleKeywords = {
    python: 'Python programming tutorial Vietnamese',
    arduino: 'Arduino programming IoT tutorial Vietnamese',
    robotics: 'robotics tutorial Vietnamese',
    'ai-art': 'AI art creative technology Vietnamese',
    cybersecurity: 'cybersecurity ethical hacking Vietnamese',
    biotechnology: 'biotechnology life sciences Vietnamese',
    'digital-marketing': 'digital marketing Vietnamese',
    'financial-literacy': 'financial literacy fintech Vietnamese',
    'green-technology': 'green technology sustainability Vietnamese',
    'game-development': 'game development programming Vietnamese',
    blockchain: 'blockchain cryptocurrency Vietnamese',
    'data-science': 'data science analytics Vietnamese',
  };

  const moduleKeyword = moduleKeywords[moduleName] || 'educational tutorial Vietnamese';

  // Create search query prioritizing Vietnamese content
  return `${lesson.title} ${moduleKeyword}`;
}

// Find best video for a lesson
async function findBestVideo(lesson) {
  const moduleName = lesson.fileName.replace('.ts', '');
  const query = generateSearchQuery(lesson, moduleName);

  console.log(`🔍 Searching for: ${lesson.id} (${lesson.title})`);

  try {
    const searchResults = await searchYouTube(query, 10);

    if (searchResults.length === 0) {
      return {
        status: 'no_match',
        reason: 'No search results returned',
      };
    }

    // Score and rank videos
    for (const video of searchResults) {
      const videoId = video.id.videoId;
      const title = video.snippet.title;
      const description = video.snippet.description;
      const channelTitle = video.snippet.channelTitle;

      // Validate video exists
      const isValid = await validateVideo(videoId);
      if (!isValid) {
        console.log(`⚠️ Video ${videoId} not accessible, skipping...`);
        continue;
      }

      // Calculate relevance score
      let score = 0;

      // Prefer Vietnamese content
      if (title.match(/tiếng việt|vietnamese|việt nam/i) || description.match(/tiếng việt|vietnamese|việt nam/i)) {
        score += 20;
      }

      // Prefer educational channels
      if (channelTitle.match(/edu|learn|tutorial|academy|university|school|course|giáo dục|học|hướng dẫn/i)) {
        score += 15;
      }

      // Check title relevance
      const titleWords = lesson.title
        .toLowerCase()
        .split(' ')
        .filter((w) => w.length > 2);
      const titleMatches = titleWords.filter(
        (word) => title.toLowerCase().includes(word) || description.toLowerCase().includes(word),
      ).length;
      score += titleMatches * 5;

      // Prefer reasonable duration (not too long/short)
      if (video.snippet.duration) {
        const duration = video.snippet.duration;
        if (duration.includes('PT') && !duration.includes('H')) {
          // Less than 1 hour
          score += 5;
        }
      }

      if (score > 10) {
        // Minimum relevance threshold
        return {
          status: 'updated',
          videoId,
          newVideoUrl: `https://www.youtube.com/watch?v=${videoId}`,
          reason: `matched by title and content (score: ${score})`,
          videoTitle: title,
          channelTitle: channelTitle,
        };
      }

      // Add delay to avoid rate limiting
      await sleep(200);
    }

    return {
      status: 'no_match',
      reason: 'No suitable educational video found with sufficient relevance score',
    };
  } catch (error) {
    return {
      status: 'no_match',
      reason: `API error: ${error.message}`,
    };
  }
}

// Main processing function
async function processNonDefaultLessons() {
  console.log('🚀 Starting non-default video URL generation...\n');

  const lessons = getAllNonDefaultLessons();
  console.log(`📚 Found ${lessons.length} lessons with non-default video URLs\n`);

  if (lessons.length === 0) {
    console.log('✅ No lessons found with non-default video URLs. All lessons are using the default video.');
    return;
  }

  const results = [];
  let processed = 0;

  for (const lesson of lessons) {
    processed++;
    console.log(`\n[${processed}/${lessons.length}] Processing: ${lesson.fileName} -> ${lesson.id}`);

    const result = await findBestVideo(lesson);

    const output = {
      filePath: `src/data/${lesson.fileName}`,
      lessonId: lesson.id,
      originalVideoUrl: lesson.videoUrl,
      newVideoUrl: result.newVideoUrl || null,
      videoId: result.videoId || null,
      status: result.status,
      reason: result.reason || 'processed',
      videoTitle: result.videoTitle || null,
      channelTitle: result.channelTitle || null,
    };

    results.push(output);

    console.log(`   Status: ${result.status}`);
    if (result.status === 'updated') {
      console.log(`   ✅ Found: ${result.videoTitle}`);
      console.log(`   🔗 URL: ${result.newVideoUrl}`);
    } else {
      console.log(`   ❌ ${result.reason}`);
    }

    // Add delay between requests
    await sleep(1000);
  }

  // Save results
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));

  // Summary
  const updated = results.filter((r) => r.status === 'updated').length;
  const noMatch = results.filter((r) => r.status === 'no_match').length;

  console.log('\n' + '='.repeat(60));
  console.log('📊 SUMMARY REPORT');
  console.log('='.repeat(60));
  console.log(`Total lessons processed: ${results.length}`);
  console.log(`✅ Successfully updated: ${updated}`);
  console.log(`❌ No suitable match: ${noMatch}`);
  console.log(`📄 Results saved to: ${OUTPUT_FILE}`);

  if (updated > 0) {
    console.log('\n🎯 SUCCESSFULLY UPDATED LESSONS:');
    results
      .filter((r) => r.status === 'updated')
      .forEach((result, index) => {
        console.log(`${index + 1}. ${result.lessonId} -> ${result.videoTitle}`);
      });
  }

  if (noMatch > 0) {
    console.log('\n⚠️ LESSONS WITHOUT SUITABLE MATCHES:');
    results
      .filter((r) => r.status === 'no_match')
      .forEach((result, index) => {
        console.log(`${index + 1}. ${result.lessonId}: ${result.reason}`);
      });
  }
}

// Run the script
if (require.main === module) {
  processNonDefaultLessons().catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
}

module.exports = { processNonDefaultLessons };
