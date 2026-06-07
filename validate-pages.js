const fs = require('fs');
const path = require('path');

const regions = [
  { folder: 'doha', nameAr: 'الدوحة', nameEn: 'Doha', lat: '25.2866', lon: '51.5333' },
  { folder: 'lusail', nameAr: 'لوسيل', nameEn: 'Lusail', lat: '25.4104', lon: '51.4958' },
  { folder: 'al-rayyan', nameAr: 'الريان', nameEn: 'Al Rayyan', lat: '25.2854', lon: '51.4320' },
  { folder: 'al-wakra', nameAr: 'الوكرة', nameEn: 'Al Wakrah', lat: '25.1658', lon: '51.6033' },
  { folder: 'al-khor', nameAr: 'الخور', nameEn: 'Al Khor', lat: '25.6809', lon: '51.5056' },
  { folder: 'al-gharafa', nameAr: 'الغرافة', nameEn: 'Al Gharafa', lat: '25.3453', lon: '51.4768' },
  { folder: 'the-pearl', nameAr: 'اللؤلؤة', nameEn: 'The Pearl', lat: '25.3728', lon: '51.5465' },
  { folder: 'umm-salal', nameAr: 'أم صلال', nameEn: 'Umm Salal', lat: '25.4048', lon: '51.4043' }
];

let failed = false;

regions.forEach(region => {
  // Test Arabic page
  const arPath = path.join(__dirname, region.folder, 'index.html');
  if (!fs.existsSync(arPath)) {
    console.error(`❌ Missing Arabic page for ${region.nameEn} at ${arPath}`);
    failed = true;
    return;
  }
  const arHtml = fs.readFileSync(arPath, 'utf8');
  
  // Basic sanity checks for AR page
  if (!arHtml.includes(`href="../css/landing.min.css"`)) {
    console.error(`❌ ${region.folder}/index.html does not reference correct relative CSS path`);
    failed = true;
  }
  if (!arHtml.includes(`https://darbalmaha.com/${region.folder}/`)) {
    console.error(`❌ ${region.folder}/index.html does not contain correct canonical/hreflang URL`);
    failed = true;
  }
  if (!arHtml.includes(`content="${region.nameEn}"`)) {
    console.error(`❌ ${region.folder}/index.html missing correct geo.placename`);
    failed = true;
  }
  if (!arHtml.includes(`content="${region.lat};${region.lon}"`)) {
    console.error(`❌ ${region.folder}/index.html missing correct geo.position`);
    failed = true;
  }
  if (!arHtml.includes(`id="langToggle"`)) {
    console.error(`❌ ${region.folder}/index.html missing langToggle element for JS safety`);
    failed = true;
  }
  
  // Test English page
  const enPath = path.join(__dirname, 'en', region.folder, 'index.html');
  if (!fs.existsSync(enPath)) {
    console.error(`❌ Missing English page for ${region.nameEn} at ${enPath}`);
    failed = true;
    return;
  }
  const enHtml = fs.readFileSync(enPath, 'utf8');

  // Basic sanity checks for EN page
  if (!enHtml.includes(`href="../../css/landing.min.css"`)) {
    console.error(`❌ en/${region.folder}/index.html does not reference correct relative CSS path`);
    failed = true;
  }
  if (!enHtml.includes(`https://darbalmaha.com/en/${region.folder}/`)) {
    console.error(`❌ en/${region.folder}/index.html does not contain correct canonical/hreflang URL`);
    failed = true;
  }
  if (!enHtml.includes(`content="${region.nameEn}"`)) {
    console.error(`❌ en/${region.folder}/index.html missing correct geo.placename`);
    failed = true;
  }
  if (!enHtml.includes(`content="${region.lat};${region.lon}"`)) {
    console.error(`❌ en/${region.folder}/index.html missing correct geo.position`);
    failed = true;
  }
  if (!enHtml.includes(`id="langToggle"`)) {
    console.error(`❌ en/${region.folder}/index.html missing langToggle element for JS safety`);
    failed = true;
  }
  
  console.log(`✅ Region ${region.nameEn} pages verified.`);
});

if (failed) {
  process.exit(1);
} else {
  console.log('🎉 All pages generated and successfully validated!');
}
