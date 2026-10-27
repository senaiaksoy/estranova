# NAD+ ve hücresel yaşlanma — Deneysel yazıyla karşılaştırma ve değişiklik planı

Tarih: 26 Ekim 2026. Yetki: Dr. Aksoy'un 26 Ekim 2026 talimatı ("NAD+ ile başla, her yazı ayrı PR"). Bu not makaleyi değiştirmez. Yazıya geçmeden önce Dr. Aksoy'un onayı gerekir.

- Hedef: `src/pages/bilimsel-pencere/hucreler-ve-yaslanma/nad-plus-hucresel-yaslanma.astro`. Son değişiklik `c217a9a8`, 25 Ekim 2026. O gün KC sözlü tıbbi onay verdi ("tıbbi onay tamam"); denetleyici Dr. Alper Mumcu (KC bildirimi).
- Karşılaştırılan yazı: `src/pages/zamansiz-yasam/deneysel/nad-plus-takviyesi.astro`. Son değişiklik 26 Ekim 2026, PR #50.
- Araştırma tabanı: `docs/editorial/nad-plus-takviyesi-arastirma-2026-10-26.md`.
- Skill: `.claude/skills/estranova-deneysel-molekul/SKILL.md`. Kapsam cümlesi ayrı bir PR ile güncelleniyor. Bu yazı "karışık durum" sayılır: skill yalnızca "almalı mıyım" sorusuna giren bölümlere uygulanır.
- Yazar: `senai-aksoy`, `clinical-guide`. Tıbbi inceleme: Dr. Alper Mumcu. İkisi de dosyadaki `ArticleAuthorBlock`'tan doğrulandı.

## 1. Roller

| | Bilimsel Pencere (bu yazı) | Deneysel (NAD+ takviyesi) |
|---|---|---|
| Ana soru | NAD+ biyolojisi ne diyor, kan değeri ile sağlık arasındaki mesafe nerede kopuyor? | Almalı mıyım, ürünü nasıl okurum, Türkiye'de ne yasal? |
| Kendine özgü içerik | Sirtuin/PARP/CD38 mekanizması; yaşla düşüşün dokuya göre değişmesi ve kan NAD+'ının sabit kalabilmesi (Trętowicz 2026); fertilite (Bertoldo, Ramírez-Martín); ürün kalitesi analizi (Sandalova); EFSA görüşü | İnsan çalışmalarının ayrıntısı; NOPARK; beş soruluk tablo; iddia haritası; Türkiye'deki doz sınırları; damardan NAD+; sık bildirilen şikâyetler; menopoz; süren çalışmalar |
| Karşılıklı bağlantı | Deneysel yazıya bağlanıyor (RelatedReadings, ilk sıra) | Bu yazıya bağlanıyor (RelatedReadings) |

Devir notunda "İlgili yazılar yalnızca hub'ı gösteriyor" deniyordu. NAD+ yazısı için bu doğru değil, iki yazı birbirine zaten bağlı. Eksik olan, gövdede konunun geçtiği yerde verilen bağlantı.

## 2. Eksikler (Deneysel yazıda ve araştırma notunda var, burada yok)

