# Perimenopozda Kaygı Artışı — düzeltme ve kaynak kaydı

- Tarih: 19 Ekim 2026.
- Durum: taslak revizyon; yeni editör ve tıbbi onay alınmadı. Kullanıcı 19 Ekim 2026 tarihinde yalnız yerel commit istedi; push/deploy yetkisi verilmedi.
- Rota: `/zihin-denge/duygusal-denge/perimenopozda-kaygi-artisi/`.
- Byline/tür: Estranova Editörleri / `editorial-guide`.
- Başlangıç: `4590cffb85421c1181c63223abfed019ee070626`; temiz ana çalışma dizininin ayrı çalışma kopyası.
- Eski onay: `article-approvals.ts` içindeki 6 Mayıs 2026 KC editör onayı; ilk makale commit'i `fe58fcad`. Yeni revizyona uygulanmadı.
- Bu kayıt bir yazar onay formu veya onay paketi değildir. Kaynak izi ve yapılan işlemlerin kaydıdır.
- Eski yayın arşivi ve `article-approvals.ts` değiştirilmedi. Revizyon tarihi tıbbi inceleme tarihi değildir.

## Değişiklikler

- Yeni/geçmeyen göğüs ağrısı veya baskı ile çarpıntıya eşlik eden göğüs ağrısı, nefes darlığı, baygınlık/bayılma için acil değerlendirme ayrımı eklendi.
- Kendine zarar verme düşüncesinde gecikmeden yardım; plan, güvenliğini koruyamama veya gerçekleşmiş zarar durumunda yalnız kalmama ve acil sağlık yardımı ayrıldı. Genel kaygı/panik belirtileriyle aynı aciliyet düzeyinde sunulmadı.
- Hormonal ilişki doğrudan neden gibi anlatılmadı; bireysel ve gözlemsel kanıt sınırı görünür oldu. Kaygının tek başına perimenopoz tanısı koydurmadığı SSS'de açıklandı.
- Genel değerlendirme, psikolojik destek, bilişsel davranışçı terapi ve gerektiğinde ilaç seçeneği açıklandı; ilaç adı, doz veya kişisel reçete eklenmedi.
- Tiroid, kansızlık, ilaçlar, B12, yas ve bakım yükü korundu. B12 araştırmasının öykü/muayeneye göre olduğu, herkese test paketi anlamına gelmediği belirtildi.
- Kaydı bulunmayan yayın masası sözü çıkarıldı; yerine yeni bir gerçek alıntı veya anekdot üretilmedi.
- Bedeni konuşturan anlatım, aynı tesellinin tekrarı, soyut gece/sis benzetmeleri ve büyük yaşam kararı yönlendirmesi çıkarıldı. İlk 30 dakika için kaynaksız beden tarama talimatı kaldırıldı.
- İlk soru-H2 korundu; diğer başlıklar konu odaklı sadeleşti. Sekiz bölüm, başlık hiyerarşisi ve mevcut dokuz anchor korundu; TOC eşitlendi.
- Kapanış tekrar özet yerine görüşmeye hazırlık işlevi kazandı. Hekim notu, imzası ve disclaimer birebir korundu; yeni bir Dr. Aksoy SSS'si oluşturulmadı.
- SEO açıklaması manifestle eşitlendi. İlk yayın tarihi korundu; görünür son güncelleme ve schema `dateModified` gerçek düzeltme tarihini taşıyor.
- Article şema görsel adresi `new URL()` ile düzeltildi; paylaşım görseli ayrı yatay karta bağlandı. Üst hero ve `submenuHeroByRoute` değişmedi.
- Görsel kontrolde 390 pikselde uzun `Perimenopozda` sözcüğünün hero kenarında kesildiği görüldü. Ortak bileşen yerine yalnız bu sayfanın mobil H1 boyutu ayarlandı; başlık metni/görsel değişmedi.

## Kanıt ve kaynak izi

Kontrol tarihi 19 Ekim 2026. Aşağıdaki kaynaklar gövdeye taşınmaz; kurumsal byline atıf kuralı gereği bu kayıtta tutulur. Klinik inceleme/onay insan hekime aittir. Araç kontrolleri bu onayı üretmez.

