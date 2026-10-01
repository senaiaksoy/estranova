# Menopozda hekim–hasta ilişkisi — 1 Ekim 2026 yerel revizyonu

Durum: ONAYLANDI 2026-10-01 — KC bu sohbette Berna/KC editör onayının ve revize Tıbbi Bilgi Notu tıbbi incelemesinin tamamlandığını bildirdi. (Aşağıdaki "onay bekleniyor" ifadeleri kayıt anındaki durumu yansıtır.) Commit, push veya deploy yapılmadı. 1 Mayıs 2026 tarihli eski onay bu revizyon için yeni onay sayılmadı.

## Başlangıç ve kapsam

- Son kayıtlı yazar onayı: `src/data/article-approvals.ts`, Berna Aksoy, 2026-05-01. İlgili kaynak commit: `c8831a43fd0906d89ec4c43f6091bc028a9d5f30`.
- Başlangıçta hedef zaten değiştirilmişti. Mevcut yerel çalışma `baslangic-kaynak.astro` olarak korundu; eski onaylı sürüm ve bu sürümden sonraki farklar ayrıca incelendi. Kullanıcının aynı dosyaya yönelik açık `fix` talebi kapsamında devam edildi.
- Berna Aksoy / Türkçe / `experience-essay` korundu. Başlık, URL, yedi bölüm anchor'ı, görseller, ilk yayın tarihi, ilgili okumalar ve disclaimer korundu. Önceki yerel turdaki 1 Ekim güncelleme tarihi değiştirilmedi. Okuma süresi kısalan gövdeye göre 7 dakika oldu.
- Görünür dört soru Berna'nın kişisel notları olarak kaldı; Dr. Aksoy adına SSS oluşturulmadı. Bu deneyim yazısına FAQPage veya MedicalWebPage eklenmedi.

## Bulgular ve düzeltmeler

- Gramer/ifade: «hem güç veriyor hem de derin bir yorgunluk» gibi eksik yüklem yapıları, «kapatıcı», «paydaş» ve uzun isim zincirleri sadeleştirildi. Hormon tedavisi sorusunda açıklamasız HRT kaldırıldı.
- Humanizasyon: uzun spot üç cümleye indirildi. Giriş, dört profil ve çift ayrıcalık bölümündeki anlam tekrarları azaltıldı. Aile geçmişinden bütün kadınlara yayılan kuşak genellemeleri kişisel gözleme çekildi. Kapanıştaki sorumluluğu okura yükleyen cümle çıkarıldı.
- Profil sınırı: hekim eş ile gerçek takip hekimi birbirinden ayrıldı. Bekleme odası deneyimi Berna'ya mal edilmedi. Yeni klinik yaşanmışlık, doz, hasta bilgisi veya yazar alıntısı üretilmedi. Eski okur alıntısı anlamı korunarak tırnaksız aktarıldı.
- Tıbbi kesinlik: yerel turdaki «yaşam kalitesi üzerinde doğrudan etki» ve «memnuniyet belirgin şekilde artar» iddialarının seçili kaynaklarda bu kapsamda desteği bulunmadı; sonuç vaadi çıkarılarak ortak karar vermenin anlamı anlatıldı.
- Etik: yakın aile tedavisi mutlak yasak gibi sunuluyordu. Genel etik yaklaşım ve sınırlı istisnalar ayrı tıbbi bilgi notuna taşındı. Eşin kişisel tercihi genel kuralın yerine kullanılmadı.
- Önceki bilgi notundaki imza, hekimin birebir özgün cevabı gibi kullanılmadı; yeni metinde MedicalContextNote'un mevcut «Tıbbi bilgi kontrolü» sorumluluk satırı kaldı. Revize notun gerçek tıbbi incelemesi bekleniyor.

## Anlam ve kaynak kaydı

| Önce | Sonra / korunan sınır | Destek |
|---|---|---|
| Ortak karar verme hasta tercihi, kanıt ve hekim bilgisini birleştirir | Seçenekler, fayda-risk ve kişisel öncelikler birlikte ele alınır; hasta tüm tıbbi sorumluluğu tek başına üstlenmez | NICE NG23 ve NG197 |
| Tedaviye uyum, yaşam kalitesi ve memnuniyette kesin artış | Bu sonuç iddiaları çıkarıldı; kılavuzun önerdiği görüşme yaklaşımıyla sınırlı kaldı | Seçili kılavuzlar bu genel nedensel vaat için kullanılmadı |
| Aile üyelerinin tedavi edilmemesi köklü kural | Genel yaklaşım başka hekimin üstlenmesi; acil/izole durumlar ve kısa süreli küçük sorunlar için istisnalar olabilir | AMA Opinion 1.2.1; evrensel Türk hukuk kuralı olarak sunulmadı |
| Dört profil / çoğunluğun aradığı hekim | Bilimsel sınıflandırma veya sıklık iddiası yerine yazarın çevre gözlemi | Kişisel anlatı; klinik etkinlik kanıtı değildir |
| Eş jinekolog; arkadaş çevresinden başka hekim; ev sohbeti | Aynı iki rol ve ayrıcalık korundu; ev sohbeti muayenenin yerine geçmez | Kayıtlı Berna Çift Rol profili ve eski onaylı metin |
| Normal tahlil ile devam eden şikâyet | Tahlile tanısal yorum eklenmedi; hekimle yeniden konuşma sınırı korundu | Kişisel iletişim notu, tanı rehberi değildir |

Doğrulanan birincil kaynaklar (1 Ekim 2026):

