# İkinci kontrol ve düzeltme — 14 Ekim 2026

Talep: `Tekrar kontrol et, fix.` Yerel düzeltmeler tamamlandı; yeni yazar/tıbbi onay ve yayın yetkisi verilmiş değildir. Commit/push/deploy yapılmadı.

## Başlangıç

Önceki turdaki `site-kaynak.astro` ile `src/pages/beden-yakinlik/menopoz-sonrasi-goguslerdeki-degisim.astro` SHA-256 değerleri aynıydı: `5C0D963E13F9038B84F25AABCA7461E3E29FC0B270E03173FF8443723845FDF7`. Hedef makalede başka bir oturumun değişikliği bulunmadı. Mevcut ilgisiz yüz yazısı/taslak/helper dosyaları korunmuştur.

Bu klasörde `onceki-surum.astro` ilk düzeltmenin son hali, `site-kaynak.astro` ikinci düzeltmenin son halidir. Üst klasördeki `site-kaynak.astro` de son sürümle eşitlendi. İlk turun özgün başlangıcı ve onay tabanı korunmuştur.

Kanonik rehber ve skill bu sohbet içinde daha önce tam okunmuştu; aynı kurallar ve Çağrı Sade byline profili uygulandı. Gramer, Türkçede doğal ifade ve metin ritmi yeniden ayrı okumalarda kontrol edildi.

## Kalan bulgular ve düzeltmeler

- **Görüntüleme ile kanser güvenliği:** İlk turdaki `Güncel araştırmalar ... genel olarak bozduğunu göstermiyor` fazla genişti. 2026 derlemesine açıkça bağlandı. Çalışmalarda kanser saptamayı bozduğuna dair kanıt bildirilmemesi ile uzun vadeli kanser riskinin değişmediğinin kanıtlanması ayrıldı. Derleme kanserle ilgili sonuçları ortak risk hesabında birleştirmiyor; menopoz sonrasına özgü sonuç vermiyor. Kaynak: https://doi.org/10.1093/asj/sjag187 (Gentile ve Sterodimas; 5 Eylül 2026 yayın, 22 Eylül dizgi/düzeltme). Makaledeki kanıt etiketi korunarak ilgili sınıra da bağlandı.
- **Sahte üçüncü seçenek:** `Kendi dokusuyla şekillendirme` maddesi aynı dikleştirmeyi üçüncü bağımsız cerrahi yöntemmiş gibi tekrarlıyordu. İki maddeye indirildi: dikleştirme, gerekiyorsa hacim için implant. Protezsiz uygulama koşulu implant maddesine taşındı. Küçültmenin ayrı bir amaç olduğu bilgisi kaybolmadı.
- **Egzersiz atfı:** Yaşlanma metni doğrudan kas anatomisi kaynağı değildi. Mevcut NCI rehberinin anatomi sayfası ve ASPS'nin cerrahi tanımıyla ilişki kuruldu. Göğüs kasını çalıştırmanın cilt çıkarma/doku konumlandırmayla aynı işlem olmadığı açıklandı; bu açıklama bir egzersiz RCT'si sonucu gibi sunulmadı. Aynı bölümdeki gereksiz rahatlık/yarar tekrarları azaltıldı; sütyen, kilo dengesi, kozmetik vaat sınırı ve SSS korundu.
- **İçindekiler:** SSS ve kaynaklara `numbered: false` verildi. Böylece gövdedeki sekiz numaralı bölümle TOC sayacı hizalandı. Ortak bileşen değiştirilmedi.
- **Başlık:** İlk turda eklenen güvenlik H2'si `Muayene Gerektiren Değişimler` oldu; mevcut `degerlendirme` anchor'ı korunarak soru biçimindeki gövde başlığı sayısı bire indi. Önceden onaylı başlıklara dokunulmadı.
- **Akıntı güvenlik sınırı:** Yalnız kanlı akıntıdan söz etmek, kendiliğinden gelen diğer yeni akıntıları önemsiz gösterebilirdi. NCI rehberine uygun olarak kendiliğinden gelen akıntı, özellikle kanlıysa, değerlendirme nedeni olarak netleştirildi. Önceki kitle/cilt/şekil/meme başı uyarıları korundu.
- **Dil:** Okurun mutlaka çekindiğini varsayan cümle değiştirildi. Kopya karar cümleleri azaltıldı. SSS girişine mevcut yaş sorusunu karşılamak için `yaş` eklendi. Yeni kişisel hekim deneyimi veya hasta alıntısı üretilmedi; yağ transferine ait kayıtlı kişisel tercih cümlesi değiştirilmedi. SSS'nin dört yanıtı bu turda değişmedi.

