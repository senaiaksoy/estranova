# Menopozda HRT'nin Avantajları — geniş audit / humanize / fix

Tarih: 20 Ekim 2026. Yazar: Senai Aksoy. Tür: clinical-guide. Durum: yerel revizyon; yeni yazar ve bağımsız tıbbi onay bekliyor. Commit, push ve yayın yapılmadı. Bu dosya denetim kaydıdır; onay formu veya paketi değildir.

## Başlangıç ve onay tabanı

- Başlangıçta izlenen dosyalarda değişiklik yoktu. `git status` yalnız `.pytest_cache` erişim uyarısı verdi.
- Hedef: `src/pages/bilimsel-pencere/yeni-arastirmalar/menopozda-hrt-avantajlari.astro`.
- `article-approvals.ts`: 7 Mayıs 2026 tarihli genel editör/üretim envanteri onayı. Özgün SSS yanıtlarının hekim tarafından verildiğini veya bugünkü revizyonun bağımsız tıbbi onayını belgelemiyor.
- Onay tarihiyle ilişkilendirilebilen tek bir içerik commit'i kayıtlı değil. Tarih tabanı olarak 8 Mayıs öncesindeki son commit `7c013309` ile güncel dosyanın farkı incelendi; **bu commit doğrulanmış hekim onaylı metin diye sunulmadı**. Sonraki 96 ekleme / 68 çıkarma, şema ve metin değişiklikleri var. Güncel başlangıç ayrıca saklandı.
- İşe başlamadan önce orijinal Astro, tüm SSS verisi ve onay tarihinden sonraki diff geçici çalışma klasörüne kopyalandı: `C:/Users/KC3/AppData/Local/Temp/estranova-hrt-20261020-77c02bb5574644089c8e1338cc82f43b/`.
- Kanonik Senai-Wiki stil rehberi, senai-humanize ve TR/anlam/yerel-kontrol/yazara-soru referansları, site kuralları ve Senai yazar profili okundu. Profilin eski öz-inceleme örnekleri yerine güncel bağımsız inceleyen kuralı uygulandı. Profil dosyaları değiştirilmedi.

## Bulgular ve düzeltmeler

| Alan | Önce | Yerel düzeltme |
|---|---|---|
| Kaynak izlenebilirliği | Klinik rehberde tıklanabilir kaynak ve iddiaya bağlı dipnot yok | Yedi kaynak ve ilgili cümlelere numaralı atıf eklendi |
| Özet | Dört paragrafta neredeyse bütün fayda listesi yeniden anlatılıyor | İki paragrafta temel yarar, lokal/sistemik ayrım ve kullanım sınırları |
| Sistemik/lokal ayrımı | Lokal östrojen HRT fayda haritasına katılmış; sistemik sonuçlarla sınır belirsiz | Lokal tedavinin sıcak basması ve kemik koruması sağlamadığı belirtildi; düşük doz lokal tedavi ile rahim koruması ayrıldı |
| Uyku | 4–5/5 toplu etiket ve hekim deneyimi gibi sunulan, kaynağı bulunmayan hasta alıntısı | Başlangıçta vazomotor belirtisi olan gruba bağlı uyku sonucu; 3/5; hasta alıntısı kaldırıldı |
| Kemik | Koruma süresizmiş gibi okunabiliyor | Kullanım sırasında yarar ve bırakıldıktan sonra etkinin azalması; osteoporoz seçenekleri |
| POI/erken menopoz | Tanımlar ve yaş kapsamı belirsiz; bütün uzun dönem koruma için 5/5 | 40 yaş öncesi POI / 40–44 erken menopoz ayrımı; olağan menopoz yaşına kadar yaklaşım; güçlü öneri ile düşük kanıt kesinliği ayrıldı |
| Kalp/biliş | Zamanlama ve olumlu metabolik profil, korunma beklentisini açık bırakıyor | Kalp hastalığı ve demans önleme amacıyla kullanım sınırı; başlama/sürdürme farkı |
| Kilo | Aynı sonuç beş paragrafta dolaylı yarar söylemiyle genişletiliyor | Küçük yağlanma etkisi ile kilo verme tedavisi ayrıldı; varsayımsal uyku→hareket→kilo çıkarımı kaldırıldı |
| Cilt/saç | Saç kalitesi için dolaylı destek; cilt kuruluğu sonuçları genişletilmiş | Cilt ölçümleri klinik gençleşmeden ayrıldı; saç yararı beklentisi kaldırıldı; SSS 5 de aynı yönde düzeltildi |
| Güvenlik | Rahim varlığı ve migren, risk listesinde açıklamasız | Sistemik östrojen/progestojen ayrımı; kanama; meme kanseri; pıhtı kılavuz farkı; auralı migren ve kontrolsüz hipertansiyon |
| Hekim sesi | Kaynağı bulunmayan hasta sözleri ve görüşme sıklığı anlatıları | 28 Eylül kayıtlı gerçek hekim cümlesi kullanıldı; yeni deneyim üretilmedi |
| Gramer/yerel ifade | “avantaj hattı”, “metabolik sürtünme”, “daha nötr zemin”, “cümlenin rengi” | Gövdede somut belirti, amaç ve sınır; uzun cümleler bölündü; başlıklar/anchor'lar korundu |
| Humanizasyon | Her bölümde “daha dürüst cümle”, “daha sakin”, “tablo” kapanışları | Giriş tanım/karar, gövde yarar/sınır, sonuç görüşmeden beklenen açıklık işlevine ayrıldı |
| Teknik | Genel OG görseliyle şema görseli ayrılabiliyor; kaynak/SSS TOC'de yok | Mevcut üst hero görseli OG ve şemaya aynı değerle verildi; kaynaklar ve SSS indekse eklendi; kaynak bölüm numarası 14 olarak sürdü |

