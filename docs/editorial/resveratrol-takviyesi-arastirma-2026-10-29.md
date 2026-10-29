# Resveratrol takviyesi — yeni makale için araştırma notu

Tarih: 29 Ekim 2026. Yetki: KC'nin `/estranova-deneysel-molekul resvaratrol yaz` isteği. Bu not ve taslak yayın, commit, push veya deploy yetkisi vermez.

Durum (29 Ekim 2026, güncel): Yazı `src/pages/zamansiz-yasam/deneysel/resveratrol-takviyesi.astro` yoluna taşındı. KC "bunların hepsi tamam" beyanıyla dört birinci tekil cümleyi, Dr. Mumcu tıbbi onayını, görselleri ve miyelom çalışmasının tam metin teyidini bildirdi. SSS yanıtları gerçek ve birebir. Gehm 1997 künyesi PubMed'den doğrulandı (PNAS 94(25):14138–43). "5 g/gün" değeri yazıya alınmadı. Aşağıdaki bölümler araştırma anındaki kaydı korur.

Literatür PubMed üzerinden, devam eden çalışmalar ClinicalTrials.gov üzerinden, Türkiye mevzuatı Tarım ve Orman Bakanlığı'nın PDF listesinden (indirilip metni okundu) alındı.

## Yerleşim, yazar ve tür kararı

- **Yerleşim:** `/zamansiz-yasam/deneysel/`. Okurun asıl sorusu "resveratrol almalı mıyım?"; mekanizma yalnızca karar için gereken kadar anlatılıyor (CLAUDE.md §6 "Bölüm yerleşimi"). Bilimsel Pencere'de resveratrol yazısı yok; ikinci yazı açılmıyor.
- **Yazar:** Doç. Dr. Senai Aksoy (Deneysel bölümdeki diğer molekül yazılarıyla aynı hat). Tür: `clinical-guide`. Tıbbi inceleyici: Dr. Alper Mumcu (Senai kendi yazısını inceleyemez).
- **Skill kapsam kapısı:** Üç soru da evet. Hedef Zamansız Yaşam/Deneysel; konu tek molekül; uzun yaşam vaadi insanda sert sonlanımla test edilmedi.
- **Mizah düzeyi:** H1. Tek motif: şarap kadehi. Açılışta bir dokunuş, kapanışta tek geri çağırma. Güvenlik, kanser ve ilaç bölümleri H0.

## Kanıt merdiveni

### 1. Mekanizma ve emilim

