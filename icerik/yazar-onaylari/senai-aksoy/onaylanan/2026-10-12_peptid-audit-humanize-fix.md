# Peptid kullanımları ve menopoz — geniş audit, humanize ve düzeltme

Tarih: 12 Ekim 2026. Durum: geniş audit/humanize revizyonunun tıbbi ve yazar/yayın onayları kullanıcı tarafından 12 Ekim 2026 tarihinde tamamlandı olarak bildirildi. Aşağıdaki audit, onaydan önceki inceleme kaydıdır.

Hedef: `src/pages/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz.astro`.
Karşılaştırma tabanı: son onaylı `2a88ccbe`; düzenleme öncesinde hedef dosya bu commit ile aynıydı. Gerçek SSS aktarımı: `e1b9ed35` ve `klinik-katkilar/2026-10-12_peptid-kullanimlari-menopoz.json`.
Son yerel makale SHA-256: `686A79E8A5B87FBC6CC963917F044C4AA0E112F30AC77AE0EF8E5A555B5503FA`.

## Başlıca bulgular ve uygulanan düzeltmeler

| Öncelik | Önceki sorun | Yerel düzeltme |
|---|---|---|
| Yüksek | İpamorelin için yayımlanmış veriler yalnızca sıçan ve domuz deneylerine bağlanıyordu. | Bağırsak ameliyatı sonrası yapılmış insan çalışması eklendi. İnsan çalışmasının varlığı ile menopozda kas faydası ayrıldı. |
| Yüksek | Timosin beta-4 insan çalışmalarının göz damlasıyla sınırlı olduğu söyleniyordu; TB-500 ile molekül ayrımı gövdede açık değildi. | Venöz ülserde yerel uygulama çalışması eklendi; tam molekül ve kısa peptid parçası ayrıldı. Göz/deri verisi menopozdaki enjeksiyonlara taşınmadı. |
| Yüksek | AOD-9604 kaynak ilişkisinde insan denemelerinin varlığı ve başarısız etkinlik sonucu yeterince görünür değildi. | FDA değerlendirme dosyasındaki obezite denemeleri ve büyük çalışmanın temel kilo kaybı sonucunda plaseboya üstünlük göstermemesi açıklandı. |
| Orta | GHK-Cu insan verisi kaynaksızdı; topikal ve enjeksiyon uygulamaları birbirine yaklaşabiliyordu. | Lazer sonrası topikal uygulama çalışması eklendi: 13 tamamlayan kişi, nesnel cilt ölçümlerinde fark yok, memnuniyet farkı var. Menopoz ve enjeksiyon için genelleme yapılmadı. |
| Orta | CJC-1295 ve ipamorelin “GH prekürsörleri” diye adlandırılıyordu. | Büyüme hormonu salgısını uyaran maddeler olarak düzeltildi; hormon düzeyi ile kas gücü ayrıldı. |
| Orta | MOT-C yazımı; doğal peptid düzeyi ölçümü ile dışarıdan tedavi verilmesinin karışması. | MOTS-c yazımı kullanıldı; gözlemsel/metabolik bulgu ile uygulama etkinliği ayrıldı. |
| Orta | Epitalon kaynaklarının farklı peptid karışımlarını ve popülasyonları içermesi görünür değildi. | Epitalon/epithalamin ayrımı ve kamuya açık özetlerle sınırlı yorum açıklandı. Melatonin değişimi uyku veya yaşam süresi faydası sayılmadı. |
| Orta | BPC-157 için kullanılan derleme belirli kemirgen iskemi-reperfüzyon deneylerini değerlendirirken gövde daha geniş doku iddiaları taşıyordu. | Derlemenin kapsamı daraltıldı. Kayıtlı SSS'deki küçük insan çalışmaları ifadesi ayrıca 16 kişiye ulaşılan kontrolsüz diz ağrısı dosya incelemesiyle desteklendi; nedensellik ve menopoz çıkarımı yapılmadı. |
| Orta | Kanıt etiketi bazen mekanizma, sonuç ve bütün makaleyi aynı düzeyde gösteriyordu. | Obezite kilo kaybı kanıtı güçlü; menopozdaki deneysel kullanım zayıf; erken topikal veriler sınırlı olarak ayrıldı. İnceleme kutusundaki bütün makaleye ait 1–3 aralığı kaldırıldı. Bu kalibrasyon editoryal değerlendirmedir; formal GRADE analizi veya tıbbi onay değildir. |
| Editoryal | Dolaylı özet, tekrar eden hüküm/uyarı kapanışları ve kaydı bulunmayan birinci tekil editoryal sahne. | Doğrudan klinik yanıt, somut çalışma ayrımları ve daha kısa kapanış yazıldı; uydurma kişisel sahne çıkarıldı. Birinci tekil geçişler yalnızca mevcut gerçek SSS yanıtlarını işaret ediyor. |
| Teknik | İkinci prose panelinde numaralar 01'e dönüyordu; TOC sırası farklıydı. | Tek prose paneli ve DOM sırasına uygun TOC: 01–09; mevcut bağlantı kimlikleri korundu. SSS ayrı ve tek görünür yüzeyde kaldı. |
| Teknik | Hero alt metninde uzun üretim promptu görünüyordu; sosyal/şema görseli makale görseliyle örtüşmüyordu. | Görülen seramik sahnesine uygun kısa Türkçe alt metin ve aynı makale görselinden OG/Twitter/Article/MedicalWebPage üretimi. Görseller, üst hero ve görsel köken kayıtları değiştirilmedi. |

