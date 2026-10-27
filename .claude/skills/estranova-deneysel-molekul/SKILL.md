---
name: estranova-deneysel-molekul
description: >-
  Estranova "Zamansız Yaşam" bölümünde (özellikle /zamansiz-yasam/deneysel/ ve
  /zamansiz-yasam/vitaminler/) uzun yaşam, yaşlanma karşıtlığı, hücresel
  gençlik, enerji veya iyi oluş vaadiyle kullanılan ve bu vaatler için insanda
  sert sonlanım kanıtı olmayan bir molekül, peptid, takviye ya da etiket dışı
  ilaç hakkında yeni makale yazarken, mevcut makaleyi yeniden yapılandırırken
  veya böyle bir makalenin planını çıkarırken kullan. /bilimsel-pencere/ altındaki
  bir molekül yazısı "almalı mıyım" sorusuna giren bölümler taşıyorsa o
  bölümler için de kullan (karışık durum). Örnekler: BPC-157, TB-500,
  GHK-Cu, epitalon, MOTS-c, NMN, NR, NAD+, CoQ10, resveratrol, spermidin,
  ürolitin A, fisetin, kuersetin, taurin, glisin, alfa-ketoglutarat, metilen
  mavisi, uzun yaşam amaçlı rapamisin veya metformin. Onaylı endikasyonu için
  yazılan klinik rehberlerde (MHT, D vitamini eksikliği, obezitede GLP-1),
  cihaz/estetik uygulamalarda, salt humanize/dil düzenlemesinde ve diğer
  sitelerde (tupbebek, draksoyivf, senaiaksoy) kullanma.
---

# Estranova — Kanıtı sınırlı moleküller için yazım çerçevesi

## Neden bu skill var

Uzun yaşam ve iyi oluş vaadi taşıyan moleküllerin çoğu için "insanda ömrü
uzattığı kanıtlandı" cümlesi hiçbir zaman kurulamayacak. Yalnızca "lab ve hayvan
verisi var, insan çalışması yok" demek her yazıyı aynılaştırır ve okuru
forumlara geri gönderir. Okurun asıl sorusu "kanıtlandı mı?" değil, şu:
**"Almalı mıyım, alırsam ne olur, kime zararı olur, param ve dikkatim boşa mı
gider?"** Bu soruların çoğu veriyle yanıtlanabilir. Bu skill yazıyı o sorulara
göre kurar.

Temel ilke: **Kanıt yokluğu tek tip değildir.** Hiç test edilmemiş bir molekül,
insanda test edilip etkisiz bulunmuş bir molekül ve güvenlik verisi bol ama
etkinlik verisi zayıf bir molekül aynı cümleyle anlatılmaz.

## 1. Kapsam kapısı — bu skill devreye girecek mi?

Yazmaya başlamadan önce üç soruyu yanıtla:

1. **Site ve bölüm:** Hedef Estranova'da, Zamansız Yaşam altında mı
   (`/zamansiz-yasam/deneysel/`, `/zamansiz-yasam/vitaminler/` veya bu konuda
   açılacak yeni bir alt bölüm)? `/bilimsel-pencere/` altındaki molekül
   yazıları için aşağıdaki karışık durum kuralına bakın.
2. **Konu:** Makalenin ana konusu tek bir molekül, peptid, takviye ya da etiket
   dışı ilaç (veya yakın bir molekül grubu) mu?
3. **Kanıt boşluğu:** Makalenin ana vaadi (uzun yaşam, yaşlanmayı yavaşlatma,
   enerji, zihinsel berraklık, iyi oluş, "hücresel gençlik", doku onarımı)
   insanda sert sonlanımla (ömür, hastalık, kırık, ölüm) test edilmemiş veya
   edilemez mi?

**Üçü de evetse** skill tam uygulanır.

