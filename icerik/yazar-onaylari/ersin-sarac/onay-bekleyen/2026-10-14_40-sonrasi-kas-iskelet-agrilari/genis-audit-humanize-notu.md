# 40 Sonrası Diz, Kalça ve Bel Ağrısı — 14 Ekim 2026 revizyonu

Bu rapor ilk düzeltme turunu kaydeder. İkinci audit sonrası güncel durum ve beş ek düzeltme için [revizyon-2-duzeltme-notu.md](revizyon-2-duzeltme-notu.md) dosyasına bakın; güncel kaynak `makale-kaynak.astro`, güncel önizleme `makale.html`.

Durum: kapsamlı audit, metin düzeltmesi ve yerel doğrulama tamamlandı. Yeni yazar onayı ve tıbbi inceleme bekleniyor. Commit, push, deploy ve yayın yapılmadı. Yeni metin yalnız bu pakette `makale-kaynak.astro` olarak tutuldu; mevcut rota ve ortak veriler değiştirilmedi.

## Başlangıç ve onay izi

- Çalışma başlangıcı: `f5954fd3412e84bbd0d7326797f2650c5198849f`.
- `src/data/article-approvals.ts:357–360` kaydı 4 Mayıs tarihli prelaunch editör reconciliation onayıdır; Ersin'in ham form yanıtı veya bu revizyonun tıbbi onayı değildir. Kaydı getiren commit: `106c944eeeb821ce9a12dedf729c6ddddd2c0000` (5 Mayıs). Bu commit ile güncel rota farkı okundu; sonraki değişiklikler özellikle görsel kabuk, SEO başlığı, makale türü ve ilgili okumalardadır.
- Eski paket `onay-bekleyen/2026-05-04_40-sonrasi-kas-iskelet-agrilari/` altında bulunuyor. Gerçek yeni yazar onayı varsayılmadı.
- Başlangıç kaynak kopyası `onceki-site-kaynak.astro`; yayındaki HTML cache bypass ile HTTP 200 olarak `live-before.html` içine alındı. Yayında da gövde içi beş soru ve altta ayrı üç soruluk SSS bulundu. Yerel ve canlı içerik ayrı değerlendirildi.
- Başlangıçta bulunan iki Bülent Aksoy paketi / görsel klasörü korunmuştur.

## Bulgular ve düzeltmeler

Konumlar `onceki-site-kaynak.astro` ve ortak FAQ kaynağındaki eski sürüme aittir.

