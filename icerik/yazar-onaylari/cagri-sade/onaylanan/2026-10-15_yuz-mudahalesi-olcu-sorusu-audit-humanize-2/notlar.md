# Yüz müdahalesi ölçü sorusu — audit humanize 2 (taslak notları)

- **Tarih:** 15 Ekim 2026
- **Yazar:** Op. Dr. Çağrı Sade · **Tıbbi inceleme:** Doç. Dr. Senai Aksoy
- **Taban sürüm:** `6d37f4b5` (15 Ekim sözlü onaylı revizyon, canlıda doğrulandı)
- **Taslak:** `yuz-mudahalesi-olcu-sorusu.taslak.astro`. Bu dosya canlı rota değildir; `src/pages`, `article-faqs.ts`, manifest ve onay kayıtlarına dokunulmadı.
- **Durum:** Onaylandı (15 Ekim 2026, sözlü, KC — taslak olduğu gibi). Canlı rotaya taşındı.

## 1. Değişiklik özeti

### A grubu: dil

| Yer | Önce | Sonra |
|---|---|---|
| Açılış | "o aynı soru" | "o soru" |
| Açılış | "ne istediğimizi ayırmamıza" | "gerçekten ne istediğimizi ayırt etmemize" |
| H2 3 | "…Olan Mı?" | "…Olan mı?" |
| Dolgu güvenliği | "tekrarlanan kullanımının güvenliği … değerlendirilmemiştir" | "yıllarca tekrarlandığında ne kadar güvenli oldukları … henüz yeterince incelenmemiştir" |
| Cerrahi riskleri | "İyileşme süresi, anestezi, kanama … gibi riskler" | "iyileşme süresi ve anesteziyle birlikte kanama … gibi riskler de" |
| Risk paragrafı | "Küçük görünen işlemler de tıbbi işlem riskleri taşır." | "Küçük görünen işlemlerin de riskleri vardır." |
| Kırmızı bayrak kutusu | "beklenmemesi gereken belirtiler" | "beklemeden değerlendirilmesi gereken belirtiler" |
| Denge bölümü | "Bu tercih de, belirli…" | Virgül kaldırıldı |
| Denge bölümü | "zemini yeniden tartmak" | "durumu yeniden düşünmek" (aynı bölümde ikinci "zemin" metaforu kalıyor) |
| Sorular bölümü | "günlük hayatınıza dönüşü" | "günlük hayatınıza ne zaman dönebileceğinizi" |

### B grubu: yapı ve humanize

1. **TOC.** Etiketler gövdedeki H2 metinleriyle birebir eşleşti. Anchor id'leri değişmedi.
2. **Tekrar birleştirildi.**
   - "Yüz Sadece Ciltten İbaret Değildir" bölümünde aynı hükmü taşıyan üç paragraf tek cümleye indi.
   - Yazarın italik çerçeve paragrafı korundu ve kısaltıldı.
   - Özet kutusundaki iki "tercih size ait" cümlesi birleşti.
   - Sorular bölümündeki yedinci "zaman tanıyın" tekrarı çıkarıldı.
3. **Menopoz bağı eklendi.** Kaynağı Çağrı Sade'nin 15 Ekim yanıtı (1. soru). Muayene gözlemi, östrojen ile kolajen/nem ilişkisi ve "taşıyıcı kolon" benzetmesi işlendi. Yeni kaynaklar [11] ve [12].
4. **"Müdahaleler" bölümü yeniden kuruldu.**
   - Paragraflar artık "yöntem → amaç → kanıt → sınır" şablonuyla değil, okurun derdine göre ilerliyor: güneş izi, gevşeme/doku, mimik/hacim, sarkma.
   - Yazarın iki yanılgı gözlemi (2. soru) bölümün başına yazar sesiyle eklendi.
   - Bölüm, bütüncül yaklaşım cümlesiyle bitiyor.