Başlık, SEO başlığı, mevcut 13 H2 ve ID'leri korundu. İlk yayın tarihi 6 Mayıs 2026 olarak kaldı; gerçek revizyon tarihi byline ve şemada 20 Ekim 2026. Görsel dosyaları ve hero haritası değiştirilmedi. Manifestte yalnız hedef yazının açıklaması sayfayla eşitlendi.

## Anlam ve kaynak kaydı

1. **NAMS 2022** — https://menopause.org/wp-content/uploads/professional/nams-2022-hormone-therapy-position-statement.pdf . Sistemik/lokal ayrımı, vazomotor yarar, küçük kilo/karın yağı etkisi, saç için araştırma yokluğu, kontrendikasyonlar. Başka kurumdaki eski PDF adresi 404 verdi; birincil kurumun dosyası okundu.
2. **NICE NG23** — https://www.nice.org.uk/guidance/ng23/chapter/Recommendations . Öneriler ve risk tabloları tarama sonucunda okundu; doğrudan ikinci açılış 403 verdi. Kaynakta doğrulanabilen kemik/kırık, lokal östrojen, meme/pıhtı, üç aylık ve yıllık izlem bilgileri kullanıldı. “Tam metin her denemede erişilebildi” iddiası yok.
3. **Cintron ve ark., 2017** — https://pubmed.ncbi.nlm.nih.gov/27515805/ . Sistematik derleme: başlangıçta vazomotor belirti bulunanlarda uyku yararı; orta kesinlik. Özet doğrulandı; tam metin incelemesi olarak sunulmadı. Uyku için 4–5→3 yerel Evidence kalibrasyonu yapıldı.
4. **POI ortak kılavuzu, 2024 / dergi yayını 2025** — https://www.asrm.org/practice-guidance/practice-committee-documents/evidence-based-guideline-premature-ovarian-insufficiency--2024/ . Olağan menopoz yaşına kadar hormon tedavisi; vazomotor yakınma olmasa da yaklaşım; uzun dönem hastalık/ölüm sonucu için güçlü öneri ama düşük kesinlik. Yerel 2/5 etiketi GRADE ölçeğinin birebir sayısal çevirisi değildir. Kemik yoğunluğu kanıtı ile bütün uzun dönem koruma aynı etikete toplanmadı.
5. **ESE 2025** — https://doi.org/10.1093/ejendo/lvaf206 . Öneriler R2.4–2.11, R3.1–3.15; ilk 10 yıl veya 60 yaş altı; başlangıç/sürdürme ayrımı; önleme endikasyonları; özel durumlar. POI istisnası gövde ve özette ayrı tutuldu. Pıhtıda NAMS ile seçilmiş durumlarda transdermal tedaviye izin veren ESE arasındaki fark saklanmadı.
6. **Cilt sistematik derlemesi, 2023** — https://e-jmm.org/DOIx.php?id=10.6118/jmm.22042 . Cilt ölçümleri ve çalışma farklılıkları; belirgin gençleşme veya kuruluk düzelmesi garantisine çevrilmedi.
7. **BMS, Migraine and HRT, 2022** — https://thebms.org.uk/wp-content/uploads/2022/12/06-BMS-TfC-Migraine-and-HRT-NOV2022-A.pdf . Aura otomatik kontrendikasyon değildir; ESE'nin ciltten uygulama önerisiyle birlikte kullanıldı.