| Öncelik | Konum | Bulgu ve düzeltme |
|---|---|---|
| Yüksek | Bel–diz–kalça bölümü, satır 148–164; editör notu 298–305 | Kronik bel ağrısı için genel 5/5 etiket ve diğer durumlarla ortak güçlü kanıt hükmü fazla genişti. Kronik **primer** bel ağrısında 2023 WHO egzersiz önerisinin koşullu ve düşük kanıt kesinliğinde olduğu açıklandı; etiket 2/5. Osteoartrit ve genel aktivite önerileri ayrı tutuldu. |
| Yüksek | Ne zaman destek, satır 205–216 | Üç ay ifadesi değerlendirme için bekleme eşiği olarak anlaşılabiliyordu. Kroniklik tanımı ile başvuru zamanı ayrıldı; günlük yaşam/uyku kısıtlanıyorsa daha erken değerlendirme görünür. |
| Yüksek | Kırmızı bayraklar, satır 221–233 | Yeni sfinkter sorunu/genital his kaybı diğer hekim başvurularıyla aynı düzeydeydi. Yeni idrar yapamama eklendi; acil servis yönlendirmesi açıklandı. Sıcak-şiş eklem ve ateş için aynı gün değerlendirme; travmayla üzerine basamama için acil değerlendirme ayrıldı. |
| Orta | Yaş ve denge, satır 126–141, 190–196 | Yağsız kütle, kas ve ağrı nedenselliği birbirine yaklaşıyordu; düşme verilerinin ileri yaş kapsamı belirsizdi. Gözlemsel menopoz verisi 3/5 olarak ayrıldı; yağsız kütlenin kasla eş olmadığı ve ağrı nedeni gösteremeyeceği belirtildi. Düşme önerisinin 65+ kapsamı görünür. |
| Orta | Hareket haritası, satır 174–184 | Günlük gözlemin görüntülemeden çoğu zaman daha kullanışlı olduğu kaynaksız karşılaştırma kaldırıldı. Muayeneyi tamamlayan ağrı/işlev gözlemi ve görüntülemenin planı değiştirmesi koşulu ayrıldı. |
| Orta | Gövde SSS satır 236–280; ArticleFAQ satır 275 sonrası; `article-faqs.ts:925` | İki görünür SSS, toplam sekiz soru ve aynı `sik-sorulanlar` kimliği vardı. Yeni paket yerel `faqItems` ile tek 5 soruluk yüzey ve birebir FAQPage eşleşmesi kullanır; ortak FAQ dosyası değiştirilmedi. Gövdeden taşınan görüntüleme ve yürüyüş bilgisi kaybolmadı. |
| Orta | Bütün gövde / kaynaklar | Kanıt etiketi vardı ama görünür kaynak zinciri yoktu. Bilimsel yazar için kısa kaynak bölümü ve [1]–[7] atıfları eklendi. NICE kilo yönetimi kapsamı fazla kilo/obezitesi olan kişilerle sınırlandı. |
| Düşük | Alt metin satır 87 | Görsel üretim talimatı, tahmini yaş ve konu/renk kompozisyonu açıklaması temizlendi; kısa, görseli tarif eden alt metin kullanıldı. Üst hero ve mevcut dosyalar aynı. |

Gramer/sentaks: belirsiz özne ve isim zincirleri sadeleştirildi; cümleler ilişki ve nedensellik ayrımını koruyor. Yerel ifade: “hareket paterni”, “pratik bütünleşim” gibi ağır ifadeler gündelik hareket ve işlev diliyle değiştirildi. Humanizasyon: tekrarlanan harita/sinyal/iki uç karşıtlıkları azaltıldı; açılışta sandalyeden kalkma, yürüyüş ve gün sonunda tutulma sahnesi var. H0 mizah; hasta anekdotu ve birinci tekil klinik deneyim uydurulmadı. Byline `ersin-sarac`, tür `editorial-guide`, SEO başlığı ve esas H2 anchor'ları korundu.

## İddia sayımı

`structure-check.mjs --claims iddialar.json` iki sürümde çalıştı. Aşağıdaki ilk sayılar ham sözcük eşleşmesidir; son sütun, aynı yüzeydeki iki ifadeyi ve kaynak-listesi açıklamasını ayıran elle bölüm sayımıdır. Sayılar yazarlık veya kalite puanı değildir.

| İzlenen sonuç | Ham önce → sonra | Metin yüzeyi önce → sonra | Kalan tekrar gerekçesi |
|---|---:|---:|---|
| Hareketin kişiye uyarlanması | 5 → 6 | 3 → 5 | Özet; osteoartrit kapsamı; başlangıç kapasitesi; bağımsız dinlenme SSS'si; bilimsel inceleme taslağında kanıt ayrımı. Kaynak listesindeki açıklama altıncı ham eşleşmedir. |
| Görüntülemenin sınırı | 4 → 3 | 3 → 2 | Gövde: görüntülemenin hangi koşulda düşünülmesi; bağımsız MR SSS'si. Eski görüntüleme üstünlüğü kaldırıldı. |
| İdrar-dışkı/genital his kaybında değerlendirme | 2 → 8 | 2 → 5 | Özet güvenliği; acil paragrafı; ayrı okunabilen kırmızı bayrak kutusu; bağımsız MR SSS'si; bilimsel not taslağı. Aynı cümlede iki belirti iki ham eşleşme üretebilir. Bu güvenlik tekrarı bilerek korunur. |

