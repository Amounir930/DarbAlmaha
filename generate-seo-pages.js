const fs = require('fs');
const path = require('path');

const regions = [
  {
    folder: 'doha',
    nameAr: 'الدوحة',
    nameEn: 'Doha',
    lat: '25.2866',
    lon: '51.5333',
    keywordsAr: 'شركة تنظيف الدوحة, تنظيف فلل الدوحة, عاملات بالساعة الدوحة, شركة تنظيف في الدوحة, تنظيف مجالس الدوحة, غسيل كنب الدوحة, مكافحة حشرات الدوحة',
    keywordsEn: 'cleaning company Doha, villa cleaning Doha, hourly maids Doha, cleaning services Doha, sofa cleaning Doha, pest control Doha',
    titleAr: 'شركة تنظيف في الدوحة | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Doha | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في الدوحة الأولى 🏆 خدمات تنظيف منازل، فلل، شقق، مجالس، كنب بالبخار، رش ومكافحة حشرات، وعاملات بالساعة بالدوحة. خدمة ضيافة ممتازة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Doha. Villa cleaning, sofa washing, pest control, event staff, hourly maids in Doha. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في الدوحة | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Doha | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف وضيافة متكاملة في الدوحة بأعلى معايير الجودة والاحترافية. نوفر عاملات بالساعة ماهرات وفريقاً متخصصاً للتنظيف العميق ومكافحة الحشرات والضيافة الراقية للمناسبات.',
    pEn: 'Offering premium cleaning and hospitality services in Doha. Experienced hourly maids, deep cleaning, pest control, and elegant event hospitality solutions with top quality.',
    contentAr: `
        <p>إذا كنت تبحث عن <strong>شركة تنظيف في الدوحة</strong> تقدم خدمات احترافية وموثوقة، فإن شركة <strong>درب المها</strong> هي خيارك الأفضل. نحن ندرك أهمية النظافة والترتيب في منازلكم ومكاتبكم، ولذلك نوفر فريق عمل متكامل ومدرب على أعلى المستويات لتلبية كافة احتياجاتكم في العاصمة الدوحة وجميع أحيائها السكنية والتجارية.</p>
        
        <p>تشمل خدماتنا في الدوحة تنظيف الفلل والقصور والشقق السكنية بالكامل، مع التركيز على غسيل الكنب والسجاد والمجالس والديوانيات بالبخار لإزالة أصعب البقع والروائح الكريهة. كما نوفر خدمة <strong>عاملات بالساعة في الدوحة</strong> اللواتي يتميزن بالأمانة والسرعة والإتقان في العمل، مما يتيح لك الاستمتاع ببيئة نظيفة ومريحة دون أي عناء.</p>
        
        <p>لا تقتصر خدماتنا على التنظيف فقط، بل نتميز بتقديم <strong>خدمات ضيافة راقية للمناسبات</strong> والولائم والحفلات في الدوحة، حيث نوفر عاملات ضيافة مدربات على حسن الاستقبال وتقديم القهوة والشاي والمشروبات بأسلوب أنيق يليق بضيوفكم. بالإضافة إلى ذلك، نقدم خدمات مكافحة الحشرات ورش المبيدات الآمنة، وجلي الرخام، وتنظيف خزانات المياه لضمان بيئة صحية وآمنة لعائلتكم.</p>
        
        <p>نحن نعمل على مدار 24 ساعة طوال أيام الأسبوع لخدمتكم في الدوحة. نلتزم بتقديم أسعار تنافسية وعروض مخصصة تناسب ميزانيتكم مع ضمان رضاكم التام عن جودة الخدمة. اتصل بنا الآن لحجز موعدك!</p>
    `,
    contentEn: `
        <p>If you are looking for a professional and reliable <strong>cleaning company in Doha</strong>, <strong>DarbAlmaha</strong> is your premier choice. We understand the importance of cleanliness and order in your homes and offices, which is why we provide a fully trained and equipped team to meet all your requirements across the capital city of Doha and its various residential and commercial districts.</p>
        
        <p>Our comprehensive services in Doha include complete cleaning of villas, penthouses, and apartments, with specialized steam washing for sofas, carpets, majlis, and diwaniyas to remove tough stains and allergens. We also offer highly rated <strong>hourly maids in Doha</strong> who are known for their trustworthiness, efficiency, and attention to detail, giving you peace of mind and a pristine living space.</p>
        
        <p>Beyond cleaning, we excel in providing <strong>premium hospitality services for events</strong>, weddings, and gatherings in Doha. Our professional hospitality maids are trained in guest relations, serving coffee, tea, and refreshments with elegance. Additionally, we provide safe pest control and insecticide spraying, marble polishing, and water tank cleaning to ensure a healthy environment for your family.</p>
        
        <p>We operate 24/7 to serve you anywhere in Doha. We are committed to offering competitive rates and customized packages that suit your needs without compromising on quality. Contact us today to book your service!</p>
    `
  },
  {
    folder: 'lusail',
    nameAr: 'لوسيل',
    nameEn: 'Lusail',
    lat: '25.4104',
    lon: '51.4958',
    keywordsAr: 'شركة تنظيف لوسيل, تنظيف شقق لوسيل, عاملات بالساعة لوسيل, شركة تنظيف في لوسيل, تنظيف أبراج لوسيل, مكافحة حشرات لوسيل, ضيافة لوسيل',
    keywordsEn: 'cleaning company Lusail, apartment cleaning Lusail, hourly maids Lusail, cleaning services Lusail, tower cleaning Lusail, pest control Lusail',
    titleAr: 'شركة تنظيف في لوسيل | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Lusail | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في لوسيل الأولى 🏆 خدمات تنظيف شقق، أبراج، فلل، مكاتب، غسيل كنب، سجاد، وعاملات بالساعة في لوسيل. خدمة ضيافة وديب كلين 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Lusail. Apartment cleaning, tower cleaning, pest control, event staff, hourly maids in Lusail. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في لوسيل | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Lusail | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف وضيافة متطورة في مدينة لوسيل الحديثة. تنظيف عميق للشقق والفلل والمكاتب، وتوفير عاملات بالساعة وخدمات ضيافة راقية تليق بمناسباتكم.',
    pEn: 'Offering state-of-the-art cleaning and hospitality services in the modern city of Lusail. Deep cleaning for apartments, villas, and offices, hourly maids, and premium hospitality.',
    contentAr: `
        <p>تعتبر مدينة لوسيل رمزاً للحداثة والتطور في قطر، ولهذا نوفر في <strong>شركة تنظيف في لوسيل</strong> خدمات تنظيف وضيافة راقية تواكب هذا المستوى الرفيع. سواء كنت تسكن في شقة فاخرة بإحدى الأبراج السكنية، أو تمتلك فيلا أو مكتباً تجارياً في لوسيل، فإن فريق <strong>درب المها</strong> جاهز لتقديم أفضل الحلول للحفاظ على نظافة وبريق مكانك.</p>
        
        <p>نحن متخصصون في <strong>تنظيف شقق لوسيل</strong> السكنية والمفروشة، ونقدم خدمات التنظيف العميق (الديب كلين) قبل الانتقال أو بعد أعمال التشطيب والديكور. تشمل خدماتنا أيضاً تنظيف النوافذ الزجاجية للأبراج، وتطهير وتعقيم المطابخ والحمامات بأجود المواد الإيطالية والألمانية المرخصة، بالإضافة إلى غسيل وتجفيف الكنب والسجاد بالبخار في مكانه.</p>
        
        <p>إذا كنت بحاجة إلى مساعدة يومية، فإننا نوفر خدمة <strong>عاملات بالساعة في لوسيل</strong> يتميزن بالسرعة والخبرة الكبيرة في التعامل مع الشقق الحديثة والأجهزة المنزلية المتطورة. كما نقدم خدمات الضيافة الراقية للشركات والفعاليات والمناسبات الخاصة في لوسيل بواسطة كادر مؤهل ومظهر لائق.</p>
        
        <p>نحن نضمن لك خدمة آمنة وسريعة على مدار الساعة طوال أيام الأسبوع في لوسيل. أسعارنا مرنة ومناسبة للغاية وتحدد بناءً على حجم وطبيعة الخدمة المطلوبة. اتصل بنا الآن لتجربة خدماتنا الممتازة!</p>
    `,
    contentEn: `
        <p>Lusail City is a symbol of modernity in Qatar, and at <strong>DarbAlmaha</strong>, we offer high-end cleaning and hospitality services to match this premium lifestyle. Whether you live in a luxury apartment in one of Lusail's residential towers, or own a villa or office space, our professional team is ready to deliver top-tier cleaning solutions to keep your place immaculate.</p>
        
        <p>We specialize in <strong>apartment cleaning in Lusail</strong>, offering professional deep cleaning services before moving in or after construction and renovation works. Our services also cover tower window cleaning, kitchen and bathroom sanitization using approved high-quality detergents, and steam washing for sofas and carpets directly at your location.</p>
        
        <p>For regular household assistance, we provide reliable <strong>hourly maids in Lusail</strong> who are well-trained to handle modern apartments and home appliances with care. We also provide professional corporate and event hospitality services in Lusail, featuring elegant staff for all your gatherings.</p>
        
        <p>We guarantee a safe, fast, and satisfying experience 24/7 in Lusail. Our pricing is flexible and competitive, tailored to the specific services you require. Contact us today to book your cleaning or hospitality service!</p>
    `
  },
  {
    folder: 'al-rayyan',
    nameAr: 'الريان',
    nameEn: 'Al Rayyan',
    lat: '25.2854',
    lon: '51.4320',
    keywordsAr: 'شركة تنظيف الريان, تنظيف منازل الريان, عاملات بالساعة الريان, شركة تنظيف في الريان, تنظيف مجالس الريان, غسيل كنب الريان, ضيافة الريان',
    keywordsEn: 'cleaning company Al Rayyan, home cleaning Al Rayyan, hourly maids Al Rayyan, cleaning services Al Rayyan, majlis cleaning Al Rayyan, event staff Al Rayyan',
    titleAr: 'شركة تنظيف في الريان | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Al Rayyan | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في الريان الأولى 🏆 خدمات تنظيف منازل، فلل، شقق، مجالس، كنب، سجاد، رش حشرات، وعاملات بالساعة في الريان. خدمة ضيافة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Al Rayyan. Villa cleaning, majlis washing, pest control, event staff, hourly maids in Al Rayyan. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في الريان | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Al Rayyan | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف وضيافة متكاملة بمقرنا الرئيسي في الريان. تنظيف فلل شامل، غسيل كنب ومجالس بالبخار، عاملات بالساعة، وضيافة متميزة للمناسبات العائلية والولائم.',
    pEn: 'Offering complete cleaning and hospitality services in Al Rayyan, our headquarters. Full villa cleaning, steam sofa washing, hourly maids, and premium event hospitality.',
    contentAr: `
        <p>تفخر شركة <strong>درب المها</strong> بتقديم خدماتها المتميزة انطلاقاً من مقرها الرئيسي في الريان. نحن الخيار الأول لكل من يبحث عن <strong>شركة تنظيف في الريان</strong> تتمتع بالسمعة الطيبة والخبرة الطويلة في تنظيف المنازل والفلل الكبيرة والمجالس القطرية الأصيلة التي تتطلب عناية خاصة ودقة متناهية.</p>
        
        <p>تتنوع خدماتنا لتشمل تنظيف الفلل الشامل، وجلي وتلميع الرخام، وغسيل المجالس والديوانيات وغسيل السجاد والكنب بالبخار لإزالة الأتربة والروائح وتعقيمها بالكامل. كما نوفر خدمة <strong>عاملات بالساعة في الريان</strong> لمساعدة ربات البيوت في أعمال التنظيف والترتيب اليومية بكفاءة وسرعة عالية وبثقة تامة.</p>
        
        <p>وفي مجال الضيافة، نقدم أفضل <strong>عاملات ضيافة في الريان</strong> لتغطية المناسبات العائلية، حفلات الاستقبال، والأعراس والولائم. يمتلك كادرنا مهارات عالية في تقديم القهوة العربية والشاي والمشروبات بأسلوب راقٍ يليق بعادات وتقاليد أهل الريان الكرام. نوفر أيضاً خدمات مكافحة الحشرات المنزلية ورش الصراصير والنمل بضمان حقيقي.</p>
        
        <p>نحن متواجدون بالقرب منك في الريان لخدمتك على مدار الساعة. نضمن لك السرعة في الحضور والالتزام بالمواعيد وتقديم أسعار عادلة ومناسبة للجميع. اتصل بنا الآن واطلب خدمتك!</p>
    `,
    contentEn: `
        <p>As our main headquarters is based in Al Rayyan, <strong>DarbAlmaha</strong> takes special pride in serving this community. We are the premier choice for anyone looking for a trusted <strong>cleaning company in Al Rayyan</strong> with years of experience in villa cleaning, home maintenance, and traditional Qatari majlis care that requires absolute precision.</p>
        
        <p>Our services include complete villa cleaning, marble floor polishing, deep cleaning of majlis and diwaniyas, and advanced steam cleaning for carpets and sofas to sanitize and remove dirt. We also provide top-rated <strong>hourly maids in Al Rayyan</strong> to help with daily cleaning, organizing, and laundry tasks efficiently and reliably.</p>
        
        <p>For events and family gatherings, we offer the best <strong>hospitality staff in Al Rayyan</strong>. Our maids are skilled in Qatari hospitality traditions, serving Arabic coffee, tea, and refreshments with professionalism. We also provide certified pest control, water tank washing, and disinfection services.</p>
        
        <p>We are right in your neighborhood in Al Rayyan, ready to serve you 24/7. We guarantee fast response times, punctual visits, and fair pricing. Contact us today to book your cleaning or hospitality needs!</p>
    `
  },
  {
    folder: 'al-wakra',
    nameAr: 'الوكرة',
    nameEn: 'Al Wakrah',
    lat: '25.1658',
    lon: '51.6033',
    keywordsAr: 'شركة تنظيف الوكرة, تنظيف فلل الوكرة, عاملات بالساعة الوكرة, شركة تنظيف في الوكرة, غسيل كنب الوكرة, مكافحة حشرات الوكرة, ضيافة الوكرة',
    keywordsEn: 'cleaning company Al Wakrah, villa cleaning Al Wakrah, hourly maids Al Wakrah, cleaning services Al Wakrah, sofa cleaning Al Wakrah, pest control Al Wakrah',
    titleAr: 'شركة تنظيف في الوكرة | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Al Wakrah | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في الوكرة الأولى 🏆 خدمات تنظيف فلل، منازل، شقق، غسيل كنب بالبخار، سجاد، رش حشرات، وعاملات بالساعة في الوكرة. خدمة ضيافة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Al Wakrah. Villa cleaning, carpet washing, pest control, event staff, hourly maids in Al Wakrah. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في الوكرة | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Al Wakrah | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف وضيافة شاملة لأهالي الوكرة والوكير. تنظيف فلل وشقق بأسعار مناسبة، وغسيل كنب ومجالس، وعاملات بالساعة موثوقات، وضيافة متميزة للمناسبات.',
    pEn: 'Offering comprehensive cleaning and hospitality services in Al Wakrah and Al Wukair. Affordable villa & home cleaning, steam sofa washing, hourly maids, and event hospitality.',
    contentAr: `
        <p>إذا كنت تسكن في مدينة الوكرة أو منطقة الوكير وتبحث عن <strong>شركة تنظيف في الوكرة</strong> توفر لك الخدمة الممتازة والراحة التامة، فإن شركة <strong>درب المها</strong> توفر لك كافة خدمات التنظيف والضيافة ومكافحة الحشرات بضغطة زر واحدة ومن خلال فريق عمل محترف ومرخص.</p>
        
        <p>تشمل خدماتنا في الوكرة تنظيف الفلل الجديدة والقديمة، تنظيف الشقق والمجمعات السكنية، تنظيف المطابخ وإزالة الدهون المستعصية، وتعقيم الحمامات بالكامل. نوفر كذلك أحدث أجهزة غسيل الكنب والسجاد والموكيت بالبخار لضمان نظافتها وجفافها السريع مع الحفاظ على الألوان والنسيج.</p>
        
        <p>ولأننا نهتم بيومك، نوفر لك خدمة <strong>عاملات بالساعة في الوكرة</strong> لمساعدتك في الترتيب والغسيل والكي وأعمال المنزل اليومية بأمانة تامة وبجودة عالية. كما نقدم خدمات الضيافة للمناسبات الاجتماعية، الحفلات والولائم في الوكرة، حيث تقوم عاملاتنا بتقديم المشروبات والقهوة والشاي بأسلوب ترحيبي راقٍ.</p>
        
        <p>نعمل في الوكرة على مدار 24 ساعة لخدمتك وتلبية طلباتك الطارئة. نلتزم بأعلى معايير النظافة وبأسعار تنافسية تناسب الجميع بدون مبالغة. اتصل بنا الآن واحجز خدمتك المفضلة!</p>
    `,
    contentEn: `
        <p>If you live in Al Wakrah or Al Wukair and are searching for a high-quality <strong>cleaning company in Al Wakrah</strong>, <strong>DarbAlmaha</strong> is here to help. We provide a full suite of professional cleaning, hospitality, and pest control services delivered by a certified and experienced team.</p>
        
        <p>Our cleaning services in Al Wakrah include full deep cleaning for new and occupied villas, apartment cleaning, kitchen degreasing, and complete bathroom sanitization. We use advanced steam cleaning machines to wash carpets, sofas, and majlis, ensuring they are deeply cleaned, deodorized, and quickly dried.</p>
        
        <p>For daily help, our service for <strong>hourly maids in Al Wakrah</strong> offers reliable, experienced, and trustworthy cleaning ladies who handle all domestic duties from cleaning to ironing. In addition, we provide elegant event hospitality services in Al Wakrah, with staff trained to serve coffee, tea, and drinks for your guests.</p>
        
        <p>We are available 24/7 to cover Al Wakrah and surrounding areas. We focus on delivering superior cleanliness at reasonable, competitive rates. Contact us today to book your session!</p>
    `
  },
  {
    folder: 'al-khor',
    nameAr: 'الخور',
    nameEn: 'Al Khor',
    lat: '25.6809',
    lon: '51.5056',
    keywordsAr: 'شركة تنظيف الخور, تنظيف فلل الخور, مكافحة حشرات الخور, شركة تنظيف في الخور, عاملات بالساعة الخور, غسيل كنب الخور, ضيافة الخور',
    keywordsEn: 'cleaning company Al Khor, villa cleaning Al Khor, pest control Al Khor, cleaning services Al Khor, hourly maids Al Khor, sofa cleaning Al Khor',
    titleAr: 'شركة تنظيف في الخور | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Al Khor | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في الخور الأولى 🏆 خدمات تنظيف منازل، فلل، شقق، مجالس، كنب بالبخار، رش مبيدات ومكافحة حشرات، وعاملات بالساعة في الخور. خدمة ضيافة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Al Khor. Villa cleaning, carpet cleaning, pest control, event staff, hourly maids in Al Khor. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في الخور | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Al Khor | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف متكاملة ومكافحة حشرات فعالة في مدينة الخور. تنظيف فلل وشاليهات، غسيل كنب وسجاد بالبخار، وتوفير عاملات بالساعة وضيافة ممتازة للمناسبات.',
    pEn: 'Offering comprehensive cleaning and effective pest control in Al Khor. Villa and chalet cleaning, steam sofa washing, hourly maids, and professional event hospitality.',
    contentAr: `
        <p>تتميز مدينة الخور بطبيعتها الجميلة وشاليهاتها وفللها السكنية، ونحن في شركة <strong>درب المها</strong> نسعد بتقديم خدمات <strong>شركة تنظيف في الخور</strong> تلبي تطلعات سكان المدينة وتوفر لهم بيئة نظيفة وصحية وخالية من الحشرات المزعجة.</p>
        
        <p>تشمل خدماتنا تنظيف الفلل والبيوت السكنية والشاليهات البحرية في الخور، مع الاهتمام بتنظيف ساحات الفلل الخارجية، وغسيل خزانات المياه وتعقيمها لضمان نقاء المياه. كما نتميز في تقديم خدمات <strong>مكافحة الحشرات ورش المبيدات في الخور</strong> للتخلص النهائي من الصراصير والنمل وبق الفراش والقوارض باستخدام مواد آمنة وغير ضارة بالصحة.</p>
        
        <p>نوفر كذلك خدمة <strong>عاملات بالساعة في الخور</strong> لمساعدتكم في أعمال المنزل اليومية والتنظيف الدوري بمرونة وأمانة تامة. بالإضافة إلى تقديم خدمات الضيافة المتميزة للمناسبات والجمعات العائلية في الخور بواسطة عاملات ضيافة يقدمن خدمات الاستقبال والضيافة بأفضل صورة.</p>
        
        <p>لدينا فريق متحرك ومجهز بالكامل لخدمتكم في الخور على مدار 24 ساعة. أسعارنا منافسة ومناسبة وخدمتنا سريعة ومضمونة. تواصل معنا الآن لحجز خدمتك وتجربة الاحترافية معنا!</p>
    `,
    contentEn: `
        <p>Al Khor is known for its beautiful villas and coastal chalets, and at <strong>DarbAlmaha</strong>, we are proud to offer professional services as a leading <strong>cleaning company in Al Khor</strong>. We provide local residents with high-standard cleaning, disinfection, and pest control to keep their homes fresh and safe.</p>
        
        <p>Our cleaning services in Al Khor cover residential villas, beachfront chalets, outdoor yards, and professional water tank cleaning and sanitization. We also excel in <strong>pest control and disinfection in Al Khor</strong>, helping you eliminate cockroaches, ants, bed bugs, and rodents using safe and approved environmental materials.</p>
        
        <p>If you require regular support, our <strong>hourly maids in Al Khor</strong> are available to handle housekeeping, organizing, and laundry tasks with speed and honesty. We also provide premium event hospitality maids for gatherings and social events in Al Khor, serving your guests with high professionalism.</p>
        
        <p>Our mobile team in Al Khor is fully equipped and operates 24/7. We offer competitive rates and guaranteed quality of work. Contact us today to book your cleaning or pest control service!</p>
    `
  },
  {
    folder: 'al-gharafa',
    nameAr: 'الغرافة',
    nameEn: 'Al Gharafa',
    lat: '25.3453',
    lon: '51.4768',
    keywordsAr: 'شركة تنظيف الغرافة, تنظيف شقق الغرافة, عاملات بالساعة الغرافة, شركة تنظيف في الغرافة, غسيل كنب الغرافة, مكافحة حشرات الغرافة, ضيافة الغرافة',
    keywordsEn: 'cleaning company Al Gharafa, apartment cleaning Al Gharafa, hourly maids Al Gharafa, cleaning services Al Gharafa, sofa cleaning Al Gharafa, pest control Al Gharafa',
    titleAr: 'شركة تنظيف في الغرافة | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Al Gharafa | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في الغرافة الأولى 🏆 خدمات تنظيف شقق، فلل، منازل، غسيل مجالس، كنب بالبخار، سجاد، رش حشرات، وعاملات بالساعة في الغرافة. خدمة ضيافة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Al Gharafa. Apartment cleaning, sofa washing, pest control, event staff, hourly maids in Al Gharafa. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في الغرافة | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Al Gharafa | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف وشقق متميزة وعاملات بالساعة في منطقة الغرافة. تنظيف عميق، غسيل كنب وسجاد بالبخار، مكافحة حشرات منزلية، وضيافة متكاملة للمناسبات الخاصة والولائم.',
    pEn: 'Offering premium cleaning, apartment services, and hourly maids in Al Gharafa. Deep cleaning, steam sofa washing, pest control, and event hospitality staff.',
    contentAr: `
        <p>تعتبر منطقة الغرافة من المناطق الحيوية والسكنية المفضلة للعائلات في قطر. ولأن وقتك ثمين، فإن شركة <strong>درب المها</strong> تقدم خدمات <strong>شركة تنظيف في الغرافة</strong> لتلبية كافة احتياجات بيتك من تنظيف وضيافة ورش حشرات بأعلى درجات الكفاءة والأمان وبأسعار مناسبة جداً.</p>
        
        <p>نحن متخصصون في تنظيف الشقق السكنية الكبيرة والصغيرة في الغرافة، وتنظيف الفلل والمنازل والديوانيات. تشمل خدماتنا كنس وغسيل الأرضيات، جلي الرخام والسيراميك، تعقيم الحمامات، وتنظيف مطابخ الغرافة وإزالة بقع الدهون من الجدران والأفران. كما نستخدم تقنية البخار المتطورة لغسيل المجالس والكنب والسجاد والتخلص من البكتيريا والأتربة.</p>
        
        <p>إذا كنت بحاجة إلى مساعدة دورية، نوفر لك خدمة <strong>عاملات بالساعة في الغرافة</strong> اللواتي يتميزن بالمهارة والسرعة والأمانة، لمساعدتك في تنظيف وترتيب بيتك وغسيل وكي الملابس. بالإضافة إلى ذلك، نوفر عاملات ضيافة محترفات للمناسبات والجمعات الخاصة في الغرافة لخدمة ضيوفكم وتقديم الشاي والقهوة برقي.</p>
        
        <p>نحن نعمل على مدار 24 ساعة طوال أيام الأسبوع لخدمتكم في الغرافة والمناطق المجاورة. نحرص على تقديم عروض أسعار تنافسية وعادلة تناسب حجم الخدمة المطلوبة. تواصل معنا اليوم لحجز موعدك!</p>
    `,
    contentEn: `
        <p>Al Gharafa is one of the most vibrant residential areas in Qatar. To save your time and effort, <strong>DarbAlmaha</strong> offers high-quality services as a trusted <strong>cleaning company in Al Gharafa</strong>, covering all your home cleaning, event hospitality, and pest control requirements with maximum safety and professionalism.</p>
        
        <p>We specialize in cleaning residential apartments, family villas, and majlis in Al Gharafa. Our work includes floor washing, marble floor polishing, deep sanitization of bathrooms, and kitchen cleaning to remove tough grease and oil stains. We also use advanced steam machines to clean carpets, sofas, and upholstery, removing allergens and dust.</p>
        
        <p>For regular help, our <strong>hourly maids in Al Gharafa</strong> are highly rated for their speed, trust, and neatness in handling all kinds of domestic work, including laundry and ironing. We also provide professional hospitality maids for social gatherings and private events in Al Gharafa to serve your guests with warm hospitality.</p>
        
        <p>We are active 24/7 to serve you in Al Gharafa. We offer flexible packages and competitive rates based on the specific cleaning tasks you require. Contact us today to schedule your service!</p>
    `
  },
  {
    folder: 'the-pearl',
    nameAr: 'اللؤلؤة',
    nameEn: 'The Pearl',
    lat: '25.3728',
    lon: '51.5465',
    keywordsAr: 'شركة تنظيف اللؤلؤة, تنظيف شقق اللؤلؤة قطر, ديب كلين اللؤلؤة, عاملات بالساعة اللؤلؤة, شركة تنظيف في اللؤلؤة, ضيافة اللؤلؤة, تنظيف كنب اللؤلؤة',
    keywordsEn: 'cleaning company The Pearl, apartment cleaning The Pearl Qatar, deep cleaning The Pearl, hourly maids The Pearl, cleaning services The Pearl, sofa cleaning The Pearl',
    titleAr: 'شركة تنظيف في اللؤلؤة قطر | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company The Pearl | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في اللؤلؤة قطر الأولى 🏆 خدمات ديب كلين فاخر، تنظيف شقق، فلل، غسيل كنب بالبخار، سجاد، وعاملات بالساعة في جزيرة اللؤلؤة. خدمة ضيافة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in The Pearl Qatar. Luxury apartment cleaning, deep clean, pest control, event staff, hourly maids in The Pearl. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في اللؤلؤة قطر | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company The Pearl Qatar | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف عميق وديب كلين فاخر وعاملات بالساعة في جزيرة اللؤلؤة قطر. تنظيف شقق بنتهاوس وفلل، غسيل كنب وسجاد بالبخار، وضيافة راقية للمناسبات الفخمة.',
    pEn: 'Offering premium deep cleaning, penthouse services, and hourly maids in The Pearl Qatar. Deep steam sofa washing, carpet cleaning, and top-tier event hospitality.',
    contentAr: `
        <p>تتميز جزيرة اللؤلؤة بكونها أحد أرقى الوجهات السكنية الفاخرة في قطر، ولذلك فإننا في شركة <strong>درب المها</strong> نقدم خدمات <strong>شركة تنظيف في اللؤلؤة</strong> بمستويات جودة استثنائية تناسب هذا المجتمع الفاخر وتلبي المعايير الراقية لشقق البنتهاوس والفلل العصرية في الجزيرة.</p>
        
        <p>نحن متخصصون في تقديم خدمات **التنظيف العميق (الديب كلين)** للشقق والفلل قبل الانتقال للعيش فيها، مع تنظيف وتطهير شامل لجميع الغرف والحمامات والمطابخ والواجهات الزجاجية المطلة على البحر. كما نستخدم تقنيات تنظيف الكنب والسجاد والمفروشات الفاخرة بالبخار الجاف لحماية الأنسجة وإزالة البكتيريا والأتربة تماماً وبأمان.</p>
        
        <p>للمحافظة اليومية على نظافة شقتك، نوفر خدمة <strong>عاملات بالساعة في اللؤلؤة</strong> يتمتعن بالخبرة الواسعة والمظهر اللائق والقدرة على التعامل مع الأجهزة المنزلية المتطورة والأثاث الفخم بثقة وأمانة. بالإضافة إلى ذلك، نوفر كادراً متميزاً من عاملات الضيافة للمناسبات الخاصة واليخوت والحفلات الراقية في اللؤلؤة.</p>
        
        <p>نحن متاحون لخدمتك على مدار الساعة طوال أيام الأسبوع في جزيرة اللؤلؤة قطر. نضمن لك السرعة والدقة المتناهية ورضاك التام عن مستوى الخدمة. اتصل بنا الآن للحصول على عرض سعر مخصص وراقٍ!</p>
    `,
    contentEn: `
        <p>The Pearl Qatar is renowned as one of the most prestigious luxury residential destinations, and at <strong>DarbAlmaha</strong>, we offer exceptional <strong>cleaning services in The Pearl</strong> designed to match this high-end lifestyle. We cater to penthouses, townhouses, and luxury villas with absolute attention to detail and care.</p>
        
        <p>We specialize in **Deep Cleaning (Deep Clean)** services for residents moving into new apartments or preparing their homes for guests. Our work covers complete sanitization of bedrooms, kitchens, bathrooms, and sea-view balcony glass. We also use advanced dry steam extraction to clean luxury sofas, rugs, and curtains, preserving fabric colors and removing deep dirt safely.</p>
        
        <p>For daily maintenance, our <strong>hourly maids in The Pearl</strong> are selected for their professional training, neat appearance, and ability to handle delicate furnishings and high-tech appliances with care. We also offer elite event hospitality maids for yachts, private parties, and VIP events in The Pearl.</p>
        
        <p>We are at your service 24/7 across all districts of The Pearl Qatar (Porto Arabia, Viva Bahriya, Qanat Quartier, etc.). We guarantee prompt arrival and immaculate results. Contact us today for a custom premium quote!</p>
    `
  },
  {
    folder: 'umm-salal',
    nameAr: 'أم صلال',
    nameEn: 'Umm Salal',
    lat: '25.4048',
    lon: '51.4043',
    keywordsAr: 'شركة تنظيف أم صلال, رش حشرات أم صلال, عاملات بالساعة أم صلال, شركة تنظيف في أم صلال, تنظيف فلل أم صلال, مكافحة حشرات أم صلال, ضيافة أم صلال',
    keywordsEn: 'cleaning company Umm Salal, pest control Umm Salal, hourly maids Umm Salal, cleaning services Umm Salal, villa cleaning Umm Salal, sofa cleaning Umm Salal',
    titleAr: 'شركة تنظيف في أم صلال | ضيافة وتنظيف درب المها ☎ 77175355',
    titleEn: 'Hospitality & Cleaning Company Umm Salal | DarbAlmaha ☎ 77175355',
    descAr: 'شركة تنظيف في أم صلال الأولى 🏆 خدمات تنظيف فلل، منازل، شقق، غسيل كنب بالبخار، سجاد، رش مبيدات ومكافحة حشرات، وعاملات بالساعة في أم صلال. خدمة ضيافة 24 ساعة.',
    descEn: 'Premium hospitality & cleaning services in Umm Salal. Villa cleaning, carpet cleaning, pest control, event staff, hourly maids in Umm Salal. 24/7 service. Call 77175355',
    h1Ar: 'شركة تنظيف في أم صلال | ضيافة وتنظيف درب المها',
    h1En: 'Hospitality & Cleaning Company Umm Salal | DarbAlmaha',
    pAr: 'نقدم خدمات تنظيف فلل ومكافحة حشرات فعالة وعاملات بالساعة في أم صلال محمد وأم صلال علي. تنظيف عميق، غسيل كنب ومجالس بالبخار، وضيافة متميزة للمناسبات.',
    pEn: 'Offering villa cleaning, effective pest control, and hourly maids in Umm Salal Mohammed and Umm Salal Ali. Deep cleaning, steam sofa washing, and event hospitality.',
    contentAr: `
        <p>إذا كنت تبحث عن <strong>شركة تنظيف في أم صلال</strong> (أم صلال محمد أو أم صلال علي) تقدم خدمات تنظيف متكاملة ومكافحة حشرات مضمونة، فإن شركة <strong>درب المها</strong> توفر لك فريق عمل مجهز بالكامل بأحدث المعدات ومواد التنظيف والمبيدات المرخصة والآمنة لراحة عائلتكم.</p>
        
        <p>تشمل خدماتنا تنظيف الفلل الكبيرة والبيوت الشعبية والشقق في أم صلال، مع التركيز على غسيل المجالس والديوانيات وغسيل الكنب والسجاد بالبخار للتخلص من الأتربة والجراثيم. كما نتميز بتقديم خدمات <strong>رش ومكافحة الحشرات في أم صلال</strong> للقضاء النهائي على الصراصير والمل والرمة والقوارض باستخدام مبيدات مصرحة من وزارة البلدية والبيئة في قطر وضمان حقيقي.</p>
        
        <p>نوفر كذلك خدمة <strong>عاملات بالساعة في أم صلال</strong> لمساعدتكم في أعمال المنزل اليومية والتنظيف الدوري بمرونة وأمانة تامة. بالإضافة إلى تقديم خدمات الضيافة المتميزة للمناسبات والجمعات العائلية في أم صلال بواسطة عاملات ضيافة يقدمن خدمات الاستقبال والضيافة بأفضل صورة.</p>
        
        <p>لدينا فريق متحرك ومجهز بالكامل لخدمتكم في أم صلال والمناطق المحيطة بها على مدار 24 ساعة. أسعارنا ممتازة ومناسبة للجميع. اتصل بنا الآن واطلب الخدمة التي تحتاجها!</p>
    `,
    contentEn: `
        <p>If you are looking for a trusted <strong>cleaning company in Umm Salal</strong> (Umm Salal Mohammed or Umm Salal Ali) providing complete cleaning and certified pest control, <strong>DarbAlmaha</strong> is your best choice. We offer a professional team equipped with advanced tools and safe, approved cleaning and disinfection materials.</p>
        
        <p>Our cleaning services in Umm Salal include full villa and home deep cleaning, with specialized steam washing for majlis, sofas, and rugs to remove dirt and bacteria. We also specialize in <strong>pest control and disinfection in Umm Salal</strong>, eliminating cockroaches, ants, termites, and rodents using authorized, family-safe insecticides.</p>
        
        <p>For daily household support, we offer reliable <strong>hourly maids in Umm Salal</strong> who can handle regular cleaning, organizing, and laundry tasks with absolute care and trust. We also provide elegant event hospitality services in Umm Salal, featuring maids trained to serve coffee, tea, and drinks for your gatherings.</p>
        
        <p>We are available 24/7 to serve you across Umm Salal and nearby areas. We guarantee high efficiency and reasonable, budget-friendly rates. Contact us today to book your service!</p>
    `
  }
];

