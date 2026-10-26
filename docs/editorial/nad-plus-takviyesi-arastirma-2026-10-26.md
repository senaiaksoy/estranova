# NAD+ takviyesi — yeniden yapılandırma için araştırma notu

Tarih: 26 Ekim 2026. Yetki: Kullanıcının "araştırma bulgularını kaydet; makaleye dokunma" talebi. Bu not makaleyi değiştirmez; commit, push veya deploy yetkisi yok.

Hedef makale: `src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro` (son güncelleme 13 Ekim 2026, `origin/main` ile aynı). Kullanılan skill: `.claude/skills/estranova-deneysel-molekul/SKILL.md` (kanıt merdiveni, çok eksenli tablo, iddia haritası).

Literatür bulguları PubMed üzerinden, düzenleyici bilgiler resmî kurum sayfalarından, dolaşımdaki iddialar web aramasından alındı. Her kaynakta DOI veya resmî bağlantı verildi.

## Öne çıkan yeni bulgu: NOPARK

Brakedal B ve ark. "Nicotinamide Riboside for Patients With Early-Stage Parkinson Disease: The NOPARK Randomized Clinical Trial." *JAMA*. 8 Ekim 2026. PMID 42848371. [DOI](https://doi.org/10.1001/jama.2026.18828). NCT03568968.

- Faz 3, çift kör, plasebo kontrollü. Norveç'te 11 merkez.
- Erken evre Parkinson hastası 410 kişi randomize edildi, 393'ü birincil analize girdi. Ortalama yaş 65,6; kadın oranı %34.
- Günde 2×500 mg NR, 52 hafta.
- Birincil sonuç: MDS-UPDRS toplam skoru NR ile 2,45 puan arttı, plasebo ile 0,27 puan azaldı. Düzeltilmiş fark 2,72 puan (%95 GA 0,47–4,98; p=0,02), plasebo lehine.
- Önemli not: Bu fark, klinik olarak önemli kötüleşme eşiğinin (5,2 puan) altında.
- Motor dışı belirti yükü (NMSS) NR ile daha fazla kötüleşti: fark 4,22 puan (p=0,009).
- Ciddi yan etki NR'de %8,3, plaseboda %14,1.
- Yazarların sonucu: NR, Parkinson'da hastalığı değiştiren tedavi olarak desteklenmiyor.

Makaleye etkisi: Yayın, makalenin 13 Ekim güncellemesinden önce çıktı ama metne girmedi. "Uzun dönem veri yok" ifadesi düzeltilmeli: bir yıla kadar veri var, ama o veri Parkinson hastalarından. "Beyni korur" iddiası insanda büyük bir RCT ile test edildi ve desteklenmedi.

## Kanıt merdiveni

### 1. Mekanizma

Mevcut kaynak 1 (Covarrubias 2021) yeterli. Yeni tarama gerekmedi.

### 2. Hayvanda ömür

- **NR, ITP:** İki cinsiyette de ömrü anlamlı uzatmadı. Harrison DE ve ark. *Aging Cell*. 2021;20(5):e13328. PMID 33788371. [DOI](https://doi.org/10.1111/acel.13328).
- **NMN, ITP:** Birincil ITP yayını bulunamadı.
- **NMN, Sinclair laboratuvarı:** Dişi farelerde ortanca ömür %8,5, en uzun ömür (%90 ölüm noktası) %7,9 uzadı; erkeklerde ömür uzamadı, kırılganlık azaldı. 13 aylıktan itibaren yemle günde 550 mg/kg verildi. Kaynak bioRxiv önbaskısı ([10.1101/2024.06.21.599604](https://www.biorxiv.org/content/10.1101/2024.06.21.599604.full.pdf)). Hakemli yayımlandığı doğrulanmadı; yazıda önbaskı olarak anılmalı ya da hiç kullanılmamalı.

### 3. İnsanda biyobelirteç

- Kandaki NAD+ artışı tutarlı. 33 insan çalışmasını (28'i randomize) tarayan PRISMA derlemesi: oral NR ve NMN hedefe ulaşıyor, haftalar-aylar boyunca iyi tolere ediliyor; işlevsel, metabolik ve damar sonuçları "heterojen, çoğunlukla nötr veya sonlanıma özgü". Gallagher ve ark. *Ageing Res Rev*. 2026. PMID 41655607. [DOI](https://doi.org/10.1016/j.arr.2026.103057).
- Üç NAD+ öncülünün dolaşım ve bağırsak metabolizmasına etkisi: *Nat Metab*. 2026. PMID 41540253. [DOI](https://doi.org/10.1038/s42255-025-01421-8).

### 4. İnsanda işlev

| Sonuç | Bulgu | Kaynak |
|---|---|---|
| Kas kütlesi ve işlevi (ort. yaş >60) | NMN ve NR desteklenmiyor | Prokopidis, *J Cachexia Sarcopenia Muscle* 2025, PMID 40275690, [DOI](https://doi.org/10.1002/jcsm.13799) |
| Kas işlevi, yürüme hızı | Olumlu sonuç bildiren meta-analiz; düşük etki faktörlü dergi, önceki satırla çelişiyor | *Curr Pharm Biotechnol* 2025, PMID 39185644 |
| Glukoz ve lipidler | 8 RCT, 342 kişi (%49 kadın): anlamlı yarar yok | Chen, *Curr Diab Rep* 2024, PMID 39531138, [DOI](https://doi.org/10.1007/s11892-024-01557-z) |
| Glukoz ve lipidler | NAD+ artıyor, klinik sonuçlar farksız; "yararların abartılmış olabileceği" uyarısı; yanlılık riski yüksek | Zhang, *Crit Rev Food Sci Nutr* 2024, PMID 39116016, [DOI](https://doi.org/10.1080/10408398.2024.2387324) |
| Tansiyon | Diyastolikte küçük düşüş; ≥60 yaşta sistolikte −3,94 mmHg; yazarlara göre ön bulgu | Zhang, *Nutrients* 2026, PMID 41901064, [DOI](https://doi.org/10.3390/nu18060890) |
| Hafif bilişsel bozukluk | 12 hafta NR: NAD+ iki kat arttı, bilişsel işlev, toplam beyin kan akımı ve tansiyon değişmedi | Martens, *Alzheimers Dement* 2026, PMID 42478598, [DOI](https://doi.org/10.1002/alz.71605) |
| Hipertansiyon + egzersiz | 54 kişi (≥55 yaş, %61 kadın), 6 hafta 1000 mg NR: egzersize ek yarar yok | *GeroScience* 2025, PMID 40770531 |
| Parkinson | NOPARK (yukarıda): yarar yok, plasebodan biraz kötü | PMID 42848371 |

Genellenemeyecek bulgu: Werner sendromunda (nadir progeroid hastalık) NR ile damar sertliği ve cilt ülseri iyileşti. *Aging Cell* 2025, PMID 40459998. Genel popülasyona aktarılmaz.

### 5. İnsanda güvenlik

- 15 RCT (10'u güvenlik analizinde), günde 250–2000 mg, 14 gün ile 24 hafta arası: NMN genel, ciddi veya sisteme özgü yan etkileri ve ALT/AST'yi artırmadı. Yang, *Nutrients* 2026, PMID 42514320, [DOI](https://doi.org/10.3390/nu18142251).
- NOPARK 52 haftalık güvenlik verisi ekliyor (ciddi yan etki plaseboda daha sık).
- Gebelik ve emzirme: Veri yok. Türkiye'de NR için gebe ve emziren kadınlarda daha düşük yasal sınır var (bkz. mevzuat).

### 6. Sert sonlanım

İnsanda ömür, hastalık veya ölüm verisi yok.

## Damardan NAD+

- **Etkinlik:** Gallagher 2026 derlemesi, damardan ya da kas içine NAD+'nın yaşlanma veya iyi oluş amacıyla test edildiği uygun bir sonlanım çalışması bulamadı. Yalnızca bir randomize olmayan damardan NMN çalışması ve bir farmakokinetik pilot var.
- **Tolerans:** Ticari bir merkezin geriye dönük kayıtları. Dört ardışık gün 500 mg damardan NAD+ ya da NR verildi:
  - NAD+ alanlarda orta-şiddetli mide-bağırsak şikâyetleri, kalp hızında artış ve göğüste baskı görüldü; tüm belirtiler infüzyon bitince geçti.
  - Ortalama infüzyon süresi NAD+ için 97 dakika, NR için 37 dakika.
  - Kaynak: Reyna, *Front Aging* 2026, PMID 41704678, [DOI](https://doi.org/10.3389/fragi.2026.1652582).
- **Klinik sayfaları:** Bulantı, kramp ve hızla artan göğüs sıkışması aynı tabloyu tekrar ediyor. Bunlar ticari kaynaklar; yalnızca destekleyici.
- **Vaka sunumu:** Romatoid artritte damardan NAD+ ile "zamansal ilişkili" iyileşme. Tek vaka, kanıt değil. PMID 42751848.
- **Türkiye:** Hastane grupları ve klinikler "NAD tedavisi" / "evde NAD tedavisi" sunuyor. Kurum adı yazıya girmez (rakip veya kurum adıyla eleştiri yasağı).

## Türkiye mevzuatı (resmî kaynaklarla doğrulandı)

### Takviye edici gıda olarak

Kaynak: Tarım ve Orman Bakanlığı, [Takviye Edici Gıdalar Kısıtlı Maddeler Listesi](https://www.tarimorman.gov.tr/Konu/1116/takviye-edici-gida-kisitli-maddeler-listesi). Son güncelleme 21/10/2026. Satırlar PDF sayfa görüntüsünden okundu (s. 14, 15, 28, 30).

| Madde | Kaynak | 11 yaş ve üzeri, günlük azami | Yayım tarihi |
|---|---|---|---|
| Beta-nikotinamid mononükleotid (NMN) | Kimyasal sentez | 50 mg | 04/06/2021 |
| Nikotinamid ribosid (NR) | Kimyasal sentez | 300 mg | 09/07/2018 |
| NADH | Kimyasal veya enzimatik sentez | 20 mg | 19/02/2018 |
| NADP | Kimyasal sentez | 900 mg | 02/05/2016 |

4–10 yaş sütunları dört madde için de boş: o yaş grubu için değer belirlenmemiş.

### Yeni Gıdalar Yönetmeliği

Kaynak: [TGK Yeni Gıdalar Yönetmeliği, 20/05/2026 tarihli, 33259 sayılı Resmî Gazete](https://www.resmigazete.gov.tr/eskiler/2026/05/20260520-1.htm). Ek-1 ayrı PDF (`20260520-1-1.pdf`, 196 sayfa, taranmış görüntü).

- **NR:** Ek-1'de "Nikotinamid ribosid klorür" olarak var (s. 137).
  - Takviye edici gıdada günde en fazla 300 mg; hamile ve emziren kadınlar için 230 mg.
  - Etikette "Nikotinamid ribosit klorür" adı zorunlu.
  - Kullanım izni 20 Şubat 2020, başvuru sahibi ChromaDex Inc. Veri koruması 20 Şubat 2025'te sona erdi.
  - Tanım: Ağırlıkça ≥%90 β-formunda NR klorür içeren sentetik form.
- **NMN:** Ek-1'de bulunamadı. N ve "Beta-" başlıklarında göz taramasıyla bakıldı; belge taranmış olduğundan metin araması yapılamadı.
  - Yönetmeliğin 4(1)(h) tanımına göre, 31/12/2025'ten önce Türkiye'de yalnızca takviyelerde kullanılmış bir madde, takviye dışı gıdada kullanılmadıkça yeni gıda sayılmıyor.
  - NMN 2021'den beri kısıtlı maddeler listesinde olduğundan 50 mg sınırıyla takviye olarak satılabilir görünüyor. Bu bir mevzuat okuması, hukuki görüş değil.
- **Geçiş:** Geçici Madde 1'e göre yönetmelikten önce faaliyette olan işletmeler Ek-1'e 30/6/2027'den itibaren uymak zorunda. Kısıtlı maddeler listesinin dipnotu da aynı tarihi veriyor.
- **Ürün onayı:** Bakanlık bir "Onaylı Takviye Edici Gıdalar Listesi" yayımlıyor ([Gıda Kodeks ve Yem Mevzuatı sayfası](https://www.tarimorman.gov.tr/GKGM/Menu/129/Gida-Kodeks-Ve-Yem-Mevzuati)). Okur, aldığı ürünün bu listede olup olmadığına bakabilir.

### Makale için kritik çıkarım

Türkiye'deki yasal oral dozlar, insan çalışmalarında kullanılan dozların altında:

| Çalışma | Kullanılan doz | Türkiye'deki üst sınır |
|---|---|---|
| NMN RCT'leri | Günde 250–2000 mg | 50 mg |
| Yoshino 2021 (NMN) | Günde 250 mg | 50 mg |
| NOPARK (NR) | Günde 1000 mg | 300 mg |

Bu yüzden çalışma sonuçları, Türkiye'de yasal olarak satılabilen ürünlere doğrudan aktarılamaz. Yazıda doz önerisi gibi okunmayacak biçimde, yalnızca kanıtın sınırı olarak anlatılmalı (skill §6: doz yalnızca çalışmayı betimlemek için yazılır).

### Damardan NAD+

- **TİTCK:** 23/10/2026 tarihli [Ruhsatlı Beşeri Tıbbi Ürünler Listesi](https://www.titck.gov.tr/dinamikmodul/85) tarandı (23.120 satır).
  - NAD, NADH, nikotinamid adenin dinükleotid, NMN veya NR etkin maddeli ruhsatlı ürün yok.
  - Aramanın çalıştığı, nikotinamid içeren vitamin preparatlarının (ör. Cernevit, Venavit) bulunmasıyla kontrol edildi.
  - Sonuç: Türkiye'de ruhsatlı bir NAD+ ilacı yok.
- **Sağlık Bakanlığı:** NAD+'ya özel genelge veya açıklama bulunamadı. En yakın resmî tutum Şubat 2025'teki "sarı serum" açıklaması ([Sağlıklı Çözüm hesabı](https://x.com/sagliklicozum/status/1888546583257440633), [T24](https://t24.com.tr/saglik/saglik-bakanligi-ndan-sari-serum-aciklamasi-uygun-kosullarda-yetkili-saglik-personeli-tarafindan-ve-gerekli-gorulen-hallerde-verilebilir,1217189)):
  - Damardan vitamin ve mineral ancak ölçülmüş bir eksiklik veya aşırı sıvı kaybında, hekim kararıyla ve uygun sağlık kurumunda verilebilir.
  - Zindelik ve toparlanma vaatleri bilimsel olarak kanıtlanmış değil.
  - Hızlı infüzyonda tansiyon düşmesi ve bayılma riski var.
  - Açıklama NAD+'yı adıyla anmıyor.
- **Hukuki niteleme:** Ruhsatsız ürünün 1262 sayılı Kanun kapsamındaki durumu hukukçu değerlendirmesi gerektirir. Yazıda "yasa dışı" denmez. Önerilen ifade: "Türkiye'de ruhsatlı bir NAD+ ilacı yok."

### ABD (karşılaştırma için)

FDA 29 Eylül 2025 tarihli yazılarla NMN'nin takviye tanımı dışında olmadığını kabul etti. Aralık 2025'te bir üreticinin yeni besin bileşeni bildirimini yeniden geçerli saydı. FDA bunun güvenlik değerlendirmesi olmadığını belirtti. Kaynaklar sektör yayınları ve davanın tarafı NPA; FDA yazısı birincil kaynaktan okunmadı:

- [Venable](https://www.venable.com/insights/publications/2025/10/fda-declares-nicotinamide-mononucleotide-is)
- [Nutritional Outlook](https://www.nutritionaloutlook.com/view/fda-responds-to-citizen-petitions-on-nmn-amending-its-position-on-the-ingredient-s-status-as-a-dietary-ingredient)
- [NPA](https://www.npanational.org/news/fda-reinstates-nmn-as-dietary-supplement-after-npa-lawsuit/)

## Süren çalışmalar (ClinicalTrials.gov, 26 Ekim 2026)

| Kayıt | Kapsam | Tahmini birincil bitiş | Yazıda kullanım |
|---|---|---|---|
| NCT07741071 (N-AD) | Alzheimer'da 2 yıl NR, 270 kişi, faz 2 | 2030-04 | Bilinmeyenler |
| NCT05740722 (NORSEMAN) | İlerleyici MS'te NR, 300 kişi, faz 2 | 2027-08 | Bilinmeyenler |
| NCT06426355 | Düşük over rezervinde NMN ve tüp bebek sonucu, 200 kişi | 2026-02 (sonuç yayımlanmadı) | Doğurganlık iddiası |
| NCT07475208 | Postmenopozal kadında NR + egzersiz ve tansiyon, 112 kişi | 2026-12 (henüz başlamadı) | Menopoz bölümü |
| NCT07416786 | NAD+ ölçüm yöntemlerinin laboratuvarlar arası standardizasyonu | 2027-07 | Biyobelirteç sınırı |
| NCT07144527 | Sağlıklı yaşlılarda NMN ve egzersiz toleransı, 40 kişi | 2026-12 | Bilinmeyenler |
| NCT04691986 | Yaşlı gazilerde NR ve işlevsel kapasite, 74 kişi | 2026-03 (sonuç yayımlanmadı) | Kas iddiası |

Menopoza özel tamamlanmış tek çalışma NCT04841499 (BASIS; NR 250 mg + pterostilben 50 mg, 7 gün, 40 kişi). Bu, makalenin mevcut 4. kaynağı (Holmes 2026).

## İddia haritası (taslak)

| İddia | Sınıf | Dayanak |
|---|---|---|
| İnsülin duyarlılığı | Test edildi, kısmen desteklendi | Yoshino 2021 olumlu; meta-analizler nötr |
| Tansiyon | Test edildi, zayıf sinyal | Zhang 2026 |
| Kas gücü ve yorgunluk | Test edildi, desteklenmedi | Prokopidis 2025, Yoshino 2021 |
| Bilişsel işlev / beyin koruma | Test edildi, desteklenmedi | Martens 2026, NOPARK |
| Sıcak basması ve uyku | Zayıf veriyle test edildi | Holmes 2026 (plasebosuz pilot) |
| Yumurta kalitesi / doğurganlık | Yalnızca hayvan verisi; insan RCT'si sürüyor | Noh, *J Assist Reprod Genet* 2025, PMID 41160202, [DOI](https://doi.org/10.1007/s10815-025-03720-1); NCT06426355 |
| Enerji, cilt, saç ve tırnak | Test edilmedi | Ürün sayfaları ve popüler özetler |
| "Hücresel gençlik", uzun ömür | Bu haliyle test edilemez; NR farede ITP'de başarısız | Harrison 2021 |
| Damardan NAD+ ile yenilenme | Sonlanım çalışması yok | Gallagher 2026 |

## Sık bildirilen istenmeyen etkiler

- **Oral NMN/NR:** Baş ağrısı, yüz kızarması, uyku bozukluğu, mide şikâyetleri ve bulantı birden fazla kaynakta tekrar ediyor. Kaynakların hepsi satıcı ve klinik sayfaları; topluluk forumlarına aramayla ulaşılamadı.
  - RCT'lerde yan etki oranı plasebodan farklı değil.
  - Kızarmayı NMN/NR'ye yazmak için kanıt yok, çünkü RCT'lerde öne çıkmıyor.
  - Yazıda kaynak türü belirtilerek, "bildiriliyor" diye geçmeli.
- **Damardan NAD+:** Mide-bağırsak şikâyetleri, kalp çarpıntısı ve göğüste baskı bildiriliyor; infüzyon hızıyla ilişkili. Hem Reyna 2026 hem klinik sayfaları aynı tabloyu veriyor.

Ticari kaynaklar (yalnızca iddia ve bildirim örneği olarak; yazıda bağlantı verilmez):

- [Yourhealthier](https://yourhealthier.com/blogs/blog/nmn-side-effects)
- [Acıbadem International](https://acibademinternational.com/health-library/nmn-supplement-benefits-risks-and-safe-use/sms:+905386860090)
- [Jinfiniti](https://www.jinfiniti.com/nad-iv-therapy-side-effects/)
- [AZ IV Medics](https://www.azivmedics.com/blogs/iv-therapy/side-effects-of-nad-therapy)
- [Huberman Lab AI özeti](https://ai.hubermanlab.com/s/0Ze-AO5b)

## Çok eksenli tablo için taslak değerler

| Eksen | Değer | Gerekçe |
|---|---|---|
| Etkinlik kanıtı | Sınırlı | Biyobelirteç tutarlı; işlevsel sonuçlar çoğunlukla nötr; NOPARK olumsuz |
| Güvenlik kanıtı | Kısa ve orta dönemde orta; uzun dönemde bilinmiyor | 24 haftaya kadar meta-analiz; 52 hafta NOPARK |
| Mekanizma inandırıcılığı | Orta | Yaşla NAD+ düşüşü var; neden mi sonuç mu belirsiz |
| Ürün ve düzenleyici durum | Oral ürün izinli ama dozu sınırlı; damardan ürün ruhsatsız | TR 50 / 300 mg; TİTCK'de ruhsatlı NAD+ ürünü yok |
| Geri dönüşebilirlik | Muhtemelen yüksek | Doğrudan veri yok; yazıda "muhtemelen" diye geçmeli |

## Açık işler

- NMN'nin Ek-1'de bulunmadığı göz taramasına dayanıyor. Kesinlik için okunabilir bir kopya ya da Bakanlığa soru gerekir.
- Sinclair NMN fare çalışmasının hakemli yayın durumu doğrulanmadı.
- FDA Eylül ve Aralık 2025 yazıları birincil kaynaktan okunmadı.
- Türkiye'de satılan tek tek ürünlerin yasal sınırlara uyumu kontrol edilmedi.
- Dr. Aksoy'a sorulacak üç yeni SSS sorusu, gerçek yanıt alınana kadar yazıya girmez:
  1. Damardan NAD+ serumu uygulatmak isteyen bir hastaya ne söylersiniz?
  2. NMN ile NR arasında seçim yapmaya çalışan birine, ikisini ayıran ne bilgi verirsiniz?
  3. Hormon tedavisi kullanan bir kadın NMN ya da NR eklemek isterse neyi değerlendirirsiniz?
- Esaslı güncelleme olduğu için Dr. Alper Mumcu'nun yeniden incelemesi, Bilimsel Değerlendirme notunun yenilenmesi ve `article-approvals.ts` içine yeni onay kaydı gerekir.

## İndirilen resmî dosyalar

Oturum scratchpad'inde (kalıcı değil): `liste.pdf` (kısıtlı maddeler, 21/10/2026), `ek1.pdf` (Yeni Gıdalar Ek-1), `ruhsat.xlsx` (TİTCK, 23/10/2026). Kalıcı kanıt için yukarıdaki resmî bağlantılar kullanılmalı; listeler güncellendikçe tarih değişir.
