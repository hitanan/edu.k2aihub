#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

// Load the JSON files
const nonDefaultVideoUrls = require('../../non-default-video-urls.json');
const lessonVideoUrls = require('../lesson-video-urls.json');

console.log('🎬 Starting Video URL Update Process...\n');

// Filter for updated entries from non-default-video-urls.json
const nonDefaultUpdates = nonDefaultVideoUrls.filter((entry) => entry.status === 'updated');

// Get all video updates from lesson-video-urls.json
const lessonUpdates = lessonVideoUrls.videoUpdates || [];

// Combine all updates
const allUpdates = [
  ...nonDefaultUpdates.map((entry) => ({
    filePath: entry.filePath,
    lessonId: entry.lessonId,
    newVideoUrl: entry.newVideoUrl,
    imageUrl: entry.videoDetails?.thumbnail || null,
    source: 'non-default-video-urls.json',
  })),
  ...lessonUpdates.map((entry) => ({
    filePath: `src/data/${entry.file}`,
    lessonId: entry.lessonId,
    newVideoUrl: entry.suggestedVideoUrl,
    imageUrl: entry.videoDetails?.thumbnail || null,
    source: 'lesson-video-urls.json',
  })),
];

console.log(`📊 Total video updates to process: ${allUpdates.length}\n`);

let successCount = 0;
let skipCount = 0;
let errorCount = 0;

// Process each update
for (const update of allUpdates) {
  try {
    const filePath = path.resolve(__dirname, '../../', update.filePath);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${update.filePath} - SKIPPED`);
      skipCount++;
      continue;
    }

    // Read file content
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Find the lesson by ID using a more flexible regex
    const lessonRegex = new RegExp(
      `(\\{[^}]*id:\\s*['"\`]${update.lessonId}['"\`][^}]*?)` + `(videoUrl:\\s*['"\`][^'"\`]*['"\`])` + `([^}]*?\\})`,
      'gs',
    );

    const matches = [...fileContent.matchAll(lessonRegex)];

    if (matches.length === 0) {
      console.log(`⚠️ Lesson ${update.lessonId} not found in ${update.filePath} - SKIPPED`);
      skipCount++;
      continue;
    }

    let updatedContent = fileContent;
    let wasUpdated = false;

    // Update videoUrl
    if (update.newVideoUrl) {
      updatedContent = updatedContent.replace(
        new RegExp(`(id:\\s*['"\`]${update.lessonId}['"\`][^}]*?)videoUrl:\\s*['"\`][^'"\`]*['"\`]`, 'g'),
        `$1videoUrl: '${update.newVideoUrl}'`,
      );
      wasUpdated = true;
    }

    // Update imageUrl if provided
    if (update.imageUrl) {
      // Check if imageUrl property exists
      if (updatedContent.includes(`id: '${update.lessonId}'`) && updatedContent.includes('imageUrl:')) {
        updatedContent = updatedContent.replace(
          new RegExp(`(id:\\s*['"\`]${update.lessonId}['"\`][^}]*?)imageUrl:\\s*['"\`][^'"\`]*['"\`]`, 'g'),
          `$1imageUrl: '${update.imageUrl}'`,
        );
      } else if (updatedContent.includes(`id: '${update.lessonId}'`)) {
        // Add imageUrl property after videoUrl
        updatedContent = updatedContent.replace(
          new RegExp(`(id:\\s*['"\`]${update.lessonId}['"\`][^}]*?videoUrl:\\s*['"\`][^'"\`]*['"\`])`, 'g'),
          `$1,\n    imageUrl: '${update.imageUrl}'`,
        );
      }
    }

    if (wasUpdated) {
      // Write updated content back to file
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(
        `✅ Updated ${update.lessonId} in ${update.filePath.replace('src/data/', '')} (from ${update.source})`,
      );
      successCount++;
    } else {
      console.log(`⚠️ No updates made for ${update.lessonId} in ${update.filePath} - SKIPPED`);
      skipCount++;
    }
  } catch (error) {
    console.log(`❌ Error processing ${update.lessonId} in ${update.filePath}: ${error.message}`);
    errorCount++;
  }
}

// Summary
console.log('\n' + '='.repeat(50));
console.log('📋 VIDEO URL UPDATE SUMMARY');
console.log('='.repeat(50));
console.log(`✅ Successfully updated: ${successCount}`);
console.log(`⚠️ Skipped: ${skipCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`📊 Total processed: ${successCount + skipCount + errorCount}`);

if (successCount > 0) {
  console.log('\n🎉 Video URL updates completed successfully!');
  console.log('💡 Tip: Run "npx tsc --noEmit" to check for any TypeScript errors.');
} else {
  console.log('\n😔 No video URLs were updated. Please check the input files and try again.');
}
