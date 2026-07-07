/**
 * "Bu Ayın Dosyası" — aylık tematik dosya manifest'i.
 *
 * Estranova editöryal yapısında her ay bir tema etrafında 4-6 yazılık küme
 * yayımlanıyor. Bir küratör (yazar) dosyayı tutuyor; yan yazılar farklı
 * yazarlardan gelir. Yan yazılar henüz yayımlanmamışsa `status: 'planned'`
 * ile işaretlenir; yayına girince `status: 'published'` + `href` doldurulur.
 *
 * Tek bir kalıcı manifest: anasayfada `currentDossier`, arşivde tüm dizi.
 */

import type { SubmenuHeroImage } from './submenu-heroes';

export type DossierArticleStatus = 'published' | 'planned';

export interface DossierArticle {
  title: string;
  excerpt: string;
  /** writers.ts slug'ı — küratör + yazar lookup için */
  writerSlug: string;
  status: DossierArticleStatus;
  /** Yayınlanmış makale URL'i; planned ise undefined */
  href?: string;
  /** Tahmini okuma süresi (dakika) — planned'da kabaca tahmin */
  readingMinutes?: number;
}

export interface MonthlyDossier {
  /** URL slug — `/dosya/{slug}` */
  slug: string;
  /** Türkçe ay-yıl, kart üzerinde görünür: "Mayıs 2026" */
  monthYear: string;
  /** ISO ay: "2026-05" — sıralama için */
  monthYearISO: string;
  /** Üst kicker etiket — "MAYIS 2026 · DOSYA" */
  kicker: string;
  /** Ana başlık */
  title: string;
  /** Alt başlık / kicker tamamlayıcı, opsiyonel */
  subtitle?: string;
  /** İtalik lede, 1-2 cümle */
  lede: string;
  /** writers.ts slug'ı */
  curatorSlug: string;
  /** Küratörün dosya açılış mektubu — 1-2 paragraf */
  editorNote: string;
  /** Dosya kapak görseli */
  heroImage: SubmenuHeroImage;
  /** Yan yazılar — 4-6 arası */
  articles: DossierArticle[];
  /** Yayın durumu — current dosya site'da öne çıkar */
  status: 'current' | 'archived' | 'upcoming';
}