Yeni sayı/oran üretilmedi. Netleştirilen 40–44 yaş, ilk 10 yıl ve üç aylık kontrol kaynaklara bağlıdır. “Gösterilmemiş” ile “etkisiz” ayrımı korundu. Tıbbi doğrulama kaynak denetimidir; bağımsız hekim onayı değildir.

## Gerçek hekim sözü ve korunmuş inceleme

Girişteki cümle, `icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-28_hormon-tedavisi-karar-rehberi.json` içindeki `bodyContributions` ikinci yanıttan alınmıştır. Gerçek yanıt tarihi **28 Eylül 2026**; yeni yanıt tarihi yazılmadı. Özgün yanıtın ikinci cümlesi aynen kullanıldı:

> Önce sizi neyin zorladığını konuşalım; sonra seçeneklerin yararlarını ve risklerini birlikte değerlendirip size uygun kararı verelim.

Özgün kayıt değiştirilmedi. Bu kullanım yeni bütün-makale veya bağımsız tıbbi onay sayılmadı. H0 seçildi; ilaç/risk konusu olduğu için mizah ve yeni anekdot eklenmedi.

Dr. Alper Mumcu adına mevcut Bilimsel Editör Notu **birebir korundu**. Başına bugünkü revizyonun bağımsız inceleme beklediği ve notun önceki sürüme ait olduğu açıkça eklendi. Eski nottaki genel 3–5/5 satırı bugünkü tüm sonuçların toplu kanıt notu olarak kabul edilmedi. Onay kaydına yeni onay girilmedi.

## SSS — ilk turda açık kalan iş

Bu bölüm yanıtlar gelmeden önceki denetim durumudur. Güncel durum aşağıdaki ek turda kayıtlıdır.

Mevcut beş sorunun hekimden alınmış özgün yanıt kaydı hedef yazı için bulunamadı. Başka yazıdaki farklı karar soruları bu soruların yanıtı yerine geçirilmedi. Beş soru iki grup hâlinde kullanıcıya yöneltildi. Yanıt tarihi henüz yok; aşağıdaki tarih yalnız soru sorma tarihidir: **20 Ekim 2026**.

İlk grup:

1. HRT’nin en belirgin faydasını hastanıza nasıl anlatıyorsunuz?
2. Sıcak basması olmayan bir kadında HRT’yi hangi amaçlarla değerlendiriyorsunuz?
3. Kalp ve metabolizma için HRT’den ne beklenebileceğini nasıl açıklıyorsunuz?

İkinci grup:

4. Kemik sağlığı için HRT’nin yararını ve tedavi bırakılınca ne olacağını nasıl anlatıyorsunuz?
5. HRT’yi kilo, cilt, saç veya gençleşme beklentisiyle isteyen bir kadına ne söylüyorsunuz?

Yanıtlar gelmediği için “Dr. Aksoy'a sorular” dönüşümü yapılmadı. Mevcut SSS silinmedi; yalnız 5. yanıttaki doğrulanamayan saç faydası iddiası genel editoryal cevap olarak düzeltildi. Yeni cevaplar yazılmadı. Görünür SSS ve FAQPage aynı `articleFaqs[pathname]` verisinden geliyor.