**Karışık durum:** Molekülün güçlü insan kanıtı olan bir kullanımı, bir de
kanıtsız uzun yaşam vaadi varsa (kreatin ve kas, magnezyum ve uyku, GLP-1 ve
"yaşlanma karşıtı" iddialar) onaylı ve kanıtlı kısım normal `clinical-guide`
düzeniyle yazılır. Bu skill yalnızca kanıtsız vaatleri ele alan bölümlere
uygulanır: kanıt merdiveni, iddia haritası, bilinmeyenler.

**Bilimsel Pencere'deki molekül yazıları da karışık durumdur**, eğer
güvenlik, ürün, düzenleyici durum veya "denemeli miyim" gibi okurun kararına
giren bölümler taşıyorsa. Böyle bir yazı biyolojiye ve kanıta odaklı kalır.
Skill'in kanıt merdiveni, menopoz ve bilinmeyenler modülleri yazıya kısa
biçimde eklenir. Hayvan verisine Evidence etiketi konmaz (§4). Aynı molekülün
Deneysel yazısı varsa ortak konular, yani Türkiye'deki yasal durum, damardan
uygulama ve iddia haritasının tamamı orada anlatılır. Bilimsel Pencere'de bu
konuların kısa bir özeti ve Deneysel yazıya bağlantı kalır. İki yazı aynı
cümleleri tekrarlamaz ve birbirine bağlantı verir. Konu yalnızca Bilimsel
Pencere yazısında varsa (ör. ürün analizi bulguları) taşıma kararı
kullanıcıya bırakılır.

**Yerleşim kapısı (CLAUDE.md §6 "Bölüm yerleşimi"):** Skill'i uygulamadan önce yazının nereye gideceğini şu soruyla seç: okur sonunda *kullanıp kullanmamaya* mı karar verecek (Deneysel/Vitaminler), yoksa *mekanizmayı veya çalışmayı* mı anlayacak (Bilimsel Pencere)? Aynı molekülün iki yazısı varsa ortak konular Deneysel yazıda kalır; yeni ikinci yazı ancak ayrı bir okuma niyeti varsa açılır.

**Kapsam dışı** (skill kullanılmaz):

- Onaylı endikasyonu için yazılan klinik rehberler: MHT/HRT, D vitamini
  eksikliğinin tedavisi, osteoporoz ilaçları, obezitede GLP-1.
- Cihaz, estetik ve ameliyatsız uygulamalar (`/zamansiz-yasam/non-invaziv/`).
  Onlar için `deneysel-tedaviyi-okuma-kilavuzu` mantığı geçerlidir.
- Beslenme düzeni, egzersiz, uyku gibi molekül olmayan yaşam tarzı konuları.
- `/bilimsel-pencere/` altındaki salt mekanizma yazıları, yani biyolojiyi
  anlatıp okurun "almalı mıyım" sorusuna girmeyen yazılar. Bu soruya giren
  molekül yazıları yukarıdaki karışık durum kuralına göre ele alınır.
- Yalnızca `humanize`, dil, gramer veya dar düzenleme istekleri. Bunlarda
  `senai-humanize` geçerlidir. Bu skill bölüm yapısını yalnızca kullanıcı
  yeniden yapılandırma isterse değiştirir.
- Sosyal medya, YouTube senaryosu, bülten. Kullanıcı açıkça istemedikçe
  kullanılmaz.
- tupbebek.com, draksoyivf.com, senaiaksoy.net.

Emin değilsen kullanıcıya tek cümleyle sor: "Bu yazıyı kanıtı sınırlı molekül
çerçevesiyle mi, standart klinik rehber olarak mı kuralım?"

## 2. Ön kapılar (bu skill bunların yerine geçmez)

Sırayla uygula:

1. Repo `CLAUDE.md` içindeki makale preflight'ı: kanonik stil rehberini oku ve
   gereken cümleyle başla. Okunamıyorsa dur.
2. `docs/ARTICLE-TEMPLATES.md` ile yazarın yetki hattını ve makale türünü
   belirle. Dr. Aksoy veya klinik yazar için `clinical-guide`, hekim olmayan
   yaşıt yazar için `editorial-guide`.