export const dossiers: MonthlyDossier[] = [
  {
    slug: '2026-05-uyuyamadigimiz-geceler',
    monthYear: 'Mayıs 2026',
    monthYearISO: '2026-05',
    kicker: 'MAYIS 2026 · DOSYA',
    title: 'Uyuyamadığımız Geceler',
    subtitle: 'Perimenopozda uykunun değişen yanı',
    lede: 'Perimenopozun en sessiz belirtisi belki de uyku. Bu ay üç yazı, uykunun neden değiştiğini, gece terlemesinin mahrem yanını ve akşam hareketinin toparlayıcı gücünü yan yana koyuyor.',
    curatorSlug: 'isik-selin-gunce',
    editorNote:
  'Bir gece bir saat erken yatıyoruz, ertesi sabah daha yorgun kalkıyoruz. Saat üçte gözümüzü açıyoruz, sonra uyumayı beceremiyoruz. Bu dosyayı hazırlarken hep aynı cümleyi duydum: "Eskiden böyle değildi." Doğru — eskiden değildi. Şimdi başka bir şey oluyor; ama panik yapmadan, adım adım bakılabilir bir şey.\n\nÜç yazı boyunca uykuyu üç kapıdan açıyoruz: Berna Aksoy hormonal zemini ve uyku mimarisini kuruyor; Doç. Dr. Senai Aksoy gece terlemesinin mahrem ama konuşulabilir yanını açıyor; Alara Baykent akşam hareketini performans baskısı değil, geceye geçiş ritüeli olarak okuyor. Hiçbiri tek başına çözüm değil; ama yan yana geldiklerinde bir gece bir adımı denemek kolaylaşıyor.',
    heroImage: {
      src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
      alt: 'Şafak ışığında yatak kenarında oturmuş pencereye bakan kadın; uyku, perimenopoz ve dinlenme teması',
    },
    articles: [
      {
        title: 'Perimenopozda uykunun gerçekten değişen yanı',
        excerpt:
          'Genel resim: hangi hormonal dalga uykunun hangi evresine dokunuyor, ve hangi değişimler "geçici", hangileri kalıcı bir düzen kuruyor.',
        writerSlug: 'berna-aksoy',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/',
        readingMinutes: 8,
      },
      {
        title: 'Gece terlemesi ve uyku: utançsız bakış',
        excerpt:
          'Konuşulması zor ama herkesin yaşadığı bir an: gece yarısı uyanma, çarşafı değiştirme, sessizce yeniden uyumayı deneme. Mahrem yan, jargonsuz.',
        writerSlug: 'senai-aksoy',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/',
        readingMinutes: 6,
      },
      {
        title: 'Akşam hareketi uykuyu bozar mı, toparlar mı?',
        excerpt:
          'Sporcu beden okumasıyla akşam egzersizi, melatonin ve beden ısısı ilişkisi: performans baskısı değil, geceye geçiş ritüeli.',
        writerSlug: 'alara-baykent',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin/',
        readingMinutes: 7,
      },
      ],
    status: 'archived',
  },
  {
    slug: '2026-06-guc-esigi',
    monthYear: 'Haziran 2026',
    monthYearISO: '2026-06',
    kicker: 'HAZIRAN 2026 · DOSYA',
    title: 'Güç Eşiği',
    subtitle: "40'tan sonra bedeni yeniden zorlamadan kurmak",
    lede:
      "40'tan sonra güç, daha fazla zorlanmak değil; kası, kemiği, dengeyi, uykuyu ve enerjiyi aynı hayatın içinde yeniden duymak. Bu ay altı yazı, bedeni performans baskısı kurmadan okumaya çağırıyor.",
    curatorSlug: 'anil-yalmaz',
    editorNote:
      "Güç kelimesi bazen sert gelir: daha çok çalışmak, daha çok sıkmak, daha çok dayanmak. Oysa 40'tan sonra iyi soru çoğu zaman bu değil. İyi soru şu: hangi kas günlük hayatı daha rahat taşır, hangi eklem sessizce yardım ister, hangi kemik kaybı henüz görünmeden konuşulmalı, hangi yorgunluk yalnızca tembellik sanılmamalı?\n\nBu dosyada gücü tek bir egzersiz başlığına sıkıştırmıyoruz. Anıl Yalmaz hareketin başlangıç haritasını kuruyor; Prof. Dr. Bülent Aksoy kemiği ve kırık riskini daha erken konuşmaya çağırıyor; Fzt. Ersin Saraç dengeyi ayak-kalça-gövde hattında okuyor; Dr. Metin Alış yorgunluğu tiroid, metabolizma ve kas ekseninde ayırıyor; Alara Baykent yaz başlarken bedeni uyandırmayı performans değil devamlılık olarak ele alıyor; Başak Pelister ise gücü çanta, merdiven, anne-kız sohbeti ve kendi küçük itiraflarıyla daha kişisel bir yerden okuyor.",
    heroImage: {
      src: '/images/library/editorial/zy-hareket-saglik.webp',
      alt: "40 sonrası hareket ve güçlenme temasını taşıyan sakin editoryal sahne; bedeni zorlamadan yeniden kurma hissi",
    },
    articles: [
      {
        title: "40'tan Sonra Harekete Yeniden Başlamak: Daha Sert Değil, Daha Akıllı",
        excerpt:
          'Uzun aradan sonra bedeni korkutmadan yeniden hareket ettirmek: güç, denge, hareket açıklığı ve nefes aynı başlangıçta buluşuyor.',
        writerSlug: 'anil-yalmaz',
        status: 'published',
        href: '/zamansiz-yasam/40-sonrasi-harekete-yeniden-baslamak/',
        readingMinutes: 8,
      },
      {
        title: 'Kemik Gücü: Kırığı Beklemeden Sorulacak Sorular',
        excerpt:
          'Kemik sağlığı bir rapor satırından ibaret değil; düşme riski, aile öyküsü, D vitamini, direnç egzersizi ve izlem ritmi de konuşmaya katılıyor.',
        writerSlug: 'bulent-aksoy',
        status: 'published',
        href: '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/',
        readingMinutes: 7,
      },
      {
        title: 'Denge Kaybolmadan: Ayak, Kalça ve Gövde Hattını Yeniden Duymak',
        excerpt:
          'Denge çoğu zaman bir düşme yaşanmadan önce konuşulmaz. Oysa ayak tabanı, kalça çevresi ve gövde hattı 40 sonrası hareket güveninin temelini kurar.',
        writerSlug: 'ersin-sarac',
        status: 'published',
        href: '/zamansiz-yasam/denge-kaybolmadan-ayak-kalca-govde/',
        readingMinutes: 7,
      },
      {
        title: 'Yorgunluk Kas mı, Tiroid mi, Metabolizma mı?',
        excerpt:
          'Sabah ağır gelen beden her zaman tek bir nedene bağlanmaz. Tiroid, kas kütlesi, uyku ve metabolik değişim yan yana okunur.',
        writerSlug: 'metin-alis',
        status: 'published',
        href: '/hormonal-gecis/40-sonrasi/yorgunluk-kas-tiroid-metabolizma/',
        readingMinutes: 8,
      },
      {
        title: 'Yaz Başlamadan Bedeni Uyandırmak: Performans Değil Devamlılık',
        excerpt:
          'Mevsim değişirken hareketi hedef baskısı gibi değil, bedene yeniden ritim kazandıran sürdürülebilir bir hazırlık gibi düşünmek.',
        writerSlug: 'alara-baykent',
        status: 'published',
        href: '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/',
        readingMinutes: 6,
      },
      {
        title: 'Güç Dediğiniz Şey Bazen Çantayı Daha Hafif Hazırlamaktır',
        excerpt:
          'Başak Pelister, dokuz yıllık menopoz deneyiminden sonra güç fikrini spor cümlelerinden değil; çanta, merdiven ve anne-kız sohbeti içinden yeniden okuyor.',
        writerSlug: 'basak-pelister',
        status: 'published',
        href: '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/',
        readingMinutes: 6,
      },
    ],
    status: 'current',
  },
];

function currentMonthInTurkeyISO(date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
  }).format(date);
}

export function isDossierReleased(dossier: MonthlyDossier, date = new Date()): boolean {
  return dossier.monthYearISO <= currentMonthInTurkeyISO(date);
}

export const releasedDossiers: MonthlyDossier[] = dossiers.filter((dossier) =>
  isDossierReleased(dossier),
);

export const currentDossier: MonthlyDossier =
  releasedDossiers
    .filter((d) => d.status !== 'archived' && d.monthYearISO <= currentMonthInTurkeyISO())
    .sort((a, b) => b.monthYearISO.localeCompare(a.monthYearISO))[0] ??
  dossiers.find((d) => d.status === 'current') ??
  dossiers[0];

export function getDossierBySlug(slug: string): MonthlyDossier | undefined {
  return dossiers.find((d) => d.slug === slug);
}

export function getArchivedDossiers(): MonthlyDossier[] {
  return releasedDossiers
    .filter((d) => d.status === 'archived')
    .sort((a, b) => b.monthYearISO.localeCompare(a.monthYearISO));
}

export function getTotalReadingMinutes(dossier: MonthlyDossier): number {
  return dossier.articles.reduce((sum, a) => sum + (a.readingMinutes ?? 0), 0);
}