## Anlam ve kaynak kaydı

| İddia | Popülasyon / ölçülen sonuç | Revizyondaki sınır ve dayanak |
|---|---|---|
| Peptid yapılı obezite ilaçları | STEP 1 / SURMOUNT-1, fazla kilolu veya obez yetişkinlerde kilo kaybı | Menopoz tek başına endikasyon değildir; kas korunması ayrı sonuçtur. Mevcut kaynaklar 1–2 korundu. |
| CJC-1295 | Sağlıklı yetişkinlerde GH/IGF-1 | Hormon artışı menopozdaki kas gücü kanıtı değil. Kaynak 3 korundu. |
| İpamorelin | Bağırsak rezeksiyonu sonrası hastalarda bağırsak işlevi | İlk hayvan verisi kaynak 4; insan çalışması kaynak 13. Menopoz kas/uzun dönem güvenlik çıkarımı yok. |
| Timosin beta-4 | Kuru gözde damla ve venöz ülserde yerel uygulama | Kaynaklar 5–6 ve 14; TB-500 enjeksiyonuyla eşdeğer sayılmadı. |
| GHK-Cu | Lazer sonrası topikal karşılaştırma, 13 tamamlayan kişi | Nesnel sonuç ve öznel memnuniyet ayrıldı. Kaynak 16; enjeksiyon güvenliği kaynak 12. |
| AOD-9604 | Obezite denemeleri; büyük çalışmada temel kilo kaybı sonucu | Etkinlik üstünlüğü gösterilmemesi, “insan araştırması yok” ifadesinden ayrıldı. FDA dosyası, kaynak 15. |
| BPC-157 | Kemirgen iskemi-reperfüzyon derlemesi; ayrı kontrolsüz insan diz ağrısı kayıtları | Kaynaklar 7 ve 17. İnsan kaydı varlığı, doku onarımı/menopoz kas faydası veya güvenlik kanıtı sayılmadı. |
| MOTS-c / epitalon | Metabolik/preklinik araştırma; eski melatonin kayıtları | Kaynaklar 9–11. Endojen düzey, farklı peptid karışımları ve biyobelirteçler klinik sonuçla eşitlenmedi. |
| Ürün güvenliği | Molekül ve uygulama yoluna özgü bilgi boşlukları | Kaynaklar 8 ve 12. Bütün peptidlere aynı yan etki yüklenmedi; FDA verisi Türkiye ruhsat kaydı olarak sunulmadı. |

