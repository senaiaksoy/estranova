# Menopozda hangi hareket — audit, humanize ve düzeltme kaydı

14 Ekim 2026. Kapsam: tek Türkçe yazının tamamı; Anıl Yalmaz, `editorial-guide`.

## Durum ve dosyalar

- Okunabilir revizyon: `icerik/taslaklar/menopozda-hangi-hareket.md`.
- Astro uygulama taslağı: `icerik/taslaklar/menopozda-hangi-hareket.astro`. Orijinal rota konumuna göre import yolları korunmuştur; taslak klasöründen doğrudan çalıştırılacak bir rota değildir.
- Revizyon henüz yazar veya tıbbi onay almadı. İnceleyen adı ve güncelleme tarihi taslakta planlanan yayın görünümüdür; yeni onay/inceleme yapıldığı iddiası değildir.
- Güncel `docs/AUTHOR-APPROVAL-WORKFLOW.md` v2.0 uygulanıyor: form, onay paketi, onay e-postası veya `onay-bekleyen` paketi oluşturulmadı.
- `src/pages/` içindeki onaylı rota, manifesto/RSS girdisi, yayımlanmış metin arşivi, yazar profili ve eski onay kayıtları değiştirilmedi. Commit, push, deploy yapılmadı.
- Başlangıç HEAD: `f874795852a7798fb74cb75910afd70e7223ceca`. Başlangıçta yalnız `icerik/taslaklar/` izlenmeyen klasördü; mevcut `menopozda-cilt-degisimleri.md` korunmuştur.
- Orijinal Astro ve canlı HTML ayrı geçici dosyalarda korundu. Son kayıtlı yazar onayı 18 Haziran 2026; `218b9124` onay kaydını ekleyen commit. Bu commit ile güncel rota karşılaştırıldı: sonraki değişiklikler kısa SEO başlığı/açıklama ve makale türü işaretlemesiydi; gövde aynıydı. Eski onay bu yeni revizyonu kapsamaz.

## Bulgular ve yapılan düzeltmeler

Konumlar, değiştirilmemiş `src/pages/zamansiz-yasam/menopozda-hangi-hareket.astro` dosyasındadır. Canlı HTML, aynı sorunlu ifadeleri ve SSS bağlantısını taşıyor; HTTP 200 yanıtı 14 Ekim 2026'da alınmıştır.