## İddia tekrar sayımı

Elle sayımda bir paragraf/bileşen içindeki aynı sonuç bir yer sayıldı; başlık, anahtar kelime ve kaynak adındaki sözcükler sonuç sayılmadı. SSS ve korunmuş editör notu dahil. `structure-check --claims` ayrıca daha geniş, sözcük tabanlı tarama yaptı; o sayıların doğrudan anlam tekrarı olmadığı ayrıca değerlendirildi.

| Sonuç | Önce | Sonra | Kalan yerler ve gerekçe |
|---|---:|---:|---|
| Kemik kaybı/kırık için yarar | 6 | 5 | Özet; kemik bölümü; bağımsız okunan SSS 2 ve 4; korunmuş editör notu. Tedavinin kesilmesi ve farklı amaçlar ek bağlamdır |
| HRT kilo verme tedavisi değildir | 4 | 3 | Özet; kilo bölümünün lede'si; bağımsız SSS 5. Gövde içi ikinci/üçüncü tekrar kaldırıldı |
| Saç kalitesine yarar olabilir beklentisi | 5 | 0 | Özet, cilt/saç bölümündeki üç paragraf ve SSS 5'teki olumlu beklenti çıkarıldı; kanıt yetersizliği kendi bölümünde ve SSS'de kaldı |

Saç satırındaki azalma yalnız üslup değişikliği değildir; doğrulanmış olgusal düzeltmedir. Öneri/güvenlik tekrarları sırf sayıyı azaltmak için silinmedi.

## Yerel kontroller ve sınırlar

- `editorial-check`, `structure-check --claims`, `check-fidelity` çalıştı. Astro doğrudan desteklenmediği için özet/gövde/kaynaklar açıkça Markdown'a çıkarıldı; dinamik SSS, alt metinler, metadata ve hekim notu ayrıca incelendi. `check-fidelity` “review_changes” sonucu verdi: yeni kaynak/dipnotlar, yaş/süre açıklamaları ve Evidence kalibrasyonları beklenen farklardır; anlam eşitliği veya onay sonucu olarak sunulmadı.
- Üç ayrı elle okuma: gramer/sentaks, Türkçe ifade/terim açıklaması, tekrar/bölüm işlevi ve hekim sesi.
- Yapı taramasındaki inkâr ailesi: ciltte ara ölçüm→klinik sonuç ayrımı, yalnız cilt için kullanım sınırı, migrenin otomatik engel olmaması. Farklı güvenlik/kanıt işlevleri nedeniyle kaldı. Kısa kapanış adayları içerik veya kaynağa yönlendirme; tekrar eden aforizma sayılmadı. Noktadan önce boşluk adayları Markdown'a aktarımda bileşen sınırlarından oluştu; derlenmiş sayfada aynı bulgu yok.
- `rendered-check`: kaynakların kurum adıyla gövdede anılmaması `uncited-source` uyarısı verdi; Estranova'nın numaralı atıf rejiminde geçersiz. Yedi kaynağın tamamının dipnot hedefi ayrıca doğrulandı. Bekleme cümlesi ve eski inceleme notundaki genel ifadeler `review-anonymous` adayları üretti; gerçek görünür inceleyen ve şema **Dr. Alper Mumcu**, uydurulmuş yeni inceleyen/tarih yok. Bu sezgisel uyarıları susturmak için hekim notu değiştirilmedi.
- Asıl depoda `compliance` 179 dosya, `articles:dates` 67 makale ve `git diff --check` geçti.
- Asıl `build:ci` / build engeli: `src/data/article-approvals.ts:192` içindeki mevcut `2026'da` kaçışsız kesme işareti. Aynı hata `git show HEAD` içinde de var. Asıl dosya değiştirilmedi.
- Geçici önizlemede mevcut kaynak ağacı ve son hedef değişiklikleri kopyalandı; yalnız bu ilgisiz kesme işareti geçici kopyada kaçışlandı. Bu kopyada tip kontrolü, template denetimi, **139 sayfalık build** ve **160 çıktı için SEO denetimi** geçti. Bu sonuç asıl deponun `build:ci` başarısı değildir.
- Kaynak denetimi hedef HRT sayfası için temiz. Site genelinde üç başka klinik yazıda kaynak eksikliği ve bir eski onay/manifest uyarısı sürüyor; kapsam dışı dosyalar değiştirilmedi.
- HTML: **1 H1, 1 SSS yüzeyi, 5/5 soru-cevap/FAQPage eşleşmesi, 7 kaynak, kırık anchor yok**. Özgün 13 H2/ID ve hekim notu birebir korundu. İlk yayın/son revizyon tarihleri ve OG/Article/MedicalWebPage görselleri uyumlu. Yazar canonical Person kimliği `https://senaiaksoy.net/#person`.
- Tarayıcı: yerel derleme açıldı; özet ve gövde görüldü; 891 px mevcut pencere genişliğinde belge 876 px, yatay taşma ve bozuk görsel yok. **390 px mobil veya geniş masaüstü testi yapılmış sayılmadı.**
- Yayındaki URL web aracıyla okunabildi ve önceki içerik görüldü. Ayrı cache-bypass ham HTML isteği 403 verdi; güncel üretim HTML'inin kapsamlı yeniden doğrulandığı veya değişikliklerin yayına çıktığı iddia edilmedi.