Yeni bilimsel dayanaklar:

- [FDA uygulama yoluna özgü güvenlik değerlendirmesi](https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks).
- [Beck ve ark., 2014 — ipamorelin insan çalışması](https://pubmed.ncbi.nlm.nih.gov/25331030/).
- [Guarnera ve ark., 2010 — timosin beta-4 venöz ülser çalışması](https://pubmed.ncbi.nlm.nih.gov/20536470/).
- [FDA, Aralık 2024 — AOD-9604 değerlendirme dosyası, s. 20–23](https://www.fda.gov/media/183584/download).
- [Miller ve ark., 2006 — topikal bakır tripeptid karşılaştırması](https://pubmed.ncbi.nlm.nih.gov/16847171/).
- [Lee ve Padgett, 2021 — BPC-157 diz ağrısı dosya incelemesi](https://pubmed.ncbi.nlm.nih.gov/34324435/).

Bu inceleme sistematik derleme değildir. Künye, erişilebilir özet ve resmî değerlendirme dosyası üzerinden iddia-kaynak uyumu kontrol edildi; bütün çalışmaların tam metinlerinin okunmuş olduğu iddia edilmez. Kamuya açık özetle çözülemeyen epitalon popülasyonu/karışımı açık sınırlama olarak yazıldı.

## Gerçek yanıtlar ve onay sınırı

`src/data/article-faqs.ts` değiştirilmedi. Dört mevcut soru ve yanıt korunuyor; aynı veri hem görünür SSS hem FAQPage üretiminde kullanılıyor. “En sık” sıklık iddiası eklenmedi; başlık “Dr. Aksoy'a sorular”. Kayıtlı kullanım yetkisi yeniden istenmedi.

Katkı kaydındaki “benim yanıtlarım” doğrulaması ve aktarım commit'i görüldü. Ham önceki sohbet mesajlarına bu oturumda erişilip satır satır köken doğrulaması yapılmadı; katkı kaydı özgün yanıt metinlerini ayrıca içermiyor. Bu sınır, hekim yanıtı varmış gibi yeni metin üretmek için kullanılmadı.

Dr. Alper Mumcu'nun mevcut notunun sözlü içeriği korundu; yalnızca tek bir toplam kanıt aralığı kaldırıldı. Gövdede yorgunluk için uyku apnesi, demir/B12 eksikliği, tiroid, depresif belirtiler, gece uyanmaları, alkol ve stres; güvenlikte iştah, uyku, saklama ve uygulama yolu başlıkları korundu. Önceki protein/direnç egzersizi vurgusu gövde ve gerçek SSS'de mevcut.

Yeni onayda ayrıca görülmesi gereken iki nokta: mevcut inceleme notundaki “aktif kanser öyküsü” ifadesinin kanser öyküsü/aktif kanser olarak açıklığa kavuşturulması ve “peptid hattı ancak bu yaklaşım kurulduktan sonra konuşulursa anlamlı olur” cümlesinin deneysel kullanım önerisi izlenimi açısından değerlendirilmesi. Bunlar kayıtlı hekim notu olduğundan yeni bir cümle üretip hekim adına yerleştirilmedi. Gövdede bu sınırlar açıklaştırıldı.

Mevcut 12 Ekim onayı eski revizyonun kaydıdır; yeni gövde, kaynaklar ve kanıt kalibrasyonu için yeniden yazar ve bağımsız tıbbi inceleme gerekir. Onay tarihleri ve onay kayıtları yenilenmedi. Eksik SSS yanıtı yok.

## Editoryal kontrol ve tekrar sayımı

Gramer: devrik/dolaylı geçişler sadeleştirildi; başlık soru ekleri ve listeler okundu.
Yerel ifade: “longevity”, “prekürsör”, “GH-secretagogue” okur için Türkçeleştirildi/açıklandı; molekül ve kaynak başlıkları özgün biçimlerini koruyor.
Humanizasyon: bütün özet/gövde/kapanış okundu; aynı hükmü tekrarlayan geçişler yerine uygulama yolu, hasta grubu ve ölçülen sonuç verildi. Gerçek hekim yanıtlarına deneyim veya yeni oran eklenmedi.

Önce: “ipamorelin için ise yayımlanmış veriler yalnızca sıçan ve domuz deneylerine dayanıyor”.
Sonra: “İnsan çalışması da vardır: bağırsak ameliyatı sonrası bağırsak hareketlerinin geri dönmesi araştırılmıştır.” Ardından menopoz kas korunması sınırı açıklanıyor. Okur artık çalışma yokluğu ile hedefe uygun çalışma yokluğunu ayırabilir.

| İddia kalıbı | Önce | Sonra | Gerekçe |
|---|---:|---:|---|
| Menopozda kanıt/fayda sınırı | 5 | 8 | Yeni doğrudan özet ve kaynakla desteklenen ayrı molekül/sonuç sınırları. Her molekülün sınırı başka bir tedavinin belirsizliğiyle birleştirilmedi. |
| GLP-1 kanıtının diğer ürünlere taşınmaması | 6 | 4 | Özet, ilgili bölüm ve bağımsız okunan SSS/güvenlik bağlamı kaldı. |
| Saflık/ürün standardizasyonu | 9 | 5 | Güvenlik bölümü, kontrol listesi ve bağımsız okunan hekim notu/yanıtları. |
| Protein/direnç egzersizi temeli | 6 | 5 | Gövdeyi gerçek yanıtla bağlama; kilo-kas ayrımı; korunan bağımsız SSS/inceleme notu. |

Sayılar `structure-check.mjs --claims` ile aynı sözcüksel kalıpların statik metin aktarımındaki eşleşmeleridir; anlama veya yazarlığa ait puan değildir. Başlık/açıklama, özet, gövde, SSS, hekim notu ve kapanış elle de gözden geçirildi. Alt metin artık tıbbi sonuç taşımıyor. Yinelenen tedavi sıralaması giriş/kapanıştan azaltıldı; molekül listesi özetin kapsam açıklamasında, gerçek hekim notunda ise ayrımın bağlamında kalıyor.

## Doğrulama

- `npm run build:ci`: geçti; TypeScript, compliance, strict makale bütünlüğü, strict templates, encoding/tokens/lexicon/tarih kontrolü, Astro build ve SEO audit. SEO denetimi 160 derlenmiş sayfada geçti.
- CRLF dosyayı koruyan `git -c core.whitespace=cr-at-eol diff --check`: geçti. Manifestte yalnızca hedef makalenin açıklaması/anahtar sözcükleri değişti.
- `editorial-check.mjs`: 0 aday.
- `structure-check.mjs`: çalıştı. Kalan 4 inkâr çerçevesi gerçek SSS yanıtlarında; 8 kısa kapanış farklı bilgi işlevlerinde, gerçek SSS/inceleme notu ve kaynak etiketi dahil. 3 aynı “PubMed kaydı” etiketi bilimsel kaynak listesi bağlamında kaldı. 4 noktalama adayı Evidence bileşeni çıkarılan metin aktarımının artefaktı; derlenmiş HTML'de görülmüyor.
- `check-fidelity.mjs`: exit 1, beklenen `review_changes`. Yeni kaynaklar 12–17, bunların bibliyografik sayıları, yeni 13 ve 16 kişilik çalışma bilgileri ve atıf yerleri elle incelendi. DOI/PMID ve eski kaynak URL'leri korunuyor. Bu çıktı “anlam eşitliği” veya tıbbi onay değildir.
- Astro yardımcılarca doğrudan desteklenmediğinden önce/sonra `.md` statik metin aktarımı kullanıldı; gerçek SSS cevapları ve hekim notu ayrıca eklendi. Kod/props/alt ve kaynak bileşenleri görünür sayfada ayrıca denetlendi.
- `rendered-check.mjs`: canlı eski sayfa ve son derlenmiş HTML üzerinde çalıştı. Prompt alt metni ve uyarı tekrarı adayı giderildi. Kalan 12 `uncited-source` adayı, yazar adı eşleştiren aracın numaralı atıfları tanımamasından: derlenmiş DOM'da 17 kaynağın tamamına gövde içi bağlantı var; kırık kaynak bağlantısı yok.
- Tarayıcı: ilk browser-use bağlantısı çalışmadı; alternatif CUA in-app browser ile canlı ve yerel görünüm incelendi. Masaüstü 1440×1000 ve mobil 390×844 kontrol edildi; yatay taşma yok, görseller yükleniyor, SSS açılıyor. Masaüstünde kapanış 08 ve kaynaklar 09 gözle doğrulandı. Geçici viewport sıfırlandı.
- Tek H1; tek prose sistemi; TOC ve bölüm sırası eşleşiyor; tek görünür SSS, 4 cevap ve FAQPage cevap metinleri birebir aynı. Tüm eski anchor'lar korunuyor. Türkçe `tr-TR`, doğru canonical, `og:type=article`, index/follow, RSS/sitemap yüzeyleri ve iç bağlantılar kontrol edildi.
- Article/MedicalWebPage görseli ile OG/Twitter görseli aynı makale görseli. Byline Senai Aksoy, MedicalWebPage bağımsız reviewer Alper Mumcu. Yayın/inceleme tarihleri geçmiş kayıtları olarak korundu; yeni tıbbi inceleme yapılmış gibi güncellenmedi.

QA çalışma dosyaları: `C:/Users/KC3/AppData/Local/Temp/estranova-peptid-audit-20261012/` (orijinal Astro, önce/sonra metin aktarımı, kalıp JSON'u, yardımcı raporlar, canlı eski HTML ve son build log'u).

## Hasta eğitimi ve ikincil kaynak olarak kullanım

Yazı okurun bir ürün iddiasını molekül, hasta grubu, uygulama yolu, ölçülen sonuç ve güvenlik verisiyle sorgulamasını sağlar; ürün/doz veya kullanım protokolü önermez. Web/AI alıntısında özellikle “insan çalışması var” ile “menopozda hedef sonuç kanıtlı” ayrımı birlikte taşınmalıdır. Hayvan bulgusu, küçük kontrolsüz insan kaydı, öznel memnuniyet veya hormon değişimi tek başına tedavi faydası olarak alıntılanamaz. Yeni revizyon onaylanana kadar yayın hazır sayılmamalıdır.

İlgisiz magnezyum revizyonu ve onay dosyası korunmuştur.


## Revizyona özgü onay ve yayın yetkisi — 12 Ekim 2026

Kullanıcı bu sohbette: “Tıbbi onay tamam, oyuncunun onayı tamam, commit, push ve deploy yapabilirsin.” dedi. Makale/yazar bağlamında bu bildirim, sunulan son revizyonun tıbbi ve yazar/yayın onaylarının tamamlandığı ve scoped commit/push/deploy yetkisinin verildiği şeklinde kaydedildi. Bağımsız inceleyici mevcut Dr. Alper Mumcu; hekim yanıtları ve inceleme notu için yeni söz üretildiği iddia edilmez. Makale SHA-256 yukarıdakiyle aynı; önceki bölümde belirtilen yeniden inceleme kapısı bu kullanıcı bildirimiyle kapandı. Ham onay belgesi ayrıca sunulmadı. Makale metni onaydan sonra değiştirilmedi.
