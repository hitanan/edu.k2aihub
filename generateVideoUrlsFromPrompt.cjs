const fs = require('fs');
const path = require('path');

// Read API key from .envy file
function getApiKey() {
  try {
    const envyPath = path.join(__dirname, '.envy');
    const envyContent = fs.readFileSync(envyPath, 'utf8');
    const lines = envyContent.split('\n').map(line => line.trim()).filter(line => line && line.startsWith('AIza'));
    
    if (lines.length === 0) {
      throw new Error('No valid YouTube API keys found in .envy file');
    }
    
    // Use first available key
    return lines[0];
  } catch (error) {
    console.error('Error reading API key:', error.message);
    process.exit(1);
  }
}

const API_KEY = getApiKey();

// Rate limiting
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Validate video ID
async function validateVideoId(videoId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=id&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.pageInfo && data.pageInfo.totalResults > 0;
  } catch (error) {
    console.error(`Error validating video ${videoId}:`, error);
    return false;
  }
}

// Get video details
async function getVideoDetails(videoId) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.items && data.items.length > 0) {
      const video = data.items[0];
      const duration = parseDuration(video.contentDetails?.duration || 'PT0M0S');
      
      return {
        title: video.snippet.title,
        channel: video.snippet.channelTitle,
        publishedAt: video.snippet.publishedAt,
        language: video.snippet.defaultLanguage || 'unknown',
        thumbnail: video.snippet.thumbnails?.high?.url || video.snippet.thumbnails?.default?.url,
        duration: duration
      };
    }
    return null;
  } catch (error) {
    console.error(`Error getting details for video ${videoId}:`, error);
    return null;
  }
}

// Parse YouTube duration format (PT4M13S)
function parseDuration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  
  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;
  
  return hours * 60 + minutes + Math.round(seconds / 60);
}

// Search for YouTube videos
async function searchYouTubeVideos(query) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}&maxResults=10`
    );
    
    if (!response.ok) {
      if (response.status === 403) {
        console.warn('API quota exceeded, switching to KEY2...');
        // Try with KEY2 if available
        const key2 = getApiKey(); // This will try KEY2 if KEY fails
        if (key2 !== API_KEY) {
          const retryResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${key2}&maxResults=10`
          );
          if (retryResponse.ok) {
            return await retryResponse.json();
          }
        }
      }
      throw new Error(`YouTube API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error searching YouTube:`, error);
    return { items: [] };
  }
}

// Find best video for a lesson based on lesson title and description
async function findBestVideoForLesson(lessonTitle, lessonDescription, moduleName) {
  // Create search query with Vietnamese keywords
  const vietnameseKeywords = 'tutorial học tập giáo dục hướng dẫn';
  const searchQuery = `${lessonTitle} ${moduleName} ${vietnameseKeywords}`;
  
  console.log(`Search query: ${searchQuery}`);
  
  const searchResults = await searchYouTubeVideos(searchQuery);
  
  if (!searchResults.items || searchResults.items.length === 0) {
    return null;
  }
  
  // Score and rank videos
  for (const video of searchResults.items) {
    const videoId = video.id.videoId;
    const title = video.snippet.title.toLowerCase();
    const description = video.snippet.description.toLowerCase();
    
    // Validate video exists
    const isValid = await validateVideoId(videoId);
    if (!isValid) continue;
    
    // Get detailed video info
    const videoDetails = await getVideoDetails(videoId);
    if (!videoDetails) continue;
    
    // Scoring criteria
    let score = 0;
    
    // Prefer Vietnamese content
    if (videoDetails.language === 'vi' || title.includes('việt') || title.includes('tiếng việt')) {
      score += 100;
    }
    
    // Educational content indicators
    if (title.includes('tutorial') || title.includes('hướng dẫn') || title.includes('học')) {
      score += 50;
    }
    
    if (title.includes('giáo dục') || title.includes('bài học') || description.includes('education')) {
      score += 30;
    }
    
    // Duration preference (reasonable length for educational content)
    if (videoDetails.duration > 5 && videoDetails.duration < 120) {
      score += 20;
    }
    
    // Recent content preference
    const publishYear = new Date(video.snippet.publishedAt).getFullYear();
    if (publishYear >= 2020) {
      score += 10;
    }
    
    // If we found a good match, return it
    if (score >= 80) {
      return {
        videoId,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        videoDetails: {
          ...videoDetails,
          searchQuery: searchQuery
        },
        score
      };
    }
    
    // Add delay to respect rate limits
    await delay(200);
  }
  
  // If no high-scoring video found, return the first valid one
  const firstVideo = searchResults.items[0];
  if (firstVideo) {
    const videoId = firstVideo.id.videoId;
    const videoDetails = await getVideoDetails(videoId);
    
    if (videoDetails) {
      return {
        videoId,
        videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
        videoDetails: {
          ...videoDetails,
          searchQuery: searchQuery
        },
        score: 10
      };
    }
  }
  
  return null;
}

