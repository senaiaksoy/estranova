/**
 * Estranova makale yazar onayı kayıtları.
 *
 * Kullanım:
 *   import { isArticleApproved, approvedArticles } from '../data/article-approvals';
 *   const approval = isArticleApproved('/zamansiz-yasam/kilo-artisi-menopoz/');
 *   if (approval) { console.log(approval.approvedAt); }
 *
 * Bu modül **iç envanter** içindir — site UI'da hiçbir görsel yansıması YOK.
 * Yalnızca yönetim aracı (`npm run articles:status`) tarafından okunur.
 *
 * Default davranış: bir makale bu listede DEĞİLSE "onaysız" sayılır. Üretim
 * sürecinde her makale yazar revizyonu sonrası buraya eklenir.
 *
 * Estranova üretim notu (memory: project_existing_articles_temporary.md):
 * Mevcut ~45 makale yazar onayı alınmamış taslaktır; üretim turunda
 * yazarın doğrulama formu sonrası onaylanır. Berna kilo-artisi-menopoz
 * 2026-04-30'da v2.4 doğrulama formu turunun ardından ilk onaylanan
 * makaledir.
 */

export interface ArticleApproval {
  /** Site içi yol (Astro page pathname). Örn: '/zamansiz-yasam/kilo-artisi-menopoz/' */
  pathname: string;
  /** Yazar slug (writers.ts ile eşleşir) */
  writerSlug: string;
  /** Onay tarihi — ISO format YYYY-MM-DD */
  approvedAt: string;
  /** Onayın kısa zemini — hangi süreçten geçti, hangi tur */
  note: string;
}

/**
 * Yazar tarafından onaylanmış makaleler.
 *
 * **Listede olmayan tüm makaleler "onaysız" sayılır** (default false).
 *
 * Yeni onay eklerken:
 *   1. Bu listeye yeni `ArticleApproval` objesi ekle
 *   2. `note` alanına onay turunun zeminini yaz (form referansı, versiyon)
 *   3. `npm run articles:status` ile rapor doğrula
 */
