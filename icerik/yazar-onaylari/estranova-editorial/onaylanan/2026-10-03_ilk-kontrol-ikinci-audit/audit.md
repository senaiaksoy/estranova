# İlk kontrol dosyası — ikinci audit ve humanize düzeltmesi

- Tarih: 3 Ekim 2026.
- Hedef: `/hormonal-gecis/menopoza-hazirlik/menopoza-hazirlik-ilk-kontrol-dosyasi/`.
- Yazar/tür: Estranova Editörleri / `editorial-guide`; kurumsal ses ve mevcut tek SSS korundu.
- Son kayıtlı onay tabanı: `ff4767c35d36f1bf2b882f6ae2c71239f3bf5216`; article-log #7 ve article-approvals.ts içinde 3 Ekim KC doğrudan editör onayı. Başlangıçta hedefte bu commit sonrasında fark yoktu; çalışma ağacı temizdi.
- Canlı başlangıç: cache-bypass GET HTTP 200; “Çekmecede eski tahliller” açılışı mevcut. Önceki arşivdeki “Bazı dönemlerde beden…” açılışı canlıda yoktu.
- Durum: bu revizyon için 3 Ekim 2026 tarihinde kullanıcıdan gerçek editör ve tıbbi onay alındı: “Evet, editör ve tıbbi onay veriyorum; yayımla”. Önceki onay yeni klinik açıklamaları kapsıyor sayılmadı; yeni onay ayrı kaydedildi. Commit/push/deploy işlemleri ayrıca doğrulanacak.

## Bulgular ve yapılan düzeltmeler

1. Gramer: belirgin özne-yüklem hatası yoktu. Uzun teknik sıralamalar ve kesik açıklamalar daha okunur cümlelere bölündü.
2. Yerel ifade: “çekirdek kontroller”, “bütün resmi anlatmaz”, “netlik yerine gürültü” ifadeleri somut karşılıklarla değiştirildi. Ferritin, tiroid, FSH, perimenopoz, lipid profili, HbA1c ve osteoporoz açıklandı.
3. Humanize: 8 gövde bölümü, başlık/özet, sonuç, 3 SSS, bağlantı metinleri ve editör notu birlikte okundu. Açılışın telefon galerisi sahnesi korundu. Sonuç bölümündeki sloganlaşma azaltıldı; üç dosya başlığı ve görüşmede sorulabilecek sorularla kapanış kuruldu. Yeni kişisel deneyim/hekim sözü eklenmedi. Mizah H1: mevcut tek dokunuş; hassas alt bölümler H0.
4. Tıbbi sınır: test isimlerinin topluca verilmesi herkese rutin paket izlenimi yaratıyordu. Test seçimi belirtilere ve öyküye bağlandı. FSH için yaş ve klinik bağlam açıklandı; sağlıklı yetişkinlerde özel gerekçe olmadan rutin D vitamini ölçümü önerilmediği belirtildi. Kemik sağlığı ağrıyla ilişkilendirilmedi. Rahim ağzı taramasında HPV testi de anıldı; tarama ile jinekolojik kontrol ayrıldı.
5. Kaynak izi: kurumsal byline'ın dergi rejimi gereği dış kaynakça gövdeye eklenmedi; bu kayda kondu. Mevcut Evidence etiketleri korundu; bunlar her testin herkese gerekli olduğunu ya da kılavuz GRADE derecelerinin birebir karşılığını göstermez.

## Anlam ve kaynak karşılaştırması

