/**
 * Alt menü hedef sayfaları için hero görselleri (Unsplash, editoryal ton).
 * Alt metinler bilgilendirici; stok fotoğraflar gerçek kişileri temsil etmeyebilir.
 */

export interface SubmenuHeroImage {
  src: string;
  alt: string;
}

/** Ana sayfa kahraman görseli (editoryal, canlı topluluk tonu — 2026-05-01 V2 brief). */
export const homePageHero: SubmenuHeroImage = {
  src: '/images/hero/home-hero.webp',
  alt: 'Boğaziçi sahil terasında altın saatte çay sohbeti yapan üç orta yaş Türk kadın; arkada Boğaziçi Köprüsü ve Ortaköy Camii — hormonal geçiş döneminde birlikte yaşamı, neşeyi ve topluluğu yansıtan editöryal sahne',
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
  '/hormonal-gecis/menopoz': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'Yaz akşamı İstanbul terasında üç yaşıt kadın (50-55) dolu bir sohbet anında; soldaki klasik Türk çay bardağını altın detaylı tabakta tutarak gülerek dinliyor, ortadaki ivory ipek yelpazeyi hafifçe açmış (sıcak basma referansı subtle), sağdaki porselen Türk kahvesi fincanını tabakta lokumla tutuyor; bakımlı boyalı saçlar (kestane chignon, dalgalı auburn, mahogany), ivory + dusty-rose + bordo paleti, jasmine ve wisteria sarmalı pergola, masada incir ve halved nar, golden hour Boğaz silueti boke; menopoz döneminin canlı yaşandığı arkadaşlık ve dolu bir akşam teması',
  },
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu': {
    src: '/images/library/editorial/pair-window-cafe-reflection.webp',
    alt: 'Aydınlık bir kafenin pencere kenarında karşılıklı oturan iki yaşıt kadın; birinin elinde çay fincanı, diğerinin önünde açık not defteri ve dolma kalem; bakımlı boyalı saçlar, ivory kazak ve bordo ipek bluz, mermer masada espresso ve tek dahlia; arkada ağaçlı sokak boke; tartı sayılarının ötesinde vücut kompozisyonunu yakın bir arkadaşla sakin konuşarak anlamlandırma teması',
  },
  '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi': {
    src: '/images/library/editorial/hg-menopozda-hekim-hasta-iliskisi.webp',
    alt: 'Sakin sabah ışığında pencere kenarında ahşap masada elinde küçük deri kapaklı not defteri ve dolma kalemiyle düşünceli oturan 50+ Türk kadın; cream keten gömlek, ince altın kolye, omuzlarına dökülen koyu kestane saçlar; defterde sorularını olgunlaştıran bir liste, sade çini desenli porselen çay fincanı, küçük cam vazoda kuru bir bitki, bordo keten peçete; arka planda yumuşak odaklanmamış kitaplık ve manzara çerçevesi; hekimle yapılacak konuşmaya sakin hazırlık ve soruları olgunlaştırma teması',
  },
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'Yaz akşamı İstanbul terasında üç yaşıt kadın sohbeti; ortadaki kadın ipek yelpazeyi hafifçe açmış (sıcak basma referansı subtle), soldaki klasik Türk çay bardağıyla gülerek dinliyor, sağdaki porselen Türk kahvesi fincanı; gülen yüzler ve dingin omuz duruşu, bakımlı boyalı saçlar, ivory + dusty-rose + bordo paleti, golden hour ve Boğaz boke; sıcak basmasıyla yalıtılmış değil sosyal bir akşamın doğal parçası — konforu birlikte yaşama teması',
  },
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: '46 yaş kadın portresi: çene altında kenetlenmiş eller, cream keten gömlek, arka planda yumuşak bordo vazo bokeh; sakin dikkat ve kendi bedenini izleme teması — HRT ilk aylarında izleme defteri çerçevesi.',
  },
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz': {
    src: '/images/library/editorial/by-libido-degisimi.webp',
    alt: 'Geç ikindi ışığında sanat-dolu evinde sessiz bir okuma köşesinde oturan 51 yaş kadın, bordo ipek bluz, içe dönük dingin bakış pencereye yönelik; kucağında açık kitap, yan masada defter, dolma kalem, çay fincanı ve sade kuru çiçek düzeni; kendiyle yeniden tanışma teması',
  },
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi': {
    src: '/images/library/editorial/hg-hormon-tedavisi-karar.webp',
    alt: 'Sakin sabah ışığında ahşap masada açık not defterine yazan 52 yaş kadın, çay fincanı ve bordo aksanlı iç mekân; bilgilendirilmiş karar ve iç tartışma teması',
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
    alt: 'Sabah ışığında ahşap masada yumurtalar, portakal dilimleri, çiğ ceviz ve mavi-yeşil yapraklı sebze; etiketsiz zeytinyağı yanında; D vitamini için besin + güneş + takviye üçgenini sade ve dürüst sunan klinik çerçeve teması',
  },
  '/zamansiz-yasam/deneysel': {
    src: '/images/library/editorial/zy-deneysel.webp',
    alt: 'Akşam çalışma odasında açık ciltli kitap üzerine eğilmiş 50 yaş kadın, pirinç masa lambası sıcak ışık, ciltli kitap rafları bokeh; deneysel yaklaşımlara sakin bilimsel merakla yaklaşma teması',
  },
  '/zamansiz-yasam/deneysel/nad-plus-takviyesi': {
    src: '/images/library/editorial/zy-deneysel.webp',
    alt: 'Akşam çalışma masasında açık ciltli bilimsel dergi ve gözlük; arka planda raf gölgeleri, sakin bilimsel inceleme teması',
  },
  '/zamansiz-yasam/beslenme-yaslanma': {
    src: '/images/library/editorial/still-life-eggs-oil-walnuts.webp',
    alt: 'Sabah ışığında krem keten üzerinde yumurtalar, ceviz, portakal dilimleri, maydanoz ve etiketsiz zeytinyağı; beslenme ve metabolik denge teması',
  },
  '/zamansiz-yasam/kilo-artisi-menopoz': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: '46 yaş kadın yarı gövde, kalın krem speckled kazak, iki el cepte, arkasında yemek masası ve pampas grass bokeh; günlük yaşam içinde sakin duruş — diyet kültüründen uzak, beden değişimini panik dili olmadan değerlendirme teması',
  },
  '/zamansiz-yasam/non-invaziv': {
    src: '/images/library/editorial/zy-non-invaziv.webp',
    alt: 'Ahşap masada keten örtü üzerinde cam sürahi, açık pembe çiçek, seramik kasede pürüzsüz taş ve katlı pamuklu havlu; bordo arka plan — pürüzsüzlük, yenilenme ve zaman metaforu',
  },
  '/beden-yakinlik': {
    src: '/images/heroes/beden-yakinlik.webp',
    alt: 'Yavaş bir sabah banyosunun ardından bir ev-spa terasında iki yaşıt yakın arkadaş (48-52) sessiz bir konuşmada; solda cream waffle bornoz içinde rattan sandalyede bir bacak altına kıvrılmış terakota fincan tutan kadın, sağda dusty-rose linen bornoz içinde loveseat üstünde mid-sentence half-smile; bornozlar tam kapalı, banyo sonrası dingin polished saçlar, no-makeup makyaj; küçük dark wood masada iki fincan + tek peony vazo + cucumber-mint su sürahisi; tall arched window sheer linen perde + honey-toned plaster duvar + fiddle leaf fig; bedenle barışma ve yargısız mahrem konuşma teması',
  },
  '/beden-yakinlik/cilt-gorunum': {
    src: '/images/library/editorial/by-cilt-degisimleri.webp',
    alt: 'Sun-lit İstanbul evi vanity sahnesinde iki yaşıt kadın (48-52); soldaki koyu kestane chin-length bob ile cream ipek kimono robe içinde vanity stool yanında oturmuş, parmak uçları sağ yanağında nazik öz-dokunuş; sağdaki warm mahogany shoulder dalgalı saç ile cream-tan ipek kimono robe içinde aynanın yanında ayakta saç düzeltiyor, sıcak gülümseme; bakımlı boyalı saçlar (gri/silver YOK), mature graceful natural cilt dokusu (smoothed değil), kimono robe omuza kadar tam kapalı; mermer cream-veined vanity counter üzerinde küçük seramik kasede gül suyu, etiketsiz amber zeytinyağı şişesi, beyaz peony vazoda, açık deri kapaklı not defteri ve dolma kalem, klasik Türk çay bardağı altın tabakta buharlı; brass yeşil camlı vanity abajur warm focused light, sheer keten perde sabah ışığı; cilt değişimleriyle barışık olgun bakım rituali teması',
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
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz': {
    src: '/images/library/editorial/zd-stres-yonetimi.webp',
    alt: 'Bahçede taş oturağında sakin bir an, gözleri kapalı kadın; stres azaltma ve dinginlik teması',
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
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Akademisyen ev çalışma odasında pencere kenarında sıcak cream damarlı mermer masada saf natürmort (kişi yok); ortada açık leather-bound akademik not defteri üzerinde elle çizilmiş soyut biyolojik akış diyagramı (organik eğriler ve daireler, etiketsiz) ve dolma kalem, solda açık ciltli akademik kitap ve seramik vazoda peony ile magnolia dalı (botanik aksan), sağda buharlı klasik Türk çay bardağı altın tabakta, brass-rimmed okuma gözlüğü, brass orb paperweight; bordo kadife perde edge, sheer keten perde, dışarıda yumuşak yeşil bokeh, brass yeşil camlı banker abajur warm focused light; estrogen biyolojisinin sağlıkla ilişkisini doğal-akademik bir pencereden okumak teması',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'İstanbul evi cam tavanlı winter garden öğleden sonra ışığında üç yaşıt kadın (62-68) yaşam dolu olgunluk sahnesi; soldaki warm honey-blonde dalgalı saç, soft cream cashmere ve camel pant içinde küçük terracotta saksıda orkide ile özenle ilgileniyor; ortadaki koyu kestane chignon, sage-green ipek bluz ve cream linen pant içinde elinde cam çay bardağı warm gülümsüyor; sağdaki warm mahogany medium-length wavy bob, bordo cashmere kazak içinde kucağında açık botanik dergisi parmak sayfada konuşuyor; bakımlı boyalı saçlar (gri/silver YOK), graceful natural mature cilt; walnut yan masada porselen Türk kahvesi ve tabaklarda lokum + halved nar + incir, cam tavandan dappled afternoon sunlight, fiddle leaf fig + monstera + birds-of-paradise + pampas grass + terracotta saksılar, white-cream wicker mobilya + sage yastıklar; NAD+ ve hücresel yaşlanmaya doğa içinde uzun vadeli sağlık teması',
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
