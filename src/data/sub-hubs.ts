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
    path: '/hormonal-gecis/perimenopoz/',
    siteTitle: 'Perimenopoz Rehberi - Hormonal Geçiş - Estranova',
    description:
      'Perimenopoz nedir, adet düzeni ve ruh hali bu dönemde nasıl değişebilir? Hormonal geçişin ilk evresi için temel rehber ve seçilmiş yazılar.',
    heroEyebrow: 'Hormonal Geçiş · İlk evre',
    heroTitle: 'Perimenopoz: menopoza giden geçiş yolu',
    heroLede:
      'Üreme çağından menopoza uzanan bu yıllarda hormonlar dalgalanır. Hangi değişimin olağan sayılabileceğini, hangisinin değerlendirme gerektirdiğini sakin bir dille ayırıyoruz.',
  },
  {
    path: '/hormonal-gecis/menopoza-hazirlik/',
    siteTitle: 'Menopoza Hazırlık - Estranova',
    description:
      'Geçiş döneminde yaşam düzeni, düzenli izleme ve koruyucu adımlar: uyku, hareket ve beslenmeyi birlikte ele alan rehberler.',
    heroEyebrow: 'Hormonal Geçiş · Menopoza Hazırlık',
    heroTitle: 'Menopoza Hazırlık',
    heroLede:
      'Hazırlık tek bir kontrol listesiyle bitmez. Küçük alışkanlıklar ve düzenli kontroller birlikte düşünüldüğünde geçiş daha anlaşılır hale gelir.',
  },
  {
    path: '/hormonal-gecis/menopoz/',
    siteTitle: 'Menopoz - Estranova',
    description:
      'Menopoz dönemini anlamak için temel rehberler: tanım, hormon tedavisi kararı ve kemik sağlığı gibi sık okunan başlıklar.',
    heroEyebrow: 'Hormonal Geçiş · Menopoz',
    heroTitle: 'Menopoz',
    heroLede:
      'Menopoz, son adetten sonra geriye dönük tanımlanan ve östrojenle progesteron düzeninin kalıcı olarak değiştiği bir dönemdir. Tanımı tek cümleye sığar; ardından gelen yılların soruları sığmaz.',
  },
  {
    path: '/hormonal-gecis/40-sonrasi/',
    siteTitle: '40 Sonrası Sağlık - Estranova',
    description:
      '40 sonrası koruyucu sağlık, tarama takvimi, ağız-diş sağlığı ve uzun vadeli planlama başlıklarını hormonal geçiş zemininde toplayan rehber.',
    heroEyebrow: 'Hormonal Geçiş · 40 Sonrası Sağlık',
    heroTitle: '40 Sonrası Sağlık',
    heroLede:
      'Kırktan sonra sağlığa yalnızca belirti çıktığında bakmak yetmez. Kemik, metabolizma ve ağız sağlığı, hiçbir şikâyet yokken de izlenmeye değer.',
    articlePaths: [
      '/hormonal-gecis/40-sonrasi/yuze-yakisan-estetik-dis-karari/',
      '/hormonal-gecis/40-sonrasi/tarama-testleri/',
      '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari/',
      '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/',
      '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari/',
    ],
  },
  {
    path: '/zamansiz-yasam/vitaminler/',
    siteTitle: 'Vitaminler ve Takviyeler - Estranova',
    description: 'D vitamini, magnezyum, kreatin ve seçilmiş takviyeler: menopozda ne işe yarayabilecekleri ve kanıtın nerede durduğu.',
    heroEyebrow: 'Zamansız Yaşam · Vitaminler',
    heroTitle: 'Vitaminler ve Takviyeler',
    heroLede:
      'Vitaminleri tek başına bir hap olarak değil, beslenmenin ve günlük alışkanlıkların parçası olarak ele alıyoruz. Etiketteki iddia ile kanıtın söylediği her zaman aynı değildir.',
    articlePaths: [
      '/zamansiz-yasam/vitaminler/kreatin-menopozda-ne-ise-yarar/',
      '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/',
      '/zamansiz-yasam/d-vitamini-rehberi/',
    ],
  },
  {
    path: '/zamansiz-yasam/deneysel/',
    siteTitle: 'Deneysel Yaklaşımlar - Estranova',
    description:
      'Henüz araştırma aşamasındaki yaklaşımlar: insanlarda ne kadar denendikleri ve kanıtın hangi düzeyde olduğu.',
    heroEyebrow: 'Zamansız Yaşam · Deneysel',
    heroTitle: 'Deneysel Yaklaşımlar',
    heroLede:
      '“Deneysel” etiketi, bir yaklaşımın henüz herkes için standart öneri olmadığını hatırlatır. Umut verici bir laboratuvar bulgusuyla insanda gösterilmiş bir yarar arasındaki mesafe çoğu zaman sanıldığından uzundur.',
  },
  {
    path: '/zamansiz-yasam/non-invaziv/',
    siteTitle: 'Ameliyatsız Uygulamalar - Estranova',
    description:
      'Ameliyat gerektirmeyen yaklaşımlar üzerine bağımsız editoryal rehberler: cilt, beden ve gündelik iyi oluş.',
    heroEyebrow: 'Zamansız Yaşam · Ameliyatsız',
    heroTitle: 'Ameliyatsız Uygulamalar',
    heroLede:
      'Ameliyat ya da enjeksiyon gerektirmeyen yaklaşımlar: cihaz uygulamalarından sauna ve soğuk suya, hangisinin ne kadar kanıta dayandığını ayırarak ele alıyoruz.',
  },
  {
    path: '/beden-yakinlik/cilt-gorunum/',
    siteTitle: 'Cilt & Görünüm - Beden & Yakınlık - Estranova',
    description:
      'Menopozda cildin hormonal yaşlanması ve günlük bakım: kollajen, nem, cilt bariyeri ve klinik destek seçenekleri üzerine sade rehberler.',
    heroEyebrow: 'Hormonun cilde dokunduğu yer',
    heroTitle: 'Cilt & Görünüm',
    heroLede:
      'Menopozda cilt iki yönden değişir: hormonal değişim kollajeni, elastini ve nemi etkiler; biyolojik yaşlanma da kendi hızında sürer. Odak, görünüm klişeleri yerine cildin kendi sağlığı ve sade bakım yollarıdır.',
  },
  {
    path: '/beden-yakinlik/cinsel-saglik/',
    siteTitle: 'Cinsel Sağlık - Beden & Yakınlık - Estranova',
    description:
      'Vajinal kuruluk, cinsellikte ağrı ve libido değişimleri: menopozun en sessiz yaşanan konularına mahremiyetinize saygı duyan, yargısız bir rehber.',
    heroEyebrow: 'Beden & Yakınlık · Cinsel Sağlık',
    heroTitle: 'Cinsel Sağlık',
    heroLede:
      'Bu konular nadiren yüksek sesle sorulur. Konuşulmamaları, çözümsüz oldukları anlamına gelmez.',
  },
  {
    path: '/beden-yakinlik/pelvik-taban/',
    siteTitle: 'Pelvik Taban - Beden & Yakınlık - Estranova',
    description:
      'İdrar kontrolü, duruş ve pelvik kasların menopozda değişimi; egzersiz, davranışsal stratejiler ve gerektiğinde tıbbi destek.',
    heroEyebrow: 'Sessiz çalışan kaslar',
    heroTitle: 'Pelvik Taban',
    heroLede:
      'İdrar kontrolündeki değişimler menopozda yaygındır ama çoğu zaman sessizce yaşanır. Pelvik taban cinsel yaşamla, duruşla ve gün içindeki rahatlıkla da yakından ilişkilidir.',
  },
  {
    path: '/zihin-denge/uyku-dinlenme/',
    siteTitle: 'Uyku & Dinlenme - Zihin & Denge - Estranova',
    description:
      'Menopozda uyku neden zorlaşır, nasıl desteklenebilir? Gece terlemesi, bölünen uyku ve dinlenme kalitesi üzerine sade rehberler.',
    heroEyebrow: 'Gecenin ortasında uyanan kadın',
    heroTitle: 'Uyku & Dinlenme',
    heroLede:
      'Menopozda uyku çoğu zaman birkaç küçük kesintiyle bozulur. Önce ter, sonra düşünceler, sonra saat üçte tavana baktığınız o tuhaf uyanıklık.',
  },
  {
    path: '/zihin-denge/duygusal-denge/',
    siteTitle: 'Duygusal Denge - Zihin & Denge - Estranova',
    description:
      'Menopozda ruh hali dalgalanmaları, kaygı ve stres tepkisi: hormonların beyin kimyasıyla ilişkisi ve gündelik hayatta işe yarayabilecek yollar.',
    heroEyebrow: 'İçerideki manzara',
    heroTitle: 'Duygusal Denge',
    heroLede:
      'Ani sinirlenme, artan kaygı, gün içinde değişen ruh hali: menopozda değişen hormonlar beyin kimyasını doğrudan etkiler. Mekanizmayı bilmek, kendinize daha anlayışlı bakmayı kolaylaştırabilir.',
  },
  {
    path: '/zihin-denge/bilissel-saglik/',
    siteTitle: 'Bilişsel Sağlık - Zihin & Denge - Estranova',
    description:
      'Menopozda beyin sisi, unutkanlık ve dikkat dağınıklığı: hangisi olağan seyrin parçası, hangisi izlenmeli?',
    heroEyebrow: 'Sınıflama yorgunluğu',
    heroTitle: 'Bilişsel Sağlık',
    heroLede:
      'Aradığınız kelime dilinizin ucunda kalır, odaya neden girdiğinizi unutursunuz. Menopozda bu “aklımı kaçırıyorum” hissi yaygındır ama çoğu zaman geçicidir.',
  },
  {
    path: '/bilimsel-pencere/hormonlarin-bilimi/',
    siteTitle: 'Hormonların Bilimi - Bilimsel Pencere - Estranova',
    description:
      'Östrojen, progesteron ve testosteronun temel mekanizmaları: farklı dokuları nasıl etkilediklerini sade bir dille açıklayan derlemeler.',
    heroEyebrow: 'Haberci moleküller',
    heroTitle: 'Hormonların Bilimi',
    heroLede:
      'Östrojen yalnızca bir üreme hormonu değildir; beyinden damarlara, kemikten cilde kadar pek çok dokuda iş görür. Bu yüzden azaldığında değişim tek bir organla sınırlı kalmaz.',
  },
  {
    path: '/bilimsel-pencere/hucreler-ve-yaslanma/',
    siteTitle: 'Hücreler ve Yaşlanma - Bilimsel Pencere - Estranova',
    description:
      'NAD+, mitokondri, senesans ve telomer: hücresel yaşlanma biyolojisi üzerine derlemeler ve erken evre insan araştırmalarında kanıtın düzeyi.',
    heroEyebrow: 'Onarımın yavaşladığı yer',
    heroTitle: 'Hücreler ve Yaşlanma',
    heroLede:
      'Hücresel yaşlanma, son 20 yılda biyolojinin en hızlı büyüyen alanlarından biri oldu. Hangi bulgu hâlâ erken evrede, hangi iddia henüz vaat düzeyinde, hangisi gerçekten kanıta dayanıyor?',
  },
  {
    path: '/bilimsel-pencere/yeni-arastirmalar/',
    siteTitle: 'Yeni Araştırmalar - Bilimsel Pencere - Estranova',
    description:
      'Menopoz ve 40+ kadın sağlığı literatüründen seçilmiş yeni çalışmalar ve meta-analizler: bulgunun ne söylediği, neyi henüz söylemediği.',
    heroEyebrow: 'Daha iyi sorular',
    heroTitle: 'Yeni Araştırmalar',
    heroLede:
      'Yeni bir çalışma manşete çıktığında sorulacak ilk şey, kimlerde neyi ve ne kadar süre ölçtüğüdür. Buradaki yazılar bulguyu bu sorularla okur.',
  },
];

export const subHubByPath = Object.fromEntries(subHubs.map((hub) => [hub.path, hub])) as Record<string, SubHubConfig>;
