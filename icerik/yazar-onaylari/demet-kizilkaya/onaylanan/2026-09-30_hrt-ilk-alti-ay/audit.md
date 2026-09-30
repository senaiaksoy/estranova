# HRT — İlk Ayların Notları: audit ve revizyon

30 Eylül 2026. Durum: yazar onayı ve revize tıbbi notun hekim incelemesi bekleniyor. Bu kayıt modelin yaptığı editoryal/kaynak kontrolünü anlatır; gerçek yazar veya hekim onayı değildir.

## Kapsam ve başlangıç

- Hedef: `/hormonal-gecis/menopoz/hrt-ilk-alti-ay/`, Demet Kızılkaya, Türkçe, `experience-essay`.
- Son kayıtlı onay: `article-approvals.ts`, 10 Mayıs 2026; bu tarihle eşleşen yayın commit'i `9a51470`. Sonraki değişiklikler ve mevcut çalışma ağacındaki 41 ekleme/37 silme de incelendi. Eski onayın sonradan değişen metni kapsadığı varsayılmadı.
- Başlangıç dosyası `baslangic-kaynak.astro` olarak korundu. Yeni metin `makale-kaynak.astro` dosyasında, yayın kaynak ağacının dışında duruyor. Özgün rota, manifest, görseller, eski onay ve kullanıcının yerel düzenlemeleri değiştirilmedi.
- Canlı URL benzersiz audit sorgusuyla alındı: HTTP 200, 83.224 karakter HTML. Bir H1 var; FAQPage yok. Canlı metinde `kararladık`, `bertaraf ediliyor`, sabit yıllık tetkik listesi ve sınırsız kullanım izlenimi veren eski ifade mevcut. Bu işlem yayın/deploy kanıtı değildir.

## Bulgular ve düzeltmeler

