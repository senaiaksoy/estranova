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

/** Ana sayfa kahraman görseli (lüks editoryal şehirli eşik anı — 2026-05-06 update).
 *  Kaynak 5504px / ~764KB idi; mobil LCP için srcset varyantları (640–1920) üretildi.
 *  `src` fallback olarak 1280w (~38–65KB bandı) kullanır — 5504px orijinali asla serve etme.
 */
export const homePageHero: SubmenuHeroImage & {
  srcset: string;
  sizes: string;
} = {
  src: '/images/hero/home-hero-luxury-editorial-1280.webp',
  srcset: [
    '/images/hero/home-hero-luxury-editorial-640.webp 640w',
    '/images/hero/home-hero-luxury-editorial-960.webp 960w',
    '/images/hero/home-hero-luxury-editorial-1280.webp 1280w',
    '/images/hero/home-hero-luxury-editorial-1600.webp 1600w',
    '/images/hero/home-hero-luxury-editorial-1920.webp 1920w',
  ].join(', '),
  sizes: '100vw',
  alt: 'Deniz kenarındaki bir binanın aydınlık girişinde, krem elbise ve deve tüyü paltoyla yürüyen bir kadın.',
};

export const submenuHeroByRoute: Record<string, SubmenuHeroImage> = {
  '/manifesto/': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada birleşmiş eller ve açık not defteri; ortak masa, sessiz konuşma ve paylaşılmış deneyim teması',
  },
  '/hormonal-gecis/': {
    src: '/images/heroes/hormonal-gecis.webp',
    alt: 'Mutfak tezgâhında kahve içip sohbet eden farklı yaşlardan üç kadın; biri defterine not alıyor.',
  },
  '/hormonal-gecis/perimenopoz/': {
    src: '/images/library/editorial/journey-perimenopoz.webp',
    alt: 'Bir kafenin pencere kenarında defter ve kahveyle sohbet eden iki kadın.',
  },
  '/hormonal-gecis/menopoza-hazirlik/': {
    src: '/images/library/editorial/journey-menopoza-hazirlik.webp',
    alt: 'Kitaplıklı bir odada masada not alan bir kadın ve onu dinleyen arkadaşı.',
  },
  '/hormonal-gecis/menopoz/': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'İstanbul manzaralı bir terasta çay ve kahve eşliğinde gülerek sohbet eden üç kadın; biri yelpazeyle serinliyor.',
  },
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu/': {
    src: '/images/library/editorial/pair-window-cafe-reflection.webp',
    alt: 'Ağaçlı bir sokağa bakan kafe penceresinin önünde karşılıklı oturup konuşan iki kadın.',
  },
  '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi/': {
    src: '/images/library/editorial/hg-menopozda-hekim-hasta-iliskisi.webp',
    alt: 'Aydınlık bir mutfakta kahvaltı için incir ve nar dilimleyen bir kadın.',
  },
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/': {
    src: '/images/library/editorial/journey-menopoz.webp',
    alt: 'İstanbul terasında sohbet eden üç olgun kadın; ortadaki kadının elinde bir yelpaze',
  },
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme/': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Elini omzuna koymuş, sakin bir ifadeyle bakan koyu saçlı bir kadının portresi.',
  },
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/': {
    src: '/images/library/editorial/by-libido-degisimi.webp',
    alt: 'Bahçe terasında sakin bir sohbet paylaşan iki olgun kadın',
  },
  '/hormonal-gecis/40-sonrasi/': {
    src: '/images/library/editorial/journey-40-sonrasi.webp',
    alt: 'İstanbul Boğazı kıyısındaki sahil yolunda yan yana yürüyen üç kadın.',
  },
  '/hormonal-gecis/40-sonrasi/tarama-testleri/': {
    src: '/images/library/editorial/hg-tarama-testleri.webp',
    alt: 'Pencere kenarındaki ahşap masada takvim, açık defter, bir fincan çay ve vazoda pembe gül.',
  },
  '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi/': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında ahşap masada açık ajanda, çay bardağı ve not alınmış sağlık başlıkları; menopoza hazırlıkta sakin takip ve kontrol teması',
  },
  '/zamansiz-yasam/': {
    src: '/images/heroes/zamansiz-yasam.webp',
    alt: 'Zeytin ağacının altında meyve ve kahvaltılıklarla dolu bir sofrada sohbet eden üç kadın.',
  },
  '/zamansiz-yasam/vitaminler/': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Ahşap tahta üzerinde yumurta, portakal dilimleri, badem, ceviz, maydanoz ve zeytinyağı.',
  },
  '/zamansiz-yasam/d-vitamini-rehberi/': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Ahşap tahta üzerinde yumurta, portakal dilimleri, badem, ceviz, maydanoz ve zeytinyağı.',
  },
  '/zamansiz-yasam/deneysel/': {
    src: '/images/library/editorial/zy-deneysel.webp',
    alt: 'Seramik atölyesinde çömlekçi çarkında bir kap şekillendiren olgun bir kadın.',
  },
  '/zamansiz-yasam/kilo-artisi-menopoz/': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: 'Balkondaki saksılardan taze ot toplayan, elinde sebze tabağı tutan önlüklü bir kadın.',
  },
  '/zamansiz-yasam/non-invaziv/': {
    src: '/images/library/editorial/zy-non-invaziv.webp',
    alt: 'Ahşap masada cam su sürahisi, pembe bir çiçek, kasede düz bir taş ve katlanmış havlu.',
  },
  '/beden-yakinlik/': {
    src: '/images/heroes/beden-yakinlik.webp',
    alt: 'Aydınlık bir odada, krem ve pembe bornozlarıyla karşılıklı oturup sohbet eden iki kadın.',
  },
  '/beden-yakinlik/cilt-gorunum/': {
    src: '/images/library/editorial/by-cilt-degisimleri.webp',
    alt: 'Krem rengi saten sabahlıklarla mermer bir tuvalet masasının aynası önünde iki kadın; biri yanağına dokunuyor, diğeri saçını düzeltiyor.',
  },
  '/beden-yakinlik/cinsel-saglik/': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Sabah ışığında keten örtü üzerinde şakayık, bir bardak su ve katlı pamuklu bez.',
  },
  '/beden-yakinlik/pelvik-taban/': {
    src: '/images/library/editorial/by-idrar-kacirma-pelvik-taban.webp',
    alt: 'Yoga matında bağdaş kurmuş iki kadın; biri gözleri kapalı, elleri karnında nefes çalışması yapıyor, diğeri gülümseyerek ona bakıyor. Yapay zekâ ile üretilmiş temsili görsel.',
  },
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Sabah ışığında keten örtü üzerinde şakayık, bir bardak su, katlı pamuklu bez ve açık bir defter; günlük özenli bakım teması',
  },
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/': {
    src: '/images/library/editorial/introspective-burgundy-accent.webp',
    alt: 'Loş ışıklı bir okuma köşesinde yastık ve bordo şal; yan sehpada açık defter, çay bardağı ve şakayıklar.',
  },
  '/zihin-denge/': {
    src: '/images/heroes/zihin-denge.webp',
    alt: 'Aydınlık bir pilates stüdyosunda dersten sonra sohbet eden üç kadın.',
  },
  '/zihin-denge/uyku-dinlenme/': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Yatağın yanındaki ahşap sehpada açık defter, çay bardağı, kol saati ve vazoda lavanta dalı.',
  },
  '/zihin-denge/duygusal-denge/': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Oturma odasında koltuklarda karşılıklı oturup sohbet eden iki kadın; aradaki sehpada çay, defter ve şakayıklar.',
  },
  '/zihin-denge/bilissel-saglik/': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Kitaplıklı bir odada masada birlikte kitap okuyup not alan iki kadın.',
  },
  '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Kitaplıklı bir odada masada birlikte kitap okuyup not alan iki kadın.',
  },
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Yatağın yanındaki ahşap sehpada açık defter, çay bardağı, kol saati ve vazoda lavanta dalı.',
  },
  '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/': {
    src: '/images/library/editorial/zd-perimenopoz-uyku-sabah-defter.webp',
    alt: 'Pencere kenarında elinde çay bardağıyla defterine not alırken dışarı bakan bir kadın.',
  },
  '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/': {
    src: '/images/library/editorial/zd-gece-terlemesi-uyku-utancsiz.webp',
    alt: 'Yeşil örtülü bir yatak; komodinde lamba, gözlük, defter ve kurutulmuş lavanta.',
  },
  '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin/': {
    src: '/images/library/editorial/zd-aksam-hareketi-uyku-melatonin.webp',
    alt: 'Şehir manzaralı bir odada koltukta oturup boynunu ve omzunu esneten bir kadın.',
  },
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/': {
    src: '/images/library/editorial/zd-stres-yonetimi.webp',
    alt: 'Bitkilerle dolu aydınlık bir odada hasır koltuklarda çay içip sohbet eden iki kadın.',
  },
  '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/': {
    src: '/images/library/editorial/morning-window-reader-ai.webp',
    alt: 'Oturma odasında koltuklarda karşılıklı oturup sohbet eden iki kadın; aradaki sehpada çay, defter ve şakayıklar.',
  },
  '/bilimsel-pencere/': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Kitaplarla dolu bir çalışma odasında kitap ve kahve eşliğinde sohbet eden iki kadın.',
  },
  '/bilimsel-pencere/hormonlarin-bilimi/': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Mermer masada elle çizilmiş bir şema bulunan açık defter, dolma kalem, çay bardağı ve vazoda şakayık.',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'Cam tavanlı kış bahçesinde sohbet eden üç kadın; biri orkideyle ilgileniyor, biri çay içiyor, biri bir kitabı gösteriyor.',
  },
  '/bilimsel-pencere/yeni-arastirmalar/': {
    src: '/images/heroes/bilimsel-pencere.webp',
    alt: 'Kitaplarla dolu bir çalışma odasında, biri deri koltukta açık bir kitap tutan, diğeri elinde fincanla masaya yaslanan iki kadın.',
  },
  '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo/': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: 'Balkondaki saksılardan taze ot toplayan, elinde sebze tabağı tutan önlüklü bir kadın.',
  },
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi.webp',
    alt: 'Mermer masada elle çizilmiş bir şema bulunan açık defter, dolma kalem, çay bardağı ve vazoda şakayık.',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'Cam tavanlı kış bahçesinde sohbet eden üç kadın; biri orkideyle ilgileniyor, biri çay içiyor, biri bir kitabı gösteriyor',
  },
  '/zamansiz-yasam/deneysel/ghk-cu-menopoz-cilt/': {
    src: '/images/library/editorial/ghk-cu-menopoz-cilt-hero.jpg',
    alt: 'Aydınlık bir atölyede pencere önündeki ince kumaşı eliyle inceleyen kıvırcık saçlı bir kadın.',
  },
};

