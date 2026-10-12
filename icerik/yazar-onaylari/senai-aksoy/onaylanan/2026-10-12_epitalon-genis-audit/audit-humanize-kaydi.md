# Epitalon — geniş audit ve humanize düzeltmesi

Tarih: 12 Ekim 2026. Dil: Türkçe. Yazar: Senai Aksoy. Tür: clinical-guide.
Durum: Yerel revizyon; yeni tıbbi/editör onayı bekliyor. Commit, push ve deploy yapılmadı.

## Onay tabanı ve gerçek hekim metni

Başlangıç çalışma ağacı temizdi. Son kayıtlı onay 12 Ekim 2026, commit `ad79f5d9`.
Bu commit ile hedef dosya arasında işe başlarken fark yoktu. Başlangıç metni
`onceki-surum.astro` içinde korunuyor.

Gerçek hekim yanıtlarının dayanağı:
`icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-12_epitalon-telomer-yaslanma.json`.
Bu kayıt, beş cevabın KC tarafından Dr. Aksoy yanıtı olarak iletildiğini ve Mumcu
incelemesinin bildirildiğini söylüyor. Kayıt özgün cevapların tam metnini içermiyor;
bu nedenle özgün kullanıcı mesajından bağımsız kelime kelime doğrulama yapılamadı.
Bu turda kayıtlı onaylı sayfa baz alındı; yeni hekim deneyimi veya yeni cevap üretilmedi.

Beş görünür cevap, şu tek dil düzeltmesi dışında kaynak sürümüyle birebir aynı:
“takip etmenin en iyi yolu” → “takip etmenin uygun yolu”. Site compliance kontrolü
`en iyi` sözünü engelledi. Değişiklik önerilen okuma yolunu ve klinik anlamı koruyor.
`verify.mjs` bu değişiklik dışında SSS farkına izin vermiyor.

## Tıbbi bulgular ve uygulanan düzeltmeler

| Konum / önceki ifade | Sorun | Son metin / kaynak |
|---|---|---|
| Özet, tanım, kapanış: pineal bezden gelen peptid | Sentetik Epitalon ile bez özütü Epithalamin karışıyor | Sentetik tetrapeptid ve özüt ayrımı açık. FDA 2026 dosyası, s.8 ve 12 |
| Telomer temel: menopoz sonrasında kısalma hızlanır; östrojen çekilmesinin payı var | Nedensellik ve kesinlik yüksek | Dalgård ve ark. 2015 uzunlamasına kan hücresi bulgusu verildi; yumurtalık yaşlanmasına genellenmedi |
| İki mekanizma: kanser hücresinde ölümsüzlük benzeri telomer uzaması yaratmaması | Aynı paragrafta kanser hücresinde telomer uzaması anlatılıyor; sonuç çelişkili | İki meme kanseri hattındaki telomer uzaması ve ALT işaretleri birlikte anlatıldı |
| Güvenlik / pratik: ALT “rahatlatıcı”, teorik güvenlik kapısı | Hücre deneyi insan kanser güvenliğini test etmiyor | Klinik güvenlik çıkarımı kaldırıldı; kanser riskinin kanıtlanması ile dışlanamaması ayrıldı |
| “Sağlıklı hücrelerde ALT aktive olmuyor” | Bir normal modelde küçük, anlamlı olmayan artış var; mutlak ifade uygun değil | “Normal hücre modellerinde anlamlı bir ALT artışı saptanmadı” |
| ALT on kata kadar | Hangi hücre hattı olduğu yok | 21NT yaklaşık 10 kat; BT474 yaklaşık 3 kat. Klinik risk oranı olarak sunulmuyor |
| “Yakın zamanda kapsamlı çalışma” | Tarih ve model belirsiz | 2025; IBR.3, HMEC, 21NT ve BT474. Normal hücreler üç hafta, kanser hücreleri dört gün |
| Mekanizma sağlam / kanıt düzeyi 3; ileride 3D ve insan çalışması için düzey 4 | Preklinik bulgu klinik kanıt gibi derecelendiriliyor | Epitalon'un klinik etkinlik/güvenlik çıkarımı zayıf kanıt olarak sınırlandı; araştırma basamakları kanıtlı tedavi gibi etiketlenmedi |
| Küçük Rus insan serileri | Epithalamin / Epitalon ayrımı yok | 2026 resmî değerlendirmesinin kapsamı açıklandı; uykusuzluk değerlendirmesi tüm olası kullanım alanlarına genellenmedi |
| Türkiye ve birçok ülkede onaysız | Güncel ulusal ruhsat kaydı doğrulanmamış | Ürün özelinde resmî ruhsat doğrulaması gerektiği belirtildi; genel Türkiye ruhsat iddiası çıkarıldı |
| Klinik not: yaşam tarzı ardından eksiklik takviyesi ardından deneysel peptid | Deneysel kullanıma bir hazırlık basamağı izlenimi | Risk değerlendirmesinin Epitalon'u kanıtlı tedaviye dönüştürmediği açıklandı; eksiklik tedavisi telomer uzatma yöntemi olarak sunulmuyor |