| Alan / başlangıç konumu | Bulgu | Revizyon |
|---|---|---|
| Başlık, özet, son bölüm | Altı ay başlığına rağmen metin dördüncü ayda bitiyor; altıncı ay gelecekte. | Başlık `HRT — İlk Ayların Notları`; spot dört ayı açıkça belirtiyor. Beşinci/altıncı ay deneyimi üretilmedi. URL korunuyor. |
| Gramer ve doğal ifade, 115–194 | `bedenimi çağırmaya`, `nem dönüşü`, `semptom tablosunun küçülerek yerleşmesi` gibi zorlanan ifadeler; önceki yerel turda bazı gramer düzeltmeleri yapılmış. | Fiilli, somut anlatım; yorgunluk, kuruluk ve kişisel gözlemler sadeleştirildi. |
| Humanizasyon, bütün gövde | `sessiz`, `denge`, `muhasebe`, `kısa not`, `birçoğumuz` ve çok sayıda metafor aynı anlamları tekrar ediyor. Spot uzun ve gövdeyi özetleyip yeniden anlatıyor. | Üç cümlelik spot; bölüm işlevleri belirginleştirildi, tekrarlar birleştirildi; çay, aile ve ma bağı korundu. HRT hassasiyeti nedeniyle mizah H0. |
| Karar bölümü, 123–132 | 2002 çalışmasının riskleri abarttığı/faydayı küçümsediği ve bütün kuruluşların güvenlilikte uzlaştığı iddiası, koşulsuz güçlü kanıt etiketiyle sunuluyor. | Bu tarihsel genelleme çıkarıldı. Kişisel karar korunuyor; genel sağlık bilgisi ayrı notta, belirli sonuçlarla ve bireysel risk sınırıyla veriliyor. |
| İlk ay görüşmesi / üçüncü ay, 151–185 | Hekime doğrudan klinik alıntı ve iyi yanıtı hazırlık/disipline bağlayan nedensel açıklama; özgün yanıt kaydı yok. | Klinik alıntı ve nedensel yorum kaldırıldı; görüşmenin genel çerçevesi korundu. Yeni hekim sözü yazılmadı. |
| Açılış / kontroller / seyahat | Form, tetkik ve kalp hassasiyetiyle birlikte ayırt edici seyahat/hastane olayı; yazarın çift rol mahremiyet sınırını zorluyor. | İlaç formu ve tetkik ayrıntısı çıkarıldı. Hastane olayından güvenlilik sonucu çıkaran paragraf kaldırıldı; yeni tanı veya güvence üretilmedi. |
| Yaşam tarzı, 216–224 | Kas kaybını düşme/kırığın asıl nedeni sayma ve turpgillere östrojen metabolizması yararı yükleme, uygun kaynak izi olmadan güçlü etiketlerle sunuluyor. | Desteksiz genel iddialar kaldırıldı; mevcut yürüyüş/pilates rutini kişisel gözlem olarak kaldı. Yeni beslenme/egzersiz reçetesi eklenmedi. |
| Temas riski, 231–242 | Prospektüs yerine yaşıt deneyimine üstünlük; erkek partnerde jinekomasti ihtimali ve riski tamamen engelleme garantisi. | Ürün talimatına bağlı kullanım ve riski azaltma ayrı tıbbi nota taşındı; jinekomasti genellemesi kaldırıldı. |
| Son bölüm / tıbbi not, 282–344 | Üç aylık, altı aylık ve yıllık takipler karışıyor; yıllık mamografi/DXA/vitamin-mineral tetkikleri herkes için rutin gibi. | Yaklaşık üç ay sonra, ardından genellikle yıllık değerlendirme; gereksinime göre daha erken kontrol. Tetkikler evrensel yıllık paket olarak sunulmuyor. |
| Güvenlik notu | Nefes darlığı/bacak şişliği rutin randevu ile aynı düzeyde ele alınmış. | Başvuru düzeyleri ayrıldı; pıhtı/inme düşündüren acil belirtilerde planlı kontrol beklenmemesi ve Türkiye için 112 yazıldı. |
| SSS | Paylaşılan veri dosyasında beş eski model yanıtı var, ancak güncel rota bunları render etmiyor ve schema'ya vermiyor. | Deneyim türüne SSS eklenmedi; kullanılmayan eski yanıtlar hekim yanıtı sayılmadı ve yeniden yayına bağlanmadı. |

## Anlam kaydı ve kaynak izi

| Korunan / değişen öğe | Önce → sonra | Kontrol |
|---|---|---|
| Zaman ve kişisel sonuçlar | 58 yaş, dört ay, ikinci hafta birkaç günlük baş ağrısı, üçüncü hafta uyku gözlemi, ikinci ay gece terlemesi, üçüncü ay kontrol | Deneyim kronolojisi korunuyor; başlık bu kapsamı izliyor. |
| Gece uyanmaları | Önce haftada üç-dört kez → artık belki bir kez/bazen hiç | Önceki yerel tur `kez` ölçüsünü `gece`ye çevirmişti; onaylı sürümdeki sıklık birimi korundu. |
| Nedensellik | Hafıza/cilt/ağrı/sakinlik değişimleri ve eşzamanlı yürüyüş/çay/magnezyum | Kişisel bildirim; HRT'ye nedensellik yüklenmiyor. Magnezyum önerilmiyor. |
| Adım sayısı | 10–12.000 → 10–12 bin | Sayısal aralık aynı; yeni öneri değil mevcut rutin. |
| HRT yararı | Tüm menopoz belirtileri genel yararı → sıcak basması/gece terlemesi | Daraltılmış sonuç: NICE NG23 1.5.1. Güçlü etiket yalnız ayrı notta bu sonuçla ilişkili. |
| Değerlendirme takvimi | İlk yıl üç/altı ay, sonra yıllık tetkik paketi → yaklaşık üç ay değerlendirme, ardından genellikle yıllık; erken kontrol gerekebilir | NICE QS143 / NG23 1.9.2. Tetkik gereksinimi klinik/tarama planından ayrı değerlendirilir. |
| Uygulama/temas | `kolayca engelleniyor` → ürüne özgü talimatlarla risk azaltma | NHS kullanım sayfası; emc ürün bilgisi 353, §4.2 temas önlemleri. Bu ürünün Demet tarafından kullanıldığı iddia edilmiyor. |
| Güvenlik | Her belirti için randevu → hekim görüşmesi / acil değerlendirme / 112 ayrımı | NHS oestrogen side effects: ciddi yan etkiler ve acil eylem bölümü. |

