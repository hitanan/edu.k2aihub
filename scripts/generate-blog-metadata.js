#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to generate reading time
function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} phút đọc`;
}

// Helper function to generate metadata based on content
function generateMetadata(fileName, content) {
  const baseName = fileName.replace('.md', '');
  const lines = content.split('\n');
  
  // Extract title from first heading or use filename
  let title = baseName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const firstHeading = lines.find(line => line.startsWith('# '));
  if (firstHeading) {
    title = firstHeading.replace('# ', '').trim();
  }
  
  // Extract description from first paragraph
  let description = '';
  const firstParagraph = lines.find(line => 
    line.trim().length > 50 && 
    !line.startsWith('#') && 
    !line.startsWith('---') &&
    !line.startsWith('```')
  );
  
  if (firstParagraph) {
    description = firstParagraph.trim();
    // Truncate if too long
    if (description.length > 160) {
      description = description.substring(0, 157) + '...';
    }
  } else {
    description = `Tài liệu về ${title} trong hệ thống K2AiHub - Nền tảng học tập thông minh.`;
  }
  
  // Generate category based on content and filename
  let category = "Tài Liệu";
  if (baseName.includes('research') || baseName.includes('nghien-cuu')) {
    category = "Nghiên Cứu";
  } else if (baseName.includes('game') || baseName.includes('tro-choi')) {
    category = "Trò Chơi";
  } else if (baseName.includes('module') || baseName.includes('learning')) {
    category = "Học Tập";
  } else if (baseName.includes('technical') || baseName.includes('development')) {
    category = "Kỹ Thuật";
  } else if (baseName.includes('analysis') || baseName.includes('report')) {
    category = "Phân Tích";
  } else if (baseName.includes('guide') || baseName.includes('huong-dan')) {
    category = "Hướng Dẫn";
  }
  
  // Generate tags based on content
  const tags = [];
  const contentLower = content.toLowerCase();
  
  if (contentLower.includes('k2aihub') || contentLower.includes('k2ai')) tags.push('K2AiHub');
  if (contentLower.includes('game') || contentLower.includes('trò chơi')) tags.push('trò chơi giáo dục');
  if (contentLower.includes('learning') || contentLower.includes('học tập')) tags.push('học tập');
  if (contentLower.includes('ai') || contentLower.includes('artificial intelligence')) tags.push('trí tuệ nhân tạo');
  if (contentLower.includes('3d') || contentLower.includes('three dimensional')) tags.push('3D');
  if (contentLower.includes('vietnam') || contentLower.includes('việt nam')) tags.push('Việt Nam');
  if (contentLower.includes('education') || contentLower.includes('giáo dục')) tags.push('giáo dục');
  if (contentLower.includes('technology') || contentLower.includes('công nghệ')) tags.push('công nghệ');
  if (contentLower.includes('research') || contentLower.includes('nghiên cứu')) tags.push('nghiên cứu');
  if (contentLower.includes('development') || contentLower.includes('phát triển')) tags.push('phát triển');
  if (contentLower.includes('module')) tags.push('module giáo dục');
  if (contentLower.includes('stem')) tags.push('STEM');
  if (contentLower.includes('geography') || contentLower.includes('địa lý')) tags.push('địa lý');
  if (contentLower.includes('robotics') || contentLower.includes('robot')) tags.push('robotics');
  if (contentLower.includes('programming') || contentLower.includes('lập trình')) tags.push('lập trình');
  
  // Ensure minimum tags
  if (tags.length < 3) {
    tags.push('K2AiHub', 'giáo dục', 'công nghệ');
  }
  
  // Limit to 5 tags max
  const finalTags = [...new Set(tags)].slice(0, 5);
  
  // Determine if featured based on content importance
  const featured = baseName.includes('k2aihub') || 
                  baseName.includes('overview') || 
                  baseName.includes('introduction') ||
                  baseName.includes('research') ||
                  content.length > 5000;
  
  return {
    title,
    description,
    date: "2025-08-27", // Current date
    author: "K2AiHub Development Team",
    category,
    tags: finalTags,
    featured,
    readingTime: calculateReadingTime(content)
  };
}

// Check if file has frontmatter
function hasFrontmatter(content) {
  return content.trim().startsWith('---');
}

// Generate frontmatter string
function generateFrontmatter(metadata) {
  return `---
title: "${metadata.title}"
description: "${metadata.description}"
date: "${metadata.date}"
author: "${metadata.author}"
category: "${metadata.category}"
tags: [${metadata.tags.map(tag => `"${tag}"`).join(', ')}]
featured: ${metadata.featured}
readingTime: "${metadata.readingTime}"
---

`;
}

// Process all files in docs folder
function processDocsFolder() {
  const docsPath = path.join(__dirname, '../docs');
  
  if (!fs.existsSync(docsPath)) {
    console.error('Docs folder not found!');
    return;
  }
  
  const files = fs.readdirSync(docsPath).filter(file => file.endsWith('.md'));
  let processedCount = 0;
  let skippedCount = 0;
  
  console.log(`Found ${files.length} markdown files in docs folder\n`);
  
  files.forEach(fileName => {
    const filePath = path.join(docsPath, fileName);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (hasFrontmatter(content)) {
      console.log(`✅ SKIP: ${fileName} (already has metadata)`);
      skippedCount++;
      return;
    }
    
    console.log(`🔄 Processing: ${fileName}`);
    
    try {
      const metadata = generateMetadata(fileName, content);
      const frontmatter = generateFrontmatter(metadata);
      const newContent = frontmatter + content;
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ADDED: Metadata added to ${fileName}`);
      console.log(`   Title: ${metadata.title}`);
      console.log(`   Category: ${metadata.category}`);
      console.log(`   Tags: ${metadata.tags.join(', ')}`);
      console.log(`   Reading time: ${metadata.readingTime}\n`);
      
      processedCount++;
    } catch (error) {
      console.error(`❌ ERROR processing ${fileName}:`, error.message);
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total files: ${files.length}`);
  console.log(`   Processed: ${processedCount}`);
  console.log(`   Skipped: ${skippedCount}`);
  console.log(`   Errors: ${files.length - processedCount - skippedCount}`);
}

// Run the script
console.log('🚀 Starting blog metadata generation...\n');
processDocsFolder();
console.log('✨ Blog metadata generation completed!');