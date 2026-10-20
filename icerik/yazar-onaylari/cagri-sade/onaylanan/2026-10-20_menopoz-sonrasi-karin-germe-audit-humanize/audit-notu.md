# Menopoz Sonrası Karın Germe — 20 Ekim 2026 revizyon kaydı

> Güncel sürüm: ikinci geniş audit sonrası r2 metin düzeltmesi tamamlandı; r3 teknik engel düzeltmesinden sonra tam proje `build:ci` de geçti. Aşağıdaki ilk tur kayıtları tarihseldir; güncel doğrulamalar belgenin sonundadır. Kaynak sayısı 9'dur. Onay/yayın durumu değişmedi.

Durum: Kapsamlı audit ve düzeltme ayrı taslakta tamamlandı. Yazar ve tıbbi onay alınmadı. Canlı rota, ortak SSS, manifest, görsel eşlemesi, eski onay kaydı ve yayın arşivi değiştirilmedi. Yeni onay formu, paket veya e-posta üretilmedi. Commit/push/deploy yapılmadı.

Okuma: `sonra.md`. Uygulanabilir Astro kaynak: `revizyon.astro` (import yolları hedefteki `src/pages/beden-yakinlik/` konumuna göredir). `allowIndexing={false}` ve görünür taslak notu yalnızca önizleme içindir; onaydan sonra entegrasyonda kaldırılması gerekir. İlk yayın tarihi değişmedi; taslak son güncellemesi 20 Ekim 2026'dır, yeni bir tıbbi inceleme tarihi değildir.

## Başlangıç ve yetki

- İlk onay izi: `src/data/article-approvals.ts` içindeki 29 Haziran 2026 KC editör kaydı ve Çağrı Sade article-log satırı. Sayfanın ilk depo commit'i `eee772a7`; son değişiklik `166e4e15`. Bu, yeni revizyon için tıbbi onay değildir.
- `onay-tabani-farki.diff`, ilk commit ile oturum başındaki dosya arasındaki değişiklikleri saklar. Sonraki turlar özet/şişkinlik ayrımı, birinci muayene gözlemi, tür ve tarih metadata'sını değiştirmiş.
- Kaynak DOCX depoda bulunamadı. Kullanıcı bu sohbet içinde iki muayene gözleminin Çağrı Sade'nin gerçek gözlemleri olduğunu açıkça teyit etti ve korunmasını istedi. İki paragraf kaynak dosyadan birebir korundu; yeniden yanıt istenmedi. Yeni klinik deneyim veya hasta sözü eklenmedi.
- Mevcut beş SSS yanıtı ortak `article-faqs.ts` kaynağından korunur. Başka yazar imzasındaki yazı Dr. Aksoy SSS'sine dönüştürülmedi. Genel makale onayı, beş yanıtın ayrı ayrı sözlü verilmiş olduğuna dair yeni bir iddia olarak kullanılmadı.
- Bilimsel Editör Notu birebir korundu; yeni revizyonun onaylandığı ima edilmedi. Onay süreci `docs/AUTHOR-APPROVAL-WORKFLOW.md` v2.0'a tabidir.

## Bulgular ve uygulanan düzeltmeler

