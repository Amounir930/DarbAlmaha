const fs = require('fs');
const path = require('path');

const lastmod = '2026-06-07';

const pages = [
  // Home
  { path: '', changefreq: 'monthly', priority: '1.0' },
  // Regions
  { path: 'doha/', changefreq: 'weekly', priority: '0.8' },
  { path: 'lusail/', changefreq: 'weekly', priority: '0.8' },
  { path: 'al-rayyan/', changefreq: 'weekly', priority: '0.8' },
  { path: 'al-wakra/', changefreq: 'weekly', priority: '0.8' },
  { path: 'al-khor/', changefreq: 'weekly', priority: '0.8' },
  { path: 'al-gharafa/', changefreq: 'weekly', priority: '0.8' },
  { path: 'the-pearl/', changefreq: 'weekly', priority: '0.8' },
  { path: 'umm-salal/', changefreq: 'weekly', priority: '0.8' },
  // Services Hub
  { path: 'services/', changefreq: 'weekly', priority: '0.9' },
  // Services
  { path: 'services/house-cleaning-doha/', changefreq: 'weekly', priority: '0.8' },
  { path: 'services/hourly-maids-qatar/', changefreq: 'weekly', priority: '0.8' },
  { path: 'services/sofa-carpet-cleaning/', changefreq: 'weekly', priority: '0.8' },
  { path: 'services/pest-control-qatar/', changefreq: 'weekly', priority: '0.8' },
  { path: 'services/water-tank-cleaning/', changefreq: 'weekly', priority: '0.8' },
  { path: 'services/car-deep-cleaning/', changefreq: 'weekly', priority: '0.8' },
  // Booking & Pricing
  { path: 'booking/', changefreq: 'monthly', priority: '0.7' },
  { path: 'pricing/', changefreq: 'monthly', priority: '0.7' },
  // Blog
  { path: 'blog/', changefreq: 'weekly', priority: '0.7' },
  { path: 'blog/cleaning-schedule-doha/', changefreq: 'weekly', priority: '0.6' },
  { path: 'blog/hourly-maids-guide-qatar/', changefreq: 'weekly', priority: '0.6' },
  { path: 'blog/sofa-carpet-steam-cleaning/', changefreq: 'weekly', priority: '0.6' },
  { path: 'blog/water-tank-cleaning-guide/', changefreq: 'weekly', priority: '0.6' },
  { path: 'blog/pest-control-qatar-guide/', changefreq: 'weekly', priority: '0.6' },
  { path: 'blog/car-deep-cleaning-guide/', changefreq: 'weekly', priority: '0.6' },
  { path: 'blog/majlis-cleaning-tips/', changefreq: 'weekly', priority: '0.6' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

pages.forEach(p => {
  // Arabic URL
  xml += `  <url>
    <loc>https://darbalmaha.com/${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="https://darbalmaha.com/${p.path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://darbalmaha.com/en/${p.path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://darbalmaha.com/${p.path}"/>
  </url>
`;

  // English URL
  xml += `  <url>
    <loc>https://darbalmaha.com/en/${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority === '1.0' ? '0.8' : p.priority}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="https://darbalmaha.com/${p.path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://darbalmaha.com/en/${p.path}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://darbalmaha.com/${p.path}"/>
  </url>
`;
});

xml += `</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml, 'utf8');
console.log('Sitemap sitemap.xml generated successfully!');
