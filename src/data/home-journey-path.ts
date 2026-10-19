export interface HomeJourneyItem {
  step: '01' | '02' | '03' | '04';
  title: string;
  eyebrow: string;
  excerpt: string;
  href: string;
  imageKey:
    | '/hormonal-gecis/perimenopoz/'
    | '/hormonal-gecis/menopoza-hazirlik/'
    | '/hormonal-gecis/menopoz/'
    | '/hormonal-gecis/40-sonrasi/';
  ctaLabel: string;
  featured?: boolean;
}

export const homeJourneyIntro = {
  sectionLabel: 'Yolculuk Haritası',
  title: 'Hormonal geçiş için ilk okuma eşiği',
  lede:
    'Hangi dönemde olduğunuzu kabaca biliyorsanız bu dört kapıdan birini seçin.',
  transitionNote:
    'Sizi bir dönemden çok bir belirti düşündürüyorsa, sıradaki belirti atlası daha iyi bir başlangıç olabilir.',
};

export const homeJourneyItems: HomeJourneyItem[] = [
  {
    step: '01',
    eyebrow: 'Koruyucu yaklaşım',
    title: '40 Sonrası Sağlık',
    excerpt:
      'Kemik, kas, uyku ve tarama başlıkları tek dosyada; uzun vadeli sağlığı bütün olarak düşünmek için.',
    href: '/hormonal-gecis/40-sonrasi/',
    imageKey: '/hormonal-gecis/40-sonrasi/',
    ctaLabel: 'İçeriği incele',
    featured: true,
  },
  {
    step: '02',
    eyebrow: 'İlk kapı',
    title: 'Perimenopoz',
    excerpt:
      'Adet düzeni değişmeye başladığında neler olup bittiğini sırasıyla anlatan bir başlangıç rehberi.',
    href: '/hormonal-gecis/perimenopoz/',
    imageKey: '/hormonal-gecis/perimenopoz/',
    ctaLabel: 'Rotayı aç',
  },
  {
    step: '03',
    eyebrow: 'Geçişi anlamak',
    title: 'Menopoza Hazırlık',
    excerpt:
      'Geçiş yaklaşırken günlük düzeninizi, takibinizi ve koruyucu alışkanlıklarınızı adım adım kurmak için.',
    href: '/hormonal-gecis/menopoza-hazirlik/',
    imageKey: '/hormonal-gecis/menopoza-hazirlik/',
    ctaLabel: 'Rotayı aç',
  },
  {
    step: '04',
    eyebrow: 'Ana dönem',
    title: 'Menopoz',
    excerpt:
      'Bu dönemde sık görülen belirtileri tanımak ve gündelik hayatı biraz kolaylaştırmak için sade bir rehber.',
    href: '/hormonal-gecis/menopoz/',
    imageKey: '/hormonal-gecis/menopoz/',
    ctaLabel: 'Rotayı aç',
  },
];
