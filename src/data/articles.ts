export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  reviewer: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

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
    date: "2026-04-09",
    category: "bilgi",
    readTime: "10 dk",
    tags: ["skleroz multiple", "sinir sistemi", "otoimmün"],
  },
];

export const featuredArticles = articles.filter((a) => a.featured);
export const perimenopozArticles = articles.filter((a) => a.category === "perimenopoz");
export const menopozArticles = articles.filter((a) => a.category === "menopoz");
export const healthArticles = articles.filter((a) => a.category === "kadin-sagligi" || a.category === "kalp-sagligi");
