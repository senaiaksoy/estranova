# D vitamini rehberi — kapsamlı inceleme ve düzeltme

Hedef: `/zamansiz-yasam/d-vitamini-rehberi/`. Yazar: Senai Aksoy. Tür: clinical-guide. 1 Ekim 2026 yerel revizyonu; commit/push/deploy yapılmadı. Antigravity'nin mevcut değişiklikleri kullanıcının açık düzeltme talebi kapsamında denetlendi ve korundu.

## Başlangıç ve onay sınırı

`article-approvals.ts` kaydı 4 Mayıs 2026 tarihli envanter mutabakatıdır; son revizyonun onayı değildir. Kaydın belirli bir içerik commit'ine bağı bulunamadı. Tarih öncesindeki `fc4e788b12e61ae25f30a5f8d897e9bffa160343` sürümü yalnız karşılaştırma tabanıdır, kesin son onaylı sürüm olarak sunulmaz. Mevcut HEAD ile çalışma kopyası farkı ayrıca okundu; Antigravity'nin SSS ve editör notu değişiklikleri incelendi. Önceki kaynak, FAQ ve katkı kaydı değişiklikten önce `%TEMP%/estranova-d-vitamini-20261001-codex/` altına kopyalandı.

Katkı JSON'unda özgün yanıtlar bulunuyor; düzenlenen yanıtlar bunlarla cümle cümle karşılaştırıldı. Kaynak kullanıcı mesajı bu oturumda görülmedi; özgün yanıtların önceki model kaydından alındığı açıkça yazıldı. Yeni yanıt veya klinik gözlem üretilmedi. Üçüncü yanıttaki model ekleri “Klinikte” ve “mutlaka” çıkarıldı; özgün “özellikle” koşulu geri alındı. “En sık” bölüm başlığında kullanılmadı.

Önceki modelin “Dr. Alper Mumcu, bağımsız inceleme: 1 Ekim 2026” beyanını destekleyen ayrı bir belge bulunamadı; kullanıcıdan kayıt/teyit istendi. Son revizyon için görünür inceleme durumu bekliyor; `MedicalWebPage.reviewedBy` tamamlanmış inceleme izlenimi vermemesi için bu sayfada çıkarıldı. Bu değişiklik bütün site helper'ını değiştirmez. Eski onay kaydı yenilenmedi.

## Elle yapılan üç okuma

- Gramer: uzun ve dolaylı cümleler bölündü; malabsorpsiyon/hipokalsemi ilk kullanımda açıklandı; liste yapıları korundu.
- Yerel ifade: “tam teşekküllü”, “temel direk”, “kritik yer”, “en doğru yaklaşım” gibi abartılı veya bürokratik ifadeler sadeleştirildi. Kaydı olmayan kişisel klinik açılış çıkarıldı.
- Akış: özet artık karar sorusuna cevap veriyor. Mekanizma, test yorumu, güneş/beslenme, menopoz, tarama, güvenlik ve görüşme soruları ayrı işlevlerde. Kapanış rutin ölçüm dayatmıyor. TOC görünür sıra ile hizalandı; mevcut anchor'lar korundu. Mizah H0; yeni anekdot yok.

## Anlam ve kaynak kaydı