5. **Jargon açıklandı.** "Görüntüleme eşliğinde" yerine "dokuyu ekranda görerek"; "iğneli uygulama" yerine "ince iğnelerle dokunun içine verilen radyofrekans".
6. **Liste tutarlı hâle geldi.** Beş madde de yalnız etiket; beşinci maddenin açıklaması hemen alttaki paragrafa taşındı.
7. **Kanıt etiketi.** [1] Swift 2021 için etiket `level 4` yerine `level 3` oldu. Gerekçe: anlatı derlemesi ve yazarlardan ikisi Allergan çalışanı.
8. **Editör notu başlığı.** Özel başlık ("Bilimsel incelemeye sunulan not") kaldırıldı; sitedeki diğer yazılardaki gibi varsayılan "Bilimsel Editör Notu" kullanılıyor. Not metni değişmedi. **KC kararı gerekiyor:** bu metin Dr. Aksoy'un kendi notu mu?
9. **Okuma süresi.** Gövde uzadığı için 9 dakikadan 10 dakikaya çıktı.

### Ölçümler (structure-check)

| | Önce | Sonra |
|---|---|---|
| Cümle sayısı | 85 | 107 |
| Ortalama sözcük / standart sapma | 10,8 / 4,6 | 12,1 / 5,6 |
| 8 sözcük ve altı cümle oranı | %34 | %26 |
| Kısa hükümle biten paragraf | 6 / 27 | 8 / 31 (ikisi yalnız atıf satırı) |

- Editoryal kontrol: 0 aday.
- Sadakat kontrolü: Yeni sayılar yalnızca [11], [12], "yüzde 30" ve [1] etiketindeki 4 → 3 değişimi. Mevcut diğer sayı ve atıflar korundu.

### İddia sayımı (gövde + özet; SSS hariç)

| Sonuç | Önce | Sonra | Kalanın gerekçesi |
|---|---|---|---|
| Görüşme zorunluluk değil / zaman tanıyın | 5 | 4 (tek bölümde) | Denge bölümünde: takvim + vazgeçme + reklam baskısı aynı paragraf grubunda |
| Karar size ait / yaptırmamak da tercih | 4 | 3 | Özet + denge bölümü |
| Her yüz farklı / aynı sonucu vermez | 4 | 2 | Özet + mekanizma |
| Zorunlu sıra yok / merdiven | 4 | 3 | Bölüm lede'si + editör notu |
| Kararı kim veriyor / çevre yorumları | 4 | 4 | Açılış sahnesi + liste maddesi ve açıklaması |

## 2. Yazar yanıtlarının işlenmesi (anlam kaydı)

Çağrı Sade'nin 15 Ekim yanıtları sözlü onay öncesi kendisine bu tabloyla gösterilmeli.

| Özgün yanıt | Taslaktaki karşılığı | Değişiklik ve gerekçe |
|---|---|---|
| "Son bir yılda sanki bir gecede yaşlandım; uykumu alsam bile…" (hastaların tarifi) | "Kadınlar son bir yılda sanki bir gecede yaşlandıklarını, uykularını alsalar bile… anlatır." | Birleşik gözlem olarak dolaylı anlatıma çevrildi; birebir hasta alıntısı gibi sunulmadı (stil rehberi). |
| Dinlenmiş/ışıltılı ifade → yorgun ifade; cilt incelip kuruyor; çene hattı (jawline) ve yanakta yerçekimine direnç azalıyor | Aynı içerik, "ben" sesiyle | İngilizce "jawline" çıkarıldı (dil politikası). |
| Östrojen ciltteki "baş mimar" | Kullanılmadı | Tek metafor kuralı: "taşıyıcı kolon" benzetmesi seçildi. |
| Östrojen hyalüronik asit ve kolajenin "en güçlü koruyucusudur" | "…hyalüronik asidi ve … kolajeni destekler; menopozla bu destek azalır" | "En güçlü" üstünlük iddiası kaynakla desteklenmediği için düşürüldü. |
| "İlk 5 yılda kolajenin yaklaşık %30'u hızla kaybedilir" | "Erken dönem çalışmalar … yaklaşık yüzde 30 azalabildiğini bildirmiştir. Bu veriler az sayıda kadınla yapılmış eski çalışmalara dayanır" (sınırlı kanıt) | **Karar bekliyor**, bkz. 3.1. |
| Taşıyıcı kolon benzetmesi; kolajen ağı, kemik ve derin yağ yastıkçıkları "östrojen azalmasıyla birlikte hızla" incelir | Benzetme korundu; "östrojen azalmasıyla birlikte hızla" bağı kemik ve yağ için yazılmadı | Kemik ve yağ değişiminin doğrudan östrojene bağlanması için kaynak yok, bkz. 3.2. |
| Hacim ile doku kalitesini karıştırmak; ince cilde yoğun dolgu veya "pahalı kremler" yüzü gençleştirmez, şiş görünüm yapar | Korundu; "Benim gördüğüm" diye klinik gözlem olarak işaretlendi | "pahalı" sıfatı çıkarıldı. |
| Hormon tedavisi "korkulacak şey" veya "kozmetik iksir" değil | İki yanılgı korundu | — |
| Hormon tedavisi doğru zamanda başlandığında "damarları, kemikleri ve cilt kalınlığını koruyacak en temel fizyolojik destek" | "Cilt üzerinde olumlu etkisini bildiren çalışmalar var, ama sonuçlar her zaman tutarlı değil ve kılavuzlar yalnızca cilt için başlanmasını önermiyor. Uygunluk; kemik, damar ve meme sağlığıyla birlikte … değerlendirilir." | **Anlam değişti. Yazar ve KC onayı şart**, bkz. 3.3. |
| "Sırrı tek bir mucize işlemde değil; bütüncül yaklaşımda" | "Tek bir işlemle çözülecek bir değişimden söz etmiyoruz." | "sır" ve "mucize" yazarın hot.md'sinde ve CLAUDE.md §4'te yasak (olumsuz kullanımda bile). |
| "Biyoeşdeğer hormon dengesi", protein ve mikrobesin, kas koruyucu egzersiz | "Yeterli protein ve besin desteği, kasları koruyan egzersiz ve gerekiyorsa hekiminizle konuşulmuş bir hormon değerlendirmesi" | "Biyoeşdeğer" çıkarıldı, bkz. 3.4. |
| Biyostimülan "doğal dokunuşlar … en sağlıklı ve zarif sonucu verir" | "Cildin kendi kolajen yanıtını uyarmayı amaçlayan uygulamalar … aynı bütünün parçası olabilir" | Üstünlük ve sonuç vaadi ("en sağlıklı", "verir") yumuşatıldı; "doğal dokunuş" pazarlama dili. |