## Kullanım değerlendirmesi / sonraki adım

Hasta eğitimi için güçlü taraf: belirti, lokal/sistemik tedavi, kemik yararı ve hedefe göre karar ayrımı. Genel amaçlı ikincil alıntıda bu sınırlar ve dipnotlar birlikte korunmalı; kişiye tedavi önerisi veya POI'deki bütün uzun dönem sonuçlara yüksek kesinlik iddiası olarak kullanılmamalı. Yeni SSS yanıtları, yazar onayı ve bağımsız tıbbi onay olmadan revizyon yayıma hazır değildir.


## Ek tur — beş gerçek SSS yanıtı alındı (20 Ekim 2026)

- Kullanıcı ilk üç ve kalan iki soruya doğrudan yazılı yanıt verdi. Beş yanıtın tamamı `icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-10-20_menopozda-hrt-avantajlari.json` kaydında `originalAnswer` alanında korunuyor. Gerçek yanıt tarihi 20 Ekim 2026; bekleyen soru kalmadı.
- `localEditedText` ile özgün yanıt arasında sözcük değişikliği yok. Yalnız paragraf araları düzenlendi; hiçbir cümle kısaltılmadı, yeni gerekçe, oran veya tavsiye eklenmedi. Görünür metin aynı değerlerden `article-faqs.ts` hedefine aktarıldı.
- SSS başlığı **Dr. Aksoy'a sorular** oldu. Soruların sıklığı ayrıca doğrulanmadığından “en sık” nitelemesi eklenmedi. SSS anchor'ı korundu; TOC etiketi eşitlendi. Okuma süresi, tam yanıtlarla yaklaşık 2910 sözcük / 200 sözcük-dakika üzerinden 15 dakikaya çıkarıldı.
- Beş yanıt [1], [2], [4], [5] ve [6] kaynaklarıyla karşılaştırıldı. Menopause Society'nin https://menopause.org/patient-education/menopause-topics/hormone-therapy sayfasından vazomotor belirtilerde “en etkili” ifadesi ve zorunlu kilo artışı olmadığı ayrıca doğrulandı. POI ortak kılavuzunun ağırlık taşıma/direnç egzersizi, kalsiyum ve gerektiğinde D vitamini önerileri yeniden kontrol edildi. Hekimin 52 yaş ve menopozdan 15 yıl sonra örnekleri otomatik tedavi eşiklerine çevrilmedi. Pıhtı riski yüksekliği ile geçirilmiş pıhtı eşitlenmedi.
- İlk tur tekrar tablosu tarihsel olarak korundu. Beş gerçek yanıt sonrasında **kemik yararı 6→6**: SSS 1'deki özgün hekim cümlesi ek bir yer oluşturuyor; bağımsız okunan gerçek yanıt korunuyor. **Zayıflama tedavisi değildir 4→3**, **saç kalitesine yarar beklentisi 5→0** sonuçları değişmedi. Hekimin cümleleri tekrar sayısını azaltmak için kısaltılmadı.
- SSS dönüşümü tamamlandı; yeni bütün-makale yazar onayı ve bağımsız tıbbi onay bekliyor. Yanıt vermek, Dr. Alper Mumcu'nun bu sürümü incelediği veya yayın yetkisi verildiği anlamına gelmiyor. Eski inceleme notu ve onay kayıtları değiştirilmedi. Commit/push/deploy yok.