Kaynaklar 30 Eylül 2026'da kontrol edildi. NICE web açılışı 403 verdi; arama indeksindeki kılavuz ve resmi kalite standardı metinleri kullanıldı. NHS sayfaları tam açıldı. Klinik iddiaların tümünde kaynak kontrolü, yeni tıbbi inceleme/onay yerine geçmez.

- NICE NG23, Recommendations: https://www.nice.org.uk/guidance/ng23/chapter/Recommendations
- NICE QS143, Quality statement 4: https://www.nice.org.uk/guidance/QS143/chapter/quality-statement-4-reviewing-treatments-for-menopause-associated-symptoms
- NHS, How and when to take or use oestrogen: https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/oestrogen-tablets-patches-gel-and-spray/how-and-when-to-take-or-use-oestrogen-tablets-patches-gel-and-spray/
- NHS, Side effects of oestrogen: https://www.nhs.uk/medicines/hormone-replacement-therapy-hrt/oestrogen-tablets-patches-gel-and-spray/side-effects-of-oestrogen-tablets-patches-gel-and-spray/
- emc, Oestrogel SmPC: https://www.medicines.org.uk/emc/product/353/smpc

Hasta eğitimi / alıntılanma sınırı: kişisel deneyim bir tedavi etkinliği veya güvenlilik kaynağı değildir. Sağlık bilgisi yalnız ayrı nottaki dar sonuçlar ve kaynak sınırlarıyla kullanılabilir; yaş, süre ve belirtiler bireysel öneriye dönüştürülemez.

## İkinci tur: sıcaklık katmanı (30 Eylül 2026, Claude)

İlk revizyon tıbbi olarak temiz, ama CLAUDE.md §3 HARD kurallarında ses düzleşmişti: yedi H2'nin altısında yaşıt bağı ("siz / birçoğumuz") yoktu; yaşıt/deneyim cümlesi ve doğrudan teselli anı yoktu. Yalnız `makale-kaynak.astro` ve `revize-metin.md` düzenlendi. Tıbbi not, başlık, spot, schema ve görseller değişmedi.

| Bölüm | Değişiklik | Kaynak |
|---|---|---|
| Sabah çayı | "Belki siz de şu an o eşikte…" + "Sıcağı sıcağına anlatabilirim." | Yaşıt bağı; ikinci cümle onaylı metinden geri alındı. |
| Karara gelene kadar | Lede "Kararı vermek kolay olmadı." + "kısık ateşte yanan bir yorgunluk" + "Belki siz de bu kısık ateşi tanıyorsunuzdur." | Metafor ve yaşıt cümlesi onaylı metinden geri alındı. |
| İlk iki ay | Teselli: "İlk haftalarda hiçbir şey hissetmiyorsanız, merak etmeyin… bende de öyle oldu." | Yazarın kendi deneyimi; tıbbi normallik iddiası yok. |
| Üçüncü ay | Liste sahnesi "ya bu da geçmiş aslında" + okura bağ paragrafı | Sahne onaylı metinden geri alındı. |
| Dördüncü ay | "Kelime dilimin ucunda kalıyor… o anı birçoğumuz biliyoruz." ; "Bunlar benim rutinimin parçaları, bir öneri değil." | Spottaki "farklı olabilir" tekrarı kaldırıldı. |
| Evdekiler | Lede "Farkı ilk söyleyen ben olmadım. Belki sizin evinizde de öyle olur." | Yaşıt bağı, anlam aynı. |
| Henüz bilmediklerim | "Bu eşikten geçmeyi düşünen birçoğumuzun aklında da aynı sorular dolaşıyor." | Onaylı metinden sadeleştirilerek geri alındı. |