| Eksik | Bu yazıdaki durum | Öneri |
|---|---|---|
| Kanıt merdiveni | Yok. Basamaklar bölümlere dağılmış durumda. | İkinci sıraya kısa bir H2. Deneysel yazıdaki listeyi kopyalamadan, biyolojinin hangi basamakta koptuğunu gösterecek. Her basamağa bir cümle. |
| Hayvanda ömür (ITP) | "Yaşlı farelerde olumlu sinyaller" var. ITP'de NR'nin iki cinsiyette de ömrü uzatmadığı yazmıyor. | Biyoloji bölümüne bir cümle: Harrison 2021, *Aging Cell*, PMID 33788371. |
| NOPARK (*JAMA*, 8 Ekim 2026) | Yok. Güvenlik bölümünde "uzun dönem veri sınırlı" diyor. | NMN/NR bölümüne kısa bir paragraf: kan düzeyini yükseltmek yarar getirmeyebilir, bunun en büyük örneği. Güvenlik bölümünde "bir yıla kadar veri var, o da Parkinson hastalarından" düzeltmesi. Ayrıntı Deneysel yazıda kalır. |
| Türkiye'deki yasal sınırlar | "Statü ayrıca doğrulanmalı" diye genel bir paragraf var. | Bakanlığın 21 Ekim 2026 tarihli listesine dayanan iki tarihli cümle (NMN günde 50 mg, NR günde 300 mg; çalışma dozlarının altında). Ayrıntı için Deneysel yazıya bağlantı. |
| TİTCK ve damardan NAD+ | Yok. | Tek cümle: "TİTCK'nin 23 Ekim 2026 tarihli listesine göre Türkiye'de ruhsatlı bir NAD+ ilacı yok." Damardan uygulamanın ayrıntısı için Deneysel yazıya bağlantı. |
| Menopoz ve bilinmeyenler | Menopoz yalnızca SSS'de ve karar bölümünde geçiyor. Bilinmeyenler için ayrı bölüm yok. | Kapanıştan önce tek bir kısa H2, biyolojiye odaklı: NAD+ düşüşü yaşlanmanın nedeni mi sonucu mu; kandaki değer dokuyu temsil ediyor mu; ölçüm standardı yok (NCT07416786); menopoza özel veri iki küçük çalışmadan ibaret (bağlantı Deneysel'e); fertilite RCT'si bekleniyor (NCT06426355). Deneysel yazının "Bilinmeyenler" bölümünü tekrarlamaz. |
| Fertilite tarihi | "Haziran 2026 itibarıyla … tamamlanmış randomize insan çalışması yok". | 26 Ekim 2026'da doğrulandı: PubMed taramasında ağızdan NMN/NR alan kadınlarda gebelik veya canlı doğum sonucu bildiren randomize çalışma yok. Noh 2025 sistematik derlemesi (*J Assist Reprod Genet*, PMID 41160202) yalnızca klinik öncesi veri buldu. NCT06426355 (düşük over rezervi, NMN ve plasebo, 200 kadın) kayıtta hâlâ "hasta alımı sürüyor" görünüyor; birincil bitiş tarihi Şubat 2026 geçti, sonuç yayımlanmadı. Öneri: tarihi "Ekim 2026" yapmak ve bu çalışmayı tek cümleyle eklemek. |
| Tarihler | `modifiedDate` 25 Ekim; "Kaynak taraması: 28 Eylül 2026". | Düzenleme günü ve 26 Ekim 2026 kaynak taraması; tarihli değişiklik satırı. |

## 3. Örtüşmeler ve öneri

| Konu | Bu yazı | Deneysel | Öneri |
|---|---|---|---|
| İnsan çalışmaları (metabolizma, kas) | Kısa paragraf, 3 meta-analiz | Ayrıntılı, 8+ kaynak | Kalsın. Kısa ve biyoloji odaklı; tekrar yok. |
| Güvenlik | Paragraf + kanser temkini (hekim cümleleri) | Kırmızı bayrak kutusu + şikâyetler | Hekim cümleleri aynen kalır. NOPARK düzeltmesi ve Deneysel'e bağlantı eklenir. |
| ABD/AB düzenleyici durum | Var (FDA 2025, EFSA 2026) | ABD yok, Türkiye var | Kalsın. Türkiye kısmı kısaltılıp bağlantı verilir. |
| Ürün kalitesi (Sandalova) | Tam bölüm | **Yok** | Devir notundaki "tam anlatım Deneysel'de" ilkesi burada işlemiyor, bu bilgi yalnızca bu yazıda var. Öneri: bu PR'da burada kalsın. Deneysel'e taşımak ayrı bir iş. **Karar sizin.** |
| Deneme kurma ("Denemeyi Düşünüyorsanız…") | Hekim birinci tekili ile deneme kurgusu | "Hekimle Konuşmak" bölümünde benzer kurgu | Her iki metin de onaylı hekim cümlesi. Silmeyi veya kısaltmayı önermiyorum. Bölüm sonuna Deneysel'e bir bağlantı cümlesi eklenir. **Kısaltma isterseniz hangi cümlelerin çıkacağını siz seçin.** |
| İddia haritası | Yok | Tablo var | Tabloyu buraya kopyalamak yerine kanıt merdiveninin altına bağlantı. |

