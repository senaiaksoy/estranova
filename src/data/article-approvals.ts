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
    approvedAt: '2026-10-13',
    note: 'Op. Dr. Çağrı Sade yazar onayı ve Doç. Dr. Senai Aksoy tıbbi onayı 21 Eylül 2026 tarihinde teyit edildi. Metin, kaynakça düzeltmesiyle birlikte yayımlandı; PubMed PMID 33085282 künyesi Bartow, Szymanski ve Raggio olarak doğrulandı. Özel byline ve kart görselleri bağlandı; üst hero parent Beden & Yakınlık olarak korundu. 2026-10-13: audit + humanize revizyonu (kaynak 5 PubMed 37990743 yanlış atfı kaldırıldı; liposuction-insülin ifadesi kanıtla uyumlu hale getirildi; atıf sırası ve içindekiler düzeltildi) Op. Dr. Çağrı Sade yazar onayı ve Doç. Dr. Senai Aksoy tıbbi onayı ile yayına alındı. Paket: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-13_menopoz-sonrasi-kilo-vucut-sekillendirme-audit-humanize/. 2026-10-13 ikinci audit: kanıt düzeyleri, H2 girişleri, terim açıklamaları, byline alt metni ve görünür inceleyen imzası; StatPearls içeriği doğrulandı. Yazar ve tıbbi onay KC bildirimiyle. Paket: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-13_menopoz-sonrasi-kilo-vucut-sekillendirme-audit-2/. Bu kayıt push/deploy yetkisi değildir.',
  },
  {
    pathname: '/zamansiz-yasam/vitaminler/kreatin-menopozda-ne-ise-yarar/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-01',
    note: 'KC editör doğrudan onayı ve Dr. Alper Mumcu bağımsız tıbbi inceleme onayı — 8 Ağustos 2026. Ekli araştırmadan hazırlanan kreatin-menopoz klinik rehberinde sonuç bazlı çalışma paydaları, kanıt sınırları, sektör ilişkileri, NHANES eşik yorumu, güvenlik sınırları ve kontrollü H2 mizah bütçesi doğrulandı. Özel byline/kart görselleri üretildi; üst hero parent Vitaminler görseli olarak korundu. 2026-10-01: iki geçişli audit/humanize revizyonu (soru-başlıklı H2 7→1, antitez seyreltme, teselli/duygu cümlesi, beş gerçek Dr. Aksoy SSS yanıtı ve onaylı üç küçük düzeltme) KC editör/yazar Dr. Senai Aksoy tarafından onaylandı; Dr. Alper Mumcu bu revizyonun bağımsız tıbbi incelemesini onayladı (KC bildirimi, 2026-10-01; belge repoda değil). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-01_kreatin-menopozda-ne-ise-yarar.json. Bu kayıt push/deploy yetkisi değildir.',
  },
  {
    pathname: '/zihin-denge/duygusal-denge/olcu-panigi-beden-algisi-menopoz/',
    writerSlug: 'basak-pelister',
    approvedAt: '2026-10-03',
    note: 'Başak Pelister author approval received (KC: onay ok). Package moved from onay-bekleyen to onaylanan/2026-07-16_olcu-panigi-beden-algisi-menopoz. Eşik Sayı 03 Kapak 4 published with live route, FAQ schema, static manifest, dossier href and byline/card imagery. 2026-10-03: revizyon (son soru bölümü 5→3 ve yazar sesiyle yeniden yazıldı, “X değil, Y” ve üç nokta seyreltildi, self-care Türkçeleştirildi) için yazar onayı KC bildirimiyle alındı (“başak onayladı”, sohbet; form JSON yanıtı yok). Paket: onaylanan/2026-10-03_olcu-panigi-beden-algisi-menopoz.',
  },
  {
    pathname: '/editorun-kosesi/mayis-2026/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-10-02',
    note: 'KC editör doğrudan onayı (Berna Aksoy istisnası): Eşik Sayı 01 · Geceler için 1 Mayıs 2026’da yayımlanan Mayıs 2026 Sıcacık Köşe yazısı. Yayın sırasında onay kaydı eklenmemişti; KC 2 Ekim 2026’da yazının onaylı yayımlandığını teyit etti ve kayıt geriye dönük işlendi.',
  },
  {
    pathname: '/editorun-kosesi/haziran-2026/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-10-02',
    note: 'KC editör doğrudan onayı (Berna Aksoy istisnası): Eşik Sayı 02 · Güç Eşiği için 1 Haziran 2026’da yayımlanan Haziran 2026 Sıcacık Köşe yazısı. Yayın sırasında onay kaydı eklenmemişti; KC 2 Ekim 2026’da yazının onaylı yayımlandığını teyit etti ve kayıt geriye dönük işlendi.',
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
    approvedAt: '2026-10-20',
    note: 'Op. Dr. Çağrı Sade yazar onayı ve Doç. Dr. Senai Aksoy bağımsız tıbbi inceleme onayı 20 Ekim 2026 tarihinde sözlü olarak (KC) revize metin için alındı. Revizyon kapsamı: 9 doğrulanmış kaynak (Greendale 2019 SWAN kohortu, ASPS abdominoplasti kılavuz sayfaları, NHS kalıcı şişkinlik/abdominoplasti/pulmoner emboli) ve iddiaya bağlı satır içi atıflar; SWAN yağ/yağsız doku ölçümü sınırı (<Evidence level={3} />) ve cerrahi/aday/risk sınırları (<Evidence level={4} />); kalıcı şişkinlikte tıbbi değerlendirme ve ameliyat sonrası acil pulmoner emboli uyarıları; Çağrı Sade’nin 3 yeni klinik yanıtı (karın içi yağlanma vs. deri sarkması erteleme ölçütü, mini vs. tam karın germede kesi uzunluğu ve göbek deliği yeri, ilk iki haftada günlük ev düzeni ve pıhtı riskini azaltan kısa yürüyüş dengesi); korunan iki gerçek muayene gözlemi ve Bilimsel Editör Notu altında görünür inceleyen imzası (Doç. Dr. Senai Aksoy). Paket: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-20_menopoz-sonrasi-karin-germe-audit-humanize/. Önceki onay (29 Haziran 2026): KC editor direct approval: Cagri Sade tarafindan iletilen "Menopoz Sonrasi Karin Germe" metni Estranova makale sablonuna kalibre edildi. Karın germe zayiflama yontemi degildir cercevesi one alindi; garanti/vaat, hizli toparlanma ve operasyon tesvik dili temizlendi. Yag dagilimi, cilt elastikiyeti, bag dokusu, karin duvari gevsekligi, iyilesme sureci ve karar sorulari neutral bilgi diliyle ayrildi. 2026-06-30 humanize turunda baslik beden hissi eksenine cekildi, konfor/konusulur tekrarları azaltildi, muayene odasi sahnesi anonim ve olculu bicimde eklendi. 2026-06-30 makale gorseli uretildi; card/byline yuzeylerine baglandi, ust hero parent Beden & Yakinlik olarak korundu.',
  },
  {
    pathname: '/beden-yakinlik/menopoz-sonrasi-genital-estetik/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-10-14',
    note: 'Çağrı Sade yazar onayı ve tıbbi onay 14 Ekim 2026 tarihinde sözlü olarak (KC) revize metin için alındı. Revizyon kapsamı: beş kaynak ve iddiaya bağlı atıflar, cerrahi riskler ve kanıt sınırlılığı, yeni yara/kitle/geçmeyen kaşıntı/menopoz sonrası kanama için değerlendirme uyarısı, yağ aktarımının cerrahi girişim olduğu (SSS 4 dahil), lazer/RF’nin deneysel niteliği, tekrar azaltma, dolu tıbbi uyarı ve şema görsel adresi düzeltmesi. SSS beş soru olarak article-faqs.ts içinde güncellendi. Önceki onay (29 Haziran 2026): KC editor direct approval: Cagri Sade tarafindan iletilen "Menopoz Sonrasi Genital Estetik" metni Estranova makale sablonuna kalibre edildi. "Her degisim ameliyat gerektirmez" cercevesi korundu; garanti/vaat, klinik funnel, kesin tedavi dili ve operasyon superlatifleri temizlendi. Labioplasti, labium majus hacim kaybi, cerrahi disi jinekolojik secenekler ve karar sorulari neutral bilgi diliyle ayrildi. 2026-06-29 Higgsfield Nano Banana Pro ile makale kart/byline gorseli uretildi ve articleCardImageByRoute + ArticleAuthorBlock imageSrc yuzeylerine baglandi; ust hero parent Beden & Yakinlik olarak korundu.',
  },
  {
    pathname: '/zamansiz-yasam/menopozda-hangi-hareket/',
    writerSlug: 'anil-yalmaz',
    approvedAt: '2026-10-14',
    note: 'Anıl Yalmaz author approval and medical/control approval received 14 Ekim 2026 (sözlü, KC) for the revised text. Revision covers the full audit and humanize pass: pilates and HIIT claims narrowed to evidence-specific outcomes, emergency neurological red flags clarified, recovery-over-following-days guidance added, Markdown and template residue removed, and no FAQ section (no SSS data or schema). Byline and card visuals bound to ArticleAuthorBlock and articleCardImageByRoute; hero stays with the Zamansız Yaşam parent. Original 18 Haziran 2026 approval covered the earlier version only.',
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
    approvedAt: '2026-10-13',
    note: 'Kullanici bildirimi (13 Ekim 2026): Prof. Dr. Bulent Aksoy ve Dr. Alper Mumcu onaylari son surumu kapsiyor. Kayit: icerik/yazar-onaylari/bulent-aksoy/onaylanan/2026-10-13_kemik-gucu-son-surum/. Kemik sagligi-40-sonrasi (Senai) birlestirilip yonlendirildi. Onceki kayit: 2026-06-01 Prelaunch.',
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
    approvedAt: '2026-10-12',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; 40 sonrasi alt hub arsiv baglantisi, static manifest ve production route uyumu dogrulandi. 12 Ekim 2026 revizyonu (Codex audit/humanize + ikinci geçiş: inkâr çerçevesinin azaltılması, editör notu imzası, kırmızı bayrak atıfları, NG23 menopoz–uyku bağlantısı; Dr. Metin Alış’ın üç soruya yanıtlarının gövdeye işlenmesi; kansızlıksız demir eksikliği için Vaucher 2012 ve Houston 2018 kaynakları; toplam 14 kaynak, 5 SSS): kullanıcı (Dr. Senai Aksoy) bu sohbette “Metin Bey’in ve bilimsel editör onayları tamam.” diyerek Dr. Metin Alış yazar onayını ve bilimsel editör onayını teyit etti. Paket icerik/yazar-onaylari/metin-alis/onaylanan/2026-10-12_yorgunluk-kas-tiroid-metabolizma altına taşındı.',
  },
  {
    pathname: '/zamansiz-yasam/yaz-baslamadan-bedeni-uyandirmak/',
    writerSlug: 'alara-baykent',
    approvedAt: '2026-10-15',
    note: 'Kullanici (Dr. Senai Aksoy) 15 Ekim 2026 sohbetinde “Revizyon metnini ve degisen tibbi notu onayliyorum.” diyerek revizyon metnini ve degisen tibbi notu sozlu onayladi. Kapsam: 15 Ekim 2026 yerel audit/humanize revizyonu (denize cikmadan once sahnesi acilisa tasindi; MedicalContextNote; sicak havada 30 dakika/112 yonlendirmesi; acil belirtiler ayrildi; manifest aciklamasi). Anne referanslarinin teyidi kullanici tarafindan 15 Ekim 2026’da yapildi. Sonradan eklenen “Hava da Planin Bir Parcasi” bolumundeki yasat bagi cumlesi (“Belki siz de yuruyuse cikmadan once hava durumuna bakiyorsunuzdur.”) sozlu onayla henuz kapsanmiyor; kullanici tarafindan 15 Ekim 2026’da sozlu olarak onaylandi. Eski 1 Haziran 2026 onayi bu revizyonu kapsamaz. Yayin, commit ve deploy bu kayitla yetkilendirilmis degildir.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak/',
    writerSlug: 'basak-pelister',
    approvedAt: '2026-10-15',
    note: 'Prelaunch inventory reconciliation: 1 Haziran 2026 tarihli canli route RSS manifestinde oldugu icin approval envanterine eklendi; menopoz alt hub otomatik arsiv kapsami, static manifest ve production route uyumu dogrulandi. KC sozlu onayi — 15 Ekim 2026 — revizyon yayina alindi: canli metin revizyonla degistirildi (Self-care bolumu ve kapanis paragrafi kaldirildi; dort soru basligi duz cumleye cevrildi; kemik sagligi cumlesi icin kaynak NAMS 2022, PMID 35797481, audit kaydinda). Basak Pelister onay verdi (KC bildirdi: “Başak onaylıyor”); canli metin farki icerik/taslaklar/guc-cantayi-daha-hafif-hazirlamak-canli-fark.md dosyasinda. Tibbi inceleme Dr. Alper Mumcu tarafindan onaylandi (KC bildirdi, sozlu; 15 Ekim 2026). Reviewer gorunurlugu Dr. Alper Mumcu olarak guncellendi. approvedAt bu yayinla birlikte 2026-10-15 olarak guncellendi.',
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
    approvedAt: '2026-10-15',
    note: 'YENİDEN ONAY 15 Ekim 2026: KC (Doç. Dr. Senai Aksoy) son metne (kaynak SHA-256 086af115…) yazar onayı ve tıbbi onayı sohbette sözlü verdi; form, JSON yanıtı veya onay paketi yok. Kaynaksız iki şeffaf plak cümlesinden plak kullanımı/pekiştirme cümlesi 15 Ekim 2026 ek revizyonunda çıkarıldı; mine azaltma cümlesi Dahhas ve ark. (Cureus 2024, PMC11032144; anlatısal derleme) ile desteklendi, kaynak 12 olarak eklendi. Son metin SHA-256 14fcfd6b… ve bu revizyon KC (Doç. Dr. Senai Aksoy) tarafından sohbette sözlü olarak yazar ve tıbbi onay olarak kabul edildi (’yap’ talimatı ve ardından ’yazar ve tıbbi onay olarak kabul et’; form veya paket yok). Onayın kapsadığı değişiklikler: 15 Ekim sonrası kaynak denetimi düzeltmeleri (aşınma cümlesi ve atfı kaldırıldı, kaynak 1/7/8 etiketleri düzeltildi; SHA-256 c746cda5…) ve ardından geniş audit/humanize revizyonu (kaynak 1 kemik yüksekliği ayrımı, kaynak 6 laminat sağkalım/komplikasyon cümlesi, kaynak 7 atfının daraltılması, tekrar azaltma, iki H2 metni; ikinci audit düzeltmeleri: kalıp göçü, kaynak 8 tek çalışma ifadesi, kaynak 11 Evidence 2, dil düzeltmeleri; son kaynak SHA-256 086af115…) yapıldı ve bu yeniden onayla kapsandı. 15 Ekim 2026 revizyonu (kaynak SHA-256 5a548970…; önceki 2026-05-14 onayı bu revizyonu kapsamaz): yazar onayı ve tıbbi onay KC (Doç. Dr. Senai Aksoy) tarafından sohbette sözlü verildi; form, JSON yanıtı veya onay paketi yok. Kapsam: bruksizm alt grubu ayrımı (uyku bruksizmi–ön bölge seramik laminat; genel seramik analizinde ilişki gösterilmedi; Evidence 1/zayıf, PMID 28967401), osteoporoz/dişeti, peroksit, osteonekroz ifadelerinin açıklaması, Kaynaklar girişindeki editör cümlesinin kaldırılması, SSS satır birleşmesi düzeltmesi, modifiedDate/lastUpdated 15 Ekim 2026. Yeni tıbbi iddia eklenmedi. Canlı yayın için commit/push/deploy ayrıca yetki gerektirir. Önceki kayıt: Dt. Duygu Karaosmanoğlu author approval received after revised approval package icerik/yazar-onaylari/duygu-karaosmanoglu/onaylanan/2026-05-11_yuze-yakisan-estetik-dis-karari. Title updated to "Yüzümüzle uyumlu gülüşün kararı"; live route, static manifest, 40 sonrası sub-hub archive and approval inventory were aligned for publication.',
  },
  {
    pathname: '/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/',
    writerSlug: 'bulent-aksoy',
    approvedAt: '2026-10-14',
    note: 'Prof. Dr. Bülent Aksoy author approval received for icerik/yazar-onaylari/bulent-aksoy/onay-bekleyen/2026-05-05_40-sonrasi-diz-agrisi-izlem-mudahale. Approval package was corrected for Turkish PDF headers, conservative follow-up wording, personalized 8-12 week framing, injection expectation language, DVT red-flag coverage and surgery wording; live route/static manifest restored and package moved to onaylanan. 14 Ekim 2026 revizyonu (revizyon 7, kaynak SHA-256 c9642e12…): yazar onayı kullanıcı bildirimiyle kaydedildi; bilimsel inceleme Doç. Dr. Senai Aksoy tarafından 14 Ekim 2026 tarihinde tamamlandı (düzeltme istenmedi). Kaynak doğrulaması NICE NG226, BMJ 2017, Cochrane 2024, AAOS 2024, NHS ve Maturitas (Critchlow 2023) üzerinden yapıldı. Kayıt: icerik/yazar-onaylari/bulent-aksoy/onaylanan/2026-10-14_40-sonrasi-diz-agrisi-izlem-mudahale/.',
  },
  {
    pathname: '/hormonal-gecis/40-sonrasi/tiroid-menopoz-yorgunluk-uyku/',
    writerSlug: 'metin-alis',
    approvedAt: '2026-10-12',
    note: 'Dr. Metin Alış author approval received after v2/v3 medical-editorial cleanup. 12 Ekim 2026 revizyonu (humanize, SSS şeması ile görünür SSS eşitlemesi, levotiroksin ve kalsiyum/demir aralığı düzeltmesi, kaynaksız sayıların kaldırılması): yazar onayı ve kullanıcı (Dr. Senai Aksoy) onayı teyit edildi. Pending package icerik/yazar-onaylari/metin-alis/onay-bekleyen/2026-05-04_tiroid-menopoz-yorgunluk-uyku was updated for FSH/estradiol testing scope, fT3 routine-panel language, oral/transdermal estrogen distinction, TSH variability wording and red-flag alignment; approved package then moved to onaylanan and live route/static manifest restored. 12 Ekim 2026 ikinci kapsamlı audit/humanize/fix revizyonu: kullanıcı bu sohbette “Metin alış ve bilimsel editör inceleme onayları tamam.” diyerek Dr. Metin Alış ve bilimsel editör onaylarının tamamlandığını teyit etti. Kapsam: normal TSH/subklinik ayrımı, koşullu test seçimi, oral östrojen–levotiroksin etkileşimi, kalsiyum/demir ile en az 4 saat ara, FSH/östradiol sınırı, kaynaklar, SSS, BEN ve görsel alt metinleri. Commit/push/deploy bu onayla yapılmadı.',
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
    approvedAt: '2026-10-01',
    note: 'Rima Erdemir author approval received from icerik/yazar-onaylari/rima-erdemir/onaylanan/2026-05-07_yapay-zeka-hekim-cihaz-dengesi paketi. Approved draft, Turkish terminology and Estranova article shell kurallarına hizalanarak canlı rota, FAQ schema ve static manifest ile üretim envanterine alındı. 2026-10-01: KC bu sohbette Rima’nın revizyon onayını bildirdi (“Rima onay tamam”). Kapsam: Codex audit/fix (spot yeniden yazıldı, uyku evresi uygulama tahmini olarak netleşti, gövdedeki genel yarar Evidence 3–4 etiketleri çıkarıldı, uyku sınırlaması MedicalContextNote’ta 3/5 ile toplandı) + Claude sıcaklık turu (Rima’nın “merak” yanıtıyla duygu anı, 1. ve 4. bölüme siz bağı, 4. bölüm tekrarı birleştirildi, teselli anı, yaş alma satırı ve merak geri çağırması). Yeni tıbbi iddia yok; SSS yok. Evidence 3–4 etiketlerinin gövdeden kaldırılması Dr. Aksoy tıbbi editör onayıyla kesinleşti (2026-10-01). Paket: icerik/yazar-onaylari/rima-erdemir/onaylanan/2026-10-01_yapay-zeka-hekim-cihaz-dengesi-humanize.',
  },
  {
    pathname: '/zamansiz-yasam/belden-gelen-agri-kasik-genital-bolge/',
    writerSlug: 'ersin-sarac',
    approvedAt: '2026-05-07',
    note: 'Ersin Saraç author approval received from icerik/yazar-onaylari/ersin-sarac/onaylanan/2026-05-07_belden-gelen-agri-kasik-genital-bolge paketi. Onaylanan taslak temiz UTF-8 yayın kopyasına çevrilip canlı rota, FAQ schema ve static manifest ile üretim envanterine alındı. 2026-10-14 revizyon 9 (commit e94acaf9, audit ve humanizasyon): yazar onayı KC bildirimiyle alındı (sohbet; form JSON yanıtı yok). Tıbbi onay Doç. Dr. Senai Aksoy tarafından 2026-10-14 tarihinde verildi. Yayın için dal birleştirme ayrıca beklemededir.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/dokuz-yillik-menopoz-sonunda-hrt-karari/',
    writerSlug: 'basak-pelister',
    approvedAt: '2026-10-13',
    note: 'Başak Pelister author approval received from icerik/yazar-onaylari/basak-pelister/onaylanan/basak-test-makale (1).pdf. Approved editorial test draft publication kurallarina hizalanarak site rotasi, FAQ schema ve static manifest ile canli envantere alindi. 2026-10-13: geniş audit revizyonu (dil düzeltmeleri, tekrar azaltma, “X değil, Y” ~8→3, menopozdan geçen süre bilgisi ve tıbbi nota pıhtılaşma/inme, Başak imzası için soru/üç nokta/itiraf) için yazar onayı KC bildirimiyle alındı (sohbet; form JSON yanıtı yok). Tıbbi bilgi kontrolü Dr. Alper Mumcu (incelendi, onaylandı; yazarın hekimi Senai Aksoy olduğu için varsayılan inceleyici değiştirildi). Paket: onaylanan/2026-10-13_dokuz-yillik-menopoz-sonunda-hrt-karari. 2026-10-13 ikinci revizyon (medeni durum ifadesi çıkarıldı, genel tıbbi bilgi ve Evidence ayrı tıbbi nota taşındı, geçmiş karar gerekçesi tahmini kaldırıldı): yazar onayı ve Dr. Alper Mumcu tıbbi not onayı KC bildirimiyle alındı (sohbet; form JSON yanıtı yok). Paket: onaylanan/2026-10-13_dokuz-yillik-menopoz-sonunda-hrt-karari-rev2.',
  },
  {
    pathname: '/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/',
    writerSlug: 'gonca-gokdemir',
    approvedAt: '2026-10-14',
    note: 'Prof. Dr. Gonca Gökdemir yazar onayı ve Doç. Dr. Senai Aksoy tıbbi onayı KC bildirimiyle sözlü alındı (14 Ekim 2026; form, JSON yanıtı veya onay paketi yok). Onaylanan kapsam: 14 Ekim 2026 revizyonu — melanin/melanosit ayrımı, kolajen takviyesi netleştirmesi, retinoid tanımı ve gebelik uyarısı, güneş koruması (UVA/UVB, SPF 30), sigara/kaş-kirpik/tırnak kaynak ayrımı, işlem sonrası uyarılar, SSS 3 soruya indirildi, 11 girdilik Kaynaklar bölümü, OG kart görseli bağlantısı. Bilimsel Editör Notu korundu. Önceki 2 Ekim 2026 onayı bu revizyonu kapsamaz. Kaynak 8 ve 11 iki bağlantı içerir. 14 Ekim 2026 ikinci tur (geniş audit + humanize): yazar onayı ve tıbbi onay KC tarafından sohbette sözlü verildi (form, JSON yanıtı veya onay paketi yok). Kapsam: 7 soru-H2’den 6’sı düz başlığa çevrildi; Kısa Özet 63→53 kelime; 1. bölüme Gonca Gökdemir ağzından genelleştirilmiş poliklinik gözlemi (tek hasta, alıntı yok), adlandırılmış duygu (mahcubiyet) ve teselli cümlesi; kolajen ve değerlendirme bölümlerine somut ayrıntı; 7. bölümde RedFlagBox ile birebir tekrarlanan H3 listesi kaldırıldı; parfüm/peeling cümlesine kaynak 1, 7, 11; SSS 1 yanıtına hassasiyet ve parfümsüz ürün (kaynak 1); manifest açıklaması sayfa açıklamasıyla eşitlendi; kart alt metni görsele göre yeniden yazıldı; kart crop’u AI olarak IPTC etiketlendi; makale yolundaki eski submenuHeroByRoute girdisi kaldırıldı (hero görseli değişmedi). Yeni tıbbi iddia eklenmedi; Evidence düzeyleri, RedFlagBox ve Bilimsel Editör Notu korundu.',
  },
  {
    pathname: '/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/',
    writerSlug: 'estranova-editorial',
    approvedAt: '2026-05-06',
    note: 'KC editor direct approval: Duygusal Denge bolumundeki semptom boslugunu kapatmak icin Estranova Editorial Stil Rehberi / Yasit Editor tonu ile hazirlandi; editorial desk imzasiyla canli envantere alindi. 20 Ekim 2026 revizyonu: KC editör onayı ve Doç. Dr. Senai Aksoy tıbbi onayı KC bildirimiyle sohbette sözlü verildi (form veya onay paketi yok). Kapsam: göğüs ağrısı/baskı, çarpıntı ve kendine zarar verme düşüncesi için güvenlik ayrımı; hormonal nedensellik sınırı; psikolojik destek; Kısa Özet, SSS başlığı ve gövde dili düzeltmeleri; kaynak izi docs/editorial kaydında. Bilimsel Editör Notu ve tıbbi sorumluluk uyarısı değişmedi. Son metin (audit + humanize turu, commit 4f884137; göğüs ağrısı eşiği özetle hizalandı) için KC editör onayı ve Doç. Dr. Senai Aksoy tıbbi onayı 20 Ekim 2026\'da sohbette sözlü verildi. Önceki 6 Mayıs 2026 onayı bu revizyonu kapsamaz.',
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
    approvedAt: '2026-10-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Çift Rol ifşası ana konu, kuşak göndermeleri 3 yerde yumuşatıldı, "bilmiyorum" anı Bölüm 04 esim-hekim sonunda (çift ayrıcalık olmasa hangi profil arardım sorusu), masa varyasyonu kapanışı (bedenle yazışma serisi: mektup → soru → defter → tabak → masa), 5-katmanlı BEN. Beşinci onaylı Estranova makalesi, Çift Rol ekseninde merkez yazı. 2026-10-01: KC bu sohbette Berna/KC editör onayının ve revize Tıbbi Bilgi Notu için tıbbi incelemenin tamamlandığını bildirdi (“onay tamam”). Kapsam: iki turlu audit/humanize/fix revizyonu — experience-essay türünde yaşıt sesi; açıklamasız HRT ve “paydaş” temizliği; yaşam kalitesi/memnuniyet sonuç vaatleri çıkarıldı; yakın aile tedavisi etik notu genel yaklaşım + sınırlı istisnalarla MedicalContextNote’a taşındı; Sıcaklık Katmanı (çevrem tekrarı 11→5, “ikinci kez sormanın ayıbı yok” tesellisi, utanç duygu beat’i, kollektif “biz” düzeltmesi); humor #3 goji (korundu) + #1 aile şakası. Yeni tıbbi iddia yok; SSS yok. Paket: icerik/yazar-onaylari/berna-aksoy/onaylanan/2026-10-01_menopozda-hekim-hasta-iliskisi-humanize.',
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
    writerSlug: 'isik-selin-gunce',
    approvedAt: '2026-10-15',
    note: 'KC editör (Dr. Senai Aksoy) kararıyla makale Dr. Metin Alış imzasından Işık Selin Günçe imzasına taşındı (Metin zihin-denge 2/5, Işık 5/5); gövde Işık’ın yaşıt sesiyle tamamen yeniden yazıldı ve ikinci geçişte persona uyumu güçlendirildi. Sözlü yazar onayı ve MedicalContextNote tıbbi bilgi notu onayı (Doç. Dr. Senai Aksoy) 2026-10-15 bu oturumda alındı. Tür experience-essay (non-clinical): MedicalContextNote, numarasız bölümler, TOC ve SSS yok (onaylanan 4 SSS şablon denetimi gereği çıkarıldı; metinleri onay paketinde sss-yayindan-cikarilan.md). Açılış A2 (Bodrum sabahı), anekdot sahne öncesi nefes/çarpıntı, manifesto Kalıp 6 (kendi bedenime reçete), direkler sahne + Bodrum, başlık yarım bırakma üç nokta, kapanış 3 parçalı. Mizah H1 tek dokunuş; RedFlagBox H0. publishedDate bugüne çekildi (yazar değişimi = fiilen yeni yayın, 2026-07-15 Berna→Metin emsali). URL korundu; Metin Alış’ın bu makaledeki önceki onayı geçersiz kalır. 2026-10-15 audit revizyonu: KC bu oturumda bildirdi — "Selin sözlü onay verdi, ben de tıbbi notu ve güvenlik dilini onaylıyorum." Kapsam: kortizole indirgenen açıklama kaldırıldı, kişisel çarpıntıya neden atfı çıkarıldı, egzersiz-uyku iddiası yumuşatıldı (Evidence 2), östrojen-stres duyarlılığı Evidence 2’ye çekildi, nefes/yürüyüş güvenlik sınırları geri getirildi, göğüs ağrısı/nefes darlığı panik atak varsayımından ayrıldı, ruh sağlığı uyarısı üç basamağa ayrıldı; byline imagePosition/imageAlt eklendi. Paket: icerik/yazar-onaylari/isik-selin-gunce/onaylanan/2026-10-15_stres-yonetimi-menopoz-audit-revizyon/. Yayın (commit/push) ayrı izin bekliyor. 2026-10-15 tur 3 (geniş audit + humanize): KC bu oturumda bildirdi — "Güvenlik dili değişikliklerini (G1–G4) onaylıyorum; ara basamakta “hemen” kalsın. Selin de dil/ses değişikliklerini sözlü onayladı." Kapsam: 112 geri geldi, ruh sağlığı basamakları (ertelemeyin / hemen / 112-acil) ayrıştı, göğüs ağrısı kuralı tek maddede toplandı, Tıbbi Bilgi Notu yürüyüş güvenliği sadeleşti, gövdedeki kişisel hekim eşiği kaldırıldı; anlam kırılmaları (her gece perde, alarm/saat, başlık-gövde uyumu), antitez yığını ve tekrarlar düzeltildi. Paket: onaylanan/2026-10-15_stres-yonetimi-menopoz-humanize-tur3/. Yayın (commit/push) ayrı izin bekliyor.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan/',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-09-30',
    note: 'Berna doğrudan onayı (form üretmeden) — Uyku ekseni (Kanal A KAPALI) — Mayıs 2026 dosyası "Uyuyamadığımız Geceler" zemin yazısı. KRİTİK Kanal A KAPALI 2 ihlal düzeltildi: (1) Bölüm 02 "Ben de elli beşimde, kendi geçişimde... gece üçte gözlerim açılıyordu" → tamamen dolaylı ses ("Tanıdığım bir kadın bu iki düğmenin nasıl bağımsız çalıştığını şöyle anlatmıştı..."); (2) Bölüm 05 "Ben kendim kullanıyorum [HRT]" → "Bunun tamamen kişisel bir karar olduğu altı çizilmesi gereken bir nokta" (uyku ekseninde HRT için kişisel ifşa Kanal A KAPALI sınırına denk gelir). Berna açılışı ("Bir noktada şunu fark ettim: uyku konusunda en çok karıştırılan şey, \'uyudum/uyumadım\' diye işleyen ikili dil"), 4 yerde kollektif "biz" düzeltmesi (konuşacağımız → konuşulacak, pek çoğumuzun → pek çok kadının ×2, pek çoğumuzda → pek çok kadın için), Bölüm 05 v2.5 humor #2 Gece okuma dolaylı ses hattında ("Akşam onda yatağa girmek için planı yapıyorum; on birde elimde kitap; on iki yarımda \'şu paragrafı bitireyim\' diyorum"), Bölüm 06 "Bilmiyorum" anı (aynı yaşta benzer hormonal tabloda iki kadından birinin niçin daha çabuk toparlandığı bireysel ölçekte mümkün değil) + "Bu benim yolum" dengeleyici. Saat varyasyonu kapanışı (bedenle yazışma serisi 12 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim → yapı → nefes → saat), 5-katmanlı BEN (NREM/REM uyku mimarisi + allopregnanolon-GABA-A reseptör dinamiği + kortizol akrofaz erken kayışı + CBT-I bütünleşim + apne/anemi/depresyon ayırıcı tanı). Kanal A KAPALI ekseninde humor kullanım kuralı (dolaylı ses hattında) memory\'e kayıt edildi. On ikinci onaylı Estranova makalesi. 2026-09-30: KC bu sohbette yazar (Berna, form yok) ve tıbbi onayın tamamlandığını bildirdi ("yazar ve tıbbi onay tamam"). Kapsam: iki geçişli denetim + humanize revizyonu (NREM/REM düzeltmesi, kesinlik yumuşatmaları, editorial-guide türü, Sıcaklık Katmanı: antitez ~12→3, kısa vurgu cümleleri, siz bağı, teselli rotasyonu, kızgınlık duygu beat’i), Dr. Aksoy’un beş SSS yanıtı (düzenlenmiş hâlleri KC tarafından onaylandı), Tıbbi Bilgi Notu ve Evidence 3 + 3–4 eklemesi. Hero makale-path kaydı KC kararıyla korundu. Katkı kaydı: icerik/yazar-onaylari/berna-aksoy/onaylanan/2026-09-30_perimenopoz-uyku-degisen-yan/klinik-katki.json.',
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
    approvedAt: '2026-10-03',
    note: 'KC editor direct approval for Alara exception author (2026-05-04). Pending package icerik/yazar-onaylari/alara-baykent/onay-bekleyen/2026-05-04_aksam-hareketi-uyku-melatonin moved to onaylanan; style-control package preserved as approval trace. 2026-10-03: revizyon (anne+menopoz anekdot yasağı ihlali giderildi, gövde içi SSS kaldırılıp iki soru gövdeye katıldı, melatonin–damar genişlemesi iddiası kaynakla düzeltildi, abartı/kişileştirme dili temizlendi) KC editör doğrudan onayıyla (“onaylandı”) onaylandı. Kayıt: icerik/yazar-onaylari/alara-baykent/onaylanan/2026-10-03_aksam-hareketi-uyku-melatonin-revizyon/onay-kaydi.md.',
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
    approvedAt: '2026-10-03',
    note: 'Prelaunch editoryal reconciliation: site route, RSS manifest ve production build icin editorial desk onayi ile canli envantere alindi (2026-05-04). 2026-10-03: ilk audit + humanize revizyonu KC editör doğrudan onayıyla (“onaylandı”) onaylandı; kayıt article-log.md #7. Aynı gün ikinci kapsamlı audit/humanize revizyonu (FSH yaş/klinik bağlamı, D vitamini rutin ölçüm sınırı, terim açıklamaları, tarama ayrımı, özet/kapanış ve üç SSS) için KC doğrudan editör ve Dr. Aksoy tıbbi onayı alındı: “Evet, editör ve tıbbi onay veriyorum; yayımla”. Mevcut Bilimsel Editör Notu korundu. Kayıt: icerik/yazar-onaylari/estranova-editorial/onaylanan/2026-10-03_ilk-kontrol-ikinci-audit/onay-kaydi.md.',
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
    approvedAt: '2026-10-01',
    note: 'Prelaunch inventory reconciliation (2026-05-04): production route ve static article metadata dogrulandi; current Senai signature ile approval kaydi eklendi. 2026-10-01: Codex audit/humanize revizyonu (beş gerçek Dr. Aksoy SSS yanıtı, kaynak 1–10 düzeltmeleri, Bilimsel Editör Notu) ve Claude kontrol turu (H2 lede, pH cümlesi, pelvik taban fizyoterapisi + kaynak 11) için Dr. Alper Mumcu bağımsız tıbbi inceleme onayı verdi (KC bildirimi, 2026-10-01; yazılı not repoda değil). Aynı revizyonu KC editör/yazar Dr. Senai Aksoy da doğrudan onayladı (KC bildirimi, 2026-10-01). Aynı gün ikinci tur: Dr. Aksoy’un üç gerçek gövde yanıtı (belirtiler, lokal-sistemik, lazer), kaynak 12 (Lumowa 2026, PMID 42530648) ve Dr. Aksoy’un istediği biyopsi cümlesi düzeltmesi; bu tur için de KC editör/yazar Dr. Senai Aksoy ve Dr. Alper Mumcu onayı verildi (KC bildirimi, 2026-10-01; Mumcu yazılı notu repoda değil). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-01_mahrem-bolge-degisimleri-menopoz.json. Bu kayıt commit/push/deploy yetkisi değildir.',
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
    approvedAt: '2026-10-11',
    note: 'Prelaunch inventory reconciliation 2026-05-04 (canlı rota envantere eklendi). 2026-08-06 güncellemesinin inceleme kaydı yoktu. 2026-10-11: audit + revizyon ([5] yanlış yazar → Battipaglia ve ark. 2024; E4 kaynağı fetal karaciğer [Holinka 2008]; NAMS 2022, Vinogradova 2019, CGHFBC 2019, ovaryan meta-analiz 2015, RUTH 2006, Franco 2016, STRAW+10 eklendi; yumurtalık/meme kanseri, raloksifen ve tromboz ifadeleri kaynaklarla düzeltildi; iki SSS yüzeyi tek “Dr. Aksoy’a sorular” bölümünde birleşti, beş SSS gerçek Dr. Aksoy yanıtı; Dr. Aksoy’un teyit ettiği 5 basamaklı klinik yaklaşım ve kırmızı bayraklar gövdeye taşındı; Bilimsel Editör Notu Dr. Mumcu imzasına çevrildi; hero alt metni, og:image, yapı ve okunabilirlik) KC editör/yazar Dr. Senai Aksoy tarafından onaylandı. Dr. Alper Mumcu revizyonun ve kendi imzalı Bilimsel Editör Notu metninin bağımsız tıbbi incelemesini onayladı (KC bildirimi, 2026-10-11; belge repoda değil). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-11_estrogen-biyolojisi-saglik.json. Aynı gün ek tur: kalın bağırsak kanseri cümlesi WHI E+P randomize çalışmasıyla (Chlebowski 2004, [14]) kaynaklandı ve yazıya özel byline/kart AI görselleri (bilim müzesi sahnesi, IPTC etiketli) eklendi; Dr. Aksoy ve Dr. Alper Mumcu onayladı (KC bildirimi, 2026-10-11). Dış değerlendirme turu (WHI uzun dönem [15], Nechuta [16], çalışma tasarımları, mekanizma etiketleri, vajinal düşük doz, şema görseli; Dr. Aksoy onaylı klinik bölüm düzeltmeleri: pıhtı/karaciğer/kanama kontrendikasyonları NAMS 2022’ye, kontrol takvimi NICE 1.9.2’ye göre) Dr. Aksoy ve Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-12). 2026-10-12 editoryal düzeltme turu (Hedef Organlar zamanlama paragrafı ayrıldı, 25+ sözcüklü cümleler kısaltıldı, E3 gebelik kaynağı [17] ve menopoz geçişi ruh hâli kaynağı [18] PubMed ile doğrulanarak eklendi, E4 “2024 itibarıyla”, NICE/ACOG künyeleri, kaynaksız ağızdan östrojen mekanizma cümlesi çıkarıldı) Dr. Aksoy ve Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-12). Bu kayıt push/deploy yetkisi değildir.',
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
    note: 'KC editor direct approval (Senai default): Hucreler ve Yaslanma hub icin Epitalon ve telomer biyolojisi derlemesi; saglikli hucre vs kanser hucresi iki yolak ayrimi (telomeraz vs ALT), in vitro 2D kanit sinirliligi ve insan klinik kanit yoklugu dengesi ekseninde yayina alindi; static route, FAQ schema, RSS manifesti ve kategori vitriniyle hizalandi. 2026-10-12 revizyonu: audit/humanize; tek gorunur SSS yuzeyi (ArticleFAQ kaldirildi, FAQPage yok); SSS 5 soru Dr. Aksoy yanitlariyla (KC bildirimi) "Dr. Aksoy\'a sorular" basligina alindi; gövde disi kurum adlari genel ifadeye cevrildi (kaynak izi klinik-katkilar kaydinda). Editor notu imzasi Dr. Alper Mumcu, inceleme ve onay KC bildirimi 2026-10-12; metin uc uncu sahis anlatima cevrildi. Yeni KC dogrudan editor onayi: 2026-10-12. Kayit: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-12_epitalon-telomer-yaslanma.json. 2026-10-12 ikinci revizyon (Codex tibbi revizyon + Claude Code humanize ve duzeltmeler: kaynak bolumu 11 kaynak, ALT cekince cercevesi, Epitalon/Epithalamin ayrimi, hTERT ve C-halkasi ayrintilari, gorsel kirpimlari ve alt metinler): KC editor onayi ve Dr. Alper Mumcu tibbi onayi (KC bildirimi, 2026-10-12). Paket: icerik/yazar-onaylari/senai-aksoy/onaylanan/2026-10-12_epitalon-genis-audit/.',
  },
  {
    pathname: '/bilimsel-pencere/yeni-arastirmalar/glp1-analoglari-menopozal-kilo/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-01',
    note: 'Önceki prelaunch envanter onayı: 2026-05-04. 2026-10-01 revizyonu: Codex kaynak/güvenlik düzeltmeleri + Claude Code humanize, SSS birebir dönüş ve Bilimsel Editör Notu; Dr. Aksoy doğrudan onayı (“onay 3ünüde yap”). Dr. Alper Mumcu bağımsız tıbbi inceleme onayı: 2026-10-01, bu revizyonun commit öncesi çalışma ağacı sürümü (KC beyanı; yazılı not yok). Klinik katkı kaydı: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-01_glp1-analoglari-menopozal-kilo.json.',
  },
  {
    pathname: '/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-06',
    note: '2026-10-12 Codex revizyonu (08b35c7f) Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-12); görünür inceleme bekleniyor notu kaldırıldı ve kontrendikasyon cümlesi NAMS 2022 listesine göre açıklaştırıldı. Paket: icerik/yazar-onaylari/senai-aksoy/onaylanan/2026-10-12_menopoz-hrt-meme-kanseri-riski-humanize/. 2026-10-12 kaynak ve kanıt turu: 7 PubMed doğrulamalı kaynak (Brusselaers 2018, Crandall 2017, Fournier 2014, WHI 2020, Ruan 2012, NAMS 2022, CGHFBC 2019); transdermal ve progesteron ifadeleri gözlemsel veriyle düzeltildi; zamanlama, kontrendikasyon ve mutlak risk örneği kaynaklandı; kanıt etiketleri yeniden hesaplandı. Dr. Alper Mumcu incelemesi ve onayı (KC bildirimi, 2026-10-12); Dr. Senai Aksoy klinik onayı (2026-10-12). Dört SSS yanıtı Dr. Aksoy tarafından yazılmış yanıtlar olarak korunmuştur. Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-12_menopoz-hrt-meme-kanseri-riski.json. Bu kayıt push/deploy yetkisi değildir. KC editor direct approval: Yeni Arastirmalar bolumu icin hormon tedavisi ve meme kanseri riski dosyasi guncel randomize izlem, buyuk kohort ve risk ayrimi ekseninde yayina alindi; static route, FAQ schema, RSS manifesti ve kategori vitriniyle hizalandi. KC doğrudan editör/yayın onayı — 2026-10-12 — son audit/humanize/fix revizyonu için kullanıcı talimatı: Commit, push, deploy. Bu yayın yetkisi yeni Dr. Mumcu/Aksoy tıbbi onayı değildir; yeni bağımsız inceleme beklediği sayfada görünür. Paket: icerik/yazar-onaylari/senai-aksoy/onay-bekleyen/2026-10-12_menopoz-hrt-meme-kanseri-riski-humanize/.',
  },
  {
    pathname: '/zamansiz-yasam/40-sonrasi-kas-iskelet-agrilari/',
    writerSlug: 'ersin-sarac',
    approvedAt: '2026-10-14',
    note: 'Yazar onayı (Fzt. Ersin Saraç, revizyon 7, kullanıcı bildirimi 2026-10-14; kayıt: icerik/yazar-onaylari/ersin-sarac/onaylanan/2026-10-14_40-sonrasi-kas-iskelet-agrilari/onay-bildirimi.json). Tıbbi inceleme: Doç. Dr. Senai Aksoy, 14 Ekim 2026, onaylandı. Önceki 2026-05-04 prelaunch kaydı yerine geçer.',
  },
  {
    pathname: '/zamansiz-yasam/d-vitamini-rehberi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-01',
    note: 'Önceki prelaunch envanter onayı: 2026-05-04. KC editör doğrudan onayı — 2026-10-01 — kapsamlı humanize ve kaynak düzeltmesi sonrası kullanıcı commit push deploy talimatı verdi. Bağımsız tıbbi incelemenin beklediği önceki sonuçta bildirildi; görünür bekleyen inceleme notu korunarak yayın yetkisi kaydedildi. Bu talimat Dr. Alper Mumcu incelemesinin tamamlandığına dair teyit değildir. Klinik katkı kaydı: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-01_d-vitamini-rehberi.json. İkinci tur (2026-10-01): gövde humanize + SSS 1–2 kayıtlı özgün yanıtlara birebir dönüş; Dr. Aksoy doğrudan onayı (“hepsine onay”). Dr. Alper Mumcu bağımsız tıbbi inceleme onayı: 2026-10-01, 78f534c5 sürümü (KC beyanı; yazılı not yok).',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-29',
    note: 'Prelaunch inventory reconciliation: static page, schema metadata ve production launch listesi uyumlu hale getirildi. 2026-09-29: ters ölçekli kanıt etiketleri site ölçeğine çevrildi (statin ve migren orta, kalp yetmezliği ve ubiquinol sınırlı) ve kaynak numaralarına bağlandı; Dr. Aksoy onayı, tıbbi onay KC beyanı (yazılı Mumcu notu yok). 2026-10-13: Kaynaklar paneli numarasız referans paneline alındı, içindekilerde SSS numarasız (yalnızca sunum; metin değişmedi); KC onayı (KC bildirimi, 2026-10-13).',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/deneysel-tedaviyi-okuma-kilavuzu/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-01',
    note: 'Önceki prelaunch envanter onayı: 2026-05-04. 2026-10-01 revizyonu: Codex kaynak/SSS düzeltmeleri + Claude Code kaynak denetimi, humanize, Evidence etiketleri ve Dr. Aksoy hekim gövde yanıtları (üç soru); SSS 3/3 kayıtlı gerçek yanıtlarla birebir. Dr. Alper Mumcu bağımsız tıbbi inceleme onayı: 2026-10-01, bu revizyonun commit öncesi çalışma ağacı sürümü; Evidence etiketleri, Bilimsel Editör Notu ve hekim gövde pasajlarını içeren eklemeler için ayrıca teyit: 2026-10-02 (KC beyanı; yazılı not yok). Klinik katkı kaydı: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-01_deneysel-tedaviyi-okuma-kilavuzu.json.',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/nad-plus-takviyesi/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-05-04',
    note: 'Prelaunch inventory reconciliation: canli route current writer signature ile eslestirildi ve approval kaydi production envanterine eklendi.',
  },
  {
    pathname: '/zamansiz-yasam/non-invaziv/non-invaziv-cihazlar-hifu-rf-mikroakim/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-10-02',
    note: 'Çağrı Sade imzalı yeniden yazım: kullanıcı onayı “çağrı onayı tamam. tıbbi onay tamam” (2 Ekim 2026). Önceki sürüm 3 Mayıs 2026 Senai Aksoy imzasıyla yayımlanmıştı; görünür yeniden yazım notu eklendi. Aynı gün audit-humanize-3 revizyonu kullanıcı tarafından “revizyon onay tamam” beyanıyla onaylandı. Kayıt: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-02_non-invaziv-cihazlar-hifu-rf-mikroakim-audit-humanize/onay-kaydi.md. Bu kayıt commit/push/deploy yetkisi değildir. Çağrı Sade’nin bu revizyona açık yazar onayı 3 Ekim 2026’da kaydedildi (“çağrı onayı tamam”).',
  },
  {
    pathname: '/zamansiz-yasam/non-invaziv/sauna-soguk-dus-menopoz/',
    writerSlug: 'alara-baykent',
    approvedAt: '2026-10-03',
    note: 'Prelaunch envanter onayı 2026-05-04. 2026-10-03 (üçüncü geçiş): dış değerlendirmenin önerdiği üç rötuş (vagus cümlesi otonom sinir sistemi ifadesiyle sadeleştirildi, iltihap paragrafı tek cümleye indirildi, kırmızı bayrakta “özellikle postmenopozal” ifadesi bayılma/tansiyon düşmesi eğilimiyle değiştirildi) KC doğrudan onayıyla (“onaylandı”) onaylandı. 2026-10-03: ikinci revizyon (yeni başlık “Sauna, Soğuk Duş ve Sıcak Basmaları — Bir Sporcunun Merakı”, genel/menopoza özgü kanıt ayrımı ve iddiaya özgü Evidence etiketleri, kalp kontrendikasyonları ve gebelik maddesi düzeltildi, Bilimsel Editör Notu kısaltılıp Dr. Aksoy sesiyle yeniden yazıldı) KC doğrudan onayıyla (“notu onaylıyorum”) onaylandı. Kayıt: icerik/yazar-onaylari/alara-baykent/onaylanan/2026-10-03_sauna-soguk-dus-menopoz-revizyon-2/onay-kaydi.md. 2026-10-02: audit revizyonu (Antigravity humanize geçişinin denetimi ve düzeltmesi: aile dostu alıntısı dolaylı anlatıma çevrildi, “güvenli aralık” doz dili kaldırılıp Finlandiya kohortu gözlemsel ve erkek ağırlıklı veri olarak aktarıldı, abartılı kanıt dili ve beden kişileştirmeleri temizlendi, Alara sesi ve imza açılışı geri getirildi, Bilimsel Editör Notunda “kesin kontrendikasyon” yumuşatıldı) KC editör/bilimsel editör Dr. Senai Aksoy tarafından “onaylandı” beyanıyla doğrudan onaylandı; Alara Baykent yazar formu istisnasında. Kayıt: icerik/yazar-onaylari/alara-baykent/onaylanan/2026-10-02_sauna-soguk-dus-menopoz-audit-revizyon/onay-kaydi.md.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/gece-terlemesi-uyku-utancsiz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-09-30',
    note: 'Prelaunch envanter onayı 2026-05-04. 2026-09-30: audit/humanize revizyonu (iki geçiş: kaynak/kanıt düzeltmeleri, tereddüt seyreltme, klinisyen sesi, dört gerçek Dr. Aksoy SSS yanıtı; commit 01b9e58) KC editör/yazar Dr. Senai Aksoy tarafından onaylandı; "Ben ikisini birlikte duymak isterim" cümlesini kendisi teyit etti. Dr. Alper Mumcu bu revizyonun bağımsız tıbbi incelemesini onayladı (yazılı onayı mevcut — KC bildirimi, 2026-09-30; belge repoda değil). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-30_gece-terlemesi-uyku-utancsiz.json. Aynı gün üçüncü geçiş (Dr. Aksoy’un kendi düzeltmeleri: hazırlık listesi 4 gruba, kapanış cümlesi, kısaltılmış SSS 4 yanıtı) KC bildirimiyle Mumcu yazılı onayı kapsamında sayıldı. Bu kayıt push/deploy yetkisi değildir.',
  },
  {
    pathname: '/hormonal-gecis/40-sonrasi/tarama-testleri/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-11',
    note: 'Prelaunch envanter onayı 2026-05-07 (audit mutabakatı). 2026-10-11: audit + revizyon (yaş/aralık tablosu, Türkiye ulusal kanser tarama programı, kalın bağırsak taraması ve kan basıncı, tiroid/inflamatuvar belirteç düzeltmesi, USPSTF 2025 kemik ölçümü, 8 numaralı kaynak, dayanaksız Evidence etiketleri kaldırıldı, Bilimsel Editör Notu Dr. Alper Mumcu imzasına çevrildi; Dr. Aksoy’un iki gerçek gövde yanıtı işlendi, “tek dosya, net soru” cümlesi kendisine ait olmadığı için kaldırıldı) KC editör/yazar Dr. Senai Aksoy tarafından onaylandı; dört dil düzenlemesini ayrıca onayladı. Dr. Alper Mumcu revizyonun ve Bilimsel Editör Notu metninin bağımsız tıbbi incelemesini onayladı (KC bildirimi, 2026-10-11; belge repoda değil). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-11_tarama-testleri.json. Aynı gün ikinci tur (dış değerlendirme düzeltmeleri: kemik taraması kapsamı ve kırılganlık kırığı/kortizon ayrımı, rahim ağzı taramasını bırakma koşulları USPSTF 2018 [9], kan basıncı aralığı kanıt sınırı, kan testi ve statin cümlelerinde kesinlik daraltması, kapanışta yeni belirti/anormal sonuç koşulu, HbA1c/TSH açıklaması, FSH/AMH kapsam cümlesi NICE NG23 [10], Kısa Klinik Yanıt etiketi, og:image) KC editör/yazar Dr. Senai Aksoy ve Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-11). Byline/kart için ayrı görsel kırpımları editörden görsel bekliyor.',
  },
  {
    pathname: '/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-12',
    note: '2026-10-12 güvenlik turu (Claude Code geniş audit sonrası): FDA güvenlik değerlendirmesindeki ipamorelin (damardan verildiğinde ölüm dahil ciddi yan etkiler) ve CJC-1295 (kalp hızı artışı, damar genişlemesi tepkisi) uyarıları metne alındı; ipamorelin insan çalışmasında ana sonuçta anlamlı fark olmadığı eklendi; BPC-157 diz çalışmasında 4 kişinin timosin beta-4 de aldığı belirtildi; editör notunda timosin yazımı. Dr. Aksoy ve Dr. Alper Mumcu onayladı (KC bildirimi, 2026-10-12). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-12_peptid-kullanimlari-menopoz.json. 2026-10-12 geniş audit/humanize/fix son revizyonu: kullanıcı tıbbi ve yazar/yayın onaylarının tamamlandığını bildirdi; bu sürüm için commit/push/deploy yetkisi verdi. İnsan çalışma kapsamları, 17 kaynak, kanıt kalibrasyonu, korunan dört gerçek SSS, TOC ve sosyal görsel uyumu kapsamda. Kayıt: icerik/yazar-onaylari/senai-aksoy/onaylanan/2026-10-12_peptid-audit-humanize-fix.md. Önceki kayıt: 2026-10-12 peptid makalesi kaynak ve SSS turu: 11 PubMed doğrulamalı kaynak eklendi, ipamorelin ve CJC-1295 ayrımı, TB-500 insan veri durumu, AOD-9604 ve MOT-C yumuşatması, editör notu Dr. Alper Mumcu imzasına çevrildi. Dr. Alper Mumcu onayladı (KC bildirimi, 2026-10-12). Dr. Aksoy dört SSS yanıtını kendi metinleri olarak teyit etti ve birebir girildi (kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-12_peptid-kullanimlari-menopoz.json). Bu kayıt push/deploy yetkisi değildir. KC editor direct approval: audit reconciliation icin canli deneysel peptid route production approval setine eklendi; static manifest, schema ve Senai klinik yazari uyumu dogrulandi.',
  },
  {
    pathname: '/zamansiz-yasam/vitaminler/magnezyum-menopozda-ne-ise-yarar/',
    writerSlug: 'senai-aksoy',
    approvedAt: '2026-10-11',
    note: '2026-10-12 NIH kaynak değişimi: NIH ODS sayfası botlara kapalı olduğu için NIH kaynakları çıkarıldı; mekanizma, böbrek riski ve ilaç etkileşimi ifadeleri SCF 2001 görüşüyle doğrulanarak değiştirildi. Dr. Aksoy onayladı (KC bildirimi, 2026-10-12); Dr. Alper Mumcu onayladı (KC bildirimi, 2026-10-12). Kayıt: icerik/yazar-onaylari/senai-aksoy/onaylanan/2026-10-12_magnezyum-nih-kaynak-degisimi.md. Bu kayıt push/deploy yetkisi değildir. 2026-10-12 audit ve humanize revizyonu: bisfosfonat kaynağı DailyMed alendronat etiketine bağlandı (yeni kaynak 22), hayvan kaynağı çıkarıldı, NIH [12] ana daldaki haline döndü, Park 2015 popülasyonu ve oksit dozu netleştirildi, kabızlık kanıt etiketi 1/5, çarpıntı ifadesi, tarihler 12 Ekim 2026. Dr. Aksoy onayladı (sözlü onay); Dr. Alper Mumcu onayladı (KC bildirimi, 2026-10-12). Kayıt: icerik/yazar-onaylari/senai-aksoy/onaylanan/2026-10-12_magnezyum-audit-humanize-fix.md. Bu kayıt push/deploy yetkisi değildir. KC editör doğrudan onayı ve Dr. Alper Mumcu bağımsız tıbbi inceleme onayı — 8 Ağustos 2026. Magnezyum-menopoz klinik rehberinde kanıt kalibrasyonları (AGA-ACG 2023, Cochrane 2020, Mah 2021, Schuster 2025 RCT), kaynakça doğrulama, byline/kart görselleri ve schema uyumu tamamlandı. 2026-10-11: audit + revizyon (yanlış künye [10] → Zehender 1997 MAGICA, [8] → Bharucha & Lacy 2020, [3] künye düzeltmesi, kanıt etiketleri kaynaklarla hizalandı, Kısa Klinik Yanıt doğrudan cevaba çevrildi, başlık/bölüm sırası ve tekrarlar düzeltildi, og:image; SSS “Dr. Aksoy’a sorular” başlığında dört gerçek Dr. Aksoy yanıtıyla değiştirildi; “Muayene odasında sık gördüğüm karışıklık” cümlesini Dr. Aksoy teyit etti) KC editör/yazar Dr. Senai Aksoy tarafından onaylandı. Dr. Alper Mumcu revizyonun ve inceleme notundaki tek cümle değişikliğinin bağımsız tıbbi incelemesini onayladı (KC bildirimi, 2026-10-11; belge repoda değil). Kayıt: icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-11_magnezyum-menopozda-ne-ise-yarar.json. Aynı gün ek tur: takviye üst sınırı (ABD 350 mg IOM 1997 [13], Avrupa 250 mg SCF 2001 [14]), kadınlarda günlük ihtiyaç ~320 mg ve Dr. Aksoy’un üst sınır/elementel magnezyum cümleleri eklendi; başlangıç dozu cümlesi §4 gereği alınmadı. Dr. Aksoy ve Dr. Alper Mumcu onayladı (KC bildirimi, 2026-10-11). Aynı gün üçüncü tur (ikinci dış değerlendirme: [4] yanlış PMC → Baker 2018 PMC5810528, özet ve kapanışta uyku/kaygı/kramp/kabızlık kapsamı, 112 acil yönlendirmesi, levotiroksin prospektüsü [15], terim açıklamaları, SSS ham yanıtları kayıtta) Dr. Aksoy ve Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-11). Aynı gün dördüncü tur (üçüncü dış değerlendirme: kabızlık ifadesi kılavuz önerisiyle sınırlandı, form emilimi Firoz & Graber 2001 [16], 112 uyarısı görünür paragraf ve NHS [17], inceleme notundan genel kanıt satırı kaldırıldı) Dr. Aksoy ve Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-11). Aynı gün beşinci tur (geniş audit: Cochrane kramp nüfusu düzeltmesi, kabızlık başlığı ve ilk cümlesi özetle hizalandı, [7] başlık, uzun cümleler bölündü, uyku başlığı nötrlendi) Dr. Aksoy ve Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-11). 2026-10-12 editoryal düzeltme turu (emilim çalışmaları arası tutarsızlık [18][19], glisinat uyku çalışması tek randomize çalışma olarak tanımlandı [11], sıcak basması çalışması Park 2015 [20], NIH erişim tarihi, inceleme notunda emilim cümlesi) Dr. Alper Mumcu tarafından onaylandı ve KC (Dr. Aksoy) “A” seçeneğiyle onayladı (KC bildirimi, 2026-10-12). 2026-10-12 SSS sitrat cevabı düzeltmesi (laksatif mekanizmasına bağlandı, ishal iddiası kaldırıldı; Bharucha ve Lacy 2020 [8]) Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-12); Dr. Aksoy değişikliği onayladı. 2026-10-12 SSS kaynak kontrolü (glisinat çalışma sayısı, oksit emilim tutarlılığı, antasit ve osteoporoz ilaç etkileşimi kaynakları [21][22]) Dr. Alper Mumcu tarafından onaylandı (KC bildirimi, 2026-10-12); Dr. Aksoy önerileri onayladı. Bu kayıt push/deploy yetkisi değildir.',
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
    approvedAt: '2026-10-15',
    note: 'Üçüncü onay (15 Ekim 2026, sözlü, KC — "Yazar ve tıbbi sözlü onay tamam"): audit humanize 2 taslağı olduğu gibi onaylandı. Kapsam: Çağrı Sade’nin 15 Ekim yanıtlarından menopoz bağı (östrojen–kolajen/nem, taşıyıcı kolon benzetmesi, birleşik muayene gözlemi) ve iki yanılgı gözlemi; hormon tedavisi cümlesi yumuşatılmış hâliyle (kılavuzlar yalnızca cilt için önermiyor, kanıt düzeyi 2); ilk beş yılda yaklaşık yüzde 30 kolajen kaybı verisi sınırlamasıyla (kanıt düzeyi 2, Brincat 2005 tam metni doğrulanmadı); yeni kaynaklar [11] Brincat 2005 ve [12] Viscomi 2025; [1] etiketi 4’ten 3’e indi; TOC etiketleri H2 ile eşitlendi; Müdahaleler bölümü okurun derdine göre yeniden kuruldu; dil düzeltmeleri; Sonuç cümlesi "görüşmeye hazırsınız demektir" önerisiyle; editör notu başlığı varsayılan "Bilimsel Editör Notu"na döndü; SSS 3–4 kısaltıldı, SSS 5 "Menopozda dolgu yaptırmak yüzü gençleştirir mi?" ile değişti; manifest açıklaması güncellendi. Paket: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-15_yuz-mudahalesi-olcu-sorusu-audit-humanize-2/. Commit/push yapılmadı. İkinci onay (15 Ekim 2026, sözlü, KC): Çağrı Sade yazar onayı ve tıbbi onay bu revizyon için alındı (kapsam: 15 Ekim 2026 audit/humanize turları; ilk yayın 10 Mayıs 2026, dateModified 15 Ekim 2026). Kapsam: boş tıbbi not dolduruldu; on numaralı kaynak ve iddiaya bağlı atıflar; cerrahi için kesin sonuç ifadesi kaldırıldı; bakım, cihaz, enjeksiyon ve cerrahi hedefleri ayrıldı; dolgu sonrası acil değerlendirme uyarıları; müdahale yaptırmama tercihi açıklaştırıldı; beş SSS cevabı ortak article-faqs.ts kaydına taşındı; manifest açıklaması güncellendi; görsel alt metni kısaltıldı, görseller değiştirilmedi. Onay öncesi işaretlenen iki nokta metinde olduğu gibi bırakıldı ve açık kalmaya devam ediyor: satır 25’teki anatomik derleme [1] için (iyi kanıt) etiketi; radyofrekans kaynağı [4] için yalnızca özet doğrulandı, tam metin kapsamı doğrulanmadı. Önceki onay (20 Mayıs 2026, v4) bu kaydın geçmişinde korunur. Commit/push yapılmadı. Yazar onayi v4 (20 May 2026): Op. Dr. Cagri Sade kendi duzeltme metnini ("Aynaya Bakinca Akla Gelen O Soru" .docx) gonderdi; metin Estranova editoryal sablonuna kalibre edildi. Onceki v3 ben-anlatimi agirligi yazar geri bildirimi uzerine biz/siz inclusive zemine cevrildi; ben-anlatimi yalniz kisisel kani/gozlem anlarinda birakildi. Italik soru-quote diyalogu ("Acaba ne islem yaptirmaliyim?" → "Bu islem yapilabilir mi?" → "Gercekten size uygun mu?") Cagri imzasi olarak yerlesti. "Sonuc Olarak" yumusak normatif kapanis basligi eklendi (TOC ve sayfa). Sade etiket-bullet (5 madde tek kelimelik) yazar ritmi olarak meslulastirildi. CLAUDE.md §1/§4 sert kontrol gecti: marka adi yok, ASPS/ISAPS/IPRAS yok, kendi sitesi/hastane yok, vitrin (25 yil/Aston) yok, once-sonra yok, "en iyi" superlatifi "en yardimci olan" olarak yumusatildi. Evidence pillleri korundu (5/3/3-4/5/2/5). Hero gorseli (zy-yuz-mudahalesi-olcu-sorusu.webp 2400x1000) ve byline gorseli (zy-yuz-mudahalesi-olcu-sorusu-byline.webp 1200x1500) yeni Cagri sahnesiyle (oval ayna + okaliptus + pencere kenari + bordo bluz) iki ayri render olarak yenilendi; alt metinleri "aynaya yeniden bakmak" temasiyla guncellendi. Yazar profili hot.md v0.1 → v0.5: HARD imza biz+siz inclusive birincil + ben-anlatimi ikincil, italik soru-quote HARD imza, "Sonuc Olarak" kapanis basligi imzasi, sade etiket-bullet izni, tek cumlelik paragraf serbestligi. Article-log v4 satiri yazildi. Bilimsel Editor Notu (Doc. Dr. Senai Aksoy) + FAQ + JSON-LD degismedi.',
  },
  {
    pathname: '/beden-yakinlik/meme-kucultme-menopoz-sonrasi-beden-konforu/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-10-01',
    note: 'KC editor direct approval: Cagri Sade tarafindan iletilen meme kucultme ve menopoz sonrasi beden konforu metni Estranova editorial-compliance cizgisine kalibre edilerek yayina alindi. Hasta alintisi, karsilastirmali sonuc anlatimi, kesin fayda vaadi, klinik yonlendirme ve promotional cerrahi dili temizlendi; karar sorulari, beden konforu, mamografi/gecmis saglik zemini ve ttb-saglik bakanligi tanitim sinirlari editor notuyla gorunur kilindi. Ust hero parent Beden & Yakinlik olarak korundu; kullanici sagladigi yatay gorsel kart/arshiv, dikey gorsel ArticleAuthorBlock yuzeyine baglandi. 2026-09-30 revizyonu: Kullanıcı bu sohbette yazar ve tıbbi onayın tamamlandığını teyit etti. Üç gerçek Çağrı Sade yanıtı değerlendirme, cerrahi dışı destekler ve risk/iyileşme bölümlerine işlendi; NHS/HWE kaynakları eklendi; açıklama gerektiren düzelme-beklenti cümlesi revizyona alınmadı. Özgün yanıt tarihi belirtilmedi. Onay kaydı ve kaynak: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-09-30_meme-kucultme-menopoz-sonrasi-beden-konforu/. Commit/push/deploy bu onayla yapılmış sayılmaz. 2026-10-01 humanize revizyonu: Kullanıcı Çağrı yazar onayı ve tıbbi onayın tamamlandığını teyit etti. Kapsamlı editoryal revizyon kaynak ağacına aktarıldı; mevcut SSS korundu, Dr. Aksoy adına SSS dönüşümü uygulanmadı. Önceki paket: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-01_meme-kucultme-menopoz-sonrasi-beden-konforu-humanize/. 2026-10-01 audit + humanize revizyonu: 9 H2 8’e indi, açılış/kapanış birinci tekil sese çevrildi; üç gerçek Çağrı Sade yanıtı, Evidence, kaynaklar ve SSS korundu. Kullanıcı Çağrı yazar onayı ve tıbbi onayın tamamlandığını teyit etti. Aynı gün SSS 5 (genel meta soru) HRT kullanımı sorusuyla, SSS 4 (gövde tekrarı) egzersize dönüş sorusuyla değiştirildi; her iki değişiklik için yazar ve tıbbi onay ayrıca teyit edildi. Aynı gün dış değerlendirme rötuşu (değerlendir- tekrarı azaltıldı, iki H2 yeniden adlandırıldı, hazırlık listesi 4 maddeye indi) için de yazar ve tıbbi onay teyit edildi. İkinci dış değerlendirme mikro rötuşu (kapanış cümlesi sadeleşti, SSS 3 yanıtı somut yakınmalarla yazıldı) için de yazar ve tıbbi onay teyit edildi. Güncel paket: icerik/yazar-onaylari/cagri-sade/onaylanan/2026-10-01_meme-kucultme-audit-humanize/.',
  },
  {
    pathname: '/beden-yakinlik/menopoz-sonrasi-goguslerdeki-degisim/',
    writerSlug: 'cagri-sade',
    approvedAt: '2026-10-15',
    note: 'İkinci onay (15 Ekim 2026, sözlü, KC): yazar sesi ve SSS revizyonu (kaynak SHA-256 a246762e…69cc5) — 29 Temmuz onaylı özgün metinden dört birleşik muayene gözlemi geri getirildi, "biz" hekim–okur ortaklığı olarak kuruldu, gövdeyi tekrarlayan üç SSS yerine KC’nin ilettiği iki yanıt birebir alındı (yeniden sarkma; silikon protezde sessiz yırtılma ve FDA 5–6/2–3 yıl görüntüleme takvimi), yaş sorusu korundu; ASPS sonuç sayfası ve FDA 2020 etiketleme rehberi kaynak 8–9 olarak eklendi. "Önemli bir bölümü belirtisiz" ve "kontrastsız MR" ifadeleri KC kararıyla olduğu gibi bırakıldı. İlk onay (aynı gün): Çağrı Sade yazar onayı ve tıbbi onay 15 Ekim 2026 tarihinde sözlü olarak (KC) revize metin için alındı (kaynak SHA-256 84870c1d…234b; tarih alanları sonradan eklendi). Revizyon kapsamı: yedi kaynak ve iddiaya bağlı numaralı atıflar (Gentile ve Sterodimas 2026 dahil); muayene gerektiren değişimler başlığı ve kendiliğinden gelen akıntı uyarısı; dikleştirme–protez ayrımı, cerrahi ve implant riskleri; yağ transferinde görüntüleme ile uzun vadeli kanser güvenliği ayrımı; uyarı belirtileri, dikleştirme ve implant risklerine kanıt düzeyi 4 etiketleri; Bilimsel Editör Notu 29 Temmuz onaylı metnine geri alındı; SSS 2/3/4 yanıtları güncellendi; dil, ritim ve tekrar düzeltmeleri. Çağrı Sade’nin yağ transferine ilişkin kişisel görüşü korundu; yeni hekim deneyimi eklenmedi. Önceki onay (29 Temmuz 2026): KC editor direct approval: Cagri Sade tarafindan iletilen menopoz sonrasi goguslerdeki degisim metni Estranova editoryal ve compliance ilkelerine (CLAUDE.md ve AGENTS.md) uygun sekilde yeniden yazilarak yayina alindi. Promosyonel cerrahi dili, basari vaatleri, klinisyen ustunluk iddialari temizlendi; memeye yag enjeksiyonunun kalsifikasyon riskleri ve rutin tarama takibi zorluklari, diklestirme/protez seceneklerinin trade-off dengeleri hekimin kisisel danisman tonuyla gorunur kilindi. Gorsel sureci make-article-images.mjs ile byline ve kart olarak ayri render edildi; static route, FAQ, JSON-LD semalari ve RSS manifestiyle hizalandi.',
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
