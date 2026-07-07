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
    'Döneminizi kabaca biliyorsanız bu dört kapıdan başlayın. Emin değilseniz bir alttaki belirti atlası daha iyi bir giriş sunar.',
  transitionNote:
    'Belirti daha baskın görünüyorsa bir sonraki atlas daha doğru başlangıç olabilir.',
};

export const homeJourneyItems: HomeJourneyItem[] = [
  {
    step: '01',
    eyebrow: 'Koruyucu yaklaşım',
    title: '40 Sonrası Sağlık',
    excerpt:
      'Kemik, kas, uyku ve tarama başlıklarını tek dosyada okuyun; amaç görev listesi değil, sakin bir sağlık hattı.',
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
      'Adet düzeni değişmeye başladığında vücudunuzun neyi sessizce anlattığını birlikte okumak için sakin bir başlangıç rehberi.',
    href: '/hormonal-gecis/perimenopoz/',
    imageKey: '/hormonal-gecis/perimenopoz/',
    ctaLabel: 'Rotayı aç',
  },
  {
    step: '03',
    eyebrow: 'Geçişi anlamak',
    title: 'Menopoza Hazırlık',
    excerpt:
      'Geçişe adım adım ısınırken günlük düzeninizi, takibinizi ve koruyucu alışkanlıklarınızı sabırla kurabilirsiniz.',
    href: '/hormonal-gecis/menopoza-hazirlik/',
    imageKey: '/hormonal-gecis/menopoza-hazirlik/',
    ctaLabel: 'Rotayı aç',
  },
  {
    step: '04',
    eyebrow: 'Ana dönem',
    title: 'Menopoz',
    excerpt:
      'Sık karşılaştığımız belirtileri tanımanız ve günlük yaşamınızı biraz daha yumuşatmanız için sade bir rehber.',
    href: '/hormonal-gecis/menopoz/',
    imageKey: '/hormonal-gecis/menopoz/',
    ctaLabel: 'Rotayı aç',
  },
];
