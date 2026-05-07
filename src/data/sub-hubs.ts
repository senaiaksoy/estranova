export interface SubHubConfig {
  path: string;
  siteTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
  articlePaths?: string[];
}

export const subHubs: SubHubConfig[] = [
  {
    path: '/hormonal-gecis/perimenopoz',
    siteTitle: 'Perimenopoz Rehberi - Hormonal Geçiş - Estranova',
    description:
      'Perimenopoz nedir, adet ve ruh hali nasıl okunur? Temel rehber, seçilmiş makaleler ve Zihin & Denge bağlantılarıyla hormonal geçişin ilk evresi.',
    heroEyebrow: 'Hormonal Geçiş · İlk evre',
    heroTitle: 'Perimenopoz: menopoza giden geçiş yolu',
    heroLede:
      'Üreme çağından menopoza uzanan bu süreçte hormonlar dalgalanır; burada amaç panik değil, neyin ne zaman normal sınırlarda okunabileceğini netleştirmektir.',
  },
  {
    path: '/hormonal-gecis/menopoza-hazirlik',
    siteTitle: 'Menopoza Hazırlık - Estranova',
    description:
      'Geçiş döneminde yaşam düzeni, izleme ve koruyucu adımlar; uyku, hareket ve beslenme başlıklarını birlikte ele alan rehber bağlantıları.',
    heroEyebrow: 'Hormonal Geçiş · Menopoza Hazırlık',
    heroTitle: 'Menopoza Hazırlık',
    heroLede:
      'Hazırlık tek bir liste değil; uyku, hareket, beslenme ve düzenli izleme gibi başlıkların birlikte ele alınmasıdır. Aşağıdaki rehberler bu geçişi daha anlaşılır kılmaya yardımcı olur.',
  },
  {
    path: '/hormonal-gecis/menopoz',
    siteTitle: 'Menopoz - Estranova',
    description:
      'Menopoz dönemini anlamak için temel rehberler: tanım, hormon tedavisi kararı ve kemik sağlığı gibi sık okunan başlıklar.',
    heroEyebrow: 'Hormonal Geçiş · Menopoz',
    heroTitle: 'Menopoz',
    heroLede:
      'Menopoz, son adetten sonra geriye dönük tanımlanan bir dönemdir; östrojen ve progesteron düzeninde kalıcı bir değişim yaşanır. Burada bulacağınız içerikler bu dönemi anlamayı, kendi sorularınıza daha net bir yön bulmayı kolaylaştırmak içindir.',
  },
  {
    path: '/hormonal-gecis/40-sonrasi',
    siteTitle: '40 Sonrası Sağlık - Estranova',
    description:
      '40 sonrası koruyucu sağlık, tarama takvimi, ağız-diş sağlığı ve uzun vadeli planlama başlıklarını hormonal geçiş zemininde toplayan rehber.',
    heroEyebrow: 'Hormonal Geçiş · 40 Sonrası Sağlık',
    heroTitle: '40 Sonrası Sağlık',
    heroLede:
      'Kırktan sonra sağlık yalnızca belirti çıktığında bakılan bir alan değil; tarama takvimi, ağız-diş sağlığı, kemik, metabolizma ve günlük ritmin birlikte izlendiği uzun vadeli bir sağlık hattıdır.',
    articlePaths: [
      '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari',
      '/zamansiz-yasam/kemik-sagligi-40-sonrasi',
      '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari',
    ],
  },
  {
    path: '/zamansiz-yasam/vitaminler',
    siteTitle: 'Vitaminler ve Takviyeler - Estranova',
    description: 'Vitaminler ve seçilmiş takviye başlıklarında kanıt odaklı zamansız yaşam içerikleri.',
    heroEyebrow: 'Zamansız Yaşam · Vitaminler',
    heroTitle: 'Vitaminler ve Takviyeler',
    heroLede:
      'Bu alt başlıkta vitaminleri tek bir hap olarak değil, beslenme ve günlük alışkanlıkların bir parçası olarak okuyoruz. D vitamini, magnezyum ve seçilmiş takviye başlıklarını abartıdan ayıran sakin bir okuma ritmi kuruyoruz.',
    articlePaths: [
      '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar',
      '/zamansiz-yasam/d-vitamini-rehberi',
    ],
  },
  {
    path: '/zamansiz-yasam/deneysel',
    siteTitle: 'Deneysel Yaklaşımlar - Estranova',
    description:
      'Araştırma aşamasındaki yaklaşımlar hakkında kanıt düzeyiyle değerlendirilmiş zamansız yaşam içerikleri.',
    heroEyebrow: 'Zamansız Yaşam · Deneysel',
    heroTitle: 'Deneysel Yaklaşımlar',
    heroLede:
      '“Deneysel” etiketi, bir yaklaşımın henüz herkes için standart öneri olmadığını hatırlatır. Bu sayfadaki içerikler güçlü kanıt ile sınırlı kanıt arasındaki farkı okumaya yardımcı olur.',
  },
  {
    path: '/zamansiz-yasam/non-invaziv',
    siteTitle: 'Ameliyatsız Uygulamalar - Estranova',
    description:
      'Cerrahi olmayan yaklaşımlar üzerine bağımsız editöryal içerikler; cilt, beden ve günlük iyi olma başlıklarında rehberler.',
    heroEyebrow: 'Zamansız Yaşam · Ameliyatsız',
    heroTitle: 'Ameliyatsız Uygulamalar',
    heroLede:
      'Bu alt başlık altında ameliyat veya enjeksiyon gerektirmeyen yaklaşımları editöryal bir bakışla ele alıyoruz. Genel rehber yayında; başka başlıklar editoryal takvimde.',
  },
  {
    path: '/beden-yakinlik/cilt-gorunum',
    siteTitle: 'Cilt & Görünüm - Beden & Yakınlık - Estranova',
    description:
      'Menopozda cildin hormonal yaşlanması ve günlük bakım rehberi; kollajen, nem, bariyer ve klinik destek seçenekleri sade bir okuma.',
    heroEyebrow: 'Hormonun cilde dokunduğu yer',
    heroTitle: 'Cilt & Görünüm',
    heroLede:
      'Menopozda cilt iki cephede değişir: hormonal, kollajen, elastin, nem ve biyolojik yaşlanma. Burada görünüm odaklı klişeyi değil, cildin kendi sağlığını desteklemenin sade yollarını buluyorsunuz.',
  },
  {
    path: '/beden-yakinlik/cinsel-saglik',
    siteTitle: 'Cinsel Sağlık - Beden & Yakınlık - Estranova',
    description:
      'Vajinal kuruluk, cinsellikte ağrı ve libido değişimleri; menopozda en sessiz yaşanan başlıklara mahremiyetinizi yargılamayan bir okuma rehberi.',
    heroEyebrow: 'Beden & Yakınlık · Cinsel Sağlık',
    heroTitle: 'Cinsel Sağlık',
    heroLede:
      'Vajinal kuruluk, cinsellikte ağrı, libido değişimleri; menopozda en az konuşulan ama en sık aranan başlıklar. Konuşulmaması, çözümsüz olması anlamına gelmez.',
  },
  {
    path: '/beden-yakinlik/pelvik-taban',
    siteTitle: 'Pelvik Taban - Beden & Yakınlık - Estranova',
    description:
      'İdrar kontrolü, duruş ve pelvik kasların menopozda değişimi; egzersiz, davranışsal stratejiler ve gerektiğinde tıbbi destek.',
    heroEyebrow: 'Sessiz çalışan kaslar',
    heroTitle: 'Pelvik Taban',
    heroLede:
      'İdrar kontrolünde değişimler menopozda yaygın ama sessizce yaşanır. Pelvik taban; cinsel yaşam, duruş ve günlük rahatlık aynı sistemden geçer.',
  },
  {
    path: '/zihin-denge/uyku-dinlenme',
    siteTitle: 'Uyku & Dinlenme - Zihin & Denge - Estranova',
    description:
      'Menopozda uykunun neden zorlaştığı ve nasıl desteklenebileceği üzerine sade bir okuma rehberi; gece terlemesi, uyku bölünmesi ve dinlenme kalitesi.',
    heroEyebrow: 'Gecenin ortasında uyanan kadın',
    heroTitle: 'Uyku & Dinlenme',
    heroLede:
      'Menopozda uyku, çoğu zaman tek seferde kaybedilmez; her gece bir parçası eksilir. Önce ter, sonra düşünceler, sonra saat üçte tavana bakan o tuhaf uyanıklık.',
  },
  {
    path: '/zihin-denge/duygusal-denge',
    siteTitle: 'Duygusal Denge - Zihin & Denge - Estranova',
    description:
      'Menopozda ruh halinde dalgalanma, kaygı ve stres tepkisi; hormonların beyin kimyasıyla konuştuğu noktada mekanizma ve günlük yaşam stratejileri.',
    heroEyebrow: 'İçerideki manzara',
    heroTitle: 'Duygusal Denge',
    heroLede:
      'Ruh halinde dalgalanma, ani sinirlenme, kaygının artması; menopoz hormonları beyin kimyasıyla doğrudan konuşur. Bu sayfa hem mekanizmayı hem günlük stratejileri bir arada ele alır.',
  },
  {
    path: '/zihin-denge/bilissel-saglik',
    siteTitle: 'Bilişsel Sağlık - Zihin & Denge - Estranova',
    description:
      'Menopozda beyin sisi, unutkanlık ve dikkat dağılması; ne kadarı normal seyir, ne kadarı izlenmeyi gerektirir? Bilişsel değişimleri okuma rehberi.',
    heroEyebrow: 'Sınıflama yorgunluğu',
    heroTitle: 'Bilişsel Sağlık',
    heroLede:
      'Beyin sisi, kelimeyi unutma, dikkat dağılması; menopozda “aklımı kaçırıyorum” hissi yaygın ama çoğu zaman geçicidir. Burada ne kadarı normal, ne kadarı dikkat ister yanıtları.',
  },
  {
    path: '/bilimsel-pencere/hormonlarin-bilimi',
    siteTitle: 'Hormonların Bilimi - Bilimsel Pencere - Estranova',
    description:
      'Östrojen, progesteron ve testosteronun temel mekanizmaları; vücudun her dokusuyla nasıl konuştuklarını sade bir dille açıklayan derlemeler.',
    heroEyebrow: 'Bedenin sessiz dili',
    heroTitle: 'Hormonların Bilimi',
    heroLede:
      'Östrojen yalnızca bir üreme hormonu değildir; beyni, damarı, kemiği, cildi aynı anda dinleyen geniş bir orkestra şefidir. Onun çekilmesi bedeni tek bir noktadan değil, eş zamanlı olarak pek çok yerden değiştirir.',
  },
  {
    path: '/bilimsel-pencere/hucreler-ve-yaslanma',
    siteTitle: 'Hücreler ve Yaşlanma - Bilimsel Pencere - Estranova',
    description:
      'NAD+, mitokondri, senesans ve telomer; hücresel yaşlanma biyolojisi için derlemeler ve erken evre insan araştırmalarının kanıt düzeyleri.',
    heroEyebrow: 'Onarımın yavaşladığı yer',
    heroTitle: 'Hücreler ve Yaşlanma',
    heroLede:
      'NAD+, mitokondri, senesans, telomer; yaşlanma biyolojisinin son 20 yılda fişeklenen alanı. Hangi araştırma erken evre, hangi vaat henüz vaadinde, hangi uygulama bilime girmiş?',
  },
  {
    path: '/bilimsel-pencere/yeni-arastirmalar',
    siteTitle: 'Yeni Araştırmalar - Bilimsel Pencere - Estranova',
    description:
      'Editoryal kuruldaki yeni çalışma derlemeleri ve meta-analizler için ayrılmış alan; menopoz ve 40+ kadın sağlığı literatüründen seçilmiş özetler.',
    heroEyebrow: 'Daha iyi sorular',
    heroTitle: 'Yeni Araştırmalar',
    heroLede:
      'Editoryal kuruldaki yeni çalışma derlemeleri ve meta-analizler için ayrılmış alan. Bilim, yanıt biriktirir; ama önce daha iyi sorular geliştirir.',
  },
];

export const subHubByPath = Object.fromEntries(subHubs.map((hub) => [hub.path, hub])) as Record<string, SubHubConfig>;
