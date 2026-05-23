/**
 * Belirti taksonomisi — tek kaynak.
 *
 * Hem anasayfa SymptomNavigation bento'su hem de /symptoms rehber sayfası
 * bu dosyadan beslenir. Yeni bir belirti eklendiğinde veya canonical
 * href değiştiğinde sadece burası güncellenir.
 *
 * Sıra: anasayfa bento'sundaki görsel önceliği (featured: 2 büyük kart önce).
 */

export interface Symptom {
  /** URL slug — internal id; href değil */
  slug: string;
  /** Görsel kategori — /symptoms sayfasında chip ve gruplama için */
  category: string;
  /** Kart başlığı — bento ve /symptoms ortak */
  title: string;
  /** Kısa açıklama — bento kartı (1 cümle) */
  desc: string;
  /** Uzun açıklama — /symptoms rehber kartı (2–3 cümle, nötr okuma) */
  longDesc: string;
  /** Editöryal italic caption — bento kartı altı */
  caption: string;
  /** Kanıt etiketi — "Kanıt 4–5", "Karma kanıt" gibi */
  evidence: string;
  /** Belirtiye bağlı yayında olan makale sayısı */
  articleCount: number;
  /** Canonical hub/article href — bento kartı ve /symptoms CTA buraya gider */
  href: string;
  /** Bento görseli — public/images/symptoms/*.webp */
  image: string;
  /** Görsel alt metni — duotone still-life açıklaması */
  alt: string;
  /** Bento'da büyük kart (col-span 6) olarak öne çıkar */
  featured?: boolean;
}