| Alan / eski konum | Bulgu | Revizyon |
|---|---|---|
| Tıbbi / eski sayfa 107–115, 149–163 | Birbirinden farklı yağ, cilt ve karın duvarı iddialarına aynı orta–iyi/iyi kanıt etiketi; görünür kaynak yok. | Gözlemsel vücut yapısı çalışması ayrı anlatıldı; orta kanıt yalnız bu bulguya bağlandı. Menopozun bütün doku gevşekliğinin nedeni olduğu izlenimi sınırlandı. Kaynaklar ve dipnotlar eklendi. |
| Güvenlik / eski giriş 124–132 | Şişkinlik ayrımı vardı; kalıcı/yeni belirtilerde değerlendirme sınırı yoktu. | İlk bölümde erken doyma, ağrı, idrar yakınması ve istemsiz kilo kaybı eşliğinde değerlendirme uyarısı eklendi. NHS resmi kaynağı [7]; test eşiği veya tanı algoritması eklenmedi. |
| Cerrahi / eski 169–189, 215–232 | Genel anestezi mutlak anlatılmış, kalıcı izin yeri açıklanmamış, riskler liste düzeyinde kalmış. | Genellikle genel anestezi; kalıcı alt karın/göbek izi, yara iyileşmesi ve takip planı açıklandı. Şiddetli ağrı/beklenmedik belirti sonrası ekiple iletişim bilgisi eklendi. |
| Gramer / eski 191–209 | “stabil”, “sağlık zemini”, “aynı cümlede dürüstçe tarif” ifadeleri okuma yükünü artırıyordu. | Dengeli kilo, genel sağlık, ilaç listesi ve önceki ameliyatlar somut biçimde anlatıldı. |
| Yerel ifade / eski 180–188, 224–269 | “harita yeniden değişir”, “aynı masaya koymak”, “beden hikâyesini anlatır” gibi soyut ifadeler. | Yeni anlatıda somut doku, iz, iş yükü, poşet taşıma ve takip soruları kullanıldı. Kullanıcının korunmasını istediği gerçek gözlemdeki ifadeye müdahale edilmedi. |
| Humanize / tüm metin | Her bölüm sakin karar/acele etmeme hükmüyle kapanıyor; girişte genel menopoz tanımı var. | Giriş gündelik yakınmadan başlar. Mekanizma, işlem sınırı, uygunluk, iyileşme ve görüşme soruları birbirinden ayrıldı; sonuç kısaltıldı. H0 mizah seçildi; beden ve komplikasyon konusu espriyle anlatılmadı. |
| Metadata / eski 31–56, 98–103 | Uzun alt metin görselden çok yazım talimatını anlatıyor; şema görsel URL'si çift slash üretebiliyor. | Alt metin yalnız görünen sahneyi anlatır; URL `new URL(articleImage, siteUrl).href` ile kurulur. SEO açıklaması işlem kapsamı/risk/iyileşme odağına çekildi. Başlık ve eski H2 anchor'ları korundu. |
| Yapı / eski TOC ve özet | Klinik rehberde “Kısa Özet”; SSS numarası gövde bölüm sayacıyla uyuşmuyor; kaynaklar yok. | “Kısa Klinik Yanıt”; SSS ve kaynaklar TOC'de numarasız. Ana gövde 7 bölüm, kaynaklar ayrı editorial panel. |

## İddia/anlam ve kaynak izi

Kaynakların tamamı bu oturumda resmi site veya özgün çalışma kaydından doğrulandı; web taraması tıbbi onay değildir.