3. `AGENTS.md` içindeki Evidence bileşeni, şema, SSS ve hekim yanıtı kuralları.

Bu skill ile repo kuralları çelişirse **repo kuralları geçerlidir.** Çelişkiyi
kullanıcıya bildir.

## 3. Araştırma — toplanacak veri

Her basamak için kaynak topla. "Bulunamadı" da kayda değer bir bulgudur.

| Basamak | Ne aranır | Nerede |
|---|---|---|
| 1. Mekanizma | Hangi yolak? Hedef dokuya ulaşıyor mu? Oral biyoyararlanım? | Derlemeler |
| 2. Hayvanda ömür | NIA Interventions Testing Program (ITP) test etti mi, sonuç ne, cinsiyete göre fark var mı? Diğer model organizmalar | ITP yayınları, PubMed |
| 3. İnsanda biyobelirteç | Kandaki düzey, hedef yolak, inflamasyon, epigenetik saat | RCT'ler |
| 4. İnsanda işlev | Kas gücü, yürüme hızı, insülin duyarlılığı, uyku, bilişsel test | RCT'ler, meta-analizler |
| 5. İnsanda güvenlik | Kaç kişide, ne kadar süre, hangi yan etkiler, etkileşimler | RCT güvenlik verisi, farmakovijilans |
| 6. Sert sonlanım | Ömür, hastalık, ölüm (çoğunlukla yok) | Kohortlar, Mendel randomizasyonu |

Ayrıca topla:

- **Düzenleyici durum:** İlaç mı, takviye mi, araştırma kimyasalı mı? FDA ve
  TİTCK durumu, WADA yasak listesi. Tarih ve kaynakla, güncelliği doğrulayarak.
- **Devam eden çalışmalar:** ClinicalTrials.gov kayıtları ve tahmini bitiş
  tarihleri.
- **Kadın ve 40+ verisi:** Çalışmalarda kadın oranı, peri/postmenopozal alt
  grup, cinsiyete göre farklı sonuçlar. ITP'de bazı etkilerin yalnızca erkek
  farelerde görülmesi gibi ayrımlar Estranova okuru için doğrudan önemlidir.
- **Dolaşımdaki iddialar:** Kamuya açık forum, sosyal medya, ürün sayfası ve
  popüler podcast'lerde dolaşan iddiaları listele. Kurallar:
  - Bir iddiayı listeye almak için birden fazla bağımsız yerde gördüğünü
    doğrula. "Forumlarda deniyor ki" ifadesini uydurma.
  - Kullanıcı adı, kişisel hikâye, alıntı, satıcı veya forum bağlantısı
    toplanmaz ve yayımlanmaz.
  - Sık bildirilen istenmeyen etkileri ayrıca not et (bkz. §5.5).

## 4. Kanıt merdiveni ve Evidence etiketi

Kanıt düzeyi **molekülün tamamına değil, tek tek iddiaya** verilir.

- Repo `<Evidence level={N} />` (1–5) bileşenini yalnızca insan verisine
  dayanan kritik iddialarda kullan. Örnek: "NAD⁺ kan düzeyini yükseltiyor
  `<Evidence level={4} />`", "Kas gücünü artırdığı gösterilemedi
  `<Evidence level={3} />`".
- Hayvan veya hücre verisine dayanan bir iddiaya Evidence etiketi koyma. Metinde
  basamağı açıkça yaz: "yalnızca farelerde", "hücre kültüründe".
- Yazının başında okurun molekülün hangi basamağa kadar çıktığını tek bakışta
  görmesini sağla. Bu bir kısa liste, tablo veya sade bir görsel olabilir;
  literal nokta dizileri (`●●●○○`) yasaktır.

## 5. Makale yapısı

