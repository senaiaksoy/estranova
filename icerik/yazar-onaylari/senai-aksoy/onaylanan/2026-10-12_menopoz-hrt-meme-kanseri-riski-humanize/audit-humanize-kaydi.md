# HRT ve meme kanseri riski — audit, humanize ve fix

12 Ekim 2026. Hedef: `/bilimsel-pencere/yeni-arastirmalar/menopoz-hrt-meme-kanseri-riski/`.

Yerel düzenleme tamamlandı. Bu paket yeni revizyonun bağımsız tıbbi incelemesi ve doğrudan editör onayı içindir; onay verilmiş sayılmamıştır. Commit, push veya deploy yapılmadı.

## Başlangıç ve onay sınırı

- Çalışma ağacı başlangıçta temizdi. Son onay tabanı `f0d9fc17` (12 Ekim 2026 kaynak/kanıt turu). Hedef ve SSS dosyasında bu tabandan sonra değişiklik yoktu.
- Kanonik Senai-Wiki makale stil rehberi, skill, TR/anlam/yerel kontrol referansları, site kuralları, Senai byline profili ve onay akışı okundu.
- Mevcut klinik katkı JSON'u dört SSS yanıtının Dr. Aksoy'a ait olduğunu ve önceki metnin Dr. Mumcu/Aksoy onaylarını kaydediyor. JSON özgün yanıt gövdelerini taşımıyor; bu turda ham kullanıcı mesajına karşı yeni bir özgünlük doğrulaması yapılmış sayılmadı. Önceki onaylı SSS metni birebir korundu ve kaynak dosyanın tamamı `f0d9fc17` ile karşılaştırıldı.
- Önceki Bilimsel Editör Notu birebir korundu. Mevcut `reviewedBy` ve görünür inceleyen kimliği Dr. Alper Mumcu'dur; bunlar yeni revizyonun onayı olarak yorumlanamaz.
- Stil/persona dosyalarındaki eski kendi kendini inceleme ifadeleri uygulanmadı; kanonik güncel rehber ve projedeki bağımsız inceleme kuralı esas alındı.

## Bulgular ve yapılan düzeltmeler

| Önem | Önceki sorun | Son metin |
|---|---|---|
| Yüksek | Kişisel meme kanseri öyküsü, aile öyküsü ve geç başlama aynı grupta; ardından “Bunların hiçbiri tek başına kapı kapatmaz.” | Sistemik tedavinin meme kanseri öyküsünde genellikle önerilmediği, kanser/kanama ve diğer kullanım engelleri açıklandı. İstisnalar onkoloji ekibine ve ağır belirtilere sınırlandı. Sık izlem uygunluk engelinin yerine geçmiyor. |
| Yüksek | WHI sonucu genel östrojen/progestin başlığı altında bütün ürünlere taşınabiliyor. | Kullanılan ilaçlar ve iki ayrı rahim-durumu grubu açıklandı. Östrojen bulgusu genel koruyucu etki gibi sunulmuyor. |
| Orta | Ciltten östrojenin pıhtı/inme avantajı fazla kesin; genel bileşik indeks meme riskiyle karışabiliyor. | “Azaltabilir” ve karşılaştırmalı randomize veri eksikliği eklendi. Crandall indeksinin kalp-damar, kırık ve ölüm gibi başka sonuçları içerdiği açıklandı. |
| Orta | E3N kısa süre sınırı “5 yıldan az”; kaynakta ≤5 yıl. | “Beş yıl veya daha kısa süre” olarak düzeltildi. İstatistiksel artış saptanmaması risksizlik olarak sunulmuyor. |
| Orta | Güncel kohortlar için 4–5 kanıt; 2012 derleme olasılığına ayrı zayıf etiket yok. | Gözlemsel bulgular 3; WHI ilaca özgü randomize bulgu 5; derleme olasılığı 1–2. Bunlar editoryal sınıflandırmadır, yeni GRADE değerlendirmesi değildir. |
| Orta | Düşük doz vajinal tedavi, kanser öyküsünde yeterli güvenlik sınırı olmadan yatıştırıcı anlatılıyor. | Hormon dışı seçeneklerin yetersizliği, onkolojiyle ortak karar ve aromataz inhibitörü belirsizliği eklendi. |
| Orta | 1/50 ve 1/200 tahminleri kullanım dönemiyle karıştırılabiliyor. | Beş yıllık kullanım ile 50–69 yaş toplam risk dönemi ayrıldı; ortalama kilo/gelişmiş ülke ve büyük ölçüde nedensellik varsayımı belirtildi. Gözlemsel östrojen tahmini ile WHI sonucu arasındaki fark açıklandı. |
| Dil | Meta açıklamada “Yaş, başlama zamanı ve süre neden birlikte okunmalı gösteriyor” yüklem bozukluğu; soyut “denge/tartı/resim” tekrarları. | Açıklama ve manifest/RSS metni hizalandı. Rota yerine uygulama yolu; sistemik, oral, transdermal, progestajen, plasebo ve temel risk sadeleştirildi. |
| Yapı | Uzun özet, benzer kapanış hükümleri; kaynaklar TOC dışında ve ikinci panel sayacı yeniden 01'e başlıyor. | Kısa Klinik Yanıt, bölüme özgü lede'ler, kısa kapanış, TOC'ye Kaynaklar; kaynak paneli 09'a hizalandı. Mevcut anchor'lar korundu. |
| SSS | Gerçek yanıtlar genel başlıkla gösteriliyor; sıklık kanıtı yok. | Tek yüzeyin adı “Dr. Aksoy'a sorular”; dört yanıtın metni değişmedi. |
| Teknik | Makale şema görseli byline görselinden farklı olabiliyor; OG varsayılan görsel. | Article/MedicalWebPage, OG ve mevcut byline görseli aynı dosyaya bağlandı. Üst hero, kart ve görsel dosyaları değiştirilmedi. |