| Sonuç | Korunan sınır / yeni düzeltme | Kaynak |
|---|---|---|
| Karın germe kilo verme yöntemi değildir. | Özet, işlem bölümü, bağımsız okunabilen SSS ve korunan BEN'de kalır; metabolik sağlık iyileşmesi vaat edilmez. | [ASPS amaç ve sınırlar](https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck) |
| Menopoz geçişinde yağ ve yağsız doku değişebilir. | Gözlemsel ilişki; bireyin karın değişimine neden atfetmez, cerrahi yarar kanıtı sayılmaz. Yeni yüzde veya tedavi etkisi yok. | [Greendale 2019, PMID 30843880](https://pubmed.ncbi.nlm.nih.gov/30843880/?dopt=Abstract) |
| Uygunluk, genel sağlık ve beklentilerle değerlendirilir. | Tek başına yaş ya da bir liste “uygun” kararı verdirmez; evrensel bekleme süresi eklenmedi. Kaynaksız “birkaç ay cilt bakımını izleyin” önerisi çıkarıldı. | [ASPS adaylar](https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/candidates), [görüşme](https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/consultation) |
| İyileşme kişiye göre planlanır ve ciddi riskler vardır. | Sabit sosyal dönüş takvimi, oran veya menopoz sonrası güvenlik üstünlüğü yok. Risk listesi ve kalıcı iz açıklaması korunup açıldı. | [ASPS iyileşme](https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/recovery), [riskler](https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/safety), [NHS ameliyat](https://www.nhs.uk/tests-and-treatments/cosmetic-procedures/cosmetic-surgery/tummy-tuck/) |
| Kalıcı şişkinlik ayrıca değerlendirilir. | Yeni güvenlik düzeltmesi; çok sayıda neden olabileceği açık. Menopoz/estetik etiketiyle geçiştirilmez, kanser tanısı çıkarılmaz. | [NHS belirtiler](https://www.nhs.uk/conditions/ovarian-cancer/symptoms/) |

## Tekrar sayımı

`structure-check.mjs --claims` için `claims.json`; sonuçlar `qa-structure-once.txt` / `qa-structure-sonra.txt`. Sayılar regex eşleşmeleridir; başlık/cevap içindeki iki eşleşme iki bağımsız klinik sonuç sayılmaz. Konu terimlerinin yeni bilgi taşıyan tekrarları, klinik hükmün gereksiz tekrarıyla aynı değildir.

| Sonuç / ifade ailesi | Eşleşme önce → sonra | Geçtiği bölüm önce → sonra | Kalan tekrar gerekçesi |
|---|---|---|---|
| Kilo verme / zayıflama yöntemi | 5 → 5 | 4 → 4 | Özet; tanım; bağımsız SSS (soru+cevap); korunan BEN. Güvenlik sınırı. |
| Yağ dağılımı / cilt esnekliği / karın duvarı | 22 → 16 | 9 → 7 | Özet; gerçek gözlem; mekanizma; işlem kapsamı; SSS; kaynak açıklaması; korunan BEN. Aynı doku sıralaması uygunluk/sonuç/karar bölümüne yeniden taşınmadı. |
| Sakin / acele / yavaş / zaman tanıma | 10 → 3 | 7 → 3 | Gerçek gözlem; tek sonuç; korunan BEN. |
| İyileşme süreci / kişiye özel plan | 7 → 4 | 6 → 3 | Ayrı bakım bölümü; bağımsız SSS; kaynağın kapsam açıklaması. |

## Araç bulgularının tek tek değerlendirilmesi

- `family-negative-frame`: önce 5; yeni metinde rapor eşiği altında. Genel antitez kapanışları çıkarıldı; klinik olumsuzluklar korunur.
- `short-closer`: sonra 7/33 paragraf. Korundu: gerçek gözlemdeki cümle; onarım kapsamı; göbek izi; ilaç hazırlığı yetkisi; işlem istememe özgürlüğü; kapanıştaki rıza/zaman. Birbirine değiştirilebilir vecizeler değiller. Ortalama 15,9 → 13 sözcük; standart sapma 7,8 → 5,6; ardışık kısa cümle en fazla 3 → 2. Ritim hedef/kota veya insan yazarlığı puanı değildir.
- `heading-overlap`: genel H1 ile yaş SSS'si eşleştiriliyor; aynı soruyu soran iki başlık değil, sezgisel yanlış pozitif. Eski anchor'lar korunuyor. Gövde–SSS aynı konuyu kısa/ayrıntılı düzeyde içeriyor; SSS tek ve önceki onaylı cevaplar değiştirilmedi.
- `writer-directed`: yalnız korunan Bilimsel Editör Notu'ndaki “olarak sunulmamalı”; hekime ait korunan not otomatik temizlenmedi.
- Dört `claim-*` bulgusu yukarıdaki sayım ve gerekçelerle kayda alındı.
- `rendered-check` tek aday `uncited-source`: araç numaralı yerel dipnotları tanımıyor; her sekiz kaynak gerçekten #kaynak-N bağlantısıyla anılıyor. Kurum adını gövdeye ekleyerek bulgu gizlenmedi.
- `editorial-check`: 0 aday. Üç ayrı elle okuma (gramer, yerel ifade, humanizasyon) yapıldı; araç skoru bu okumanın yerine geçmez.
- `check-fidelity`: `eee772a7` metnine karşı çalıştırıldı; yeni [1]–[8] atıfları, 2019 kaynak tarihi ve dayanıksız 3–4/4 etiketlerinin kaldırılması fark verir. Araştırma popülasyonu/sonucu, olumsuzluk ve güvenlik sınırları elle karşılaştırıldı. Klinik başarı oranı, doz veya yeni eşik eklenmedi.

## Teknik doğrulama ve sınır

- Ayrı QA kökü: `D:/A-klasör/estranova-karin-qa-20261020`. Gerçek repo `src/pages/` dosyasına yeni metin yazılmadı.
- Ayrı Astro derlemesi başarılı; compliance 60 dosyada geçti. `qa-build-draft.txt`, `qa-compliance-draft.txt`.
- Derlenmiş HTML: tek H1, 5 görünür SSS = 5 şema SSS'si; soru/cevaplar birebir; bozuk anchor ve yinelenen ID yok; 8 kaynak; noindex; yazar/tarih/canonical ve şema görsel URL'si kontrol edildi. `qa-html.txt`, `qa-rendered.txt`.
- İlk tarayıcı bağlantısı güven köprüsü hatasıyla açılmadı. Chrome üzerinden alternatif görsel kontrol tamamlandı: masaüstü ve 390×844; iki görsel yükleniyor, 390 px'de scrollWidth 375, yatay taşma yok. Mobil başlık ve ilk gövde bölümü görüldü; `mobil.png`, `masaustu.png`. Tüm cihazlar/etkileşimler için regresyon iddiası yok. Önizleme `http://127.0.0.1:4338/beden-yakinlik/menopoz-sonrasi-karin-germe/`.
- Tam `npm run build:ci` **geçmedi**: önceden mevcut `src/data/article-approvals.ts:192` ve `article-drafts/kas-iskelet-preview/.../article-approvals.ts:192` içindeki kaçışlanmamış tek tırnaklar TypeScript ayrıştırmasını durduruyor. Bu yazı kapsamı dışındaki dosyalar düzeltilmedi. SEO/strict/template aşamaları bu komutta çalışmaya ulaşmadı. Ayrı derleme bu başarısızlığı ortadan kaldırmaz.
- Başlangıç ve son `git diff --check` temiz; hedef canlı kaynak ve ortak veriler değişmedi. Temiz Git diff, ayrı taslağın tıbbi/yazar onayı değildir.

## Okur değeri ve sonraki adım

Yazı artık doku değişimi, kalıcı belirti ve cerrahi planı birbirinden ayırarak okura somut görüşme soruları veriyor. Kaynaklı, sınırlı hasta eğitimi özeti olarak kullanılabilir; kişisel cerrahi uygunluk, menopoz sonrası komplikasyon oranı veya hormonların bireysel neden olduğu sonucu için kullanılamaz.

KC'den bu somut revizyon için Çağrı Sade yazar onayı ve tıbbi onay alınması açık iştir. Yalnız yazar gözlemlerinin gerçekliğinin teyidi bütün revizyonun onayı sayılmadı. Entegrasyonda description/modifiedDate manifest ile hizalanmalı; görünür taslak notu ve noindex kaldırılmalı; tam proje kontrolü ve kaynak/template kapıları yeniden çalıştırılmalı. Commit/push/deploy ayrıca açık talimat ister.

## İkinci geniş audit sonrası düzeltme — r2, 20 Ekim 2026

Yetki: Kullanıcı ikinci audit bulgularından sonra “düzelt” dedi. Bu, revizyon düzenleme yetkisidir; yazar/tıbbi onay veya yayın talimatı olarak kaydedilmedi. Önceki revizyon `ikinci-audit-oncesi.astro` dosyasında korundu.

1. Boş `ArticleDisclaimer` çağrısına makaleye ait görünür sorumluluk metni eklendi. Ortak bileşen değiştirilmedi. Derlenmiş metin ve tarayıcıda doğrulandı; Markdown okuma dosyasına da taşınıyor.
2. Genel ameliyat ekibi iletişim cümlesine ek olarak şiddetli nefes darlığı, göğüs ağrısı ve bayılmada acil yardım ayrımı yapıldı. Ekip yanıtını beklememe sınırı açık. Yeni kaynak [9]: https://www.nhs.uk/conditions/pulmonary-embolism/ bu oturumda yeniden okundu. Doz, protokol, tanı veya yeni risk oranı yok.
3. Markdown dışa aktarımı, yerel #kaynak-N hedefleri yerine ilgili doğrudan bilimsel/resmi kaynak URL'sini kullanıyor. 18 dipnot bağlantısı çözümleniyor; tanımsız yerel kaynak hedefi kalmadığı doğrulama betiğinde sınanıyor. Astro dipnotları kendi yerel hedeflerini koruyor.
4. Açılışın model tarafından eklenen pantolon/ağırlık tekrarı çıkarıldı. Kullanıcının teyit ettiği iki gerçek muayene gözlemi aynen korundu.
5. Yağsız doku ölçümünün kas, organlar ve vücut suyunu içerdiği açıklandı. Özgün çalışma, tartışma bölümü (https://insight.jci.org/articles/view/124865) bu kapsamı doğruluyor; bulgu yalnız kas kaybı olarak sunulmuyor.
6. Özet byline görselinden önceye taşındı. Başlık, hero, ortak bileşenler, yazar bilgileri ve görsel eşlemeleri değişmedi. 390×844 mobilde özet başlangıcı 1823 px'den 926 px'ye geldi. Yatay taşma yok (scrollWidth 375); iki görsel yüklendi.

R2 kontrolleri:

- Ayrı Astro derlemesi başarılı (`qa-build-draft-r2.txt`); ayrı kökte compliance 60 dosyada geçti.
- `verify.mjs`: tek H1, 5/5 SSS metin/şema eşleşmesi, 9 kaynak, noindex, sıfır bozuk anchor/çift id; dolu tıbbi not; acil yardım cümlesi; doğrudan Markdown kaynakları; hekim metni korunması; özetin byline önünde olması doğrulandı (`qa-html.txt`).
- `editorial-check`: 0 aday. `rendered-check`: yalnız önceki kaynak-adı sezgisel adayı; dokuz kaynağın her biri gövdedeki numaralı atıfla bağlı (`qa-rendered-r2.txt`).
- `structure-check`: 7 aday. Önceki gerekçeler sürüyor; ek kısa kapanış acil yardımın bekletilmemesi sınırıdır. Korunan BEN'deki yazar yönlendirmesi değiştirilmedi. Genel H1–yaş SSS'si örtüşme adayı yanlış pozitif. İddia ailesi sayıları r1 ile aynı: kilo 5, doku 16, sakin/acele/yavaş 3, iyileşme 4. Bu nedenle ilk tur 22→16 / 10→3 / 7→4 karşılaştırmaları değişmedi.
- `check-fidelity` ilk tabana karşı tekrar çalıştı; yeni [9] ve acil yardım bağlantısı, kaynakça ekleri ve açıklama elle incelendi (`qa-fidelity-r2.txt`). Ana sonuçların popülasyon, nedensellik ve belirsizlik sınırları korunuyor.
- Mobil tarayıcıda güncel güvenlik paragrafı görüldü, `mobil-r2.png` kaydedildi; geçici viewport geri alındı. Aynı güvenlik metni/uyarı HTML'de de doğrulandı.
- Gerçek gözlemler, beş SSS yanıtı, BEN ve eski onay kaydı değişmedi. Canlı kaynak, ortak SSS ve manifest bu görev tarafından değiştirilmedi. Başka HRT görevinin çalışma ağacı değişiklikleri korundu.
- Tam proje CI başarısı iddia edilmiyor. İkinci audit'te `src/data/article-approvals.ts:192` ve kas-iskelet önizleme kopyasında 16'şar TypeScript ayrıştırma hatası yeniden doğrulanmıştı. Kapsam dışı hata düzeltilmedi; r2 için tüm repo build:ci yeniden çalıştırılmadı.

R2 de yazar ve tıbbi onay bekliyor. Canlıya entegrasyon, commit, push veya deploy yapılmadı.

## Kalan teknik engelin düzeltilmesi — r3, 20 Ekim 2026

Kullanıcının sonraki “düzelt” talebi üzerine önceki teslimde açık bırakılan tam proje kontrol engeli giderildi:

- `src/data/article-approvals.ts:192`: metin içindeki `2026'da` ifadesinin tek tırnağı kaçışlandı. Onay tarihi, içeriği, kişi veya kapsam değiştirilmedi. Kas-iskelet önizlemesindeki aynı yolun gerçek `src/data` klasörüne bağlandığı doğrulandı; ikinci bir onay kaydı düzenlenmedi.
- `tsconfig.json`: `article-drafts` geçici çıktı klasörü `exclude` listesine eklendi. İç içe kopyalanmış önizleme dosyalarının üretim TypeScript projesine yanlışlıkla girmesi önlendi. Üretim `src` kontrolleri korunuyor; taslak için ayrı derleme/QA akışı geçerliliğini koruyor.
- `npm run build:ci` çıkış 0: TypeScript lint, compliance (179 dosya), strict makale bütünlüğü, strict şablon kontrolü, prebuild kontrolleri, Astro derlemesi (139 sayfa) ve SEO çıktı kontrolü (160 sayfa) tamamlandı. Kanıt: `qa-build-ci-r3.txt`.
- Başka makalenin eski editoryal notunda bir soft-ban kelime uyarısı kaldı; komutu başarısız kılmadı. Bu turda kapsam dışı makale metni değiştirilmedi.
- Bu tam proje derlemesi mevcut canlı rota ağacını doğrular. Karın germe r2 revizyonu hâlâ ayrı taslaktır; r2'nin kendi ayrı derleme ve görünüm kontrolleri önceki bölümde kayıtlıdır. Onay veya entegrasyon gerçekleşmiş sayılmaz.
## Üçüncü geniş audit + humanize fix — r4, 20 Ekim 2026

Yetki: Kullanıcının `Menopoz Sonrası Karın Germe geniş audit humanize fix` talebiyle hem canlı sayfa hem de mevcut `revizyon.astro` (r2) taslağı yeniden denetlendi ve taslaktaki ses, kanıt etiketi ve şablon eksikleri giderildi.

1. **Çağrı Sade danışman sesi ve akış (`revizyon.astro` 152–274):** r2 taslağında 2–7. bölümlerde oluşan üçüncü şahıs denetçi dili (`"Cerrahınızın ... anlatması gerekir"`), mekanik `Bu çalışmadaki... Bu, ...` tekrarı, arka arkaya broşür emir kipleri (`paylaşın`, `ekleyin`, `öğrenin`), bağlamdan kopuk 3 kelimelik kapanış (`"İşlem istemediğinizi söyleyebilirsiniz."`) ve bürokratik zorunluluk ifadeleri (`"açıklanmalıdır"`, `"anlayabilmiş olmanız gerekir"`) Op. Dr. Çağrı Sade'nin `writers/cagri-sade/hot.md` v0.5 profilindeki sıcak, eşlik eden hekim-danışman sesiyle (`değerlendiririz`, `birlikte netleştiririz`, `ayrıntısıyla konuşuruz`) yeniden kuruldu. Yeni klinik anekdot, hasta hikayesi veya doğrulanmamış oran uydurulmadı; iki gerçek `Muayene odasında...` paragrafı ve Bilimsel Editör Notu iç metni birebir korundu.
2. **Kanıt düzeyi etiketleri (`<Evidence>`):** r2'de yalnızca SWAN kohortunda (`<Evidence level={3} />`) bırakılan kanıt etiketleri, kılavuz/uzman uzlaşısına dayanan üç temel klinik sınırda (`#ne-degildir` kilo verme yöntemi olmadığı sınırı, `#kimler-icin` aday değerlendirme kriterleri, `#iyilesme` cerrahi komplikasyonlar ve pıhtı riski) `<Evidence level={4} />` olarak eklendi.
3. **Bilimsel Editör Notu görünür inceleyen imzası:** `<ArticleEditorNote class="mt-10" reviewerForWriter="cagri-sade">` prop'u eklendi; iç metin değiştirilmeden sayfa altında `İnceleyen: Doç. Dr. Senai Aksoy · Kadın Hastalıkları ve Doğum Uzmanı` imzası görünür hale getirildi (`menopoz-sonrasi-genital-estetik.astro:284` ile tam uyum).
4. **Op. Dr. Çağrı Sade'nin 3 yeni klinik yanıtının işlenmesi (20 Ekim 2026):**
   - Kullanıcının bu oturumda ilettiği 3 gerçek hekim yanıtı (`klinik-katki-kaydi.json`) anlamı, klinik sınırları ve birinci tekil hekim sesi korunarak ilgili bölümlere yerleştirildi:
     - **Soru 1 (Karın içi yağlanma vs. deri sarkması/gevşeme ve hızlı kilo değişimi — erteleme ölçütü):** `#kimler-icin` bölümüne (`revizyon.astro` L200–L211) işlendi; `[2]` ASPS kaynağıyla ilişkilendirildi.
     - **Soru 2 (Mini karın germe vs. tam karın germe — kesi uzunluğu, göbek deliğinin korunup yeni açıklıktan çıkarılması ve "daha kısa iz her zaman daha iyi sonuç demek değildir" ölçütü):** `#ne-degildir` bölümüne (`revizyon.astro` L180–L194) işlendi; `[6]` ASPS ve `[8]` NHS kısmi/tam abdominoplasti kaynaklarıyla ilişkilendirildi.
     - **Soru 3 (İlk iki haftada günlük ev düzeninde karın kaslarının kullanımı, ilk günlerde dik durma güçlüğü, ev hazırlığı ve pıhtı riskini azaltmak için kısa düzenli yürüyüş dengesi):** `#iyilesme` bölümüne (`revizyon.astro` L229–L248) işlendi; `[5]` ASPS, `[8]` NHS ve `[9]` NHS kaynaklarıyla ilişkilendirildi.
5. **Doğrulama sonuçları (r4 + 3 gerçek hekim yanıtı):**
   - `editorial-check.mjs`: **0 aday** (69 blok).
   - `structure-check.mjs --claims`: `short-closer` **0 aday** (r2'de 7), `family-negative-frame` **0 aday** (canlıda 5); 90 cümle, ortalama **16,6 kelime** (sd **7,8**), ≤8 kelimelik cümle oranı **%14**, ardışık kısa cümle en fazla **2**. İddia ailesi sayıları daha da düştü (`kilo`: 5, `doku`: 22 → **14**, `zaman`: 10 → **3**, `iyilesme`: 7 → **3**).
   - `verify.mjs` ve QA Astro build: çıkış 0 (`qa-html.txt`).
   - Canlı rota, ortak veriler ve diğer HRT çalışma ağacı dosyaları değiştirilmedi; commit/push/deploy yapılmadı.