`clinical-guide` veya `editorial-guide` kabuğu korunur. Aşağıdaki modüller o
kabuğun içine yerleşir. **Çekirdek modüller** her yazıda bulunur. **Seçmeli
modüller** yazıya gerçekten değer katıyorsa eklenir. Her yazı aynı başlıklarla
dizilirse bu skill amacına ulaşmamış olur.

### Çekirdek

1. **Kısa Klinik Yanıt / editoryal spot (70–120 kelime):** "Kanıtlanmadı"
   demekle yetinme. Molekülün merdivende nerede durduğunu, en güçlü bilinen
   şeyi, en önemli güvenlik notunu ve kimin dikkatli olması gerektiğini söyle.
2. **Kanıt merdiveni:** Altı basamağın her biri için bir-iki cümle. Bilinmeyen
   basamak "bilinmiyor" diye yazılır, boş bırakılmaz.
3. **Çok eksenli değerlendirme tablosu:** Değerlendirme tek harf değil, beş
   eksendir. Değerler sözel yazılır (güçlü / orta / sınırlı / zayıf /
   bilinmiyor) ve her hücre metinde gerekçelendirilir:

   | Eksen | Soru |
   |---|---|
   | Etkinlik kanıtı | İnsanda hangi basamağa kadar ve hangi sonuçla? |
   | Güvenlik kanıtı | İnsanda kaç kişide, ne kadar süre, hangi dozlarda kullanıldı? |
   | Mekanizma inandırıcılığı | Biyolojik olarak mantıklı mı, hedef dokuya ulaşıyor mu? |
   | Ürün ve düzenleyici durum | İlaç, takviye, araştırma kimyasalı? Saflık güvencesi var mı? |
   | Geri dönüşebilirlik | Bırakınca etkisi ve olası zararı geçiyor mu? |

4. **İddia haritası:** Dolaşımdaki her iddia tek satırda dört sınıftan birine
   konur:
   - Test edildi, desteklendi
   - Test edildi, desteklenmedi
   - Henüz test edilmedi ama test edilebilir (varsa devam eden çalışmayla)
   - Bu haliyle test edilemez

   İddialar kanıt sırasına göre dizilir. Hiçbir iddia onaylanmış gibi
   sunulmaz.
5. **Sık bildirilen istenmeyen etkiler:** Kullanıcı bildirimleri etkinlik için
   zayıf, güvenlik sinyali olarak değerlidir. Bunu okura bir-iki cümleyle
   açıkla: öznel fayda bildirimleri plasebo, ortalamaya dönüş ve aynı anda
   değişen alışkanlıklardan etkilenir; tekrarlayan yan etki bildirimleri ise
   ciddiye alınması gereken sinyallerdir. Bildirimler anonim ve toplu
   ("sık bildirilen") ifadeyle yazılır, hikâyeye dönüştürülmez.
6. **Kimler kullanmamalı ve hekimle neler konuşulmalı:** Gebelik ve gebelik
   planı, kanser öyküsü (özellikle büyüme faktörü yolaklarını etkileyen
   peptitlerde), ilaç etkileşimleri, karaciğer ve böbrek hastalığı,
   antikoagülan kullanımı ve molekülün kendine özgü riskleri. Kullanacak okur
   için ilkeler: başlamadan önce hekimle bazal değerlendirme, aynı anda tek
   değişiklik, hangi belirtide bırakılacağı, ürün kalitesinin neden önemli
   olduğu.
7. **Menopoz ve 40+ açısından:** Kadınlarda, peri/postmenopozda veya hormon
   tedavisiyle birlikte ne biliniyor, ne bilinmiyor? Veri yoksa bunu açıkça
   yaz.
8. **Bilinmeyenler ve yakında öğreneceklerimiz:** Hangi soru açık, onu hangi
   çalışma yanıtlar, böyle bir çalışma yürüyor mu? Bu bölüm güncelleme için
   gerekçe sağlar: çalışma sonuçlanınca yazı güncellenir.

### Seçmeli

