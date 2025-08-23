const fs = require('fs');

async function updateLessonFiles() {
  console.log('🔄 Starting lesson file updates...');
  
  // Read the updated JSON file
  const updatedFile = 'lessons-video-updated-1755931317790.json';
  console.log('📄 Reading:', updatedFile);
  
  const lessonsData = JSON.parse(fs.readFileSync(updatedFile, 'utf8'));
  
  let processedCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const lesson of lessonsData) {
    processedCount++;
    
    // Only process lessons with video_found status or those that have newVideoUrl
    if (lesson.status !== 'video_found' || !lesson.newVideoUrl) {
      console.log(`⏭️ Skipping ${lesson.lessonId} - Status: ${lesson.status}`);
      skippedCount++;
      continue;
    }
    
    try {
      console.log(`\n📂 Processing ${lesson.lessonId} in ${lesson.filePath}...`);
      
      // Read the TypeScript file
      const filePath = lesson.filePath.replace('C:\\_me\\education\\education\\', '');
      let fileContent = fs.readFileSync(filePath, 'utf8');
      
      // Find the lesson by ID
      const lessonIdPattern = new RegExp(`(\\s+id:\\s*['\`"])${lesson.lessonId}(['\`"],?)`, 'g');
      const lessonMatch = lessonIdPattern.exec(fileContent);
      
      if (!lessonMatch) {
        console.log(`❌ Lesson ID ${lesson.lessonId} not found in ${filePath}`);
        skippedCount++;
        continue;
      }
      
      console.log(`✅ Found lesson ${lesson.lessonId}`);
      
      // Find the lesson object boundaries
      let lessonStart = lessonMatch.index;
      let braceCount = 0;
      let i = lessonMatch.index;
      
      // Go backwards to find the opening brace
      while (i > 0) {
        if (fileContent[i] === '{') {
          lessonStart = i;
          break;
        }
        i--;
      }
      
      // Go forwards to find the closing brace
      i = lessonStart;
      let lessonEnd = -1;
      while (i < fileContent.length) {
        if (fileContent[i] === '{') braceCount++;
        if (fileContent[i] === '}') {
          braceCount--;
          if (braceCount === 0) {
            lessonEnd = i;
            break;
          }
        }
        i++;
      }
      
      if (lessonEnd === -1) {
        console.log(`❌ Could not find lesson object boundaries for ${lesson.lessonId}`);
        skippedCount++;
        continue;
      }
      
      const lessonText = fileContent.substring(lessonStart, lessonEnd + 1);
      console.log(`📝 Lesson object found (${lessonText.length} chars)`);
      
      // Check if videoUrl field exists
      const videoUrlPattern = /videoUrl:\s*['\`"]([^'\`"]*)['\`"]/;
      const videoUrlMatch = videoUrlPattern.exec(lessonText);
      
      let updatedContent;
      
      if (videoUrlMatch) {
        // Update existing videoUrl
        console.log(`🔄 Updating existing videoUrl: ${videoUrlMatch[1]} → ${lesson.newVideoUrl}`);
        const oldVideoUrl = videoUrlMatch[1];
        updatedContent = fileContent.replace(
          new RegExp(`(videoUrl:\\s*['\`"])${oldVideoUrl.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}(['\`"])`, 'g'),
          `$1${lesson.newVideoUrl}$2`
        );
      } else {
        // Add videoUrl field
        console.log(`➕ Adding videoUrl field: ${lesson.newVideoUrl}`);
        
        // Find a good place to insert videoUrl - after imageUrl or duration
        const insertAfterPattern = /(imageUrl:\s*['\`"][^'\`"]*['\`"],?\s*\n|duration:\s*['\`"][^'\`"]*['\`"],?\s*\n)/;
        const insertMatch = insertAfterPattern.exec(lessonText);
        
        if (insertMatch) {
          const insertPoint = lessonStart + insertMatch.index + insertMatch[0].length;
          const indent = insertMatch[0].match(/\n(\s*)/)?.[1] || '  ';
          const videoUrlLine = `${indent}videoUrl: '${lesson.newVideoUrl}',\n`;
          
          updatedContent = fileContent.slice(0, insertPoint) + videoUrlLine + fileContent.slice(insertPoint);
        } else {
          // Fallback: insert before the closing brace
          const indent = lessonText.match(/\n(\s*)}$/)?.[1] || '  ';
          const videoUrlLine = `${indent}videoUrl: '${lesson.newVideoUrl}',\n`;
          updatedContent = fileContent.slice(0, lessonEnd) + videoUrlLine + fileContent.slice(lessonEnd);
        }
      }
      
      // Write the updated content back to file
      fs.writeFileSync(filePath, updatedContent);
      
      console.log(`✅ Updated ${lesson.lessonId} successfully`);
      updatedCount++;
      
    } catch (error) {
      console.log(`❌ Error processing ${lesson.lessonId}: ${error.message}`);
      skippedCount++;
    }
  }
  
  console.log(`\n🎉 Update completed!`);
  console.log(`📊 Processed: ${processedCount} lessons`);
  console.log(`✅ Updated: ${updatedCount} lessons`);
  console.log(`⏭️ Skipped: ${skippedCount} lessons`);
}

updateLessonFiles().catch(console.error);