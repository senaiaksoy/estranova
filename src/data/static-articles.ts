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
    path: '/bilimsel-pencere/yeni-arastirmalar/sosyal-medyada-menopoz-bilgisi',
    title: 'Sosyal Medyada Menopoz Bilgisi — Hangi Sinyaller Güvenilir?',
    description:
      'Feed\'inizden geçen menopoz içeriği güvenilir mi? Yıllarca medyanın içinden geçmiş bir editörün, sosyal medya bilgisini değerlendirirken aklında tuttuğu dört sinyal. Bilgi okuryazarlığı için pratik bir çerçeve.',
    publishedDate: '26 Nisan 2026',
    writerSlug: 'rima-erdemir',
    section: 'Bilimsel Pencere',
    sectionPath: '/bilimsel-pencere',
    keywords: ['sosyal medya', 'bilgi okuryazarlığı', 'menopoz bilgisi', 'sağlık bilgisi', 'kaynak doğrulama', 'editöryel filtre', 'medya okuryazarlığı', 'kanıt'],
  },
  {
    path: '/zamansiz-yasam/mevsimle-yemek-yemek',
    title: 'Mevsimle Yemek Yemek — Anadolu Sofrasının 40 Sonrası Sağlık Diline Çevirisi',
    description:
      'Mevsiminde, yerel ve sade bir Anadolu sofrasının 40 sonrası kadın sağlığına nasıl tercüme olduğunu mutfaktan anlatan akran tonlu rehber.',
    publishedDate: '26 Nisan 2026',
    writerSlug: 'gamze-cizreli',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: [
      'mevsimlik beslenme',
      'Anadolu mutfağı',
      'Akdeniz beslenme',
      '40 sonrası beslenme',
      'menopoz',
      'sürdürülebilir sofra',
    ],
  },
  {
    path: '/hormonal-gecis/menopoz/hrt-yillar-sonra-baslamak',
    title: 'HRT\'ye Yıllar Sonra Başlamak: Bir Karar, Bir Yolculuk',
    description:
      'Dokuz yıl önce HRT olmadan başlayan menopoz yolculuğu; klinik kılavuzların değişimine tanıklık; ve sonunda hekimle birlikte yeni bir adıma karar verme süreci. Kişisel bir kayıt.',
    publishedDate: '26 Nisan 2026',
    writerSlug: 'basak-pelister',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['HRT', 'hormon tedavisi', 'menopoz', 'erken menopoz', 'geç başlamak', 'klinik kılavuzlar', 'bireysel takip', 'kemik sağlığı', 'osteoporoz'],
  },
  {
    path: '/hormonal-gecis/perimenopoz/perimenopozda-adet-duzensizligi-ne-normal-ne-zaman-doktora-gidilmeli',
    title: 'Perimenopozda Adet Düzensizliği: Ne Normal, Ne Zaman Doktora Gidilmeli?',
    description:
      'Perimenopozda adet düzenindeki değişimleri, normal kabul edilen durumları, alarm belirtilerini ve doktora ne zaman başvurulması gerektiğini anlatan rehber.',
    publishedDate: '25 Nisan 2026',
    writerSlug: 'isik-selin-kuyumcu',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['perimenopoz', 'adet düzensizliği', 'kanama', 'menopoz geçişi', 'doktor başvurusu', 'alarm belirtileri'],
  },
  {
    path: '/hormonal-gecis/perimenopoz/perimenopozda-beyin-sisi-odaklanma-rehberi',
    title: 'Perimenopozda Beyin Sisi: Günlük Hayatta Odaklanmayı Geri Kazanma Rehberi',
    description:
      'Perimenopozda beyin sisi (odaklanma güçlüğü, unutkanlık, kelime bulma zorlanması) neden artar? Uyku, stres ve günlük yaşam düzeni üzerinden daha net bir yol haritası sunan rehber.',
    publishedDate: '26 Nisan 2026',
    writerSlug: 'isik-selin-kuyumcu',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['perimenopoz', 'beyin sisi', 'odaklanma', 'unutkanlık', 'uyku', 'stres', 'zihinsel yorgunluk'],
  },
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
    path: '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi',
    title: 'Sıcak Basması ve Gece Terlemesi — Menopozda Vazomotor Belirtiler Rehberi',
    description:
      'Sıcak basması ve gece terlemesinin nedenlerini, tetikleyicilerini ve kanıt temelli destek seçeneklerini sade bir dille ele alan rehber.',
    publishedDate: '25 Nisan 2026',
    writerSlug: 'berna-aksoy',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['sıcak basması', 'gece terlemesi', 'menopoz', 'perimenopoz', 'uyku', 'tetikleyiciler'],
  },
  {
    path: '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma',
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
    description: '40 yaş sonrası dönemde D vitamini ihtiyacını, eksiklik belirtilerini, doz aralıklarını ve doğal kaynakları bilimsel bir dille ele alan rehber.',
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
    path: '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz',
    title: 'Cinsellikte Ağrı — Menopozda Dispareuniya Rehberi',
    description: 'Menopozda cinsellikte ağrı veya rahatsızlığın nedenleri ve tedavi seçenekleri hakkında kapsamlı rehberlik.',
    publishedDate: '3 Nisan 2026',
    writerSlug: 'duygu-karaosmanoglu',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['cinsellikte ağrı', 'cinsel ilişkide ağrı', 'disparoni', 'dispareuni', 'menopoz', 'mahrem bölge', 'vajinal kuruluk', 'hormon'],
  },
  {
    path: '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz',
    title: 'Menopozda Mahrem Bölge Değişimleri',
    description: 'Menopozda mahrem bölgede yaşanan kuruluk, hassasiyet ve doku değişimlerini (vulvovajinal atrofi); günlük konfor ve bakım seçeneklerini sade bir dille anlatan rehber.',
    publishedDate: '31 Mart 2026',
    writerSlug: 'duygu-karaosmanoglu',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['mahrem bölge', 'vajinal atrofi', 'vulvovajinal atrofi', 'vajinal kuruluk', 'menopoz', 'östrojen', 'nem', 'cinsel sağlık'],
  },
  {
    path: '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri',
    title: 'Menopozda Cilt Değişimleri — Anlamak ve Bakım Rehberi',
    description: 'Menopoz döneminde ciltte görülen değişimleri, kanıt düzeyleriyle bakım seçeneklerini ve günlük destek adımlarını açıklayan rehber.',
    publishedDate: '27 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['menopoz', 'cilt', 'kolajen', 'östrojen', 'yaşlanma', 'topikal'],
  },
  {
    path: '/zihin-denge/bilissel-saglik/bellek-odaklanma-menopoz',
    title: 'Bellek ve Odaklanma — Menopozda Kognitif Değişimler',
    description: 'Menopozda bellek kayması ve odaklanma güçlüğünün nedenleri ile yönetim yöntemleri hakkında rehberlik.',
    publishedDate: '24 Mart 2026',
    writerSlug: 'rima-erdemir',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'bellek', 'odaklanma', 'beyin sisi', 'zihinsel değişim', 'perimenopoz'],
  },
  {
    path: '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz',
    title: 'Stres Yönetimi — Menopozda Stres ve Adaptasyon',
    description: 'Menopozda stres yönetimi teknikleri ve hormon değişikliklerinin stres tepkisine etkisi hakkında rehberlik.',
    publishedDate: '20 Mart 2026',
    writerSlug: 'gamze-cizreli',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'perimenopoz', 'stres', 'anksiyete', 'kortizol', 'rahatlama'],
  },
  {
    path: '/zihin-denge/duygusal-denge/ruh-hali-degisimleri-menopoz',
    title: 'Ruh Hali Değişimleri ve Menopoz — Depresyon, Anksiyete, Duygudurum',
    description: 'Menopozda depresyon, anksiyete ve duygudurum dalgalanmalarını bilimsel bir dille ele alan rehber.',
    publishedDate: '16 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'perimenopoz', 'depresyon', 'anksiyete', 'duygudurum', 'ruh hali'],
  },
  {
    path: '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz',
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
    path: '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik',
    title: 'Östrojen Biyolojisi ve Sağlık',
    description: 'Östrojenin kemik, kalp, beyin ve metabolizma üzerindeki etkilerini bilimsel bir dille açıklayan rehber.',
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
    keywords: ['menopoz', 'menopoz geçişi', 'FSH', 'östrojen', 'menopoz sonrası dönem', 'hormonal geçiş'],
  },
  {
    path: '/hormonal-gecis/perimenopoz/perimenopoz-nedir',
    title: 'Perimenopoz Nedir? — Temel Rehber',
    description: 'Perimenopoz sürecinin belirtilerini, evrelerini ve günlük yaşamda uygulanabilir destek adımlarını anlatan kapsamlı rehber.',
    publishedDate: '17 Şubat 2026',
    writerSlug: 'berna-aksoy',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: ['perimenopoz', 'geçiş dönemi', 'hormon dalgalanması', 'düzensiz adet', 'menopoz', 'östrojen'],
  },
];

export function getStaticArticleAuthor(slug: string) {
  const entry = staticArticles.find((a) => a.path === slug);
  if (!entry) return null;
  return getWriter(entry.writerSlug);
}