Ek tur doğrulaması: 5/5 özgün yanıt = kayıtlı görünür metin = derlenmiş SSS = FAQPage (yalnız boşluk/paragraf farkları nötrlendi); tek H1/SSS ve kırık anchor yok. Asıl depoda compliance/date/diff kontrolleri geçti. Mevcut ilgisiz kesme işareti yalnız geçici kopyada düzeltilmiş durumdayken tip kontrolü, 139 sayfa build ve 160 çıktı SEO denetimi yeniden geçti. Bu sonuç asıl deponun build hatasını kapatmaz.


## İkinci düzeltme turu — tekrar geniş audit sonrası (20 Ekim 2026)

Kullanıcının “düzelt” talimatıyla son denetimin beş bulgusu giderildi:

- Kaynak dosyada gerileyen SSS adı “Dr. Aksoy'a sorular” ve okuma süresi 15 dakika olarak geri getirildi. Güncel kaynak yeniden derlendi; eski dist sonucu doğrulama yerine kullanılmadı.
- NAMS 2022'nin sistemik HRT kullanımına engel saydığı hastalık öyküleri açıklandı. Önceki toplardamar pıhtısı için ESE 2025'in bireysel değerlendirme sonrası seçilmiş olgularda düşük doz ciltten östrojen yaklaşımı ayrıca belirtildi; sıradan risk faktörleriyle eşitlenmedi. “Kontrendike” sözcüğü kaldırıldı.
- Cilt ölçümleri ve çalışma sınırlılıkları [6] ile; yalnız gençleşme amacıyla tedavi başlanmaması [5] ile eşleştirildi.
- Önceki hekim notu sözcüğü sözcüğüne korundu. 3–5/5 aralığının önceki sürüme ait olduğu ve güncel sonuçların 2/5 dahil ayrı değerlendirildiği notun dışında açıklandı. Üst bölümde de yeni revizyonun inceleme beklediği belirtildi.
- Bölüm başlıkları doğallaştırıldı; soru H2 sayısı bire indirildi. Bütün anchor'lar korundu, TOC aynı başlıklara eşitlendi; osteoporoz terimi açıklandı.

Doğrulama: Asıl depoda `npm run build:ci` geçti (139 sayfa; SEO denetimi 160 çıktı). Lint, compliance, strict/template bütünlük, kodlama, renk ve tarih kontrolleri bu zincirde geçti. Önceden bildirilen ilgisiz build engelleri mevcut çalışma ağacında artık yok; bu turda ilgili dosyalar değiştirilmedi. İlgisiz bir approval/manifest ve bir editoryal sözcük uyarısı sürüyor.

Güncel derlenmiş HTML'de 5/5 özgün yanıt = görünür SSS = FAQPage; 1 H1, 7 kaynak, bozuk anchor yok, TOC/H2 uyumu ve 15 dakika doğrulandı. Korunan hekim notu düzeltme öncesi snapshot ile birebir. Bu turda yeni tarayıcı/390 px mobil kontrolü yapılmadı.

Hedef sayfa ve bu turdaki kayıtların `git diff --check` denetimi temiz. Yeni yazar/bağımsız tıbbi onay kaydedilmedi. Commit, push, deploy ve yayın yapılmadı.

## Üçüncü tur — geniş audit / humanize / fix (20 Ekim 2026)

Önceki commit edilmemiş revizyon (`09:02`) ve `HEAD` (`fe58fcad` / `7c013309`) birlikte denetlenerek kalan kural ve ritim bulguları düzeltildi:

