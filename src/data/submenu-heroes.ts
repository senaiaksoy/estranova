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
  '/manifesto': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada birleşmiş eller ve açık not defteri; ortak masa, sessiz konuşma ve paylaşılmış deneyim teması',
  },
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
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'Akşam saatlerinde sakin bir iç mekânda elinde ince bir şal tutan 50+ kadın; ısı dalgalanmalarıyla baş etme ve konfor arayışı teması',
  },
  '/hormonal-gecis/menopoz/b12-vitamini-ve-menopoz': {
    src: '/images/library/editorial/hg-b12-vitamini-menopoz.webp',
    alt: 'Sabah ışığında ahşap mutfak masasında elinde sade yoğurt kâsesi tutan 50 yaş kadın, masada doğal B12 kaynakları (yumurta, koyu yeşil yapraklı sebze, tam tahıllı ekmek), bordo keten kaçak; sessiz farkındalık ve bedeni dinleme teması',
  },
  '/hormonal-gecis/menopoz/hrt-ilk-alti-ay': {
    src: '/images/library/editorial/hg-hrt-ilk-alti-ay.webp',
    alt: 'Sabah ışığında ahşap mutfak tezgahı önünde elinde sade çay fincanı tutan 58 yaş kadın, cream keten gömlek, içe dönük dingin bakış; küçük tabakta zarif amber kutu, cam vazoda Japon esinli taze çiçek, bordo keten kaçak; HRT yolculuğunda altıncı ay ve "ma" aralığı teması',
  },
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: '46 yaş kadın portresi: çene altında kenetlenmiş eller, cream keten gömlek, arka planda yumuşak bordo vazo bokeh; sakin dikkat ve kendi bedenini izleme teması — HRT ilk aylarında izleme defteri çerçevesi.',
  },
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz': {
    src: '/images/library/editorial/by-libido-degisimi.webp',
    alt: 'Geç ikindi ışığında sanat-dolu evinde sessiz bir okuma köşesinde oturan 51 yaş kadın, bordo ipek bluz, içe dönük dingin bakış pencereye yönelik; kucağında açık kitap, yan masada defter, dolma kalem, çay fincanı ve sade kuru çiçek düzeni; kendiyle yeniden tanışma teması',
  },
  '/bilimsel-pencere/yeni-arastirmalar/sosyal-medyada-menopoz-bilgisi': {
    src: '/images/library/editorial/scholar-portrait-direct-gaze.webp',
    alt: 'Pencere ışığında dümdüz bakan araştırmacı kadın portresi; bilgi okuryazarlığı ve eleştirel okuma teması',
  },
  '/hormonal-gecis/menopoz/hrt-yillar-sonra-baslamak': {
    src: '/images/library/editorial/portrait-burgundy-velvet.webp',
    alt: 'Bordo kadife arka planda olgun kadın portresi; uzun bir bekleyişin ardından yeni bir karara açılan iç sessizlik teması',
  },
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi': {
    src: '/images/library/editorial/hg-hormon-tedavisi-karar.webp',
    alt: 'Sakin sabah ışığında ahşap masada açık not defterine yazan 52 yaş kadın, çay fincanı ve bordo aksanlı iç mekân; bilgilendirilmiş karar ve iç tartışma teması',
  },
  '/hormonal-gecis/40-sonrasi': {
    src: '/images/library/editorial/journey-40-sonrasi.webp',
    alt: 'Sonbahar ormanında sakin yürüyen kadın; uzun vadeli sağlık ve hareket teması',
  },
  '/hormonal-gecis/40-sonrasi/saglik-kararlarinda-simdi-mi-sorusu': {
    src: '/images/library/editorial/portrait-silver-strands-window.webp',
    alt: 'Pencere kenarında düşünceli sessiz bir an; gri saçlı kadın portresi — sağlık kararları üzerine iç tartışma teması',
  },
  '/hormonal-gecis/40-sonrasi/tarama-testleri': {
    src: '/images/library/editorial/hg-tarama-testleri.webp',
    alt: 'Sabah ışığında ahşap masada açık takvim sayfası, çay fincanı, açık not defteri, cam vazoda pembe gül ve bordo ciltli ajanda; kişisel düzenli sağlık takibi teması',
  },
  '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada birleşmiş eller ve açık not defteri; sakin, planlı bir sağlık takip rutini teması',
  },
  '/zamansiz-yasam': {
    src: '/images/heroes/zamansiz-yasam.webp',
    alt: 'Ege kıyısında altın saat ışığında kitap okuyan olgun kadın; zamansız yaşam ve dinginlik teması',
  },
  '/zamansiz-yasam/vitaminler': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Ahşap tahta üzerinde sabah ışığında yumurtalar, portakal dilimleri, çiğ badem ve ceviz, etiketsiz zeytinyağı; vitamin kaynakları gerçek besinlerle temalandırılmış',
  },
  '/zamansiz-yasam/deneysel': {
    src: '/images/library/editorial/zy-deneysel.webp',
    alt: 'Akşam çalışma odasında açık ciltli kitap üzerine eğilmiş 50 yaş kadın, pirinç masa lambası sıcak ışık, ciltli kitap rafları bokeh; deneysel yaklaşımlara sakin bilimsel merakla yaklaşma teması',
  },
  '/zamansiz-yasam/beslenme-yaslanma': {
    src: '/images/library/editorial/still-life-eggs-oil-walnuts.webp',
    alt: 'Sabah ışığında krem keten üzerinde yumurtalar, ceviz, portakal dilimleri, maydanoz ve etiketsiz zeytinyağı; beslenme ve metabolik denge teması',
  },
  '/zamansiz-yasam/mevsimle-yemek-yemek': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Sabah ışığında ahşap kesim tahtası üzerinde yumurtalar, portakal dilimleri, çiğ badem ve ceviz, taze maydanoz ve etiketsiz zeytinyağı; mevsiminde Anadolu sofrası ve topraktan sofraya beslenme teması',
  },
  '/zamansiz-yasam/hareket-saglik-menopoz': {
    src: '/images/library/editorial/zy-hareket-saglik.webp',
    alt: 'Sabah park yolunda yürüyüş molasında kadın; arkadan editöryal kadraj, krem keten pantolon, sonbahar bordo yaprak ipucu; günlük hareket ritmi teması',
  },
  '/zamansiz-yasam/non-invaziv': {
    src: '/images/library/editorial/zy-non-invaziv.webp',
    alt: 'Ahşap masada keten örtü üzerinde cam sürahi, açık pembe çiçek, seramik kasede pürüzsüz taş ve katlı pamuklu havlu; bordo arka plan — pürüzsüzlük, yenilenme ve zaman metaforu',
  },
  '/zamansiz-yasam/non-invaziv/cilt-bakimi-non-invaziv-genel-cerceve': {
    src: '/images/library/editorial/mindful-self-attention-profile.webp',
    alt: 'Doğal pencere ışığında kendi yanağına nazikçe dokunan 50 yaş kadın profil portresi; cilt bakımı ve öz-şefkat teması',
  },
  '/beden-yakinlik': {
    src: '/images/heroes/beden-yakinlik.webp',
    alt: 'Pencere ışığında kendi omzuna nazikçe dokunan 40+ kadın; bedenle bağlantı ve öz-şefkat teması',
  },
  '/beden-yakinlik/cilt-gorunum': {
    src: '/images/library/editorial/by-cilt-degisimleri.webp',
    alt: 'Doğal cilt dokusu, ince çizgiler, retuşsuz editöryal yaklaşım — cilt ve görünüm teması',
  },
  '/beden-yakinlik/cinsel-saglik': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Sabah ışığında keten örtü üzerinde şakayık, bir bardak su ve katlı pamuklu bez; cinsel sağlık ve özenli bakım teması',
  },
  '/beden-yakinlik/pelvik-taban': {
    src: '/images/library/editorial/by-idrar-kacirma-pelvik-taban.webp',
    alt: 'Pencere ışığında ayakta duran 46 yaş kadın, eli karın-alt bölgesinde nazik farkındalık jesti; pelvik taban farkındalığı teması',
  },
  '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri': {
    src: '/images/library/editorial/by-cilt-degisimleri.webp',
    alt: 'Pencere ışığında kendi cildiyle tanışık duran 52 yaş kadın; doğal cilt dokusu, ince çizgiler, retuşsuz editöryal yaklaşım',
  },
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Sabah ışığında keten örtü üzerinde şakayık, bir bardak su, katlı pamuklu bez ve açık bir defter; günlük özenli bakım teması',
  },
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz': {
    src: '/images/library/editorial/introspective-burgundy-accent.webp',
    alt: 'Cream keten gömlekli 40+ kadın, eli boğazında nazik öz-tutuş; bordo vazo arka planda; güvende hissetme ve bedenle iletişim teması',
  },
  '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban': {
    src: '/images/library/editorial/by-idrar-kacirma-pelvik-taban.webp',
    alt: 'Pencere ışığında ayakta duran 46 yaş kadın, eli karın-alt bölgesinde nazik farkındalık jesti; pelvik taban farkındalığı teması',
  },
  '/hormonal-gecis/menopoz/menopozda-kemik-erimesi-onleme-ve-egzersiz': {
    src: '/images/library/editorial/hg-kemik-erimesi-egzersiz.webp',
    alt: 'Güneş dolu salonda hafif dumbbell ile omuz hizasında yan uzatma yapan 48 yaş kadın, ahşap zemin, iki bordo vazo; evde günlük direnç çalışması teması',
  },
  '/zihin-denge': {
    src: '/images/heroes/zihin-denge.webp',
    alt: 'Zihinsel dinginlik ve öz-düzenleme teması — sakin editöryal ortam',
  },
  '/zihin-denge/uyku-dinlenme': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturmuş pencereye bakan kadın; uyku ve dinlenme teması',
  },
  '/zihin-denge/duygusal-denge': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Pencere önünde sakin bir sabah, elinde kitapla dalgın bakışlı kadın; ruh hali ve duygusal denge teması',
  },
  '/zihin-denge/bilissel-saglik': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Çalışma masasında kitap okuyan kadın; kitaplık ve sabah ışığı — bilişsel sağlık teması',
  },
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Şafak ışığında yatak kenarında oturmuş pencereye bakan kadın; uyku ve dinlenme teması',
  },
  '/zihin-denge/duygusal-denge/ruh-hali-degisimleri-menopoz': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Pencere önünde sakin bir sabah, elinde kitapla dalgın bakışlı kadın; ruh hali ve iç gözlem teması',
  },
  '/zihin-denge/bilissel-saglik/bellek-odaklanma-menopoz': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Çalışma masasında kitap okuyan kadın; kitaplık ve sabah ışığı — bellek ve odaklanma teması',
  },
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz': {
    src: '/images/library/editorial/zd-stres-yonetimi.webp',
    alt: 'Bahçede taş oturağında sakin bir an, gözleri kapalı kadın; stres azaltma ve dinginlik teması',
  },
  '/bilimsel-pencere': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Sıcak akademik çalışma odasında bilimsel kitap üzerine eğilmiş kadın; bilimsel inceleme teması',
  },
  '/bilimsel-pencere/hormonlarin-bilimi': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Mermer masada botanik doğa öğeleri ve pencere ışığında düşünceli kadın; hormon biyolojisi teması',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'Altın saat pencere ışığında iç mekan yeşilliği önünde kadın portresi; hücresel yaşlanma teması',
  },
  '/bilimsel-pencere/yeni-arastirmalar': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Akademik çalışma odasında bilimsel kitap üzerine eğilmiş kadın; yeni araştırma derlemeleri teması',
  },
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Mermer masada botanik doğa öğeleri ve pencere ışığında düşünceli kadın; hormon biyolojisinin doğal resmi',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma': {
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