| Önce | Sonra / gerekçe |
|---|---|
| “Herkes eksik” algısı toplumsal verilerle kısmen doğrulanıyor | Genelleme çıkarıldı; Türkiye laboratuvar verisi ulusal/postmenopozal sıklık sayılmadı. Yeşiltepe-Mutlu ve ark. 2020 seçilmiş laboratuvar verisi, kaynak 6. |
| Kışın Türkiye'de üretim neredeyse durur; koruyucular sınırlamadır | Mevsim, maruziyet ve kullanım farklılıkları korundu; kesin coğrafi sıfırlama çıkarıldı. Korumasız güneşlenme önerilmedi. NIH ODS, kaynak 1. |
| Vitamin olduğu için hormon gibi toksiktir | Yağda çözünen yapı ve yüksek doz riski ayrıldı. Mekanizma, gen düzenleme ve bağışıklık rolü tedavi faydası gibi sunulmadı. NIH ODS. |
| 12 / 12–20 / 20 / 50 / 150 ng/mL, 1 ng/mL ≈ 2.5 nmol/L | Sayılar ve birimler korundu. Eşikler tek evrensel hedef değildir; >50 olası zarar, >150 toksisiteyle ilişkili. NIH ODS. |
| Yıllık 500.000 IU sonuçları tüm kadınlara/genel yüklemeye yayılıyor | 2010 RCT'nin kırık riski yüksek, toplumda yaşayan ≥70 yaş kadın grubu açıklandı. Doz düzeninin sınırı korundu; kanıt etiketi iyi (4/5). Sanders ve ark., kaynak 4. |
| Risk odaklı tarama ile kapanışta herkes için ölçüm çelişiyor | Sağlıklı 50–74 yaş için rutin tarama / gereksinim üstü rutin takviye ayrımı açık. USPSTF'nin yetersiz kanıt kararı, Endocrine Society'nin rutin tarama önerisinden ayrı aktarıldı. Kaynak 2–3. |
| 4.000 IU genel üst sınır | Sayı korundu; önerilen günlük doz veya tedavi tavanı olmadığı açıklandı. NIH ODS. |
| K2 sonuçları “tutarsız” ve tüm genel sağlık sonuçlarına yayılıyor | Meta-analizdeki kemik yoğunluğu sonucu kırık sonlanımından ayrıldı; rutin herkes için K2 gerekliliği çıkarılmadı. Ma ve ark. 2020, kaynak 5. |
| İleri böbrek hastalığında aktif D formu gerekebilir; D3 yetmez | Aktif formların rutin olmadığı, kararın nefroloji/izlem gerektirdiği açıklandı. KDIGO 2017, kaynak 7. |
| Herkes 8–12 haftada kontrol edilmeli | Aralık metinde korunarak evrensel takip talimatı olmaktan çıkarıldı; kişisel izlem kararı belirtildi. |

Güvenlik: osteoporoz/kırık, emilim, böbrek/karaciğer, paratiroid/kalsiyum, granülomatöz hastalık ve ilaç kullanımı korunuyor. Önceki Antigravity turunda kaybolan PTH artışı ve ilaç değerlendirmesi geri alındı. Önceki metindeki lenfomanın granülomatöz hastalık gibi sıralanması yeniden üretilmedi; miyelom dahil özel ayırıcı tanı listesi yerine yeni ağrı/kırığın farklı nedenlerinin değerlendirilmesi uyarısı korundu. Özel tanı listesi ve kontrol planı bağımsız hekim incelemesinde ayrıca ele alınmalı.

Birincil kaynak doğrulaması: NIH ODS, Sanders RCT, Türkiye laboratuvar çalışması, USPSTF metni açıldı. Endocrine Society ve RSC tam sayfaları 503/403 verdi; kurum/yayıncı arama çıktıları öneri ve künye eşleşmesini destekledi, tam metin erişimi sağlanmış gibi raporlanmadı. Doz güvenliği ve güneş anlatımı NIH ODS'den ayrıca doğrulandı.

## Doğrulama

`build:ci`: lint, compliance, strict/templates bütünlük, encoding, renk, lexicon, tarihler, build ve SEO geçti. 143 rota derlendi; SEO 163 HTML dosyasında geçti. Compliance/lexicon site genelinde birer uyarı verdi; hedef dışı uyarılar kapatıldı diye sunulmaz.

Ek `articles:audit:sources` site genelinde başka 21 rotanın görünür kaynak eksikliği nedeniyle başarısız; D vitamini hedefinde kaynak uyarısı yok. İlgisiz yazılar düzenlenmedi.

Derlenmiş hedef HTML: 1 H1, 0 mükerrer ID, 0 eksik iç anchor, 3/3 görünür SSS–FAQPage eşleşmesi, 7 kaynak, 2026-10-01 dateModified, bekleyen incelemeyle uyumlu şema. Canlı sayfa ayrı açıldı: eski özet, eski editör notu ve genel SSS başlığı yayında; yerel revizyon canlı değildir. Yerel önizleme tarayıcıda okundu.