- [NICE NG23 — menopoz önerileri](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations): fayda, risk ve sonuçların konuşulmasında ortak karar verme rehberine yönlendirir. Doğrudan açma 403 verdi; arama aracının indekslenmiş resmi içeriği ve resmi PDF özeti üzerinden ilgili öneri doğrulandı.
- [NICE NG197 — ortak karar verme](https://www.nice.org.uk/guidance/ng197/chapter/recommendations).
- [NICE NG23 — gerekçe](https://www.nice.org.uk/guidance/ng23/chapter/Rationale-and-impact): hormon tedavisi kararında fayda-risk bilgisinin ve kişisel tercihlerin yeri.
- [AMA — Treating Self or Family, Opinion 1.2.1](https://code-medical-ethics.ama-assn.org/ethics-opinions/treating-self-or-family): tarafsızlık, özerklik, mahremiyet ve sınırlı istisnalar; tam sayfa okundu.

Kaynak izi Berna'nın dergi rejimi gereği bu editoryal kayıtta tutuldu. Yazı kişisel ilişki beklentisini anlamaya ve görüşmeye hazırlanmaya yardımcı olabilir; hekim yeterliliği değerlendirme ölçeği, HRT uygunluk rehberi veya etik/hukuk başvuru metni olarak alıntılanmamalıdır.

## Kontroller

Gramer, doğal Türkçe, ritim ve anlam karşılaştırması ayrı geçişlerle incelendi. Araçlar için Astro gövdesinin statik metni ayrı `.txt` dosyalarına çıkarıldı; başlık/meta/özellikler ve şema ayrıca kontrol edildi. `check-fidelity.mjs` eski onaylı sürüme karşı izlenen sayısal öğelerde fark bulmadı. `editorial-check.mjs` aday bulgu üretmedi. Bu sonuçlar anlam eşitliği, hekim onayı veya insan yazarlığı kanıtı değildir.

`npm run build:ci` başarılı: TypeScript, compliance, içerik/şablon bütünlüğü, kodlama, renk, sözlük, tarih, build ve SEO çıktı denetimi geçti. İki uyarı hedef dışındaki epitalon uzun cümleleri ve beden şekillendirme yazısındaki «çerçevesi» sözcüğüyle ilgiliydi. Son küçük metin/manifest düzeltmesinden sonra build/SEO yeniden kontrol edildi. Son HTML ve canlı karşılaştırma aşağıdaki doğrulama kaydında tutulur.

Yeni yayın onayı yoktur; mevcut `article-approvals.ts` onay kaydı değiştirilmedi. Yayın öncesinde Berna/KC editör ve revize tıbbi bilgi notu için gerçek tıbbi inceleme gereklidir. Gövde katkısı veya Dr. Aksoy SSS cevabı beklenmiyor.

Son çıktı kontrolü: tek H1, korunan yedi anchor, sıfır yinelenen ID, sıfır kırık yerel bölüm bağlantısı, tek Tıbbi Bilgi Notu, Berna yazarlı Article + BreadcrumbList, 29 Nisan ilk yayın / 1 Ekim revizyon ve meta–şema açıklama eşitliği doğrulandı. Görsel tasarımın tarayıcı ekranı incelemesi yapılmadı; bunlar üretilen HTML kontrolleridir. Son build, SEO denetimi ve diff whitespace kontrolü başarılı.

Canlı sayfa benzersiz sorgu ve no-cache başlığıyla 200 döndü; yeni açılış yok, eski açılış ve eski tıbbi not hâlâ mevcut. Yerel değişiklikler yayında değildir. Sonuçlar `dogrulama.json`, mevcut canlı HTML `canli-kaynak.html` dosyasındadır.

## Ek tur — /makale-humanize sıcaklık katmanı (1 Ekim 2026, aynı gün)

Önceki turun metni üzerine CLAUDE.md §3 Sıcaklık Katmanı taraması yapıldı. Tıbbi iddia, MedicalContextNote, ilgili okumalar, anchor'lar, görseller ve tarihler değişmedi.

- "Çevrem…" tekrarı 11 → 5. Özet ile kapanıştaki aynı "Çevremdeki kadınları dinledikçe" cümlesi ayrıştırıldı; dolaylı ses kanalları (arkadaş / okur) çeşitlendi.
- Aynı yapıdaki iki "Bunlar … değil;" antitezinden biri kırıldı ("Reçete gibi okumayın lütfen; …").
- Doğrudan teselli eklendi: "aynı soruyu ikinci kez sormanın hiçbir ayıbı yok". Duygu beat'i: Berna'nın ayrıcalığı yazarken "biraz utandığı" (zafer dili değil, körlük kabulü; çift ayrıcalık kuralıyla uyumlu).
- Tereddüt yığını seyreltildi (-ebilir/-olabilir zincirleri iki paragrafta kesin, sıcak cümleye döndü); "Bu fark doğal." kısa vurgu eklendi.
- Özetteki kollektif "ne bekliyoruz?" (v2.3 yasak "biz" kuruluşu) → "bir kadın … ne bekler?".
- "yaşamışlığım", "özerklik alanı" sadeleştirildi; "altı farklı içerik birbiriyle zıt" mantık hatası "üçü bir şey, üçü tam tersini" olarak düzeltildi.
- Schema keywords: "paydaş karar verme" → "ortak karar verme"; İngilizce "shared decision making" çıkarıldı.
- Dosya satır sonları repo standardı LF'ye döndürüldü (önceki turda CRLF'ye dönmüştü; diff gürültüsü 624 → ~300 satır).

Ölçüm (sonra): soru-H2 0, beden kişileştirmesi 0, "bir hastam" 0, gövde antitezi ~2, ≤6 kelimelik cümle 30, `lexicon:check` hard_ban 0, `build:ci` + SEO audit geçti. Humor: #3 goji (onaylı metinden korunan) + #1 aile şakası (sır payı). Yayın onayı hâlâ bekleniyor.