- **Gövdede uluslararası kuruluş adı yasağı (`CLAUDE.md` §4 & §6):** `#herkes-icin-ayni-degil` bölümünde anlatı gövdesine açık adıyla yazılmış olan “Kuzey Amerika Menopoz Derneği'nin 2022 bildirisi” ve “Avrupa Endokrinoloji Derneği'nin 2025 kılavuzu” ifadeleri, tarih, klinik kapsam ve `[1]` / `[5]` dipnot bağları korunarak “2022 tarihli uluslararası menopoz kılavuzu” ve “2025 tarihli güncel endokrinoloji kılavuzu” biçiminde anonimleştirildi; kurum adları yalnız `#kaynaklar` listesinde tutuldu.
- **Her `##` bölümünde `siz/biz` okur bağı (`CLAUDE.md` §3 #6):** Üçüncü tekil ders kitabı dilinde kalmış olan `#kalp-ve-metabolizma` bölümüne doğrudan okur bağı eklendi (`belirtilerinizi`, `başlama zamanınız`, `damar sağlığınız`, `60 yaşın altındaysanız`, `tansiyonunuz`).
- **Sıcaklık katmanı (`CLAUDE.md` §3 #2, #3, #4, #5):**
  - `#neden-yeniden-konusuluyor` içine doğrudan teselli anı (`“İçiniz rahat olsun…”`) ve adı konmuş duygu (`çekince`, `korku`) eklendi; 28 Eylül 2026 tarihli kayıtlı hekim cümlesi korundu, yeni birinci tekil hekim deneyimi uydurulmadı.
  - `#urogenital-konfor` içinde genitoüriner yakınmaları dile getirirken yaşanan `mahcubiyet` duygusu adlandırıldı.
  - `#kemik-sagligi` içinde `≤6` kelimelik vurgu cümlesi (`“Bu yararı günlük hayatınızda hissetmezsiniz.”`) korundu; bölüm sonundaki kopuk kısa hüküm cümlesi (`“HRT kemik sağlığı için tek seçenek değildir.”`) paragraf akışına yedirilerek `short-closer` tekrarı azaltıldı.
- **Ritim, kesik cümle dizisi ve inkâr kalıbı (`structure-check.mjs`):**
  - `#cilt-ve-sac`, `#yaslanma-karsiti-soylem` ve `#gorusmede-sorular` bölümlerindeki mekanik kısa cümle dizileri doğal akışla birleştirildi; `#cilt-ve-sac` içindeki `anlamına gelmez` inkâr kalıbı doğrudan ifadeye (`beklentisini desteklemez`) dönüştürüldü.
  - Gövde içindeki tüm `short-closer` adayları temizlendi (kalan 3 aday `#kaynaklar` listesindeki bibliyografik satır sonlarıdır).
- **Kayıtlı hekim yanıtları ve inceleme notu:** `src/data/article-faqs.ts` içindeki 5 gerçek Dr. Aksoy yanıtı (`2026-10-20_menopozda-hrt-avantajlari.json`) ve `ArticleEditorNote` içindeki Dr. Alper Mumcu notu sözcüğü sözcüğüne korundu.
- **Doğrulama:** `check-fidelity.mjs` (`09:02` revizyonuna karşı `no_tracked_changes`: sayı, birim, zaman, atıf ve link farkı 0), `editorial-check.mjs` (0 aday), `structure-check.mjs --claims`, `git diff --check` (0 uyarı) ve `npm run build:ci` + `rendered-check.mjs` çalıştırıldı. Yeni yazar onayı ve Dr. Alper Mumcu'nun güncel metin için bağımsız tıbbi incelemesi açık iş olarak bekliyor; commit/push/deploy yok.


## Yayın onayı — 20 Ekim 2026

KC bu sohbette “tıbbi inceleme tamam commit push yayınla” dedi. Son düzeltme sürümü için tıbbi inceleme tamamlandı bildirimi ve doğrudan yazar/editör, commit, push ve yayın yetkisi kaydedildi. Mevcut bağımsız incelemeci Dr. Alper Mumcu; ayrıca yazılı belge repoda yok. Önceki bekleme kayıtları tarihsel bilgidir. Özgün beş yanıt ve hekim notu değiştirilmeden görünür bekleme ibareleri kapatıldı.