// Read templates
const arTemplatePath = path.join(__dirname, 'index.html');
const enTemplatePath = path.join(__dirname, 'en', 'index.html');

if (!fs.existsSync(arTemplatePath)) {
  console.error('Error: index.html (Arabic template) not found!');
  process.exit(1);
}
if (!fs.existsSync(enTemplatePath)) {
  console.error('Error: en/index.html (English template) not found!');
  process.exit(1);
}

const arTemplate = fs.readFileSync(arTemplatePath, 'utf8');
const enTemplate = fs.readFileSync(enTemplatePath, 'utf8');

console.log('Generating local SEO pages...');

regions.forEach(region => {
  // 1. Generate Arabic Region Page
  let arPage = arTemplate;

  // Replace title element
  arPage = arPage.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${region.titleAr}</title>`);

  // Replace meta description
  arPage = arPage.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${region.descAr}">`);

  // Replace meta keywords
  arPage = arPage.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${region.keywordsAr}">`);

  // Replace canonical tag
  arPage = arPage.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="https://darbalmaha.com/${region.folder}/">`);

  // Replace hreflang tags
  arPage = arPage.replace(/<link\s+rel="alternate"\s+hreflang="ar"\s+href="https:\/\/darbalmaha\.com\/"\s*\/?>/i, `<link rel="alternate" hreflang="ar" href="https://darbalmaha.com/${region.folder}/">`);
  arPage = arPage.replace(/<link\s+rel="alternate"\s+hreflang="en"\s+href="https:\/\/darbalmaha\.com\/en\/"\s*\/?>/i, `<link rel="alternate" hreflang="en" href="https://darbalmaha.com/en/${region.folder}/">`);
  arPage = arPage.replace(/<link\s+rel="alternate"\s+hreflang="x-default"\s+href="https:\/\/darbalmaha\.com\/"\s*\/?>/i, `<link rel="alternate" hreflang="x-default" href="https://darbalmaha.com/${region.folder}/">`);

  // Replace Open Graph url, title, description
  arPage = arPage.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="https://darbalmaha.com/${region.folder}/">`);
  arPage = arPage.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${region.titleAr}">`);
  arPage = arPage.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${region.descAr}">`);

  // Replace Twitter card title, description
  arPage = arPage.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${region.titleAr}">`);
  arPage = arPage.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${region.descAr}">`);

  // Replace Geo Tags
  arPage = arPage.replace(/<meta\s+name="geo\.placename"\s+content="[^"]*"\s*\/?>/i, `<meta name="geo.placename" content="${region.nameEn}">`);
  arPage = arPage.replace(/<meta\s+name="geo\.position"\s+content="[^"]*"\s*\/?>/i, `<meta name="geo.position" content="${region.lat};${region.lon}">`);
  arPage = arPage.replace(/<meta\s+name="ICBM"\s+content="[^"]*"\s*\/?>/i, `<meta name="ICBM" content="${region.lat}, ${region.lon}">`);

  // Replace Hero H1 and Paragraph
  arPage = arPage.replace(/<h1\s+data-ar="[^"]*"\s+data-en="[^"]*">[\s\S]*?<\/h1>/i, `<h1 data-ar="${region.h1Ar}" data-en="${region.h1En}">${region.h1Ar}</h1>`);
  arPage = arPage.replace(/<p\s+data-ar="نقدم خدمات ممتازة[^"]*"\s+data-en="[^"]*">[\s\S]*?<\/p>/i, `<p data-ar="${region.pAr}" data-en="${region.pEn}">${region.pAr}</p>`);

  // Replace Language Toggle Button with Link
  arPage = arPage.replace(/<button\s+id="langToggle"\s+class="lang-switch">English<\/button>/i, `<button id="langToggle" style="display:none;"></button><a href="../en/${region.folder}/" class="lang-switch">English</a>`);

  // Adjust asset paths
  arPage = arPage.replace(/href="css\/landing\.min\.css"/g, 'href="../css/landing.min.css"');
  arPage = arPage.replace(/href="css\/landing\.css"/g, 'href="../css/landing.css"');
  arPage = arPage.replace(/src="img\//g, 'src="../img/');
  arPage = arPage.replace(/srcset="img\//g, 'srcset="../img/');
  arPage = arPage.replace(/imagesrcset="img\//g, 'imagesrcset="../img/');
  arPage = arPage.replace(/href="img\//g, 'href="../img/');
  arPage = arPage.replace(/src="js\//g, 'src="../js/');
  arPage = arPage.replace(/href="\.\/"/g, 'href="../"');
  arPage = arPage.replace(/href="privacy-policy\.html"/g, 'href="../privacy-policy.html"');
  arPage = arPage.replace(/href="terms\.html"/g, 'href="../terms.html"');
  arPage = arPage.replace(/href="refund-policy\.html"/g, 'href="../refund-policy.html"');
  arPage = arPage.replace(/href="en\/"/g, 'href="../en/"');

  // Schema.org adjustments
  arPage = arPage.replace(/"@id": "https:\/\/darbalmaha\.com\/"/g, `"@id": "https://darbalmaha.com/${region.folder}/"`);
  arPage = arPage.replace(/"url": "https:\/\/darbalmaha\.com\/"/g, `"url": "https://darbalmaha.com/${region.folder}/"`);
  arPage = arPage.replace(/"latitude": 25\.2854/g, `"latitude": ${region.lat}`);
  arPage = arPage.replace(/"longitude": 51\.4320/g, `"longitude": ${region.lon}`);
  arPage = arPage.replace(/"streetAddress": "الريان"/g, `"streetAddress": "${region.nameAr}"`);
  arPage = arPage.replace(/"addressLocality": "Al Rayyan"/g, `"addressLocality": "${region.nameEn}"`);
  arPage = arPage.replace(/"addressRegion": "Al Rayyan"/g, `"addressRegion": "${region.nameEn}"`);

  // Breadcrumb schema replacement
  const arBreadcrumbTarget = `"itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://darbalmaha.com/"
      }]`;
  const arBreadcrumbReplacement = `"itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://darbalmaha.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "تنظيف في ${region.nameAr}",
        "item": "https://darbalmaha.com/${region.folder}/"
      }]`;
  arPage = arPage.replace(arBreadcrumbTarget, arBreadcrumbReplacement);

  // Insert Local SEO rich text section before footer
  const seoSectionAr = `
    <!-- Local SEO Content Section -->
    <section class="section-padding local-seo-section bg-light" style="padding: 60px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
        <div class="container">
            <h2 class="section-title" style="margin-bottom: 30px; color: var(--primary); text-align: center;">${region.nameAr === 'الدوحة' ? 'شركة تنظيف في الدوحة | درب المها' : 'شركة تنظيف في ' + region.nameAr + ' | درب المها'}</h2>
            <div class="local-seo-content" style="font-size: 1.1rem; line-height: 1.8; color: #444; max-width: 900px; margin: 0 auto; text-align: justify;">
                ${region.contentAr}
            </div>
        </div>
    </section>
  `;
  arPage = arPage.replace('<footer id="contact">', seoSectionAr + '\n    <footer id="contact">');

  // Write Arabic file
  const arDestDir = path.join(__dirname, region.folder);
  if (!fs.existsSync(arDestDir)) fs.mkdirSync(arDestDir, { recursive: true });
  fs.writeFileSync(path.join(arDestDir, 'index.html'), arPage, 'utf8');
  console.log(`- Generated: ${region.folder}/index.html`);


  // 2. Generate English Region Page
  let enPage = enTemplate;

  // Replace title element
  enPage = enPage.replace(/<title[^>]*>[\s\S]*?<\/title>/i, `<title>${region.titleEn}</title>`);

  // Replace meta description
  enPage = enPage.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${region.descEn}">`);

  // Replace meta keywords
  enPage = enPage.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${region.keywordsEn}">`);

  // Replace canonical tag
  enPage = enPage.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="https://darbalmaha.com/en/${region.folder}/">`);

  // Replace hreflang tags
  enPage = enPage.replace(/<link\s+rel="alternate"\s+hreflang="ar"\s+href="https:\/\/darbalmaha\.com\/"\s*\/?>/i, `<link rel="alternate" hreflang="ar" href="https://darbalmaha.com/${region.folder}/">`);
  enPage = enPage.replace(/<link\s+rel="alternate"\s+hreflang="en"\s+href="https:\/\/darbalmaha\.com\/en\/"\s*\/?>/i, `<link rel="alternate" hreflang="en" href="https://darbalmaha.com/en/${region.folder}/">`);
  enPage = enPage.replace(/<link\s+rel="alternate"\s+hreflang="x-default"\s+href="https:\/\/darbalmaha\.com\/"\s*\/?>/i, `<link rel="alternate" hreflang="x-default" href="https://darbalmaha.com/${region.folder}/">`);

  // Replace Open Graph url, title, description
  enPage = enPage.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="https://darbalmaha.com/en/${region.folder}/">`);
  enPage = enPage.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${region.titleEn}">`);
  enPage = enPage.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${region.descEn}">`);

  // Replace Twitter card title, description
  enPage = enPage.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${region.titleEn}">`);
  enPage = enPage.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${region.descEn}">`);

  // Replace Geo Tags
  enPage = enPage.replace(/<meta\s+name="geo\.placename"\s+content="[^"]*"\s*\/?>/i, `<meta name="geo.placename" content="${region.nameEn}">`);
  enPage = enPage.replace(/<meta\s+name="geo\.position"\s+content="[^"]*"\s*\/?>/i, `<meta name="geo.position" content="${region.lat};${region.lon}">`);
  enPage = enPage.replace(/<meta\s+name="ICBM"\s+content="[^"]*"\s*\/?>/i, `<meta name="ICBM" content="${region.lat}, ${region.lon}">`);

  // Replace Hero H1 and Paragraph
  enPage = enPage.replace(/<h1>Hospitality & Cleaning Company Qatar \| DarbAlmaha<\/h1>/i, `<h1>${region.h1En}</h1>`);
  enPage = enPage.replace(/<p>We offer premium hospitality & cleaning services: event staff, hourly maids, deep cleaning, sofa[\s\S]*?availability across Qatar.<\/p>/i, `<p>${region.pEn}</p>`);

  // Replace Mobile Menu Container to inject hidden langToggle + العربي visible link
  enPage = enPage.replace(/<button\s+class="mobile-menu-btn"\s+aria-label="Toggle Menu">&#9776;<\/button>/i, `<button id="langToggle" style="display:none;"></button><a href="../../${region.folder}/" class="lang-switch" style="margin-right: 15px;">عربي</a><button class="mobile-menu-btn" aria-label="Toggle Menu">&#9776;</button>`);

  // Adjust asset paths
  enPage = enPage.replace(/href="\.\.\/css\/landing\.min\.css"/g, 'href="../../css/landing.min.css"');
  enPage = enPage.replace(/href="\.\.\/css\/landing\.css"/g, 'href="../../css/landing.css"');
  enPage = enPage.replace(/src="\.\.\/img\//g, 'src="../../img/');
  enPage = enPage.replace(/srcset="\.\.\/img\//g, 'srcset="../../img/');
  enPage = enPage.replace(/imagesrcset="\.\.\/img\//g, 'imagesrcset="../../img/');
  enPage = enPage.replace(/href="\.\.\/img\//g, 'href="../../img/');
  enPage = enPage.replace(/src="\.\.\/js\//g, 'src="../../js/');
  enPage = enPage.replace(/href="\.\.\/"/g, 'href="../../"');
  enPage = enPage.replace(/href="\.\.\/privacy-policy\.html"/g, 'href="../../privacy-policy.html"');
  enPage = enPage.replace(/href="\.\.\/terms\.html"/g, 'href="../../terms.html"');
  enPage = enPage.replace(/href="\.\.\/refund-policy\.html"/g, 'href="../../refund-policy.html"');
  enPage = enPage.replace(/href="\.\.\/en\/"/g, 'href="../../en/"');

  // Schema.org adjustments
  enPage = enPage.replace(/"@id": "https:\/\/darbalmaha\.com\/en\/"/g, `"@id": "https://darbalmaha.com/en/${region.folder}/"`);
  enPage = enPage.replace(/"url": "https:\/\/darbalmaha\.com\/en\/"/g, `"url": "https://darbalmaha.com/en/${region.folder}/"`);
  enPage = enPage.replace(/"latitude": 25\.2854/g, `"latitude": ${region.lat}`);
  enPage = enPage.replace(/"longitude": 51\.4320/g, `"longitude": ${region.lon}`);
  enPage = enPage.replace(/"streetAddress": "Al Rayyan"/g, `"streetAddress": "${region.nameEn}"`);
  enPage = enPage.replace(/"addressLocality": "Al Rayyan"/g, `"addressLocality": "${region.nameEn}"`);
  enPage = enPage.replace(/"addressRegion": "Al Rayyan"/g, `"addressRegion": "${region.nameEn}"`);

  // Breadcrumb schema replacement
  const enBreadcrumbTarget = `"itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://darbalmaha.com/en/"
      }]`;
  const enBreadcrumbReplacement = `"itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://darbalmaha.com/en/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Cleaning in ${region.nameEn}",
        "item": "https://darbalmaha.com/en/${region.folder}/"
      }]`;
  enPage = enPage.replace(enBreadcrumbTarget, enBreadcrumbReplacement);

  // Insert Local SEO rich text section before footer
  const seoSectionEn = `
    <!-- Local SEO Content Section -->
    <section class="section-padding local-seo-section bg-light" style="padding: 60px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
        <div class="container">
            <h2 class="section-title" style="margin-bottom: 30px; color: var(--primary); text-align: center;">${region.nameEn === 'Doha' ? 'Cleaning Company in Doha | DarbAlmaha' : 'Cleaning Company in ' + region.nameEn + ' | DarbAlmaha'}</h2>
            <div class="local-seo-content" style="font-size: 1.1rem; line-height: 1.8; color: #444; max-width: 900px; margin: 0 auto; text-align: justify;">
                ${region.contentEn}
            </div>
        </div>
    </section>
  `;
  enPage = enPage.replace('<footer id="contact">', seoSectionEn + '\n    <footer id="contact">');

  // Write English file
  const enDestDir = path.join(__dirname, 'en', region.folder);
  if (!fs.existsSync(enDestDir)) fs.mkdirSync(enDestDir, { recursive: true });
  fs.writeFileSync(path.join(enDestDir, 'index.html'), enPage, 'utf8');
  console.log(`- Generated: en/${region.folder}/index.html`);
});

console.log('All local SEO pages generated successfully!');
