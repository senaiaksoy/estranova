# Metformin — ayrıntılı audit ve humanize düzeltme kaydı

Tarih: 27 Ekim 2026. Hedef: `src/pages/zamansiz-yasam/deneysel/metformin-uzun-yasam-etiket-disi.astro`.
Kapsam: tüm makale, kaynakların iddialarla ilişkisi, görünür SSS/şema, meta açıklama, yerel render ve mevcut canlı sürüm. Bu kayıt tıbbi veya yazar onayı değildir. Commit, push, deploy yapılmadı.

## Başlangıç ve onay sınırı

- Başlangıç HEAD: `48ad2ce8`; hedef makalede başlangıçta çalışma ağacı değişikliği yoktu. İki mevcut, izlenmeyen metformin taslağı korundu.
- İlk onaylı içerik: `8d0298587444f590f0db49ee1e619988cf48f643`. `article-approvals.ts` ve Senai article-log satır 50, 27 Ekim yazar onayını ve KC bildirimiyle Mumcu onayını kaydediyor.
- Sonraki `4bba42fa` değişikliği maymun çalışması ve Soukas derlemesini eklemiş. Bu turun farkı da okundu; önceki onay yeni düzeltmelerin onayı sayılmadı.
- Beş SSS yanıtının hekimden birebir alındığı mevcut onay kaydında yazıyor. Bu oturumda ham hekim konuşması ayrıca bulunamadı; bağımsız ham kayıt doğrulaması yapıldığı iddia edilmiyor. SSS veri dosyası değiştirilmedi; mevcut beş yanıtın görünür HTML ve FAQPage eşitliği 5/5 doğrulandı.
- Kanonik Senai-Wiki stil rehberi, senai-humanize skill ve TR/anlam/yerel kontrol belgeleri, proje talimatları, makale türü ve yazar profili okundu. Profildeki eski kendi-kendini-inceleme ifadeleri güncel bağımsız inceleme kuralına üstün tutulmadı.

## Bulgular ve uygulanan düzeltmeler