export const approvedArticles: ArticleApproval[] = [
  {
    pathname: '/beden-yakinlik/menopoz-sonrasi-kilo-vucut-sekillendirme/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-09-21',
    note: 'Op. Dr. Çağrı Sade yazar onayı ve Doç. Dr. Senai Aksoy tıbbi onayı 21 Eylül 2026 tarihinde teyit edildi. Metin, kaynakça düzeltmesiyle birlikte yayımlandı; PubMed PMID 33085282 künyesi Bartow, Szymanski ve Raggio olarak doğrulandı. Özel byline ve kart görselleri bağlandı; üst hero parent Beden & Yakınlık olarak korundu.',
  },
  {
    pathname: '/zamansiz-yasam/vitaminler/kreatin-menopozda-ne-ise-yarar/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-08-08',
    note: 'KC editör doğrudan onayı ve Dr. Alper Mumcu bağımsız tıbbi inceleme onayı — 8 Ağustos 2026. Ekli araştırmadan hazırlanan kreatin-menopoz klinik rehberinde sonuç bazlı çalışma paydaları, kanıt sınırları, sektör ilişkileri, NHANES eşik yorumu, güvenlik sınırları ve kontrollü H2 mizah bütçesi doğrulandı. Özel byline/kart görselleri üretildi; üst hero parent Vitaminler görseli olarak korundu.',
  },
  {
    pathname: '/zihin-denge/duygusal-denge/olcu-panigi-beden-algisi-menopoz/',
    writerSlug: 'basak-pelister',
    approvedAt: '2026-07-16',
    note: 'Başak Pelister author approval received (KC: onay ok). Package moved from onay-bekleyen to onaylanan/2026-07-16_olcu-panigi-beden-algisi-menopoz. Eşik Sayı 03 Kapak 4 published with live route, FAQ schema, static manifest, dossier href and byline/card imagery.',
  },
  {
    pathname: '/editorun-kosesi/temmuz-2026/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-07-16',
    note: 'KC editör doğrudan onayı: Berna Aksoy istisnası kapsamında Eşik Sayı 03 · Tartı Susunca için hazırlanan Temmuz 2026 Sıcacık Köşe yazısı yazar formu olmadan onaylandı. Yazı sayı açılışı, dört kapak parçasının tanıtımı ve sayı okuma daveti olarak yayına alındı; klinik makale olmadığı için Evidence, Bilimsel Editör Notu ve SSS eklenmedi.',
  },
  {
    pathname: '/beden-yakinlik/menopoz-sonrasi-karin-germe/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-06-29',
    note: 'KC editor direct approval: Cagri Sade tarafindan iletilen "Menopoz Sonrasi Karin Germe" metni Estranova makale sablonuna kalibre edildi. Karın germe zayiflama yontemi degildir cercevesi one alindi; garanti/vaat, hizli toparlanma ve operasyon tesvik dili temizlendi. Yag dagilimi, cilt elastikiyeti, bag dokusu, karin duvari gevsekligi, iyilesme sureci ve karar sorulari neutral bilgi diliyle ayrildi. 2026-06-30 humanize turunda baslik beden hissi eksenine cekildi, konfor/konusulur tekrarları azaltildi, muayene odasi sahnesi anonim ve olculu bicimde eklendi. 2026-06-30 makale gorseli uretildi; card/byline yuzeylerine baglandi, ust hero parent Beden & Yakinlik olarak korundu.',
  },
  {
    pathname: '/beden-yakinlik/menopoz-sonrasi-genital-estetik/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-06-29',
    note: 'KC editor direct approval: Cagri Sade tarafindan iletilen "Menopoz Sonrasi Genital Estetik" metni Estranova makale sablonuna kalibre edildi. "Her degisim ameliyat gerektirmez" cercevesi korundu; garanti/vaat, klinik funnel, kesin tedavi dili ve operasyon superlatifleri temizlendi. Labioplasti, labium majus hacim kaybi, cerrahi disi jinekolojik secenekler ve karar sorulari neutral bilgi diliyle ayrildi. 2026-06-29 Higgsfield Nano Banana Pro ile makale kart/byline gorseli uretildi ve articleCardImageByRoute + ArticleAuthorBlock imageSrc yuzeylerine baglandi; ust hero parent Beden & Yakinlik olarak korundu.',
  },
  {
    pathname: '/zamansiz-yasam/menopozda-hangi-hareket/',
    writerSlug: 'anil-yalmaz',
    approvedAt: '2026-06-18',
    note: 'Anıl Yalmaz author approval registered. Warm movement guide article addressing yoga, pilates, HIIT, and resistance training humanized, banned words (\'en iyi\') cleaned, and published to live route with staticArticles manifest and FAQ schema aligned.',
  },
  {
    pathname: '/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-06-05',
    note: 'KC editor direct approval: GHK-Cu ve menopoz cildi referans dosyasi, ekli arastirma raporu temel alinarak topikal kozmetik olasilik, enjeksiyon veri boslugu, FDA 503A Mayis 2026 durumu ve pazarlama-kanit ayrimi ekseninde yayina alindi; kullanici tarafindan uretilen tekstil atolyeli gorsel hero/card/byline yuzeylerine baglandi.',
  },
  {
    pathname: '/zamansiz-yasam/kemik-gucu-kirigi-beklemeden-sorulacak-sorular/',
    writerSlug: 'bulent-aksoy',
    approvedAt: '2026-06-01',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; static manifest ve production route uyumu dogrulandi.',
  },
  {
    pathname: '/zamansiz-yasam/denge-kaybolmadan-ayak-kalca-govde/',
    writerSlug: 'ersin-sarac',
    approvedAt: '2026-06-01',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; static manifest ve production route uyumu dogrulandi.',
  },
  {
    pathname: '/hormonal-gecis/40-sonrasi/yorgunluk-kas-tiroid-metabolizma/',
    writerSlug: 'metin-alis',
    approvedAt: '2026-06-01',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; 40 sonrasi alt hub arsiv baglantisi, static manifest ve production route uyumu dogrulandi.',
  },
  {
    pathname: '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/',
    writerSlug: 'alara-baykent',
    approvedAt: '2026-06-01',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; static manifest ve production route uyumu dogrulandi.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/',
    writerSlug: 'basak-pelister',
    approvedAt: '2026-06-01',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; menopoz alt hub otomatik arsiv kapsami, static manifest ve production route uyumu dogrulandi.',
  },
  {
    pathname: '/zamansiz-yasam/40-sonrasi-harekete-yeniden-baslamak/',
    writerSlug: 'anil-yalmaz',
    approvedAt: '2026-05-26',
    note: 'Anil Yalmaz author approval received in Codex thread on 2026-05-26. Warm first-person editorial draft published with supplied movement image as article byline/card visual; static manifest, FAQ schema and production archive were aligned.',
  },
  {
    pathname: '/hormonal-gecis/40-sonrasi/yuze-yakisan-estetik-dis-karari/',
    writerSlug: 'duygu-karaosmanoglu',
    approvedAt: '2026-05-14',
    note: 'Dt. Duygu Karaosmanoğlu author approval received after revised approval package icerik/yazar-onaylari/duygu-karaosmanoglu/onaylanan/2026-05-11_yuze-yakisan-estetik-dis-karari. Title updated to "Yüzümüzle uyumlu gülüşün kararı"; live route, static manifest, 40 sonrası sub-hub archive and approval inventory were aligned for publication.',
  },
  {
    pathname: '/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/',
    writerSlug: 'bulent-aksoy',
    approvedAt: '2026-05-08',
    note: 'Prof. Dr. Bülent Aksoy author approval received for icerik/yazar-onaylari/bulent-aksoy/onay-bekleyen/2026-05-05_40-sonrasi-diz-agrisi-izlem-mudahale. Approval package was corrected for Turkish PDF headers, conservative follow-up wording, personalized 8-12 week framing, injection expectation language, DVT red-flag coverage and surgery wording; live route/static manifest restored and package moved to onaylanan.',
  },
  {
    pathname: '/hormonal-gecis/40-sonrasi/tiroid-menopoz-yorgunluk-uyku/',
    writerSlug: 'metin-alis',
    approvedAt: '2026-05-08',
    note: 'Dr. Metin Alış author approval received after v2/v3 medical-editorial cleanup. Pending package icerik/yazar-onaylari/metin-alis/onay-bekleyen/2026-05-04_tiroid-menopoz-yorgunluk-uyku was updated for FSH/estradiol testing scope, fT3 routine-panel language, oral/transdermal estrogen distinction, TSH variability wording and red-flag alignment; approved package then moved to onaylanan and live route/static manifest restored.',
  },
  {
    pathname: '/zamansiz-yasam/durus-bozuldugunda-degil-beden-sessizce-sikistiginda/',
    writerSlug: 'isik-selin-gunce',
    approvedAt: '2026-05-07',
    note: 'Işık Selin Günce author approval received from icerik/yazar-onaylari/isik-selin-gunce/onaylanan/2026-05-07_durus-bozuldugunda-degil-beden-sessizce-sikistiginda paketi. Onaylanan taslak Türkçe karakter, makale şablonu ve Selin yazı tonu yönünden son kez temizlenip canlı rota, FAQ schema ve static manifest ile üretim envanterine alındı.',
  },
  {
    pathname: '/zamansiz-yasam/yapay-zeka-hekim-cihaz-dengesi/',
    writerSlug: 'rima-erdemir',
    approvedAt: '2026-05-07',
    note: 'Rima Erdemir author approval received from icerik/yazar-onaylari/rima-erdemir/onaylanan/2026-05-07_yapay-zeka-hekim-cihaz-dengesi paketi. Approved draft, Turkish terminology and Estranova article shell kurallarına hizalanarak canlı rota, FAQ schema ve static manifest ile üretim envanterine alındı.',
  },
  {
    pathname: '/zamansiz-yasam/belden-gelen-agri-kasik-genital-bolge/',
    writerSlug: 'ersin-sarac',
    approvedAt: '2026-05-07',
    note: 'Ersin Saraç author approval received from icerik/yazar-onaylari/ersin-sarac/onaylanan/2026-05-07_belden-gelen-agri-kasik-genital-bolge paketi. Onaylanan taslak temiz UTF-8 yayın kopyasına çevrilip canlı rota, FAQ schema ve static manifest ile üretim envanterine alındı.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/dokuz-yillik-menopoz-sonunda-hrt-karari/',
    writerSlug: 'basak-pelister',
    approvedAt: '2026-05-07',
    note: 'Başak Pelister author approval received from icerik/yazar-onaylari/basak-pelister/onaylanan/basak-test-makale (1).pdf. Approved editorial test draft publication kurallarina hizalanarak site rotasi, FAQ schema ve static manifest ile canli envantere alindi.',
  },
  {
    pathname: '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-05-06',
    note: 'KC editor direct approval: Cilt & Gorunum bolumundeki long-read boslugunu kapatmak icin Yasit Editor tonu ile hazirlandi; kozmetik vaat yerine bariyer, kolajen, gunes korumasi ve dermatolojik degerlendirme cercevesiyle canli envantere alindi.',
  },
  {
    pathname: '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-05-06',
    note: 'KC editor direct approval: Duygusal Denge bolumundeki semptom boslugunu kapatmak icin Estranova Editorial Stil Rehberi / Yasit Editor tonu ile hazirlandi; editorial desk imzasiyla canli envantere alindi.',
  },
  {
    pathname: '/zamansiz-yasam/kilo-artisi-menopoz/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-07-15',
    note: 'KC editör (Dr. Senai Aksoy) doğrudan talimatıyla: Berna Aksoy kendi adıyla yayınlanmasını istemediği için makale Estranova Editörleri kurumsal imzasına taşındı. Gövde metninde tek kişisel anekdot ("Bir arkadaşımın geçen ay anlattığı sahne kafamda kaldı") anonim/genel çerçeveye çevrildi ("Sık karşılaşılan bir sahne şöyle özetlenebilir..."); makalenin geri kalanı zaten yaşıt-kişisel ses taşımıyordu, minimum müdahaleyle Estranova Editorial Gloss\'a hizalandı. publishedDate bugüne çekildi. URL korundu; Berna\'nın önceki onayı geçersiz kalır.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'KC onayıyla Berna imzasından Dr. Senai Aksoy klinik yazar imzasına taşındı. HRT karar hattı doktor uzmanlık alanı gerektirdiği için Berna kişisel/yaşıt pasajları temizlendi; URL korundu.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme/',
    writerSlug: 'alper-mumcu',
    approvedAt: '2026-09-30',
    note: 'Kullanıcı bu sohbette yazar ve tıbbi inceleme onaylarının tamamlandığını bildirdi. Kapsam: Dr. Alper Mumcu yazarlı 30 Eylül 2026 audit/humanize revizyonu, Dr. Senai Aksoy tıbbi incelemesi, kaynaklı izlem/kanama/tarama düzeltmeleri ve beş gerçek Dr. Aksoy yanıtı. Önceki 4 Mayıs 2026 Senai imzasına geçiş kaydı pakette korundu. Aynı gün revizyon 2 (8 H2, sıcaklık katmanı, üç birinci tekil Mumcu yaklaşım cümlesi) için yazar ve tıbbi inceleme onayı da kullanıcı tarafından bildirildi; paket onaylanan/2026-09-30_hrt-yan-etkileri-ve-izleme-revizyon-2/. Bu kayıt commit/push/deploy yetkisi değildir.',
  },
  {
    pathname: '/zamansiz-yasam/beslenme-yaslanma/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Kanal A KAPALI ihlali düzeltildi (Apple Watch + uyku verisi → dolaylı ses), "bilmiyorum" anı Beslenme Şekilleri bölümünde, tabak metaforu kapanışı (bedenle yazışma serisi: mektup → defter → tabak), 5-katmanlı BEN. 2026-05-04 editoryal revizyon: protein gram/kg, D vitamini/B12/kalsiyum/magnezyum ve takviye kararları Berna’nın yaşam ritmi dilinde bırakıldı; hedef/doz/takviye kararı hekim veya diyetisyenle kişiselleştirilir yaklaşımı güçlendirildi. Dördüncü onaylı Estranova makalesi, beslenme imza ekseninde ilk.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Çift Rol ifşası ana konu, kuşak göndermeleri 3 yerde yumuşatıldı, "bilmiyorum" anı Bölüm 04 esim-hekim sonunda (çift ayrıcalık olmasa hangi profil arardım sorusu), masa varyasyonu kapanışı (bedenle yazışma serisi: mektup → soru → defter → tabak → masa), 5-katmanlı BEN. Beşinci onaylı Estranova makalesi, Çift Rol ekseninde merkez yazı.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/menopoz-nedir/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-05-01',
    note: 'Editoryal rehber olarak kalması onaylandı — kurumsal Estranova Editörleri imzası, tanım/evre/sağlık gündemi odağı, promosyon dışı nötr yaklaşım. 2026-05-17 revizyonunda açılış, bölüm lede\'leri ve kapanış daha ilgi çekici editoryal ritme çekildi; tıbbi denge, SSS, schema ve disclaimer yüzeyleri korundu.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'KC onayıyla Berna imzasından Dr. Senai Aksoy klinik yazar imzasına taşındı. Vazomotor belirti tedavisi, HRT ve non-hormonal ilaç seçenekleri doktor uzmanlık alanı gerektirdiği için Senai klinik sesine çevrildi; URL korundu.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-07-15',
    note: 'KC editör (Dr. Senai Aksoy) doğrudan talimatıyla: Berna Aksoy kendi adıyla yayınlanmasını istemediği için makale Estranova Editörleri kurumsal imzasına taşındı. Gövde metni tamamen kurumsal Editorial Gloss tonuna çevrildi: tüm birinci tekil ("ben/benim/kendim") ifadeler ve "hekimimle bir konuşmamızda" kişisel anekdotları kaldırıldı; annem-kızım üç kuşak anekdotu (Bölüm 04) TAMAMEN kaldırılıp yerine "Kuşaklar arasında değişen beden dili" başlıklı genel/anonim bir bölüm yazıldı (ergen/aile mahremiyeti riski de böylece ortadan kalktı). TOC etiketleri kişisel çerçeveden arındırıldı ("Tartıyı kaldırdığım gün" → "Tartının yatıştığı yer", "Hekimimle birlikte vardığımız üç küçük not" → "Üç küçük pratik yön"). Evidence/BEN/Disclaimer/RelatedReadings içerik olarak korundu (zaten nötr). publishedDate bugüne çekildi. URL korundu; Berna\'nın önceki onayı geçersiz kalır.',
  },
  {
    pathname: '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-09-30',
    note: 'Berna doğrudan onayı (form üretmeden) — Önleyici sağlık ekseni + v2.5 humor havuzundan ilk yeni kalıp uygulaması (algoritma şakası #6). Apple Watch + istirahat nabzı Kanal A KAPALI ihlal düzeltildi (dolaylı tansiyon notu hattına), 3 kollektif "biz" düzeltildi, "yaşıt hesabın" yumuşatma artifact algoritma şakasıyla değiştirildi. 2026-05-04 editoryal revizyon: lab markerları/tarama testleri doktor önerisi gibi değil, hekime götürülecek kişisel kayıt dosyası ve tarama takvimi konuşması olarak yeniden kuruldu; Berna imzasında kalması uygun görüldü. Takvim varyasyonu kapanışı (bedenle yazışma serisi 9 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim), 5-katmanlı BEN (klinik zemin + parametre seti + longitudinal trend). Dokuzuncu onaylı Estranova makalesi. 2026-09-30: KC bu sohbette editör/tıbbi onayın tamamlandığını bildirdi. Kapsam: tüm audit/humanize revizyonu, Berna byline korunarak editorial-guide türüne hizalama, tıbbi bilgi notu ve Dr. Aksoy’un dört gerçek SSS yanıtı. Katkı kaydı: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-30_koruyucu-saglik-kayitlari.json. 2026-09-30 ikinci tur (denetim + humanize): soru-başlıklı H2 3→1, Sıcaklık Katmanı (mahcubiyet duygu beat’i, “Önce şunu söyleyeyim” / “İçiniz rahat olsun” teselli, çekmece/e-posta/telefon galerisi somut sahneleri, açılış sorusunun kapanışta geri çağrılması), v2.5 humor #4 soru-yağmurluğu; makale-path hero kaydı silindi, parent hub hero’su kullanılıyor. SSS yanıtları ve tıbbi bilgi notu değişmedi; yeni tıbbi iddia yok. KC bu sohbette “onay” dedi ve commit talimatı verdi. 2026-09-30 üçüncü tur: dış değerlendirme sonrası “İlk 30 Gün” haftalık programı organik sıralamaya çevrildi (yeni ölçüm önerisi yok), “küçük” tekrarı 4→2; KC onayı + commit/push talimatı.',
  },
  {
    pathname: '/zamansiz-yasam/kemik-sagligi-40-sonrasi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-29',
    note: 'KC editör kararıyla makale Dr. Senai Aksoy imzasına taşındı ve gövde metni Senai klinik yazı sesiyle yeniden yazıldı. Production article metadata, approval kaydı ve RSS manifesti Senai imzasına hizalandı; URL korundu (2026-05-02). 2026-09-29: KC editör (Dr. Senai Aksoy) bu revizyon için doğrudan onay verdi (bu sohbetteki bildirim). Revizyon: humanize, kaynak düzeltmeleri, T/Z-skoru tablosu, Dr. Aksoy\'un gerçek SSS yanıtları (3/3, kullanım onaylı) ve Dr. Alper Mumcu\'nun bağımsız tıbbi incelemesi (2026-09-29, tüm metin) ile Bilimsel Editör Notu katkısı. Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-29_kemik-sagligi-40-sonrasi.json. Makale görseli (byline + kart): yapay zekâ üretimi (Dr. Aksoy bildirimi, 2026-09-29; araç/model bildirilmedi). 2026-09-29: Türkiye bağlamı bölümü eklendi (PubMed kaynaklı, ref 10-13); KC editör (Dr. Senai Aksoy) bu bölüm için de doğrudan onay verdi (bu sohbetteki bildirim). Dr. Alper Mumcu bu bölümün bağımsız tıbbi incelemesini onayladı (2026-09-29, kullanıcının bu sohbetteki bildirimi; inceleme tarihi bildirim gününe göre kaydedildi).',
  },
  {
    pathname: '/zamansiz-yasam/glp1-istah-metabolizma-menopoz/',
    writerSlug: 'metin-alis',
    approvedAt: '2026-07-16',
    note: 'KC editör doğrudan onayı: Eşik Sayı 03 · Tartı Susunca kapak yazısı. Metin Alış endokrin sesi — iştah/metabolizma/kuşak haritası; Senai\'nin mevcut GLP-1 klinik karar yazısından ayrışık eksen. Humanize turu sonrası canlıya alındı. Açılış A6, manifesto M5 (kılavuz-hasta-yol paraframe), direk D1+D3. Marka/doz/protokol yok. Özel makale görseli henüz yok — hub hero + yazar portresi.',
  },
  {
    pathname: '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz/',
    writerSlug: 'metin-alis',
    approvedAt: '2026-07-15',
    note: 'KC editör (Dr. Senai Aksoy) doğrudan talimatıyla makale Berna Aksoy imzasından Dr. Metin Alış imzasına taşındı; gövde metni tamamen Metin Alış endokrinolojik sesiyle yeniden yazıldı (kortizol/HPA ekseni eksen — profile.yaml signature_topics "kortizol-stres" ile uyum doğrulandı; Senai/Anıl/Ersin ekseni uyumsuz bulunup elendi). Açılış A9-stili yeni cümle (A3 cooldown\'da), manifesto M2 ("yanlış anlaşılan endokrin tablo, doğru tanıyı geciktiren en sık nedendir" — M3 cooldown\'da), klinik felsefe direkleri D2 (mekanizma→karar zinciri) + D4 (bireyselleştirme) kullanıldı (önceki makalede D1+D3 kullanılmıştı, çeşitlilik korundu). Anekdot yaklaşımı "klinik gözleminde" / "endokrin polikliniğinde" (önceki "klinikte sıklıkla" / "polikliniğe başvuran" cooldown\'da). RedFlagBox 4 madde (Cushing/Addison ayırıcı + panik atak artışı + 2 haftalık işlevsel çöküş). Kapanış 3-parçalı. FAQ tamamen yenilendi (4 soru, kortizol testi + menopoz eşiği + ayırt etme + endokrinoloji değerlendirmesi). BEN 4-katmanlı, Doç. Dr. Senai Aksoy imzalı, standart 3. şahıs şablonu ("Dr. Alış\'ın yazısında..."). publishedDate bugüne çekildi (yeniden yazım/yazar değişimi = fiilen yeni yayın). URL korundu; Berna\'nın bu makaledeki önceki onayı geçersiz kalır.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-02',
    note: 'Berna doğrudan onayı (form üretmeden) — Uyku ekseni (Kanal A KAPALI) — Mayıs 2026 dosyası "Uyuyamadığımız Geceler" zemin yazısı. KRİTİK Kanal A KAPALI 2 ihlal düzeltildi: (1) Bölüm 02 "Ben de elli beşimde, kendi geçişimde... gece üçte gözlerim açılıyordu" → tamamen dolaylı ses ("Tanıdığım bir kadın bu iki düğmenin nasıl bağımsız çalıştığını şöyle anlatmıştı..."); (2) Bölüm 05 "Ben kendim kullanıyorum [HRT]" → "Bunun tamamen kişisel bir karar olduğu altı çizilmesi gereken bir nokta" (uyku ekseninde HRT için kişisel ifşa Kanal A KAPALI sınırına denk gelir). Berna açılışı ("Bir noktada şunu fark ettim: uyku konusunda en çok karıştırılan şey, \'uyudum/uyumadım\' diye işleyen ikili dil"), 4 yerde kollektif "biz" düzeltmesi (konuşacağımız → konuşulacak, pek çoğumuzun → pek çok kadının ×2, pek çoğumuzda → pek çok kadın için), Bölüm 05 v2.5 humor #2 Gece okuma dolaylı ses hattında ("Akşam onda yatağa girmek için planı yapıyorum; on birde elimde kitap; on iki yarımda \'şu paragrafı bitireyim\' diyorum"), Bölüm 06 "Bilmiyorum" anı (aynı yaşta benzer hormonal tabloda iki kadından birinin niçin daha çabuk toparlandığı bireysel ölçekte mümkün değil) + "Bu benim yolum" dengeleyici. Saat varyasyonu kapanışı (bedenle yazışma serisi 12 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim → yapı → nefes → saat), 5-katmanlı BEN (NREM/REM uyku mimarisi + allopregnanolon-GABA-A reseptör dinamiği + kortizol akrofaz erken kayışı + CBT-I bütünleşim + apne/anemi/depresyon ayırıcı tanı). Kanal A KAPALI ekseninde humor kullanım kuralı (dolaylı ses hattında) memory\'e kayıt edildi. On ikinci onaylı Estranova makalesi.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/uyku-bozuklugu-menopoz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'KC onayıyla Berna imzasından Dr. Senai Aksoy klinik yazar imzasına taşındı. HRT, gabapentin, CBT-I, apne, polisomnografi ve uyku tıbbı değerlendirmesi doktor uzmanlık alanı gerektirdiği için klinik sesle revize edildi; URL korundu. 2026-09-29: geniş audit revizyonu (PR #29): TOC hizası, anekdot anlatımı (klinik birleşik gözlem), kadans/antitez temizliği, numaralı atıf [1-4] ve künyeli kaynaklar (PMID doğrulandı), Bilimsel Editör Notu 3 katmana indirildi, SSS 3\'ten 5 soruya çıkarıldı, terminoloji Türkçeleştirildi; modifiedDate 29 Eylül 2026. KC editör (Dr. Senai Aksoy) bu sohbette şu üç noktanın onaylandığını bildirdi (kullanıcının bu sohbetteki bildirimi; tarih bildirim gününe göre kaydedildi): (1) Dr. Alper Mumcu\'nun bağımsız tıbbi incelemesi (Bilimsel Editör Notu imzası ve şema reviewedBy), (2) SSS yanıtlarının Dr. Aksoy tarafından doğrulanması: Dr. Aksoy 5 sorunun yanıtını bu sohbette kendisi verdi, düzenlenmiş hâlleri onayladı ve yanıtlar SSS bloğuna işlendi; kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-29_uyku-bozuklugu-menopoz.json, (3) Bilimsel Editör Notu\'nun klinik gözden geçirmesi.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/aksam-hareketi-uyku-melatonin/',
    writerSlug: 'alara-baykent',
    approvedAt: '2026-05-04',
    note: 'KC editor direct approval for Alara exception author. Pending package icerik/yazar-onaylari/alara-baykent/onay-bekleyen/2026-05-04_aksam-hareketi-uyku-melatonin moved to onaylanan; style-control package preserved as approval trace.',
  },
  {
    pathname: '/hormonal-gecis/perimenopoz/perimenopoz-ilk-isaretler/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-08-03',
    note: 'KC editor approval for yazar degisikligi: Berna Aksoy → Doç. Dr. Senai Aksoy. Makale Senai klinisyen sesiyle ve clinical-guide tipine göre yeniden yazıldı; STRAW+10 ve NICE NG23 kaynakları bağlandı. Onceki Berna onayi 2026-05-04 tarihlidir; bu kayit onun yerine gecmektedir.',
  },
  {
    pathname: '/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-05-04',
    note: 'Prelaunch editoryal reconciliation: site route, RSS manifest ve production build icin editorial desk onayi ile canli envantere alindi.',
  },
  {
    pathname: '/zihin-denge/bilissel-saglik/perimenopozda-zihinsel-bulaniklik/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-05-04',
    note: 'Prelaunch editoryal reconciliation: site route, RSS manifest ve production build icin editorial desk onayi ile canli envantere alindi.',
  },
  {
    pathname: '/beden-yakinlik/cinsel-saglik/libido-degisimi-menopoz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-29',
    note: 'KC editör bu sohbet içinde humanize revizyonunun tıbbi onayını tamamladığını bildirdi ve commit, push, deploy yetkisi verdi. Konuya özgü yazar yanıtı ve doğrudan onay icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-28_libido-degisimi-menopoz.json dosyasında kayıtlıdır. 2026-09-29: kaynak/kanıt düzeltmeleri, testosteron takibi ve 5 gerçek SSS yanıtı (Dr. Aksoy SSS bölümü) Dr. Aksoy tarafından onaylandı; Dr. Alper Mumcu tıbbi incelemesi KC beyanıyla tamamlandı (yazılı not yok). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-29_libido-degisimi-menopoz.json.',
  },
  {
    pathname: '/beden-yakinlik/cinsel-saglik/cinsellikte-agri-menopoz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-29',
    note: 'Prelaunch envanter onayı 2026-05-04. 2026-09-29: humanize revizyonu (gövde, 3 gerçek SSS yanıtı, kanıt-kapsam düzeltmeleri, Bilimsel Editör Notu) KC editör/yazar Dr. Senai Aksoy tarafından onaylandı; commit ve push yetkisi verildi. Dr. Alper Mumcu tıbbi incelemesi KC beyanıyla teyit edildi (yazılı not kayıtta yok). Aynı gün ikinci tur (audit 2–7: 6 H2, tekrar temizliği, Evidence [5] 3–4, hekim gözlemi) Dr. Aksoy tarafından onaylandı; Dr. Alper Mumcu ikinci turu da onayladı (KC beyanı, yazılı not yok). Üçüncü tur dil rötuşu (2aab1be) dahil son hâli de Dr. Alper Mumcu onayladı (KC beyanı, yazılı not yok). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-29_cinsellikte-agri-menopoz.json (revision2).',
  },
  {
    pathname: '/beden-yakinlik/cinsel-saglik/mahrem-bolge-degisimleri-menopoz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: production route ve static article metadata dogrulandi; current Senai signature ile approval kaydi eklendi.',
  },
  {
    pathname: '/beden-yakinlik/pelvik-taban/menopozda-idrar-kacirma-pelvik-taban/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: canli route static manifest ve schema metadata ile birlikte editorial launch setine dahil edildi.',
  },
  {
    pathname: '/bilimsel-pencere/hormonlarin-bilimi/estrogen-biyolojisi-saglik/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: canli route current writer signature ile eslestirildi ve approval kaydi production envanterine eklendi.',
  },
  {
    pathname: '/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-28',
    note: 'KC editör bu sohbet içinde humanize revizyonunun tıbbi onayını verdi; tıbbi denetleyici Dr. Alper Mumcu olarak belirlendi; kaynak bölümü eklendi; commit, push ve deploy yetkisi verildi. Konuya özgü iki yazar yanıtı ve doğrudan onay icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-28_nad-plus-hucresel-yaslanma.json dosyasında kayıtlıdır.',
  },
  {
    pathname: '/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-08',
    note: 'KC editor direct approval (Senai default): Hucreler ve Yaslanma hub icin Epitalon ve telomer biyolojisi derlemesi; saglikli hucre vs kanser hucresi iki yolak ayrimi (telomeraz vs ALT), in vitro 2D kanit sinirliligi ve insan klinik kanit yoklugu dengesi ekseninde yayina alindi; static route, FAQ schema, RSS manifesti ve kategori vitriniyle hizalandi.',
  },
  {
    pathname: '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: static page, schema metadata ve production launch listesi uyumlu hale getirildi.',
  },
  {
    pathname: '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-06',
    note: 'KC editor direct approval: Yeni Arastirmalar bolumu icin hormon tedavisi ve meme kanseri riski dosyasi guncel randomize izlem, buyuk kohort ve risk ayrimi ekseninde yayina alindi; static route, FAQ schema, RSS manifesti ve kategori vitriniyle hizalandi.',
  },
  {
    pathname: '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari/',
    writerSlug: 'ersin-sarac',
    approvedAt: '2026-05-04',
    note: 'Prelaunch editoryal reconciliation: pending package bulunmasina ragmen route zaten production envanterinde oldugu icin launch auditini kapatmak uzere editor direct approval ile kayda alindi.',
  },
  {
    pathname: '/zamansiz-yasam/d-vitamini-rehberi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: canli route current writer signature ile eslestirildi ve approval kaydi production envanterine eklendi.',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-29',
    note: 'Prelaunch inventory reconciliation: static page, schema metadata ve production launch listesi uyumlu hale getirildi. 2026-09-29: ters ölçekli kanıt etiketleri site ölçeğine çevrildi (statin ve migren orta, kalp yetmezliği ve ubiquinol sınırlı) ve kaynak numaralarına bağlandı; Dr. Aksoy onayı, tıbbi onay KC beyanı (yazılı Mumcu notu yok).',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: static page, schema metadata ve production launch listesi uyumlu hale getirildi.',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/nad-plus-takviyesi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: canli route current writer signature ile eslestirildi ve approval kaydi production envanterine eklendi.',
  },
  {
    pathname: '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: static page, schema metadata ve production launch listesi uyumlu hale getirildi.',
  },
  {
    pathname: '/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz/',
    writerSlug: 'alara-baykent',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: Alara imzali canli route approval setine dahil edildi; manifest ve export zinciriyle uyum saglandi.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: canli route static manifest ve schema metadata ile birlikte editorial launch setine dahil edildi.',
  },
  {
    pathname: '/hormonal-gecis/40-sonrasi/tarama-testleri/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-07',
    note: 'KC editor direct approval: audit reconciliation icin canli schema kullanan tarama testleri route production approval setine eklendi; mevcut Senai klinik yazari, static manifest ve article schema ile hizalandi.',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-07',
    note: 'KC editor direct approval: audit reconciliation icin canli deneysel peptid route production approval setine eklendi; static manifest, schema ve Senai klinik yazari uyumu dogrulandi.',
  },
  {
    pathname: '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-08-08',
    note: 'KC editör doğrudan onayı ve Dr. Alper Mumcu bağımsız tıbbi inceleme onayı — 8 Ağustos 2026. Magnezyum-menopoz klinik rehberinde kanıt kalibrasyonları (AGA-ACG 2023, Cochrane 2020, Mah 2021, Schuster 2025 RCT), kaynakça doğrulama, byline/kart görselleri ve schema uyumu tamamlandı.',
  },
  {
    pathname: '/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-07',
    note: 'KC editor direct approval: RSS manifestinde bulunan HRT avantajlari dosyasi production approval setine eklendi; Bilimsel Pencere manifest ve Senai klinik yazari uyumu tamamlandi.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/hrt-ilk-alti-ay/',
    writerSlug: 'demet-kizilkaya',
    approvedAt: '2026-09-30',
    note: 'Yazar onayi (Demet Kizilkaya, KC araciligiyla 2026-09-30) + bilimsel onay (Doc. Dr. Senai Aksoy, 2026-09-30): denetim + humanize revizyonu "HRT — Ilk Aylarin Notlari". Baslik dort aylik kapsama cekildi; desteksiz genel tibbi iddialar govdeden cikarildi, guvenlik ve izlem bilgisi MedicalContextNote icine tasindi; yasit baglari ve teselli ani eklendi. Ek revizyon (2026-09-30): ma paragrafi kisisel gecis anlatimiyla yeniden yazildi; Demet onayi KC araciligiyla. Paket: icerik/yazar-onaylari/demet-kizilkaya/onaylanan/2026-09-30_hrt-ilk-alti-ay/. Onceki kayit (2026-05-10) — KC editor direct approval: Demet Kizilkaya debut yazisi HRT — Ilk Alti Ayin Notlari editorial revize sonrasi onaylandi. Cift Rol gerecesi klinik spesifikler (jel→oral progesteron form degisikligi, endometrium ultrason bulgusu, doktor mektup quote) anonimlestirildi; isyeri kurum adi (JETRO / Japonya Dis Ticaret Teskilati) Demet ricasi geregi yazili metinde yer almaz. Yazar profili writers/demet-kizilkaya/ v3.2 paritesinde scaffolded; Astro rota, static manifest, hub linkage ve hero gorseli birlikte uretim envanterine alindi.',
  },
  {
    pathname: '/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-05-20',
    note: 'Yazar onayi v4 (20 May 2026): Op. Dr. Cagri Sade kendi duzeltme metnini ("Aynaya Bakinca Akla Gelen O Soru" .docx) gonderdi; metin Estranova editoryal sablonuna kalibre edildi. Onceki v3 ben-anlatimi agirligi yazar geri bildirimi uzerine biz/siz inclusive zemine cevrildi; ben-anlatimi yalniz kisisel kani/gozlem anlarinda birakildi. Italik soru-quote diyalogu ("Acaba ne islem yaptirmaliyim?" → "Bu islem yapilabilir mi?" → "Gercekten size uygun mu?") Cagri imzasi olarak yerlesti. "Sonuc Olarak" yumusak normatif kapanis basligi eklendi (TOC ve sayfa). Sade etiket-bullet (5 madde tek kelimelik) yazar ritmi olarak meslulastirildi. CLAUDE.md §1/§4 sert kontrol gecti: marka adi yok, ASPS/ISAPS/IPRAS yok, kendi sitesi/hastane yok, vitrin (25 yil/Aston) yok, once-sonra yok, "en iyi" superlatifi "en yardimci olan" olarak yumusatildi. Evidence pillleri korundu (5/3/3-4/5/2/5). Hero gorseli (zy-yuz-mudahalesi-olcu-sorusu.webp 2400x1000) ve byline gorseli (zy-yuz-mudahalesi-olcu-sorusu-byline.webp 1200x1500) yeni Cagri sahnesiyle (oval ayna + okaliptus + pencere kenari + bordo bluz) iki ayri render olarak yenilendi; alt metinleri "aynaya yeniden bakmak" temasiyla guncellendi. Yazar profili hot.md v0.1 → v0.5: HARD imza biz+siz inclusive birincil + ben-anlatimi ikincil, italik soru-quote HARD imza, "Sonuc Olarak" kapanis basligi imzasi, sade etiket-bullet izni, tek cumlelik paragraf serbestligi. Article-log v4 satiri yazildi. Bilimsel Editor Notu (Doc. Dr. Senai Aksoy) + FAQ + JSON-LD degismedi.',
  },
  {
    pathname: '/beden-yakinlik/meme-kucultme-menopoz-sonrasi-beden-konforu/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-05-30',
    note: 'KC editor direct approval: Cagri Sade tarafindan iletilen meme kucultme ve menopoz sonrasi beden konforu metni Estranova editorial-compliance cizgisine kalibre edilerek yayina alindi. Hasta alintisi, karsilastirmali sonuc anlatimi, kesin fayda vaadi, klinik yonlendirme ve promotional cerrahi dili temizlendi; karar sorulari, beden konforu, mamografi/gecmis saglik zemini ve ttb-saglik bakanligi tanitim sinirlari editor notuyla gorunur kilindi. Ust hero parent Beden & Yakinlik olarak korundu; kullanici sagladigi yatay gorsel kart/arshiv, dikey gorsel ArticleAuthorBlock yuzeyine baglandi.',
  },
  {
    pathname: '/beden-yakinlik/menopoz-sonrasi-goguslerdeki-degisim/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-07-29',
    note: 'KC editor direct approval: Cagri Sade tarafindan iletilen menopoz sonrasi goguslerdeki degisim metni Estranova editoryal ve compliance ilkelerine (CLAUDE.md ve AGENTS.md) uygun sekilde yeniden yazilarak yayina alindi. Promosyonel cerrahi dili, basari vaatleri, klinisyen ustunluk iddialari temizlendi; memeye yag enjeksiyonunun kalsifikasyon riskleri ve rutin tarama takibi zorluklari, diklestirme/protez seceneklerinin trade-off dengeleri hekimin kisisel danisman tonuyla gorunur kilindi. Gorsel sureci make-article-images.mjs ile byline ve kart olarak ayri render edildi; static route, FAQ, JSON-LD semalari ve RSS manifestiyle hizalandi.',
  },

];

/**
 * Verilen makale yolunun yazar onayından geçip geçmediğini döner.
 *
 * @param pathname Site içi yol (örn: '/zamansiz-yasam/kilo-artisi-menopoz/')
 * @returns Onaylıysa ArticleApproval objesi, değilse undefined
 */
export function isArticleApproved(pathname: string): ArticleApproval | undefined {
  return approvedArticles.find((a) => a.pathname === pathname);
}

/**
 * Tüm onaylı makale yollarının Set'i (hızlı lookup için).
 */
export const approvedPathnames: Set<string> = new Set(
  approvedArticles.map((a) => a.pathname),
);
