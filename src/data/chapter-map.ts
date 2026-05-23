/**
 * Estranova alt-hub'larını tek bir editöryel monografın bölümleri olarak
 * sıralayan harita. Her alt-hub'ın bölüm numarası, ait olduğu hub adı ve
 * "bir sonraki bölüm" referansı buradan gelir.
 *
 * Onaylı alt-hub bölüm sırası:
 *   01–04  Hormonal Geçiş
 *   04–06  Zamansız Yaşam        (chapter numarası 01–03 hub içinde)
 *   07–09  Beden & Yakınlık      (01–03)
 *   10–12  Zihin & Denge         (01–03)
 *   13–15  Bilimsel Pencere      (01–03)
 *
 * `number` her hub içinde 01'den başlar (kullanıcıya hub içi sıra
 * mantıklı geliyor). `next` global gezinme sırasıyla diğer hub'a geçer.
 */

export interface ChapterEntry {
  number: string;
  parent: string;
  chapter: string;
  href: string;
  next?: string;
}

export const chapterMap: Record<string, ChapterEntry> = {
  // Hormonal Geçiş
  '/hormonal-gecis/perimenopoz/': {
    number: '01',
    parent: 'Hormonal Geçiş',
    chapter: 'Perimenopoz',
    href: '/hormonal-gecis/perimenopoz/',
    next: '/hormonal-gecis/menopoza-hazirlik/',
  },
  '/hormonal-gecis/menopoza-hazirlik/': {
    number: '02',
    parent: 'Hormonal Geçiş',
    chapter: 'Menopoza Hazırlık',
    href: '/hormonal-gecis/menopoza-hazirlik/',
    next: '/hormonal-gecis/menopoz/',
  },
  '/hormonal-gecis/menopoz/': {
    number: '03',
    parent: 'Hormonal Geçiş',
    chapter: 'Menopoz',
    href: '/hormonal-gecis/menopoz/',
    next: '/hormonal-gecis/40-sonrasi/',
  },
  '/hormonal-gecis/40-sonrasi/': {
    number: '04',
    parent: 'Hormonal Geçiş',
    chapter: '40 Sonrası Sağlık',
    href: '/hormonal-gecis/40-sonrasi/',
    next: '/zamansiz-yasam/vitaminler/',
  },
  // Zamansız Yaşam
  '/zamansiz-yasam/vitaminler/': {
    number: '01',
    parent: 'Zamansız Yaşam',
    chapter: 'Vitaminler',
    href: '/zamansiz-yasam/vitaminler/',
    next: '/zamansiz-yasam/deneysel/',
  },
  '/zamansiz-yasam/deneysel/': {
    number: '02',
    parent: 'Zamansız Yaşam',
    chapter: 'Deneysel Yaklaşımlar',
    href: '/zamansiz-yasam/deneysel/',
    next: '/zamansiz-yasam/non-invaziv/',
  },
  '/zamansiz-yasam/non-invaziv/': {
    number: '03',
    parent: 'Zamansız Yaşam',
    chapter: 'Ameliyatsız Uygulamalar',
    href: '/zamansiz-yasam/non-invaziv/',
    next: '/beden-yakinlik/cilt-gorunum/',
  },
  // Beden & Yakınlık
  '/beden-yakinlik/cilt-gorunum/': {
    number: '01',
    parent: 'Beden & Yakınlık',
    chapter: 'Cilt & Görünüm',
    href: '/beden-yakinlik/cilt-gorunum/',
    next: '/beden-yakinlik/cinsel-saglik/',
  },
  '/beden-yakinlik/cinsel-saglik/': {
    number: '02',
    parent: 'Beden & Yakınlık',
    chapter: 'Cinsel Sağlık',
    href: '/beden-yakinlik/cinsel-saglik/',
    next: '/beden-yakinlik/pelvik-taban/',
  },
  '/beden-yakinlik/pelvik-taban/': {
    number: '03',
    parent: 'Beden & Yakınlık',
    chapter: 'Pelvik Taban',
    href: '/beden-yakinlik/pelvik-taban/',
    next: '/zihin-denge/uyku-dinlenme/',
  },
  // Zihin & Denge
  '/zihin-denge/uyku-dinlenme/': {
    number: '01',
    parent: 'Zihin & Denge',
    chapter: 'Uyku & Dinlenme',
    href: '/zihin-denge/uyku-dinlenme/',
    next: '/zihin-denge/duygusal-denge/',
  },
  '/zihin-denge/duygusal-denge/': {
    number: '02',
    parent: 'Zihin & Denge',
    chapter: 'Duygusal Denge',
    href: '/zihin-denge/duygusal-denge/',
    next: '/zihin-denge/bilissel-saglik/',
  },
  '/zihin-denge/bilissel-saglik/': {
    number: '03',
    parent: 'Zihin & Denge',
    chapter: 'Bilişsel Sağlık',
    href: '/zihin-denge/bilissel-saglik/',
    next: '/bilimsel-pencere/hormonlarin-bilimi/',
  },
  // Bilimsel Pencere
  '/bilimsel-pencere/hormonlarin-bilimi/': {
    number: '01',
    parent: 'Bilimsel Pencere',
    chapter: 'Hormonların Bilimi',
    href: '/bilimsel-pencere/hormonlarin-bilimi/',
    next: '/bilimsel-pencere/hucreler-ve-yaslanma/',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/': {
    number: '02',
    parent: 'Bilimsel Pencere',
    chapter: 'Hücreler ve Yaşlanma',
    href: '/bilimsel-pencere/hucreler-ve-yaslanma/',
    next: '/bilimsel-pencere/yeni-arastirmalar/',
  },
  '/bilimsel-pencere/yeni-arastirmalar/': {
    number: '03',
    parent: 'Bilimsel Pencere',
    chapter: 'Yeni Araştırmalar',
    href: '/bilimsel-pencere/yeni-arastirmalar/',
    // Son bölüm — döngüyü hub girişine kapatır
    next: '/hormonal-gecis/',
  },
};

export function getChapter(path: string): ChapterEntry | undefined {
  return chapterMap[path];
}

export function getNextChapter(path: string): ChapterEntry | undefined {
  const current = chapterMap[path];
  if (!current?.next) return undefined;
  return chapterMap[current.next];
}
