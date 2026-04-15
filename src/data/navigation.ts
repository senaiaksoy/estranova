/**
 * Ana navigasyon + IA dokümanıyla uyumlu alt yollar (docs/IA_ALT_MENU_VE_MAKALE_ONERILERI.md).
 * href'ler mevcut sayfa yapısıyla eşleşir.
 */

export interface NavChildLink {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  label: string;
  /** Alt menü; yoksa düz bağlantı */
  children?: NavChildLink[];
}

export const mainNav: NavLink[] = [
  { name: 'Anasayfa', href: '/', label: 'Ana sayfaya dön' },
  {
    name: 'Hormonal Geçiş',
    href: '/hormonal-gecis',
    label: 'Hormonal geçiş rehberi',
    children: [
      { name: 'Perimenopoz', href: '/hormonal-gecis/perimenopoz' },
      { name: 'Menopoza hazırlık', href: '/hormonal-gecis/menopoza-hazirlik' },
      { name: 'Menopoz', href: '/hormonal-gecis/menopoz' },
      { name: '40 sonrası', href: '/hormonal-gecis/40-sonrasi' },
    ],
  },
  {
    name: 'Zamansız Yaşam',
    href: '/zamansiz-yasam',
    label: 'Zamansız yaşam içerikleri',
    children: [
      { name: 'Vitaminler', href: '/zamansiz-yasam/vitaminler' },
      { name: 'Deneysel yaklaşımlar', href: '/zamansiz-yasam/deneysel' },
      { name: 'Beslenme ve yaşlanma', href: '/zamansiz-yasam/beslenme-yaslanma' },
      { name: 'Hareket ve sağlık', href: '/zamansiz-yasam/hareket-saglik-menopoz' },
      { name: 'Non-invaziv', href: '/zamansiz-yasam/non-invaziv' },
    ],
  },
  {
    name: 'Beden & Yakınlık',
    href: '/beden-yakinlik',
    label: 'Beden ve yakınlık',
    children: [
      { name: 'Kategori ana sayfa', href: '/beden-yakinlik' },
      { name: 'Menopozda cilt değişimleri', href: '/beden-yakinlik/menopozda-cilt-degisimleri' },
      { name: 'Vajinal sağlık', href: '/beden-yakinlik/vajinal-saglik-menopoz' },
      { name: 'Yakınlık ve ağrı', href: '/beden-yakinlik/yakinlik-agrisi-menopoz' },
    ],
  },
  {
    name: 'Zihin & Denge',
    href: '/zihin-denge',
    label: 'Zihin ve denge',
    children: [
      { name: 'Kategori ana sayfa', href: '/zihin-denge' },
      { name: 'Uyku', href: '/zihin-denge/uyku-bozuklugu-menopoz' },
      { name: 'Ruh hali', href: '/zihin-denge/ruh-hali-degisimleri-menopoz' },
      { name: 'Bellek ve odak', href: '/zihin-denge/bellek-odaklanma-menopoz' },
      { name: 'Stres yönetimi', href: '/zihin-denge/stres-yonetimi-menopoz' },
    ],
  },
  {
    name: 'Bilimsel Pencere',
    href: '/bilimsel-pencere',
    label: 'Bilimsel pencere',
    children: [
      { name: 'Kategori ana sayfa', href: '/bilimsel-pencere' },
      { name: 'Östrojen ve biyoloji', href: '/bilimsel-pencere/estrogen-biyolojisi-saglik' },
      { name: 'NAD+ ve hücresel yaşlanma', href: '/bilimsel-pencere/nad-plus-hucresel-yaslanma' },
    ],
  },
  { name: 'Hakkımızda', href: '/hakkimizda', label: 'Platform hakkında' },
  { name: 'Yayın Kurulu', href: '/yayin-kurulu', label: 'Editoryal ekip ve danışmanlar' },
];

/** Üst veya alt yol eşleşmesi için aktif durumu */
export function isNavActive(currentPath: string, item: NavLink): boolean {
  if (!item.children) {
    return item.href === '/' ? currentPath === '/' : currentPath === item.href;
  }
  if (item.href === '/') return currentPath === '/';
  return currentPath === item.href || currentPath.startsWith(`${item.href}/`);
}