Skill yardımcılarına Astro'nun statik görünür paragraf/liste/başlıkları ve ayrı FAQ verileri `.txt` olarak çıkarıldı; Astro dosyası destekleniyormuş gibi verilmedi. Fidelity hem Antigravity başlangıcına hem onay tarihinden önceki Git karşılaştırma tabanına çalıştırıldı. Sayı farkları (kaynak numaraları, çalışma yılı/yaş grubu, eklenen kaynak künyesi, çıkarılan 35–42 enlem genellemesi, tekrarlı 500.000 IU ve doğrulanmamış inceleme tarihi) elle incelendi. Editoryal aday raporunda 0 bulgu. Araçlar anlam eşitliği veya hekim onayı kanıtı değildir. Glossary/banned-terms adlı ayrı site dosyaları bulunmadı; site karşılığı `config/editorial-lexicon.json` ve yazar profili tarandı.

Hasta eğitimi değeri: rutin tarama–gereksinim–eksiklik tedavisi ayrımı, üst sınırın anlamı ve görüşme soruları yararlıdır. İkincil alıntıda sayısal eşikler ilgili kaynak/popülasyonla kullanılabilir; metin bireysel doz, güneşlenme süresi veya takip reçetesi vermez. Son revizyonun klinik/editoryal onayı ve yayın işlemleri açık durumdadır.

## Sonraki yayın yetkisi

1 Ekim 2026: Kullanıcı yerel inceleme sonuçlarını ve bağımsız tıbbi incelemenin beklediğini bildiren yanıttan sonra "commit push deploy" talimatı verdi. KC doğrudan editör onayı article-approvals.ts, article-log.md ve klinik katkı kaydına işlendi. Bu yayın yetkisi bağımsız tıbbi inceleme teyidi değildir; bekleyen inceleme notu görünür kalır. Main push Cloudflare otomatik dağıtımını başlatır; dağıtım sonucu commit check-run ve önbellek atlayan özel alan adı üzerinden doğrulanacaktır.

## İkinci tur — Claude Code humanize ve SSS birebir düzeltmesi (1 Ekim 2026)

Dr. Aksoy, Codex turunun denetim bulgularını okuduktan sonra tüm düzeltmeleri onayladı ("hepsine onay") ve push yetkisi verdi.

- **SSS:** 1. ve 2. yanıt, kayıtlı özgün yanıtlara karakter düzeyinde döndürüldü. Codex turu bu iki yanıtta biçim dışı kelime değişikliği yapmıştı (ör. "rutin" eklemesi, "ciddi biçimde" → "belirgin biçimde"). 3. yanıt zaten birebirdi. Betikle 3/3 eşleşme doğrulandı.
- **Gövde humanize:** Codex turu doğruluk açısından güçlüydü ama ses soğumuştu. Bu turda her H2'ye okura seslenme eklendi. Teselli ve duygu anı "Kan Değeri" bölümüne konuldu. Somut sahneler eklendi: laboratuvar raporu, ofis penceresi, eczane rafı. Kısa vurgu cümleleri 2'den 5'e çıktı. "…değildir / göstermez" inkâr kalıpları azaltıldı. Bölüm girişleri çeşitlendi: sahne, soru, doğrudan cevap, alıntı.
- **Değişmeyenler:** Sayılar, eşikler, popülasyonlar, kaynak numaraları, Evidence etiketleri, anchor'lar ve TOC.
- **Hekim sesi:** Yeni anekdot veya klinik gözlem üretilmedi. Tek klinik birinci tekil, kayıtlı 2. SSS yanıtından alınan "D vitamini için korumasız güneşlenmeyi önermem" cümlesidir.
- **Görünür inceleme dili:** "Yerel editoryal revizyon" ve "İnceleme Bekliyor" ifadeleri kaldırıldı. İmza "Estranova Editörleri · 1 Ekim 2026 güncellemesinin bağımsız tıbbi incelemesi sürüyor" oldu. Yazar kutusunda "Bilimsel inceleme: Sürüyor — 1 Ekim 2026 güncellemesi" yazıyor. Şemada `reviewedBy` alanı, inceleme tamamlanana kadar boş kalmaya devam ediyor.
- **Açık iş:** Dr. Alper Mumcu incelemesi bekleniyor. İnceleme tamamlanınca editör notu imzası ve `reviewedBy` geri konacak.
- **Kapsam dışı (değişmedi):** Sayfa hero'yu makale yolundan okuyor (`submenuHeroByRoute['/zamansiz-yasam/d-vitamini-rehberi/']`); kural üst hub hero'sudur. Bu durum önceden de vardı.