export const articleCardImageByRoute: Record<string, ArticleCardImage> = {
  '/zamansiz-yasam/deneysel/resveratrol-takviyesi/': {
    src: '/images/library/editorial/resveratrol-takviyesi.webp',
    alt: 'Ege’de bir bağda masadaki üzüm sepetinin başında gülüşen iki kadın; resveratrol yazısı için kart görseli, yapay zekâ ile üretilmiş temsili görsel',
  },
  '/zamansiz-yasam/sarkopeni-40-sonrasi-sessiz-kas-kaybi/': {
    src: '/images/library/editorial/anil-yalmaz-sarkopeni-kart.webp',
    alt: 'Güneşli bir İstanbul sokağında, Boğaz manzarası önünde taş merdivenden hasır sepetle çıkan kadın; sarkopeni ve 40 sonrası kas gücü yazısı için kart görseli',
  },
  '/zamansiz-yasam/menopozda-hangi-hareket/': {
    src: '/images/library/editorial/menopozda-hangi-hareket.webp',
    alt: 'Gün ışığı alan bir odada, kollarını iki yana açarak yoga duruşu yapan kadın',
  },
  '/hormonal-gecis/menopoz/dokuz-yillik-menopoz-sonunda-hrt-karari/': {
    src: '/images/library/editorial/basak-pelister-hrt-karari.webp',
    alt: 'Deniz manzaralı bir balkonda bordo şal içinde kahvesini tutan, uzağa bakan bir kadın.',
  },
  '/beden-yakinlik/menopoz-sonrasi-kilo-vucut-sekillendirme/': {
    src: '/images/library/editorial/cagri-sade-menopoz-sonrasi-kilo-vucut-sekillendirme.webp',
    alt: 'Şehir manzaralı bir yatak odasında boy aynasının önünde pantolonunun belini düzelten bir kadın.',
  },
  '/zamansiz-yasam/vitaminler/kreatin-menopozda-ne-ise-yarar/': {
    src: '/images/library/editorial/zy-kreatin-menopoz.webp',
    alt: 'Aydınlık bir odada yerde oturan, elinde su bardağı tutan spor kıyafetli bir kadın.',
  },
  '/editorun-kosesi/mayis-2026/': {
    src: '/images/library/editorial/mayis-2026-sicacik-kose.webp',
    alt: 'Pencere kenarında sabah ışığı alan kıvrık keten yatak ve sandalyede katlanmış hırka; Geceler dosyası Sıcacık Köşe kart görseli',
  },
  '/editorun-kosesi/haziran-2026/': {
    src: '/images/library/editorial/haziran-2026-sicacik-kose.webp',
    alt: 'Taş merdivende krem renkli bez çanta taşıyan bir kadının elleri; Güç Eşiği Sıcacık Köşe kart görseli',
  },
  '/editorun-kosesi/temmuz-2026/': {
    src: '/images/library/editorial/temmuz-2026-sicacik-kose.webp',
    alt: 'Yaz sabahı gardırop önünde keten bluz seçen kadın; Tartı Susunca Sıcacık Köşe kart görseli',
  },
  '/zihin-denge/duygusal-denge/olcu-panigi-beden-algisi-menopoz/': {
    src: '/images/library/editorial/basak-olcu-panigi-beden-algisi.webp',
    alt: 'Ayna önünde kıyafet oturuşuna bakan 40+ kadın; ölçü paniği ve beden algısı yazısı için editoryal kart görseli',
  },
  '/beden-yakinlik/menopoz-sonrasi-karin-germe/': {
    src: '/images/library/editorial/cagri-sade-menopoz-sonrasi-karin-germe.webp',
    alt: 'Boy aynasının yanında, eli belinde pencereye bakan pembe kazaklı bir kadın.',
  },
  '/beden-yakinlik/cilt-gorunum/kore-kremleri-icerik-vaat-kanit/': {
    src: '/images/library/editorial/kore-kremleri-icerik-vaat-kanit.webp',
    alt: 'Gün batımı ışığında sokakta yan dönmüş bakan, vitrin camında yansıması görünen bir kadının yakın planı; temsili görsel',
  },
  '/beden-yakinlik/menopoz-sonrasi-genital-estetik/': {
    src: '/images/library/editorial/cagri-sade-menopoz-sonrasi-genital-estetik.webp',
    alt: 'Aydınlık bir odada oval aynanın yanında, eli karnında pencereden dışarı bakan bornozlu bir kadın.',
  },
  '/beden-yakinlik/menopoz-sonrasi-goguslerdeki-degisim/': {
    src: '/images/library/editorial/menopoz-sonrasi-goguslerdeki-degisim.webp',
    alt: 'Oturma odasında pencerenin önünde durup dışarı bakan bir kadın.',
  },
  '/beden-yakinlik/meme-kucultme-menopoz-sonrasi-beden-konforu/': {
    src: '/images/library/editorial/cagri-sade-meme-kucultme-beden-konforu.webp',
    alt: 'Şehir manzaralı bir odada boy aynasının karşısında omzuna dokunan bir kadın.',
  },
  '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/': {
    src: '/images/library/editorial/basak-guc-canta-hafifletmek.webp',
    alt: 'Pencere kenarında gardırobun önünde gülümseyerek kıyafet seçen bir kadın; yerde deri bir çanta.',
  },
  '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/': {
    src: '/images/library/editorial/alara-yaz-baslamadan-bedeni-uyandirmak.webp',
    alt: 'Deniz kenarında omzunda bir matla yürüyüp uzağa bakan bir kadın.',
  },
  '/zamansiz-yasam/denge-kaybolmadan-ayak-kalca-govde/': {
    src: '/images/library/editorial/ersin-denge-ayak-kalca-govde.webp',
    alt: 'Ev koridorunda eliyle duvara dokunarak dengesini yoklayan bir kadın.',
  },
  '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/': {
    src: '/images/library/editorial/bulent-kemik-gucu-kirik-beklemeden.webp',
    alt: 'Deniz manzaralı bir pencerenin yanında elinde havluyla duran bordo bluzlu bir kadın.',
  },
  '/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/': {
    src: '/images/library/editorial/zy-diz-agrisi-ortopedik-takip.png',
    alt: 'Boğaz manzaralı pencerenin önünde koltukta oturup dışarı bakan bir kadın; masada bir bardak çay.',
  },
  '/hormonal-gecis/40-sonrasi/yuze-yakisan-estetik-dis-karari/': {
    src: '/images/library/editorial/duygu-karaosmanoglu-yuze-yakisan-card.webp',
    alt: 'Sıcak ışıklı bir iç mekanda el aynası tutarak kendi doğal gülüşüne bakan 50\'li yaşlardaki kadın portresi; estetik diş kararında yüze yakışanı arayan kişiselleştirme yaklaşımının editoryal kart görseli',
  },
  '/zamansiz-yasam/durus-bozuldugunda-degil-beden-sessizce-sikistiginda/': {
    src: '/images/library/editorial/isik-selin-gunce-durus-beden-farkindaligi-byline.jpg',
    alt: 'Aydınlık bir odada pencerenin önünde boynunu nazikçe esneten bir kadın.',
  },
  '/zamansiz-yasam/belden-gelen-agri-kasik-genital-bolge/': {
    src: '/images/library/editorial/ersin-sarac-belden-gelen-agri-byline.jpg',
    alt: 'Oturma odasında bir pufun üzerinde otururken eliyle belini tutan bir kadın.',
  },
  '/hormonal-gecis/menopoz/hrt-ilk-alti-ay/': {
    src: '/images/library/editorial/hg-hrt-ilk-alti-ay.webp',
    alt: 'Mutfak masasında elindeki fincana bakan düşünceli bir kadın.',
  },
  '/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu/': {
    src: '/images/library/editorial/zy-yuz-mudahalesi-olcu-sorusu.webp',
    alt: 'Pencere kenarındaki masada, önünde açık defter, el aynası ve fincanla dışarı bakan bir kadın.',
  },
  '/zamansiz-yasam/yapay-zeka-hekim-cihaz-dengesi/': {
    src: '/images/library/editorial/rima-erdemir-yapay-zeka-hekim-cihaz-byline.jpg',
    alt: 'Çalışma masasında tablet ekranına bakan bir kadın; yanında akıllı saat, defter ve çay.',
  },
  '/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari/': {
    src: '/images/library/editorial/senai-hrt-avantajlari-window-card.webp',
    alt: 'Krem tonlu bir odada pencere kenarında duran, camel ceketli düşünceli kadın portresi; HRT avantajları yazısı için editoryal kart görseli',
  },
  '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/': {
    src: '/images/library/editorial/zy-magnezyum-menopoz.webp',
    alt: 'Aydınlık bir iç mekânda elinde su şişesi, omzunda çanta ve paltoyla duran bir kadın.',
  },
  '/zamansiz-yasam/vitaminler/fitoestrojenler-menopozda-ne-ise-yarar/': {
    src: '/images/library/editorial/zy-fitoestrojenler-menopoz.webp',
    alt: 'Güneşli bir mutfak tezgâhında yoğurt kasesine keten tohumu serpen, keten gömlekli ve gülümseyen kadın; yanında soya, nohut ve otlar; yapay zekâ ile üretilmiş temsili görsel.',
  },
  '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz/': {
    src: '/images/library/editorial/zy-peptid-kullanimlari-menopoz.webp',
    alt: 'Şehir manzaralı geniş pencerenin önünde eli çenesinde düşünen bordo hırkalı bir kadın.',
  },
  '/hormonal-gecis/40-sonrasi/tarama-testleri/': {
    src: '/images/library/editorial/hg-tarama-testleri-vapur.webp',
    alt: 'Vapur güvertesinde telefondaki takvime bakıp gülen iki kadın; yanlarında simit.',
  },
  '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski/': {
    src: '/images/library/editorial/senai-hrt-meme-kanseri-author-block-v2.png',
    alt: 'Krem tonlu aydınlık bir odada düşünen olgun kadın portresi; HRT ve meme kanseri riski yazısı için sakin editoryal kart görseli',
  },
  '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/': {
    src: '/images/library/editorial/perimenopozda-kaygi-artisi.webp',
    alt: 'Pencere önünde birbirine dönerek sohbet eden iki kadın',
  },
  '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi/': {
    src: '/images/library/editorial/hg-tarama-testleri.webp',
    alt: 'Açık takvim, not defteri ve çay fincanıyla düzenlenmiş masa; menopoza hazırlıkta ilk kontrol dosyası için sakin kart görseli',
  },
  '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/': {
    src: '/images/library/editorial/zd-bellek-odaklanma.webp',
    alt: 'Aydınlık bir kütüphane köşesinde birlikte not alan iki yaşıt kadın; perimenopozda zihinsel bulanıklık yazısı için kart görseli',
  },
  '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler/': {
    src: '/images/library/editorial/hg-perimenopoz-ilk-isaretler.webp',
    alt: 'Aydınlık bir iç mekanda bedensel değişimi fark eden 40+ kadın portresi; perimenopozun ilk işaretleri yazısı için kart görseli',
  },
  '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin/': {
    src: '/images/library/editorial/zd-aksam-hareketi-uyku-melatonin.webp',
    alt: 'Akşam ışığında evde nazik beden hareketi yapan kadın; uyku, melatonin ve akşam hareketi yazısı için kart görseli',
  },
  '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari/': {
    src: '/images/library/editorial/kas-iskelet-yuruyus-kart.webp',
    alt: 'Ağaçlı bir parkta sabah yürüyüşü yapan, yeşil bluz ve krem eşarplı orta yaşlı bir kadın; 40 sonrası kas-iskelet ağrıları yazısı için kart görseli',
  },
  '/zamansiz-yasam/40-sonrasi-harekete-yeniden-baslamak/': {
    src: '/images/library/editorial/anil-yalmaz-harekete-yeniden-baslamak-kart.webp',
    alt: 'Boğaz manzaralı bir oturma odasında bir dizini kaldırmış, pencereden dışarı bakan bir kadın; 40 sonrası harekete yeniden başlamak yazısı için kart görseli',
  },
  '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo/': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: 'Ev balkonunda taze otlarla ilgilenen krem tonlarda giyinmiş kadın; menopozal kilo ve metabolik sağlık yazısı için kart görseli',
  },
  '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi/': {
    src: '/images/library/editorial/zy-coq10-kanit-notlari-kart.webp',
    alt: 'Sıcak ışıklı çalışma masasında açık defter, dolma kalem, ince belli bardakta çay, ceviz kâsesi ve kahverengi cam şişe; CoQ10 takviyesi ve kanıt okuması yazısı için kart görseli',
  },
  '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu/': {
    src: '/images/library/editorial/zy-deneysel-tedavi-kanit-masasi.webp',
    alt: 'Sade bir masada araştırma notları ve kanıt okuma atmosferi; deneysel tedavi okuma kılavuzu için kart görseli',
  },
  '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim/': {
    src: '/images/library/editorial/zy-non-invaziv-cilt-cihazlari.webp',
    alt: 'Sakin bakım atmosferinde non-invaziv cilt cihazları temasını taşıyan editoryal görsel; HIFU, RF ve mikroakım yazısı için kart görseli',
  },
  '/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz/': {
    src: '/images/library/editorial/zy-sauna-soguk-dus-rituel.webp',
    alt: 'Sade bir iyi oluş ritüeli atmosferinde sıcak-soğuk dengesi; sauna ve soğuk duş yazısı için kart görseli',
  },
  '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban/': {
    src: '/images/library/editorial/by-idrar-kacirma-yuruyus.webp',
    alt: 'Boğaz kıyısındaki yürüyüş yolunda yan yana yürüyen iki kadın; biri ipek başörtülü, ikisi de gülümseyerek birbirine bakıyor. Yapay zekâ ile üretilmiş temsili görsel.',
  },
  '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu/': {
    src: '/images/library/editorial/pair-window-cafe-reflection.webp',
    alt: 'Pencere kenarında iki yaşıt kadının sakin sohbeti; tartı ve vücut kompozisyonu yazısı için kart görseli',
  },
  '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi/': {
    src: '/images/library/editorial/hg-menopozda-hekim-hasta-iliskisi.webp',
    alt: 'Sabah ışığında mutfakta sağlık notlarını düşünerek güne hazırlanan kadın; menopozda hekim-hasta ilişkisi yazısı için kart görseli',
  },
  '/zamansiz-yasam/kilo-artisi-menopoz/': {
    src: '/images/library/editorial/casual-cream-sweater-pampas.webp',
    alt: 'Balkonda taze otlarla ilgilenen 40+ kadın; menopozda kilo artışını doğal beslenme ve bedenle bağ içinde ele alan kart görseli',
  },
  '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/': {
    src: '/images/library/editorial/zd-perimenopoz-uyku-sabah-defter.webp',
    alt: 'Erken sabah ışığında uyku günlüğüne not alan kadın; perimenopozda uykunun değişen yanını anlatan kart görseli',
  },
  '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/': {
    src: '/images/library/editorial/zd-gece-terlemesi-uyku-utancsiz.webp',
    alt: 'Serin sabah öncesi ışığında sade yatak odası ve su bardağı; gece terlemesi ve uyku yazısı için kart görseli',
  },
  '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/': {
    src: '/images/library/editorial/libido-degisimi-menopoz.webp',
    alt: 'Bahçe terasında sohbet eden iki olgun kadın; menopozda libido değişimi',
  },
  '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme/': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Sabah ışığında birleşmiş eller ve açık not defteri; HRT yan etkileri ve izleme yazısı için sakin kart görseli',
  },
  '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/': {
    src: '/images/library/editorial/sicak-basmasi-gece-terlemesi.webp',
    alt: 'İstanbul terasında yelpazeyle sohbet eden üç olgun kadın; sıcak basması ve gece terlemesi',
  },
  '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari/': {
    src: '/images/library/editorial/introspective-clasped-hands.webp',
    alt: 'Açık not defteri ve sakin el duruşu; menopoza hazırlıkta koruyucu sağlık kayıtları yazısı için kart görseli',
  },
  '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi/': {
    src: '/images/library/editorial/hg-hormon-tedavisi-karar.webp',
    alt: 'Boğaz sahilinde yürüyerek konuşan iki yaşıt kadın; hormon tedavisi karar rehberi için kart görseli',
  },
  '/zamansiz-yasam/deneysel/nad-plus-takviyesi/': {
    src: '/images/library/editorial/nad-plus-takviyesi.webp',
    alt: 'Gün ışığı alan bir masada açık defterini inceleyen olgun kadın',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/': {
    src: '/images/library/editorial/bp-nad-plus.webp',
    alt: 'Cam tavanlı kış bahçesinde olgun kadınların doğayla iç içe sohbeti; NAD+ ve hücresel yaşlanma yazısı için kart görseli',
  },
  '/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma/': {
    src: '/images/library/editorial/epitalon-telomer-yaslanma.webp',
    alt: 'Cam tavanlı kış bahçesinde sohbet eden üç kadın; biri orkideyle ilgileniyor, biri çay içiyor, biri bir kitabı gösteriyor',
  },
  '/zamansiz-yasam/deneysel/bpc-157-tb-500-menopoz/': {
    src: '/images/library/editorial/bpc-157-tb-500-menopoz.webp',
    alt: 'Doğal ışık alan sakin bir iç mekânda omzuna elini koyarak düşünen bir kadın; BPC-157 ve TB-500 yazısı için kart görseli, yapay zekâ ile üretilmiş temsili görsel',
  },
  '/zamansiz-yasam/deneysel/rapamisin-yaslanma-ilaci-kanit-ve-risk/': {
    src: '/images/library/editorial/rapamisin-yaslanma-ilaci-kanit-ve-risk.webp',
    alt: 'Cam seranın taş yolunda elinde kitapla yavaş yürüyen 50 yaş civarı bir kadın; rapamisin ve yaşlanma yazısı için kart görseli, yapay zekâ ile üretilmiş temsili görsel',
  },
  '/zamansiz-yasam/deneysel/mots-c-peptidi-kanit-ve-risk/': {
    src: '/images/library/editorial/mots-c-peptidi-kanit-ve-risk.webp',
    alt: 'Ağaçlıklı bir İstanbul sokağında apartman kapısından çıkıp gülerek birlikte yürüyüşe başlayan 50 yaş civarı iki kadın; MOTS-c yazısı için kart görseli, yapay zekâ ile üretilmiş temsili görsel',
  },
  '/zamansiz-yasam/deneysel/metformin-uzun-yasam-etiket-disi/': {
    src: '/images/library/editorial/metformin-uzun-yasam-etiket-disi.webp',
    alt: 'Pencere ışığında masada defter, kalem ve su bardağının yanında uzaklara bakan 50 yaş civarı bir kadın; metformin ve uzun yaşam yazısı için kart görseli, yapay zekâ ile üretilmiş temsili görsel',
  },
  '/zamansiz-yasam/deneysel/ghk-cu-menopoz-cilt/': {
    src: '/images/library/editorial/ghk-cu-menopoz-cilt-card.webp',
    alt: 'Aydınlık tekstil atölyesinde transparan kumaş ve bakır iplikleri inceleyen olgun kadın; GHK-Cu ve menopoz cildi yazısı için kart görseli',
  },
  '/zamansiz-yasam/d-vitamini-rehberi/': {
    src: '/images/library/editorial/zy-vitaminler.webp',
    alt: 'Sabah ışığında yumurta, ceviz, yeşillik ve sade besin hazırlığı; D vitamini rehberi için kart görseli',
  },
  '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/': {
    src: '/images/library/editorial/by-vajinal-saglik.webp',
    alt: 'Keten örtü üzerinde çiçek, su bardağı ve pamuklu dokular; menopozda cinsellikte ağrı yazısı için sakin kart görseli',
  },
  '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/': {
    src: '/images/library/editorial/mahrem-bolge-degisimleri-menopoz.webp',
    alt: 'Keten örtü üzerinde bir bardak su, katlanmış havlu, şakayık ve kalem.',
  },
  '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/': {
    src: '/images/library/editorial/zd-stres-yonetimi.webp',
    alt: 'Botanik dolu bir ev köşesinde sakin sohbet eden iki yaşıt kadın; menopozda stres yönetimi yazısı için kart görseli',
  },
  '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/': {
    src: '/images/library/editorial/zd-uyku-bozuklugu.webp',
    alt: 'Yumuşak sabah ışığında uyku günlüğü, çay bardağı ve başucu masası; menopozda uyku bozukluğu yazısı için kart görseli',
  },
  '/zamansiz-yasam/beslenme-yaslanma/': {
    src: '/images/library/editorial/beslenme-yaslanma.webp',
    alt: 'Sade kahvaltı hazırlığı ve gerçek besinlerle düzenlenmiş masa; beslenme ve yaşlanma yazısı için kart görseli',
  },
  '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/': {
    src: '/images/library/editorial/bp-estrogen-biyolojisi-muze.webp',
    alt: 'Boğaz manzaralı bir müze salonunda tavandan sarkan molekül heykelini gösteren iki kadın.',
  },
  '/hormonal-gecis/menopoz/menopoz-nedir/': {
    src: '/images/library/editorial/hg-menopoz-nedir.webp',
    alt: 'Sakin ve güvenli bir geçiş hissi taşıyan olgun kadın portresi; menopoz nedir temel rehberi için kart görseli',
  },
};

export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') return pathname;
  return `${pathname.replace(/\/+$/, '')}/`;
}

export function getSubmenuHeroImage(pathname: string): SubmenuHeroImage | undefined {
  const p = normalizePathname(pathname);
  return submenuHeroByRoute[p];
}

export function getArticleCardImage(pathname: string): ArticleCardImage | undefined {
  const p = normalizePathname(pathname);
  return articleCardImageByRoute[p];
}