Temel araştırmanın 15 Kasım 2025 tarihli şekil düzeltmesi ayrıca okundu.
Kaynaklar: 6 numaralı kayıt, 7 tıklanabilir bağlantı (düzeltme dahil).

- [Hücre çalışması](https://doi.org/10.1007/s10522-025-10315-x)
- [Yayımlanmış düzeltme](https://doi.org/10.1007/s10522-025-10326-8)
- [Menopoz ve telomer dinamiği](https://doi.org/10.1093/ije/dyv165)
- [2026 resmî değerlendirme](https://www.fda.gov/media/193345/download)
- [Ürün güvenliği uyarısı](https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks)
- [Temel telomer açıklaması](https://www.genome.gov/genetics-glossary/Telomere)
- [Telomer testlerini yorumlama](https://amecenter.ucsf.edu/telomere-testing)

## Gramer, yerel ifade ve humanizasyon

Gramer: “Vaad” → “Vaat”, “Vaadlere” → “Vaatlere”. Önceki “Türkçe'de”,
gereksiz kişisel kariyer ve dil okuma anlatısı kaldırılan paragrafla birlikte temizlendi.
İngilizce “In Vitro'dan” başlığı Türkçe “Laboratuvardan” oldu; anchor korundu.

Yerel ifade: senesens, tetrapeptid, hTERT ve ALT ilk kullanımlarda açıklandı.
Soyut “umut etiketi”, “gri kanal”, “bilgi panzehiri”, “mekanizma sağlam” kapanışları
yerine çalışmanın neyi ölçtüğü ve okurun neye bakacağı anlatıldı.

Humanizasyon: özet ana soruya doğrudan cevap veriyor. Her bölümün işlevi ayrı:
temel biyoloji → molekül kimliği → deney sonuçları → güvenlik yorumu → insan
kanıtı → ürün sınırları → gerçek hekim yanıtları → okuma sonucu. Yeni kişisel
anekdot, hasta sözü, klinik deneyim veya onay eklenmedi. Hassas konu nedeniyle mizah H0.

## İddia sayımı

Ana metin, görünür özet ve hekim notunda elle sayılan ayrı yüzey/bölümler;
SSS'nin her cevabı ayrı bir yüzey sayıldı. Aynı paragraftaki kelime tekrarı ikinci
sonuç sayılmadı. Başlık, meta açıklama ve kaynak künyesi bu tabloda sayılmadı.

| Sonuç | Önce | Sonra | Kalan tekrarın işlevi |
|---|---:|---:|---|
| Laboratuvar sonucu insanlarda yarar/güvenlik kanıtı sağlamaz | 10 | 7 | Özet, hayvan aktarımı, hücre sonucu, güvenlik, insan kanıtı, bağımsız SSS, klinik not |
| Normal ve kanser hücrelerinde farklı telomer uzatma yolu | 6 | 4 | Özet, sonuç, güvenlik ayrıntısı, klinik yorum |
| Enjeksiyon ürününün içerik/saflık güvenliği belirsiz | 3 | 2 | Ürün bölümü ve bağımsız okunan gerçek SSS |
| Menopozu geciktirme kanıtı yok | 1 | 2 | İlk ekrandaki doğrudan yanıt ve gerçek SSS; özetin eksik ana cevabı tamamlandı |

`structure-check --claims` ayrıca sözcük düzeyinde 10→7 klinik kanıt adayı,
10→8 ALT ifadesi, 4→5 ürün güvenliği sözcüğü ve 4→7 menopoz sözcüğü buluyor.
Bu sayılar yukarıdaki anlam sayımıyla aynı şey değil: başlıklar, bir paragraftaki
birden fazla sözcük ve kaynak başlıkları da betik sayımına giriyor. ALT kalıbı
“alt birim” gibi yanlış eşleşmelerden arındırıldı.

Yapı raporundaki kısa kapanış adayları elle okundu: kaynak başlıkları ve dipnot
listesi gerçek paragraf kapanışı değil; gerçek hekim cevaplarındaki kısa cümleler
korundu. Gövdede kalan kısa cümleler molekül kimliği, deney koşulu veya ölçüm
sınırı hakkında farklı bilgiler veriyor, birbirinin yerine geçmiyor.
Ortalama cümle sözcüğü 14,5→11,4; standart sapma 6,5→5,6. Kaynak künyeleri
son ölçümü kısaltıyor; bu bir kalite veya yazarlık puanı değil.

## Kaynak, SSS, şema ve görsel yüzeyler

- Önemli iddialar numaralı görünür dipnotlarla kaynaklara bağlandı. Kurum adı
  gövdeye yığılmadı; kurumlar yalnız kaynak künyelerinde yer alıyor.
- Kullanılmayan eski dört model cevabı `article-faqs.ts` kaydından çıkarıldı.
  Görünür beş gerçek cevap sayfada korundu. FAQPage üretilmiyor; ikinci SSS yüzeyi yok.
- Meta açıklama ve RSS/kart manifesti yeni ana cevapla eşleştirildi.
- İlk yayın 8 Mayıs 2026 korundu; görünür ve schema güncellemesi 12 Ekim 2026.
- OG ve Article/MedicalWebPage image, mevcut byline/kart görseliyle eşleşiyor.
  Görsel dosyaları ve üst hero eşlemesi değişmedi. Makaledeki hero/byline ve
  hedef kart alt metni görselde görülen sahneye indirildi; üretim promptu kaldırıldı.
- Masaüstü TOC'nin sticky davranışı ortak kabuktaki overflow-hidden nedeniyle
  çalışmıyordu. Bu sayfaya scoped overflow:clip ve viewport içinde kaydırılabilir
  TOC eklendi; ortak bileşen veya diğer makaleler değiştirilmedi.

## Doğrulama ve sınırlar

`npm run build:ci`: lint, compliance, yayın bütünlüğü, strict templates,
encoding, renk/dil/tarih kontrolleri, 140 sayfalık build ve 160 SEO çıktısı geçti.
İki soft-lexicon uyarısı hedef dışındaki sayfa ve audit belgesinde; değiştirilmedi.
`git diff --check` temiz.

`verify.mjs`: tek H1, 5 gerçek cevap, 6 kaynak, geçerli tüm fragment linkleri,
benzersiz ID, doğru yayın/güncelleme tarihi, OG/schema görsel eşleşmesi ve
Mumcu reviewer kimliği kontrol edildi. Evidence etiketleri 21→17; azalmanın
nedeni tekrarların ve gereksiz genel etiketin kaldırılması, klinik güvenlik
iddialarının örtülmesi değil.

`editorial-check` 0 aday. `check-fidelity` sayı/atıf farklarını işaretliyor;
bu farklar yukarıdaki tıbbi düzeltmeler, kaynaklar ve tarih/araştırma kapsamı
eklemelerinden geliyor. Eski %10–15 kanser-genellemesi ve dolaylı hayvan ömrü
iddiası çıkarıldı; insan risk oranı üretilmedi.

`rendered-check` yalnız 6 “uncited-source” adayı veriyor. Betik kurum adı veya
dış linki gövdede arıyor; Estranova numaralı dipnot rejiminde bunlar yanlış
pozitif. Her kaynak için çalışan #kaynak-N bağlantıları elle/DOM ile doğrulandı.

Tarayıcı: Codex önizleme bağlantısı kurulamadı; Chrome DevTools ile yerel build
incelendi. 390×844 mobil ve 1440×960 masaüstünde yatay taşma yok, iki makale
görseli yüklendi, beş SSS göründü. Screenshot incelemesi hero ve gövdeyi kapsadı.

Cache bypass ile canlı URL HTTP 200: eski “rahatlatıcı” güvenlik yorumu var;
bu revizyonun kaynak dosyası 193345 linki yok. Canlı içerik, yerel revizyonla
eşit değil. `live-once.html` bağımsız başlangıç kanıtı olarak saklandı.

Hasta eğitimi: molekül kimliği, biyobelirteç/klinik sonuç ve deneysel ürünün
belirsizliği anlaşılır biçimde ayrılıyor. AI/web ikincil kaynak kullanımı için
bu sınırlamalar korunmalı; insanlarda etkinlik, uzun ömür, menopoz gecikmesi
ve güvenli doz hakkında olumlu tedavi kanıtı olarak alıntılanamaz.

## Açık iş

Gövde, özet, güvenlik yorumu ve Mumcu editör notu esaslı değişti. Önceki onay
bu revizyonun tıbbi onayı olarak sunulamaz. Yeni metnin KC editör/tıbbi inceleme
onayı gerekiyor. Eski klinik katkı ve onay arşivi değiştirilmedi.
Türkiye için ürün özelinde güncel ruhsat kontrolü yapılmadı; kesin bir genel
ulusal ruhsat hükmü verilmedi. Hekim cevaplarının özgün tam kullanıcı mesajı
bulunmadığı için ilk aktarım denetiminin bu sınırı kayıtta açık tutuldu.
