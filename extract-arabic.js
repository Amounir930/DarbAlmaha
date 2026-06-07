const fs = require('fs');
const filePath = 'C:\\Users\\Dell\\.gemini\\antigravity-ide\\brain\\9dec47f5-b702-4b7d-ab00-072a90670867\\scratch\\decoded.txt';
if (!fs.existsSync(filePath)) {
  console.error('File not found');
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

// Regex for Arabic words
const arabicRegex = /[\u0600-\u06FF]+/g;
const matches = content.match(arabicRegex);

if (matches) {
  console.log('Total Arabic words found:', matches.length);
  // Get unique words
  const uniqueWords = Array.from(new Set(matches));
  console.log('Unique Arabic words (first 100):');
  console.log(uniqueWords.slice(0, 100).join(', '));
} else {
  console.log('No Arabic words found at all in the file.');
}