| İddia / yer | Kaynak | Kullanım sınırı |
|---|---|---|
| Hormon geçişi ve bazı kadınlarda kaygı artışı; `neden-simdi`, özet | [Bromberger ve ark., SWAN, Menopause 2013, PMID 23615639](https://pubmed.ncbi.nlm.nih.gov/23615639/); [NICE NG23](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations) | SWAN: başlangıçta 42–52 yaş, 2.956 kadın, 10 yıllık gözlem; başlangıç kaygısına göre farklı sonuç. Kaygı belirtisi kümesi ölçülüyor; tanılı bozukluk veya doğrudan östrojen/progesteron nedenselliği değil. Gövdeye oran eklenmedi. |
| Stres ve kaygı ayrımı; `kaygi-stres` | [NIMH: I'm So Stressed Out](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet) | Genel açıklama; okurun kendi kendine tanı koyacağı bir test değil. |
| Fiziksel belirtiler; `bedensel-alarm` | [NHS GAD](https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder-gad/); [NHS anxiety/fear/panic](https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/) | Belirtiler özgül değil; fiziksel hastalık dışlanmadan kaygı tanısı üretilmez. |
| Göğüs/çarpıntı uyarısı | [NHS chest pain](https://www.nhs.uk/symptoms/chest-pain/); [NHS heart palpitations](https://www.nhs.uk/symptoms/heart-palpitations/) | Geçmeyen ani göğüs ağrısı/baskı veya çarpıntıya eşlik eden ağrı, nefes darlığı, baygınlık/bayılma. Yabancı ülke telefon numaraları aktarılmadı. |
| Uyku kaybı ve kaygı; `uyku-sicak-basma`, SSS 3 | [Ben Simon ve ark., Overanxious and underslept, Nature Human Behaviour 4, 100–110 (2020)](https://www.nature.com/articles/s41562-019-0754-8); [2020 yazar düzeltmesi](https://www.nature.com/articles/s41562-020-01016-1.pdf); [NICE NG23, uyku](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations) | Deneysel uyku kaybı ve gözlemsel gece-gündüz ilişkileri; perimenopoza özgü etki büyüklüğü değil. Yazar düzeltmesi sayısal değerleri düzeltiyor, ana sonuçları değiştirmiyor. Makalede sayısal etki kullanılmadı. |
| Süre, işlev, kaçınma, destek seçenekleri; `olagan-dalga`, `ne-zaman-destek`, SSS 1/4 | [NICE CG113](https://www.nice.org.uk/guidance/cg113/chapter/Recommendations), özellikle 1.2.4–1.2.7 ve 1.2.17–1.2.23; [NHS GAD](https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder-gad/) | Tanı/tedavi değerlendirmeye bağlı. BDT, gevşeme veya ilaç genel seçenekler; herkese ilaç veya hormon tedavisi önerilmiyor. |
| Başka nedenler: tiroid, kansızlık, ilaç etkileri | [NHS heart palpitations](https://www.nhs.uk/symptoms/heart-palpitations/); [NICE CG113, değerlendirme](https://www.nice.org.uk/guidance/cg113/chapter/Recommendations) | Özellikle çarpıntının başka nedenlerini kapsar; her kaygıya bu tanıları koymaz ve herkese tetkik önermez. |
| B12 ilişkisi ve seçici test | [NICE NG239, 1.2.4–1.2.6](https://www.nice.org.uk/guidance/ng239/chapter/recommendations) | İlişki; kaygının yaygın nedeninin B12 olduğu iddiası yok. Belirti, risk ve klinik değerlendirmeye göre test. |
| Yas, bakım yükü, sosyal durum | [NICE NG222, değerlendirme 1.2.6–1.2.7](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations) | Görüşmede ele alınacak etkenler; tek nedenli açıklama değil. |
| Kendine zarar verme/güvenlik ayrımı | [NICE NG222, 1.2.8–1.2.9](https://www.nice.org.uk/guidance/ng222/chapter/Recommendations); [NICE NG225, güvenlik ve destek](https://www.nice.org.uk/guidance/ng225/chapter/recommendations) | Yakın güvenlik riski acil değerlendirme gerektirir. Sıradan panik belirtilerinin tümünü otomatik acil psikiyatrik durum ilan etmez. |
| Günlük destek adımları | [NHS GAD](https://www.nhs.uk/mental-health/conditions/generalised-anxiety-disorder-gad/); [NHS insomnia](https://www.nhs.uk/conditions/insomnia/); [NIMH stress/anxiety](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet) | Uyku, hareket, kafein, gevşeme, not alma genel destek. Liste bir bütün olarak denenmiş perimenopoz tedavisi gibi sunulmuyor; zorunlu saat veya doz yok. |
| Adet düzeni değişmeden kaygı; SSS 2 | [NICE NG23, 1.3.1–1.3.6](https://www.nice.org.uk/guidance/ng23/chapter/Recommendations) | Belirtinin varlığı ile perimenopoz tanısı ayrıldı; yaş, adet öyküsü, vazomotor belirtiler ve diğer nedenler birlikte değerlendirilir. |

## Evidence etiketi kararları

Sekiz etiket dört odaklı etikete indirildi. Sayılar Estranova'nın editoryal 1–5 ölçeğidir; resmî GRADE derecesi veya hekim onayı değildir.

| Yer | Önce → sonra | Gerekçe |
|---|---|---|
| Özet | 3–4 → etiket yok | Karma bir etken listesine tek derece vermek yerine ilişkiyi ilgili bölümde sınırlamak. |
| Hormon–kaygı | 4 → 3 | Gözlemsel ilişki ve alt gruplar; doğrudan hormonal nedensellik gösterilmiyor. |
| Stres/fiziksel belirti/sık dalgalanma listeleri | 3 / 4 / 3–4 → etiket yok | Tanımlara ve karışık belirti listelerine etki derecesi verilmedi; kaynakları yukarıda izlendi. |
| Uyku–kaygı | 4 → 3 | Deneysel ve gözlemsel destek var; perimenopoza aktarım dolaylı. |
| Genel destek eşiği | 5 → etiket yok | Güvenlik/triyaj talimatına etki büyüklüğü etiketi verilmedi. |
| Psikolojik destek/BDT/ilaç seçenekleri | yok → 4 | Kaygı bozuklukları kılavuzundaki seçenekler, kişisel tedavi önerisi olmadan. |
| Günlük düzenler | 3 → 3 | Genel destek düzeyi; perimenopoza özgü bir tedavi paketi değil. |

## Korunan anlam ve sınırlar

- Hormonal geçiş, uyku, sıcak basması/gece terlemesi ve yaşam yükünün ilişkisi korunur; nedensellik kesinleştirilmez.
- Önceki kaygı öyküsü, günlük işlev, depresif belirtiler, alkol/ilaçla baş etme, fiziksel ayırıcı nedenler ve güvenlik sınırları metinde kalır.
- Gündelik önerilerden sabah ışığı, hareket, uyku düzeni, ekran, kafein, nefes ve not alma korunur. Sabit 30 dakika ve büyük yaşam kararı yasağı çıkarılır.
- Hiçbir gerçek hekim yanıtı düzenlenmedi. Bilimsel Editör Notu ve tıbbi disclaimer başlangıç dosyasıyla birebir karşılaştırıldı ve aynı bulundu.
- Yayın tarihi 6 Mayıs 2026; düzeltme tarihi 19 Ekim 2026. Yeni insan inceleme tarihi veya yeni onay kaydı üretilmedi.

## Görsel kaydı

- Byline: mevcut 2240×2800 kaynak, kanonik `npm run article:images` aracıyla 1200×1500.
- Kart: mevcut yatay `morning-window-reader-ai.webp` kaynağından 2400×1000; `--card-pos=north` ile yüzler korunur. Dikey kaynağın otomatik kırpımı yüzleri kesiyordu; o çıktı kullanılmadı.
- Kaynaklar yeni üretilmedi. Çıktılara mevcut yapay zekâ kökeni `images:tag-ai` ile yeniden taşındı.
- Hero kaynağı ve eşlemesi değişmedi. Görseller tanı/tedavi sonucu veya gerçek hasta görüntüsü diye sunulmadı.

## Kontroller

Kontrol sonuçları tamamlandıkça bu bölüme kaydedilir. Otomatik kontroller tıbbi veya editör onayı değildir.

- `npm run build:ci`: başarılı; TypeScript, compliance (179 dosya), strict yayın bütünlüğü ve tür denetimi, üretim build'i (139 rota), SEO (160 HTML) geçti. İlgisiz eski `menopoz-sonrasi-genital-estetik` notunda tek soft-ban uyarısı var.
- `check-fidelity`: inceleme gerektiren tek sayısal fark, kaynaksız `30` dakika talimatının çıkarılması; kasıtlı ve yukarıda kayda alındı. Astro'dan açıkça çıkarılmış metin + dört SSS karşılaştırıldı; metadata ve Evidence değişiklikleri ayrıca elle kontrol edildi.
- Hekim notu ve disclaimer başlangıç kaynağıyla birebir aynı. Sekiz H2, dokuz anchor ve dört SSS korundu; görünür soru/cevap–FAQPage eşleşmesi 4/4.
- `editorial-check`: iki bağımsız SSS'nin tanısal sınırları yakın bulundu; biri anksiyete bozukluğu, diğeri perimenopoz içindir. Farklı tanılar ve bağımsız okunan yanıtlar olduklarından korundu.
- `structure-check`: üç olumsuzluk sınırı (herkese test yok; kaygı tek başına anksiyete bozukluğu veya perimenopoz tanısı değil) ayrı bilgi taşıdığı için kaldı. Yedi kısa kapanış; somut fiziksel uyarı, güvence, acil güvenlik, uygulanabilir adım veya zorunlu disclaimer işlevleriyle tek tek okundu ve korundu.
- Dört ana sonuç için elle bölüm/yüzey sayımı: çok etkenlilik 6→3; uyku–kaygı ilişkisi 7→4; işlev ve değerlendirme 7→6 (özet, günlük etki bölümü, destek bölümü, iki bağımsız SSS ve korunmuş hekim notu); karakter/irade tesellisi 3→1. Uyku ve işlev tekrarlarının kalanları mekanizma, değerlendirme, bağımsız SSS veya korunmuş not işlevinde.
- Aynı çıkarım yöntemiyle ritim: ortalama 15,8→11,8 sözcük, standart sapma 7,8→4,7. Yeni metin yeniden bütün olarak okundu: kısa klinik güvenlik cümleleri ve SSS ritmi bilinçli korundu; değerler hedef veya yazarlık göstergesi değildir.
- `rendered-check`: 0 aday. 1280 pikselde tek H1 ve doğru görsel adresleri; görünür 19 Ekim güncellemesi ile `dateModified` eşleşiyor. 390 pikselde gövde/SSS yatay taşması yok. H1 için ek yerel düzeltme de doğrulandı: yazı 40,95 px, iki satırın sağ sınırları 291,09 ve 207,96 px; 390 px ekran içinde. Son CSS sonrası build (139 rota) ve SEO (160 HTML) yeniden geçti.
- `git diff --check` temiz. Çıktılar 1200×1500 ve 2400×1000; yapay zekâ köken etiketi ikisinde de mevcut. Ana çalışma dizini temiz kaldı.
- Kaynak incelemesi insan tıbbi onayı değildir. Yeni revizyon için KC editör ve tıbbi onayı bekleniyor; eski onay kaydı değiştirilmedi.

## Tekrar kontrol sonrası açık noktalar

Bu noktalar kullanıcıya bildirildi; sonraki `commit` talimatı bir düzeltme veya tıbbi onay olarak yorumlanmadı. Commit, incelenen mevcut taslağı saklar.

- P2: O anda devam edip geçmeyen çarpıntının aciliyeti, tekrarlayan/uzayan ataklardan daha açık ayrılmalı. Mevcut metin göğüs ağrısı, nefes darlığı ve bayılma eşlik ettiğinde acil yardım ayrımını içeriyor; kaynak NHS'nin geçmeyen çarpıntı koşulunu da içeriyor.
- P2: Görüşmede anlatma/not alma yönlendirmesi farklı bölüm kapanışlarında tekrar ediyor. Beşinci bölüm ve görüşmeye hazırlık bölümü tekrar açısından yeniden ele alınabilir.
- P3: Göğüs uyarısındaki “göğüs ağrısı ya da baskıyı … diye beklemeyin” ifadesi daha doğal Türkçeyle netleştirilebilir.
- Tekrar kontrolde kaynak–derlenmiş sayfa 45/45 blok; SSS/şema 4/4; dokuz anchor sağlam. 320/390/768/1280 px ekranlarda H1 kesilmesi veya gövde taşması yok. Canlı sayfa hâlâ eski sürüm (`dateModified: 2026-05-06`); yerel sürüm `2026-10-19`.
