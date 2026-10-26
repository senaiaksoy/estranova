# Peptid kullanımları — yeniden yapılandırma için araştırma notu

Tarih: 26 Ekim 2026. Yetki: Kullanıcının "peptid yazısıyla başlayalım" talebi ve devir notundaki "araştırma notunu görmeden yazıya geçme" kuralı. Bu not makaleyi değiştirmez; commit, push veya deploy yetkisi yok.

Hedef makale: `src/pages/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz.astro` (son güncelleme 12 Ekim 2026, `origin/main` `37ec12ba` ile aynı). Kullanılan skill: `.claude/skills/estranova-deneysel-molekul/SKILL.md`.

Literatür PubMed ve ClinicalTrials.gov üzerinden, düzenleyici bilgiler FDA, WADA/USADA, TİTCK ve Tarım ve Orman Bakanlığı kaynaklarından alındı. Hakem denetimi görmemiş haber ve hukuk bürosu özetleri "ikincil" diye işaretlendi.

## 0. Kapsam kapısı

- GLP-1 bölümü (semaglutid, tirzepatid): onaylı endikasyonlu ilaç, normal `clinical-guide` olarak kalır. TİTCK 16.10.2026 listesinde semaglutid (20 satır), tirzepatid (24) ve liraglutid (12) ruhsatlı ürünleri var; bu bölüm skill kapsamı dışında.
- Skill'e giren bölümler: BPC-157, timosin beta-4/TB-500, CJC-1295, ipamorelin, GHK-Cu (enjeksiyon), MOTS-c, epitalon, AOD-9604.
- Yazı tek bir molekül değil bir molekül grubu. Skill'in "karışık durum" kuralı uygulanır.

## 1. Mevcut yazıyı etkileyen en önemli bulgu: FDA tablosu değişti

Yazıdaki kaynak 12 (FDA, sayfa içeriği 22 Nisan 2026) hâlâ doğru okunabilir ama bağlam eksik:

