import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error('Usage: node scripts/replace_image_paths.js <file_path>');
  process.exit(1);
}

const filePath = path.resolve(args[0]);
const defaultImageUrl = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err}`);
    process.exit(1);
  }

  let result = data.replace(/'\/images\/[^']*'/g, `'${defaultImageUrl}'`);
  result = result.replace(/"\/images\/[^"]*"/g, `"${defaultImageUrl}"`);

  fs.writeFile(filePath, result, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing file: ${err}`);
      process.exit(1);
    }
    console.log(`Successfully replaced image paths in ${filePath}`);
  });
});
