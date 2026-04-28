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
  /** Ana başlık — Newsreader serif */
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
    lede: 'Perimenopozun en sessiz belirtisi belki de uyku. Bu ay beş yazı, uykunun neden değiştiğini ve geri kazanılabilen yanlarını yan yana koyuyor.',
    curatorSlug: 'isik-selin-kuyumcu',
    editorNote:
      'Bir gece bir saat erken yatıyoruz, ertesi sabah daha yorgun kalkıyoruz. Saat üçte gözümüzü açıyoruz, sonra uyumayı beceremiyoruz. Bu dosyayı hazırlarken hep aynı cümleyi duydum: "Eskiden böyle değildi." Doğru — eskiden değildi. Şimdi başka bir şey oluyor; ama panik yapmadan, adım adım bakılabilir bir şey.\n\nBeş yazı boyunca uykuyu farklı kapılardan açıyoruz: bedenin kimyası, akşamın ritmi, yıllar içinde değişen kişisel deneyim, mahrem yan ve bilimin sınırı. Hiçbiri tek başına çözüm değil; ama beş tanesi yan yana getirildiğinde bir gece bir adımı denemek kolaylaşıyor.',
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
        href: '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan',
        readingMinutes: 8,
      },
      {
        title: 'Akşam hareketinin uykuya etkisi: melatonin ve serin vücut',
        excerpt:
          'Çoğu zaman "akşam yürüyüşü uyku getirir" deriz, oysa zamanlama ve şiddet birlikte düşünülmediğinde tam tersi çalışıyor. Sporcu beden okumasıyla gece-gündüz dengesi.',
        writerSlug: 'alara-baykent',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin',
        readingMinutes: 7,
      },
      {
        title: 'Sabah üçte uyanmak: dokuz yılın notları',
        excerpt:
          'HRT öncesinde ve sonrasında ne değişti, ne aynı kaldı? Üç farklı dönemden samimi bir kişisel okuma — kanaat değil, gözlem.',
        writerSlug: 'basak-pelister',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/sabah-ucte-uyanmak-dokuz-yil',
        readingMinutes: 9,
      },
      {
        title: 'Gece terlemesi ve uyku: utançsız bakış',
        excerpt:
          'Konuşulması zor ama herkesin yaşadığı bir an: gece yarısı uyanma, çarşafı değiştirme, sessizce yeniden uyumayı deneme. Mahrem yan, jargonsuz.',
        writerSlug: 'senai-aksoy',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz',
        readingMinutes: 6,
      },
      {
        title: 'Uyku biliminin sınırı: ne biliniyor, ne bilinmiyor',
        excerpt:
          'Uyku takip cihazları ne ölçer, ne ölçmez? Hangi araştırma sonuçlarına güvenebiliriz, hangi iddialar henüz erken? Kanıt gücü disipliniyle sade bir harita.',
        writerSlug: 'rima-erdemir',
        status: 'published',
        href: '/zihin-denge/uyku-dinlenme/uyku-biliminin-siniri',
        readingMinutes: 8,
      },
    ],
    status: 'current',
  },
];

export const currentDossier: MonthlyDossier =
  dossiers.find((d) => d.status === 'current') ?? dossiers[0];

export function getDossierBySlug(slug: string): MonthlyDossier | undefined {
  return dossiers.find((d) => d.slug === slug);
}

export function getArchivedDossiers(): MonthlyDossier[] {
  return dossiers
    .filter((d) => d.status === 'archived')
    .sort((a, b) => b.monthYearISO.localeCompare(a.monthYearISO));
}

export function getTotalReadingMinutes(dossier: MonthlyDossier): number {
  return dossier.articles.reduce((sum, a) => sum + (a.readingMinutes ?? 0), 0);
}