Yeni tıbbi iddia, hekim sözü, ilaç/doz/tetkik ayrıntısı veya yeni deneyim eklenmedi. Mizah H0 olarak kaldı. `makale-onizleme.html` ve `kontrol-formu.html` bu turdan önce üretildi; Demet'e gönderilmeden önce yeniden üretilmeli.

## Yayına aktarımda kalanlar

## Yapılan doğrulamalar

- Astro compiler: sıfır diagnostic. Import yolları özgün yayın konumuna göre çözüldü; yedi benzersiz H2 anchor korundu. Kullanılmayan TOC dizisi revizyonda kaldırıldı.
- Schema helper doğrudan çalıştırıldı: `Article` + `BreadcrumbList`, doğru yazar/rota, 27 Nisan ilk yayın ve 30 Eylül revizyon tarihleri; `MedicalWebPage` ve `FAQPage` yok. Çıktı `schema-onizleme.json`. Bu çıktı onay bekleyen taslağa aittir.
- Üç ayrı elle okuma: gramer, doğal Türkçe ve bölüm akışı/anlam tekrarı. Son kaynak bütünü tekrar okundu. Görünür başlık, spot, alt metin ve tarih props ayrı kontrol edildi.
- `editorial-check`: 38 metin bloğunda aday bulgu yok (`editorial.json`). Bu sonuç yazarlık/kalite/onay kanıtı değildir.
- `check-fidelity`: beklenen `review_changes` / çıkış 1 (`fidelity.json`). Çıkarılan 2002 ve 50'li yaş genellemeleri, 10–12.000 → 10–12 bin yazımı ve eklenen 112 sayısı yukarıdaki anlam kaydında gerekçelendirildi. Metinler araç için çıkarılmış Markdown'dır; Astro frontmatter'ı araç tarafından karşılaştırılmadı, ayrı kontrol edildi.
- Özgün yayın dosyası ile `baslangic-kaynak.astro` SHA-256 değerleri aynı: `5A1B68098EFD6942D0379935318468B25075283821226FAD3C95F76D0688C7CD`. Önceden var olan yerel düzenlemeler korundu.
- Son global `git diff --check`, çalışma sırasında başka bir iş tarafından değiştirilen `article-faqs.ts` satırlarında whitespace bildirdi. Bu dosyaya ve ayrıca değişen `hrt-yan-etkileri-ve-izleme.astro` dosyasına müdahale edilmedi; bu bulgular bu revizyonun doğrulama sonucu değildir.
- Bu teslim bağımsız, onay bekleyen metin paketidir; site build'i veya yeni sayfanın tarayıcı render doğrulaması yapılmadı. `makale-onizleme.html` okunabilir bağımsız taslaktır, üretim kabuğu görünümünü doğrulamaz. Canlı HTML ayrı okundu; yeni revizyonun canlıya çıktığı iddia edilmez.

Demet'in standart form yanıtı ve revize tıbbi notun Dr. Aksoy incelemesi alınmalı. Hekim kontrolü etiketi, bu taslağın yeni onayı anlamına gelmez. Sonrasında kaynak özgün konumuna aktarılır; manifestte başlık/açıklama eşitlenir ve güncelleme tarihi görünür metin/schema ile birlikte kontrol edilir. Mevcut görsellere dokunulmadı. Site build'i, tarayıcı kontrolü ve yayın adımları ancak onaylı sürüm yayın kaynaklarına aktarılınca yapılmalıdır. Commit/push/deploy yapılmadı.