| Öncelik / alan | Konum / önceki sorun | Taslakta yapılan işlem |
|---|---|---|
| Yüksek — güvenlik | `ne-zaman-daha-az`: göğüs ağrısı, nefes darlığı ve yeni idrar-dışkı sorunu yalnız egzersiz planından önce değerlendirme başlığında | Acil yardım, gecikmeden değerlendirme ve planlı hekim görüşmesi ayrıldı. 112 yönlendirmesi belirli acil belirtilerle sınırlandı. Eski uyarılar korundu. |
| Yüksek — tıbbi kesinlik | Pilates paragrafı: “son derece güvenli bir liman” | Evrensel güvenlik iddiası çıkarıldı; çalışma sonuçları ve osteoporoz/ağrıda uyarlama sınırı açıklandı. |
| Orta — yanlış karşılaştırma | HIIT paragrafı: “toparlanma süresini uzatmaktan başka bir işe yaramayabilir” | Uykusuzlukta yararsızlık hükmü çıkarıldı; kondisyon bulgusu, alışılmış yük ve bireysel seçim ayrıldı. |
| Orta — sonuç/kanıt uyumsuzluğu | Direnç paragrafı ve bilimsel editör notu: kas, kemik, metabolizma ve günlük kapasite topluca 5/5 | Kas gücü ayrı sonuç olarak anlatıldı; kemik etkisi yük/hareket türüne bağlandı. Belirsiz “metabolik denge” paketi çıkarıldı. |
| Orta — kanıt tutarsızlığı | Pilates gövdede 4/5, editör notunda yoga ile topluca 3/5 | Pilates için seçilmiş güç/esneklik bulguları orta; direnç-kas gücü ve HIIT-kondisyon iyi; yoga-uykusuzluk orta olarak önerildi. Bunlar site içi editoryal etiketlerdir; bilimsel editör onayı bekler, doğrudan GRADE puanı değildir. |
| Orta — mekanizma | `menopozda-beden`: hormonların dokuları “yeniden yazması”, östrojenin sinir sistemini duyarlı hale getirmesi | Desteksiz nedensel açıklama çıkarıldı; uyku, yorgunluk, kas-eklem yakınmaları ve diğer etkenler sadeleştirildi. Perimenopoz açıklandı. |
| Orta — işlevsiz SSS | `tocEntries`: `sik-sorulanlar`; FAQ kaynağında bu rotanın girdisi yok, bileşen hiç render olmuyor | Boşa giden bağlantı ve kullanılmayan FAQ bağlama kodu çıkarıldı. Var olan görünür cevap silinmedi; SSS/FAQPage önce de yoktu. Yeni cevap uydurulmadı. |
| Orta — görünür metin/şema | `ArticleAuthorBlock imageAlt` görseli Anıl adıyla ve üretim terimleriyle anlatıyor; Article şemasında makale görseli yok | Görseldeki yoga duruşu yapan kadın tarif edildi. Aynı dosya Article.image alanına bağlandı. Üst hero ve görsel dosyaları korunuyor. |
| Düşük — gramer/format | “küçümsetmeden”; ham Astro HTML'inde `**Beden...**`, `**Hareket...**` | Yapay ifade ve Markdown yıldızları çıkarıldı; yayın HTML'inde kalan yıldızlar taslakta yok. |
| Orta — humanizasyon | Şefkat, ritim, diyalog, fısıltı, güvenli liman, el sıkışma ve kavga metaforları; tekrarlı günlük seçim listeleri | Bilgi somut işlere bağlandı: mat, dambıl, merdiven, bavul. Seçim ve toparlanma ayrıldı; duygu bir sade hayal kırıklığı cümlesiyle korundu. Anıl'ın menopozu kendisi yaşıyormuş gibi çoğul anlatımı çıkarıldı. |

## Gerçek yazar girdisi

Kullanıcıya Anıl Yalmaz'ın hareket seçimi veya ertesi gün sürdürülebilirlik gözlemi soruldu. Kullanıcı 14 Ekim 2026'da aşağıdaki yanıtı iletti; doğrudan Anıl tarafından verilmiş yeni yayın onayı olarak kaydedilmedi.

Özgün yanıt, aynen:

> Bence kadınların en sık karıştırdığı nokta, egzersizin etkili olması için mutlaka yorucu olması gerektiğini düşünmeleri. Özellikle 40 yaşından sonra önemli olan bir gün çok yoğun egzersiz yapmak değil, hareketi düzenli sürdürebilmektir. Ben hastalarıma ertesi sabah nasıl hissettiklerine dikkat etmelerini söylerim. Hafif kas yorgunluğu normaldir ama ertesi gün merdiven çıkmakta zorlanıyor, eklem ağrısı yaşıyor veya aşırı bitkin hissediyorlarsa muhtemelen yükü fazla artırmışlardır. İyi egzersiz, sizi ertesi gün hareket etmekten alıkoyan değil, yeniden hareket edebilmenizi sağlayan egzersizdir.

Kullanılan karşılıklar:

- İlk bölüm: “Bence sık karıştırılan nokta, egzersizin etkili olması için mutlaka yorucu olması gerektiği.”
- `hangi-gun-hangisi`: “Ben ertesi sabah nasıl hissettiğinize de bakmanızı öneririm. Hafif kas yorgunluğu olağan olabilir; ama merdiven çıkmakta zorlanıyor, eklem ağrısı yaşıyor veya aşırı bitkin hissediyorsanız yükü fazla artırmış olabilirsiniz.”
- Kapanış: “Benim için iyi bir çalışma, ertesi gün yeniden hareket edebilmenize alan bırakır.”

