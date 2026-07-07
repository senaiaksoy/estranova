/**
 * Hub'lar için "Önerilen okuma yolu" 3-adımlı giriş rehberi data'sı.
 *
 * Versalie'nin "Getting Started" altın editöryal mimarisinin Estranova
 * uyarlaması — hub'a gelen okurun "nereden başlamalıyım?" sorusunun
 * yanıtı. Pillar grid (alt-hub'lar) ile çakışmaz: pillar = yapısal
 * dağılım, bu rehber = somut okur yolu.
 *
 * Üretim turunda makaleler güncellendiğinde linkler buradan tek
 * noktadan değiştirilir; her hub sayfası ilgili kaydı import eder.
 *
 * 5 hub için 3'er adım: "Genel bakış → Sık karşılaşılan
 * konu / mahrem konu → Pratik / karar / derin bakış".
 */

export interface PathStep {
  /** Sıra numarası ("01" / "02" / "03") */
  step: string;
  /** Adımın editöryal etiketi */
  label: string;
  /** Önerilen makale başlığı */
  title: string;
  /** Tek cümlelik özet — neden bu adım */
  excerpt: string;
  /** Makale URL'i */
  href: string;
  /** Tahmini okuma süresi (dakika) */
  readingMinutes?: number;
}

export interface HubStartingPath {
  /** Bant açılış kicker'ı — örn. "Hormonal geçişe yeni misiniz?" */
  kicker: string;
  /** Ana başlık */
  title: string;
  /** 1-2 cümle açıklama */
  intro: string;
  /** 3 adımlı yol */
  steps: PathStep[];
}