## Anlam ve tekrar denetimi

| Ana sonuç | İlk düzeltmede bağımsız yüzey | İkinci düzeltmede bağımsız yüzey | Gerekçe |
|---|---:|---:|---|
| Değişim ameliyat zorunluluğu yaratmaz | 2 | 2 | Özet ve kişisel karar kapanışı |
| Egzersiz cerrahi dikleştirmeyle aynı değildir | 2 | 2 | Ana bölüm ve bağımsız SSS |
| Yağ transferi sonrası ek inceleme/biyopsi gerekebilir | 2 | 2 | Ana bölüm ve bağımsız SSS |
| Dikleştirme için protez otomatik şart değildir | 2 | 2 | Cerrahi seçenek bölümü ve bağımsız SSS |

Yüzey sayısı, aynı bölüm içindeki ifade sayısı değildir. Üçüncü cerrahi madde kaldırılarak aynı bölümdeki gereksiz tekrar azaltıldı. Düşünme ve muayeneye hazırlık soruları yanıt tekrarı sayılmadı. Spor ve kozmetik bakım farklı yöntemler olduğu için bunların ayrı sınır cümleleri korundu.

`check-fidelity` hem son kayıtlı onay tabanı hem önceki turla karşılaştırıldı. İkinci tur farkları: anatomide [1] yerine [2], silinen tekrarın [3] atfı ve derlemenin gövdede açık yazılan 2026 yılı. Yedi bilimsel URL korunmuştur; klinik doz/oran/takvim eklenmedi. Güvenlik ve kesinlik değişiklikleri yukarıda ayrı listelendi. Tarih, yazar, inceleyen, onay, slug ve görsel dosyaları değiştirilmedi.

## Güncel doğrulama

- Build geçti; SEO audit 160 HTML sayfasında geçti. Compliance ve template/yayın bütünlüğü geçti. Src TS/TSX kontrolü geçti. `git diff --check` temiz.
- Tam `build:ci` yine lint aşamasında `article-drafts/kas-iskelet-preview2/src/data/data/` ve `src/utils/utils/` altındaki yedi bozuk import nedeniyle durdu. İlgisiz taslak veya tsconfig değiştirilmedi. Tam CI başarısı iddia edilmez.
- Editorial check: 0 aday / 67 blok. Markdown çıkarımı H2 ve kaynak linklerini koruyor; önceki .txt çıkarımındaki tek bölüm sayımı sınırlaması giderildi. Structure adayları dokuz kısa kapanış ve dört iddia kümesi. Kısa cümleler farklı roller taşıyor; kaynak künyesindeki kısa açıklama da bu sayıya dahil. Kaynak/SSS/klinik güvenlik tekrarı yukarıdaki gerekçelerle korunmuştur. Yazarın kısa paragraf imzası mekanik biçimde uzatılmadı.
- Rendered check: yalnız numaralı #kaynak atıflarını kaynak adı olarak tanımayan `uncited-source` aday ailesi var. Yedi kaynak gövdedeki ilgili numaraya bağlı. Diğer rendered aday yok.
- Yerel tarayıcı: tek H1, dört SSS ve FAQPage ile 4/4 birebir soru-cevap eşleşmesi; sıfır kırık anchor; iki yüklenen görsel. SSS/kaynaklar TOC'de numarasız. Masaüstü ve 390px mobilde yatay taşma yok.
- Canlı sayfa bu turda önbellek atlama isteğiyle **HTTP 200** döndü ve ayrı kaydedildi. Canlıda `Muayene odamda kadınların...` açılışı ve `daha küçük ama daha dik ve konforlu` sonucu hâlâ var. Yeni güvenlik başlığı ve Gentile/Sterodimas kaynakçası yok. Canlı sayfa yerel revizyon değildir. İlk turdaki erişim engeli bu tur için geçerli değildir; canlı içerik değiştirilmedi.

## Açık işler

Çağrı Sade yazar onayı ve bağımsız tıbbi inceleme hâlâ bekleniyor. Özgün hekim kaynak DOCX/yanıt kaydı bu turda da bulunmadı; önceki yayın onayı bu revizyonu kapsamıyor. Bu durum yerel düzeltmelerin tamamlanmasını engellemedi; yayın onayı olarak sunulmadı. Tıbbi hasta eğitimi/AI alıntısında kanser saptama ile uzun vadeli kanser riski arasındaki yeni ayrım birlikte korunmalıdır.
