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
    path: '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi',
    title: 'Menopoza Hazırlıkta İlk Kontrol Dosyası: Hangi Test Ne Söyler, Hangisi Herkes İçin Gerekli Değildir?',
    description:
      'Menopoza yaklaşırken hangi kan tahlilleri, taramalar ve temel kontroller gerçekten anlamlıdır? Bu rehber, sık istenen testleri panik yaratmadan açıklamaya, her sonucun ne söylediğini ayırt etmeye ve gereksiz test kalabalığı içinde daha sakin bir çerçeve kurmaya yardımcı olur.',
    publishedDate: '4 Mayıs 2026',
    writerSlug: 'estranova-editorial',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: [
      'menopoza hazırlık',
      'kan tahlili',
      'FSH',
      'B12',
      'ferritin',
      'tiroid',
      'D vitamini',
      'mamografi',
      'smear',
      '40 sonrası sağlık',
    ],
  },
  {
    path: '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik',
    title: 'Perimenopozda Zihinsel Bulanıklık: Unutkanlık Hissi Günlük Hayatta Nasıl Okunur?',
    description:
      'Perimenopoz döneminde kelime bulmakta zorlanma, unutkanlık hissi, odak dalgalanması ve zihinsel yorgunluk neden olur? Bu rehber, gündelik hayatta fark edilen bilişsel değişimleri panik yaratmadan anlamaya ve ne zaman daha dikkatli değerlendirme gerektiğini ayırt etmeye yardımcı olur.',
    publishedDate: '4 Mayıs 2026',
    writerSlug: 'estranova-editorial',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: [
      'perimenopoz',
      'beyin sisi',
      'unutkanlık',
      'odaklanma',
      'zihinsel yorgunluk',
      'bilişsel sağlık',
      'uyku',
      'stres',
      'hormon değişimi',
    ],
  },
  {
    path: '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler',
    title: 'Perimenopozda İlk İşaretler: “Bende Bir Şey Değişiyor” Dedirten Dönem',
    description:
      'Perimenopozun ilk işaretlerini adet düzeni, uyku, sıcak basması, ruh hali, odaklanma ve beden hissi üzerinden panik yaratmadan okumak için Berna Aksoy’dan sakin bir rehber.',
    publishedDate: '4 Mayıs 2026',
    writerSlug: 'berna-aksoy',
    section: 'Hormonal Geçiş · Perimenopoz',
    sectionPath: '/hormonal-gecis',
    keywords: [
      'perimenopoz',
      'menopoz geçişi',
      'adet düzensizliği',
      'sıcak basması',
      'gece terlemesi',
      'uyku',
      'beyin sisi',
      'FSH',
    ],
  },
  {
    path: '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz',
    title: 'Menopozda Libido Değişimi — Sessiz Bir Konunun Açık Sözlü Rehberi',
    description:
      'Menopozda cinsel istek nasıl değişir, neden tek bir nedene bağlanamaz, hangi seçenekler vardır? Yargısız, jargonsuz ve çözüm odaklı bir okuma.',
    publishedDate: '27 Nisan 2026',
    writerSlug: 'senai-aksoy',
    section: 'Beden & Yakınlık',
    sectionPath: '/beden-yakinlik',
    keywords: ['libido', 'cinsel istek', 'menopoz', 'GSM', 'lokal östrojen', 'testosteron', 'cinsel sağlık', '40+ kadın', 'mahrem sağlık'],
  },
  {
    path: '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme',
    title: 'HRT Yan Etkileri ve İzleme — İlk Aylarda Neyi Bekleyelim, Neyi Soralım?',
    description:
      'Hormon tedavisinin ilk haftalarında ve aylarında karşılaşılabilecek yumuşak yan etkiler, ne zaman geçici sayıldıkları, hekimle birlikte kurulan izleme takvimi ve hangi belirtilerin gecikmeden değerlendirilmesi gerektiği üzerine sakin bir rehber.',
    publishedDate: '27 Nisan 2026',
    writerSlug: 'senai-aksoy',
    section: 'Hormonal Geçiş',
    sectionPath: '/hormonal-gecis',
    keywords: [
      'HRT',
      'hormon tedavisi yan etkileri',
      'meme hassasiyeti',
      'baş ağrısı',
      'kanama düzensizliği',
      'menopoz',
      'izleme takvimi',
      '3 aylık kontrol',
      'alarm belirtileri',
    ],
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
    writerSlug: 'senai-aksoy',
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
    path: '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz',
    title: 'Stres Yönetimi — Menopozda Stres ve Adaptasyon',
    description: 'Menopozda stres yönetimi teknikleri ve hormon değişikliklerinin stres tepkisine etkisi hakkında rehberlik.',
    publishedDate: '20 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'perimenopoz', 'stres', 'anksiyete', 'kortizol', 'rahatlama'],
  },
  {
    path: '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz',
    title: 'Uyku Bozukluğu ve Menopoz — Dinlenmeyi Yeniden Kazanma Rehberi',
    description: 'Menopoz döneminde uyku bozukluklarını anlamak ve kanıt temelli adımlarla uyku kalitesini desteklemek için kapsamlı rehber.',
    publishedDate: '12 Mart 2026',
    writerSlug: 'senai-aksoy',
    section: 'Zihin & Denge',
    sectionPath: '/zihin-denge',
    keywords: ['menopoz', 'uyku', 'uyku bozukluğu', 'insomnia', 'sıcak basması', 'uyku hijyeni'],
  },
  {
    path: '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin',
    title: 'Akşam Hareketi Uykuyu Bozar mı, Toparlar mı?',
    description:
      'Akşam egzersizi, melatonin, beden ısısı ve perimenopozda uyku ilişkisi. Alara Baykent sporcu beden okumasıyla, performans baskısı yaratmadan sürdürülebilir akşam hareketini anlatıyor.',
    publishedDate: '4 Mayıs 2026',
    writerSlug: 'alara-baykent',
    section: 'Zihin & Denge · Uyku & Dinlenme',
    sectionPath: '/zihin-denge',
    keywords: [
      'akşam egzersizi',
      'uyku',
      'melatonin',
      'perimenopoz',
      'menopoz',
      'beden ısısı',
      'hafif hareket',
      'sürdürülebilir egzersiz',
    ],
  },
  {
    path: '/zamansiz-yasam/beslenme-yaslanma',
    title: 'Beslenme ve Yaşlanma — 40+ Kadınlar için Beslenme Rehberi',
    description: 'Menopoz döneminde protein, vitaminler ve antioksidanları tabakta daha bilinçli konumlandırırken kişisel hedefleri hekim veya diyetisyenle netleştirmeyi hatırlatan rehber.',
    publishedDate: '9 Mart 2026',
    writerSlug: 'berna-aksoy',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: ['menopoz', 'beslenme', 'protein', 'kalsiyum', 'omega-3', 'anti-inflamatuar'],
  },
  {
    path: '/zamansiz-yasam/kilo-artisi-menopoz',
    title: 'Menopozda Kilo Artışı — Aynı Yaşamda Değişen Bedenle Sakin Bir Sohbet',
    description:
      'Menopoz geçişinde kilo artışının arkasındaki östrojen-yağ dağılımı ilişkisini, kas kütlesinin neden tartıdan daha belirleyici olduğunu ve diyet kültürüne kapılmadan denenebilecek küçük adımları yaşıt tonuyla anlatan rehber.',
    publishedDate: '28 Nisan 2026',
    writerSlug: 'berna-aksoy',
    section: 'Zamansız Yaşam',
    sectionPath: '/zamansiz-yasam',
    keywords: [
      'menopoz',
      'kilo artışı',
      'östrojen',
      'visseral yağ',
      'bel çevresi',
      'sarkopeni',
      'kas kütlesi',
      'metabolizma',
      'insülin direnci',
      'protein',
      'direnç egzersizi',
      '40+ kadın',
    ],
  },
  {
    path: '/zamansiz-yasam/kemik-sagligi-40-sonrasi',
    title: '40 Yaşından Sonra Kemik Sağlığı — Koruyucu Rehber',
    description: '40 yaş sonrası kemik sağlığını desteklemek için tarama, beslenme, hareket ve tıbbi seçenekleri anlatan kapsamlı rehber.',
    publishedDate: '1 Mart 2026',
    writerSlug: 'berna-aksoy',
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
  ];

export function getStaticArticleAuthor(slug: string) {
  const entry = staticArticles.find((a) => a.path === slug);
  if (!entry) return null;
  return getWriter(entry.writerSlug);
}