export const symptoms: Symptom[] = [
  {
    slug: 'sicak-basmasi',
    category: 'Vazomotor',
    title: 'Sıcak basması',
    desc: 'Aniden yükselen ısı, terleme ve kalp atışı — gece ya da gündüz, dakikalar içinde gelip geçen kısa dalgalar.',
    longDesc:
      'Gün içinde ya da gece, dakikalar içinde gelip geçen ısı dalgaları; çoğu zaman terleme, ardından üşüme hissi eşlik eder. Sıklığı, süresi ve günün hangi saatinde yoğunlaştığı kişiden kişiye değişir.',
    caption: 'Geceyi ısı haritasıyla okumak.',
    evidence: 'Kanıt 4–5',
    articleCount: 8,
    href: '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/',
    image: '/images/symptoms/sicak-basmasi.webp',
    alt: 'Sade ahşap zeminde buruşmuş krem keten çarşaf, üstünde küçük bir pirinç termometre, pencereden gelen yumuşak ışık.',
    featured: true,
  },
  {
    slug: 'uyku-bozuklugu',
    category: 'Uyku',
    title: 'Uyku bozukluğu',
    desc: 'Uykuya dalmakta zorlanmak, gece sık uyanmak ve sabah yorgun kalkmak — ısı dalgalarıyla iç içe ya da kendi başına.',
    longDesc:
      'Uykuya geç dalmak, gece bölünmeleri, sabaha karşı uykuya dönememek ya da erken uyanmak biçiminde tarif edilir. Gece terlemesiyle iç içe geçebilir; bazen kendi başına seyreder ve gündüz enerjisini doğrudan etkiler.',
    caption: 'Tutulmuş ay, parçalı geceler.',
    evidence: 'Kanıt 4',
    articleCount: 6,
    href: '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/',
    image: '/images/symptoms/uyku-bozuklugu.webp',
    alt: 'Ahşap masada krem yastık ve buğulu pirinç çalar saat, arka planda pencere.',
    featured: true,
  },
  {
    slug: 'ruh-hali',
    category: 'Duygudurum',
    title: 'Ruh hali değişimi',
    desc: 'Hormonal dalgalanmaların ruh halini, sabrı ve günlük tepkilerini sessizce yeniden ayarladığı bir dönem.',
    longDesc:
      'Sabır eşiğinde belirgin değişim, gerginlik, ağlamaklı anlar veya açıklanması zor bir kaygı hissi öne çıkabilir. Hormonal dalgalanma, uyku bozulması ve gündelik yük bir araya geldiğinde tablo daha yoğun hissedilebilir.',
    caption: 'Östrojen yankıyı kaybedince.',
    evidence: 'Kanıt 3–4',
    articleCount: 1,
    href: '/zihin-denge/duygusal-denge/',
    image: '/images/symptoms/ruh-hali.webp',
    alt: 'Eski pencere kenarında yarısı içilmiş porselen çay fincanı, perde gölgesi.',
  },
  {
    slug: 'hafiza',
    category: 'Bilişsel',
    title: 'Hafıza sorunları',
    desc: 'Sözcüklerin ucundan kayması, isim hatırlama güçlüğü ve dikkatin sık dağılması.',
    longDesc:
      'Konsantrasyonun dağılması, kelimenin ucundan kayması, isim ve günlük detayları hatırlamakta gecikme biçiminde kendini gösterir. Çoğu zaman geçici bir tablodur; uyku, stres ve hormonal değişim ile yakın ilişkilidir.',
    caption: 'Sözcüklerin çıktığı eşikler.',
    evidence: 'Kanıt 3',
    articleCount: 0,
    href: '/zihin-denge/bilissel-saglik/',
    image: '/images/symptoms/hafiza.webp',
    alt: 'Sararmış mektup kağıdı üstünde preslenmiş kuru menekşe çiçeği.',
  },
  {
    slug: 'cilt',
    category: 'Dermatolojik',
    title: 'Cilt değişimleri',
    desc: 'Kuruluk, incelme ve elastikiyet kaybı — kolajen ile östrojen arasındaki sessiz ilişki.',
    longDesc:
      'Kuruluk, incelme, elastikiyetin azalması ve daha hassas bir cilt dokusu öne çıkan değişimlerdir. Kolajen üretimi ile östrojen arasındaki ilişki nedeniyle bu değişimler menopoz geçişinde daha belirgin yaşanabilir.',
    caption: 'Kıvrımın hafızası.',
    evidence: 'Kanıt 4',
    articleCount: 0,
    href: '/beden-yakinlik/cilt-gorunum/',
    image: '/images/symptoms/cilt.webp',
    alt: 'Kıvrımlı krem satin kumaş yakın çekim, ışık-gölge oyunu.',
  },
  {
    slug: 'eklem',
    category: 'Kas-iskelet',
    title: 'Eklem ağrısı',
    desc: 'Sabah tutukluğu, parmak ve diz eklemlerinde hassasiyet — vücudun yaydığı küçük bir haber.',
    longDesc:
      'Sabah tutukluğu, parmak ve diz eklemlerinde hassasiyet, hareket başlangıcında zorlanma şeklinde tarif edilir. Östrojen düşüşünün eklem ve bağ dokusu üzerindeki etkisiyle ilişkili olabilir; gün içi yorgunluk hissini de etkileyebilir.',
    caption: 'Eklemden yayılan haber.',
    evidence: 'Kanıt 3',
    articleCount: 0,
    href: '/zamansiz-yasam/',
    image: '/images/symptoms/eklem.webp',
    alt: 'Eski meşe ağacında koyu bir budak, halkalı doku.',
  },
  {
    slug: 'kilo',
    category: 'Metabolik',
    title: 'Kilo artışı',
    desc: 'Aynı yaşam, değişen tartı — östrojen, kas kütlesi ve uyku arasındaki üçlü bağ.',
    longDesc:
      'Yaşam tarzı belirgin biçimde değişmemiş olsa da bel çevresinde toplanma ve ağırlık artışı fark edilebilir. Östrojen, kas kütlesi, uyku kalitesi ve insülin duyarlılığı arasındaki bağ menopoz geçişinde değişir.',
    caption: 'Terazi yeniden ayar arıyor.',
    evidence: 'Kanıt 4',
    articleCount: 4,
    href: '/zamansiz-yasam/kilo-artisi-menopoz/',
    image: '/images/symptoms/kilo.webp',
    alt: 'Soğuk mermer yüzeyde kısmen açılmış olgun bir nar.',
  },
  {
    slug: 'libido',
    category: 'Cinsel sağlık',
    title: 'Libido azalması',
    desc: 'Arzunun ritmi değişebilir — beden, duygu ve ilişki arasındaki ince denge.',
    longDesc:
      'Arzunun ritmi, sıklığı ve deneyimi değişebilir; vajinal kuruluk gibi fiziksel değişimler ya da yorgunluk, ruh hali, ilişki dinamikleri tabloyu etkileyebilir. Tek bir nedenle açıklanmayan, çok katmanlı bir alandır.',
    caption: 'Aynı odada iki ayrı alev.',
    evidence: 'Karma kanıt',
    articleCount: 3,
    href: '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/',
    image: '/images/symptoms/libido.webp',
    alt: 'Eski ahşap masada iki uzun krem mum: biri yanmış ve tütüyor, diğeri yanmamış.',
  },
];
