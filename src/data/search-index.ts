export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: string;
}

export const searchIndex: SearchItem[] = [
  // Sayfalar
  {
    title: "Anasayfa",
    description: "Estranova editoryal saglik platformu ana sayfasi.",
    href: "/",
    category: "Sayfa",
  },
  {
    title: "Editoryal Kutuphane",
    description:
      "Perimenopoz, menopoz ve 40+ saglik konularinda editoryal bilgi arsivi.",
    href: "/library",
    category: "Sayfa",
  },
  {
    title: "Semptom Rehberi",
    description:
      "Degisimleri adlandirmaya yardimci editoryal semptom okuma alani.",
    href: "/symptoms",
    category: "Sayfa",
  },
  {
    title: "Metodoloji",
    description:
      "Estranova iceriklerinin nasil uretildigi, denetlendigi ve yayin sureci.",
    href: "/methodology",
    category: "Sayfa",
  },
  {
    title: "Hakkimizda",
    description: "Platform misyonu, editoryal cizgi ve yonetim yapisi.",
    href: "/about",
    category: "Sayfa",
  },
  {
    title: "Yazar Ekibi",
    description:
      "Yazar biyografileri, tibbi denetci ve site yonetimi hakkinda bilgi.",
    href: "/authors",
    category: "Sayfa",
  },
  {
    title: "Editoryal Politika",
    description:
      "Bagimsizlik, kaynak kullanimi, seffaflik ve okur odaklilik ilkeleri.",
    href: "/editorial-policy",
    category: "Sayfa",
  },
  {
    title: "Tibbi Uyari",
    description:
      "Bu platformdaki iceriklerin bilgilendirme amacli olduguna dair yasal uyari.",
    href: "/medical-disclaimer",
    category: "Sayfa",
  },

  // Kategoriler
  {
    title: "Perimenopoz",
    description:
      "Dongu degisiklikleri, sicak basmasi, uyku ve duygudurum konularina giris metinleri.",
    href: "/library",
    category: "Kategori",
  },
  {
    title: "Menopoza Hazirlik",
    description:
      "Yas alma ile birlikte izlenebilecek testler, yasam aliskanliklari ve beklenen degisimler.",
    href: "/library",
    category: "Kategori",
  },
  {
    title: "Menopoz",
    description:
      "Belirti yorumu, gunluk yasam etkileri ve guncel klinik yaklasimlarin sade ozeti.",
    href: "/library",
    category: "Kategori",
  },
  {
    title: "40+ Saglik",
    description:
      "Kemik, kalp-damar, metabolizma ve bilissel saglik gibi uzun donem basliklar.",
    href: "/library",
    category: "Kategori",
  },
  {
    title: "Yasam Bicimi",
    description:
      "Beslenme, hareket, uyku rutini ve gunluk isleyisi destekleyen rehberler.",
    href: "/library",
    category: "Kategori",
  },
  {
    title: "Kaynak Okuma",
    description:
      "Klinik calismalari ve rehberleri hasta gozuyle okumaya yardimci aciklamalar.",
    href: "/library",
    category: "Kategori",
  },

  // Semptomlar
  {
    title: "Sicak basmasi",
    description:
      "Gun icindeki ani isi artisi, terleme ve ardindan gelen usume hissi ile tarif edilir.",
    href: "/symptoms",
    category: "Semptom",
  },
  {
    title: "Beyin sisi",
    description:
      "Konsantrasyon daginigi, kelime bulmakta zorlanma veya gecici unutkanlik hissi.",
    href: "/symptoms",
    category: "Semptom",
  },
  {
    title: "Uyku bolunmesi",
    description:
      "Gece boyunca sik uyanma, sabaha karsi uykuya dalamama veya erken uyanma.",
    href: "/symptoms",
    category: "Semptom",
  },
  {
    title: "Kaygi artisi",
    description:
      "Hormonal degisim, stres duzeyi ve uyku bozulmasi bir araya geldiginde belirginlesebilir.",
    href: "/symptoms",
    category: "Semptom",
  },
  {
    title: "Eklem ve kas hassasiyeti",
    description:
      "Sabah sertligi, hareket baslangicinda zorlanma veya gun sonuna dogru yorgunluk hissi.",
    href: "/symptoms",
    category: "Semptom",
  },
  {
    title: "Cilt ve sac degisiklikleri",
    description:
      "Kuruluk, hassasiyet veya sac tellerinde incelme gibi yavas ilerleyen degisimler.",
    href: "/symptoms",
    category: "Semptom",
  },

  // Makaleler
  {
    title: "Perimenopoz belirtileri ayni anda neden degismez?",
    description:
      "Belirtilerin ayni yogunlukta gitmemesi, hormonal dalgalanmanin herkeste farkli gorunmesinden kaynaklanir.",
    href: "/article",
    category: "Makale",
  },
  {
    title: "Uyku bozuldugunda once hangi degiskenlere bakmak gerekir?",
    description:
      "Gece terlemesi, stres, kafein duzeni ve gun ici hareket miktari gibi temel etkenleri ayiran bir giris rehberi.",
    href: "/article",
    category: "Makale",
  },
  {
    title: "Kemik ve kas sagligi neden menopozdan once konusulmali?",
    description:
      "Menopoz sonrasini beklemeden hangi koruyucu basliklarin ele alinabilecegini anlatan yonlendirici bir okuma rotasi.",
    href: "/article",
    category: "Makale",
  },
  {
    title: "Perimenopozda bilissel degisiklikler nasil okunmali?",
    description:
      "Unutkanlik, dikkat daginigi veya zihinsel yavaslama hissi tek basina yorumlanmamali.",
    href: "/article",
    category: "Makale",
  },
];
