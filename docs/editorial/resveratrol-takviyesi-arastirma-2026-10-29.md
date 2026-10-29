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
   - Kan sulandırıcı sorusu: trombosit kümelenmesinin laboratuvarda azalması → Olas B, Wachowicz B. *Platelets*. 2005;16(5):251–60. PMID 16011975. [DOI](https://doi.org/10.1080/09537100400020591) (kaynak 23). Karaciğer enzimleri → Chow 2010 (kaynak 14).
   - Eklem ağrısı sorusu: "diz kireçlenmesinde daha büyük çalışmada plasebodan farksız" → ARTHROL, faz 3, 142 kişi (%71 kadın), 6 ay düşük doz (2×20 mg); 3. ayda ağrı farkı yok; yazarlar gücün yetersiz olabileceğini belirtiyor. Nguyen C ve ark. *PLoS Med*. 2024;21(8):e1004440. PMID 39137167. [DOI](https://doi.org/10.1371/journal.pmed.1004440) (kaynak 24). "Sonraki olumlu çalışmalar" → Karim A ve ark. *Inflammopharmacology*. 2025;33(11):6877–86. PMID 41037125. [DOI](https://doi.org/10.1007/s10787-025-01967-9) (kaynak 25; 137 kişi, 500 mg/gün, tek merkez, kayıt sonradan). Aynı grubun 2025 ve 2026 tarihli iki benzer çalışması daha var (PMID 40990472, 41679011).
   - Bu bulgu üzerine iddia tablosundaki "ağrı" satırına ARTHROL ve Karim eklendi.
   - Not: ARTHROL'un küçük olmasına rağmen faz 3 olması ve diğer çalışmalarla benzer büyüklükte olması nedeniyle "daha büyük" ifadesi, menopoz çalışmalarına (RESHAW 125) göre doğru; diz kireçlenmesi çalışmalarının hepsine göre değil. Yanıt değiştirilmedi.
3. **Görsel:** Byline (4:5) ve kart (2.4:1) için makale görseli.

## Şablon kırma notu

NAD+ yazısının kalıplarından ayrıştırıldı: açılış "isim koymak" yerine kısa şarap sahnesi; çok eksenli tablo "beş soru" yerine "beş eksen" başlığıyla; kapanışta ayrı bir "temel alışkanlıklar" paragrafı yok, kadeh motifinin tek geri çağırması var. İmza kapanış cümlesi kullanılmadı.
