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
 * 5 hub için 3'er adım (Faz 1.8): "Genel çerçeve → Sık karşılaşılan
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
  /** Bant açılış kicker'ı — örn. "Hormonal geçişe yeni misin?" */
  kicker: string;
  /** Ana başlık */
  title: string;
  /** 1-2 cümle açıklama */
  intro: string;
  /** 3 adımlı yol */
  steps: PathStep[];
}

export const hubStartingPaths: Record<string, HubStartingPath> = {
  '/hormonal-gecis': {
    kicker: 'Hormonal geçişe yeni misin?',
    title: 'Bu hub\'da nereden başlamalıyım?',
    intro:
      'Üç adımlık bir okuma yolu — önce genel çerçeve, sonra en sık karşılaşılan konu, sonunda karar verme. İstediğin zaman alt-bölümlere dağılabilirsin; bu yol seni acele ettirmez.',
    steps: [
      {
        step: '01',
        label: 'Genel çerçeve',
        title: 'Perimenopoz Nedir?',
        excerpt:
          'Hormonal geçişin ilk aşamasının ne olduğunu, ne zaman başladığını ve neden hemen "menopoz" demediğimizi anlatır.',
        href: '/hormonal-gecis/perimenopoz/perimenopoz-nedir',
        readingMinutes: 7,
      },
      {
        step: '02',
        label: 'Sık karşılaşılan konu',
        title: 'Adet Düzensizliği — Ne Normal, Ne Zaman Doktora?',
        excerpt:
          'Perimenopozda en sık fark edilen değişim. Düzensizliğin hangi yanı doğal, hangi yanı bir hekim değerlendirmesini hak ediyor?',
        href: '/hormonal-gecis/perimenopoz/perimenopozda-adet-duzensizligi-ne-normal-ne-zaman-doktora-gidilmeli',
        readingMinutes: 8,
      },
      {
        step: '03',
        label: 'Karar verme',
        title: 'Hormon Tedavisi Karar Rehberi',
        excerpt:
          'HRT seçeneklerine adım adım, abartısız bir bakış. Ne soruyu sormak gerekir, hekiminle hangi noktaları birlikte değerlendirirsin?',
        href: '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi',
        readingMinutes: 10,
      },
    ],
  },

  '/zamansiz-yasam': {
    kicker: 'Yaşam tarzına nereden başlayalım?',
    title: '40 sonrası sürdürülebilir bir yön',
    intro:
      'Zamansız yaşam, panik diyetten ya da mucize formülden değil, küçük ve sürdürülebilir alışkanlıklardan kuruluyor. Üç adımlık okuma — beslenme, kemik, hareket — sade bir başlangıç çizer.',
    steps: [
      {
        step: '01',
        label: 'Beslenme çerçevesi',
        title: 'Beslenme & Yaşlanma — Sürdürülebilir Bir Tabak',
        excerpt:
          'Diyet kültürünün uzağında, 40 sonrası bedeni destekleyen besin örüntülerini yaşıt tonuyla anlatan açılış rehberi.',
        href: '/zamansiz-yasam/beslenme-yaslanma',
        readingMinutes: 8,
      },
      {
        step: '02',
        label: 'Sessiz öncelik',
        title: '40 Sonrası Kemik Sağlığı',
        excerpt:
          'Kemik yoğunluğu yıllarca sessizce değişir; ne zaman dikkat etmek gerekir, hangi alışkanlıklar kemik dostu?',
        href: '/zamansiz-yasam/kemik-sagligi-40-sonrasi',
        readingMinutes: 9,
      },
      {
        step: '03',
        label: 'Pratik',
        title: 'Hareket ve Sağlık — Menopoz Geçişinde Beden',
        excerpt:
          'Performans baskısı yerine sürdürülebilir hareket. Hangi tür egzersiz menopoz dönemine uygun, neden direnç çalışmaları öne çıkar?',
        href: '/zamansiz-yasam/hareket-saglik-menopoz',
        readingMinutes: 7,
      },
    ],
  },

  '/beden-yakinlik': {
    kicker: 'Beden ve mahremiyet konularını okumak için',
    title: 'Bu konularda nereden başlamalıyım?',
    intro:
      'Çoğu zaman konuşulması zor olan ama yaygın yaşanan değişimler. Üç adımlık yol — cilt, vajinal sağlık, yakınlık — utandırmadan ve dramatize etmeden anlatılan başlangıç.',
    steps: [
      {
        step: '01',
        label: 'Genel çerçeve',
        title: 'Menopozda Cilt Değişimleri',
        excerpt:
          'Östrojen düşüşünün ciltte yarattığı değişimler ve gerçekçi beklentilerle bakım disiplini.',
        href: '/beden-yakinlik/menopozda-cilt-degisimleri',
        readingMinutes: 7,
      },
      {
        step: '02',
        label: 'Mahrem konu',
        title: 'Menopozda Vajinal Sağlık',
        excerpt:
          'Vajinal kuruluk, hassasiyet ve genitoüriner sendrom — utanmadan, jargonsuz, somut çözümlerle.',
        href: '/beden-yakinlik/vajinal-saglik-menopoz',
        readingMinutes: 8,
      },
      {
        step: '03',
        label: 'Yakınlık',
        title: 'Yakınlıkta Ağrı — Anlamak ve Yumuşatmak',
        excerpt:
          'Cinsellikte konforu etkileyen değişimler. Beden sinyallerini tanımak ve iletişimi güçlendirmek için sade bir çerçeve.',
        href: '/beden-yakinlik/yakinlik-agrisi-menopoz',
        readingMinutes: 7,
      },
    ],
  },

  '/zihin-denge': {
    kicker: 'Zihinle ilgili değişimleri anlamak için',
    title: 'Hormonal geçişin zihne dokunan yanı',
    intro:
      'Uyku, duygu durumu ve bilişsel dalgalanmalar hormonal geçişin en sık konuşulan ama en az anlaşılan başlıkları. Üç adımlık yol — uyku, ruh hali, stres — sakin bir başlangıç noktası.',
    steps: [
      {
        step: '01',
        label: 'En sık fark edilen',
        title: 'Menopozda Uyku Bozukluğu',
        excerpt:
          'Uyku neden değişir, ne deneyebiliriz? Hormonal geçişin içinden geçen bir yaşıt perspektifinden uyku rehberi.',
        href: '/zihin-denge/uyku-bozuklugu-menopoz',
        readingMinutes: 6,
      },
      {
        step: '02',
        label: 'Duygusal denge',
        title: 'Menopozda Ruh Hali Değişimleri',
        excerpt:
          'Duygu dalgalanmalarının arkasındaki hormonal zemini anlamak ve gündelik hayatla baş etmenin sade yolları.',
        href: '/zihin-denge/ruh-hali-degisimleri-menopoz',
        readingMinutes: 7,
      },
      {
        step: '03',
        label: 'Pratik',
        title: 'Menopozda Stres Yönetimi',
        excerpt:
          'Stresle başa çıkmanın menopoz geçişine özgü pratik yolları — nefes, hareket, sınır koyma.',
        href: '/zihin-denge/stres-yonetimi-menopoz',
        readingMinutes: 6,
      },
    ],
  },

  '/bilimsel-pencere': {
    kicker: 'Bilimsel zemini merak ediyorsan',
    title: 'Hormonal geçişe bilimin penceresinden bakmak',
    intro:
      'Hormonların biyolojisinden hücresel yaşlanmaya, bilimin bugün ne biliyor — ne henüz bilmiyor. Üç adımlık yol — temel biyoloji, hücresel mekanizma, yeni araştırmalar — kanıt disipliniyle başlayan bir okuma.',
    steps: [
      {
        step: '01',
        label: 'Temel biyoloji',
        title: 'Östrojen Biyolojisi ve Sağlık',
        excerpt:
          'Östrojenin yalnızca üreme hormonu olmadığını, beden sistemleri arasındaki ağdaki rolünü açıklayan giriş.',
        href: '/bilimsel-pencere/estrogen-biyolojisi-saglik',
        readingMinutes: 9,
      },
      {
        step: '02',
        label: 'Hücresel mekanizma',
        title: 'NAD+ ve Hücresel Yaşlanma',
        excerpt:
          'NAD+ molekülünün hücresel yaşlanmadaki yeri, takviyelerin nereye işaret ettiği ve kanıtın hangi sınırda durduğu.',
        href: '/bilimsel-pencere/nad-plus-hucresel-yaslanma',
        readingMinutes: 10,
      },
      {
        step: '03',
        label: 'Güncel ufuk',
        title: 'Yeni Araştırmalar',
        excerpt:
          'Hormonal geçiş ve 40+ sağlık alanında yeni çalışmalar — kanıt gücüyle birlikte sade bir derleme.',
        href: '/bilimsel-pencere/yeni-arastirmalar',
      },
    ],
  },
};