export const hubStartingPaths: Record<string, HubStartingPath> = {
  '/hormonal-gecis/': {
    kicker: 'Hormonal geçişe yeni misiniz?',
    title: 'Bu hub\'da nereden başlamalıyım?',
    intro:
    'Üç adımlık bir okuma yolu — önce genel bakış, sonra en sık karşılaşılan konu, sonunda karar verme. İstediğiniz zaman alt-bölümlere dağılabilirsiniz; bu yol sizi acele ettirmez.',
    steps: [
      {
        step: '01',
        label: 'Genel bakış',
        title: 'Menopoz Nedir',
        excerpt:
          'Menopozun klinik tanımı, geçiş aşamaları ve sürecin temel özellikleri — sakin bir giriş.',
        href: '/hormonal-gecis/menopoz/menopoz-nedir/',
        readingMinutes: 7,
      },
      {
        step: '02',
        label: 'En sık konuşulan',
        title: 'Sıcak Basması ve Gece Terlemesi',
        excerpt:
          'Vazomotor belirtilerin nedenleri ve kanıt temelli destek seçenekleri.',
        href: '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/',
        readingMinutes: 8,
      },
      {
        step: '03',
        label: 'Karar verme',
        title: 'Hormon Tedavisi Karar Rehberi',
        excerpt:
          'HRT seçeneklerine adım adım, abartısız bir bakış. Hekiminizle hangi noktaları birlikte değerlendirirsiniz?',
        href: '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi/',
        readingMinutes: 10,
      },
    ],
  },

  '/zamansiz-yasam/': {
    kicker: 'Yaşam tarzına nereden başlayalım?',
    title: '40 sonrası sürdürülebilir bir yön',
    intro:
      'Zamansız yaşam, panik diyetten ya da mucize formülden değil, küçük ve sürdürülebilir alışkanlıklardan kuruluyor. Üç adımlık okuma — beslenme, kemik, takviye — sade bir başlangıç çizer.',
    steps: [
      {
        step: '01',
        label: 'Beslenme temeli',
        title: 'Beslenme & Yaşlanma — Sürdürülebilir Bir Tabak',
        excerpt:
          'Diyet kültürünün uzağında, 40 sonrası bedeni destekleyen besin örüntülerini yaşıt tonuyla anlatan açılış rehberi.',
        href: '/zamansiz-yasam/beslenme-yaslanma/',
        readingMinutes: 8,
      },
      {
        step: '02',
        label: 'Sessiz öncelik',
        title: '40 Sonrası Kemik Sağlığı',
        excerpt:
          'Kemik yoğunluğu yıllarca sessizce değişir; ne zaman dikkat etmek gerekir, hangi alışkanlıklar kemik dostu?',
        href: '/zamansiz-yasam/kemik-sagligi-40-sonrasi/',
        readingMinutes: 9,
      },
      {
        step: '03',
        label: 'Klinik takviye',
        title: 'D Vitamini Rehberi',
        excerpt:
          '"Vitamin" adı yanıltıcı — biyolojik olarak hormon. Tarama, dozaj ve bireysel karar notları.',
        href: '/zamansiz-yasam/d-vitamini-rehberi/',
        readingMinutes: 9,
      },
    ],
  },

  '/beden-yakinlik/': {
    kicker: 'Beden ve mahremiyet konularını okumak için',
    title: 'Bu konularda nereden başlamalıyım?',
    intro:
      'Çoğu zaman konuşulması zor olan ama yaygın yaşanan değişimler. Üç adımlık yol — vajinal sağlık, yakınlık, pelvik taban — utandırmadan ve dramatize etmeden anlatılan başlangıç.',
    steps: [
      {
        step: '01',
        label: 'En sık konuşulan',
        title: 'Vajinal Kuruluk — GSM',
        excerpt:
          'Postmenopozal kadınların yarısına yakını yaşıyor; isim koymakla başlar. Lokal vs sistemik, kanıt sınırı, günlük bakım.',
        href: '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/',
        readingMinutes: 7,
      },
      {
        step: '02',
        label: 'Yakınlık',
        title: 'Cinsellikte Ağrı — Tedavi Haritası',
        excerpt:
          'Disparoni tek bir tablo değil — yüzeysel, derin, postmenopozal, vajinismus alt-tipleri ve üç kapılı tedavi haritası.',
        href: '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/',
        readingMinutes: 8,
      },
      {
        step: '03',
        label: 'Sessiz konu',
        title: '40 Sonrası İdrar Kaçırma',
        excerpt:
          'Çevremizdeki kadınların önemli bir kısmı yaşıyor ama çoğu kimseye söylemiyor. İki tip ayrımı + üç kapılı tedavi haritası.',
        href: '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban/',
        readingMinutes: 7,
      },
    ],
  },

  '/zihin-denge/': {
    kicker: 'Zihinle ilgili değişimleri anlamak için',
    title: 'Hormonal geçişin zihne dokunan yanı',
    intro:
      'Uyku, gece terlemesi ve stres hormonal geçişin en sık konuşulan ama en az anlaşılan başlıkları. Üç adımlık yol — uyku, gece terlemesi, stres — sakin bir başlangıç noktası.',
    steps: [
      {
        step: '01',
        label: 'En sık fark edilen',
        title: 'Menopozda Uyku Bozukluğu',
        excerpt:
          'Uyku neden değişir, ne deneyebiliriz? Hormonal geçişin içinden geçen bir yaşıt perspektifinden uyku rehberi.',
        href: '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/',
        readingMinutes: 6,
      },
      {
        step: '02',
        label: 'Gece terlemesi',
        title: 'Gece Terlemesi — Utancsız',
        excerpt:
          'Gece terlemesinin uykuya etkisi ve nazik bir gece düzeni — yargısız bir yaklaşım.',
        href: '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/',
        readingMinutes: 6,
      },
      {
        step: '03',
        label: 'Pratik',
        title: 'Menopozda Stres Yönetimi',
        excerpt:
          'Stresle başa çıkmanın menopoz geçişine özgü pratik yolları — nefes, hareket, sınır koyma.',
        href: '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/',
        readingMinutes: 6,
      },
    ],
  },

  '/bilimsel-pencere/': {
      kicker: 'Bilimsel zemini merak ediyorsanız',
    title: 'Hormonal geçişe bilimin penceresinden bakmak',
    intro:
      'Hormonların biyolojisinden hücresel yaşlanmaya, bilimin bugün ne biliyor — ne henüz bilmiyor. İki adımlık yol — temel biyoloji, hücresel mekanizma — kanıt disipliniyle başlayan bir okuma.',
    steps: [
      {
        step: '01',
        label: 'Temel biyoloji',
        title: 'Östrojen Biyolojisi ve Sağlık',
        excerpt:
          'Östrojen tek bir hormon değil — E1, E2, E3, E4 ailesi. Doku-spesifik etkiler, ER-α/ER-β reseptörleri ve HRT\'ye giriş.',
        href: '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/',
        readingMinutes: 10,
      },
      {
        step: '02',
        label: 'Hücresel mekanizma',
        title: 'NAD+ ve Hücresel Yaşlanma',
        excerpt:
          'NAD+ molekülünün hücresel yaşlanmadaki yeri, sirtuin/PARP/CD38 yolakları, "sebep mi sonuç mu?" tartışması.',
        href: '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/',
        readingMinutes: 9,
      },
    ],
  },
};
