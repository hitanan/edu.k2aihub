import fs from 'fs';
import path from 'path';

// Script to update all module pages with ModuleNavigation component and Image import

const modules = [
  { name: 'scratch', pages: ['scratch-variables-logic', 'scratch-game-development', 'scratch-advanced-features'] },
  { name: 'python', pages: ['python-introduction', 'variables-data-types', 'control-structures', 'functions', 'lists-tuples', 'dictionaries', 'file-handling', 'oop-basics'] },
  { name: 'arduino', pages: ['arduino-setup', 'led-digital-outputs', 'arduino-inputs', 'arduino-sensors', 'arduino-communication', 'arduino-advanced-projects', 'arduino-basics'] },
  { name: 'robotics', pages: ['robotics-intro', 'basic-electronics', 'microcontroller-basics', 'sensors-actuators', 'mobile-robots', 'iot-robotics'] },
  { name: 'stem', pages: ['stem-introduction', 'fun-physics-experiments', 'coding-for-kids', 'engineering-challenges', 'math-in-real-life', 'art-meets-science', 'environmental-solutions'] }
];

function updatePage(moduleName, pageName) {
  const filePath = path.join(process.cwd(), 'src', 'app', moduleName, pageName, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add imports if not present
  if (!content.includes('import Image from \'next/image\';')) {
    content = content.replace(
      /import Link from 'next\/link';/,
      `import Link from 'next/link';\nimport Image from 'next/image';`
    );
  }
  
  if (!content.includes('import ModuleNavigation')) {
    content = content.replace(
      /import YouTubePlayer from '@\/components\/YouTubePlayer';/,
      `import YouTubePlayer from '@/components/YouTubePlayer';\nimport ModuleNavigation from '@/components/ModuleNavigation';`
    );
  }

  // Add imageUrl display in header
  const iconRegex = /<div className="text-5xl mb-4">([^<]+)<\/div>/;
  const iconMatch = content.match(iconRegex);
  
  if (iconMatch && !content.includes('lesson.imageUrl')) {
    const replacement = `{lesson.imageUrl && (
              <div className="mb-6">
                <Image 
                  src={lesson.imageUrl} 
                  alt={lesson.title}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg border border-white/20"
                />
              </div>
            )}
            <div className="text-5xl mb-4">${iconMatch[1]}</div>`;
    
    content = content.replace(iconMatch[0], replacement);
  }

  // Replace Navigation section
  const navRegex = /\{\/\* Navigation \*\/\}[\s\S]*?<\/div>\s*\)\}/;
  const navReplacement = `{/* Navigation */}
        {navConfig && (
          <ModuleNavigation navConfig={navConfig} />
        )}`;
  
  if (content.match(navRegex)) {
    content = content.replace(navRegex, navReplacement);
  }

  fs.writeFileSync(filePath, content);
  console.log(`Updated: ${filePath}`);
}

// Update all pages
modules.forEach(module => {
  module.pages.forEach(page => {
    updatePage(module.name, page);
  });
});

console.log('All pages updated!');
