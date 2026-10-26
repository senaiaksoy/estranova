# Coenzyme Q10 takviyesi — yeniden yapılandırma için araştırma notu

Tarih: 26 Ekim 2026. Yetki: Kullanıcının "Evet, CoQ10. Kapsam kapısını uygula, ayrı worktree aç ve araştırmaya başla. Araştırma notunu sunmadan yazıya geçme" talimatı. Bu not makaleyi değiştirmez; commit, push veya deploy yetkisi yok.

Hedef makale: `src/pages/zamansiz-yasam/deneysel/coenzyme-q10-takviyesi.astro` (`origin/main` `5456b681` ile aynı; son içerik commit'i `125d7161`, 25 Ekim 2026). Kullanılan skill: `.claude/skills/estranova-deneysel-molekul/SKILL.md`. Yazar `senai-aksoy`, tür `clinical-guide`, tıbbi inceleyen Dr. Alper Mumcu.

Kaynaklar: PubMed ve ClinicalTrials.gov MCP; TİTCK ruhsatlı ürünler xlsx (16.10.2026); Tarım ve Orman Bakanlığı kısıtlı maddeler PDF (son güncelleme 21.10.2026); ITP (jax.org); BfR. Haber ve ticari sayfalar yalnızca "dolaşan iddia" kanıtı olarak kullanıldı.

## 0. Kapsam kapısı

- Site/bölüm: Estranova, `/zamansiz-yasam/deneysel/` — evet.
- Konu: tek molekül (CoQ10) — evet.
- Kanıt boşluğu: **yalnızca bir kısmı.** Üç klinik kullanım (statin ilişkili kas yakınması, migren önleme, kalp yetmezliği) insan kanıtına sahip; yazıda zaten `clinical-guide` düzeniyle işleniyor. Kanıt boşluğu anti-aging, menopozal enerji/belirti ve uzun yaşam vaatlerinde.
- **Sonuç: skill "karışık durum" kuralıyla uygulanır.** Statin, migren ve kalp yetmezliği bölümleri bu turda yeniden yazılmaz (iki gün önce kaynak turundan geçti). Skill yalnızca "Anti-Aging ve Menopoz İddiaları" bölümüne ve ona bağlı modüllere (kanıt merdiveni, iddia haritası, menopoz/40+, bilinmeyenler) uygulanır.
- Çakışma bildirimi: Skill "yalnızca kanıtsız vaatler" diyor; mevcut yazıda bu vaatler tek bölümde ve kısa. Genişletme, yazının yarısından fazlasını yeniden kurmak anlamına gelmez; bir bölüm büyür, bir bölüm eklenir.

## 1. Mevcut yazıyı etkileyen en önemli bulgular

1. **"Yaşam süresi iddialarında kontrollü insan çalışması yok denecek kadar azdır" cümlesi eksik/yanıltıcı.** Kısa Yanıt'ta ve Bilimsel Editör Notu'nun bir yerinde bu çerçeve var. Oysa tek bir randomize çalışma var: KiSel-10 (İsveç, selenyum + CoQ10, 443 kişi, 70–88 yaş, 5,2 yıl): kardiyovasküler ölüm %5,9 ve %12,6 (p=0,015). Bu bir "yok" değil, "tek ekipten, selenyumla birleşik, replikasyonu görülmedi" durumu (bölüm 2, basamak 6).
2. **"Enerji/yorgunluk" için "kanıt yok" demek de yanlış olur.** Tsai 2022 meta-analizi 13 RCT, 1.126 kişi: yorgunluk puanında anlamlı azalma (Hedges g = −0,398). Buna karşın 2025 egzersiz meta-analizi güveni "çok düşük–düşük" buluyor ve Magalhães 2025'te depresyonlu hastalarda yorgunlukta anlamlı fark yok. Doğru ifade "küçük, tutarsız, düşük güvenli sinyal."
3. **Menopoz belirtileri için insan çalışması bulunamadı.** Başlıkta CoQ10/ubiquinol ve özette menopoz/postmenopozal geçen 10 PubMed kaydının hiçbiri menopoz belirtisi (sıcak basması, uyku, ruh hali) için randomize çalışma değil. 8'i hayvan, hücre, kesitsel veya başka hastalık. Dolaşan menopoz iddiasının tek dayanağı sponsorlu bir anket (bölüm 5).
4. **Tersine bir bulgu:** Postmenopozal kadınlarda serum CoQ10 premenopozal kadınlardan *yüksek* (Palan 2005, n=98, serum, doku değil), MHT kullananlarda düşüyor. Bu, "menopozla CoQ10 düşer" anlatısını desteklemez. Yazıdaki "yaşla düzeyler düşer" cümlesi doku düzeyi için ayrı, kadın/menopoz için bu veri.
5. **Dikkatli ele alınacak bir sinyal:** Chai 2010 (Multiethnic Cohort): ilk teşhisten önce alınan kanda yüksek CoQ10, postmenopozal meme kanseri riskiyle ilişkili (en yüksek–en düşük tersil OR 2,26; 160 olgu, 289 kontrol). Bu *takviye* çalışması değil, nedensellik göstermez, tek çalışma. Yazıya girmesi korku ve yanlış çıkarım riski taşır; girmemesi de "hormona duyarlı kanser öyküsünde veri yok" boşluğunu gizler. Karar kullanıcıda (bölüm 9).

## 2. Kanıt merdiveni (yalnızca anti-aging/enerji/menopoz vaatleri için)

1. **Mekanizma:** Mitokondri elektron taşıma zinciri ve zar antioksidanı; sağlam. Takviyeyle kan düzeyi *tutarlı biçimde artıyor* (Deng 2025, 24 çalışma). Kan düzeyinin hedef dokuda işlevi değiştirdiği ise gösterilmiş değil.
2. **Hayvanda ömür:**
   - Igarashi 2025 (Exp Gerontol, PMID 41083029, [DOI](https://doi.org/10.1016/j.exger.2025.112924)): yaşam boyu ubiquinol (diyette %0,3), dişi C57BL/6J farelerde medyan, %10 ve maksimum ömür ve sağkalım eğrilerinde fark yok; yalnızca 48. haftada yaşlanma skorunda geçici düzelme. Yazarlardan biri Kaneka (ubiquinol üreticisi) çalışanı.
   - ITP: Düz CoQ10 için ayrı bir ITP raporu bulunamadı. ITP sayfasında "MitoQ" (CoQ10'un mitokondriye hedefli türevi; sayfada "Coenzyme Q10" diye anılıyor), 100 ppm, 7 aylıktan itibaren: dişilerde log-rank p=0,67 (medyan 890 gün, kontrol 904), erkeklerde p=0,91. Düz CoQ10 sonucu olarak sunulmamalı. Kaynak: [ITP MitoQ](https://phenome-prod.jax.org/itp/surv/MitoQ/C2015). Hâlâ doğrulanamayan: ITP'nin plain CoQ10 testi (yazıda "bulamadık" olarak yazılır).
3. **İnsanda biyobelirteç:** Kan CoQ10 düzeyi artıyor (Deng 2025). KiSel-10 alt analizlerinde (Alehagen 2023, 2024, 2025) yaşlanmayla ilişkili biyobelirteçler, NT-proBNP, tiroid hormonları, inflamasyon yönünde değişiklik; hepsi aynı ekipten, aynı çalışmanın alt analizi, selenyumla birleşik. Birbirinden bağımsız doğrulama sayılmaz.
4. **İnsanda işlev:**
   - Yorgunluk: yukarıda (Tsai 2022 +; Deng 2025 zayıf ve tutarsız; Magalhães 2025 sonuçsuz). İlgili çalışmaların çoğu küçük, hastalık karışık, öznel ölçüt.
   - Egzersiz: güç/anaerobik değişmiyor, dayanıklılıkta küçük/dengesiz (Deng 2025).
   - Postmenopozal kadında işlev: kontrollü çalışma yok. Gözlemsel: Palacios (Madrid), n=40, ubiquinol kullananlar–kullanmayanlar, yaşam kalitesi; ClinicalTrials.gov'da sonuç yayımlanmamış (NCT03429231).
5. **İnsanda güvenlik:** BfR: ek alım *tipik* yan etkileri sindirim (bulantı, mide yanması, üst karın rahatsızlığı, ishal), tek tük deri döküntüsü; 300 mg/gün'e kadar seyrek yan etki bildirilmiş, üstü incelenmemiş; üst güvenli sınır belirlenmemiş; hamilelik, emzirme ve 18 yaş altında yeterli veri yok. Cochrane kalp yetmezliği derlemesi: yan etki riski için düşük kaliteli ve kesin olmayan kanıt. Tsai 2022: CoQ10 kolundaki 602 kişide tek sindirim yan etkisi bildirilmiş (meta-analiz özeti). Warfarin: mevcut kaynak 7 ve 8 (çelişkili).
6. **Sert sonlanım:** Tek randomize veri: KiSel-10 (Alehagen 2012, Int J Cardiol, PMID 22626835, [DOI](https://doi.org/10.1016/j.ijcard.2012.04.156)). 443 kişi, 70–88 yaş, selenyum maya 200 µg + CoQ10 200 mg/gün birleşik, 5,2 yıl; kardiyovasküler ölüm %5,9 ve %12,6 (p=0,015); NT-proBNP ve ekokardiyografi de lehine. 10 yıllık takipte kadınlarda etki daha belirgin (Alehagen 2025, Antioxidants, PMID 40563319, [DOI](https://doi.org/10.3390/antiox14060685)). Sınırlar: selenyumdan ayrıştırılamaz; İsveç gibi selenyumu düşük bölge (ortalama serum selenyum 67 µg/L); tek ekip; genel nüfus ve menopoz öncesi/erken dönem kadın yok; bağımsız replikasyon bu turda aranmadı (açık nokta). Bunun "CoQ10 ömrü uzatır" anlamına gelmediği, ama "hiç kanıt yok" da denemeyeceği yazıda iki cümleyle söylenmeli.

## 3. Çok eksenli değerlendirme

| Eksen | Değer | Gerekçe |
|---|---|---|
| Etkinlik kanıtı (anti-aging, menopoz, enerji) | Zayıf–sınırlı | Menopoz için RCT yok; yorgunlukta küçük ve düşük güvenli sinyal; uzun ömürde tek, selenyumla birleşik çalışma |
| Güvenlik kanıtı | Orta | Çok sayıda RCT'de iyi tolere, ama üst sınır ve uzun dönem, hamilelik, çocuk verisi eksik (BfR) |
| Mekanizma inandırıcılığı | Güçlü | Mitokondri ve antioksidan rolü iyi tanımlı; kan düzeyi artıyor, doku etkisi belirsiz |
| Ürün ve düzenleyici durum | Orta | İlaç değil, takviye; ruhsatlı CoQ10 ürünü yok; Bakanlık kısıtlı maddeler listesinde |
| Geri dönüşebilirlik | Güçlü | Bırakılınca etki kaybolur, ciddi kalıcı zarar bildirilmemiş; ama ilaç etkileşimi ve kanser tedavisinde belirsizlik ayrı |

## 4. İddia haritası

| İddia | Sınıf | Dayanak |
|---|---|---|
| Kan CoQ10 düzeyini yükseltir | Test edildi, desteklendi | Deng 2025 |
| Yorgunluğu azaltır | Test edildi, kısmen desteklendi / tutarsız | Tsai 2022 (+); Deng 2025 ve Magalhães 2025 (belirsiz) |
| Egzersiz performansını artırır | Test edildi, desteklenmedi (küçük/tutarsız) | Deng 2025 |
| Yaşlıda kardiyovasküler ölümü azaltır | Test edildi, tek çalışma, selenyumla birleşik | KiSel-10 |
| Ömrü uzatır | Fare: test edildi, desteklenmedi; insan: test edilemez (sert sonlanım çalışması yok) | Igarashi 2025; ITP (MitoQ) |
| Menopoz belirtilerini (sıcak basması, uyku, ruh hali) azaltır | Henüz test edilmedi | RCT yok; yalnızca sponsorlu anket |
| Kemik, kilo, kognisyon (menopoz) | Hayvan modelinde (ovariyektomili sıçan/fare); insanda test edilmedi | PMID 41275978, 24780430, 33754447 |
| "Hücreyi/cildi gençleştirir" | Bu haliyle test edilemez | Deri çalışması küçük pilot; klinik anlamlı sonlanım yok |
| Depresyonu azaltır | Küçük meta-analiz, orta düzeyde etki, hasta grubu karışık, menopozla ilgisiz | Magalhães 2025 (5 RCT, 474 kişi, SMD −0,68) |

## 5. Dolaşımdaki iddialar (iki bağımsız yerde doğrulananlar)

- "Menopozda enerji, ruh hali, sıcak basması ve uyku için ubiquinol" — ürün/perakende sayfaları, wellness blogları ve sektör haberleri (NutraIngredients, Nutraceuticals World, 2024). Haberlerin ortak dayanağı **Kaneka Nutrients (ubiquinol üreticisi) sponsorlu**, 200 kadınlık, plasebosuz, öz-bildirimli, Instagram etkileyicileriyle toplanmış anket; 2 ayda "%80 belirtilerde azalma bildirdi". Sıcak basması sonlanımı yok. **Yazıda anılmasa da iddianın kaynağı bu; anket kullanıcı hikâyesi değil, sektör yayını.** Katılımcı alıntısı yazılmaz.
- "Yaşla azalan CoQ10'u geri koymak gençleştirir" — ürün sayfalarının ortak anlatısı; menopozla düşüş verisi yok (Palan 2005 tersini gösteriyor).
- Ürün sayfalarında kaynaksız yüzde ("%95 enerji artışı hissetti") görüldü; doğrulanamadı ve yazıya girmez.

## 6. Sık bildirilen istenmeyen etkiler ve kimler dikkat etmeli

- Sık bildirilen: mide bulantısı, mide yanması, üst karın rahatsızlığı, ishal; tek tük cilt döküntüsü (BfR; LiverTox özetiyle uyumlu, ikincil kaynak üzerinden). Öznel fayda bildirimleri plasebo ve ortalamaya dönüş etkilerinden etkilenir; tekrarlayan yan etki bildirimleri ciddiye alınır. Bu ayrım yazıda iki cümleyle açıklanabilir.
- Warfarin: mevcut kaynaklar 7 ve 8 (çelişkili); BfR da kumarin türü antikoagülanlar ve tansiyon ilaçları için etkileşimin yeterince incelenmediğini yazıyor.
- Aktif kemoterapi/kanser tedavisi: SWOG S0221 (Ambrosone 2019, J Clin Oncol, PMID 31855498, [DOI](https://doi.org/10.1200/JCO.19.01203)): kemoterapi öncesi ve sırasında *herhangi bir antioksidan takviye* (A, C, E vitamini, karotenoid, CoQ10) nüks için HR 1,41 (%95 GA 0,98–2,04; p=0,06) ve ölüm için HR 1,40 (0,90–2,18; p=0,14). Anlamlılığa ulaşmadı, tek tek takviye için ayrı analiz yok; CoQ10'a özgü sonuç değil. NCI PDQ da aynı gözlemi aktarıyor ve uzun dönem izlem verisi olmadığını yazıyor. Mevcut yazıdaki "onkoloğun görüşü gerekir" cümlesini bu kaynak destekler.
- Hamilelik/emzirme: BfR yeterli veri olmadığını ve hekime danışılmasını söylüyor; mevcut yazı bunu zaten yumuşak yazıyor.
- Statin, kan şekeri/kolesterol ilaçları: NCI PDQ bu ilaçların CoQ10 etkisini azaltabileceğini, CoQ10'un warfarin ve insülin kullanımını değiştirebileceğini yazıyor (birincil kaynak okunmadı; ikincil).

## 7. Menopoz ve 40+ açısından

- Kadın oranı yüksek çalışmalar var (KiSel-10 yaklaşık %49 kadın, ortalama yaş 77), ama bunlar menopoz sonrası geç dönem; perimenopoz ve erken postmenopoz kadın verisi yok.
- KiSel-10 10 yıllık kadın alt grup analizi (2025) kadınlarda etkinin daha belirgin olduğunu söylüyor; bu alt grup analizi, hipotez üreticidir ve aynı ekipten.
- Menopoz belirtisi, uyku, kemik, kilo, bilişsel işlev için kontrollü insan çalışması yok. Hayvan çalışmaları ovariyektomili sıçan/fare modelleri (örn. kilo, kemik, bilişsel); insana çevrilmez.
- MHT kullanan kadınlarda serum CoQ10 düşük bulunmuş (Palan 2005, n=15 MHT, 33 MHT'siz postmenopoz); bunun klinik anlamı bilinmiyor.
- Bifosfonat kullanan postmenopozal kadınlarda CoQ10/kolesterol oranı düşük (Kalyan 2014, kesitsel, n=71); takviye ile düzelme gösterilmedi.

## 8. Düzenleyici durum ve devam eden çalışmalar (tarihli)

**Düzenleyici (26 Ekim 2026'da doğrulandı):**
- **TİTCK:** 16.10.2026 tarihli "Ruhsatlı Beşeri Tıbbi Ürünler Listesi"nde (23.121 satır) etkin madde sütununda ubidekarenon/ubiquinone/ubikinon/koenzim Q10 ve benzer yazımlarla **ruhsatlı ürün bulunmadı.** Çıkan tek ilgili kayıt idebenon (CoQ10 değil, sentetik analog; birkaç ürün, çoğu iptal/askı tarihli). Yazıya idebenon girmez.
- **Tarım ve Orman Bakanlığı:** Takviye Edici Gıdalar Kısıtlı Maddeler Listesi (son güncelleme 21.10.2026), "Koenzim Q 10" (kaynak: kimyasal sentez, fermantasyon): 11 yaş ve üzeri için **100–200 mg/gün** (yayım 22.01.2016); 4–10 yaş girişi 13.09.2018 tarihli. Bu *ürün içeriği için yasal sınırdır*, kullanım önerisi değildir; yazıya "doz" olarak girmemeli (bölüm 9 sorusu).
- **EFSA/AB:** 2010 görüşü, sağlıklı genel nüfus için CoQ10 sağlık iddialarını (performans, savunma) kanıtlanmamış buldu (BfR özeti; EFSA metni doğrudan okunmadı). BfR (10.11.2023): sağlıklı kişide takviye gerekli değil, üst alım sınırı yok.
- **FDA:** Bu turda doğrudan doğrulanamadı; takviye statüsü genel bilgi olarak biliniyor ama yazıya girmeden önce FDA/NIH ODS sayfası okunmalı.
- **WADA:** 2026 listesinde CoQ10 durumu doğrulanamadı. Yazıda anılmaz; sporcu okur kitlesi için değil.

**Devam eden çalışmalar (ClinicalTrials.gov, 26.10.2026):**

| Kayıt | Kapsam | Durum |
|---|---|---|
| NCT07772336 (MIRO-Q) | Ljubljana; 65+ yaş, prefrail, 200 mg ubiquinone (β-siklodekstrin) vs plasebo, 10 hafta, n=100; birincil sonlanım GDF-15; ikincil: inflamasyon, yürüme, kavrama, bilişsel, cilt | Henüz alım yok; başlangıç 2026-09, tahmini birincil bitiş 2026-12 |
| NCT07760506 | Quercefit + Ubiqsome (CoQ10), inflammaging/metabolik sağlık, n=60 | Alım sürüyor; başlangıç 18.09.2026, tahmini bitiş 2028-08 |
| NCT07789106 | Ubiquinol, GLP-1 kullananlarda yorgunluk ve kas gücü, n=90 | Alım sürüyor; başlangıç 01.09.2026, tahmini bitiş 2027-12 |
| NCT05500742 (PBAR) | CoQ10 + selenyum, resveratrol, TA-65: sağlıklı yaşlılarda biyolojik yaş göstergesi (proBNP), n=120 | Durum "bilinmiyor"; son güncelleme beklenmeli |
| NCT06419335 | Crohn'da yorgunluk, n=60 | Aktif, alım bitti |

Menopoz/postmenopozal kadında CoQ10 odaklı **randomize çalışma kaydı bulunmadı** (arama: koşul menopoz/postmenopoz/yaşlanma/yorgunluk + müdahale CoQ10/ubiquinol; 28 kayıt). Yakın kayıtlar MitoQ (CoQ10 türevi) ile postmenopozal kadında damar ve beyin damar işlevi: NCT05686967, NCT07406243; bunlar CoQ10 değil, bu yazıda anılacaksa "ilişkili molekül" olarak.

## 9. Kullanıcı kararı gereken noktalar

1. **Yapı:** Aşağıdaki öneriyi onaylıyor musunuz? (bölüm 10)
2. **Chai 2010 meme kanseri kohortu (bölüm 1.5):** (a) yazıya girmesin; "hormona duyarlı kanser öyküsü olanlarda veri yok" cümlesi yeter; (b) kısa, uyarılı biçimde girsin ("takviye çalışması değil, ilişki, nedensellik değil"). Önerim (a).
3. **Bakanlık 100–200 mg/gün:** Yazıya girmesin (doz yasağı ve "tavsiye" okunma riski). Önerim: girmesin; yalnızca "kısıtlı maddeler listesinde, takviye olarak satışı Bakanlık onayına bağlı" desin.
4. **Hekim sorusu (yetki istiyorum):** Mevcut SSS'nin ilk yanıtı anti-aging konusunu zaten kapsıyor ve KiSel-10'dan söz etmiyor. Yeni yazı onu da anarsa Dr. Aksoy'a *en fazla 2* konuya özgü soru önerebilirim (örn. KiSel-10'u nasıl okuyor; menopozdaki bir kadın "enerji için" sorduğunda ilk adım ne). Soru sormadan yeni hekim cümlesi eklemem; mevcut üç yanıt değişmez.
5. **Soru başlıklı H2:** Mevcut yazıda `Anti-Aging, Menopoz, "Enerji" İddiaları — Kanıt Nerede Biter?` başlığı soru niteliğinde; CLAUDE.md sınırı makale başına en fazla 1. Mevcut durumda 1 tane var; yeni bölümlerde soru başlığı kullanmam.

## 10. Önerilen yeniden yapılandırma (taslak; onay sonrası uygulanır)

Statin, migren, kalp yetmezliği, pratik notlar, doktora üç soru, kapanış bölümleri ve SSS değişmez (yalnızca Kısa Yanıt ve Bilimsel Editör Notu'ndaki "yaşam süresi" cümleleri düzeltilir). Değişen/eklenen:

1. **Kısa Klinik Yanıt (70–120 kelime):** "yaşam süresi iddialarında kontrollü insan çalışması yok denecek kadar azdır" çıkar. Yerine: tek randomize çalışma var (selenyumla birleşik, yaşlı İsveçlilerde, kalp ölümünde azalma), ama ömür uzattığı gösterilmedi; menopoz için insan çalışması yok; yorgunlukta küçük ve tutarsız sinyal.
2. **Anti-aging bölümü genişler** ve şu alt başlıklarla bölünür (mevcut `anti-aging` kimliği korunur, iç içindekiler güncellenir):
   - Kanıt merdiveni (altı basamak, tek kısa liste).
   - Çok eksenli tablo (beş eksen).
   - İddia haritası (sekiz satır).
   - Yorgunluk ve "enerji": Tsai 2022 ve 2025 derlemelerinin ikisini birden anlat.
   - Yaşlı kardiyovasküler çalışması (KiSel-10): anlat, sınırlarıyla.
3. **Yeni bölüm: Menopozda ne biliniyor, ne bilinmiyor** (`menopoz-ve-40`): bölüm 7'nin sadeleştirilmiş hâli, Palan 2005 tersine bulgusu, anketin kaynağı (ticari, plasebosuz).
4. **Yeni bölüm: Henüz bilinmeyenler ve yakında öğreneceklerimiz** (`bilinmeyenler`): MIRO-Q, NCT07760506, NCT07789106, menopozda çalışma yok.
5. **Kimler dikkat etmeli:** mevcut RedFlagBox'a "Meme kanseri tedavisi sırasında (antioksidan takviye araştırması)" sınırlı bir madde; kemoterapi maddesi SWOG S0221 kaynağıyla bağlanır.
6. **Kaynaklar 9 → yaklaşık 20:** Tsai 2022, Deng 2025, Magalhães 2025, Alehagen 2012 ve 2025, Igarashi 2025, ITP MitoQ, Palan 2005, Ambrosone 2019, BfR, Bakanlık listesi, TİTCK listesi, ClinicalTrials.gov kayıtları. Gövdede dış link olmaz; yalnızca kaynak bölümünde.
7. **Evidence etiketleri:** yalnızca insan verisine dayanan iddialara: yorgunluk (düşük–orta), KiSel-10 (orta–sınırlı, tek çalışma), kan düzeyi artışı (iyi).
8. **Metadata:** `modifiedDate`, `readingMinutes` (9 → 12–13), `articleDescription`, TOC, `static-articles.ts` ve `article-approvals.ts` güncellenir.
9. **Onay zinciri:** düzenleme onayı, tıbbi onay, Mumcu incelemesi (KC beyanı), `article-log.md` kaydı.

Yazıda **yapılmayacaklar:** doz/kür/stack, marka ve tedarik, kullanıcı hikâyesi, hayvan verisini insan sonucu gibi yazma, mevcut hekim yanıtlarını değiştirme, yeni birinci tekil hekim cümlesi (onaysız), makale görselini üst hero yapma (hero parent hub'ınki kalır).

## 11. Açık noktalar (doğrulanamadı)

- KiSel-10'un bağımsız replikasyonu veya eleştirisi (yorum yazıları) bu turda aranmadı.
- ITP'de düz CoQ10 testi: bulunamadı, "yok" denemez; yazıda "bulamadık" ifadesi.
- Fiziksel işlev, kas gücü, bilişsel işlev için sağlıklı yaşlıda CoQ10 derlemesi bu turda taranmadı (arama sorguları yetersiz sonuç verdi); yazıda bu konu "veri sınırlı" demek yerine hiç iddia edilmemeli ya da ayrıca taranmalı.
- FDA ve WADA durumu doğrulanmadı (bölüm 8).
- NCI PDQ ve NIH ODS metinleri birincil okunmadı; ikincil özetlerden alındı. Yazıya girecekse birincil metin okunmalı.
- Mevcut kaynak 1–9 bu turda yeniden doğrulanmadı (iki gün önceki kaynak turu geçerli).
- Palan 2005 ve Chai 2010 küçük/eski; yazıda yalnızca sınırlarıyla.