Yapı kontrolü: eski inkâr çerçevesi ailesi 5 kullanım nedeniyle uyarı verdi; yeni sürüm eşik üstü inkâr ailesi üretmiyor. Kısa kapanış adayları, kaynak etiketleri, somut güvenlik cümleleri ve kapasite ayrımları olduğu için korundu. Ritim ölçümüne TOC, kaynaklar ve künye de girer; paragraf oranı insan yazarlığı ölçüsü değildir.

## Yazar katkısı ve hekim notu

KC bu sohbette Ersin için yöneltilen özgül soruya yanıt iletti. Ham metin ve köken `yazar-katkisi.json` içinde; Ersin'in özgün yanıt tarihi ayrıca verilmediği için `null`. Teslim tarihi yanıtın doğrulanmış yazar tarihi gibi kullanılmadı. Katkı `hareket-haritasi` içinde 3 paragrafla yer aldı:

1. Şiddet + karakter + egzersizle değişim + süre → aynı ölçütler korundu.
2. Hafif, hareketle artmayan, dinlenmeyle geçen ağrı → tempo/süre/yük azaltma; artan/işlev kısıtlayan/ertesi gün süren ağrı → zorlamama.
3. Şişlik/kızarıklık/gece ağrısı/uyuşma/güç kaybı → hekim; ani şiddetli ağrı/üzerine basamama → acil değerlendirme.

“Hareketsizlik de en az yanlış egzersiz kadar sorun yaratabilir” cümlesi ölçülmüş risk eşitliği gibi okunabildiği için aktarılmadı. “nhs.uk +2” artığı gerçek yanıtın bilimsel kaynak listesi veya yazar kimlik kanıtı sayılmadı. Düzenlenmiş karşılık yazar formuyla görülebilir; yeni yazar onayı verilmiş sayılmıyor. Başka yazarlı makaleye Dr. Aksoy adına SSS eklenmedi.

Eski imzalı Bilimsel Editör Notu tam olarak önceki kaynak kopyasında saklı. Gerçek özgün hekim yanıtı/son revizyon onayı bulunmadığı ve güçlü kanıt hükmüyle çelişki oluştuğu için yeni sürümde aynı imzayla değiştirilmiş görüş üretilmedi. Kaynaklı, **imzasız ve açıkça inceleme taslağı** olan BEN hazırlandı. Bu taslak bilimsel editör tarafından ayrıca değerlendirilmeli.

## Anlam / kaynak kaydı

| İddia | Kaynak | Önce / sonra sınırı |
|---|---|---|
| Kronik bel ağrısında egzersiz | WHO 2023, öneri B.1 | Genel güçlü etiket → kronik primer bel ağrısı, koşullu öneri, düşük kesinlik; etkisiz denmedi. |
| Kireçlenmede egzersiz ve kilo | NICE NG226 1.3.1–1.3.5 | Egzersiz + eğitim korunur; kilo yönetimi uygun fazla kilolu/obez kişilerle sınırlanır. |
| Görüntüleme | NICE NG59 1.1.4–1.1.6 | Gözlemi görüntülemeden üstün gösterme kaldırıldı; rutin olmayan görüntüleme ve bakım planını değiştirme koşulu açık. |
| Menopozda kompozisyon | Greendale 2019, DOI 10.1172/jci.insight.124865 | Gözlemsel grup değişimi; bireysel ağrı veya kesin kas kaybı tanısı değildir. |
| Denge ve kuvvet | WHO 2020, yetişkin/65+ bölümleri | Genel güçlendirme ile ileri yaş düşme önerileri ayrı. Yeni kişisel set/tekrar reçetesi yok. |
| Acil belirtiler | NHS bel ve eklem ağrısı | Mevcut uyarılar korunur; idrar yapamama ve sıcak-şiş eklem açıklaştırılır; yeni akut başvuru düzeyi görünür. |

