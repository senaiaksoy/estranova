export interface MainHubConfig {
  path: string;
  siteTitle: string;
  description: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLede: string;
}

export const mainHubs: MainHubConfig[] = [
  {
    path: '/hormonal-gecis/',
    siteTitle: 'Hormonal Geçiş - Estranova',
    description:
      'Perimenopozdan menopoza, hormonal geçiş sürecinizi anlamak için kapsamlı bilgi rehberleri. Bu bölümde geçiş dönemlerini adım adım inceleyebilir, her evreye dair sorulara sade ve dengeli bir yoldan ulaşabilirsiniz.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Hormonal Geçiş',
    heroLede:
      'Perimenopozdan menopoza, hormonal geçiş sürecinizi anlamak için kapsamlı bilgi rehberleri. Bu bölümde geçiş dönemlerini adım adım inceleyebilir, her evreye dair sorulara sade ve dengeli bir yoldan ulaşabilirsiniz.',
  },
  {
    path: '/zamansiz-yasam/',
    siteTitle: 'Zamansız Yaşam - Estranova',
    description:
      'Dinamik ve enerjik yaşlanmak için bilimsel bilgi. Vitaminlerden deneysel yaklaşımlara, kanıt düzeyiyle değerlendirilmiş içerikler. Bu bölüm, anti-aging ve longevity başlıklarını sade bir yerde toplar.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Zamansız Yaşam',
    heroLede:
      'Dinamik ve enerjik yaşlanmak için bilimsel bilgi. Vitaminlerden deneysel yaklaşımlara, kanıt düzeyiyle değerlendirilmiş içerikler. Bu bölüm, anti-aging ve longevity başlıklarını sade bir yerde toplar.',
  },
  {
    path: '/beden-yakinlik/',
    siteTitle: 'Beden & Yakınlık - Estranova',
    description:
      'Menopoz döneminde bedeniniz, cinsel sağlığınız ve cinsel yaşamınız hakkında bilimsel bilgi ve rehberlik. Bu bölüm, değişen beden deneyimini yargılamadan ele alır.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Beden & Yakınlık',
    heroLede:
      'Menopoz döneminde bedeniniz, cinsel sağlığınız ve cinsel yaşamınız hakkında bilimsel bilgi ve rehberlik. Bu bölüm, değişen beden deneyimini yargılamadan ele alır.',
  },
  {
    path: '/zihin-denge/',
    siteTitle: 'Zihin & Denge - Estranova',
    description:
      'Hormonal değişimlerin zihinsel ve duygusal etkilerini anlamak, uyku ve ruh halini desteklemek için bilimsel rehberlik. Günlük dalgalanmaları sade bir dille ele alırız.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Zihin & Denge',
    heroLede:
      'Hormonal değişimlerin zihinsel ve duygusal etkilerini anlamak, uyku ve ruh halini desteklemek için bilimsel rehberlik. Günlük dalgalanmaları sade bir dille ele alırız.',
  },
  {
    path: '/bilimsel-pencere/',
    siteTitle: 'Bilimsel Pencere - Estranova',
    description:
      'Uzman görüşleri, güncel araştırma özetleri ve mitlerin bilimle karşılaştırılması. Tıbbi veriyi erişilebilir bir dille sunarız.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Bilimsel Pencere',
    heroLede:
      'Uzman görüşleri, güncel araştırma özetleri ve mitlerin bilimle karşılaştırılması. Tıbbi veriyi erişilebilir bir dille sunarız.',
  },
];

export const mainHubByPath = Object.fromEntries(mainHubs.map((hub) => [hub.path, hub])) as Record<string, MainHubConfig>;
