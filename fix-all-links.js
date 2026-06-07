const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const arDir = path.join(baseDir, 'ar');
const enDir = path.join(baseDir, 'en');

const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2700}-\u{27BF}]|[\u{2600}-\u{26FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|🏆|☎|🇶🇦|🧹|🚗|🚿|🕷|🪳|🧽|🧼|📞|📍|🕒|✓/gu;

function fixHtmlFile(filePath, isEn) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // 1. Clean emojis
  content = content.replace(emojiRegex, '');

  // 2. Clean tel links (point to WhatsApp)
  content = content.replace(/href="tel:77175355"/g, 'href="https://wa.me/97477175355"');
  content = content.replace(/href="tel:\+97477175355"/g, 'href="https://wa.me/97477175355"');

  // 3. Update navbar and logo links (make them root-relative)
  const langPrefix = isEn ? '/en/' : '/ar/';

  // Replace navbar links pointing to anchors
  content = content.replace(/href="#home"/g, `href="${langPrefix}"`);
  content = content.replace(/href="#services"/g, `href="${langPrefix}services/"`);
  content = content.replace(/href="#why-us"/g, `href="${langPrefix}#why-us"`);
  content = content.replace(/href="#faq"/g, `href="${langPrefix}#faq"`);
  content = content.replace(/href="#contact"/g, `href="${langPrefix}booking/"`);

  // Also replace any old relative or wrong links in header:
  content = content.replace(/href="\.\.\/\.\.\/ar\/"/g, 'href="/ar/"');
  content = content.replace(/href="\.\.\/\.\.\/en\/"/g, 'href="/en/"');
  content = content.replace(/href="\.\.\/ar\/"/g, 'href="/ar/"');
  content = content.replace(/href="\.\.\/en\/"/g, 'href="/en/"');

  // Replace logo link href="#"
  content = content.replace(/href="#"(\s+class="logo-link")/g, `href="${langPrefix}"$1`);
  content = content.replace(/(class="logo-link"\s+)href="#"/g, `$1href="${langPrefix}"`);

  // 4. Update policy page back buttons and links
  content = content.replace(/href="\/"(\s+class="back-btn")/g, `href="${langPrefix}"$1`);
  
  // Replace old relative policy paths in index or other files
  content = content.replace(/href="privacy-policy\.html"/g, 'href="/ar/privacy-policy.html"');
  content = content.replace(/href="terms\.html"/g, 'href="/ar/terms.html"');
  content = content.replace(/href="refund-policy\.html"/g, 'href="/ar/refund-policy.html"');
  
  content = content.replace(/href="\.\.\/privacy-policy\.html"/g, 'href="/ar/privacy-policy.html"');
  content = content.replace(/href="\.\.\/terms\.html"/g, 'href="/ar/terms.html"');
  content = content.replace(/href="\.\.\/refund-policy\.html"/g, 'href="/ar/refund-policy.html"');

  content = content.replace(/href="\.\.\/\.\.\/privacy-policy\.html"/g, 'href="/ar/privacy-policy.html"');
  content = content.replace(/href="\.\.\/\.\.\/terms\.html"/g, 'href="/ar/terms.html"');
  content = content.replace(/href="\.\.\/\.\.\/refund-policy\.html"/g, 'href="/ar/refund-policy.html"');

  // 5. Update footer area pills links to point to their dedicated pages (if they exist)
  const cities = [
    { ar: 'الدوحة', en: 'Doha', folder: 'doha' },
    { ar: 'الوكرة', en: 'Al Wakra', folder: 'al-wakra' },
    { ar: 'الريان', en: 'Al Rayyan', folder: 'al-rayyan' },
    { ar: 'الخور', en: 'Al Khor', folder: 'al-khor' },
    { ar: 'لوسيل', en: 'Lusail', folder: 'lusail' },
    { ar: 'أم صلال', en: 'Umm Salal', folder: 'umm-salal' },
    { ar: 'الغرافة', en: 'Al Gharafa', folder: 'al-gharafa' },
    { ar: 'اللؤلؤة', en: 'The Pearl', folder: 'the-pearl' }
  ];

  cities.forEach(city => {
    // E.g. href="#service-areas" class="area-pill" data-ar="الدوحة"
    const regexAr = new RegExp(`href="[^"]*"(\\s+class="area-pill"\\s+data-ar="${city.ar}")`, 'g');
    content = content.replace(regexAr, `href="${langPrefix}${city.folder}/"$1`);
    
    const regexEn = new RegExp(`href="[^"]*"(\\s+class="area-pill"\\s+data-en="${city.en}")`, 'g');
    content = content.replace(regexEn, `href="${langPrefix}${city.folder}/"$1`);
  });

  // 6. Wrap why-us-img in why-us-img-wrapper if not already wrapped
  if (content.includes('class="why-us-img"') && !content.includes('class="why-us-img-wrapper"')) {
    content = content.replace(
      /<div class="why-us-img">\s*([\s\S]*?)\s*<\/div>/g,
      '<div class="why-us-img"><div class="why-us-img-wrapper">$1</div></div>'
    );
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${path.relative(baseDir, filePath)}`);
  }
}

function walkDir(dir, isEn) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, isEn);
    } else if (stat.isFile() && file.endsWith('.html')) {
      fixHtmlFile(filePath, isEn);
    }
  });
}

console.log('Fixing Arabic files...');
walkDir(arDir, false);

console.log('Fixing English files...');
walkDir(enDir, true);

console.log('Done!');
