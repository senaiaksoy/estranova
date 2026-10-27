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
      'Perimenopozdan menopoza ve sonrasına, hormonal geçişin her evresi için sade ve dengeli rehberler. Hangi değişimin hangi döneme ait olduğunu adım adım izleyebilir, sorularınızın yanıtını evresine göre bulabilirsiniz.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Hormonal Geçiş',
    heroLede:
      'Hormonal geçiş yıllara yayılır ve her kadında farklı bir tempoda ilerler.',
  },
  {
    path: '/zamansiz-yasam/',
    siteTitle: 'Zamansız Yaşam - Estranova',
    description:
      'Vitaminlerden deneysel yaklaşımlara, iyi yaşlanma ve uzun ömür üzerine kanıt düzeyiyle değerlendirilmiş içerikler. Popüler iddiaları, araştırmanın gerçekte söyledikleriyle yan yana koyuyoruz.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Zamansız Yaşam',
    heroLede:
      'Enerjik yaşlanmanın kısayolu yok; ama hangi yolun kanıtla desteklendiğini bilmek işe yarar.',
  },
  {
    path: '/beden-yakinlik/',
    siteTitle: 'Beden & Yakınlık - Estranova',
    description:
      'Menopozda cildiniz, pelvik tabanınız ve cinsel yaşamınızdaki değişimler üzerine bilimsel bilgi ve rehberlik. Değişen beden deneyimini yargılamadan, açık bir dille ele alıyoruz.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Beden & Yakınlık',
    heroLede:
      'Bedeninizdeki değişimlerin bir adı ve bir açıklaması var; hepsi açıkça konuşulabilir.',
  },
  {
    path: '/zihin-denge/',
    siteTitle: 'Zihin & Denge - Estranova',
    description:
      'Hormonal değişimlerin zihinsel ve duygusal etkilerini anlamak, uyku ve ruh halini desteklemek için bilimsel rehberlik. Günlük dalgalanmaları sade bir dille ele alırız.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Zihin & Denge',
    heroLede:
      'Bölünen uyku, gün içinde dalgalanan ruh hali, dağılan dikkat: hepsinin hormonlarla bir bağı olabilir.',
  },
  {
    path: '/bilimsel-pencere/',
    siteTitle: 'Bilimsel Pencere - Estranova',
    description:
      'Hormonların biyolojisi, hücresel yaşlanma ve yeni araştırmalar: bir bulgunun nasıl çalıştığı ve çalışmaların nasıl okunacağı. Ürün ve takviye kararları Zamansız Yaşam’da.',
    heroEyebrow: 'Kategori',
    heroTitle: 'Bilimsel Pencere',
    heroLede:
      'Mekanizmadan yeni çalışmalara, tıbbi bilginin arka planına açılan bir pencere.',
  },
];

export const mainHubByPath = Object.fromEntries(mainHubs.map((hub) => [hub.path, hub])) as Record<string, MainHubConfig>;