| Önem | Önceki sorun | Düzeltme ve dayanak | Yeni makale konumu |
|---|---|---|---|
| Yüksek | “Diyabeti olmayanlarda ömür ya da hastalık sonlanımlı çalışma yok” çok genişti. Prediyabet araştırmaları diyabet gelişimini ölçüyor. | Metabolik açıdan sağlıklı kişide uzun yaşam beklentisi, yüksek riskli prediyabette hastalık önlemeden ayrıldı. DPP ve uzun izlem kaynağı eklendi. | Kısa Klinik Yanıt; açılış; menopoz; kaynak 20–21 |
| Yüksek | Özet ve Bilimsel Editör Notu “sağlıklı yaşlılarda tek randomize çalışma” diyordu. | “Tek” kaldırıldı. Aerobik egzersiz araştırması ve yatak istirahati araştırması, farklı koşul ve sonuçlarıyla eklendi. MASTERS'ın kas kütlesi bulgusu kuvvet sonucundan ayrı tutuldu. | Egzersiz; çalışmalar; Editör Notu; kaynak 22–23 |
| Yüksek | Tamamlanan çalışmalar anlatılırken sonuç kaydı ile makale ayrılmıyor, yatak istirahati yayınları gözden kaçıyordu. | NCT04264897 sonuçlarının 2 Temmuz 2026, NCT04221750 sonuçlarının 14 Eylül 2026'da yayımlandığı resmî API'den okundu. NCT03107884 ile bağlantılı 2023 yayını eklendi. Kayıt örneklemi 64, makale örneklemi 20 olarak ayrıldı. | `devam-eden`; kaynak 14, 23 |
| Yüksek | Böbrek bölümünde “risk gösterilmedi” ifadesi etiket uyarısını zayıflatıyordu; eGFR birimi ve tedaviye başlama sınırı yoktu. | eGFR <30 mL/dk/1,73 m² kontrendikasyonu, 30–45 aralığında başlamama önerisi ve kullanım sırasında <45'te yarar-risk değerlendirmesi yazıldı. Çok düşük kesinlikli gözlemsel analizin etiketi değiştirmediği açıklandı. | `riskler`; kaynak 11, 16 |
| Yüksek | Ciddi yan etki durumunda ne yapılacağı yalnızca belirsiz bir “hangi belirtide bırakılacak” maddesiydi. | Etiketteki açıklanamayan halsizlik, kas ağrısı, nefes darlığı ve aşırı uyku hali için acil değerlendirme bilgisi eklendi. Susuz kalma/tetkik/ameliyat yönetimi hekim planına bağlandı. | `riskler`, `hekimle`; kaynak 16 |
| Orta | “Çoğu etki bırakınca geçer” genel güvenlik güvencesi kaynakla yeterince desteklenmiyordu. | Geri dönüşün etkiye ve erken fark edilmesine bağlı olduğu; B12'ye bağlı nörolojik hasarın tam düzelmeyebileceği belirtildi. | Beş eksenli tablo; kaynak 12 |
| Orta | B12 için “4 ay” bir biyolojik başlangıç eşiği gibi okunabiliyordu. | Bunun klinik derlemede kullanılan tarama risk ölçütü olduğu açıklandı. Rutin aralık ile belirtiye dayanan erken değerlendirme ayrıldı. | `riskler`; kaynak 12–13, 16 |
| Orta | Gebelik için “yeterli veri yok” ürün etiketinin sonucunu aşırı kısaltıyordu. | Riskin kesin belirlenemediği, mevcut yayınlarda açık bir ilişki bildirilmediği birlikte aktarıldı. | `riskler`; kaynak 16 |
| Orta | 90.463 kontrolün tamamı yalnızca metformin grubuyla eşleşmiş gibi anlatılıyordu. | 78.241 metformin, 12.222 diğer ilaç ve iki grup için toplam 90.463 kontrol ayrımı düzeltildi. Gözlemsel ilişki nedensellikten ayrıldı. | `neden-konusuluyor`; kaynak 3 |
| Orta | “Kanseri önler: henüz test edilmedi” ve “yaşlanmayı yavaşlatır: test edilemez” hükümleri aşırı kesindi. | Kanser türü/popülasyon/önleme-tedavi ayrımı belirtildi. Biyolojik yaş göstergelerinin ölçülebilirliği ile doğrulanmış klinik yarar ayrıldı. | İddia tablosu |
| Orta | SSS'deki prediyabet/gebelik diyabeti ve PKOS ifadelerinin kaynak izi eksikti. | Yanıtlar değiştirilmeden DPP, DPPOS ve 2023 PKOS kılavuzu gövdedeki ilgili açıklamalara bağlandı. PKOS önerileri sağlıklı postmenopozal kadınlara genellenmedi. | `menopoz`; kaynak 20–21, 24 |
| Editoryal | Kesik sloganlar, açıklamayı geciktiren “vaaz vermeyeceğim / doz vermiyorum” geçişleri ve gereksiz tekrarlar vardı. | Bölüm lede'leri somut bilgi veya karar sorusuyla yeniden kuruldu; kapanış uygulanabilir konuşma başlıklarına bağlandı. Persona kaynaklı örnekler gerçek klinik deneyim sayılmadı; kaynağı ayrıca doğrulanamayan hasta alıntısı/görüşme sıklığı çıkarıldı. | Açılış ve tüm gövde |
| Teknik | Görünür güncelleme alanı yoktu; meta/RSS açıklaması fazla kesin klinik hükümler taşıyordu. | Aynı gün gerçekleşen revizyon için `modifiedDate` ve `lastUpdated` eklendi. Makale açıklaması ile manifestte yalnızca bu makalenin açıklaması eşitlendi. | Frontmatter; `static-articles.ts` ilgili tek alan |

Bilimsel Editör Notu'nda yalnızca iki yanlış olgusal kapsam düzeltildi (“tek çalışma” ve çok geniş hastalık-sonlanımı hükmü); kanıt etiketinin başlığı uzun yaşam amacıyla sınırlandı. Yazarın klinik karar sırası, imzalar ve önceki inceleme tarihi korundu. Bu düzenlenmiş not dahil yeni sürüm için yeni yazar ve bağımsız tıbbi onay gerekir; önceki tarih yeni onay gibi kaydedilmedi.

## Anlam ve kaynak denetimi

