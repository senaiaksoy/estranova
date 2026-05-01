/**
 * Ana navigasyon — tek mimari kuralı (tutarlılık için zorunlu):
 *
 *   Tüm hub'lar TİP A — alt-hub kategorileri.
 *   Alt menüde YALNIZ alt-hub sayfaları olur. Doğrudan makale linki yok.
 *   Önce alt-hub'a inilir; çerçeveleyici metin okunur, sonra makaleye geçilir.
 *   Bu mimari okuyucu dostu çerçeveleme için seçilmiştir.
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
      { name: 'Ameliyatsız', href: '/zamansiz-yasam/non-invaziv' },
    ],
  },
  {
    name: 'Beden & Yakınlık',
    href: '/beden-yakinlik',
    label: 'Beden ve yakınlık',
    children: [
      { name: 'Cilt & Görünüm', href: '/beden-yakinlik/cilt-gorunum' },
      { name: 'Cinsel Sağlık', href: '/beden-yakinlik/cinsel-saglik' },
      { name: 'Pelvik Taban', href: '/beden-yakinlik/pelvik-taban' },
    ],
  },
  {
    name: 'Zihin & Denge',
    href: '/zihin-denge',
    label: 'Zihin ve denge',
    children: [
      { name: 'Uyku & Dinlenme', href: '/zihin-denge/uyku-dinlenme' },
      { name: 'Duygusal Denge', href: '/zihin-denge/duygusal-denge' },
      { name: 'Bilişsel Sağlık', href: '/zihin-denge/bilissel-saglik' },
    ],
  },
  {
    name: 'Bilimsel Pencere',
    href: '/bilimsel-pencere',
    label: 'Bilimsel pencere',
    children: [
      { name: 'Hormonların Bilimi', href: '/bilimsel-pencere/hormonlarin-bilimi' },
      { name: 'Hücreler ve Yaşlanma', href: '/bilimsel-pencere/hucreler-ve-yaslanma' },
      { name: 'Yeni Araştırmalar', href: '/bilimsel-pencere/yeni-arastirmalar' },
    ],
  },
  { name: 'Sayılar', href: '/sayi', label: 'Eşik dergisi sayıları ve arşivi' },
  { name: 'Hakkımızda', href: '/hakkimizda', label: 'Platform hakkında' },
  { name: 'Künye', href: '/yayin-kurulu', label: 'Editöryal ekip, yazarlar ve tıbbi danışmanlar' },
];

/** Üst veya alt yol eşleşmesi için aktif durumu */
export function isNavActive(currentPath: string, item: NavLink): boolean {
  if (!item.children) {
    return item.href === '/' ? currentPath === '/' : currentPath === item.href;
  }
  if (item.href === '/') return currentPath === '/';
  return currentPath === item.href || currentPath.startsWith(`${item.href}/`);
}