- Ağızdan alınan 25 mg'ın en az %70'i emiliyor; kanda değişmemiş resveratrol yalnızca iz düzeyinde (<5 ng/ml). Hızlı sülfat ve glukuronid bağlanması belirleyici. Walle T ve ark. *Drug Metab Dispos*. 2004;32(12):1377–82. PMID 15333514. [DOI](https://doi.org/10.1124/dmd.104.000885)
- Derleme: emilim yaklaşık %75, ağızdan biyoyararlanım %1'in çok altında; doz artırımı bunu belirgin değiştirmiyor. Walle T. *Ann N Y Acad Sci*. 2011;1215:9–15. PMID 21261636. [DOI](https://doi.org/10.1111/j.1749-6632.2010.05842.x)
- İnsanda SIRT1: 11 RCT'lik meta-analizde gen ifadesi, protein ifadesi ve serum SIRT1 düzeyinde anlamlı değişiklik yok. Mansouri F ve ark. *J Acad Nutr Diet*. 2025;125(9):1299–1314. PMID 40158656. [DOI](https://doi.org/10.1016/j.jand.2025.03.011)
- Östrojen reseptörüne bağlanma (laboratuvar): Gehm BD ve ark. *PNAS*. 1997. PMID 9391166. Ayrıntılı künye taslağa girmeden önce tam metinden doğrulanmalı.

### 2. Hayvanda ömür

- NIA ITP: yemde 300 ve 1200 ppm resveratrol, genetik olarak çeşitli farelerde iki cinsiyette de yaşam süresini anlamlı değiştirmedi. Miller RA ve ark. *J Gerontol A Biol Sci Med Sci*. 2011;66(2):191–201. PMID 20974732. [DOI](https://doi.org/10.1093/gerona/glq178)

### 3. İnsanda biyobelirteç

- Yoshino 2012: plazma resveratrol düzeyi arttı, kas ve yağ dokusunda AMPK, SIRT1, NAMPT, PGC-1α değişmedi (bkz. 4).
- Gonçalinho 2026: kronik koroner hastalığı olan 20 menopoz sonrası kadında 90 gün 1000 mg; bazı apoptoz belirteçleri değişti, sirtuinler, kan yağları, şeker ve tansiyon değişmedi. *Front Nutr*. 2026. PMID 42221785. [DOI](https://doi.org/10.3389/fnut.2026.1814668)

### 4. İnsanda işlev

| Sonuç | Bulgu | Kaynak |
|---|---|---|
| Metabolizma, menopoz sonrası sağlıklı kadın | 75 mg/gün, 12 hafta: vücut bileşimi, metabolizma hızı, kan yağları, iltihap belirteçleri ve karaciğer/kas/yağ insülin duyarlılığı değişmedi | Yoshino J ve ark. *Cell Metab*. 2012;16(5):658–64. PMID 23102619. [DOI](https://doi.org/10.1016/j.cmet.2012.09.015) |
| Bilişsel işlev (RESHAW) | 125 kadın, 45–85 yaş, 2×75 mg, 24 ay çapraz: genel bilişsel performansta iyileşme; etki büyüklüğü küçük (Cohen d 0,17) | Thaung Zaw JJ ve ark. *Clin Nutr*. 2021;40(3):820–9 (çevrimiçi 2020). PMID 32900519. [DOI](https://doi.org/10.1016/j.clnu.2020.08.025) |
| Ağrı, menopoz belirtileri (RESHAW) | Bileşik ağrı skoru azaldı; somatik menopoz belirtileri ve genel iyi oluş düzeldi | Thaung Zaw JJ ve ark. *Menopause*. 2021;28(1):40–9. PMID 32881835. [DOI](https://doi.org/10.1097/GME.0000000000001643) |
| Kemik (RESHAW) | 12 ayda bel omurgası KMY +0,016 g/cm², femur boynu +0,005 g/cm²; CTX %7,24 düştü | Wong RHX ve ark. *J Bone Miner Res*. 2020;35(11):2121–31. PMID 32564438. [DOI](https://doi.org/10.1002/jbmr.4115) |
| Menopoz sonrası kadın, birleşik analiz | 10 RCT, 928 kadın: ağrı skorları ve CTX düştü; bilişsel işlev, ruh hali, metabolik değerler, tansiyon, uyku, menopoz belirtileri ve yaşam kalitesinde anlamlı etki yok | Wu ve ark. *Front Pharmacol*. 2025. PMID 40771919. [DOI](https://doi.org/10.3389/fphar.2025.1588284) |
| Kemik, birleşik analiz | 10 RCT, 698 kişi: KMY ve kemik belirteçlerinde anlamlı etki yok | Li Q ve ark. *BMC Complement Med Ther*. 2021;21(1):214. PMID 34420523. [DOI](https://doi.org/10.1186/s12906-021-03381-4) |
| Şemsiye derleme | 45 sistematik derleme; yüksek kesinlikte 4 bulgu: bel çevresi −0,80 cm; fazla kilolu yetişkinde total kolesterol −0,19 mmol/L; tip 2 diyabette sistolik −7,97, diyastolik −3,55 mmHg | Sun JN ve ark. *Nutr J*. 2026;25(1). PMID 41987155. [DOI](https://doi.org/10.1186/s12937-026-01319-5) |
| Alzheimer, faz 2 | 119 hasta, 52 hafta, 2×1000 mg'a kadar: bazı belirteç seyirleri değişti; beyin hacmi kaybı resveratrolde daha fazla; en sık yan etki bulantı, ishal, kilo kaybı | Turner RS ve ark. *Neurology*. 2015;85(16):1383–91. PMID 26362286. [DOI](https://doi.org/10.1212/WNL.0000000000002035) |

### 5. İnsanda güvenlik

- Turner 2015: 1 yıl, 2 g/güne kadar; en sık bulantı, ishal, kilo kaybı.
- İlaç etkileşimi: 42 sağlıklı gönüllü, 1 g/gün, 4 hafta: CYP3A4, CYP2D6, CYP2C9 baskılandı, CYP1A2 uyarıldı. Chow HH ve ark. *Cancer Prev Res*. 2010;3(9):1168–75. PMID 20716633. [DOI](https://doi.org/10.1158/1940-6207.CAPR-09-0155)
- Multipl miyelom, SRT501 + bortezomib faz 2: Popat R ve ark. *Br J Haematol*. 2013;160(5):714–7. PMID 23205612. [DOI](https://doi.org/10.1111/bjh.12154). PubMed'de özet yok; MeSH terimleri böbrek yetmezliği, dehidratasyon, kusma, tedavi başarısızlığı. **Doğrulanacak:** çalışmanın böbrek yetmezliği nedeniyle erken durdurulduğu bilgisi tam metinden teyit edilmeli. Taslakta doz sayısı verilmedi.

### 6. Sert sonlanım

- InCHIANTI: 65 yaş üstü 783 kişi, 9 yıl; idrardaki resveratrol metabolitleri ölüm, kalp-damar hastalığı, kanser ve iltihap belirteçleriyle ilişkili değil. Semba RD ve ark. *JAMA Intern Med*. 2014;174(7):1077–84. PMID 24819981. [DOI](https://doi.org/10.1001/jamainternmed.2014.1582). Bu, besinle alınan düzeylerle ilgili; takviye değil.
- Takviye ile insanda ömür, hastalık veya ölüm verisi yok.

## Türkiye mevzuatı

- Tarım ve Orman Bakanlığı, "Takviye Edici Gıdalar Kısıtlı Maddeler Listesi", son güncelleme 21/10/2026 ([sayfa](https://www.tarimorman.gov.tr/Konu/1116/takviye-edici-gida-kisitli-maddeler-listesi); PDF s. 56). Satır (03/07/2026 tarihli):
  - **Resveratrol, sentetik:** etikette "trans-resveratrol" adı; TGK Yeni Gıdalar Yönetmeliği Ek-1'e uygunluk; etikette 18 yaş altında kullanılmaması ve **ilaç kullananların yalnızca tıbbi gözetim altında kullanması** gerektiği ifadesi; **yetişkinlerde günde en fazla 150 mg.**
  - **Diğer kaynaklar** (Japon poligonumu *Polygonum cuspidatum*, üzüm *Vitis vinifera*): 31/12/2025'ten önce takviyede kullanıldığı ispatlanırsa yeni gıda sayılmıyor. PDF metninde aynı satır bölgesinde "5 g/gün" değeri görünüyor ama sütun hizası metin çıkarımında belirsiz; **taslağa alınmadı, görsel olarak doğrulanmalı.**
- RESHAW'da kullanılan toplam günlük miktar (2×75 mg = 150 mg) Türkiye üst sınırına eşit. Alzheimer, miyelom ve CYP çalışmalarındaki miktarlar (1–2 g) bu sınırın çok üstünde.
- TİTCK ruhsatlı ilaç durumu ve WADA durumu aranmadı; taslakta iddia yok.

## Devam eden çalışmalar (ClinicalTrials.gov, 29 Ekim 2026)

- **NCT07865377 (RESH):** Kronik koroner sendromlu menopoz sonrası kadınlarda 90 gün 1000 mg trans-resveratrol; vücudun kendi östrojenleri, östrojen reseptörleri, SIRT1/3. 80 kişi, katılım sürüyor, birincil bitiş Ağustos 2029. Östrojen benzeri etki sorusuna doğrudan değiyor.
- **NCT06585865:** Yaşlılarda direnç egzersizine 500 mg resveratrol eklenmesi, kas uyumu. 36 kişi, katılım sürüyor, birincil bitiş Temmuz 2027.
- **NCT07245979:** Fazla kilolu kadınlarda "sirtuin aktivatörü" takviyesi, 120 kişi, katılım sürüyor, birincil bitiş Kasım 2026.

## Dolaşımdaki iddialar (en az iki bağımsız yerde görüldü)

Kaynaklar ürün sayfaları, takviye blogları ve podcast özetleri; adlar yazıya girmez.

1. "Uzun ömür genlerini / sirtuinleri çalıştırır, yaşlanmayı yavaşlatır" — üretici sayfaları ve takviye blogları.
2. "Kırmızı şarabın sağlıklı sırrı" — ürün ve blog metinleri.
3. "NMN ile birlikte alınınca etkisi artar" — takviye blogları ve satıcı sayfaları; insanda kombinasyonu test eden randomize çalışma bulunamadı.
4. "Menopoz belirtilerini ve yaşam kalitesini iyileştirir, doğal östrojen" — sponsorlu sağlık içerikleri, sektör haber siteleri.
5. "Kalbi ve damarları korur, tansiyonu düşürür" — ürün sayfaları.
6. "Beyni ve hafızayı korur" — sektör haberleri, blog.
7. "Kilo verdirir, yağ yakar", "kan şekerini düzenler" — blog ve ürün sayfaları.

## KC'ye sorulacaklar (yayın kapısı)

1. **Birinci tekil cümleler** (taslakta, KC onayı olmadan yayımlanmaz):
   - "Muayene odasında en sık duyduğum soru…" paragrafı (birleşik gözlem).
   - "Bu tabloya bakınca resveratrolü bugün menopozun ya da yaşlanma karşıtı bakımın rutin bir parçası olarak önermiyorum." cümlesi.
   - "Hormon duyarlı meme kanseri öyküsü olan bir kadında…" cümlesi.
   - "Denemek isteyen bir hastayla önce hedefi konuşurum…" paragrafı.
2. **"Dr. Aksoy'a Sorular" SSS:** Üç sorunun yanıtı KC'den 29 Ekim 2026'da yazılı geldi ve taslağa birebir eklendi. Yalnızca kalın biçim kaldırıldı (bileşen düz metin gösteriyor) ve "resverrolden" yazımı "resveratrolden" olarak düzeltildi. Yanıtlardaki olgu iddialarının kaynağı:
   - Hormon tedavisi sorusu: östrojen reseptörüyle laboratuvar etkileşimi → Gehm 1997 (kaynak 16).
   - Kan sulandırıcı sorusu: trombosit kümelenmesinin laboratuvarda azalması → Olas B, Wachowicz B. *Platelets*. 2005;16(5):251–60. PMID 16011975. [DOI](https://doi.org/10.1080/09537100400020591) (kaynak 22). Karaciğer enzimleri → Chow 2010 (kaynak 14).
   - Eklem ağrısı sorusu: "diz kireçlenmesinde daha büyük çalışmada plasebodan farksız" → ARTHROL, faz 3, 142 kişi (%71 kadın), 6 ay düşük doz (2×20 mg); 3. ayda ağrı farkı yok; yazarlar gücün yetersiz olabileceğini belirtiyor. Nguyen C ve ark. *PLoS Med*. 2024;21(8):e1004440. PMID 39137167. [DOI](https://doi.org/10.1371/journal.pmed.1004440) (kaynak 23). "Sonraki olumlu çalışmalar" → Karim A ve ark. *Inflammopharmacology*. 2025;33(11):6877–86. PMID 41037125. [DOI](https://doi.org/10.1007/s10787-025-01967-9) (kaynak 24; 137 kişi, 500 mg/gün, tek merkez, kayıt sonradan). Aynı grubun 2025 ve 2026 tarihli iki benzer çalışması daha var (PMID 40990472, 41679011).
   - Bu bulgu üzerine iddia tablosundaki "ağrı" satırına ARTHROL ve Karim eklendi.
   - Not: ARTHROL'un küçük olmasına rağmen faz 3 olması ve diğer çalışmalarla benzer büyüklükte olması nedeniyle "daha büyük" ifadesi, menopoz çalışmalarına (RESHAW 125) göre doğru; diz kireçlenmesi çalışmalarının hepsine göre değil. Yanıt değiştirilmedi.
3. **Görsel:** Byline (4:5) ve kart (2.4:1) için makale görseli.

## Şablon kırma notu

NAD+ yazısının kalıplarından ayrıştırıldı: açılış "isim koymak" yerine kısa şarap sahnesi; çok eksenli tablo "beş soru" yerine "beş eksen" başlığıyla; kapanışta ayrı bir "temel alışkanlıklar" paragrafı yok, kadeh motifinin tek geri çağırması var. İmza kapanış cümlesi kullanılmadı.

## Geniş audit — 29 Ekim 2026 (yayın sonrası, dal: audit/resveratrol-2026-10-29)

Yöntem: yayındaki sayfa, kaynak özetleriyle (PubMed, ClinicalTrials.gov, Bakanlık PDF'i) iddia iddia karşılaştırıldı. Hekim yanıtlarına (SSS) ve birinci tekil cümlelere dokunulmadı.

**Düzeltilen bulgular**

1. **RESHAW süresi:** "iki yıla kadar kullanılan" ifadeleri yanlıştı. Çalışma 24 ay sürdü ama her kadın resveratrolü 12 ay aldı (çapraz tasarım). Özet, merdiven ve güvenlik tablosu "bir yıl" olarak düzeltildi.
2. **Kırmızı bayrak kutusu:** "kan sulandırıcı… ilaç-takviye etkileşimi araştırmalarda gösterildi" abartıydı. Gösterilen, karaciğer enzimleri (Chow 2010). Trombosit etkisi yalnızca laboratuvarda bildirildi; insanda kanama riski çalışması bulunamadı. Kutu ve güvenlik bölümü buna göre yazıldı; Olas 2005 derlemesi artık gövdede de atıflı.
3. **Sirtuin ifadesi:** "insanda sirtuin düzeyini değiştirmedi" fazla keskindi. Mansouri 2025'te genel etki yok, ama 12 haftadan kısa çalışmalarda kan gen ifadesi arttı; Karim 2025 (diz kireçlenmesi) kan SIRT1 artışı bildirdi. Dört yerde "birleşik analizde" nitelemesi eklendi, alt grup ve Karim cümlesi girdi.
4. **Alzheimer çalışması:** "klinik yarar gösterilemedi" doğru çerçeve değildi (Turner 2015'te birincil sonuçlar belirteçti). Satır yeniden yazıldı; beyin hacmi kaybının resveratrolde daha fazla olduğu bulgusu (özette var, gövdede yoktu) güvenlik bölümüne ve kaynak açıklamasına eklendi.
5. **Sıcak basması satırı:** Wu 2025 "menopoz belirtileri"ne bakıyor, sıcak basmasına özgü sonuç vermiyor. Satır RESHAW (bedensel belirtiler düzeldi) ve Wu (etki yok) ayrımıyla yeniden yazıldı.
6. **Ağrı satırı:** Wu 2025'te ağrı farkı sınırda anlamlı (p=0,046; %95 GA üst sınırı −0,05). "Sınırda anlamlı" notu eklendi.
7. **Kullanıcı şikâyeti cümlesi:** "Kullanıcıların sık bildirdiği şikâyetler kontrollü çalışmalarla örtüşüyor" bir kaynağa dayanmıyordu (forum taraması yapılmadı). Çıkarıldı; yerine öznel bildirimlerin kanıt yerine geçmediğini söyleyen genel cümle kondu.
8. **Evidence etiketleri:** Chow 2010 (42 gönüllü, kontrolsüz, ön-son karşılaştırma) 3'ten 2'ye; Walle biyoyararlanım (altı gönüllü + derleme) 4'ten 3'e indirildi.
9. **Üçüncü süren çalışma:** NCT07245979'un kaydında etken madde "sirtuin activators" diye geçiyor, resveratrol adı yok; "pazarlanan takviye" ifadesi de kanıtsızdı. NCT07395921 (RESINCA) alternatif olarak incelendi: dozlar toplam polifenol içeriği (resveratrol değil), ürün bir şarap şirketinin üzüm posası barı. İkisi de yazıdan çıkarıldı; kaynak 22 silindi, 23–25 → 22–24 olarak yeniden numaralandı (SSS `sourceRef` değerleri dahil).
10. **Küçük sertleştirmeler:** "nadir", "az sayıdaki", "En önemli açık soru" gibi doğrulanamayan üstünlük ifadeleri yumuşatıldı; "bir çalışma yok" → "rastlamadık"; bel çevresi −0,80 cm "yaklaşık 1 cm" yazılmıştı, "0,8 cm" yapıldı; RESHAW kemik alt grubu "alt grup analizinde" diye işaretlendi.

**Kontrol edilip değişmeyenler:** Walle 2004 (≥%70 emilim, iz düzeyi <5 ng/ml), ITP (300 ve 1200 ppm, etki yok), Yoshino 2012, Wong 2020 (kemik: +0,016 ve +0,005 g/cm², CTX −%7,24), Gehm 1997, Semba 2014, Chow 2010 (CYP sonuçları), ARTHROL (142 kişi, %71 kadın, 3. ayda fark yok), Bakanlık 150 mg satırı ve etiket uyarısı (PDF s. 56; "***" dipnotu 30/6/2027'ye kadar geçiş hükmü, 150 mg sınırını değiştirmiyor), NCT07865377 ve NCT06585865 tarihleri, tüm künyeler (cilt, sayfa, yıl).

**Açık kalanlar**

- SRT501 miyelom çalışmasının tam metinden teyidi KC tarafından bildirildi; PubMed'de özet olmadığı için bu oturumda bağımsız olarak doğrulanmadı.
- Bakanlık PDF'inde "Diğer kaynaklar … 5 g/gün" değeri hâlâ yazıya alınmadı.
- Bilimsel Editör Notu metni yazar tarafından değil taslak olarak hazırlandı; Mumcu imzalı (tıbbi onay KC beyanı). Audit'te metni değişmedi.
- Bu düzeltmeler gövde metnini değiştirdiği için KC ve Dr. Mumcu'nun yeniden onayı gerekir.


## Ayrıntılı audit düzeltmeleri ve onay — 29 Ekim 2026

KC: “düzelt. benim ve mumcu onayyları tamam”. Bu doğrudan talep önceki audit düzeltmelerini ve bu sohbette raporlanan ayrıntılı audit bulgularının düzeltilmesini kapsar. Yazar onayı ve Dr. Alper Mumcu tıbbi onayı KC beyanıyla kaydedildi; bağımsız yazılı Mumcu notu yok. Üstteki tarihsel “bekleniyor” kayıtları bu kapsam için kapanmıştır. Commit, push ve deploy talimatı verilmedi.

- RESHAW'ın ara ve son bilişsel yayınları aynı araştırmadan; Prickett 2023 de saklanan RESHAW örneklerinin analizi (DOI 10.1002/jbm4.10732). Wu 2025 toplamı, 928 bağımsız kadın veya on bağımsız doğrulama olarak sunulmuyor. Sonuçlar yeniden hesaplanmadı; yöntem sınırlaması görünür eklendi. Ağrı sonucu iki yayına dayanıyor; CTX, kırık sonucu yerine kullanılmıyor.
- Kaynak 6'nın yayıncı metni, 146 kişinin ara analizini ve 125 tamamlayıcının son analizini aynı RESHAW araştırması olarak açıklıyor: https://www.sciencedirect.com/science/article/pii/S0261561420304416 . Kaynak 25 bu yayın örtüşmesini görünür kaynaklandırmak için eklendi. Önceki 24 kaynak numarası korundu; SSS verisi değişmedi.
- Bırakma sonrası yan etki/etkileşimin kendiliğinden geçeceği güvencesi kaldırıldı. Güvenlik tablosuna daha uzun kullanım ve seyrek zarar sınırı eklendi; uydurma genel güvenlik derecesi çıkarıldı.
- Özette kategorik fare hükmü kaldırıldı; tabloda sonuç üç merkezli programa bağlandı. İnsanda “test edilemiyor” yerine “uzattığı gösterilmedi” deniyor. Yeni bir insan ömür sonucu veya doz önerisi eklenmedi.
- 150 mg/gün karşılaştırmaları ve meta/RSS açıklaması sentetik trans-resveratrol kapsamına alındı. Mevzuat sınırı kişisel güvenli doz olarak sunulmuyor.
- Bel çevresi −0,8 cm, farklı yetişkin gruplarına ait bir sonuç olarak açıklandı; kilo kaybı ve kan şekeriyle özdeşleştirilmedi. Sağlıklı menopoz sonrası kadınlarda metabolik etkisizlik sınırı korundu.
- Ağrı/etkinlik etiketleri sınırlı kanıt (2/5) ile tutarlı hale getirildi; kemik birleşik analizinin popülasyonu açıklandı. RESHAW bilişsel küçük etki bulgusu korunuyor.
- Özet, kanıt merdiveni ve karar tablosundaki yinelenen sonuç listeleri azaltıldı; ayrıntılı çalışma karşılaştırması menopoz bölümünde. İddia tablosu bağımsız tarama, SSS gerçek hekim yanıtı, inceleme notu bağımsız değerlendirme işlevi nedeniyle korundu. Plasebo ve gen etkinliği açıklandı.
- Anlam kontrolü: 75 mg × 2, bir yıl aktif/bir yıl plasebo, CTX yaklaşık %7, düşük doz/yüksek doz ayrımı, olası kanama etkileşiminin belirsizliği ve kanser/böbrek/gebelik uyarıları korundu. Birinci tekil görüşler ve üç gerçek SSS yanıtı değiştirilmedi. Yeni klinik deneyim veya hasta sözü üretilmedi.


### Yerel doğrulama

- `npm run build:ci`: başarılı; TypeScript, compliance, yayın bütünlüğü, şablon, encoding, renk, editoryal sözlük, tarih, Astro build ve SEO kontrolleri geçti. 139 rota / 161 SEO HTML. Diğer makalelerden gelen soft uyarılar var; tam kaynak strict kapısındaki önceki diz ağrısı bulgusu bu çalışma kapsamında değiştirilmedi.
- Derlenmiş hedef HTML: tek H1, 25 kaynak, eksik sayfa içi anchor yok; üç görünür SSS/FAQPage yanıtı birebir. FAQ veri dosyası değişmedi. Dört birinci tekil hekim paragrafı boşluk normalizasyonuyla önceki sürümle eşit. dateModified ve görünür son güncelleme 29 Ekim 2026.
- `editorial-check`: 0 aday. `structure-check`: üç aday gerekçesiyle korundu: (1) farklı sonuçlara ait beş belirsizlik ifadesi (ömür, biliş/metabolizma, bırakma, tansiyon) ayrı sınırlar taşıyor; (2) kısa kapanışlar bölümün özgül bilgisi/gerçek hekim görüşü olduğu için bırakıldı; (3) “sentetik trans-resveratrol için” tekrarı yasal kapsamı her bağımsız yüzeyde koruyor.
- `rendered-check`: üç sezgisel aday elle doğrulandı: genel disclaimer tek; öznel bildirimlerin kanıt olmaması ve hekimle konuşulacak durumlar ayrı işlevde. İnceleyen adı aynı imza satırında Dr. Alper Mumcu olarak mevcut. Kaynaklar yazar adıyla anlatıya yığılmıyor, numaralı dipnotlarla bağlı; 25 kaynak hedefi kontrol edildi. Bu adaylar biçim/algılayıcı sınırlaması, gizlemek için metin değiştirilmedi.
- `check-fidelity`: sayısal farklar elle değerlendirildi. Eklenen 2021 kaynak yılı, [25] atfı, 12 aylık aktif dönem ve 150 mg mevzuat kapsamı açıklamadır; 928 ikinci kullanım bağımsız kişi sayısı olmadığını açıklar. Klinik doz/sonuç değişikliği yok; güvenlik kesinliği daraltıldı.
- Audit’in onay kapısı bulgusu hedef makale için yeni doğrudan onay kaydıyla kapandı. Ortak onay denetleyicisini değiştiren site-geneli bir altyapı düzenlemesi yapılmadı. Görsel tarayıcı QA yapılmadı; üst hero, byline ve kart görselleri değişmedi. Commit/push/deploy yapılmadı.

### İddia izleme sayımı

Ana metin ve özet çıkarımında, kaynakça ve değişmeyen SSS hariç sözcük eşleşmesi; anlamsal değerlendirme yukarıdaki notlarla birlikte okunur. Sayılar kalite hedefi değildir.

| İddia konusu | Önce | Sonra |
|---|---:|---:|
| kemik-yikimi | 7 | 3 |
| sirtuin | 10 | 10 |
| guvenlik-150mg | 3 | 4 |
| omur | 10 | 10 |

Kemik sonucundaki azaltım yinelenen hükümlerin birleştirilmesidir. SIRT1 açıklaması mekanizma bölümünde kaldı. 150 mg ek tekrarı yasal kaynak/form sınırını, ömür ifadeleri ise hayvan/insan ayrımını korur.

## Geniş audit, tur 2 — 29 Ekim 2026

Bu tur, başka bir oturumun `add65527` commit'i (Wu 2025 yayın örtüşmesi, kaynak 25, mevzuat kapsamı) üzerine yapıldı. O düzeltmeler tekrar edilmedi; Wu 2025 tam metni (PMC12325339) ile örtüşme ayrıca kontrol edildi: dahil edilen 10 yayından beşi aynı Newcastle ekibinin (Thaung Zaw 2020a, 2020b, 2021; Wong 2020; Prickett 2023) yayını, üç raporda aynı 125 kişilik örneklem var. Tam metin "RESHAW" adını anmıyor; örtüşme yazar ve örneklem eşleşmesinden çıkarım. Ağrı analizi iki yayına (Thaung Zaw 2020a ve Wong 2017, toplam 197 katılımcı) dayanıyor. Tam metnin son %17'si okunmadı.

**Yeni bulgular ve düzeltmeler**

1. **Sıcak basması (eksik literatür):** "Sıcak basmasını tek başına inceleyen bir analiz bulamadık" cümlesi yanıltıcıydı: Leo 2015 (Minerva Ginecol 67(5):475–83, PMID 26491826) yeni bir resveratrol formülüyle yaklaşık 50 kadında çift kör çapraz pilot çalışma; sıcak basması azalan kadın oranı resveratrol kolunda yüksek. İtalyanca, küçük, ürüne özgü; Evidence 2. Satır ve kaynak 26 eklendi. Equol ile birleşik ürünlerle yapılan çalışmalar (Davinelli 2017, PMID 28041599; Corbi 2023, PMID 37569440) resveratrolü tek başına test etmediği için alınmadı.
2. **Egzersiz:** "Egzersizle birlikte kası güçlendirir" iddia satırı eklendi (Alway 2017, J Gerontol A 72(12):1595–1606, PMID 28505227; 30 kişi, 65–80 yaş, 12 hafta, 500 mg/gün; bazı kas ölçümleri düzeldi, kalp-damar riskinde ek yarar yok; kaynak 27, Evidence 2). Sürmekte olan NCT06585865'e bağlandı.
3. **SRT501 miyelom çalışması:** PubMed'de özet yok. İkincil kaynaklar (sektör haberleri, firma açıklaması; yayıncı sitesine erişilemedi, tam metin okunmadı) çalışmanın 2010'da durdurulduğunu, beş hastada akut böbrek yetmezliği bildirildiğini, firmanın nedeni olarak hastalığı ve ishal/kusmaya bağlı sıvı kaybını öne sürdüğünü, dozun günde 5 g olduğunu ve bazı hastaların SRT501'i tek başına aldığını söylüyor. Gövde nedensellikten geri çekildi: "resveratrole mı, hastalığa ya da sıvı kaybına mı bağlı olduğu net değil"; "doğal bir madde yüksek dozda ilaç gibi davranır" çıkarımı ve "bir kemoterapi ilacıyla birlikte" ifadesi kaldırıldı. Kaynak açıklamasına "nedensellik iddia edilmiyor" eklendi.
4. **Gebelik:** Kırmızı bayrakta "güvenlik verisi yok" → "çok sınırlı". BJOG 2025 meta-analizinde (PMID 40025969) preeklampside nifedipine eklenen resveratrol için tek çalışma (349 kadın, düşük kesinlik) var.
5. **Açık soru:** RESHAW'da ağrı düzelmesi 12 ay boyunca sürdü; "kaç ay sürüyor?" sorusu "Bıraktıktan sonra ağrıdaki düzelme sürüyor mu?" olarak düzeltildi.
6. **Diz kireçlenmesi:** "bazı sonraki çalışmalar olumlu sonuç bildirdi" → "küçük, tek merkezli". Karim ve arkadaşlarının üç yayını aynı gruptan (PMID 41037125, 40990472, 41679011).

**Açık kalanlar**

- SRT501 ayrıntıları (5 g, tek başına kol, beş vaka) tam metinle doğrulanmadı; gövde bu ayrıntıları kullanmıyor.
- Wu 2025'te Şekil 7 başlığı "Thaung 2020b", metin ve Tablo 1 "2020a" diyor; muhtemelen yazar hatası, gövde bu ayrıntıya dayanmıyor.
- Tur 2 onayı: KC "tıbbi ve mumcu onayları tamam" dedi (29 Ekim 2026); Mumcu onayı KC beyanıyla, ayrı yazılı not yok.
