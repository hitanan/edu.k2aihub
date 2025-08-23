const fs = require('fs');

console.log('🎯 Processing found video URLs...');

// Read the original file
const originalFile = 'src/lessons-video-20250823052926.json';
console.log('📄 Reading:', originalFile);

const lessonsData = JSON.parse(fs.readFileSync(originalFile, 'utf8'));

// Video URLs found from the script output
const foundVideos = {
  'deep-learning-foundations': 'https://www.youtube.com/watch?v=Nb3_rq5Xnic',
  'computer-vision-applications': 'https://www.youtube.com/watch?v=-Ig2ibBkc7Q',
  'nlp-language-models': 'https://www.youtube.com/watch?v=Nb3_rq5Xnic',
  'reinforcement-learning-systems': 'https://www.youtube.com/watch?v=11Bkg32j_G4',
  'ai-content-creation-monetization': 'https://www.youtube.com/watch?v=tIXi1L9ek2U',
  'ai-healthcare-wellness': 'https://www.youtube.com/watch?v=3Gkke_9WU10',
  'ai-financial-planning-investment': 'https://www.youtube.com/watch?v=_N8C55pPbMI',
  'office-work': 'https://www.youtube.com/watch?v=TXxuccRXo-k',
  'creative-design': 'https://www.youtube.com/watch?v=Lm7qG6pzvmA',
  'education-learning': 'https://www.youtube.com/watch?v=TXxuccRXo-k',
  'business-marketing': 'https://www.youtube.com/watch?v=Lm7qG6pzvmA',
  'daily-life': 'https://www.youtube.com/watch?v=M5xe04_4YrU',
  'programming-dev': 'https://www.youtube.com/watch?v=CQqBQVH5PcI',
  'arduino-setup': 'https://www.youtube.com/watch?v=F1chhazAlVo'
};

let updatedCount = 0;

// Update lessons with found video URLs
for (let lesson of lessonsData) {
  if (foundVideos[lesson.lessonId]) {
    lesson.newVideoUrl = foundVideos[lesson.lessonId];
    lesson.status = 'video_found';
    updatedCount++;
    console.log('✅ Updated:', lesson.lessonId, '-', foundVideos[lesson.lessonId]);
  }
}

// Save updated file
const outputFile = 'lessons-video-updated-' + Date.now() + '.json';
fs.writeFileSync(outputFile, JSON.stringify(lessonsData, null, 2));

console.log('\n🎉 Process completed!');
console.log('📊 Updated', updatedCount, 'lessons with video URLs');
console.log('💾 Saved to:', outputFile);