export type ArticleStatus = "draft" | "in_review" | "published";

export interface ArticleReference {
  title: string;
  authors: string;
  journal: string;
  year: number;
  url: string;
  doi?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  reviewer: string;
  medicalReviewerTitle: string;
  reviewDate: string;
  lastModified: string;
  status: ArticleStatus;
  disclaimerVersion: string;
  references: ArticleReference[];
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

const referenceCatalog: Record<string, ArticleReference[]> = {
  perimenopozCognitive: [
    {
      title: "Menopause",
      authors: "National Institute on Aging",
      journal: "NIA Health Topics",
      year: 2025,
      url: "https://www.nia.nih.gov/health/menopause",
    },
  ],
  menopauseSleep: [
    {
      title: "Menopause",
      authors: "NHS",
      journal: "NHS Conditions",
      year: 2025,
      url: "https://www.nhs.uk/conditions/menopause/",
    },
  ],
  menopauseCardio: [
    {
      title: "About Women and Heart Disease",
      authors: "Centers for Disease Control and Prevention",
      journal: "CDC Heart Disease",
      year: 2024,
      url: "https://www.cdc.gov/heartdisease/women.htm",
    },
  ],
  healthAfter40: [
    {
      title: "Ageing and health",
      authors: "World Health Organization",
      journal: "WHO Fact Sheets",
      year: 2024,
      url: "https://www.who.int/news-room/fact-sheets/detail/ageing-and-health",
    },
  ],
  neuroAutoimmune: [
    {
      title: "Multiple Sclerosis",
      authors: "National Institute of Neurological Disorders and Stroke",
      journal: "NINDS Disorders",
      year: 2024,
      url: "https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis",
    },
  ],
  cycleTracking: [
    {
      title: "Menopause: diagnosis and management",
      authors: "National Institute for Health and Care Excellence",
      journal: "NICE Guideline NG23",
      year: 2024,
      url: "https://www.nice.org.uk/guidance/ng23",
    },
  ],
  boneHealth: [
    {
      title: "Osteoporosis",
      authors: "National Institute of Arthritis and Musculoskeletal and Skin Diseases",
      journal: "NIAMS Health Topics",
      year: 2024,
      url: "https://www.niams.nih.gov/health-topics/osteoporosis",
    },
  ],
};

export const articles: Article[] = [
  {
    slug: "perimenopozda-bilissel-degisiklikler",
    title: "Perimenopozda Bilişsel Değişiklikler Nasıl Okunmalı?",
    excerpt: "Unutkanlık, dikkat dağınıklığı veya zihinsel yavaşlama hissi tek başına yorumlanmamalı. Uyku, stres, vazomotor belirtiler ve günlük yük bir arada ele alındığında daha anlamlı bir çerçeve ortaya çıkar.",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">Neden tek bir sebep aramak yeterli olmaz?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Perimenopoz döneminde bilişsel zorluklar bazen hormonal değişiklik ile doğrudan ilişkilendirilir.
Oysa uyku bozunluğu, gece terlemesi, gerginlik hissi ve günlük sorumluluk yoğunluğu da aynı tabloya eşit derecede katkıda bulunabilir.
Bu nedenle semptomu yalnız değil, bağlamı ile birlikte değerlendirmek gerekir.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Hangi sorular daha işlevseldir?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Sorulması gereken ilk sorular genellikle şunlardır: Uyku kalitesi son aylarda değişti mi? Gece uyanmaları sıklaştı mı?
Sıcak basması veya kaygı artışı eşlik ediyor mu? İş temposu ya da bakım yükünde artış var mı?
Bu sorular, tek bir belirtiye sabitlenmeden daha gerçekçi bir tablo kurmaya yardımcı olur.
</p>

<div class="my-12 rounded-[28px] border-l-4 border-secondary bg-surface-container p-8">
  <p class="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Klinik Not</p>
  <p class="text-charcoal/75 leading-relaxed">
    Hormon tedavisi veya tıbbi değerlendirme gereksinimi bireysel olarak ele alınmalıdır. Bu sayfa bilgi amaçlıdır; tanı veya tedavi önerisi sunmaz.
  </p>
</div>

<h2 class="font-serif text-3xl text-charcoal mb-4">Okur için pratik okuma rotası</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
İlk adım, semptom günlüğü tutmak değil; semptomun hangi günlük değişkenlerle birlikte ortaya çıktığını fark etmektir.
Daha sonra uyku, vazomotor belirtiler ve duygu durumu başlıkları birlikte okunabilir.
Estranova içerik yapısı da bu nedenle tek bir "cevap" yerine konu ağacı mantığı ile ilerler.
</p>
`,
    author: "Alara Baykent",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-13",
    lastModified: "2026-04-13",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.perimenopozCognitive,
    date: "2026-04-13",
    category: "perimenopoz",
    readTime: "5 dk",
    tags: ["bilişsel fonksiyon", "perimenopoz", "semptom yönetimi"],
    featured: true,
  },
  {
    slug: "menopozda-uyku-yonetimi",
    title: "Menopozda Uyku Yönetimi: Sadece Sıcak Basmalar mı?",
    excerpt: "Gece terlemesi, uykusuzluk ve uyku kalitesinin düşmesi menopoz sürecinin önemli parçalarıdır. Bütüncül bir yaklaşım ile uyku sorunları nasıl yönetilir?",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">Uyku bozuklukları neden sıklıkla görülmektedir?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Özellikle östrojen seviyelerindeki düşüklük, sinir sistemi dengeleyici mekanizmalarına etki ederek uyku kalitesini etkileyebilir.
Gece terlemeleri ve sıcak basmaları ise uykunun bölünmesine ve tekrarlı uyanmalara neden olur.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Kapsamlı uyku yönetimi yaklaşımı</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Gece yaşanan uyku sorunları sadece sıcak basmalar ile açıklanamaz. Stres, günlük yük, iş yorgunluğu ve uyku düzeninin bozulması da faktör olarak değerlendirilmelidir.
</p>

<div class="my-12 rounded-[28px] border-l-4 border-secondary bg-surface-container p-8">
  <p class="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Klinik Not</p>
  <p class="text-charcoal/75 leading-relaxed">
    Uyku sorunları menopoz ile yakından ilişkilidir; ancak kişiye özel değerlendirmeler ve müdahale seçenekleri mevcuttur. Bu platform sadece bilgilendirme amaçlıdır.
  </p>
</div>

<h2 class="font-serif text-3xl text-charcoal mb-4">Uyku hijyeni ve yaşam tarzı düzenlemeleri</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Uyku düzenini iyileştirmek için; uyku saatlerinin düzgün tutulması, uyku ortamının serin ve karanlık olması, kahve ve alkol tüketiminin akşam saatlerinde azaltılması önerilir.
</p>
`,
    author: "Basak Pelister",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-12",
    lastModified: "2026-04-12",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.menopauseSleep,
    date: "2026-04-12",
    category: "menopoz",
    readTime: "7 dk",
    tags: ["uyku", "menopoz", "gece terlemesi"],
  },
  {
    slug: "menopoz-kalp-sagligi",
    title: "Menopoz ve Kalp Sağlığı: Bilmeyenler için Rehber",
    excerpt: "Menopoz döneminde kalp hastalığı riski artar. Yaşanan hormonal değişimler kalp-damar sağlığına etkileri nelerdir?",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">Neden kalp sağlığı önemlidir?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Menopoz sonrası östrojen seviyelerinin düşmesi, kolesterol dengesini ve kan damarlarının esnekliğini etkiler. Bu nedenle kalp sağlığına dikkat göstermek çok önemlidir.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Menopoz ve kalp hastalığı riski</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Menopozdan sonra, kadınların kalp hastalığına maruz kalma riski erkeklerle benzer hale gelir. Bu risk faktörleri arasında, aile öyküsü, yüksek tansiyon, yüksek kolesterol ve obezite bulunur.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Kalp sağlığını korumak için neler yapılmalı?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Kardiyovasküler sağlığı korumak için; düzenli fiziksel aktivite, sağlıklı beslenme, sigarayı bırakma, stres yönetimi ve düzenli tıbbi kontroller önerilir.
</p>

<div class="my-12 rounded-[28px] border-l-4 border-secondary bg-surface-container p-8">
  <p class="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Klinik Not</p>
  <p class="text-charcoal/75 leading-relaxed">
    Kalp sağlığı riskleri kişiden kişiye değişir; tıbbi değerlendirme ve profilaksi, sağlık profesyonelleri ile görüşülerek planlanmalıdır.
  </p>
</div>
`,
    author: "Alara Baykent",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-11",
    lastModified: "2026-04-11",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.menopauseCardio,
    date: "2026-04-11",
    category: "kalp-sagligi",
    readTime: "6 dk",
    tags: ["kalp sağlığı", "menopoz", "kardiyovasküler"],
    featured: true,
  },
  {
    slug: "40-ten-baslayan-saglik",
    title: "40'tan Başlayanlar İçin Sağlık Stratejileri",
    excerpt: "40 yaş, hormonal değişimlerin başladığı önemli bir dönemeçtir. Bu dönemde sağlık stratejileri nelerdir?",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">40'tan sonra sağlık neden önemli?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
40 yaş, vücut fonksiyonlarında ve metabolik hızda önemli değişikliklerin başladığı bir dönemdir. Osteoporoz riski, metabolik değişiklikler ve hormonal dengesizlikler bu dönemde dikkate alınmalıdır.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Kas kütlesi ve egzersiz</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Düzenli egzersiz, kas kütlesini korumak ve metabolik sağlığı desteklemek için kritiktir. Kas egzersizleri, dayanıklılık egzersizleri ve esneme hareketleri dengeli bir program oluşturmalıdır.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Beslenme stratejileri</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Proteinli besinler, lifli gıdalar, antioksidan açısından zengin sebze ve meyveler, sağlıklı yağlar (zeytinyağı, avokado, ceviz) bu dönemde önemli rol oynar.
</p>
`,
    author: "Basak Pelister",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-10",
    lastModified: "2026-04-10",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.healthAfter40,
    date: "2026-04-10",
    category: "kadin-sagligi",
    readTime: "8 dk",
    tags: ["40+", "saglik", "preventif"],
  },
  {
    slug: "skleroz-multiple-degisiklikler",
    title: "Skleroz Multiple'de Değişiklikler: Bilinmesi Gerekenler",
    excerpt: "Skleroz multiple, sinir sistemindeki iltihaplanma ve hasar sürecidir. Belirtiler, teşhis ve tedavi seçenekleri nelerdir?",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">Skleroz multiple nedir?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Skleroz multiple (multipl skleroz - MS), merkezi sinir sistemini etkileyen kronik bir otoimmün hastalıktır. Sinir hücre zarının koruyucu kaplamasındaki hasar, iletişim bozukluklarına yol açar.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Belirtiler ve erken işaretler</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
MS belirtileri kişiden kişiye değişmekle birlikte; görme sorunları, zayıflık, titreme, yürüme zorluğu, denge bozukluğu ve yorgunluk sıkça görülen belirtilerdir.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Tedavi yaklaşımları</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
MS tedavisi, hastalığın ilerlemesini yavaşlatmak, belirtileri yönetmek ve yaşam kalitesini artırmak üzerine kuruludur. İmmünsüpresif ilaçlar, rehabilitasyon ve yaşam tarzı değişiklikleri tedavi planında yer alır.
</p>
`,
    author: "Alara Baykent",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-09",
    lastModified: "2026-04-09",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.neuroAutoimmune,
    date: "2026-04-09",
    category: "bilgi",
    readTime: "10 dk",
    tags: ["skleroz multiple", "sinir sistemi", "otoimmün"],
  },
  {
    slug: "perimenopozda-dongu-duzensizlikleri",
    title: "Perimenopozda Döngü Değişiklikleri: Ne Zaman Beklenir, Ne Zaman Değerlendirilir?",
    excerpt:
      "Perimenopozda adet döngüsünde kısalma, uzama veya akış değişiklikleri görülebilir. Düzenli izlem, olağan değişimlerle klinik değerlendirme gerektiren durumları ayırt etmeyi kolaylaştırır.",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">Döngüde hangi değişiklikler sık görülür?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Perimenopoz döneminde döngü aralığı birkaç ay boyunca kısalabilir veya uzayabilir.
Kanama miktarında artış ya da azalma, bazı aylarda lekelenme, bazı aylarda ise gecikme görülebilir.
Bu değişiklikler tek başına "olağandışı" anlamına gelmez; örüntünün zamana yayılarak değerlendirilmesi daha doğru bir yaklaşım sunar.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Hangi durumlarda tıbbi değerlendirme düşünülmeli?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Uzun süren yoğun kanama, döngüler arası belirgin sıklaşma, ilişkili halsizlik veya yaşam kalitesini bozan ağrı gibi bulgular klinik görüşme gerektirebilir.
Amaç alarm üretmek değil, benzer şikayetlerin farklı nedenlere bağlı olabileceğini hatırlamaktır.
Bu nedenle "normal mi değil mi?" sorusu yerine "örüntü nasıl değişiyor?" sorusu daha işlevseldir.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Evde izlem için pratik çerçeve</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Her ay için başlangıç-bitiş tarihini, kanama yoğunluğunu ve eşlik eden semptomları kısa notlarla kaydetmek yeterlidir.
Uyku kalitesi, stres yükü ve sıcak basması gibi başlıkları aynı dönemde not etmek, tabloyu daha doğru okumaya yardımcı olur.
Bu bilgiler hekim görüşmesinde daha net bir değerlendirme yapılmasına katkı sağlar.
</p>

<div class="my-12 rounded-[28px] border-l-4 border-secondary bg-surface-container p-8">
  <p class="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Klinik Not</p>
  <p class="text-charcoal/75 leading-relaxed">
    Döngü değişiklikleri bireysel olarak farklılık gösterebilir. Bu içerik bilgilendirme amaçlıdır; tanı veya tedavi önerisi yerine geçmez.
  </p>
</div>

<h2 class="font-serif text-3xl text-charcoal mb-4">Hekim görüşmesine nasıl hazırlanılır?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Son 3-6 ayın döngü notlarını, varsa kullanılan ilaçları ve eşlik eden belirtileri birlikte götürmek görüşmeyi kolaylaştırır.
Böylece değerlendirme, tek bir günün hissi üzerinden değil zaman içindeki değişim üzerinden yapılabilir.
</p>
`,
    author: "Basak Pelister",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-14",
    lastModified: "2026-04-14",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.cycleTracking,
    date: "2026-04-14",
    category: "perimenopoz",
    readTime: "7 dk",
    tags: ["perimenopoz", "adet döngüsü", "semptom izlemi"],
  },
  {
    slug: "menopozda-kemik-sagligi",
    title: "Menopozda Kemik Sağlığı: Kırık Riskini Azaltmak İçin Temel Yaklaşım",
    excerpt:
      "Menopoz sonrasında kemik yoğunluğu değişebilir. Beslenme, direnç egzersizi ve düzenli risk değerlendirmesi birlikte ele alındığında uzun vadeli kemik sağlığı daha güçlü desteklenebilir.",
    content: `
<h2 class="font-serif text-3xl text-charcoal mb-4">Kemik sağlığı neden menopozda öne çıkar?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Östrojen düzeylerindeki değişim, kemik yapım-yıkım dengesini etkileyebilir.
Bu süreç herkeste aynı hızda ilerlemez; ancak uzun vadede kırık riski açısından izlem gerektiren bir dönem başlatabilir.
Kemik sağlığı yaklaşımında amaç hızlı sonuç değil, sürdürülebilir koruyucu alışkanlıklar oluşturmaktır.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Günlük yaşamda hangi başlıklar önceliklidir?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Direnç egzersizleri, düzenli yürüyüş, dengeli protein alımı ve kalsiyumdan zengin beslenme temel başlıklardır.
D vitamini düzeyi, güneş maruziyeti ve yaşam tarzı eşlik eden etkenler olarak birlikte değerlendirilmelidir.
Sigara ve yüksek alkol kullanımı gibi risk artırıcı davranışların azaltılması da koruyucu çerçevede yer alır.
</p>

<h2 class="font-serif text-3xl text-charcoal mb-4">Risk değerlendirmesi nasıl okunmalı?</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Yaş, aile öyküsü, önceki kırık öyküsü, eşlik eden hastalıklar ve kullanılan ilaçlar birlikte ele alınır.
Gerektiğinde kemik yoğunluğu ölçümü gibi araçlar klinik kararın parçası olabilir.
Bu değerlendirme, kişisel risk profilini belirleyerek öncelikli adımları netleştirmeye yardımcı olur.
</p>

<div class="my-12 rounded-[28px] border-l-4 border-secondary bg-surface-container p-8">
  <p class="text-[11px] uppercase tracking-[0.22em] text-secondary font-bold mb-3">Klinik Not</p>
  <p class="text-charcoal/75 leading-relaxed">
    Kemik sağlığı planı bireysel risk düzeyine göre belirlenmelidir. Bu içerik genel bilgilendirme sağlar; kişisel tıbbi karar yerine geçmez.
  </p>
</div>

<h2 class="font-serif text-3xl text-charcoal mb-4">Uzun vadeli takip için pratik yaklaşım</h2>
<p class="text-charcoal/75 leading-relaxed mb-8">
Aylık hedefler yerine mevsimsel takip daha sürdürülebilir olabilir: hareket düzeyi, beslenme düzeni ve olası risklerin periyodik gözden geçirilmesi.
Bu yaklaşım, tek bir ölçüm sonucuna odaklanmak yerine genel kemik sağlığı davranışlarını güçlendirmeyi hedefler.
</p>
`,
    author: "Alara Baykent",
    reviewer: "Doc. Dr. Senai Aksoy",
    medicalReviewerTitle: "Kadın Hastalıkları ve Doğum Uzmanı",
    reviewDate: "2026-04-14",
    lastModified: "2026-04-14",
    status: "published",
    disclaimerVersion: "v1.0",
    references: referenceCatalog.boneHealth,
    date: "2026-04-14",
    category: "kadin-sagligi",
    readTime: "8 dk",
    tags: ["kemik sağlığı", "menopoz", "koruyucu yaklaşım"],
  },
];

export const getPublishedArticles = () => articles.filter((a) => a.status === "published");

export const publishedArticles = getPublishedArticles();
export const featuredArticles = publishedArticles.filter((a) => a.featured);
export const perimenopozArticles = publishedArticles.filter((a) => a.category === "perimenopoz");
export const menopozArticles = publishedArticles.filter((a) => a.category === "menopoz");
export const healthArticles = publishedArticles.filter(
  (a) => a.category === "kadin-sagligi" || a.category === "kalp-sagligi"
);