## 4. Skill kuralıyla çelişen nokta: hayvan verisine Evidence etiketi

Skill §4'e göre Evidence etiketi yalnızca insan verisine dayanan iddialara konur. Bu yazıda şu etiketler hayvan verisine dayanıyor:

- s. 141: "hayvan çalışmalarında etkileyici sonuçlar" `level={4}`
- s. 155: "kemirgen çalışmalarında … veri güçlü" `level={4}`
- s. 209: "fare çalışmalarında NMN ile … olumlu sonuçlar" `level={4}`

Öneri: Bu üç etiketi kaldırmak. Basamak metinde zaten yazıyor ("farede", "kemirgen"). Mekanizma etiketleri (s. 118 `level={5}`, s. 134 `level={4}`) temel biyokimya olduğu için kalsın. İnsan hücresiyle yapılan laboratuvar çalışmasındaki `level={2}` (s. 212) için iki seçenek var: kaldırmak ya da bırakmak. Önerim kaldırmak.

Bu etiketler 25 Ekim'de "Evidence değişmedi" notuyla onaylandı. Değiştirmek için ayrıca onayınız gerekiyor.

## 5. Dokunulmayacaklar

- SSS'deki üç hekim yanıtı ve gövdedeki onaylı hekim birinci tekil cümleleri birebir kalır.
- Yeni hekim cümlesi ya da anekdot eklenmez. Yeni SSS sorusu önerilmiyor.
- Açılıştaki eczane kapağı motifi ve kapanıştaki geri çağırma kalır (mizah H1). Fertilite ve güvenlik bölümleri H0 kalır.
- Hero parent hub'da kalır. Byline ve kart görseli değişmez.
- Doz önerisi, marka, tedarik bilgisi yok. Dozlar yalnızca çalışmayı ya da yasal sınırı betimlemek için yazılır.
- Soru başlıklı H2 sayısı 1'de kalır. Yeni H2'ler soru biçiminde olmaz.

## 6. Yeni kaynaklar (eklenecek)

1. Harrison DE ve ark. *Aging Cell*. 2021;20(5):e13328. PMID 33788371. [DOI](https://doi.org/10.1111/acel.13328).
2. Brakedal B ve ark. NOPARK. *JAMA*. 2026. PMID 42848371. [DOI](https://doi.org/10.1001/jama.2026.18828).
3. Noh H ve ark. *J Assist Reprod Genet*. 2025;43(1):51-65. PMID 41160202. [DOI](https://doi.org/10.1007/s10815-025-03720-1).
4. Tarım ve Orman Bakanlığı, Takviye Edici Gıdalar Kısıtlı Maddeler Listesi, 21/10/2026.
5. TİTCK Ruhsatlı Beşeri Tıbbi Ürünler Listesi, 23/10/2026.
6. ClinicalTrials.gov NCT06426355 (26 Ekim 2026'da kontrol edildi).
7. ClinicalTrials.gov NCT07416786 (ölçüm standardizasyonu).

Kaynak numaraları ilk geçiş sırasına göre betikle yeniden numaralanır ve denetlenir.

## 7. Onay zinciri (yazıdan sonra)

1. Düzenleme onayı ve tıbbi onay: KC'den sözlü.
2. Dr. Alper Mumcu incelemesi: KC beyanıyla. Bilimsel Değerlendirme notuna NOPARK'ı yansıtan bir cümle eklenmesi önerilir; metin taslağı onaya sunulur.
3. `article-approvals.ts` ve `article-log.md` kaydı. Push öncesi `tsc` ve `build:ci`.
4. Commit, push, PR. Merge'ü KC yapar. Sonra canlı doğrulama ve worktree temizliği.

## Onayınızı bekleyen kararlar

1. Plan bu hâliyle uygulansın mı?
2. Ürün kalitesi bölümü bu yazıda kalsın mı?
3. Hayvan verisindeki üç Evidence etiketi (ve s. 212) kaldırılsın mı?
4. Deneme bölümü olduğu gibi kalsın mı, yoksa kısaltılacak cümleleri siz mi seçeceksiniz?