- MASTERS: 94 katılımcı, 65 yaş ve üzeri, 14 hafta; 46 metformin / 48 plasebo. Kas kütlesi artışı plaseboda daha fazla; kuvvet artışındaki fark anlamlı değil. Çalışma dozu gövdeden çıkarıldı; bu bir doz önerisi veya veri değişikliği değildir.
- Statin alt analizi: statin ataması randomize değil; birlikte başlama önerisi çıkarılamaz.
- MILES: yaklaşık 70 yaş, 14 kişi, 6 hafta/6 hafta çapraz tasarım korundu. Tam metindeki bozulmuş glukoz toleransı koşulu eklendi; katılımcılar metabolik açıdan tamamen sağlıklı sayılmadı. Gen ifadesi klinik uzun yaşam sonucu yapılmadı. [Tam metin](https://pmc.ncbi.nlm.nih.gov/articles/PMC5847877/) üzerinden bu popülasyon sınırı kontrol edildi.
- Fare/solucan/maymun verisinin tür, cinsiyet, test yöntemi ve 40 ay sınırları korundu. Hayvan verisine insan kanıt etiketi eklenmedi.
- Diyabet tedavisi, riskli prediyabette önleme ve sağlıklı kişide uzun yaşam ayrı tutuldu. Doğrudan menopoz verisinin yokluğuna olumlu “zayıf kanıt” etiketi verilmedi.
- eGFR eşiği ve birimi, ürün etiketiyle eşleştirildi. B12 izlemi, gebelik/emzirme ve mide-bağırsak oranları aynı ürün bilgisinden kontrol edildi; oranlar diyabetli gruba ait olarak kaldı.
- Mevcut 16 PubMed kaydının kimliği ve özetleri NCBI EFetch üzerinden; yeni temel çalışmalar PubMed üzerinden kontrol edildi. Kanıt denetimi, bütün çalışmaların tam metinlerini baştan sona okuma iddiası taşımaz.
- Resmî kayıt API'sinde NCT04221750'ye bağlanan 2027 tarihli bir makale de vardı. Kullanıcı tarihinden ileride olduğu için bu yayına dayanılmadı; 2026'da yayımlanan sonuç kaydı esas alındı.

Doğrulanan ana kaynaklar:

- [MASTERS](https://pubmed.ncbi.nlm.nih.gov/31557380/), [aerobik egzersiz](https://pubmed.ncbi.nlm.nih.gov/30548390/), [yatak istirahati](https://pubmed.ncbi.nlm.nih.gov/37486024/).
- [DPP](https://pubmed.ncbi.nlm.nih.gov/11832527/), [DPPOS](https://pubmed.ncbi.nlm.nih.gov/30877090/), [2023 PKOS kılavuzu](https://pmc.ncbi.nlm.nih.gov/articles/PMC10477934/).
- [Ürün bilgisi](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d9bac244-1725-5bf3-e053-2a95a90ac823).
- [NCT04264897 resmî veri](https://clinicaltrials.gov/api/v2/studies/NCT04264897), [NCT04221750 resmî veri](https://clinicaltrials.gov/api/v2/studies/NCT04221750), [NCT03107884 resmî veri](https://clinicaltrials.gov/api/v2/studies/NCT03107884).

## Tekrar ve araç bulgularının değerlendirilmesi

Elle anlam sayımı; özet, ilgili gövde bölümü, tablolar, Editör Notu ve her SSS ayrı yüzey sayılır. Aynı bölümdeki birkaç ifade tek sayılır; kaynak listesi ve meta alanlar sayılmaz.

| Ana sonuç | Önce | Sonra | Kalan tekrarın işlevi |
|---|---:|---:|---|
| MASTERS'ta kas kütlesi kazanımının daha az olması | 7 | 5 | Özet, deney açıklaması, iddia tablosu, Editör Notu ve bağımsız okunan korunmuş SSS |
| Diyabetli gruptaki sağkalım bulgusunun gözlemsel olması | 6 | 5 | Çalışmanın yöntemi, karar tablosu, iddia sınırı, Editör Notu ve korunmuş SSS |
| B12 eksikliği/izlem başlığı | 7 | 7 | Özet, geri dönüş riski, güvenlik, başlangıç testleri, Editör Notu ve iki ayrı korunmuş SSS |

`structure-check --claims` ayrıca çalıştı. Regex sonuçları anlam sayımı değildir: kas kalıbı 4→3, gözlemsel kalıp 6→4, B12 kalıbı 9→10. B12 artışı tarama süresi ve belirtili kişide izlemin ayrılmasından kaynaklanıyor.

- **Gramer/sentaks:** Kontrol grubunun yanlış paydası ve bağlantılı cümlesi düzeltildi; “diyabetsiz sağlıklıda” türü kesik isim zincirleri açıldı.
- **Yerel ifade:** “sert sonlanım”, “bazal ölçüm”, “körelme” gibi ifadeler açıklayıcı Türkçeyle değiştirildi. HbA1c ve eGFR ilk gerekli yerde açıklandı.
- **Humanizasyon/ritim:** Üç ayrı elle okuma yapıldı. Araçta kısa hükümle biten paragraf adayı 22→11, ortalama cümle uzunluğu 11,6→13,3 kelime; standart sapma 6,4→6,5. Bunlar kalite puanı veya yazar kimliği kanıtı değildir.
- **`family-negative-frame` (5):** B12'nin süre sınırı, prediyabette otomatik reçete olmaması ve ruhsat/kanıt ayrımı ayrı güvenlik açıklamalarıdır; iki aday ise korunmuş hekim yanıtlarındadır. Gerekçeleriyle kaldı.
- **`short-closer` (11):** Açılışın kısa ritmi, ayrı güvenlik sınırları ve korunmuş SSS cümleleri; birbirinin yerine geçen bölüm kapanışı olarak kullanılmıyor. Gerekçeleriyle kaldı.
- **`repeated-phrase`:** “metabolik açıdan sağlıklı kişilerde” dört yerde geçer. Popülasyonun kapsamını doğru tutmak için kaldı; farklı sözcüklerle hasta grubunu değiştirmekten kaçınıldı.
- **`label-template` (2):** Kanıt basamakları ve güvenlik alt başlıkları bilinçli, tutarlı sıralamalardır; ayrıca yeniden yazılmadı.
- **`repeated-negative-frame` (1):** Prediyabette otomatik reçete ile PKOS'ta ruhsat/kanıt ayrımı farklı sorulardır; gerekçesiyle kaldı.
- Soru işaretsiz soru başlığı ve “tek/ilk çalışma” adayları giderildi. Mevcut anchor'lar korundu; gövdede bir soru başlıklı H2 kaldı.
- `check-fidelity` “review_changes” verdi: beklenen yeni kaynaklar, gerçek grup sayıları, eGFR birimi/eşiği, sonuç kayıt tarihleri ve çıkarılan çalışma dozu elle kontrol edildi. Astro desteklenmediği için özet/gövde/Editör Notu/SSS'den üretilen geçici Markdown karşılaştırıldı; kaynak listesi ve meta alanlar ayrıca elle/DOM ile kontrol edildi.
- `rendered-check` iki aday verdi: 21 “uncited-source” Estranova'nın numaralı dipnot düzenini tanımayan yanlış pozitiftir; DOM'da 24/24 kaynağın gövdede atfı var. “repeated-disclaimer” ürün bilgisinin Türkiye KÜB'ü yerine geçmediği notunu da saymıştır; gerçek `ArticleDisclaimer` sayısı 1.

## Teknik doğrulama ve açık sınırlar

- Son `npm run build:ci`: başarılı. TypeScript, compliance, strict içerik bütünlüğü, strict şablon, encoding/renk/sözlük/tarih kapıları, Astro build ve SEO kontrolü çalıştı. 135 sayfa üretildi; SEO kontrolü 157 çıktı için geçti.
- Kapsam dışı mevcut uyarılar: GHK-Cu ve peptid yazılarında uzun cümleler; diğer dosyalarda 7 soft lexicon uyarısı. Yeni metformin makalesi için engelleyici hata yok.
- DOM: 1 H1, 5 SSS ve 5/5 görünür soru-cevap/FAQPage eşleşmesi; kırık sayfa içi anchor yok; 24/24 kaynak atıflı; MedicalWebPage ve Article tarihleri 2026-10-27. Manifest açıklaması makale açıklamasıyla eşit.
- 390 px mobil ve 1440 px masaüstü kontrol edildi. Sayfa yatay taşmıyor; mobil ve masaüstü gövde ekran görüntüleri elle incelendi. Üst hero ve mevcut makale görselleri değiştirilmedi.
- `git -c core.whitespace=cr-at-eol diff --check`: temiz. Manifestin mevcut karma satır sonları korundu; fark yalnızca hedef açıklamasındaki bir satırdır.
- Canlı URL cache-bypass sorgusuyla HTTP 200 döndü; canlı sürüm hâlâ önceki “tek randomize” ifadesini ve eski çalışma bölümünü taşıyor. Yerel düzeltmelerin canlıda olduğu iddia edilmiyor.
- Türkiye'ye ait güncel ürün KÜB'ü bu oturumda doğrulanamadı. ABD etiketi Türkiye ruhsatı veya yerel izin süreci yerine kullanılmadı. TAME'nin güncel başlangıç/finansman durumu da doğrulanamadı; metin bunu açıkça söylüyor.
- Hasta eğitimi değeri: hangi amaç için ilaç düşünüldüğünü, ara gösterge ile klinik sonucu, kas kütlesi ile kuvveti ve başlama/sürdürme güvenliğini ayırıyor. İkincil alıntıda çalışma popülasyonu ve sonuç sınırları korunmalı; metin reçete, Türkiye ruhsat durumu belgesi veya uzun yaşam etkinliği kanıtı olarak kullanılamaz.
- Yeni sürüm, özellikle güvenlik ve yeni çalışma bulguları için yazar ve bağımsız tıbbi incelemeye açıktır. Mevcut onay kaydı değiştirilmedi; yeni onay, yayın veya dağıtım yapılmadı.

## Son sürüm onayı — 28 Ekim 2026

KC bu sohbette “yazar tıbbi onay tamam” diyerek yukarıdaki audit/humanize fix son sürümünün yazar ve tıbbi onayını bildirdi. Önceki bölümlerdeki onay bekleniyor ifadeleri audit anındaki durumu anlatır; bu kayıtla kapanmıştır. Onay `article-approvals.ts` ve yazar `article-log.md` kaydına işlendi. Beş özgün SSS yanıtı değişmedi. Bağımsız inceleyici Dr. Alper Mumcu olarak kayıtlıdır; onay KC bildirimiyle kaydedildi, doğrudan yazılı inceleme notu alınmadı. Commit, push ve deploy yapılmadı.