| Konum | Önceki anlam / sorun | Düzeltilmiş karşılık ve korunmuş sınır | Doğrulama |
|---|---|---|---|
| Özet, FSH, ilk iki SSS | Tek hormon ölçümü sınırlı; yaşa bağlı test kullanımı belirsiz | Tipik belirtileri olan, başka sağlık sorunu olmayan 45+ kadınlarda genellikle testsiz değerlendirme; yüksek FSH otomatik tanı değildir. Hormonal ilaçlar yorumda dikkate alınır. | NICE NG23 1.3.1–1.3.6; aşağıdaki PDF/search metni |
| Kan testleri | Tüm testler tek paket gibi okunabilir | Kan sayımı/kansızlık ve ferritin/demir deposu açıklaması; B12/tiroid belirtilere ve öyküye bağlı; hepsinin birlikte istenmesi gerekmez | NHLBI; NICE NG239 1.2.5–1.2.6; NG145 1.2.1 |
| Metabolik göstergeler | Teknik liste açıklamasız; eski seyir yeni ölçümün önüne geçebilir | Lipid/glukoz/HbA1c anlamları açıklandı; hem güncel değer hem zaman içindeki değişim korunur. Kişisel eşik, tanı ya da tarama aralığı eklenmedi. | NIDDK A1C açıklaması; mevcut genel risk çerçevesi korundu |
| Kemik ve D vitamini | Ağrı başlangıcı çağrışımı; D vitamini rutin ölçüm gibi okunabilir | Kemik kaybı belirti vermeyebilir; kemik yoğunluğu ölçümü yaş/kırık riskine bağlı; özel endikasyonu olmayan sağlıklı yetişkinlerde rutin D vitamini testi önerilmez | NIAMS; USPSTF 2025; Endocrine Society 2024 öneri 3 ve 5 |
| Taramalar | Smear ve jinekolojik kontrol aynı listede | Mamografi, HPV/smear ve bağırsak taraması kayıtları; jinekolojik görüşme başlıkları ayrı. Sayısal tarama takvimi veya kişisel öneri üretilmedi. | Sağlık Bakanlığı tarama bilgisi |
| Bilimsel Editör Notu | Mevcut imzalı dört paragraf | Sözcüğü sözcüğüne korundu. Article-log #7 notun önceki turda da korunduğunu söylüyor; hekimin özgün yanıtı/yanıt tarihi bu hedef kayıtlarında bulunamadığından yeni katkı veya yeni onay olarak sunulmadı. | Önceki commit ve onay kaydı; özgün yanıt aktarımı doğrulanamadı |

### Kontrol edilen kaynaklar (3 Ekim 2026)

