# 📍 إحداثيات مناطق الخدمة - درب المها

## المقر الرئيسي (HQ)
| البيان | القيمة |
|--------|--------|
| **الاسم** | الريان، قطر |
| **Latitude** | 25.2854 |
| **Longitude** | 51.4320 |
| **Google Maps** | https://maps.app.goo.gl/PnLw2893MuMhdTLW8 |

---

## جميع مناطق الخدمة (15 منطقة)

| # | المنطقة (عربي) | المنطقة (English) | Latitude | Longitude |
|---|----------------|-------------------|----------|-----------|
| 1 | الدوحة | Doha | 25.2866 | 51.5333 |
| 2 | الريان | Al Rayyan | 25.2854 | 51.4320 |
| 3 | الوكرة | Al Wakrah | 25.1658 | 51.6033 |
| 4 | الخور | Al Khor | 25.6809 | 51.5056 |
| 5 | لوسيل | Lusail | 25.4104 | 51.4958 |
| 6 | أم صلال | Umm Salal | 25.4048 | 51.4043 |
| 7 | الغرافة | Al Gharafa | 25.3453 | 51.4768 |
| 8 | اللؤلؤة | The Pearl Qatar | 25.3728 | 51.5465 |
| 9 | أم صلال محمد | Umm Salal Mohammed | 25.4080 | 51.3980 |
| 10 | أم صلال علي | Umm Salal Ali | 25.4200 | 51.4100 |
| 11 | الوسيل (الوكير) | Al Wukair | 25.1658 | 51.6033 |
| 12 | أم العمد | Umm Al Amad | 25.3500 | 51.3800 |
| 13 | الشحانية | Al Shahaniya | 25.3800 | 51.2200 |
| 14 | مسيعيد | Mesaieed | 24.9833 | 51.5500 |
| 15 | دخان | Dukhan | 25.4167 | 50.7833 |

---

## أماكن التطبيق في الكود

### 1. Meta Tags (index.html + en/index.html)
```html
<meta name="geo.region" content="QA">
<meta name="geo.placename" content="Al Rayyan">
<meta name="geo.position" content="25.2854;51.4320">
<meta name="ICBM" content="25.2854, 51.4320">
```

### 2. Schema.org - المقر الرئيسي
```json
{
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "الريان",
    "addressLocality": "Al Rayyan",
    "addressRegion": "Al Rayyan",
    "postalCode": "00000",
    "addressCountry": "QA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2854,
    "longitude": 51.4320
  },
  "hasMap": "https://maps.app.goo.gl/PnLw2893MuMhdTLW8"
}
```

### 3. Schema.org - المناطق
كل منطقة في `areaServed` فيها:
```json
{
  "@type": "City",
  "name": "الدوحة",
  "name_en": "Doha",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.2866,
    "longitude": 51.5333
  },
  "hasMap": "https://maps.app.goo.gl/doha"
}
```

---

## 📝 ملاحظات

- الإحداثيات مستخرجة من Google Maps
- تم التطبيق على النسختين (عربي + إنجليزي)
- Google هيعرف يربط الموقع بكل المناطق دي في البحث المحلي
- لما تعمل صفحة منفصلة لكل منطقة، استخدم الإحداثيات دي فيها