| Tarih | Gelişme | Kaynak |
|---|---|---|
| Nisan 2026 öncesi | BPC-157, CJC-1295, TB-500, GHK-Cu (enjeksiyon), epitalon, AOD-9604, MOTS-c daha önce "kategori 2" (ciddi güvenlik endişesi) listesindeydi; ipamorelin 29.09.2023'te eklenmişti | FDA sayfası |
| 15 Nisan 2026 | FDA 12 peptidi kategori 2'den çıkardı (nominatörler adaylıkları geri çekti). Çıkarma, bu maddeleri hazırlamaya uygun kılmıyor | [FDA sayfası](https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks) (22.04.2026), [Goodwin](https://www.goodwinlaw.com/en/insights/blogs/2026/05/fda-signals-potentially-evolving-stance-toward-compounding-of-certain-peptides) (ikincil) |
| 23–24 Temmuz 2026 | Eczane Hazırlama Danışma Kurulu (PCAC) toplandı. FDA personeli yedi maddenin hiçbirinin 503A listesine alınmamasını önerdi | [FDA bilgilendirme belgesi](https://www.fda.gov/media/193342/download) (birincil, s. 6–8) |
| 23–24 Temmuz 2026 | Kurul bağlayıcı olmayan oyla altı maddeyi listeye almayı önerdi, emideltideyi (DSIP) reddetti | [McDermott](https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/), [RAPS 1](https://www.raps.org/resource/fda-advisory-committee-backs-two-controversial-peptides.html), [RAPS 2](https://www.raps.org/resource/fda-advisory-committee-backs-two-more-peptides-rejects-one-for-compounding-list.html) (ikincil) |
| 26 Ekim 2026 | Nihai FDA kararı veya kural yazımı bulunamadı | Aramalar |

Oy dağılımı (McDermott; BPC-157, KPV, TB-500 için 8–6, 1 çekimser; MOTS-c 7–5, 2 çekimser; semax 8–5; epitalon 7–4; emideltide 6–7). **Tutarsızlık:** RAPS epitalon için 7–5, 1 çekimser yazıyor. FDA'nın kendi tutanağı okunmadı. Yazıda tek tek oy sayısı verilmemeli; "kurul çoğunluğu önerdi, FDA personeli karşı çıktı, nihai karar verilmedi" yeterli.

Kurulda dile gelen gerekçeler (RAPS 1):
- FDA personeli: BPC-157 için "etkililik kanıtı yok", "kalite standartları kurulamıyor", "iyi tanımlanmış değil". FDA'ya üç BPC-157 yan etki bildirimi gelmiş, nedensellik karışık ilaçlar nedeniyle belirsiz.
- Karşı oy veren üyeler: randomize kontrollü çalışma yokluğu, "çok fazla bilinmeyen".
- Evet oyu veren üye: "karar hekim ve eczacıya geri verilsin".
- Kurulun baktığı endikasyonlar: BPC-157 ülseratif kolit, TB-500 yara iyileşmesi, MOTS-c obezite ve osteoporoz, epitalon uykusuzluk. **Hiçbiri menopoz, kas toparlanması veya uzun yaşam değil.**

Hâlâ kategori 2: ipamorelin asetat, GHRP-2, GHRP-6, kisspeptin-10 (FDA sayfası). Ipamorelin için FDA: damardan verilince ölüm dahil ciddi yan etki bildiren bir çalışma var.

Sonraki kurul (Şubat 2027'den önce beklenen): GHK-Cu (enjeksiyon), LL-37, dihexa, PEG-MGF, melanotan II.

**Makale için sonuç:** Yazı "FDA bunları güvenlik riski diye listeledi" izlenimini verebilir. Doğrusu: liste değişiyor, kurul çoğunluğuyla destek verdi, ama personel kanıtı yetersiz buluyor ve hiçbir karar menopoz endikasyonu için değil. Tarihli ve "kurul önerisi bağlayıcı değil" ifadesiyle yazılmalı.

## 2. Kanıt merdiveni (molekül başına)

### BPC-157

1. **Mekanizma:** Mide kaynaklı 15 aminoasitlik sentetik peptid. Hayvanda anjiyogenez, kollajen sentezi, nitrik oksit yolağı üzerinden etki öne sürülüyor (Int J Mol Sci 2026, PMID 41898733). İnsanda plazma yarı ömrü 30 dakikanın altında, ama biyolojik etki saatler-günler sürüyor diye bildiriliyor; yazarlar bu farkı çözülmemiş sorun sayıyor (Pharmaceutics 2026, PMID 42198317, [DOI](https://doi.org/10.3390/pharmaceutics18050625)).
2. **Hayvanda ömür:** Test edilmemiş/bulunamadı. (Hayvanda doku iyileşmesi: kemirgen çalışmaları, Demirtaş 2026 derlemesi mevcut kaynak 7.)
3. **İnsanda biyobelirteç:** Yok.
4. **İnsanda işlev:** İnsan verisi toplam 30 kişi, üç kontrolsüz küçük çalışma: diz içi enjeksiyon (n=16), mesane içi interstisyel sistit (n=12), damardan güvenlik pilotu (n=2). Hepsi çoğu katılımcıda belirti düzelmesi bildirdi, tedaviye bağlı yan etki bildirmedi; yöntemsel kalite düşük, kanıt kesinliği "çok düşük". Yazarların sonucu: klinik kullanım, etik onaylı ve düzenlenmiş çalışmalar dışında önerilmez. Acta Orthop Belg. 8 Ekim 2026, PMID 42885452, [DOI](https://doi.org/10.52628/92.3.15837).
5. **İnsanda güvenlik:** Bilinmiyor. 2015–2016'da oral 1 mg tabletle 42 sağlıklı kişide faz 1 çalışma kayıtlı (NCT02637284, Meksika, durumu "bilinmiyor", sonuç yayımlanmamış). Derlemeler bunu yayımlanmış kanıt olarak saymıyor.
6. **Sert sonlanım:** Yok.

Skill'e uygun ek bulgular:
- Scoping derlemesi (AJSM 2026, PMID 42578445, [DOI](https://doi.org/10.1177/03635465261464420)): BPC-157, TB-500, CJC-1295, MK-677, ipamorelin, GHK-Cu için yayınların %67'si hayvan çalışması; insan verisi "en iyi ihtimalle ılımlı" (kemik metabolizması, dejeneratif diz ağrısı); "iddia edilen faydalar mevcut insan çalışmalarıyla doğrulanmamış"; kardiyovasküler ve insülin direnci riskleri belgelenmiş (bu risk özellikle MK-677 için).
- Sports Med 2026 (PMID 41966639, [DOI](https://doi.org/10.1007/s40279-026-02437-0)) ve JBJS Rev 2026 (PMID 42160466, [DOI](https://doi.org/10.2106/JBJS.RVW.26.00027)): BPC-157, timosin türevleri ve GH aksı sekretagogları "araştırma aşamasında"; ürün kalitesi ve doping kısıtları ayrı sorun. Yalnızca GLP-1 reseptör agonistleri diz osteoartritinde tekrarlanabilir randomize kanıta sahip.

**Devam eden çalışmalar (ClinicalTrials.gov, 26.10.2026):**

| Kayıt | Kapsam | Durum | Not |
|---|---|---|---|
| NCT07437547 (BPC-HAMSTR) | Hamstring yırtığı, 120 kişi, 18–45 yaş, 14 gün deri altı, faz 2 | Alım sürüyor, tahmini birincil bitiş 14.02.2027 | Sponsor Hudson Biotech, tek merkez Şenzhen. Yaşlı veya kadın alt grubu yok |
| NCT07803250 | Omuz rotator manşet onarımı sonrası, 30 kişi, 90 gün, faz 1 | Başlamadı (Ocak 2027) | Arkansas Üniversitesi; hormon tedavisi kullananlar dışlanıyor |

### Timosin beta-4 ve TB-500

- TB-500, timosin beta-4'ün kısa parçası (17–23 aralığı, LKKTETQ). Tam molekül ile aynı değil; mevcut yazı bunu doğru söylüyor.
- **İnsan verisi tam timosin beta-4 içindir:** kuru göz (faz 2–3 çalışmalar: NCT01387347, NCT02597803, NCT02974907, NCT03937882 — RGN-259 göz damlası), venöz ülser (NCT00832091, faz 2), basınç ülseri (NCT00382174), epidermolizis bülloza (NCT00311766), akut miyokard enfarktüsü (Çin'de rekombinant timosin beta-4, NCT05485818, NCT05984134; faz 2c NCT07586865 henüz başlamadı). Bunlar yerel veya hastane koşullu uygulamalardır; enjeksiyonla menopozda kas toparlanması bunların konusu değil.
- **TB-500 parçası için insan çalışması:** ClinicalTrials.gov'da yalnızca NCT07487363 (faz 1/2, stabil aterosklerotik damar hastalığı, 80 kişi, Hudson Biotech, tahmini bitiş 14.02.2027). Sonuç yok. FDA: TB-500 için "insan maruziyeti verisi belirlenemedi" (FDA sayfası).
- WADA: yasaklı (aşağıda).

### Büyüme hormonu aksı: CJC-1295 ve ipamorelin

- **CJC-1295:** Sağlıklı 21–61 yaş yetişkinlerde iki randomize, plasebo kontrollü artan doz çalışması; büyüme hormonu 2–10 kat, IGF-1 1,5–3 kat arttı, ciddi yan etki bildirilmedi. Sonlanım biyobelirteçti. Teichman, J Clin Endocrinol Metab 2006, PMID 16352683, [DOI](https://doi.org/10.1210/jc.2005-1536) (mevcut kaynak 3). Bir faz 2 çalışma (HIV ilişkili visseral yağ, 120 kişi, NCT00267527) sonuçsuz kapandı; kayıtta kapanma nedeni yazılı değil.
- **İpamorelin:** Sağlıklı erkeklerde farmakokinetik çalışma (Pharm Res 1999, PMID 10496658; 8 erkek x 5 doz, terminal yarı ömür 2 saat). Ameliyat sonrası bağırsak felcinde faz 2 (n=117) birincil sonuçta plaseboya üstünlük yok (mevcut kaynak 13); daha büyük faz 2 çalışma NCT01280344 (n=320, tamamlandı) için yayımlanmış sonuç bulunamadı.
- **Sınıf düzeyi uyarı (GH'yi artırmak = fayda mı?):** Sağlıklı yaşlılarda büyüme hormonu verilmesinin 31 makalelik sistematik derlemesi (ort. yaş 69, 220 kişi): yağ kütlesi ~2,1 kg azaldı, yağsız kütle ~2,1 kg arttı, ama ödem, eklem ağrısı, karpal tünel sendromu ve diyabet/açlık glukozu bozukluğu daha sık; yazarlara göre yaşlanma karşıtı tedavi olarak önerilemez. Liu, Ann Intern Med 2007, PMID 17227934, [DOI](https://doi.org/10.7326/0003-4819-146-2-200701160-00005). Bu veri doğrudan büyüme hormonu içindir; sekretagoglara aktarılamaz ama beklenen yan etki profilini anlamak için bağlam sağlar.
- **Oral sekretagog MK-677 (ibutamoren) örneği:** 65 sağlıklı 60–81 yaş yetişkin (kadınlar HRT'li ve HRT'siz), 1–2 yıl: yağsız kütle arttı, ama kas gücü ve işlev değişmedi; açlık glukozu arttı, insülin duyarlılığı düştü, kortizol arttı, alt bacakta ödem. Nass, Ann Intern Med 2008, PMID 18490631 (Consensus kaydından), kimlik doğrulaması yazım aşamasında PubMed'den yapılacak. Ürün listesinde MK-677 olmadığı için yazıya yalnızca "aynı sınıfta kütle artışı güç artışına dönüşmeyebilir" bağlamı olarak girer; girmeyebilir.
- **Kadınlarda/menopozda:** İpamorelin veya CJC-1295 için kadınlara özgü veya menopoza özgü çalışma bulunamadı.

### GHK-Cu

- **Cilde uygulama:** Mevcut kaynak 16 (Miller 2006, 13 kişi, lazer sonrası cilt, nesnel fark yok). Sistematik derleme: çoğu randomize çalışma küçük, yüz kremi çalışması; hepsi mikroiğne gibi yeni teslim yolları için "klinik çalışma yok" sonucuyla bitiyor (Arch Intern Med Res 2026, PMID 42787770, [DOI](https://doi.org/10.26502/aimr.0255)).
- **Enjeksiyon:** FDA: "insanda güvenlik verisi sınırlı", agregasyon ve safsızlığa bağlı bağışıklık riski. İnsan etkinlik verisi yok.
- **Devam eden:** NCT07437586 (topikal jel, standardize akut deri yarası, 60 kişi, faz 2, bitiş 14.02.2027, Hudson Biotech); NCT07706361 (bir yama ürünü ile GHK-Cu kan düzeyi, 100 kişi, 2027); NCT07888595 (topikal "anti-aging peptid serumu", yaşlanma saatleri, 48 kişi, 21.10.2026'da başladı).

### Epitalon

- **Mekanizma/hayvan:** Telomeraz ve sirkadiyen düzenleme üzerine çalışmalar. 2026 derlemesi: biyolojik olarak aktif, klinik olarak kanıtsız; insan kanıtı küçük fizyolojik/biyobelirteç çalışmaları ve retinitis pigmentoza üzerine eski bir kontrollü çalışma; yeterli güçte randomize çalışma yok; farmakokinetik, doz-aralığı ve uzun dönem güvenlik verisi yetersiz; onkolojik, immünojenisite ve ürün kalitesi belirsizlikleri sürüyor. Int J Mol Sci, 8 Ekim 2026, PMID 42884164, [DOI](https://doi.org/10.3390/ijms27198922).
- **Telomer iddiası:** İnsan hücre hattı çalışması için düzeltme yayımlandı (Biogerontology, Kasım 2025, PMID 41240216, [DOI](https://doi.org/10.1007/s10522-025-10326-8)); düzeltmenin içeriği okunmadı, atıf yapılmayacak.
- **İnsan çalışması kaydı:** ClinicalTrials.gov'da epitalon için kayıtlı bir çalışma yok (arama "epitalon OR epithalon OR epithalamin OR Ala-Glu-Asp-Gly" tek sonuç verdi ve o da topikal serum).
- **FDA:** Uykusuzluk endikasyonu için kurul 7–4 (veya 7–5) oyla destek verdi; FDA personeli "uykusuzlukta etkililik yayını yok" ve immünojenisite dedi.
- Mevcut kaynak 10–11 (Rusça, Khavinson/Korkushko) epitalonu değil epithalamin ve karışık peptidleri anlatıyor; mevcut yazı bunu zaten söylüyor, korunmalı.

### MOTS-c

- Mitokondri kaynaklı peptid; insanda dışarıdan verilen MOTS-c ile yayımlanmış etkinlik çalışması bulunamadı. Mevcut kaynak 9 derleme.
- **Devam eden:** NCT07505745 (faz 2a, prediyabet ve obezite, 120 kişi, deri altı enjeksiyon, Hudson Biotech, bitiş 14.02.2027). Gözlemsel çalışmalarda MOTS-c düzeyi ölçülüyor (NCT04027712 Atina, NCT07678073 Gaziantep: anestezi türü ile MOTS-c düzeyi) — bunlar dışarıdan uygulama değil.
- FDA kurulu obezite ve osteoporoz endikasyonunda 7–5 destek verdi, personel karşı.

### AOD-9604

- FDA Aralık 2024 dosyası (mevcut kaynak 15) obezite çalışmalarında temel sonuçta plasebodan fark bulunmadığını söylüyor; yazıdaki ifade doğru kalır. FDA sayfası ciddi yan etki bildirimlerini ve nedensellik belirsizliğini ekliyor.

### Çok molekülü kapsayan 2026 derlemeleri (bağlam için)

- Yaşlanma bağlamında peptidler: onaylı ajanlar (tirzepatid) sağlam güvenlik verisine sahip; onaysız peptidler "umut verici ön klinik ve sınırlı klinik kanıt, uzun dönem güvenlik yok" (Front Aging 2026, PMID 42021992, [DOI](https://doi.org/10.3389/fragi.2026.1790247)).
- GH-IGF1 aksı "performans artırıcı" peptidler: raporlanan yan etkiler arasında prolaktin ve kortizol yüksekliği, iştah değişimi, glukoz bozulması, ödem, kas-eklem ağrısı, enjeksiyon yeri reaksiyonları; ürün bileşimi ve doz belirsizliği (Front Endocrinol 2026, PMID 42395176, [DOI](https://doi.org/10.3389/fendo.2026.1822475)).

## 3. Düzenleyici durum (tarihli)

### Dünya Anti-Doping Ajansı (WADA)

- BPC-157: S0 (onaylanmamış maddeler) altında yasaklı; USADA sayfası. ([USADA](https://www.usada.org/spirit-of-sport/bpc-157-peptide-prohibited/))
- TB-500 ve timosin beta-4, CJC-1293/CJC-1295, ipamorelin: S2 altında yasaklı; USADA 2027 listesi bilgilendirmesi. 2027 listesinde genel olarak "peptidler" S0 sınıfında adlandırılıyor ve liste 1 Ocak 2027'de yürürlüğe giriyor. ([USADA 2027](https://www.usada.org/spirit-of-sport/athlete-advisory-2027-prohibited-list/))
- 2026 listesinin resmî WADA PDF'i okunmadı; sınıf numaraları USADA'dan alındı. Yazı "yarışmalı spor yapanlar için yasaklı" demekle yetinebilir.

### Türkiye

- **TİTCK Ruhsatlı Beşeri Tıbbi Ürünler Listesi, 16.10.2026 (23.120 satır)** etkin madde sütununda tarandı. BPC-157, timosin, ipamorelin, CJC-1295, sermorelin, tesamorelin, GHK/bakır tripeptid, epitalon, MOTS-c, ibutamoren ve AOD-9604 için ruhsatlı ürün yok. Aramanın çalıştığı semaglutid, tirzepatid, liraglutid ve somatropin eşleşmeleriyle doğrulandı. Not: Önceki NAD+ notu 23.10.2026 tarihli listeyi kullanmıştı; TİTCK sayfası bu aramada 16.10.2026'ya kadarki dosyaları gösterdi.
- **Tarım ve Orman Bakanlığı Takviye Edici Gıdalar Kısıtlı Maddeler Listesi (21.10.2026 PDF, 62 sayfa, metin aranabilir):** BPC-157, timosin, GHK, epitalon, MOTS-c geçmiyor; "peptid" yalnızca sindirim enzimi (peptidaz) bağlamında geçiyor. Bu, bu maddelerin takviye olarak serbest olduğu anlamına gelmez: listede olmamaları izinli oldukları sonucunu vermez. Hukuki nitelendirme yapılmaz; yazıda "Türkiye'de ruhsatlı bir ürün yok" cümlesi yeterli.
- Sağlık Bakanlığı'nın bu peptidlere özel açıklaması bulunamadı (aramada TİTCK uyarısı çıkmadı).

## 4. İddia haritası (taslak)

Dolaşım kaynakları: klinik ve sağlık sitesi pazarlama sayfaları ile bülten/blog özetleri (menopoz ve 40+ kadınları hedefleyen en az dört bağımsız yerde; kullanıcı adı veya hikâye alınmadı). Aşağıdaki iddiaların hepsi bu kaynaklarda tekrarlıyor; ayrıca "kadınlar için" çerçevesi kuruluyor.

| İddia | Sınıf | Dayanak |
|---|---|---|
| Menopozda kilo yönetimi (GLP-1 ilaçlarıyla) | Test edildi, desteklendi (onaylı ilaç; menopoz endikasyonu değil) | STEP 1, SURMOUNT-1 |
| Peptidlerle kilo/yağ kaybı (AOD-9604, MOTS-c) | AOD-9604: test edildi, desteklenmedi. MOTS-c: henüz test edilmedi, faz 2a sürüyor | FDA dosyası; NCT07505745 |
| BPC-157 ile tendon, eklem, kas onarımı | Henüz test edilmedi (30 kişilik kontrolsüz seri dışında); randomize çalışmalar başlıyor | PMID 42885452; NCT07437547; NCT07803250 |
| TB-500 ile doku onarımı | Parça için insan etkinlik çalışması yok; tam timosin beta-4 için yalnızca yerel/hastane uygulamaları test edildi | NCT07487363; kuru göz ve ülser çalışmaları |
| İpamorelin/CJC-1295 ile kas kazanımı ve toparlanma | Biyobelirteç düzeyinde test edildi (GH/IGF-1 artar); kas gücü ve işlevde test edilmedi | Teichman 2006; Beck 2014 |
| Büyüme hormonu artışı yaşlanmayı geriletir | Büyüme hormonu için test edildi, desteklenmedi (küçük kütle değişimi, daha çok yan etki) | Liu 2007 |
| GHK-Cu ile cilt gençleşmesi (cilde sürme) | Küçük çalışmalarda nesnel fark yok, memnuniyet yüksek | Miller 2006 |
| GHK-Cu enjeksiyonla bütün vücut yenilenmesi | Bu haliyle test edilmemiş | FDA sayfası |
| Epitalon ile telomer uzaması, uzun yaşam, uyku | Uyku ve uzun yaşam için insanda yeterli çalışma yok; telomer iddiası hücre hattına dayanıyor | PMID 42884164 |
| "Kadınlar ve menopoz için özel" peptid protokolleri | Test edilmedi; menopoza özgü çalışma bulunamadı | ClinicalTrials.gov araması (0 kayıt); PubMed hedefli arama |
| "Doğal olarak vücutta var, o yüzden güvenli" | Bu haliyle test edilemez: dışarıdan, farklı dozda, farklı yoldan verilen madde başka bir etkiye sahip olabilir | FDA sayfası (immünojenisite, safsızlık) |

## 5. Sık bildirilen istenmeyen etkiler

- **Kontrollü kaynaklar:** MK-677 çalışmasında iştah artışı, ödem, kas ağrısı, açlık glukozu artışı; büyüme hormonu derlemesinde ödem, eklem ağrısı, karpal tünel, diyabet; GH-IGF-1 derlemesinde prolaktin/kortizol artışı, ödem, kas-eklem ağrısı, enjeksiyon yeri reaksiyonu. Bunlar sınıf düzeyindedir; her peptide aynen aktarılamaz.
- **FDA:** CJC-1295 ile kalp hızı artışı ve damar genişlemesi tepkisi; ipamorelin damardan verildiğinde ölüm dahil ciddi olay bildiren bir çalışma; BPC-157 için üç bildirim, nedensellik belirsiz.
- **Satıcı ve klinik sayfaları (yalnızca "bildirildiği" örnek olarak, kanıt değil):** Enjeksiyon yeri kızarıklığı/şişliği, baş dönmesi, bulantı, yüz-boyun kızarması, kısa süreli yorgunluk. Kaynakların çoğu ürün satan siteler; aynı sayfalar kendi aralarında hangisinin daha sık olduğu konusunda çelişiyor. Kaynak linki yazıya girmez.
- **Ürün kalitesi:** Mevcut kaynak 8 (Moiz 2026) bilinen sorunları anlatıyor: içerik uyumsuzluğu, üretim kalıntıları, doz sapması. Yeni bir bağımsız saflık analizi çalışması bu turda bulunamadı.

## 6. Kadınlar, perimenopoz ve menopoz

- ClinicalTrials.gov'da menopoz/postmenopoz koşuluyla BPC-157, ipamorelin, CJC-1295, epitalon, GHK-Cu, TB-500, timosin beta-4 veya MOTS-c araştıran kayıt yok (sorgu 0 sonuç).
- Devam eden BPC-157 çalışmalarından biri 18–45 yaş, diğeri 18 yaş ve üzeri ama HRT kullananları dışlıyor (NCT07803250).
- CJC-1295 sağlıklı yetişkin çalışması 21–61 yaş (cinsiyet dağılımı özetten okunamadı).
- MK-677 çalışması 60–81 yaş, kadınlar HRT'li ve HRT'siz katıldı; kas gücü ve işlev değişmedi.
- Sonuç: Bu moleküller için menopoza özgü etkinlik veya güvenlik verisi bulunamadı. Yazıda "veri yok" bunu açıkça söylemeli; "kadınlarda daha etkili/güvenli" gibi bir iddia hiçbir kaynakla desteklenmiyor.

## 7. Çok eksenli tablo için taslak değerler

Molekül grubuna göre; yazıda tek tablo değil, grup başına satırlar önerilir (skill: değerler sözel).

| Grup | Etkinlik kanıtı | Güvenlik kanıtı | Mekanizma inandırıcılığı | Ürün ve düzenleyici durum | Geri dönüşebilirlik |
|---|---|---|---|---|---|
| BPC-157 | Zayıf (30 kişilik kontrolsüz seri) | Bilinmiyor (yayımlanmış insan verisi çok az) | Orta (hayvanda tutarlı; yarı ömür ve etki süresi arasında çözülmemiş fark) | Ruhsatsız; kurul destekledi ama karar yok; WADA yasaklı | Bilinmiyor |
| TB-500 | Bilinmiyor (parça için insan çalışması yok) | Bilinmiyor | Orta-zayıf | Ruhsatsız; kurul destekledi; WADA yasaklı | Bilinmiyor |
| CJC-1295, ipamorelin | Biyobelirteçte güçlü (GH/IGF-1); işlevde yok | Sınırlı (kısa süreli); ipamorelin damardan verildiğinde ölüm bildirilmiş (FDA) | Güçlü (fizyolojik eksen) ama "daha çok GH = daha iyi" doğrulanmadı | Ruhsatsız; ipamorelin FDA kategori 2; WADA yasaklı | Muhtemelen yüksek (GH düzeyi bırakınca düşer) — doğrudan veri yok |
| GHK-Cu (cilde) | Sınırlı (nesnel fark yok, memnuniyet var) | Orta-sınırlı (topikal) | Orta | Kozmetik ürünler var; enjeksiyon için FDA kurul bekliyor | Yüksek |
| GHK-Cu (enjeksiyon) | Bilinmiyor | Zayıf (FDA: sınırlı veri) | Orta | Ruhsatsız; FDA kurulu bekleniyor | Bilinmiyor |
| Epitalon | Zayıf | Zayıf | Orta-zayıf | Ruhsatsız; kurul destekledi | Bilinmiyor |
| MOTS-c | Bilinmiyor | Bilinmiyor | Orta | Ruhsatsız; kurul destekledi; faz 2a sürüyor | Bilinmiyor |
| AOD-9604 | Zayıf (etkisiz) | Sınırlı | Zayıf | Ruhsatsız | Bilinmiyor |

## 8. Bilinmeyenler ve yakında öğrenilecekler

- Nisan–Temmuz 2026 FDA süreci: kurul önerilerinin nihai karara dönüşmesi (2027). Yazı bunun tarihini "26 Ekim 2026 itibarıyla" diye yazmalı.
- BPC-157 randomize çalışmaları: NCT07437547 ve NCT07803250 (2027). NCT07505745 (MOTS-c), NCT07487363 (TB-500), NCT07437586 (GHK-Cu jel): tahmini bitiş 14.02.2027.
- FDA'nın GHK-Cu (enjeksiyon) kurulu: Şubat 2027'den önce.
- WADA 2027 listesi: 1 Ocak 2027.

## 9. Mevcut yazıdaki kaynaklar ve doğruluk kontrolü

- Kaynak 12 (FDA, 22 Nisan 2026) hâlâ doğru; ancak "kategori 2" bağlamı güncellenmeli.
- Kaynak 15 ve 17: hâlâ tutarlı. BPC-157 insan verisi cümlesi (16 kişi) yeni sistematik derlemeyle (3 çalışma, n=30) birlikte anlatılabilir.
- Yazıda geçen "Resmî güvenlik değerlendirmesi" ifadesi (FDA) iki yerde geçiyor; 2026'daki kurul sürecini bilmeyen okur bunu "FDA yasakladı" diye okuyabilir. Tarih ve statü açık yazılmalı.
- `articleDescription` ve `Kısa Klinik Yanıt` iyi; merdiven ve tablo eklenmeli.

## 10. Açık işler ve tutarsızlıklar

- **Oy sayıları:** Epitalon (7–4 mü, 7–5 mi) ve emideltide (6–7 mi, 7–6 mı) kaynaklar arasında farklı. FDA tutanağı/transkripti okunmadı. Yazıya oy sayıları girmeyecek.
- **Hudson Biotech:** BPC-157, MOTS-c, TB-500, GHK-Cu için dört kayıt aynı sponsordan, aynı başlangıç (02/02/2026) ve aynı tahmini birincil bitiş tarihiyle (14/02/2027) kayıtlı; BPC-HAMSTR tek merkezli (Şenzhen), diğerlerinin merkez sayısı kayıtta tek görünüyor. Sponsorun kimliği doğrulanmadı, sonuç yok. Yazıda "kayıtlı çalışma" diye, sponsor adı olmadan anılması önerilir (kurum/şirket adı eleştirisi yasağı).
- **WADA 2026 resmî metni** okunmadı (yalnızca USADA bilgilendirmeleri).
- **ITP:** Epitalon, BPC-157, GHK-Cu veya timosin için ITP yayını PubMed'de bulunamadı; ITP'nin kendi test listesi ayrıca kontrol edilmedi. Yazıda "ITP'de test edildiğine dair bir kayıt bulamadık" demek yerine bu basamak "bilinmiyor/kontrol edilemedi" diye geçmeli ya da kontrol tamamlanmalı.
- **Epitalon hayvan ömrü:** Rus gruplarının kemirgen çalışmaları derlemede anılıyor; birincil çalışmalar okunmadı.
- **MK-677 / Nass 2008:** PMID doğrulanmadı (Consensus kaydı). Yazıya girecekse PubMed'den metadata ile doğrulanacak.
- **Mevcut TİTCK dosyası** 16.10.2026; yazı "… tarihli listeye göre" diye tarihlenmeli.
- **Menopoz taraması:** CT.gov'da boş sonuç, kayıtlı olmayan bir çalışma olabileceğini dışlamaz; "kayıtlı çalışma bulamadık" ifadesi kullanılır.

## 11. Hekim sesi: Dr. Aksoy'a sorulabilecek konuya özgü üç soru (yanıt önerilmez)

Mevcut dört SSS yanıtı (peptid türleri, kilo/kas, BPC-157/TB-500/ipamorelin, reklam dili) korunur. Yeni yanıt ancak sorulup gerçek cevap alındığında yazıya girer. Aday sorular:

1. Muayenede hastalarınız size "internetten aldığım peptidi kullanıyorum" dediğinde ilk neyi sorarsınız?
2. FDA'da kurulun bazı peptidleri listeye alma yönünde oy vermesi, Türkiye'deki bir okur için neyi değiştirir, neyi değiştirmez?
3. Menopozdaki kadınlarda kas kaybı ve yorgunluk için peptide ilgi duyan birine sıra dışı bir test veya izleme önerir misiniz?

## 12. Önerilen yapı (yazım onayı sonrası)

Mevcut dokuz H2 korunur, skill modülleri içlerine yerleşir; yeni başlık eklenecekse yalnızca "Bu yazıda neye bakıyoruz" mantığıyla:
- Kısa Klinik Yanıt: peptid grubunun merdivende nerede durduğunu, FDA'daki yeni durumu ve Türkiye'deki ruhsat durumunu söyler.
- Kanıt merdiveni ve çok eksenli tablo: "Peptid Nedir" sonrasına, molekül grubu başına.
- İddia haritası: "Doku ve Kas", "Kilo", "Enerji, Uyku ve Uzun Yaşam" bölümlerinin yerine veya yanına.
- Güvenlik bölümü: FDA sürecini tarihli yaz; WADA ve TİTCK satırları.
- Menopoz bölümü: "veri yok" açıkça.
- Bilinmeyenler ve yakında öğrenecekleriniz: 2027 çalışma ve FDA takvimi.
- GLP-1 bölümü ve RedFlagBox korunur.

## Kaynaklar (bu nottaki yeni kayıtlar)

- Acta Orthop Belg. 2026;92(3). *Human evidence for BPC-157 in orthopaedic and regenerative medicine: a systematic review.* PMID 42885452. [DOI](https://doi.org/10.52628/92.3.15837).
- Am J Sports Med. 2026. *Peptide Supplements and Their Therapeutic Applications in Sports Medicine.* PMID 42578445. [DOI](https://doi.org/10.1177/03635465261464420).
- Sports Med. 2026. PMID 41966639. [DOI](https://doi.org/10.1007/s40279-026-02437-0).
- JBJS Rev. 2026. PMID 42160466. [DOI](https://doi.org/10.2106/JBJS.RVW.26.00027).
- Pharmaceutics. 2026;18(5):625. PMID 42198317. [DOI](https://doi.org/10.3390/pharmaceutics18050625).
- Int J Mol Sci. 2026;27(19):8922. *Epitalon and Epithalamin: A Narrative Review.* PMID 42884164. [DOI](https://doi.org/10.3390/ijms27198922).
- Front Aging. 2026. PMID 42021992. [DOI](https://doi.org/10.3389/fragi.2026.1790247).
- Front Endocrinol. 2026. PMID 42395176. [DOI](https://doi.org/10.3389/fendo.2026.1822475).
- Arch Intern Med Res. 2026. PMID 42787770. [DOI](https://doi.org/10.26502/aimr.0255).
- Liu H ve ark. Ann Intern Med. 2007;146(2):104-115. PMID 17227934. [DOI](https://doi.org/10.7326/0003-4819-146-2-200701160-00005).
- İpamorelin farmakokinetik/farmakodinamik modelleme, sağlıklı gönüllüler. Pharm Res. 1999. PMID 10496658. [DOI](https://doi.org/10.1023/a:1018955126402).
- FDA, PCAC 23–24 Temmuz 2026 bilgilendirme belgesi, [indir](https://www.fda.gov/media/193342/download); toplantı sayfası [bağlantı](https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026).
- TİTCK, [Ruhsatlı Beşeri Tıbbi Ürünler Listesi 16.10.2026](https://titck.gov.tr/storage/Archive/2026/dynamicModulesAttachment/RuhsatlBeeriTbbirnlerListesi16.10.2026_bd62d803-98d2-4a52-8153-38c6015767fb.xlsx).
- Tarım ve Orman Bakanlığı, [Takviye Edici Gıdalar Kısıtlı Maddeler Listesi](https://www.tarimorman.gov.tr/GKGM/Belgeler/DB_Gida_Yem_Mevzuat/Takviye_Edici_Gidalar_Kisitli_Maddeler_Listesi.pdf) (güncelleme 21.10.2026).
- USADA, [BPC-157](https://www.usada.org/spirit-of-sport/bpc-157-peptide-prohibited/) ve [2027 listesi](https://www.usada.org/spirit-of-sport/athlete-advisory-2027-prohibited-list/).
- ClinicalTrials.gov: NCT07437547, NCT07803250, NCT02637284, NCT07487363, NCT07505745, NCT07437586, NCT07706361, NCT07888595, NCT00267527, NCT00672074, NCT01280344.