## 3. Karar bekleyen tıbbi noktalar (KC ve yazar)

1. **"%30 kolajen kaybı."** Rakam Brincat ve ekibinin 1980'lerdeki küçük çalışmalarına dayanıyor. Taslakta kaynak olarak gösterilen Brincat 2005 derlemesinin ([DOI](https://doi.org/10.1080/13697130500118100)) özetinde bu rakam geçmiyor; tam metin doğrulanmadı.
   - **Seçenekler:** (a) Rakam bu sınırlamayla kalsın, tam metin doğrulansın. (b) Rakam çıkarılsın; "menopozdan sonraki ilk yıllarda kolajen belirgin azalır" denip yalnız [11] gösterilsin.
2. **Kemik ve derin yağın östrojene bağlanması.** Yazarın yanıtında var, taslakta bu bağ kurulmadı. Kaynak verilecekse eklenebilir.
3. **Hormon tedavisi cümlesi.** Yazarın özgün ifadesinde iki sorun var:
   - "Damarları koruyacak" ifadesi, hormon tedavisini kalp-damar korunması için öneriyormuş gibi okunuyor; menopoz kılavuzlarında bu bir kullanım nedeni değil.
   - "En temel fizyolojik destek" bir üstünlük iddiası.

   Viscomi 2025 derlemesi ([DOI](https://doi.org/10.1111/jocd.70393)) kılavuzların hormon tedavisini yalnızca cilt için desteklemediğini belirtiyor.

   Ayrıca bu konu plastik cerrahi ekseninin dışında; jinekoloji ve endokrinoloji eksenine giriyor (hot.md §0.5 adım 2). Taslaktaki yumuşatılmış sürüm yazara gösterilmeli; **yazar kabul etmezse KC karar verir**.
4. **"Biyoeşdeğer hormon".** Hazırlanmış (magistral) biyoeşdeğer hormon ürünleri tartışmalı. Terim çıkarıldı. Yazar özellikle istiyorsa ayrı tıbbi karar gerekir.
5. **Protein ve egzersizin cilde katkısı** yazarın görüşü olarak, "olabilir" diliyle yer aldı; ayrı bir kaynak gösterilmedi.
6. **[4] Kumar 2025.** Özet metindeki ihtiyatı destekliyor. Tam metin PMC12715571'de açık ama okunmadı.

## 4. SSS önerisi (`src/data/article-faqs.ts`, onay sonrası uygulanacak)

Gerekçe: 3., 4. ve 5. yanıtlar gövdeyi tekrar ediyordu. Önerilen beşinci soru, yazarın kendi 2. yanıtından türetildi.

- **1 ve 2:** Değişmedi.
- **3, "Daha az müdahaleyle daha iyi sonuç almak mümkün mü?":** Önerilen yanıt:

  > Müdahale sayısı tek başına sonucu belirlemez. Asıl soru, düşündüğünüz işlemin hangi değişimi hedeflediği ve bu hedef için gerekli olup olmadığıdır. Daha az işlem, herkes için daha iyi sonuç anlamına gelmez.

  ("Küçük bir işlem de risk taşır" cümlesi çıktı; gövdede ayrı paragrafı var.)
- **4, "Müdahale yaptırmazsam yüzüm hızla kötüye gider mi?":** Önerilen yanıt:

  > Yüzünüz değişmeye devam eder; bu değişimin hızı ve görünümü kişiden kişiye farklıdır. Menopozla birlikte bazı kadınlarda değişim birkaç yıl içinde daha belirgin hissedilebilir. İşlem yaptırmamak bu süreci hızlandırmaz.

  (Not: "hızlandırmaz" yeni bir iddiadır; yazar onaylamazsa eski yanıt kalır.)
- **5, eski "Karar verirken kendime hangi soruyu sormalıyım?" yerine öneri: "Menopozda dolgu yaptırmak yüzü gençleştirir mi?"** Önerilen yanıt:

  > Kolajen desteği azalmış, incelmiş bir ciltte yalnızca yoğun dolguyla hacim eklemek yüzü gençleştirmeyebilir; taşıyıcı gücü azalmış doku daha ağır ve şiş görünebilir. Hacim kaybı ile cildin doku kalitesi farklı sorunlardır. Hangisinin ön planda olduğunu muayenede ayırmak gerekir.

  (Kaynak: yazarın 15 Ekim yanıtı, 2. soru.)

## 5. Yazara açık sorular

Yalnızca 3. soru yanıt bekliyor; 1 ve 2 yanıtlandı.

1. ~~Menopozla birlikte yüzde en sık fark ettiğiniz değişim ne?~~ Yanıtlandı (15 Ekim), işlendi.
2. ~~Yöntem konuşurken hastaların en sık yanlış anladığı nokta hangisi?~~ Yanıtlandı (15 Ekim), işlendi.
3. **Açık:** "Sonuç Olarak" bölümündeki "Aynaya yeniden baktığınızda hangi değişimi istediğinizi daha iyi biliyorsanız, görüşme amacına yaklaşmıştır" cümlesiyle ne kastettiniz?
   - Taslak öneri: "…daha net görüyorsanız, görüşmeye hazırsınız demektir."
   - Alternatif: Mayıs sürümündeki kendi cümlenizi geri almak: "Bazen en yardımcı olan sonuç, dışarıdan fark edilmeyen ama aynaya baktığımızda kendimizi biraz daha iyi hissetmemizi sağlayan küçük ve ölçülü değişimlerdir." Bu cümle başlıktaki "ölçü" kavramına da gövdede karşılık verir.
4. **Yeni:** Hormon tedavisi cümlesinin taslaktaki yumuşatılmış hâlini (2. bölümdeki tablo) kabul ediyor musunuz?
5. **Yeni:** "%30 kolajen kaybı" rakamını sınırlamasıyla birlikte tutmak mı, yoksa çıkarmak mı istersiniz?

## 6. Yayına alırken (onay sonrası)

- Taslağı `src/pages/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu.astro` üzerine taşı. Başlıktaki TASLAK yorumunu ve Sonuç'taki HTML yorumunu çıkar.
- `modifiedDate` ve `lastUpdated` alanlarını yayın gününe çek.
- SSS önerisini `article-faqs.ts` dosyasına işle.
- Kayıtları güncelle: `article-approvals.ts`, `article-log.md` (kalıp seçimi: taşıyıcı kolon benzetmesi, mizah H0), `static-articles.ts` açıklaması (gerekirse).
- `npm run lexicon:check` ve `npm run build:ci` çalıştır, ardından canlı sayfayı doğrula.
- Arşiv dosyası (`icerik/yayinlanmis-makaleler/2026-05/…`) revizyon öncesi metni taşıyor. Taze bir build'den yeniden export et; export çıktısındaki ilgisiz değişiklikleri geri al.
