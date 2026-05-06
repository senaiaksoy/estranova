/**
 * Alt menü hedef sayfaları için hero görselleri (Unsplash, editoryal ton).
 * Alt metinler bilgilendirici; stok fotoğraflar gerçek kişileri temsil etmeyebilir.
 */

export interface SubmenuHeroImage {
  src: string;
  alt: string;
}

export interface ArticleCardImage {
  src: string;
  alt: string;
}

/** Ana sayfa kahraman görseli (lüks editoryal şehirli eşik anı — 2026-05-06 update). */
export const homePageHero: SubmenuHeroImage = {
  src: '/images/hero/home-hero-luxury-editorial.webp',
  alt: 'Zarif bir girişte gün ışığına doğru yürüyen, krem elbise ve camel palto içindeki 40+ kadın; menopoz ve hormonal geçiş dönemini sakin, güçlü ve editoryal bir yaşam sahnesiyle anlatan ana sayfa görseli',
};

export const submenuHeroByRoute: Record<string, SubmenuHeroImage> = {
  '/manifesto': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada birleşmiş eller ve açık not defteri; ortak masa, sessiz konuşma ve paylaşılmış deneyim teması',
  },
  '/hormonal-gecis': {
    src: '/images/heroes/hormonal-gecis.webp',
    alt: 'Sabah ışığında bir İstanbul mutfak adası etrafında üç kuşak Türk kadın (38, 48, 58) kahve sohbeti; biri açık sağlık defterine notlar tutuyor, ortadaki kahve fincanını iki elle tutarken paylaşıyor, en olgun olan espresso ve sıcak gülümseme ile dinliyor; bakımlı boyalı saçlar (kestane düz / auburn chignon / mahogany dalga), ivory + bordo + brass paleti, mermer ada üstünde incir-ceviz tabağı + bal kavanozu + lavanta + açık dergi; hormonal geçişin kuşaklar arası paylaşımı ve bilgi köprüsü teması',
  },
  '/hormonal-gecis/perimenopoz': {
    src: '/images/library/editorial/journey-perimenopoz.webp',
    alt: 'Aydınlık bir İstanbul kafesinin pencere kenarında karşılıklı oturan iki yaşıt kadın (40-44); birinin önünde açık deri not defteri ve dolma kalem, diğerinin elinde latte sanatlı cappuccino; bakımlı boyalı saçlar (koyu kestane bob ve sıcak kahve dalga), ivory keten gömlek ve dusty pink ipek bluz, mermer masada espresso fincanı ve seramik vazoda dahlia, yanında croissant tabağı; perimenopoza birlikte fark etme ve erken farkındalık teması',
  },
  '/hormonal-gecis/menopoza-hazirlik': {
    src: '/images/library/editorial/journey-menopoza-hazirlik.webp',
    alt: 'Sıcak bir İstanbul evinin çalışma köşesinde walnut masada karşılıklı çalışan iki yaşıt kadın (45-48); biri açık deri planner üstünde dolma kalemle yazıyor, diğeri eli çenede ilgiyle eğilmiş kibar gülümseme; bakımlı boyalı saçlar (koyu kestane dalga ve açık kestane bob), oatmeal cashmere kazak ve cream ipek bluz bordo eşarp boyunda; brass-burnished abajur, walnut kitaplık bokesi, peony pembe vazoda, masada espresso fincanı ve sade kitap yığını; menopoza birlikte hazırlık ve ortak plan teması',
  },
  '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler': {
    src: '/images/library/editorial/hg-perimenopoz-ilk-isaretler.webp',
    alt: 'Boğaz manzaralı aydınlık bir İstanbul kafesinde açık not defteri, dolma kalem ve kahve eşliğinde sakin konuşan iki yaşıt kadın; perimenopozun ilk işaretlerini birlikte fark etme ve bedendeki değişime isim koyma teması',
  },
  '/hormonal-gecis/menopoz': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'Yaz akşamı İstanbul terasında üç yaşıt kadın (50-55) dolu bir sohbet anında; soldaki klasik Türk çay bardağını altın detaylı tabakta tutarak gülerek dinliyor, ortadaki ivory ipek yelpazeyi hafifçe açmış (sıcak basma referansı subtle), sağdaki porselen Türk kahvesi fincanını tabakta lokumla tutuyor; bakımlı boyalı saçlar (kestane chignon, dalgalı auburn, mahogany), ivory + dusty-rose + bordo paleti, jasmine ve wisteria sarmalı pergola, masada incir ve halved nar, golden hour Boğaz silueti boke; menopoz döneminin canlı yaşandığı arkadaşlık ve dolu bir akşam teması',
  },
  '/hormonal-gecis/menopoz/menopoz-nedir': {
    src: '/images/library/editorial/hg-menopoz-nedir.webp',
    alt: 'Boğaz manzaralı İstanbul terasında çay, kahve ve açık not defteri eşliğinde sohbet eden üç yaşıt kadın; menopozu panik değil, yaşanan ve konuşulabilen doğal bir geçiş olarak okuma teması',
  },
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu': {
    src: '/images/library/editorial/pair-window-cafe-reflection.webp',
    alt: 'Aydınlık bir kafenin pencere kenarında karşılıklı oturan iki yaşıt kadın; birinin elinde çay fincanı, diğerinin önünde açık not defteri ve dolma kalem; bakımlı boyalı saçlar, ivory kazak ve bordo ipek bluz, mermer masada espresso ve tek dahlia; arkada ağaçlı sokak boke; tartı sayılarının ötesinde vücut kompozisyonunu yakın bir arkadaşla sakin konuşarak anlamlandırma teması',
  },
  '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi': {
    src: '/images/library/editorial/hg-menopozda-hekim-hasta-iliskisi.webp',
    alt: 'Sun-lit İstanbul evi mutfak adasında sabah ışığında solo kahvaltı hazırlığında bir yaşıt kadın (50-55); warm chestnut shoulder dalgalı saç, modest cream keten button-down ve warm camel keten pant ile delicate altın kolye, mermer mutfak adasında ayakta mid-action taze meyve dilimliyor (incir, halved nar), küçük seramik kasede yoğurt-bal ve cam sürahide fresh-squeezed portakal suyu; composed thoughtful gentle ifade eyes on task ile quiet mid-internal-thought softness (kendi için hazırlanıyor); counter kenarında kapalı sade kapaklı sağlık-yaşam dergisi ve küçük soft leather handbag (subtle randevu hazırlık ipucu); bakımlı boyalı saçlar, modest tam kapalı yaka, mature graceful natural cilt; arka planda walnut mutfak rafları soft bokeh (kavanozlar ve baharatlar generic), cream mermer backsplash, pale oak floor, sheer keten perde tall pencerden warm morning daylight, sağ pencerde apartman skyline ve yeşillik bokeh; hekimle yapılacak konuşmaya günlük yaşam içinde bedeniyle ilgilenerek soluk almak ve soruları olgunlaştırma teması',
  },
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'Yaz akşamı İstanbul terasında üç yaşıt kadın sohbeti; ortadaki kadın ipek yelpazeyi hafifçe açmış (sıcak basma referansı subtle), soldaki klasik Türk çay bardağıyla gülerek dinliyor, sağdaki porselen Türk kahvesi fincanı; gülen yüzler ve dingin omuz duruşu, bakımlı boyalı saçlar, ivory + dusty-rose + bordo paleti, golden hour ve Boğaz boke; sıcak basmasıyla yalıtılmış değil sosyal bir akşamın doğal parçası — konforu birlikte yaşama teması',
  },
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: '46 yaş kadın portresi: çene altında kenetlenmiş eller, cream keten gömlek, arka planda yumuşak bordo vazo bokeh; HRT ilk aylarında sakin dikkat, beden takibi ve izleme defteri yaklaşımı teması.',
  },
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz': {
    src: '/images/library/editorial/by-libido-degisimi.webp',
    alt: 'İstanbul evinin küçük bahçe terasında geç öğleden sonra altın saat ışığında yan yana yumuşak rattan-wicker sandalyelerde oturan iki yaşıt kadın (48-52); soldaki warm chestnut shoulder dalgalı saç, cream ipek loungewear bluz, camel pant ve cream cashmere şal omuza dökülmüş, kucağında açık hardcover şiir kitabı bir el sayfada, gentle gülümseme arkadaşına; sağdaki koyu kestane medium dalgalı saç, dusty rose ipek bluz, cream linen wide-leg pant ve slim brass-gold pendant kolye, klasik Türk çay bardağı altın detaylı tabakta elinde, leaning slightly toward arkadaşı warm gülümseme; bakımlı boyalı saçlar, modest tam kapalı yaka, mature graceful natural cilt; aralarında walnut yan masa üstünde küçük seramik vazoda fresh blush peony, açık deri kapaklı not defteri ve dolma kalem, kapalı şiir kitabı sade kapak, porselen espresso fincan, sade lokum tabakta; pergola wisteria-jasmine deep bokeh, golden hour bahçe silüet, pale wooden teras zemini ve Persian rug kenarı, brass-burnished outdoor abajur warm subtle light; menopoz döneminde libido değişimi ve kendiyle yeniden tanışmayı yargısız samimi sohbetle paylaşma teması',
  },
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi': {
    src: '/images/library/editorial/hg-hormon-tedavisi-karar.webp',
    alt: 'İstanbul Boğaz sahil promenadında geç öğleden sonra altın saat ışığında yan yana yürüyen iki yaşıt kadın (50-54); soldaki warm dark mahogany shoulder dalgalı saç, modest cream cashmere V-neck kazak ve warm camel keten-pamuk wide-leg pant ile bordo ipek shawl-scarf gevşek omuza dökülmüş, slim leather tote elinde, mid-conversation thoughtful sharing arkadaşına; sağdaki warm chestnut polished saç, navy keten button-down ve cream tailored pant ile soft cream cashmere kazak boyna sarılmış casual, küçük katlı dergi elinde, leaning slightly toward dinleyen küçük composed gülümseme; bakımlı boyalı saçlar, modest tam kapalı yaka, mature graceful natural cilt; arka planda Boğaz mavi-yeşil su bokeh + uzakta yelkenli + İstanbul silüeti haze + sahil bench partially visible, sağda oleander hedge soft bokeh; warm cream stone sahil pavement; HRT bilgilendirilmiş karar sürecini iki olgun arkadaşla yürüyerek düşünme teması',
  },
  '/hormonal-gecis/40-sonrasi': {
    src: '/images/library/editorial/journey-40-sonrasi.webp',
    alt: 'Çağdaş İstanbul sanat galerisinde öğleden sonra sergi gezişinde üç yaşıt kadın (55-62); soldaki bordo şal omuzunda büyük abstract tabloya dalgın merakla bakarak küçük Türk kahvesi fincanı tutuyor, ortadaki kahkahayla jest yapıyor, sağdaki porselen Türk kahvesi fincanıyla dingin gülümseyerek dinliyor; bakımlı boyalı saçlar (mahogany dalgalı, açık kestane omuz dalgası, auburn bob), navy ipek + bordo şal + cream linen + bordo ipek bluz, dark oak galeri zemini, gerideki ikram konsolunda Türk kahvesi servisi; post-menopoz yaşam dolu sosyal kültürel akşam teması',
  },
  '/hormonal-gecis/40-sonrasi/tarama-testleri': {
    src: '/images/library/editorial/hg-tarama-testleri.webp',
    alt: 'Sabah ışığında ahşap masada açık takvim sayfası, çay fincanı, açık not defteri, cam vazoda pembe gül ve bordo ciltli ajanda; kişisel düzenli sağlık takibi teması',
  },
  '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada birleşmiş eller ve açık not defteri; sakin, planlı bir sağlık takip rutini teması',
  },
  '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada açık ajanda, çay bardağı ve not alınmış sağlık başlıkları; menopoza hazırlıkta sakin takip ve kontrol teması',
  },
  '/zamansiz-yasam': {
    src: '/images/heroes/zamansiz-yasam.webp',
    alt: 'Akdeniz longevity temalı geç-sabah brunch sofrası — taş duvarlı bir bahçe terasında zeytin dalları altında üç yaşıt Türk kadın (46-52) yavaş yemek paylaşımı; solda yoğurta bal damlatan kestane ponytail, ortada terracotta wrap içinde portakal suyu tutan gülen yüz, sağda cream kaftan içinde şeftali dilimleyen koyu auburn; bakımlı boyalı saçlar, eskimiş rustik ahşap masada incir + nar + üzüm + zeytin + ceviz + ekmek + zeytinyağı + Türk kahvesi; honey-toned taş duvar + bougainvillea bokeh; uzun vadeli yaşam ve sosyal yavaş yaşam teması',
  },
  '/zamansiz-yasam/vitaminler': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Ahşap tahta üzerinde sabah ışığında yumurtalar, portakal dilimleri, çiğ badem ve ceviz, etiketsiz zeytinyağı; vitamin kaynakları gerçek besinlerle temalandırılmış',
  },
  '/zamansiz-yasam/d-vitamini-rehberi': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Sabah ışığında ahşap masada yumurtalar, portakal dilimleri, çiğ ceviz ve mavi-yeşil yapraklı sebze; etiketsiz zeytinyağı yanında; D vitamini için besin, güneş ve takviye üçgenini sade sağlık okumasıyla değerlendirme teması',
  },
  '/zamansiz-yasam/kemik-sagligi-40-sonrasi': {
    src: '/images/library/editorial/zy-kemik-sagligi-direnc-egzersizi.webp',
    alt: 'Boğaz manzaralı aydınlık bir evde yoga matı, direnç bandı, hafif ağırlıklar ve açık not defteri eşliğinde hareket planı yapan iki yaşıt kadın; 40 sonrası kemik sağlığı ve düzenli güçlenme teması',
  },
  '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari': {
    src: '/images/library/editorial/zy-kas-iskelet-agrilari-esneme.webp',
    alt: 'Boğaz manzaralı aydınlık bir odada mat üzerinde sakin esneme yapan 40+ kadın; kas-iskelet ağrılarını panik değil, beden farkındalığı ve düzenli hareketle okuma teması',
  },
  '/zamansiz-yasam/deneysel': {
    src: '/images/library/editorial/zy-deneysel.webp',
    alt: 'Sun-lit İstanbul evi küçük seramik atölyesi köşesinde geç öğleden sonra warm ışıkta solo aktif hands-on çömlekçilik sahnesinde bir yaşıt kadın (62-65); warm mahogany shoulder dalgalı saç soft loose tied-back, modest cream cotton long-sleeve top ve warm camel canvas-linen artist apron belde (apron üzerinde subtle clay smudge ler — gerçek working studio), warm taupe canvas pant; küçük ahşap stool da slow-turning potter s wheel başında oturmuş, iki el yumuşakça forming clay shape etrafında (küçük bowl ya da vase başlangıcı, mid-shaping light fingertip pressure), composed mature concentration, gentle inner stillness ve soft small smile creative joy eyes on clay form; bakımlı boyalı saç (gri/silver YOK 60+ olsa bile fully colored), mature graceful natural cilt (smoothed değil, soft expression lines doğal kabul), modest tam kapalı yaka; sol uçta küçük seramik bowl water ve katlı bez üstünde küçük tahta shaping tools, raflarda hand-made unfired raw clay bowls ve vases bokeh, sheer white perde tall pencerden warm late-afternoon sunlight, sol arkada monstera ve geniş yapraklı bitki bokeh, warm pale wooden floor ve natural-fiber rug; 60+ post-menopoz olgunluğun yaratıcı yeni deneyim sürecinde clay ile şekil verme rituali ve deneysel yaklaşımlara sakin merak teması',
  },
  '/zamansiz-yasam/deneysel/nad-plus-takviyesi': {
    src: '/images/library/editorial/zy-deneysel.webp',
    alt: 'Sun-lit İstanbul evi küçük seramik atölyesi köşesinde geç öğleden sonra warm ışıkta solo aktif hands-on çömlekçilik sahnesinde bir yaşıt kadın (62-65); warm mahogany shoulder dalgalı saç soft loose tied-back, modest cream cotton long-sleeve top ve warm camel canvas-linen artist apron belde, warm taupe canvas pant; küçük ahşap stool da slow-turning potter s wheel başında oturmuş, iki el yumuşakça forming clay shape etrafında (küçük bowl ya da vase başlangıcı), composed mature concentration ve gentle inner stillness ve soft small smile creative joy; bakımlı boyalı saç (gri/silver YOK), mature graceful natural cilt, modest tam kapalı yaka; sol uçta küçük seramik bowl water ve tahta tools, raflarda hand-made unfired raw clay bowls ve vases bokeh, sheer white perde tall pencerden warm late-afternoon sunlight, monstera ve geniş yapraklı bitki bokeh, warm pale wooden floor ve natural-fiber rug; NAD+ takviye gibi deneysel longevity yaklaşımlarını yaratıcı hands-on bir hobiyle bedeniyle yeni deneyim olarak karşılama teması',
  },
  '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi': {
    src: '/images/library/editorial/zy-coq10-kanit-notlari.webp',
    alt: 'Sıcak ışıklı çalışma masasında açık not defteri, dolma kalem, amber cam şişe, çay ve kitaplar; CoQ10 takviyesi iddialarını reklam vaadi değil kanıt okuması olarak değerlendirme teması',
  },
  '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu': {
    src: '/images/library/editorial/zy-deneysel-tedavi-kanit-masasi.webp',
    alt: 'Burgundy kitaplar, açık araştırma metinleri, dolma kalem, pirinç lamba ve çay eşliğinde hazırlanmış sıcak ışıklı çalışma masası; deneysel tedavi iddialarını pazarlama vaadi değil kanıt okuryazarlığıyla okuma teması',
  },
  '/zamansiz-yasam/beslenme-yaslanma': {
    src: '/images/library/editorial/zy-beslenme-yaslanma-kahvalti.webp',
    alt: 'Boğaz manzaralı aydınlık mutfakta kahvaltı tabağı, kahve, açık not defteri ve kalem eşliğinde düşünen 40+ kadın; beslenme ve yaşlanmayı katı diyet değil bilinçli tabak ritmi olarak okuma teması',
  },
  '/zamansiz-yasam/kilo-artisi-menopoz': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: 'Sun-lit İstanbul evi balkon herb garden inde geç sabah ışığında solo aktif gardening sahnesinde bir yaşıt kadın (46-50); warm honey-chestnut shoulder dalgalı saç, thick cream speckled chunky knit cardigan ve cream cotton gömlek altında ile warm camel canvas-linen apron belde, soft canvas pant; ahşap balkon masası önünde ayakta mid-action terracotta saksıdan taze rosemary topluyor sağ el dalında, sol el küçük seramik tabakta yeni-toplanmış mevsim sebze (yeşil fasulye, taze maydanoz, küçük cherry tomato) tutuyor; composed present-moment ifade eyes on herbs ve soft small smile peaceful task focus; bakımlı boyalı saç (gri/silver YOK), modest tam kapalı yaka, mature graceful natural cilt; etrafında terracotta saksılarda rosemary, basil, mint, thyme, parsley ve oregano kümeleri (küçük ev herb garden), geniş yapraklı yeşillik fiddle leaf fig soft bokeh, küçük cam su sürahisi ahşap üzerinde, warm pale wooden balkon zemin, sheer white perde subtle uçuşlu sağ pencerden, uzakta İstanbul çatıları haze bokeh; menopoz döneminde kilo değişimini diyet kültüründen uzak yargısız doğal beslenme ve toprakla bağ ile karşılama teması',
  },
  '/zamansiz-yasam/non-invaziv': {
    src: '/images/library/editorial/zy-non-invaziv.webp',
    alt: 'Ahşap masada keten örtü üzerinde cam sürahi, açık pembe çiçek, seramik kasede pürüzsüz taş ve katlı pamuklu havlu; bordo arka plan — pürüzsüzlük, yenilenme ve zaman metaforu',
  },
  '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim': {
    src: '/images/library/editorial/zy-non-invaziv-cilt-cihazlari.webp',
    alt: 'Burgundy zeminde şakayıklar, pamuklu havlu, cam su bardağı ve metalik cilt bakım cihazı ile hazırlanmış premium still-life; non-invaziv cihaz vaatlerini reklam değil kanıt sınırıyla değerlendirme teması',
  },
  '/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz': {
    src: '/images/library/editorial/zy-sauna-soguk-dus-rituel.webp',
    alt: 'Aydınlık kıyı evinde bornozla oturup su içen 40+ kadın, yanında keten havlu ve sade dinlenme atmosferi; sauna ve soğuk duşu performans değil beden ritmini dinleme olarak okuma teması',
  },
  '/beden-yakinlik': {
    src: '/images/heroes/beden-yakinlik.webp',
    alt: 'Yavaş bir sabah banyosunun ardından bir ev-spa terasında iki yaşıt yakın arkadaş (48-52) sessiz bir konuşmada; solda cream waffle bornoz içinde rattan sandalyede bir bacak altına kıvrılmış terakota fincan tutan kadın, sağda dusty-rose linen bornoz içinde loveseat üstünde mid-sentence half-smile; bornozlar tam kapalı, banyo sonrası dingin polished saçlar, no-makeup makyaj; küçük dark wood masada iki fincan + tek peony vazo + cucumber-mint su sürahisi; tall arched window sheer linen perde + honey-toned plaster duvar + fiddle leaf fig; bedenle barışma ve yargısız mahrem konuşma teması',
  },
  '/beden-yakinlik/cilt-gorunum': {
    src: '/images/library/editorial/by-cilt-degisimleri.webp',
    alt: 'Menopozda cilt değişimleri temasını sakin, doğal ve premium editoryal bir bakım sahnesiyle taşıyan 45-55 yaş arası kadınlar',
  },
  '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri': {
    src: '/images/library/editorial/by-cilt-degisimleri.webp',
    alt: 'Menopozda cilt kuruluğu, kolajen ve bariyer değişimi temasını sakin, doğal ve premium editoryal bir bakım sahnesiyle taşıyan 45-55 yaş arası kadınlar',
  },
  '/beden-yakinlik/cinsel-saglik': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Sabah ışığında keten örtü üzerinde şakayık, bir bardak su ve katlı pamuklu bez; cinsel sağlık ve özenli bakım teması',
  },
  '/beden-yakinlik/pelvik-taban': {
    src: '/images/library/editorial/by-idrar-kacirma-pelvik-taban.webp',
    alt: 'Sun-lit İstanbul evi yoga köşesinde pale oak yer üzerinde yan yana yoga matlarında oturmuş iki yaşıt kadın (48-52); soldaki warm honey-chestnut shoulder dalgalı saç ile soft sage-green long-sleeve activewear ve camel full-length leggings içinde knees-up cross-legged easy pose, bir el karın-alt bölgesinde nazik mindful öz-farkındalık jesti, eyes softly closed dingin ifade; sağdaki koyu kestane medium ponytail ile dusty rose long-sleeve top ve cream full-length leggings içinde kendi mat üzerinde yan yana cross-legged, bir el dizinde küçük composed gülümseme arkadaşına yan bakış; bakımlı boyalı saçlar (gri/silver YOK), modest tam kapalı activewear, mature graceful natural cilt; mat yanında cam su bardağı, walnut yan masada küçük seramik vazoda lavanta dalı, açık deri kapaklı not defteri ve dolma kalem; large monstera ve peace lily yeşilliği soft bokeh, sheer keten perde sabah ışığı, brass-burnished floor lamp warm subtle light köşeden; ev içinde arkadaşla birlikte yargısız sakin pelvik taban farkındalığı rituali teması',
  },
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Sabah ışığında keten örtü üzerinde şakayık, bir bardak su, katlı pamuklu bez ve açık bir defter; günlük özenli bakım teması',
  },
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz': {
    src: '/images/library/editorial/introspective-burgundy-accent.webp',
    alt: 'Sıcak bir İstanbul evinin yatak odası okuma köşesinde akşam üstü warm ışıkta saf natürmort (kişi yok); chaise üstünde cream ipek modest yastık ve üzerine yumuşak katlanmış bordo silk-knit şal (subtle bordo aksanı), walnut yan masada açık deri kapaklı not defteri ve dolma kalem (his günlüğü), küçük seramik vazoda 2-3 cream-blush peony, klasik Türk çay bardağı altın tabakta buharlı, kapalı hardcover şiir kitabı sade kapak; sağda küçük cam votive mumluk içinde tek yumuşak yanan mum, sheer keten perde tall pencerden warm evening light, mahogany floor ve Persian rug edge, brass-burnished abajur warm focused light cream yastık ve bordo şala düşüyor; iç dünyaya dönen sakin akşam ve bedenle iletişim teması',
  },
  '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban': {
    src: '/images/library/editorial/by-idrar-kacirma-pelvik-taban.webp',
    alt: 'Sun-lit İstanbul evi yoga köşesinde pale oak yer üzerinde yan yana yoga matlarında oturmuş iki yaşıt kadın (48-52); soldaki warm honey-chestnut shoulder dalgalı saç ile soft sage-green long-sleeve activewear ve camel full-length leggings içinde knees-up cross-legged easy pose, bir el karın-alt bölgesinde nazik mindful öz-farkındalık jesti, eyes softly closed dingin ifade; sağdaki koyu kestane medium ponytail ile dusty rose long-sleeve top ve cream full-length leggings içinde kendi mat üzerinde yan yana cross-legged, bir el dizinde küçük composed gülümseme arkadaşına yan bakış; bakımlı boyalı saçlar (gri/silver YOK), modest tam kapalı activewear, mature graceful natural cilt; mat yanında cam su bardağı, walnut yan masada küçük seramik vazoda lavanta dalı, açık deri kapaklı not defteri ve dolma kalem; large monstera ve peace lily yeşilliği soft bokeh, sheer keten perde sabah ışığı, brass-burnished floor lamp warm subtle light köşeden; menopoz döneminde idrar kaçırma ve pelvik taban farkındalığını arkadaşla birlikte yargısız bedeni dinleme teması',
  },
  '/zihin-denge': {
    src: '/images/heroes/zihin-denge.webp',
    alt: 'Sabah pilates sınıfı sonrası zarif bir İstanbul stüdyosunda üç yaşıt Türk kadın (48-54) post-flow dinginlikte sakin sohbet; solda mat üstünde bağdaş kurmuş cam su şişesiyle, ortada pilates Wunda chair yanında pink yoga block elinde, sağda matını topluyor; bakımlı boyalı saçlar (kestane / auburn topknot / auburn high ponytail), sage green + dusty rose + soft black + taupe paleti, pale oak zemin, pampas + areca palm + sheer linen perdeler; zihin-beden bütünlüğü ve sosyal sakin bir an teması',
  },
  '/zihin-denge/uyku-dinlenme': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Pencereden süzülen yumuşak ışıkta oak ahşap bedside masada açık deri uyku günlüğü ve dolma kalem, buharlı klasik Türk çay bardağı altın detaylı tabakta, küçük seramik vazoda lavanta dalı, ince deri kayışlı minimalist saat, yeşil kapak ciltli kitap; solda dağınık beyaz keten yatak, sağda terracotta saksıda sage-green herb ve sheer linen perde; uyku ve dinlenme bütününe sakin natürmort yaklaşım teması',
  },
  '/zihin-denge/duygusal-denge': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Sıcak bir İstanbul evinin oturma odasında sabah ışığında iki yaşıt kadın (47-52) duygusal sohbet anında; soldaki cream cashmere kazak ve camel pant içinde divanda kucağında açık ciltli kitap, ruh halinden bahsediyor; sağdaki dusty rose ipek bluz ve cream pant içinde tan deri koltukta eli saç altında empatik dinliyor; bakımlı boyalı saçlar (koyu kestane dalga ve warm chestnut bob), mahogany yan masada klasik Türk çay bardağı altın tabakta, porselen espresso fincan, peony pembe vazoda, açık deri not defteri ve dolma kalem; brass-burnished abajur warm light, walnut kitaplık bokesi, sheer keten perde; ruh hali sohbeti ve duygusal denge teması',
  },
  '/zihin-denge/bilissel-saglik': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Sıcak bir İstanbul evinin küçük kütüphanesinde walnut masada birlikte çalışan iki yaşıt kadın (49-52); soldaki oatmeal cashmere kazak ve camel pant içinde açık ciltli kitap üzerine işaret parmağıyla bir kelimeyi gösteriyor, sağdaki cream ipek bluz ve bordo eşarp boyunda ahşap yan kollu sandalyede dolma kalemle açık deri kapaklı not defterine yazıyor; bakımlı boyalı saçlar (koyu kestane dalga ve koyu kestane bob), masada klasik Türk çay bardağı altın tabakta, porselen espresso fincan, seramik vazoda tek dahlia, sade lokum tabakta; brass yeşil camlı reading lamp warm focused light, walnut floor-to-ceiling kitaplıklar bokesi, sheer keten perde geç-sabah ışığı; aktif birlikte öğrenme ve bilişsel sağlık teması',
  },
  '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Sıcak bir İstanbul evinin küçük kütüphanesinde walnut masada birlikte çalışan iki yaşıt kadın (49-52); soldaki oatmeal cashmere kazak ve camel pant içinde açık ciltli kitap üzerine işaret parmağıyla bir kelimeyi gösteriyor, sağdaki cream ipek bluz ve bordo eşarp boyunda ahşap yan kollu sandalyede dolma kalemle açık deri kapaklı not defterine yazıyor; bakımlı boyalı saçlar, yumuşak sabah ışığı, çay bardağı ve açık not defteri eşliğinde perimenopozda odak ve bellek dalgalanmasını sakin biçimde okuma teması',
  },
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Pencereden süzülen yumuşak ışıkta oak ahşap bedside masada açık deri uyku günlüğü ve dolma kalem, buharlı klasik Türk çay bardağı altın detaylı tabakta, küçük seramik vazoda lavanta dalı, ince deri kayışlı minimalist saat, yeşil kapak ciltli kitap; solda dağınık beyaz keten yatak, sağda terracotta saksıda sage-green herb ve sheer linen perde; menopoz döneminde uyku düzenini yeniden kurma sabah ritüeli teması',
  },
  '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Pencereden süzülen yumuşak ışıkta oak ahşap bedside masada açık deri uyku günlüğü ve dolma kalem, buharlı klasik Türk çay bardağı altın detaylı tabakta, küçük seramik vazoda lavanta dalı, ince deri kayışlı minimalist saat, yeşil kapak ciltli kitap; solda dağınık beyaz keten yatak, sağda terracotta saksıda sage-green herb ve sheer linen perde; perimenopozda uykunun değişen yanı, hormonal dalga ve uyku evreleri kaydı teması',
  },
  '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Pencereden süzülen yumuşak ışıkta oak ahşap bedside masada açık deri uyku günlüğü ve dolma kalem, buharlı klasik Türk çay bardağı altın detaylı tabakta, küçük seramik vazoda lavanta dalı, ince deri kayışlı minimalist saat, yeşil kapak ciltli kitap; solda dağınık beyaz keten yatak, sağda terracotta saksıda sage-green herb ve sheer linen perde; gece terlemesi sonrası sakin dengelenme ve mahrem uyku deneyiminin yargısız kaydı teması',
  },
  '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Pencereden süzülen yumuşak ışıkta oak ahşap bedside masada açık deri uyku günlüğü ve dolma kalem, buharlı klasik Türk çay bardağı altın detaylı tabakta, küçük seramik vazoda lavanta dalı, ince deri kayışlı minimalist saat, yeşil kapak ciltli kitap; akşam hareketi sonrası bedeni geceye hazırlama, melatonin ve sakin ritim teması',
  },
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz': {
    src: '/images/library/editorial/zd-stres-yonetimi.webp',
    alt: 'Sun-lit İstanbul evinin botanik dolu sıcak conservatory köşesinde sabah ışığında yan yana cream-cushioned wicker armchair lerde oturan iki yaşıt kadın (47-52); soldaki warm chestnut tied-back low ponytail, soft cream cashmere oversize kazak ve warm taupe linen wide-leg pant içinde eli kucağında composed peaceful presence ile dingin gülümseme arkadaşına; sağdaki chestnut shoulder dalgalı saç, dusty sage ipek bluz, cream linen pant ve slim brass-gold pendant kolye ile elinde klasik Türk çay bardağı altın detaylı tabakta buharlı, warm gülümseme arkadaşına; bakımlı boyalı saçlar (gri/silver YOK), modest tam kapalı yaka, mature graceful natural cilt; aralarında küçük walnut yan masa üstünde küçük seramik vazoda fresh white peony ve lavanta dalı, açık deri kapaklı not defteri ve dolma kalem, kapalı yeşil cilt sade kapaklı kitap, porselen Türk kahvesi fincan ve seramik tabakta sade lokum ile nar tanesi; arkada peace lily, palm yaprakları ve fiddle leaf fig yeşilliği soft bokeh, sheer keten perde sabah ışığı, brass-burnished floor lamp warm subtle light köşeden; arkadaşla birlikte sakin nefes ve stres azaltma rituali teması',
  },
  '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Sabah ışığında İstanbul evinde iki yaşıt kadının sakin sohbet anı; açık not defteri, çay ve yumuşak yüz ifadeleri eşliğinde perimenopozda kaygı artışını yargısız konuşma teması',
  },
  '/bilimsel-pencere': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Yavaş bir hafta içi öğleden sonrası zarif bir ev kitaplığında iki yaşıt entelektüel Türk kadın (50-54) gerçek bir tartışma anında; solda bordo ipek bluz + cream tailored pantolon içinde tan leather wingback armchair üzerinde açık hardcover kitap parmakla işaretlenmiş, sağda navy linen blazer + ivory silk + cream wide-leg pants içinde antika writing desk köşesine dayanmış porcelain coffee fincanı + tablet, başı hafif eğik dinleyen-considering ifade; bakımlı boyalı saçlar (kestane polished bob / mahogany omuz dalga), walnut floor-to-ceiling kitaplıklar + brass green-shaded lamp + magnolia branch + Persian rug; tall arched window arkasında İstanbul silueti minareler + sheer linen perdeler; gerçek akademik tartışma ve eleştirel bilgi okuryazarlığı teması',
  },
  '/bilimsel-pencere/hormonlarin-bilimi': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Akademisyen ev çalışma odasında pencere kenarında sıcak cream damarlı mermer masada saf natürmort (kişi yok); ortada açık leather-bound akademik not defteri üzerinde elle çizilmiş soyut biyolojik akış diyagramı (organik eğriler ve daireler, etiketsiz) ve dolma kalem, solda açık ciltli akademik kitap ve seramik vazoda peony ile magnolia dalı (botanik aksan), sağda buharlı klasik Türk çay bardağı altın tabakta, brass-rimmed okuma gözlüğü, brass orb paperweight; bordo kadife perde edge, sheer keten perde, dışarıda yumuşak yeşil bokeh, brass yeşil camlı banker abajur warm focused light; biyoloji ile doğal güzelliğin kesişiminde hormonların bilimi teması',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'İstanbul evi cam tavanlı winter garden öğleden sonra ışığında üç yaşıt kadın (62-68) yaşam dolu olgunluk sahnesi; soldaki warm honey-blonde dalgalı saç, soft cream cashmere ve camel pant içinde küçük terracotta saksıda orkide ile özenle ilgileniyor; ortadaki koyu kestane chignon, sage-green ipek bluz ve cream linen pant içinde elinde cam çay bardağı warm gülümsüyor; sağdaki warm mahogany medium-length wavy bob, bordo cashmere kazak içinde kucağında açık botanik dergisi parmak sayfada konuşuyor; bakımlı boyalı saçlar (gri/silver YOK), graceful natural mature cilt; walnut yan masada porselen Türk kahvesi ve tabaklarda lokum + halved nar + incir, cam tavandan dappled afternoon sunlight, fiddle leaf fig + monstera + birds-of-paradise + pampas grass + terracotta saksılar, white-cream wicker mobilya + sage yastıklar; doğa içinde olgun yaş alma ve hücresel yaşlanma teması',
  },
  '/bilimsel-pencere/yeni-arastirmalar': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Akademik çalışma odasında bilimsel kitap üzerine eğilmiş kadın; yeni araştırma derlemeleri teması',
  },
  '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski': {
    src: '/images/library/editorial/senai-hrt-meme-kanseri-hero.webp',
    alt: 'Krem tonlarda giyinmiş, düşünceli ifadesiyle pencereden ışık alan zarif bir kadın portresi; hormon tedavisi ve meme kanseri riski başlığını sakin, dikkatli ve editoryal bir tonla düşünme temasını taşır',
  },
  '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: 'Güneş alan ev balkonunda taze otlar ve sade beslenme hazırlığıyla ilgilenen yaşıt kadın; menopozal kilo, metabolik sağlık ve yeni ilaç sınıflarını dengeli değerlendirme teması',
  },
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Akademisyen ev çalışma odasında pencere kenarında sıcak cream damarlı mermer masada saf natürmort (kişi yok); ortada açık leather-bound akademik not defteri üzerinde elle çizilmiş soyut biyolojik akış diyagramı (organik eğriler ve daireler, etiketsiz) ve dolma kalem, solda açık ciltli akademik kitap ve seramik vazoda peony ile magnolia dalı (botanik aksan), sağda buharlı klasik Türk çay bardağı altın tabakta, brass-rimmed okuma gözlüğü, brass orb paperweight; bordo kadife perde edge, sheer keten perde, dışarıda yumuşak yeşil bokeh, brass yeşil camlı banker abajur warm focused light; estrogen biyolojisinin sağlıkla ilişkisini doğal-akademik bir pencereden okumak teması',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'İstanbul evi cam tavanlı winter garden öğleden sonra ışığında üç yaşıt kadın (62-68) yaşam dolu olgunluk sahnesi; soldaki warm honey-blonde dalgalı saç, soft cream cashmere ve camel pant içinde küçük terracotta saksıda orkide ile özenle ilgileniyor; ortadaki koyu kestane chignon, sage-green ipek bluz ve cream linen pant içinde elinde cam çay bardağı warm gülümsüyor; sağdaki warm mahogany medium-length wavy bob, bordo cashmere kazak içinde kucağında açık botanik dergisi parmak sayfada konuşuyor; bakımlı boyalı saçlar (gri/silver YOK), graceful natural mature cilt; walnut yan masada porselen Türk kahvesi ve tabaklarda lokum + halved nar + incir, cam tavandan dappled afternoon sunlight, fiddle leaf fig + monstera + birds-of-paradise + pampas grass + terracotta saksılar, white-cream wicker mobilya + sage yastıklar; NAD+ ve hücresel yaşlanmaya doğa içinde uzun vadeli sağlık teması',
  },
};

export const articleCardImageByRoute: Record<string, ArticleCardImage> = {
  '/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari': {
    src: '/images/library/editorial/senai-hrt-meme-kanseri-hero.webp',
    alt: 'Krem tonlarda giyinmiş, düşünceli ifadesiyle pencereden ışık alan zarif bir kadın portresi; HRT avantajları yazısı için editoryal kart görseli',
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

export function getArticleCardImage(pathname: string): ArticleCardImage | undefined {
  const p = normalizePathname(pathname);
  return articleCardImageByRoute[p];
}
