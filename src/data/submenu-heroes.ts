/**
 * Alt menü hedef sayfaları için hero görselleri (Unsplash, editoryal ton).
 * Alt metinler bilgilendirici; stok fotoğraflar gerçek kişileri temsil etmeyebilir.
 */

export interface SubmenuHeroImage {
  src: string;
  alt: string;
}

/** Ana sayfa kahraman görseli (editoryal, sakin ton). */
export const homePageHero: SubmenuHeroImage = {
  src: '/images/hero/home-hero.webp',
  alt: 'Pencere ışığında sakin bir sabah: elinde kitapla dalgın bakışlı orta yaş kadın; editöryal iç mekân',
};

export const submenuHeroByRoute: Record<string, SubmenuHeroImage> = {
  '/hormonal-gecis': {
    src: '/images/heroes/hormonal-gecis.webp',
    alt: 'Hormonal geçiş döneminde sakin ve güvenilir bilgi teması; editöryal iç mekânda orta yaş kadın',
  },
  '/hormonal-gecis/perimenopoz': {
    src: '/images/library/editorial/journey-perimenopoz.webp',
    alt: 'Sabah ışığında not defterine düşüncelerini yazan 40+ kadın; erken farkındalık ve kendini dinleme teması',
  },
  '/hormonal-gecis/menopoza-hazirlik': {
    src: '/images/library/editorial/journey-menopoza-hazirlik.webp',
    alt: 'Kitaplık önünde elinde kitapla sakin duruşlu kadın; planlama ve hazırlık dönemi teması',
  },
  '/hormonal-gecis/menopoz': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'Doğal pencere ışığında gri saçlı kadın portresi; sakin ve kendinden emin bakış',
  },
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi': {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Sağlık profesyoneli ile sakin görüşme ortamı; bilgilendirilmiş karar ve birlikte değerlendirme teması',
  },
  '/hormonal-gecis/40-sonrasi': {
    src: '/images/library/editorial/journey-40-sonrasi.webp',
    alt: 'Sonbahar ormanında sakin yürüyen kadın; uzun vadeli sağlık ve hareket teması',
  },
  '/hormonal-gecis/40-sonrasi/tarama-testleri': {
    src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Sağlık profesyoneli ile sakin görüşme ortamı; koruyucu sağlık teması',
  },
  '/zamansiz-yasam': {
    src: '/images/heroes/zamansiz-yasam.webp',
    alt: 'Ege kıyısında altın saat ışığında kitap okuyan olgun kadın; zamansız yaşam ve dinginlik teması',
  },
  '/zamansiz-yasam/vitaminler': {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6a1baa6a?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Renkli taze sebzeler; beslenme ve vitamin kaynakları teması',
  },
  '/zamansiz-yasam/deneysel': {
    src: 'https://images.unsplash.com/photo-1532094349884-543bc4b61249?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Laboratuvar ortamında bilimsel araştırma; deneysel yaklaşımlar teması',
  },
  '/zamansiz-yasam/beslenme-yaslanma': {
    src: 'https://images.unsplash.com/photo-1490818356740-c47b7c5f4c1b?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Sağlıklı kahvalı tabağı; beslenme ve yaşlanma teması',
  },
  '/zamansiz-yasam/hareket-saglik-menopoz': {
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9b69b?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Egzersiz minderinde esneme; hareket ve kas sağlığı teması',
  },
  '/zamansiz-yasam/non-invaziv': {
    src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Sakin spa ve bakım ortamı; invaziv olmayan uygulamalar teması',
  },
  '/beden-yakinlik': {
    src: '/images/heroes/beden-yakinlik.webp',
    alt: 'Pencere ışığında kendi omzuna nazikçe dokunan 40+ kadın; bedenle bağlantı ve öz-şefkat teması',
  },
  '/beden-yakinlik/menopozda-cilt-degisimleri': {
    src: 'https://images.unsplash.com/photo-1556228578-8c409e429251?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Cilt bakım ürünleri ve doğal ışık; cilt sağlığı teması',
  },
  '/beden-yakinlik/vajinal-saglik-menopoz': {
    src: 'https://images.unsplash.com/photo-1490750969638-12578b25a3da?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Yumuşak ışıkta çiçekler; kadın sağlığı ve konfor teması',
  },
  '/beden-yakinlik/yakinlik-agrisi-menopoz': {
    src: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Çift yan yana oturuyor; iletişim ve yakınlık teması',
  },
  '/beden-yakinlik/menopozda-idrar-kacirma-pelvik-taban': {
    src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Yoga matı üzerinde sakin nefes alan kadın; pelvik taban farkındalığı ve beden bağı teması',
  },
  '/hormonal-gecis/menopoz/menopozda-kemik-erimesi-onleme-ve-egzersiz': {
    src: 'https://images.unsplash.com/photo-1518310383802-640c2de933d2?auto=format&fit=crop&q=80&w=1800&h=1000',
    alt: 'Direnç bandıyla egzersiz yapan kadın; kemik gücü ve hareket teması',
  },
  '/zihin-denge': {
    src: '/images/heroes/zihin-denge.webp',
    alt: 'Zihinsel dinginlik ve öz-düzenleme teması — sakin editöryal ortam',
  },
  '/zihin-denge/uyku-bozuklugu-menopoz': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturmuş pencereye bakan kadın; uyku ve dinlenme teması',
  },
  '/zihin-denge/ruh-hali-degisimleri-menopoz': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Pencere önünde sakin bir sabah, elinde kitapla dalgın bakışlı kadın; ruh hali ve iç gözlem teması',
  },
  '/zihin-denge/bellek-odaklanma-menopoz': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Çalışma masasında kitap okuyan kadın; kitaplık ve sabah ışığı — bellek ve odaklanma teması',
  },
  '/zihin-denge/stres-yonetimi-menopoz': {
    src: '/images/library/editorial/zd-stres-yonetimi.webp',
    alt: 'Bahçede taş oturağında sakin bir an, gözleri kapalı kadın; stres azaltma ve dinginlik teması',
  },
  '/bilimsel-pencere': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Sıcak akademik çalışma odasında bilimsel kitap üzerine eğilmiş kadın; bilimsel inceleme teması',
  },
  '/bilimsel-pencere/estrogen-biyolojisi-saglik': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Mermer masada botanik doğa öğeleri ve pencere ışığında düşünceli kadın; hormon biyolojisinin doğal çerçevesi',
  },
  '/bilimsel-pencere/nad-plus-hucresel-yaslanma': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'Altın saat pencere ışığında iç mekan yeşilliği önünde kadın portresi; hücresel yaşlanma ve uzun vadeli sağlık teması',
  },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return pathname;
  return pathname.replace(/\/$/, '') || '/';
}

export function getSubmenuHeroImage(pathname: string): SubmenuHeroImage | undefined {
  const p = normalizePathname(pathname);
  return submenuHeroByRoute[p];
}