“Hastalarıma” hekim olmayan Anıl rolüne uygun doğrudan okur hitabına çevrildi. “Normaldir” tüm ağrıları normalleştirmeyecek şekilde “olağan olabilir” olarak daraltıldı. Bulguların yük fazlalığına kesin tanı koymadığı korunuyor. Devamındaki “sürüyorsa değerlendirme alın” cümlesi yazarın özgün sözü değildir; güvenlik sınırı olarak editoryal eklenmiştir. Girdi Dr. Aksoy SSS'sine dönüştürülmedi. Kullanım ve yazar onayı KC'den sorulacak.

## İddia–kaynak izi ve anlam karşılaştırması

Kaynaklar bu audit kaydında tutulur; Anıl'ın makalesine kaynakça, kurum adı veya dış bağlantı eklenmez. Her kaynak 14 Ekim 2026'da kontrol edilmiştir.

| Konu | Doğrulanan kaynak / sınır | Yeni metnin sınırı |
|---|---|---|
| Yoga–uykusuzluk | [Newton ve ark., randomize çalışma](https://pmc.ncbi.nlm.nih.gov/articles/PMC3871975/): 12 haftada uykusuzluk belirtilerinde küçük fark, sıcak basması sonuçlarında üstünlük yok | Uykusuzluk ile sıcak basması/gece terlemesi ayrıldı; genel stres tedavisi iddiası yok. |
| Pilates–işlev | [García-Garro ve ark., 2020](https://pubmed.ncbi.nlm.nih.gov/32443744/): 60+ kadınlarda bazı güç/esneklik sonuçları; bütün ölçümlerde yarar yok. [Carrasco-Poyatos ve ark., 2019](https://pubmed.ncbi.nlm.nih.gov/31741786/): 60–80 yaşta gruplar arası tüm güç/denge ölçümlerinde fark bulunmadı | İleri yaş popülasyonu açık; herkes için güvenlik veya omurgayı hizalama garantisi yok. |
| HIIT–kondisyon | [Cai ve ark., 2026](https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2026.1778052/full): orta/ileri yaş kadınlarda 19 RCT; VO2max ve VO2peak aynı sonucu vermedi, işlevsel sonuçlar sınırlı | Kalp-solunum kondisyonu ifadesi; bütün menopoz yakınmalarına veya kas gücüne genelleme yok. Uykusuz/stresli kadınlara özgü yararsızlık sonucu çıkarılmıyor. |
| Direnç–kas gücü | [Khalafi ve ark., 2023](https://www.frontiersin.org/journals/cardiovascular-medicine/articles/10.3389/fcvm.2023.1190187/full): menopoz sonrası kadınlarda egzersiz türü ve kas gücü/kondisyon sonuçları | Kas gücü ayrı; “en güçlü yöntem” veya tüm sonuçlara topluca 5/5 yok. |
| Kemik, yük ve yürüyüş | [Strong, steady and straight konsensüsü, 2022](https://bjsm.bmj.com/content/56/15/837): direnç, uygun darbe yükü ve denge; osteoporozda gereksiz kısıtlamadan kaçınma ve uyarlama | Yürüyüşün bütün güç/denge ihtiyacını karşıladığı söylenmiyor; osteoporoz hareketi otomatik bırakma nedeni yapılmıyor. |
| Sıcak basması | [2023 NAMS nonhormonal tedavi bildirisi](https://pubmed.ncbi.nlm.nih.gov/37252752/?dopt=Abstract) | Genel egzersiz yararı, sıcak basması/gece terlemesi tedavisi olarak sunulmuyor. |
| Menopoz yakınmaları | [NHS belirtiler sayfası](https://www.nhs.uk/conditions/menopause-and-perimenopause/symptoms/) | Uyku ve kas-eklem yakınmaları anlatılıyor; yeni ağrıya yalnız hormon nedeni atanmıyor. |
| Göğüs ağrısı/nefes | [NHS göğüs ağrısı](https://www.nhs.uk/symptoms/chest-pain/), [nefes darlığı](https://www.nhs.uk/symptoms/shortness-of-breath/) | Geçmeyen göğüs ağrısı/baskı ve ağır nefes darlığı acil; İngiltere numarası aktarılmadı, Türkiye için 112 kullanıldı. |
| Yeni nörolojik belirti | [North Bristol NHS cauda equina bilgisi](https://www.nbt.nhs.uk/our-services/a-z-services/neurosurgery/neurosurgery-patient-information/same-day-emergency-clinic-sdec-cauda-equina-syndrome-sec) | Yeni idrar-dışkı kontrol sorunu, özellikle bel/bacak yakınmalarıyla, hızla ilerleyen nörolojik belirtiler acil değerlendirme bağlamında. |
| Tek taraflı şişlik | [Gloucestershire NHS DVT bilgisi](https://www.gloshospitals.nhs.uk/your-visit/patient-information-leaflets/deep-vein-thrombosis-dvt/) | Şişlikte gecikmeden değerlendirme; göğüs ağrısı/nefes darlığı eşliğinde acil yardım. Tanı konmuyor. |

## Tekrar sayımı

`structure-check.mjs --claims` önce/sonra çıkarılmış Markdown üzerinde çalıştırıldı. Kalıp eşleşmeleri anlam sayımı değildir; örneğin “direnç” başlıkta da sayılır. Elle, bir sonuç taşıyan paragraf/surface bir konum kabul edildi:

| Sonuç | Önce / sonra | Kalan tekrarın işlevi |
|---|---|---|
| Daha çok yorulmak uygun/etkili egzersiz ölçütü değildir | 2 / 3 | Önce giriş ve kapanış. Sonra özet, giriş, kapanış; gerçek yazar girdisi, doğrudan yanıt ve uygulanabilir sonuç. Aynı giriş paragrafındaki iki cümle ayrı konum sayılmadı. |
| Direnç çalışması kas gücü açısından değerlidir | 4 / 3 | Önce özet, direnç paragrafı, menopoz bölümündeki koruma cümlesi, editör notu. Sonra özet, sonuç-özel açıklama, bilimsel kanıt sınırı. |
| Günlük kapasite hareket seçimini/yükünü etkiler | 7 / 4 | Önce özet, girişte iki paragraf, günlük bölümde üç paragraf ve editör notu. Sonra özet, açılış sahnesi, günlük bölümün ilk paragrafı ve uygulama kapanışı. |

Ham sözcük eşleşmeleri: yorgunluk kalıbı 2→4, direnç kalıbı 12→8, günlük kapasite kalıbı 20→5. Yeni gerçek katkı ilk kalıbı artırdı; otomatik azaltma hedeflenmedi.

## Kontrol sonucu ve açık işler

- Revizyon geçici, bağımsız site kopyasında sınandı. Ana depodaki canlı rota değişmedi.
- `npm run build:ci`: lint, compliance, strict yayın bütünlüğü, strict şablon, encoding, renk, leksikon, 67 makalenin tarih tutarlılığı, Astro derleme ve SEO kontrolü geçti. 179 compliance dosyası; 139 sayfa derlendi, 160 çıktı SEO kontrolünden geçti. Eski yönlendirme `/zamansiz-yasam/kemik-sagligi-40-sonrasi/` için manifest dışı onay kaydı bilgilendirmesi var; kapı başarısızlığı değil.
- HTML kontrolü: tek H1; altı bölüm bağlantısının tamamı mevcut; kırık `sik-sorulanlar` bağlantısı yok; yazar Anıl Yalmaz; Article + BreadcrumbList, FAQPage/MedicalWebPage yok; canonical doğru; publication 2026-06-18, draft modification 2026-10-14; Article.image byline görseliyle aynı.
- Görünür tıbbi bilgi kontrolü ile editör notunda planlanan inceleyen Doç. Dr. Senai Aksoy. Yeni inceleme tarihi/gerçek onay uydurulmadı.
- `rendered-check`: önce ve sonra 0 aday. Otomatik araç kırık SSS bağlantısını ve Markdown yıldızlarını bulmadı; ek HTML incelemesi bunları yakaladı. Yazar adı sezgisel araçta çözülemese de Article.author ve HTML'de doğrulandı.
- `editorial-check`: iki kalın etiket dizisi kaldı; egzersiz türlerinin karşılaştırması ve editör notunun üç ayrı işlevi nedeniyle tutarlı, kasıtlı yapı. `structure-check`: kısa kapanışlar başlangıç, yoğunluk seçimi, hormonal nedensellik sınırı, uykuya göre uyarlama, ortam ve acil güvenlik için farklı bilgi taşıyor; aforizma serisi değil. Özgün soru H2'leri ve anchor'lar korunmuştur; Anıl profilinin doğal soru başlığı tercihi ve kanonik SEO başlıklarını koruma kuralı uygulandı.
- Ritim: 77→78 cümle; ortalama 14,4→11,3 kelime, standart sapma 6,3→3,7. Kısalık arttı; cümleleri sırf çeşitlilik puanı için uzatma yapılmadı. Anlam ve paragraf akışı ayrıca elle okundu.
- `check-fidelity`: inceleme farkı (çıkış 1). Yeni 112 güvenlik numarası, toplu 3/5–5/5 notlarının kaldırılması, otomatik 40'lı yaş başlangıcı hükmünün çıkarılması gerekçeli olgusal değişikliklerdir. Sayı farkını sıfırlamak için hata geri eklenmedi.
- Yerel tarayıcı bağlantısı güvenilir köprü hatasıyla açılamadı; bu nedenle masaüstü/mobil ekran görüntüsü veya taşma testi yapılmış sayılmıyor. Derlenmiş HTML doğrulandı.
- Mevcut `*-byline.webp` gerçek boyutu 1800×1000 (yatay); şablon 4:5 alanında kırpıyor. Özel görsel mevcut, fakat kanonik 1200×1500 byline türevi değil. Asset/hero değiştirme bu turda yapılmadı; görsel düzeltmesi ayrı kapsam olarak kalır.
- Eski `article-log.md` yazıyı hâlâ geri çekilmiş gösteriyor, mevcut onay kaydı ve canlı HTTP 200 ile çelişiyor. Tarihsel kayıt değiştirilmedi; yeni onay sonrasında günlüğün durumu açıklığa kavuşturulmalı.
- Hasta eğitimi değeri: hareket türlerini amaca göre ayırır ve yük/toparlanma sorularını somutlaştırır. Kişisel egzersiz programı veya menopoz semptom tedavisi değildir. AI/web alıntısında sonuç ve popülasyon sınırı korunmalıdır; genel “Pilates güvenlidir”, “HIIT zararlıdır” veya “direnç bütün sonuçlarda en güçlüdür” hükmü olarak aktarılmamalıdır.
- Son adım: KC'den bu somut revizyon için Anıl Yalmaz yazar onayı ve tıbbi onay alınması. Ardından rota ve gerekiyorsa manifest açıklaması birlikte güncellenir; onay tarihi gerçek yanıttan kaydedilir. Yayın/commit/push/deploy ayrıca kullanıcının talimatını gerektirir.

## İkinci geniş audit sonrası düzeltme — 14 Ekim 2026

Kullanıcı ikinci salt okunur auditte bildirilen dört bulgu için `fix` dedi. Önceki bölümlerdeki test ve açık iş bilgileri ilk revizyonun tarihsel kaydıdır; aşağıdaki değişiklikler bu turdaki son durumu tanımlar.

1. Yeni idrar-dışkı kontrol sorunu ile hızla artan uyuşma/güç kaybı iki tamamlanmış acil değerlendirme cümlesiyle yazıldı. Önceki uyarının kapsamı daraltılmadı.
2. Kullanıcının ilettiği Anıl gözleminin düzenlenmiş paragrafı aynen korundu. Ardından ayrı, kaynaklı editoryal açıklama eklendi: “Ertesi sabah nasıl hissettiğiniz ilk kontroldür. Alışık olmadığınız bir çalışmanın ardından kas hassasiyeti 24–72 saat içinde belirginleşebilir; bu yüzden takip eden günlerdeki ağrıyı ve günlük hareket rahatlığınızı da gözlemleyin.” Bu cümle Anıl'ın özgün yanıtı olarak kaydedilmez. Kaynak: [Leicestershire Partnership NHS, MSK FAQs — kas hassasiyeti](https://www.leicspart.nhs.uk/msk-physiotherapy-resources-getting-started/msk-physiotherapy-resources-faqs/), 14 Ekim 2026'da okunmuştur.
3. Mevcut AI etiketli 1800×1000 kaynak korunarak `npm run article:images` ile iki ayrı kanonik türev üretildi: `menopozda-hangi-hareket-byline.webp` 1200×1500, `menopozda-hangi-hareket.webp` 2400×1000. Varsayılan attention yüzü kaybettirdiği için görsel kontrol sonrası aynı kanonik araçla `--byline-pos=centre --card-pos=north` kullanıldı. İki son çıktıda da yüz görünür; byline'da dikey duruş, kartta yüz ve kollar korunuyor. Türevler büyütülmüş mevcut kaynaktan gelir; yeni görüntü/kişisel portre üretilmedi. Kaynak dosya silinmedi veya değiştirilmedi.
4. Kaynak AI etiketli olduğu doğrulandı; kırpım sonrası iki yeni dosyaya `npm run images:tag-ai` ile IPTC `trainedAlgorithmicMedia` etiketi eklendi. Görsel üretim aidiyeti yeniden tahmin edilmedi.
5. Taslak ArticleAuthorBlock ve Article.image yeni byline dosyasına; SiteLayout.image yeni yatay dosyaya bağlandı. Böylece OG/Twitter artık genel `og-default.png` yerine makale görselini kullanır. `src/data/submenu-heroes.ts` içinde yalnız hedef rotanın `articleCardImageByRoute` kaydı eklendi. Üst `submenuHeroByRoute` değişmedi. Aynı dosyada başka oturumun cilt makalesi kart düzeltmesi vardı; korundu.
6. Ana depoda mevcut yayımlanmış makalenin gövdesi ve eski onay kaydı hâlâ korunuyor. Ortak kart kaydı, mevcut onaylı rotaya ait görsel düzeltmedir; yeni metin revizyonu `icerik/taslaklar/` dışında entegre edilmedi. Bu sohbette commit/push/deploy komutu çalıştırılmadı; yeni yazar/tıbbi onay alınmadı.

Son revizyonun yazar ve tıbbi onayı yine KC'den alınmalıdır. İlk turdaki “byline crop / kart kaydı yok / genel OG” açık işleri bu düzeltmeyle kapanır. Tarayıcıda mobil görünüm doğrulaması yapılmış sayılmaz; dosya görselleri doğrudan görüntülenmiştir.

Bu düzeltmenin ayrı geçici site kopyasında `npm run build:ci` yeniden geçti (139 sayfa; 160 SEO çıktısı). Son HTML'de altı bölüm bağlantısı çalışıyor; tek H1, doğru yazar/canonical/tarihler, yeni Article.image ve makaleye özgü OG/Twitter görseli doğrulandı. `rendered-check` 0 aday verdi; iki yeni asset AI etiketi kontrolünden geçti. `git diff --check` temiz. Onay bekleyen yeni metin ana depodaki mevcut makale rotasına taşınmadı.

Eşzamanlı çalışma notu: Bu tur sürerken depo HEAD'i `0755d34a` (“content(kart): cilt değişimleri ve hangi hareket kart görselleri”) oldu. Hedef yatay kart dosyası ve kart kaydı bu commit içinde görülüyor; dikey yeni byline ve metin taslakları bu anda commit dışı. Bu sohbette Git commit/push/deploy işlemi çağrılmadı ve bu eşzamanlı commit geri alınmadı. Görselin üretimdeki yeni durumu bu düzeltme turunda doğrulanmadı.
