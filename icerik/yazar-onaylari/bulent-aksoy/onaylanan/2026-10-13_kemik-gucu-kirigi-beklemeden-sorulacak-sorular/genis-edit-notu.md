# Kemik gücü — 13 Ekim 2026 geniş edit

Önceki birleşik sürüm kullanıcı tarafından onay geldiği bildirilerek teyit edildi. O kaynak `../../onaylanan/2026-10-13_kemik-gucu-kirigi-beklemeden-sorulacak-sorular/` altında saklandı. Yeni geniş edit bu klasörde; kaynak `makale-kaynak.astro`, tam önizleme `makale-onizleme.html`. Kullanıcı yalnızca onay bildirimini verdi; yazarın ham form yanıtı, yanıt tarihi veya stil puanı uydurulmadı.

## Editoryal değişiklikler

- Gramer: uzun isim zincirleri ve belirsiz gönderimler sadeleştirildi; hitap tutarlı biçimde siz. Kalsiyum paragrafındaki çoğul gönderim düzeltildi.
- Doğal Türkçe: DXA, T/Z skorları, FRAX ve 25(OH)D ilk kullanımda açıklandı; VKİ karşılığı kullanıldı, gereksiz kısaltmalar azaltıldı. “Pratik bütünleşim” yerine “Günlük hayata yansıması” yazıldı.
- Humanizasyon: uzun açılış iki cümlelik ledeye indirildi; savunmacı teselli ve soyut vecize kapanışları çıkarıldı. Kas ve denge bölümü günlük hareket kapasitesine, kapanış ise sonraki görüşmenin somut çıktısına bağlandı. Korku dili veya yeni kişisel deneyim eklenmedi.
- Başlık ve mevcut H2 bağlantıları korundu. Özet klinik rehber türüne uygun hale getirildi; SEO açıklaması ve görsel alt metni sadeleşti. Görsel dosyası/üst hero değişmedi.
- SSS metinleri düzeltildi; beş soru aynı kaldı. Paket içindeki `faqItems` hem görünür SSS'yi hem FAQ şemasını besliyor; yayınlanan ortak SSS dosyası değiştirilmedi. SSS Bülent makalesinin genel sorularıdır; Senai'nin yanıtları aktarılmadı veya Bülent'in özgün sözleri diye sunulmadı.
- TOC sırası gerçek DOM sırasıyla eşleştirildi: kaynaklar, ardından SSS. Kaynak bölümü tek prose panelinde tutularak bölüm sayacı korundu.

## Anlam ve kaynak kaydı