Gramer/sentaks, yerel ifade/terminoloji ve akış/ritim için üç ayrı elle okuma yapıldı. Konu kanser ve ilaç kararı olduğundan mizah H0; yeni hasta sözü, klinik gözlem veya onay üretilmedi. Eski genel görüşme anlatısı tekrarları yerine okurun karşılaşabileceği olasılıklı bir okuma sahnesi kullanıldı; gerçek yaşanmışlık iddiası kurulmadı.

## Kaynak ve anlam kaydı

| Kaynak | Kullanım ve sınır |
|---|---|
| [Brusselaers 2018](https://pubmed.ncbi.nlm.nih.gov/29917061/) | 290 186 kullanıcı ve uygulama/düzen ilişkisi; gözlemsel çalışma. Sayı korunuyor, çalışma tarihi görünür. |
| [Crandall 2017](https://pubmed.ncbi.nlm.nih.gov/28697036/) | Genel klinik sonuç indeksi; yalnız meme kanserini ölçmüyor. |
| [Fournier 2014](https://pubmed.ncbi.nlm.nih.gov/24781971/) | ≤5 yıl sınırı ve bırakma sonrası risk. Artış saptanmaması bütün süreler için risksizlik değildir. |
| [Chlebowski 2020](https://pubmed.ncbi.nlm.nih.gov/32721007/) | İlaca ve iki ayrı çalışma grubuna özgü sonuç. Tanı sıklığı ölüm riskiyle karıştırılmadı; yeni ölüm oranı eklenmedi. |
| [Ruan 2012](https://pubmed.ncbi.nlm.nih.gov/22382615/) | Mevcut derleme kaydı korundu; progesteron üstünlüğü yalnızca olasılık. Tam metne dayanan yeni bir sonuç çıkarılmadı. |
| [2022 hormon tedavisi bildirisi](https://menopause.org/wp-content/uploads/professional/nams-2022-hormone-therapy-position-statement.pdf) | §Formulation/contraindications, §Breast cancer, §Summary: rahim koruması, <60 yaş veya menopozdan sonraki 10 yıl, sistemik kullanım engelleri, onkoloji ortak kararı, lokal tedavi ve uygulama yolu belirsizliği. Resmî tam metin okundu. |
| [CGHFBC 2019](https://pubmed.ncbi.nlm.nih.gov/31474332/) | 50 yaşta başlayan beş yıllık kullanımın 50–69 yaş risk tahmini; 1/50 ve 1/200, kilo/ülke/nedensellik koşulları. Kişisel risk hesabı değildir. |

Yedi mevcut kaynak ve DOI/URL korunuyor. Yeni veya kapsamlı bir 2026 literatür taraması yapıldığı iddia edilmedi. NICE öneri/tartışma sayfalarına doğrudan erişim 403 verdi; düzeltmeler bunlara dayanıyor gibi gösterilmedi.

`check-fidelity` sonucu `review_changes` / exit 1: beklenen inceleme farkları. Kritik 290 186, 50 yaş, beş yıl, 50–69 ve 200 kullanıcı/payda korunuyor. Yeni 10 yıl sınırı ve çalışma yıllarının gövdeye taşınması, atıf sayılarının artması ve 4–5 → 3 / 1–2 etiket değişiklikleri kayıtlı gerekçelerle değerlendirildi. Yazıyla “beş” kullanımını araç rakamla “5 yıl” eşleşmesi olarak görmüyor; süre silinmedi. Gizli bir oran, doz veya reçete eklenmedi.

## İddia sayımı

Sayım birimi aynı hükmün bir paragrafta/yüzeyde söylenmesi; SSS ve korunan hekim notu dahil. Bir paragrafta aynı hüküm iki cümlede açıklansa tek yer sayıldı. Sayılar azaltma kotası değildir.

| Ana sonuç | Önce | Sonra | Kalan tekrarın işi |
|---|---:|---:|---|
| Kombine tedavide risk artışı | 8 | 8 | Özet; ilaca özgü WHI; gözlemsel düzen farkı; süre; mutlak tahmin; önceki notta iki açıklama; bağımsız SSS. |
| Ciltten uygulamada daha düşük meme riski kanıtlanmış değil | 4 | 5 | Yeni özette doğrudan yanıt; uygulama lede'si; çalışmanın bulgusu; korunan hekim notu; bağımsız SSS. |
| Progesteron risksiz/üstün kabul edilemez | 2 | 2 | Kısa kullanım gözlemi ile derleme olasılığının ayrı kanıt sınırları. |

`structure-check --claims` ayrıca sözcük eşleşmelerini raporladı; bunlar bu anlamsal sayımın yerine geçmez. “Yalnızca östrojen” terimi bazı yerlerde daha sık geçiyor çünkü rahim koruması ve gözlemsel/randomize bulgu çelişkisi artık açık; aynı güvenlik hükmünü doldurma amacıyla tekrarlamıyor.

Yapı raporunda kalan üç kısa kapanışın biri kaynak künyesi, ikisi değiştirilmemiş hekim notu. Tekrarlanan dört sözcük “kanıt düzeyi 3 5” dönüştürülen kanıt etiketlerinden geliyor; teknik sabit etikettir. Başlık örtüşmesi, yazara talimat, özgünlük iddiası veya noktadan önce boşluk bulgusu kalmadı. Derlenmiş sayfanın `uncited-source` uyarısı Estranova'da geçersiz: kurum adı yerine kullanılan yedi numaralı gövde atfı doğrulandı. `review-anonymous` imzanın satır bölünmesine ilişkin yanlış pozitif; görünür byline, not imzası ve MedicalWebPage Dr. Alper Mumcu'yu taşıyor.

## Doğrulama ve açık sınırlar

- `npm run build:ci`: geçti. TypeScript, compliance, strict içerik/tür denetimleri, encoding, renk, lexicon, tarih, Astro ve SEO kontrolleri dahil. Son yapımın önizlemesi `makale-onizleme.html`.
- SSS görünür/FAQPage eşleşmesi 4/4; hekim yanıt dosyası onay tabanıyla aynı. Tek H1; bütün anchor'lar ve kaynak atıfları geçerli. Person entity aynı sayfada çözülebiliyor. Canonical ve indexlenebilirlik doğru. Yayın tarihi 6 Mayıs, gerçek içerik revizyon tarihi 12 Ekim 2026.
- `npm run articles:audit:sources`: başka 15 klinik rehberin mevcut kaynak eksikleri nedeniyle exit 1. Hedef makale bu listede yok; başka yazılar değiştirilmedi. Ayrıntı `sources-audit.log`.
- Skill editorial/structure/fidelity/rendered kontrolleri çalıştı; JSON raporları pakette. Bunlar tıbbi onay değildir.
- Cache bypass canlı GET HTTP 200. Canlı sayfada önceki “Bunların hiçbiri…” ifadesi hâlâ var; yerel yeni güvenlik cümlesi yok. Yerel sonuç yayınlanmış gibi sunulmadı.
- Masaüstü/mobil görsel QA yapılamadı: browser-client güvenilir native bridge bağlantısını kuramadı; uygulama içi alternatifte yerel sayfa `ERR_BLOCKED_BY_CLIENT` ile engellendi. Engeli aşmaya çalışılmadı. HTML doğrulaması görsel QA olarak raporlanmadı.

Hasta eğitimi açısından metin artık tedavi türü, pıhtı/meme riski, kanser öyküsü/aile öyküsü ve kullanım süresi/toplam risk dönemi ayrımlarını daha kolay takip ettiriyor. Web/AI tarafından kaynak olarak kullanılabilecek sonuçlar da bu koşullarıyla birlikte okunmalı; şahsa özel HRT uygunluğu, kanser sonrası tedavi veya progesteron üstünlüğü için genel karar kaynağı değildir.

Yayın öncesi bu yeni güvenlik ve kaynak yorumlarının Dr. Aksoy klinik onayı, Dr. Alper Mumcu bağımsız incelemesi ve KC doğrudan editör onayı gerekir. Önceki onay kaydı değiştirilmedi; bu paket yeni onayın yerine geçmez. Skill'in “Eski onay, sonradan değişen metni kapsamaz” kuralı ve `docs/AUTHOR-APPROVAL-WORKFLOW.md` doğrudan editör istisnası uygulanmıştır.

## Sonraki yayın talimatı — 12 Ekim 2026

Kullanıcı “Commit, push, deploy.” talimatıyla son revizyona doğrudan editör/yayın yetkisi verdi. Önceki açık klinik ve bağımsız tıbbi onay işi kapatılmış sayılmadı. Sayfada son düzenlemenin bağımsız incelemesinin beklendiği ve hekim notunun önceki onaylı sürüme ait olduğu açıkça belirtiliyor. Paket bu incelemenin takibi için onay-bekleyen altında korunuyor; genel yayın yetkisi kaydı src/data/article-approvals.ts ve article-log.md içinde.