- **Molekülün hikâyesi:** Nasıl popüler oldu, fareden insana neden geçemedi?
  Yalnızca belgelenmiş bilim tarihi. Kişileri ve şirketleri karalamadan yazılır.
- **Aynı hedef için kanıtı daha güçlü yollar:** Karşılaştırma tablosu olarak,
  vaaz tonunda değil. Kas kaybı için direnç egzersizi ve yeterli protein gibi.
- **Dr. Aksoy'un sesi:** Stil rehberine göre Estranova'da ayrı bir "Dr. Aksoy'un
  yaklaşımı" kutusu eklenmez. Hekim muhakemesi yalnızca `senai-aksoy`
  byline'lı yazılarda iki yerde görünür: gövdedeki onaylı birinci tekil
  cümlelerde ve `AGENTS.md` akışıyla hazırlanan "Dr. Aksoy'a sorular"
  SSS'sinde. Moleküle özel soru Dr. Aksoy'a sorulur, gerçek yanıt kaydedilir.
  Yanıt yoksa yeni soru yayımlanmaz; model hekim adına konuşmaz. Diğer
  yazarların yazılarında bu bölüm hiç açılmaz.

## 6. Yasaklar

- Doz, kür, protokol, "stack" (kombinasyon) önerisi. Doz yalnızca bir
  çalışmada test edilen dozu betimlemek için yazılabilir ("çalışmada günde X mg
  kullanıldı"); tavsiye cümlesine dönüştürülmez.
- Tedarik bilgisi: marka, satıcı, eczane, "nereden bulunur", fiyat.
- Kullanıcı hikâyesi, kişisel deneyim alıntısı, "X kullanıcısı şöyle anlatıyor",
  önce-sonra anlatısı.
- "Kanıtlanmış", "garantili", "mucize", "gençlik iksiri", "biohack" gibi vaat
  dili. Tersi de yasak: kanıtı sınırlı diye molekülü veya kullanıcıyı
  küçümseyen alaycı dil.
- Hayvan verisini insan sonucu gibi sunmak ("hücreleri gençleştiriyor").
- Forum gürültüsünü kanıt gibi saymak, okunmamış kaynağa atıf yapmak.
- Klinik CTA, randevu, paket, ürün satışı (Estranova `CLAUDE.md` §1).

## 7. Teslim öncesi kontrol

- [ ] Kapsam kapısındaki üç soru yanıtlandı. Karışık durumsa skill yalnızca
      kanıtsız vaatlerin bölümlerine uygulandı.
- [ ] Stil rehberi preflight'ı ve makale türü kararı yapıldı.
- [ ] Altı basamağın her biri ya kaynakla dolduruldu ya da "bilinmiyor" diye
      yazıldı.
- [ ] Evidence etiketleri yalnızca insan verisine dayanan iddialarda.
- [ ] Çok eksenli tablonun her hücresi metinde gerekçelendirildi.
- [ ] İddia haritasındaki her iddianın en az iki bağımsız yerde dolaştığı
      doğrulandı; kişisel hikâye veya kullanıcı adı yok.
- [ ] Doz/protokol önerisi ve tedarik bilgisi yok.
- [ ] Menopoz/40+ bölümü var; veri yoksa bu açıkça yazıldı.
- [ ] Düzenleyici durum ve devam eden çalışmalar tarihli ve doğrulanmış.
- [ ] Ayrı bir "Dr. Aksoy'un yaklaşımı" kutusu yok. Hekim sesi yalnızca onun
      byline'ında, gerçek ve onaylı yanıtla.
- [ ] Yazı, aynı bölümdeki komşu molekül yazılarıyla aynı cümleleri
      tekrarlamıyor. İddia haritası ve Kısa Yanıt bu moleküle özgü.
- [ ] Repo yayın öncesi kontrolleri (`docs/ARTICLE-TEMPLATES.md` "Yayın öncesi
      ortak kontrol", kaynak denetimi) ayrıca çalıştırıldı.

Bu skill kendi başına commit, push, deploy veya yayın yetkisi vermez.