Kaynak doğrulaması: 14 Ekim 2026, resmî kılavuz önerileri ve çalışma erişilebilir metni/özetleri. NICE doğrudan açma denemelerinin bir kısmı 403 verdi; aynı resmî öneri sayfaları arama aracının öneri metniyle doğrulandı. Bu kontrol bağımsız tıbbi onay veya yeni sistematik derleme değildir. 1–5 Evidence etiketleri sitenin editoryal ölçeğidir; her kılavuzun GRADE sınıfıyla otomatik sayısal eşitlik kurulmaz.

## Teknik doğrulama

- Mevcut yayın ağacı `npm run build:ci`: lint, 179 dosya compliance, yayın/şablon bütünlüğü, encoding, renk, lexicon, 67 tarih kontrolü, 139 Astro sayfası ve 160 SEO çıktısı geçti. Bu test mevcut site içindir; yeni paketin tıbbi/yazar onayını kapsamaz.
- Yeni taslak **ayrı Astro projesinde** derlendi; 1 H1, 9 geçerli TOC hedefi, yinelenmeyen kimlikler, 5/5 FAQPage eşleşmesi; `Article` var, `MedicalWebPage` yok. Görünür yazar ve şema Ersin Saraç; ilk yayın 2026-05-04 korunur, taslak güncellemesi 2026-10-14. Şema görseli byline görseliyle hizalı.
- `editorial-check`: 0 aday. `check-fidelity` farkları yeni kaynak yılları/atıf numaraları, 65+ kapsamı, okuma süresi ve gerçek taslak güncelleme tarihidir; doz/tedavi programı eklenmedi.
- `rendered-check`: kaynaklarda kurum adı gövdede tekrar edilmediğinden `uncited-source` adayları; [1]–[7] zinciri elle doğrulandı. `review-anonymous` adayı inceleme BEKLENİYOR cümlesini yakalar, tamamlanmış inceleme ilanı değildir. `repeated-disclaimer` adayları bağlama özgü genel aktivite sınırı ve mevcut RedFlagBox şablon metniyle asıl sorumluluk reddidir; ortak bileşen değiştirilmedi.
- 390×844 tarayıcı görünümü: yatay taşma yok (`scrollWidth=375`, `innerWidth=390`), tek H1, 2/2 görsel yüklü. Mevcut uzun üst hero başlığı mobilde geniş yer tutuyor; üst hero değişikliği yapılmadı. Masaüstü kontrolü ve yerel HTML önizlemesi pakette kayıtlı.
- Bekleyen rota kaynak ağacına, manifest'e, RSS'e veya yayınlanmış arşive alınmadı. İlgili okuma yolları mevcut site derlemesinde kontrol edildi; iki sayfalık taslak sunucusunda komşu rotalar bulunmayabilir.

## Okur değeri ve alıntılanma sınırı

Okur değeri: ağrıyı yaşa bağlamak yerine değerlendirme, egzersiz yükünü izleme, yardım için üç ay beklememe ve acil belirtileri ayırma. Genel bilgi ve kılavuz kapsamı kaynaklı alıntılanabilir; kişisel egzersiz reçetesi, tanı veya tüm 40+ kadınlar için etki/risk oranı olarak kullanılamaz. Eski imzalı not yeni klinik katkı kanıtı değildir. GEO/detektör kutusu eklenmedi, görünürlük veya insan yazarlığı garantisi verilmedi.

## Açık kapılar

1. Ersin Saraç'ın **bu metin ve düzenlenmiş katkı için** yazar onayı.
2. Bilimsel editörün kaynak/kanıt etiketleri, acil yönlendirme ve BEN taslağı için tıbbi incelemesi; gerçek inceleme kişi/tarihi kaydı.
3. Ancak bu kayıtlar tamamlanıp ayrıca yayın yetkisi verildiğinde rota, ortak FAQ ve manifest entegrasyonu; son üretim derlemesi ve yayın doğrulaması.