| Nokta | Önceki ifade / sorun | Bu turdaki sonuç ve dayanak |
|---|---|---|
| T-skoru | −2,5 hem osteopeni aralığında hem osteoporoz sınırında görünüyordu | Osteopeni −1,0'ın altında ve −2,5'in üzerinde; osteoporoz −2,5 ve altı. [ISCD 2023](https://iscd.org/official-positions-2023/) ile sınır ve menopoz geçişi açıklaması kontrol edildi. |
| Z-skoru | Menopoz öncesi kullanım yaş/erken menopoz paranteziyle karışıyordu | Menopoz öncesi kadınlar olarak sadeleştirildi; menopoz geçişinde T-skorunun kullanılabileceği ayrıca belirtildi. Z-skoru −2,0 sınırı korunuyor. |
| Tarama | Kırık/steroid öyküsü, genel tarama önerisinin devamı gibi okunabiliyordu | [USPSTF 2025](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/osteoporosis-screening) 65+ ve artmış riskli 65 altı menopoz sonrası grubuyla korunuyor. Bilinen osteoporoz, düşük travmalı kırık ve ilaç kaynaklı kemik kaybının ayrı değerlendirme olduğu açıklandı. |
| Protein | 1,0–1,2 g/kg tüm 40+ kadınlara genellenebilirdi | [ESCEO 2014, PMID 25082206](https://pubmed.ncbi.nlm.nih.gov/25082206/) özeti resmi NCBI EFetch üzerinden okundu. 50 yaş sonrası menopoz grubuyla sınırlandı; 70 kg → 70–84 g örneği korunuyor. Evrensel hedef gibi sunulmuyor. |
| Kalsiyum | 1000/1200 mg doğrudan takviye dozu sanılabilirdi | [NIH ODS](https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/) tablosuyla yaş grupları kontrol edildi; besin + varsa takviye toplamı olduğu belirtildi. |
| D vitamini | Sağlıklı yetişkin taraması ile osteoporoz değerlendirmesi ayrışmıyordu | [Endocrine Society 2024](https://www.endocrine.org/clinical-practice-guidelines/vitamin-d-for-prevention-of-disease) rutin test önerisi uygun popülasyonla korundu. Klinik gerekçe bulunduğunda ayrı değerlendirme açıklaması eklendi; test/doz reçetesi yok. |
| Türkiye | Rakamlar eski ve seçilmiş örneklemlere ait | FRACTURK %33,3 femur boynu ölçümü ve %14,6 kalan yaşam olasılığı, Kirazlı %75–90 / yaklaşık %25, Semiz 44.592 kadın ve %78,7 / %50,5, Samanci 85.892 yetişkin ve kadınlarda %68,6 resmi NCBI özetleriyle kontrol edildi. Samanci'nin 2016–2025 dönemi eklendi. Hastane örneklemi, eski tarih ve kişisel risk/ülke geneline genellenememe sınırları korunuyor. |
| İlaç güvenliği | Terimler ve atıf yakınlığı dağınıktı | MHT ve raloksifen açıklaması sadeleştirildi. [NOGG tedavi bölümü](https://www.nogg.org.uk/full-guideline/section-6-pharmacological-treatment-options) ile pıhtı/kanser güvenlik sınırı ve plansız denosumab kesilmemesi kontrol edildi. Denosumab geçiş uyarısı korunuyor; doz veya kişisel ilaç seçimi eklenmedi. |

Fidelity aracı Astro'yu doğrudan okuyamadığı için önce/sonra statik gövde, tablo, uyarı ve SSS açıkça Markdown'a çıkarılarak karşılaştırıldı. Sayısal farklar: yeni 2016–2025 çalışma dönemi, protein grubunu sınırlayan 50/40 yaş açıklamaları, 2020 uzlaşı yılı ve iddiaya yakınlaştırılan atıf sayıları. Mevcut klinik oran, doz/aralık, 10 yıllık risk süresi ve güvenlik uyarıları azaltılmadı. T-skoru sınırındaki eşitsizlik düzeltmesi ayrıca yukarıda izleniyor; otomatik sayısal kontrol bu anlam farkını tek başına kanıtlamaz.

## Tekrar değerlendirmesi

Özet + gövde + tablo + genel soru-cevap metni Markdown'a çıkarıldı; başlık/metaveri ve JSX alt metni ayrıca elle okundu. `structure-check.mjs --claims` ile ifade ailesi tarandı, aynı hükmün farklı söylenişleri elle karşılaştırıldı. Aşağıdaki sayılar kelime ailelerinin sayımıdır; her eşleşme aynı klinik sonuç sayılmadı.

| İfade ailesi | Önce | Sonra | Kalanların işlevi |
|---|---:|---:|---|
| Ölçüm/tek başına/birlikte değerlendirme | 11 | 7 | Risk, yaşa göre tarama ayrımı, bağımsız SSS ve editör notu; tek rakam hükmünün ayrı kalın tekrarı kaldırıldı. |
| Sessizlik / belirti vermeden ilerleme | 7 | 4 | Özet, bölüm başlığı ve giriş kemik kaybını anlatır; kas bölümündeki eşleşme farklı bir konu, ayrı gerekçeyle kaldı. |
| Kırık ortaya çıkmadan / kırılmasını beklememe | 3 | 1 | Gövdede yazarın ortopedik yaklaşımında kaldı; Türkiye verilerinin sonundaki ve kapanıştaki tekrar kaldırıldı. Başlığın ana konusu korunuyor. |
| Rutin D vitamini testi / herkese test | 2 | 3 | Beslenme ana açıklaması, hastane örnekleminin genel tarama gerekçesi olmaması ve tek başına okunan SSS güvenlik sınırı. |

Anlam üzerinden ek kontrol: ağrısız kemik kaybı hükmü hem önce hem sonra özet + H2 + girişte üç görünür yerde. Diğer “sessiz” eşleşmeleri yazar yaklaşımı veya kas kaybıyla ilgiliydi. Metaverinin gövdede görünmeyen tekrarları sayıya eklenmedi.

## Kontroller ve sınırları

- Üç elle okuma yapıldı: gramer/sentaks, yerel ifade/terminoloji, insanlaştırma/ritim; kaynak metinle son karşılaştırma tamamlandı.
- `node scripts/check-editorial-lexicon.mjs`: temiz. Paket `icerik/` altında olduğu için site lint'i taslağı kapsamaz; taslak ayrıca aynı sözlüğe karşı taranır.
- `editorial-check.mjs`: 0 aday. `structure-check.mjs`: kalan kısa kapanışlar farklı bilgi taşıdığı için korundu; kaynak link etiketleri “PubMed kaydı” aynı künyenin içinde bulunduğundan kaynak belirsizliği değil. H2 soru adayları mevcut SEO başlıklarıdır, korunuyor. Markdown dönüşümünden kaynaklanan noktalama boşluğu gerçek derlenmiş HTML'de yok.
- Geçici ayrı Astro projesinde hedef makale başarıyla derlendi. 1 H1, 12 TOC hedefi, 15 kaynak hedefi/atıf, 5 görünür SSS ve 5 FAQ şema yanıtı karşılaştırıldı; tamamı eşleşti. Bu, tam site regresyonu veya yayın kanıtı değildir.
- `rendered-check.mjs` yeni derlenmiş HTML'de çalıştı. Tek aday `uncited-source`: anlatı gövdesinde kuruluş adı yerine 1, 2, 5, 8, 9 numaralı atıflar kullanıldığı için site kurallarına göre yanlış pozitif; beş kaynak da görünür numaralı atıfla kullanılıyor. Diğer derlenmiş sayfa adayları yok.
- Bilimsel inceleyici varsayılan Senai olarak kaldı. Mumcu adına inceleme, tarih veya onay eklenmedi. Kaynak kontrolü tıbbi onay yerine geçmez.
- Tüm 15 kaynağın tam metin doğrulaması yapılmadı. Bu turdaki kontrol tablodaki kaynak/iddialarla sınırlı; eski metindeki 5–10 yıl ifadesi ve her güvenlik iddiasının bütün ayrıntıları Mumcu incelemesine açık.
- `src/pages/` altındaki iki yayındaki makale, kullanıcıya ait `static-articles.ts`, yönlendirmeler, manifest ve geçmiş `article-approvals.ts` değiştirilmedi. Commit, push, deploy ve canlı yayın yapılmadı.

Yeni tıbbi açıklama ve SSS revizyonları nedeniyle bu sürümün yazar/tıbbi incelemesi bekliyor. Önceki onay saklanan önceki kaynağa bağlıdır. Yeni kaynakla eşleşen kontrol formu pakette yeniden üretildi; eski canlı URL taslak önizlemesi olarak kullanılmıyor.

## 13 Ekim 2026 — audit düzeltmeleri (ikinci tur)

Önceki geniş edit `onceki-surum-genis-edit-bc2454.astro` olarak saklandı. Yeni kaynak SHA-256: `e991c6619046d2a627885b2054e5e9bd3edeec23ed8124cd693bb0ac04265052`.

- İnceleyici: `medicalReviewer` = Dr. Alper Mumcu (KC editör kararı). Varsayılan Senai gösterimi kaldırıldı; Mumcu incelemesi tamamlanmadan yayın yok.
- Hekim yanıtı sadakati: "her görüşmede sorarım" (kaynakta yok) → "Kemik erimesi riskini değerlendirirken … de sorarım". Bülent'in kalın mesajı ve "hormonal değişiklikleri tamamen önleyemeyiz…" cümlesi yanıtından birebir geri eklendi. Teyit: `bulent-teyit-sorusu.md`.
- Atıf: −1,8 örneği Bülent'in yorumu olarak yazıldı, ISCD [2] atfı kaldırıldı. USPSTF "destekliyor" → "öneriyor" (B önerisi). Egzersizde hücre düzeyi iddia çıkarıldı; [8] yerine [14][15].
- Künyeler PubMed'den tamamlandı: [4] JAMA 2025;333(6):498–508, PMID 39808425; [13] doi:10.1186/s12889-026-26583-2.
- Gramer/ifade: özet noktalı virgülü; "Hastanın yaşına"; "kimin … izlenmesi"; kırmızı bayrak girişi (belirtiler beklememelidir → randevuyu beklemeyin); "kullanışlı" → "gerçekçi"; "döneme ilişkin" cümlesi.
- Tekrar: özet 6 → 3 cümle; düşme sonrası uyarısı özet ve bölüm girişinden çıkarıldı (kutu + SSS'de kalıyor). Karar zincirindeki üç "üçlü" yapı ikiye indi. İnkâr çerçevesi 7 → 3 (kalanlar: veri genellenemez/nedensellik yok gibi gerekli sınırlar).
- Bülent profili: karar zincirine cerrahi sınır paragrafı ve kapanış, onaylı önceki taslaktan geri alındı.
- İçindekiler: "Türkiye Bağlamı" → "Türkiye Verileri" (soft_ban); SSS başlığı TOC ile aynı yazıma çekildi.
- Kalan / bilerek yapılmayan: VKİ 19 eşiği Mumcu'ya; Türkiye ve Tıbbi Seçenekler bölümlerine somut sahne eklenmedi (klinik bölüm, uydurma deneyim eklenmez); yeni SSS'nin `article-faqs.ts`'e taşınması yayın adımında. `makale-onizleme.html` ve `kontrol-formu.html` bu sürümden önce üretildi; yazara gönderilmeden yeniden üretilmeli.
- Kontroller: tag dengesi tamam, 15 kaynağın hepsi metinde atıflı, sözlük anahtarlarında eşleşme yok, `editorial-check` 0 aday, `structure-check` 3 aday (kısa kapanışlar farklı bilgi taşıyor; iki "olası soru başlığı" mevcut SEO başlığı; noktalama boşluğu metin çıkarma artefaktı).

## 13 Ekim 2026 — onay bildirimi ve son düzeltmeler (üçüncü tur)

- Kullanıcı Mumcu ve Bülent onaylarını bildirdi (`onay-bildirimi.json`). Ham yanıt yok. Kapsam (hangi SHA) teyit edilmedi; bu teyit yapılana kadar paket `onaylanan/`a taşınmaz.
- Yeni SHA-256: `1bd88483d5a49134d202a277138f90aaa8e6651dec4ff04b39b50975a376e206`.
- Düzeltmeler: 165. satır bozuk cümlesi düzeltildi; özet cümlesi sadeleştirildi; VKİ eşiği (19 kg/m²) kaldırıldı; ilaç dozu ifadesindeki atıf çıkarıldı; ISCD [2] yerine [14] (erken menopoz / risk değerlendirmesi); NOGG [15] egzersiz, HRT ve bifosfonat cümlelerinden çıkarıldı (NOGG'nin bu bölümlerini doğrulayamadık); HRT'deki "10 yıl / 60 yaş" kuralı kaynaksız olduğu için kaldırıldı; Semiz 2025 cümlesi PubMed özetine göre düzeltildi (beş il, hastane kayıtları); JSX satır kırılması giderildi; byline alt metni özgün haline döndürüldü.
- Açık: `makale-onizleme.html` ve `kontrol-formu.html` hâlâ önceki sürüme ait. Üretici betik canlı sayfadan okuduğu için şu an doğrudan çalıştırılmadı; betik `src/pages` altındaki onaylı sürümü okur ve çıktıyı bu paketin üstüne yazar. Önizleme gerekiyorsa taslağı kaynak alan ayrı bir üretim gerekir.
