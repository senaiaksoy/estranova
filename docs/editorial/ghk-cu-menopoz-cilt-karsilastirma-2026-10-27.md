# GHK-Cu ve menopoz cildi: peptid yazısıyla karşılaştırma ve değişiklik planı

Tarih: 27 Ekim 2026. Yetki: Dr. Aksoy'un 27 Ekim 2026 talimatı ("aynı akışla GHK-Cu yazısına geç"). Bu not makaleyi değiştirmez; yazıya geçmeden önce onay gerekir.

- **Hedef:** `src/pages/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt.astro`.
  - İçerikteki son revizyon 12 Ekim 2026 (`19ea90e4`): geniş audit, 5 hekim SSS yanıtı, Mumcu incelemesi (KC beyanı).
  - 21–22 Ekim commit'leri yalnızca hero ve kadro değişikliğiydi.
- **Karşılaştırılan yazı:** `src/pages/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz.astro` (PR #51 ve sonrası).
- **Araştırma tabanı:** `docs/editorial/peptid-kullanimlari-menopoz-arastirma-2026-10-26.md`. Yalnızca eksikler ayrıca tarandı (aşağıda).
- **Skill:** `estranova-deneysel-molekul`, karışık durum (PR #57). Bu yazı topikal kozmetik ve enjeksiyon kararına giren bölümler taşıyor.
- **Yazar ve inceleyen:**
  - Yazar `senai-aksoy`, tür `clinical-guide`.
  - Byline'daki inceleyen, varsayılan olarak Dr. Alper Mumcu (`getDefaultMedicalReviewer`).
  - Bilimsel Editör Notu, 12 Ekim'de KC isteğiyle hekim sesine çevrildi: imza Senai Aksoy, altında "Bağımsız tıbbi inceleme: Dr. Alper Mumcu". Bu düzen korunur.

## 1. Roller

| | Bilimsel Pencere (bu yazı) | Peptid yazısı |
|---|---|---|
| Ana soru | GHK-Cu biyolojisi ne gösteriyor, menopoz cildine ne kadarı taşınabiliyor? | Sekiz peptid için "almalı mıyım", ürün ve ruhsat |
| Kendine özgü içerik | Yaşla azalma iddiasının kaynak zinciri; onarım biyolojisi; menopoz cildi ve östrojen-kolajen verisi; cilt geçişi (Li 2015, Hostynek 2010); kozmetik güvenlik değerlendirmesi (CIR 2018); bakır toksisitesi; ürün okuma soruları | Tüm peptidler için kanıt tablosu, iddia tablosu, beş eksen; FDA Nisan–Temmuz 2026 süreci; TİTCK ve Bakanlık; WADA; süren çalışmalar |
| GHK-Cu örtüşmesi | Miller 2006 (13 kişi) iki yazıda da var | Bir paragraf, iki tablo satırı |

Devir notunda "peptid yazısı GHK-Cu yazısına bağlanıyor (tek yönlü)" deniyordu. Bu doğru değil: iki yazının RelatedReadings listelerinde birbirleri var. Asıl eksik başka: peptid yazısındaki "Bu madde için ayrıca cilt odaklı bir yazımız var." cümlesinde bağlantı yok.

## 2. Eksikler

| Eksik | Bu yazıdaki durum | Öneri |
|---|---|---|
| Kanıt merdiveni | Yok. Basamaklar on üç bölüme dağılmış. | İkinci sırada kısa bir H2. NAD+ yazısındaki biçimle aynı, cümleler GHK-Cu'ya özgü. |
| Hayvanda ömür | Yok | 27 Ekim'de hedefli PubMed taraması yapıldı. Memelide yayımlanmış bir ömür çalışması bulunamadı. Tek ömür verisi 2026 tarihli bir solucan (*C. elegans*) çalışması (Wen, *Biogerontology* 2026, PMID 42084774). ITP'de test edildiğine dair kayıt da bulunamadı (peptid notu). Merdivende "farede ömür bilinmiyor; yalnızca solucanda" diye yazılır. |
| FDA, Nisan 2026 | Yazı (s. 300–303) FDA'nın enjeksiyon güvenlik değerlendirmesini şimdiki zamanla aktarıyor. | GHK-Cu (enjeksiyon), 15 Nisan 2026'da başvuru geri çekildiği için "ciddi güvenlik endişesi" listesinden çıkarıldı. Bu, maddeyi eczanede hazırlanabilir yapmadı. Cümle geçmiş zamana alınır, çıkarma tek cümleyle eklenir. |
| FDA, Temmuz 2026 kurulu | Yok. "2027 Şubat sonundan önce danışma komitesi" bilgisi var. | Temmuz kurulu GHK-Cu'yu görüşmedi. Enjeksiyon için görüşme Şubat 2027'den önce bekleniyor. Tek cümle ve peptid yazısına bağlantı; ayrıntı orada. |
| Türkiye | Yok | Tek paragraf: TİTCK'nin 16 Ekim 2026 tarihli listesinde GHK/bakır tripeptid etkin maddeli ruhsatlı ürün yok. Bakanlığın 21 Ekim 2026 tarihli kısıtlı maddeler listesinde GHK geçmiyor; bu, takviye olarak izinli olduğu anlamına gelmez. Ayrıntı için peptid yazısına bağlantı. Türkiye'deki kozmetik mevzuatı taranmadı, yazıya girmez. |
| İnsan kanıtı | Miller 2006 ve genel derleme | 2026 tarihli sistematik derleme (Najafi, mikroiğne ile topikal kullanım) tek cümleyle eklenir: insan çalışmaları küçük ve çoğu yüz kremi üzerine. |
| Menopoz | "Menopoz cildiyle bağlantı" bölümü var ve güçlü. | Tek cümle eklenir: ClinicalTrials.gov'da menopoz ya da menopoz sonrası koşuluyla GHK-Cu çalışması kayıtlı değil (26 Ekim 2026). |
| Bilinmeyenler | Ayrı bölüm yok | Kapanıştan önce kısa bir H2: topikal GHK-Cu jelinin akut deri yarasında plaseboyla karşılaştırıldığı faz 2 çalışma (NCT07437586, 60 kişi, birincil bitiş Şubat 2027); FDA'nın enjeksiyon kurulu; menopoz cildinde dermal yoğunluk veya biyopsi sonlanımlı çalışma yok. |
| Tarihler | `modifiedDate` 12 Ekim; kaynak notu "12 Ekim'de gözden geçirildi"; Mumcu satırı 12 Ekim | Düzenleme günü; 27 Ekim kaynak gözden geçirmesi; Mumcu satırı yeni onay tarihi. |
| Onay kaydı | `article-approvals.ts` kaydı 5 Haziran'da kalmış. 12 Ekim revizyonu yalnızca `article-log.md`'de. | Yeni kayıtla güncellenir; 12 Ekim bilgisi de not içine alınır. |

Kayda alınıp yazıya girmeyecek kayıtlar:

- **NCT07706361:** Bir yama ürününün GHK düzeyine etkisi; sponsoru ürünün üreticisi; hasta alımı henüz başlamadı.
- **NCT07888595:** Beş peptidli karışık bir serum ve sistemik ilaçlar; randomize değil. GHK-Cu'nun etkisini ayıramaz.

## 3. Örtüşmeler

| Konu | Öneri |
|---|---|
| Miller 2006 | Bu yazıda ayrıntılı, peptid yazısında kısa. Kalsın. |
| FDA süreci | Bu yazıda GHK-Cu'ya özgü kısım kalır: 503A listesinde enjeksiyon dışı kullanım ile enjeksiyon ayrımı. Genel peptid süreci için bağlantı verilir. |
| Enjeksiyon kırmızı bayrak kutusu | Peptid yazısında GHK-Cu'ya özgü kutu yok. Kalsın. |
| İddia haritası | Bu yazının "Pazarlama dili" bölümü iddiaları zaten tek tek ele alıyor. Tablo kopyalanmaz, peptid yazısındaki iddia tablosuna bağlantı verilir. |
| Çok eksenli tablo | Peptid yazısında GHK-Cu için iki satır var. Bu yazıya tablo eklenmez. |
| Sık bildirilen istenmeyen etkiler | Hedefli PubMed taramasında GHK-Cu'ya özgü yan etki serisi bulunamadı. Mevcut güvenlik bölümü (kozmetik değerlendirme, bakır toksisitesi, enjeksiyonda bağışıklık riski) yeterli. Yeni modül eklenmez. |

## 4. Dokunulmayacaklar

- SSS'deki beş hekim yanıtı birebir kalır.
- Gövdedeki onaylı hekim cümleleri ve Bilimsel Editör Notu metni değişmez. Notta yalnızca Mumcu satırının tarihi güncellenir.
- Yeni hekim cümlesi yok. Mizah H0 kalır.
- Evidence etiketlerinin beşi de insan verisine dayanıyor; hayvan verisine dayanan etiket yok.
- Hero parent hub'da kalır; byline ve kart görseli değişmez.
- Doz, marka, tedarik bilgisi yazılmaz.

## 5. Yeni kaynaklar

14. Wen H ve ark. *Biogerontology*. 2026;27(3). PMID 42084774. [DOI](https://doi.org/10.1007/s10522-026-10444-x)
15. Najafi N ve ark. *Arch Intern Med Res*. 2026;9(3):269-293. [DOI](https://doi.org/10.26502/aimr.0255)
16. TİTCK Ruhsatlı Beşeri Tıbbi Ürünler Listesi, 16 Ekim 2026.
17. Tarım ve Orman Bakanlığı Takviye Edici Gıdalar Kısıtlı Maddeler Listesi, 21 Ekim 2026.
18. ClinicalTrials.gov NCT07437586 (26 Ekim 2026'da kontrol edildi).

Mevcut kaynak 11 (FDA güvenlik sayfası) korunur. Erişim tarihi 26 Ekim 2026, sayfa içeriği 22 Nisan 2026 olarak güncellenir.

## 6. Kararınızı bekleyen noktalar

1. Plan bu hâliyle uygulansın mı?
2. Peptid yazısındaki "cilt odaklı bir yazımız var" cümlesine bağlantı bu PR'da eklensin mi? Tek satırlık bir değişiklik.
3. Schema anahtar kelimelerindeki "longevity" "uzun yaşam" olarak değiştirilsin mi? Dil politikasına göre bu bir teknik alan; okura görünmüyor.
