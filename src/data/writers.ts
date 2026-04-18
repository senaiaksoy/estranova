export interface Writer {
  slug: string;
  displayName: string;
  role: string;
  ageBand: string; // örn. "55-56"
  publicBio: string; // 2-3 cümle, yayin-kurulu için
  signaturePhrase: string; // tek cümle, anasayfa kartı için
  portrait?: string; // /images/writers/{slug}.jpg (yoksa undefined)
  focusAreas: string[]; // 2-3 çekirdek kategori etiketi
  isEditor: boolean; // Berna true, diğerleri false
}

export const writers: Writer[] = [
  {
    slug: 'berna-aksoy',
    displayName: 'Berna Aksoy',
    role: 'Yönetici Editör / Ana Yazar',
    ageBand: '55-56',
    publicBio:
      'Robert College ve Boğaziçi Üniversitesi İşletme mezunu. Uzun yıllar kurumsal bankacılıkta çalıştıktan sonra kendi işini kurarak yüz kişiyi aşan bir ekibi yönetti. Hormonal geçiş döneminde önleyici sağlık, araştırmaya dayalı karar ve yaşam tarzı dengesi üzerine içerik üretiyor.',
    signaturePhrase:
      'Hormonal geçişi sakin bir araştırmacı gözüyle okuyor; kontrolü kaybetmeden anlamayı kolaylaştırıyor.',
    portrait: '/images/editor/berna-aksoy.jpg',
    focusAreas: ['Hormonal Geçiş', '40 Sonrası', 'Yaşam Tarzı'],
    isEditor: true,
  },
  {
    slug: 'alara-baykent',
    displayName: 'Alara Baykent',
    role: 'Sağlık Yazarı / Konuk Katkı',
    ageBand: '30-31',
    publicBio:
      'Eski profesyonel windsurfer; adolesan döneminde voleybol alt yapısında oynadı, ardından profesyonel seviyede windsurfing yaptı. Atlar, köpekler ve kuşlarla çevrili bir yaşam sürüyor. Cumhuriyet Pazar Eki\'nde haftalık yazıyor, anti-aging ve well-being konularına yakın bir sporcu/yazar.',
    signaturePhrase:
      'Anne kuşağını gözlemleyen, sporcu beden okumasıyla erken hazırlık yazıları yazan genç bir akran.',
    focusAreas: ['Spor & Hareket', 'Anti-aging', 'Doğa & Hayvan'],
    isEditor: false,
  },
  {
    slug: 'basak-pelister',
    displayName: 'Başak Pelister',
    role: 'Araştırma Yazarı / Konuk Katkı',
    ageBand: '55-62',
    publicBio:
      "Fransız liseli, Amerika'da Otel & Restoran Yönetimi ve Reklamcılık eğitimi aldı. 20 yıl uluslararası şirketlerde pazarlama ve marka yönetiminde çalıştı; halen Artthink Story Telling Agency'de marka stratejisi ve kimlik konularında danışmanlık veriyor. 50+ yaşam döngüsünü zamanı geriye sarma ve biohacking eksenlerinde okuyan araştırmacı yazar.",
    signaturePhrase:
      'Dokuz yıllık menopoz deneyimini rafine bir hikâye anlatıcılığıyla harmanlayan gezgin bir tastemaker.',
    focusAreas: ['Menopoz', 'Biohacking', 'Seyahat & Estetik'],
    isEditor: false,
  },
  {
    slug: 'rima-erdemir',
    displayName: 'Rima Erdemir',
    role: 'Araştırma Yazarı / Konuk Katkı',
    ageBand: '55-56',
    publicBio:
      "İstanbul Üniversitesi İşletme Fakültesi mezunu. Medya kariyerini Milliyet'te reklam grup yöneticiliğinden başlatıp MedyaNet Genel Müdürlüğü ve Demirören Medya Holding Reklam Grubu Başkanlığı ile sürdürdü. IAB Türkiye ve MMA Türkiye yönetim kurullarında görev aldı; halen Sparkle Medya'da ortak. Teknoloji ve yeniliği bilimsel bir okurun titizliğiyle takip eden araştırmacı yazar.",
    signaturePhrase:
      'Bilimi ve teknolojiyi meraklı bir araştırmacı titizliğiyle takip eden, güncel gündemi akran tonunda süzen bir ses.',
    focusAreas: ['Bilimsel Pencere', 'Teknoloji & Sağlık', '40 Sonrası'],
    isEditor: false,
  },
  {
    slug: 'gamze-cizreli',
    displayName: 'Gamze Cizreli',
    role: 'Gastronomi ve Sürdürülebilirlik Yazarı / Konuk Katkı',
    ageBand: '57-58',
    publicBio:
      "ODTÜ İşletme mezunu. Ankara'da savunma sanayinde başladığı iş hayatını 1994'te kurduğu ilk kafe markası ile gastronomi dünyasına taşıdı; Türkiye'de kafe ve modern Anadolu mutfağı kültürünün öncülerinden biri oldu. Uluslararası sürdürülebilirlik gündeminde kadının ekonomik katılımı üzerine çalışmalar yürüttü; Birleşmiş Milletler Genel Kurulu'nda Türkiye'de kadının statüsü üzerine konuştu.",
    signaturePhrase:
      'Anadolu mutfak bilgeliğini sürdürülebilir yaşamla birleştiren, sabah sesiyle yazan deneyimli bir rehber.',
    focusAreas: ['Beslenme & Mutfak', 'Sürdürülebilirlik', 'Sabah Rutini'],
    isEditor: false,
  },
];

// Editör her zaman ilk: Berna; diğerleri: displayName alfabetik
export const editors = writers.filter((w) => w.isEditor);
export const guestWriters = writers
  .filter((w) => !w.isEditor)
  .sort((a, b) => a.displayName.localeCompare(b.displayName, 'tr'));
