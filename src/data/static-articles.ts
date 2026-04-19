import { getWriter } from '../utils/article-schema';

export interface StaticArticleEntry {
  path: string; // pathname, leading slash
  title: string;
  description: string;
  publishedDate: string; // TR long form ("14 Nisan 2026")
  writerSlug: string;
  section: string;
  sectionPath?: string;
  keywords: string[];
}

// Ana repo'daki 17 statik hub-style makalenin merkezi manifest'i.
// RSS feed + editöryal arşiv sıralaması için tek kaynak.
// scripts/extract-article-manifest.mjs ile makale frontmatter'larından
// extract edildi (2026-04-19). Yeni makale eklenirken bu listeye de ekleyin
// — sitemap otomatik Astro'dan gelir, RSS bu manifest'e bağlıdır.
export const staticArticles: StaticArticleEntry[] = [
  {
    path: '/zamansiz-yasam/deneysel/nad-plus-takviyesi',
    title: 'NAD+ Takviyesi: Bilim Ne Diyor?',
    description: 'NAD+ takviyeleri hakkında güncel bilimsel verileri, olası faydaları, sınırlılıkları ve güvenlik başlıklarını sade bir dille ele alan rehber.',
    publishedDate: '17 Nisan 2026',
    writerSlug: 'basak-pelister',
    section: 'Zamansız Yaşam · Deneysel',
    sectionPath: '/zamansiz-yasam',
    keywords: ['NMN', 'NR', 'NAD+', 'takviye', 'menopoz', 'güvenlik'],
  },
  {
    path: '/bilimsel-pencere/nad-plus-hucresel-yaslanma',
    title: 'NAD+ ve Hücresel Yaşlanma — Gelişmekte Olan Bilim',
    description: 'NAD+ biyolojisi, yaşlanma ilişkisi ve erken evre insan araştırmalarını kanıt düzeyleriyle açıklayan bilimsel derleme.',
    publishedDate: '14 Nisan 2026',
    writerSlug: 'basak-pelister',
    section: 'Bilimsel Pencere',
    sectionPath: '/bilimsel-pencere',
    keywords: ['NAD+', 'hücresel yaşlanma', 'sirtuin', 'biohacking', 'menopoz'],
  },
  {
    path: '/zamansiz-yasam/vitaminler/d-vitamini-rehberi',
    title: 'D Vitamini: 40 Yaşından Sonra Ne Kadar Almanız Gerekiyor?',
    description: '40 yaş sonrası dönemde D vitamini ihtiyacını, eksiklik belirtilerini, doz aralıklarını ve doğal kaynakları bilimsel bir çerçevede ele alan rehber.',
    publishedDate: '10 Nisan 2026',
    writerSlug: 'rima-erdemir',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: ['D vitamini', 'dozaj', '40 yaş sonrası', 'eksiklik', 'takviye', 'doğal kaynaklar'],
  },
  {
    path: '/zamansiz-yasam/d-vitamini-rehberi',
    title: 'D Vitamini Rehberi',
    description: 'D vitamini taraması, beslenme, güneş maruziyeti ve takviye planını dengeli biçimde ele alan rehber.',
    publishedDate: '7 Nisan 2026',
    writerSlug: 'rima-erdemir',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: ['D vitamini', 'menopoz', 'kemik sağlığı', 'güneş', 'takviye', 'tarama'],
  },
  {
    path: '/beden-yakinlik/yakinlik-agrisi-menopoz',
    title: 'Yakınlık Sırasında Ağrı — Menopozda Dispareuniya Rehberi',
    description: 'Menopozda yakınlık sırasında ağrı veya rahatsızlığın nedenleri ve tedavi seçenekleri hakkında kapsamlı rehberlik.',
    publishedDate: '3 Nisan 2026',
    writerSlug: 'berna-aksoy',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['disparoni', 'menopoz', 'yakınlık', 'vajinal kuruluk', 'hormon'],
  },
  {
    path: '/beden-yakinlik/vajinal-saglik-menopoz',
    title: 'Vajinal Sağlık ve Menopoz',
    description: 'Menopozda vajinal kuruluk, hassasiyet ve bakım seçeneklerini bilimsel çerçevede anlatan rehber.',
    publishedDate: '31 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['vajinal atrofi', 'menopoz', 'östrojen', 'nem', 'intim sağlık'],
  },
  {
    path: '/beden-yakinlik/menopozda-cilt-degisimleri',
    title: 'Menopozda Cilt Değişimleri — Anlamak ve Bakım Rehberi',
    description: 'Menopoz döneminde ciltte görülen değişimleri, kanıt düzeyleriyle bakım seçeneklerini ve günlük destek adımlarını açıklayan rehber.',
    publishedDate: '27 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['menopoz', 'cilt', 'kolajen', 'östrojen', 'yaşlanma', 'topikal'],
  },
  {
    path: '/zihin-denge/bellek-odaklanma-menopoz',
    title: 'Bellek ve Odaklanma — Menopozda Kognitif Değişimler',
    description: 'Menopozda bellek kayması ve odaklanma güçlüğünün nedenleri ile yönetim stratejileri hakkında rehberlik.',
    publishedDate: '24 Mart 2026',
    writerSlug: 'rima-erdemir',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'bellek', 'odaklanma', 'beyin sisi', 'kognitif değişim', 'perimenopoz'],
  },
  {
    path: '/zihin-denge/stres-yonetimi-menopoz',
    title: 'Stres Yönetimi — Menopozda Stres ve Adaptasyon',
    description: 'Menopozda stres yönetimi teknikleri ve hormon değişikliklerinin stres tepkisine etkisi hakkında rehberlik.',
    publishedDate: '20 Mart 2026',
    writerSlug: 'gamze-cizreli',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'perimenopoz', 'stres', 'anksiyete', 'kortizol', 'rahatlama'],
  },
  {
    path: '/zihin-denge/ruh-hali-degisimleri-menopoz',
    title: 'Ruh Hali Değişimleri ve Menopoz — Depresyon, Anksiyete, Duygudurum',
    description: 'Menopozda depresyon, anksiyete ve duygudurum dalgalanmalarını bilimsel çerçevede ele alan rehber.',
    publishedDate: '16 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'perimenopoz', 'depresyon', 'anksiyete', 'duygudurum', 'ruh hali'],
  },
  {
    path: '/zihin-denge/uyku-bozuklugu-menopoz',
    title: 'Uyku Bozukluğu ve Menopoz — Dinlenmeyi Yeniden Kazanma Rehberi',
    description: 'Menopoz döneminde uyku bozukluklarını anlamak ve kanıt temelli adımlarla uyku kalitesini desteklemek için kapsamlı rehber.',
    publishedDate: '12 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'uyku', 'uyku bozukluğu', 'insomnia', 'sıcak basması', 'uyku hijyeni'],
  },
  {
    path: '/zamansiz-yasam/beslenme-yaslanma',
    title: 'Beslenme ve Yaşlanma — 40+ Kadınlar için Beslenme Rehberi',
    description: 'Menopoz döneminde metabolik değişiklikleri desteklemek için protein, vitaminler ve antioksidanlar hakkında rehberlik.',
    publishedDate: '9 Mart 2026',
    writerSlug: 'gamze-cizreli',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: ['menopoz', 'beslenme', 'protein', 'kalsiyum', 'omega-3', 'anti-inflamatuar'],
  },
  {
    path: '/zamansiz-yasam/hareket-saglik-menopoz',
    title: 'Hareket ve Sağlık — Menopozda Egzersiz Rehberi',
    description: 'Menopozda hareketin belirtileri hafifletme, kemik sağlığını koruma ve kardiyovasküler sağlığı destekleme yolları.',
    publishedDate: '5 Mart 2026',
    writerSlug: 'alara-baykent',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: ['menopoz', 'hareket', 'egzersiz', 'direnç antrenmanı', 'kardiyovasküler', 'kemik sağlığı'],
  },
  {
    path: '/zamansiz-yasam/kemik-sagligi-40-sonrasi',
    title: '40 Yaşından Sonra Kemik Sağlığı — Koruyucu Rehber',
    description: '40 yaş sonrası kemik sağlığını desteklemek için tarama, beslenme, hareket ve tıbbi seçenekleri anlatan kapsamlı rehber.',
    publishedDate: '1 Mart 2026',
    writerSlug: 'gamze-cizreli',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: ['kemik sağlığı', 'osteoporoz', 'menopoz', 'kalsiyum', 'direnç egzersizi', 'D vitamini'],
  },
  {
    path: '/bilimsel-pencere/estrogen-biyolojisi-saglik',
    title: 'Östrojen Biyolojisi ve Sağlık',
    description: 'Östrojenin kemik, kalp, beyin ve metabolizma üzerindeki etkilerini bilimsel çerçevede açıklayan rehber.',
    publishedDate: '25 Şubat 2026',
    writerSlug: 'rima-erdemir',
    section: 'Bilimsel Pencere',
    sectionPath: '/bilimsel-pencere',
    keywords: ['östrojen', 'menopoz', 'hormon', 'reseptör', 'kemik', 'kardiyovasküler'],
  },
  {
    path: '/hormonal-gecis/menopoz/menopoz-nedir',
    title: 'Menopoz Nedir? - Temel Rehber',
    description: 'Menopozun tanımını, evrelerini, belirtilerini ve uzun vadeli sağlık gündemini ele alan sade rehber.',
    publishedDate: '21 Şubat 2026',
    writerSlug: 'berna-aksoy',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['menopoz', 'klimakterik', 'FSH', 'östrojen', 'postmenopoz', 'hormonal geçiş'],
  },
  {
    path: '/hormonal-gecis/perimenopoz/perimenopoz-nedir',
    title: 'Perimenopoz Nedir? — Temel Rehber',
    description: 'Perimenopoz sürecinin belirtilerini, evrelerini ve günlük yaşamda uygulanabilir destek adımlarını anlatan kapsamlı rehber.',
    publishedDate: '17 Şubat 2026',
    writerSlug: 'berna-aksoy',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['perimenopoz', 'geçiş dönemi', 'hormon dalgalanması', 'düzensiz döngü', 'menopoz', 'östrojen'],
  },
];

export function getStaticArticleAuthor(slug: string) {
  const entry = staticArticles.find((a) => a.path === slug);
  if (!entry) return null;
  return getWriter(entry.writerSlug);
}