// Get lesson title and description from TypeScript file
function getLessonInfo(filePath, lessonId) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Find lesson by ID - handle complex nested structures
    const lessonPattern = new RegExp(`id:\\s*['"\`]${lessonId}['"\`][\\s\\S]*?title:\\s*['"\`]([^'"\`]+)['"\`]`, 'g');
    const titleMatch = lessonPattern.exec(fileContent);
    
    if (titleMatch) {
      const title = titleMatch[1];
      
      // Try to find description
      const descPattern = new RegExp(`id:\\s*['"\`]${lessonId}['"\`][\\s\\S]*?description:\\s*['"\`]([^'"\`]+)['"\`]`, 'g');
      const descMatch = descPattern.exec(fileContent);
      const description = descMatch ? descMatch[1] : '';
      
      return { title, description };
    }
    
    return null;
  } catch (error) {
    console.error(`Error reading lesson info from ${filePath}:`, error.message);
    return null;
  }
}

// Main function
async function main() {
  console.log('🎬 Starting Video URL Generation for Lessons...');
  console.log(`Using YouTube API key: ${API_KEY.substring(0, 10)}...`);
  
  // Read existing JSON file
  const inputFile = './src/lessons-video-20250823052926.json';
  if (!fs.existsSync(inputFile)) {
    console.error('❌ Input JSON file not found:', inputFile);
    process.exit(1);
  }
  
  const existingData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
  console.log(`📄 Found ${existingData.length} lessons in existing file`);
  
  // Filter lessons that need video URLs (status !== 'updated')
  const lessonsNeedingVideos = existingData.filter(lesson => lesson.status !== 'updated');
  console.log(`🎯 ${lessonsNeedingVideos.length} lessons need video URLs`);
  
  const results = [];
  let successCount = 0;
  let noMatchCount = 0;
  
  // Process each lesson
  for (let i = 0; i < lessonsNeedingVideos.length; i++) {
    const lesson = lessonsNeedingVideos[i];
    const progress = `[${i + 1}/${lessonsNeedingVideos.length}]`;
    
    console.log(`\\n${progress} Processing: ${lesson.lessonId}`);
    
    // Convert Windows path to Unix-style and make relative
    const relativePath = lesson.filePath.replace(/\\\\/g, '/').replace(/\\/g, '/').replace('C:/_me/education/education/', '');
    
    // Get lesson information from the TypeScript file
    const lessonInfo = getLessonInfo(relativePath, lesson.lessonId);
    if (!lessonInfo) {
      console.log(`⚠️ Could not extract lesson info - SKIPPED`);
      results.push({
        ...lesson,
        filePath: relativePath,
        status: 'skipped',
        reason: 'Could not extract lesson info'
      });
      continue;
    }
    
    console.log(`📖 Title: ${lessonInfo.title}`);
    
    // Extract module name from file path
    const moduleName = path.basename(relativePath, '.ts').replace(/-/g, ' ');
    
    try {
      const videoResult = await findBestVideoForLesson(lessonInfo.title, lessonInfo.description, moduleName);
      
      if (videoResult) {
        console.log(`✅ Found video: ${videoResult.videoDetails.title}`);
        console.log(`🎥 URL: ${videoResult.videoUrl}`);
        
        results.push({
          ...lesson,
          filePath: relativePath,
          newVideoUrl: videoResult.videoUrl,
          videoId: videoResult.videoId,
          status: 'updated',
          duration: videoResult.videoDetails.duration,
          videoDetails: videoResult.videoDetails,
          reason: 'Video found and validated'
        });
        
        successCount++;
      } else {
        console.log(`❌ No suitable video found`);
        results.push({
          ...lesson,
          filePath: relativePath,
          status: 'no_match',
          reason: 'No suitable video found'
        });
        noMatchCount++;
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${lesson.lessonId}:`, error.message);
      results.push({
        ...lesson,
        filePath: relativePath,
        status: 'error',
        reason: error.message
      });
      noMatchCount++;
    }
    
    // Add delay to respect API rate limits
    await delay(300);
  }
  
  // Generate timestamp for output filename
  const timestamp = new Date().toISOString().replace(/[:.]/g, '').slice(0, 15);
  const outputFile = `./src/lessons-video-${timestamp}.json`;
  
  // Save results
  fs.writeFileSync(outputFile, JSON.stringify(results, null, 2), 'utf8');
  
  console.log('\\n==================================================');
  console.log('📋 VIDEO URL GENERATION SUMMARY');
  console.log('==================================================');
  console.log(`✅ Successfully found videos: ${successCount}`);
  console.log(`❌ No match found: ${noMatchCount}`);
  console.log(`📊 Total processed: ${lessonsNeedingVideos.length}`);
  console.log(`📄 Output file: ${outputFile}`);
  
  if (successCount > 0) {
    console.log('\\n🎉 Video URLs have been generated!');
    console.log(`💡 Next step: Use the update script to apply these URLs to lesson files.`);
  } else {
    console.log('\\n😔 No new video URLs were generated.');
  }
}

// Run the script
main().catch(error => {
  console.error('❌ Script failed:', error);
  process.exit(1);
});