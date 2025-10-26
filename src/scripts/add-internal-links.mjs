import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { EDUCATIONAL_GAMES_DATA } from '../data/educationalGames.js';
import { moduleNavigation } from '../data/moduleNavigation.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// NOTE: Please update this path to your actual blog content directory
const contentDir = path.resolve(__dirname, '../../docs');

async function createLinkDictionary() {
  const dictionary = {};

  // From modules
  moduleNavigation.forEach((module) => {
    if (module.title && module.href) {
      // Use a case-insensitive key for broader matching
      dictionary[module.title.toLowerCase()] = { url: module.href, original: module.title };
    }
    if (module.lessons) {
      module.lessons.forEach((lesson) => {
        if (lesson.title && lesson.href) {
          dictionary[lesson.title.toLowerCase()] = { url: lesson.href, original: lesson.title };
        }
      });
    }
  });

  // From games
  EDUCATIONAL_GAMES_DATA.forEach((game) => {
    if (game.title && game.id) {
      dictionary[game.title.toLowerCase()] = { url: `/practice/${game.id}`, original: game.title };
    }
  });

  return dictionary;
}

function escapeRegExp(string) {
  // $& means the whole matched string
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function processBlogPost(filePath, dictionary) {
  let content = await fs.readFile(filePath, 'utf-8');
  let changes = 0;

  const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length);

  for (const term of sortedKeys) {
    const { url, original } = dictionary[term];
    const escapedOriginal = escapeRegExp(original);

    // Regex to find the term if it's not already part of a markdown link `[text](url)` or image `![alt](url)`
    const regex = new RegExp(`(?<!\\[|!\\[)\\b(${escapedOriginal})\\b(?!\\]\\()`, 'gi');

    if (content.match(regex)) {
      content = content.replace(regex, () => {
        changes++;
        return `[${original}](${url})`;
      });
    }
  }

  if (changes > 0) {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(`✅ Updated ${changes} link(s) in ${path.basename(filePath)}`);
  } else {
    console.log(`⚪ No new links to add in ${path.basename(filePath)}`);
  }
}

async function main() {
  try {
    const dictionary = await createLinkDictionary();
    const files = await fs.readdir(contentDir, { withFileTypes: true });
    const blogPosts = files.filter(
      (file) => file.isFile() && (file.name.endsWith('.md') || file.name.endsWith('.mdx')),
    );

    for (const post of blogPosts) {
      await processBlogPost(path.join(contentDir, post.name), dictionary);
    }
    console.log('\n✨ Internal linking process complete.');
  } catch (error) {
    console.error('❌ An error occurred during the linking process:', error);
  }
}

main();