- [NICE NG23, menopozun belirlenmesi](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations), [resmî PDF](https://www.nice.org.uk/guidance/ng23/resources/menopause-diagnosis-and-management-pdf-1837330217413): doğrudan açılış timeout/403 verdi; resmî kaynağın arama indeksindeki 1.3.1–1.3.2 metni ve 1.3.4 test sınırları okundu. Yeni 40–45 yaş algoritması veya ilaç protokolü eklenmedi.
- [NICE NG239, B12 eksikliğinde test seçimi](https://www.nice.org.uk/guidance/ng239/chapter/recommendations): doğrudan açılış 403; resmî arama metninde 1.2.5–1.2.6 okundu.
- [NICE NG145, tiroid testleri](https://www.nice.org.uk/guidance/NG145/chapter/recommendations): doğrudan açılış 403; resmî arama metninde 1.2.1 okundu.
- [NHLBI, demir eksikliği anemisi](https://www.nhlbi.nih.gov/health/anemia/iron-deficiency-anemia): kan sayımı/ferritin testlerinin tanıdaki rolü, resmî arama metni.
- [NIDDK, A1C testi](https://www.niddk.nih.gov/health-information/diagnostic-tests/A1C-test): son birkaç aylık ortalama kan şekeri bilgisi, resmî arama metni.
- [NIAMS, osteoporoz](https://www.niams.nih.gov/health-topics/osteoporosis): kırığa kadar belirti vermeyebilme, resmî arama metni.
- [USPSTF, osteoporoz taraması (2025)](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening): tam sayfa okundu; yaş/menopoz sonrası kırık riskine göre tarama. Genç perimenopozal kadınlara topluca uygulanmadı.
- [Endocrine Society, D vitamini (2024)](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease): tam öneri sayfası okundu; özel ölçüm endikasyonu olmayan sağlıklı yetişkinler için rutin test sınırı. Eksiklik şüphesi/tedavisi hakkında genel yasak üretilmedi.
- [Sağlık Bakanlığı, kanser tarama bilgisi](https://iyideredh.saglik.gov.tr/TR-1074047/kanser-tarama.html): mamografi ve HPV-DNA başlıkları, resmî arama metni.

## Hasta eğitimi değeri ve alıntılama sınırı

Dosya hazırlama, belirti/tarih/ilaç kaydı ve testsiz değerlendirmenin uygun klinik bağlamı açık biçimde aktarılıyor. Kişisel test reçetesi, tanı, tarama takvimi veya kanıt derecesi çıkarımı için kullanılamaz. Bu geçiş tam bir yeni tıbbi araştırma veya hekim incelemesi değildir; değişen klinik açıklamalar yayın öncesi gerçek tıbbi/editör incelemesine açıktır.

## Yerel doğrulama

- TypeScript (`npm run lint`), sıkı şablon/bütünlük (`npm run articles:audit:templates`), compliance, üretim build, SEO audit ve `git diff --check` geçti. Hedef dışındaki mevcut compliance/lexicon uyarıları bu kapsamda değiştirilmedi.
- Üretilen hedef HTML: tek H1, tek SSS yüzeyi, tek FAQPage, 3/3 görünür soru-cevap/şema eşliği; 9 TOC hedefi mevcut. `Article` / Estranova Editörleri, canonical ve `dateModified=2026-10-03` tutarlı.
- Bilimsel Editör Notu ve Evidence bileşenlerinin özellikleri onay tabanıyla birebir aynı. SSS başlığı ve TOC etiketi “Kontrol dosyası hakkında sorular” olarak eşlendi; doğrulanmamış sıklık iddiası taşıyan varsayılan giriş kullanılmadı.
- Skill kontrolleri için Astro özet/gövde/editör notu/disclaimer ile hedef SSS statik metne çıkarıldı. Fidelity yalnızca yeni `45` yaş bilgisinin üç kullanımını işaretledi; kaynak ve popülasyon sınırı yukarıda açıklandı. Ham Astro/özellikler ayrıca elle karşılaştırıldı. Editorial-check aday bulmadı; bu sonuç hekim onayı veya insan yazarlığı kanıtı değildir.
- Tarayıcı bağlantısı `privileged native pipe bridge is not available; browser-client is not trusted` hatasıyla açılamadı. Görsel masaüstü/mobil kontrol tamamlanamadı; HTML kontrolü görsel doğrulama diye sunulmaz.
- Başlangıç canlı sürümü HTTP ile okundu. Yeni yerel revizyon yayımlanmadı; canlı değişiklik iddiası yok.

## Yayın öncesi ikinci kontrol — 3 Ekim 2026

Kullanıcı “editör/tıbbi inceleme Commit push deploy.” diyerek ikinci kontrolü ve yayın işlemlerini istedi. Bu söz gerçek hekim onayı verilmiş gibi yeniden yazılmadı; doğrudan editör/tıbbi onay anlamının netleştirilmesi istendi. Ardından kullanıcı “Evet, editör ve tıbbi onay veriyorum; yayımla” yanıtını verdi. `article-approvals.ts` bu yeni yanıtla güncellendi ve paket onaylanan arşivine taşındı. Yapay zekânın kaynak kontrolü ile kullanıcının gerçek onayı ayrı kaydedildi.

Makale ve üç SSS yeniden okundu; yeni düzeltme gerektiren bulgu çıkmadı. NIDDK A1C açıklaması ve Endocrine Society öneri sayfası bu turda tam olarak yeniden açıldı. NICE doğrudan erişimi yine 403 verdi; önceki resmî arama indeksindeki metne dayalı doğrulamanın sınırı korundu. Bilimsel Editör Notu mevcut sürümdeki gibi kaldı; yeni hekim katkısı uydurulmadı.

Tam `npm run build:ci` geçti (lint, compliance, sıkı içerik/şablon kapıları, üretim build ve SEO). Hedef HTML kontrolü tekrar geçti: tek H1, tek FAQPage, 3/3 SSS eşliği, 9 TOC hedefi, değişmemiş editör notu/Evidence özellikleri. Uzak `main` ile HEAD eşit; GitHub erişimi ve Git bağlantısı çalışıyor. Mevcut production Git entegrasyonu Cloudflare Pages üzerinden otomatik yayınlıyor; push sonrasında yeni commit için check/e2e/Pages sonucu ve cache-bypass custom-domain kanıtı ayrıca alınacak.
