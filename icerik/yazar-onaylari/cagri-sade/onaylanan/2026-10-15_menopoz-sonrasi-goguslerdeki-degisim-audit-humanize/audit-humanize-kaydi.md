# Menopoz sonrası göğüslerdeki değişim — 14 Ekim 2026 revizyonu

Güncel ikinci kontrol: [İkinci kontrol ve düzeltme notu](ikinci-kontrol/ikinci-kontrol-notu.md). Aşağıdaki kayıt ilk turu anlatır; güncel metin, doğrulama ve canlı karşılaştırması için ikinci not esas alınır.

Durum: yerel düzeltme ve QA tamamlandı; yeni Çağrı Sade yazar onayı ve bağımsız tıbbi inceleme bekleniyor. Commit, push, deploy ve yayın yapılmadı. Önceki onay kaydı ve tarihler değiştirilmedi.

## Başlangıç ve yetki

- Talep: `menopoz-sonrasi-goguslerdeki-degisim audit humanize fix`; devam talimatıyla sürdürüldü.
- Başlangıç çalışma ağacı temizdi. İş sonunda görünen `icerik/taslaklar/yuz-mudahalesi-olcu-sorusu.astro` bu çalışmanın dosyası değildir; dokunulmadı.
- `src/data/article-approvals.ts` hedefte 29 Temmuz 2026 KC editör onayını kaydediyor. İçerik başlangıç commit'i `625857e0`; sonraki `f96fa86b` farkı yalnız makale türü ve byline türü eklemeleridir. Sonradan yapılmış gövde revizyonu bulunmadı.
- `onay-tabani.astro` Git tabanı; `onceki-surum.astro` bu turun başlangıcı; `onceki-sss.ts` başlangıç SSS verisi; `site-kaynak.astro` yeni yerel revizyon.
- Özgün Çağrı kaynak DOCX'i veya bu yazının ayrı özgün soru-cevap kaydı erişilen makale/yazar kayıtlarında bulunmadı. Yayın onayı, bütün alıntı ve klinik gözlemlerin özgün hekim yanıtı olduğunu kanıtlamaz. Yeni hasta anlatısı eklenmedi. Eski metindeki kesin geçmiş deneyim beyanları yeni kişisel hatıralarla genişletilmedi.
- Kanonik rehber, senai-humanize/TR/anlam/yerel kontrol kaynakları, CLAUDE.md, makale türleri, Çağrı hot/profile ve article-log okundu. Bu projede ayrı glossary.json / banned-terms.tr.md bulunmadı; CLAUDE.md ve config/editorial-lexicon.json uygulandı. H0: cerrahi, beden görünümü ve güvenlikte mizah kullanılmadı.

## Bulgular ve yapılan düzeltmeler

1. **Kaynak izi:** clinical-guide olmasına rağmen kaynakça yoktu. Yedi doğrulanmış kaynak ve ilgili cümlelerden numaralı bağlantılar eklendi. Etiketler çalışma tasarımının yerini almıyor.
2. **Güvenlik:** yeni kitle, tek taraflı değişim, cilt çekintisi, meme başı değişikliği ve kanlı akıntının değerlendirilmesi eksikti. NCI kaynaklı bölüm eklendi; rutin tarama ile belirti araştırması ayrıldı. Genel tarama aralığı veya herkes için MR önerisi üretilmedi.
3. **Dikleştirme:** protezsiz dikleştirmeden mutlaka daha küçük ve daha konforlu meme elde edileceği izlenimi düzeltildi. Dikleştirme ve küçültme ayrı amaçlardır; protez kararı yalnız istek değil doku ve sağlık durumu da içerir.
4. **Risk dengesi:** ameliyat izi, kanama, enfeksiyon, iyileşme sorunu, asimetri, his değişikliği, anestezi/pıhtı ve yeniden girişim; implant kapsülü, yırtılma, ileride girişim ve nadir implant ilişkili kanser bildirimleri eklendi. Sonuç vaadi kaldırıldı.
5. **Yağ transferi:** `Bu seçeneği genellikle tavsiye etmiyorum` korunarak kişisel görüş ile genel kanıt ayrıldı. Kalsifikasyon/kist ve gerektiğinde ek inceleme bilgisi korundu. 2026 sistematik derlemesinin çoğunlukla gözlemsel olduğu ve menopoz sonrasına özgü güvenlik sonucu vermediği açıklandı. Kanser saptamayı bozduğu genellemesi yapılmadı; kanıt etiketi 4 yerine 3 olarak sınırlandırıldı.
6. **Anatomi:** memede hiçbir kas lifi yok şeklindeki mutlak ifade yerine, bez/yağ dokusu ile alttaki göğüs kasları ayrıldı. Cooper bağları/kolajen mekanizması ve meme altı kıvrımının zorunlu aşağı kayması gibi kaynaklandırılmamış ayrıntılar sadeleştirildi.
7. **Gramer:** isim zincirleri, çok uzun cümleler, `Yaşla birlikte ... durumudur` gibi ara revizyon hatası temizlendi. Son metin yeniden okundu.
8. **Yerel ifade:** `protez entegrasyonu`, `konfor beklentileri ekseninde kişiselleştirilmelidir`, `bilimsel olarak kabul görmüş yaklaşımlar devreye girer` gibi yapay ifadeler somut seçeneklerle değiştirildi.
9. **Humanizasyon:** ayna/sütyen gözlemi doğrudan okura bağlandı; ben-anlatımı iki karar noktasında kaldı. Sözü hastaya aitmiş gibi sunan alıntılar yerine dört düşünme sorusu `<em>` ile yazıldı; HTML'de görünen yıldızlar kaldırıldı. Soyut ve normatif menopoz güzellemeleri/aforizma kapanışı kaldırıldı. Mevcut H2'ler ve anchor'lar korundu; bir güvenlik bölümü eklendi.
10. **Görünür yüzey:** Kısa Klinik Yanıt, meta açıklama ve RSS manifesti hizalandı; alt metin kısaltıldı. Üst hero ve iki görsel dosyası korundu. Boş ArticleDisclaimer gerçek uyarıyla dolduruldu. JSON-LD görsel URL'sindeki çift eğik çizgi düzeltildi. Kaynak panelinde ikinci `01` sayacı oluşması editorial modla önlendi.

Örnek: `daha küçük ama daha dik ve konforlu göğüsler elde edilir` → `Bu işlem memeyi mutlaka küçültmez; belirgin küçültme ayrı bir cerrahi hedeftir.` Okur artık dikleştirme ile küçültmeyi aynı sonuç olarak okumuyor.

## Anlam ve tekrar kontrolü

Gramer, Türkçede doğal ifade ve bütün metin ritmi ayrı okumalarda kontrol edildi. Başlık, özet, gövde, dört SSS, kaynaklar, alt metin, bilimsel editör notu ve şema kapsama dahildir.

| Sonuç | Önce bağımsız anlatım yeri | Sonra bağımsız anlatım yeri | Kalan tekrarın işlevi |
|---|---:|---:|---|
| Görünüm değişimi ameliyat zorunluluğu yaratmaz | 3 | 2 | Özet ve karar kapanışı |
| Egzersiz anatomik sarkmayı dikleştirme gibi değiştirmez | 3 | 2 | Ana bölüm ve bağımsız okunan SSS |
| Yağ transferi sonrasında ek inceleme/biyopsi gerekebilir | 2 | 2 | Ana bölüm ve bağımsız okunan SSS |
| Dikleştirmede protez otomatik gerekli değildir | 2 | 2 | Seçenek ayrımı ve bağımsız SSS |

Bu tablo elle anlam sayımıdır; betik eşleşmesi değildir. Betik aynı paragrafta birden fazla sözcük eşleşmesini ve soru cümlesini de sayar. Protez soruları yanıt tekrarı sayılmadı; bir soru işlem amacı, diğeri muayene hazırlığıdır. Kısa kapanışlar farklı işleri görüyor (mahcubiyet, sınır, risk, soru hazırlığı); Çağrı'nın kısa paragraf imzası nedeniyle kalan sekiz aday korundu. Yeni inkâr kalıbı yığını azaltıldı.

Fidelity: farklar yeni kaynak numaraları ve 2026 kaynak yılıdır; yeni doz, oran veya işlem süresi eklenmedi. Kaynak metindeki `önümüzdeki on yıl` kişisel karar sorusu çıkarıldı; sonuç veya garanti değildi. Astro desteklenmediği için kontroller açıkça çıkarılmış .txt üzerinde yapıldı. Tarih/byline/approval alanları ayrıca elle karşılaştırıldı; yenilenmedi. Klinik anlam değişiklikleri yalnız dil değişikliği olarak sunulmuyor ve yeni tıbbi onay gerektiriyor.

## QA

- `npm run build`: geçti, 139 sayfa; prebuild encoding/palet/lexicon/tarih kapıları geçti.
- Compliance: geçti, 179 dosya. SEO audit: geçti, 160 HTML sayfası.
- Yayın bütünlüğü ve template audit: geçti. Sources gate: hedef artık temiz; diğer yedi klinik rehberde kaynak eksikliği nedeniyle genel kapı başarısız. İlgisiz makaleler değiştirilmedi.
- Tam `build:ci`: başarısız. Mevcut `article-drafts/kas-iskelet-preview2/src/data/data` ve `src/utils/utils` import yolları lint'i engelliyor. Kapsamlı CI başarısı iddia edilmez. Ayrı src TS/TSX kontrolü `tsconfig.qa.json` ile geçti; tam CI'nin yerine geçmez.
- Editorial check: 0 aday. Structure check: kalan kısa kapanışlar ve iddia eşleşmeleri yukarıdaki gerekçelerle değerlendirildi. Çıkarımdan kaynaklanan noktalama boşlukları temizlendi; gerçek HTML ayrıca tarandı.
- Rendered check: tek `uncited-source` aday ailesi, numaralı #kaynak bağlantılarını kaynak adı anımı olarak tanımayan sezgisel yanlış pozitif. Yedi kaynağın her biri gövdedeki doğru iddiaya bağlı ve anchor'ları çalışıyor. Diğer rendered aday yok.
- Uygulama içi browser-client bootstrap güven bağlantısı hatası verdi; alternatif cua browser ile yerel sayfa açıldı ve incelendi. Tek H1, dört details, 4/4 SSS–FAQPage tam metin eşleşmesi, sıfır kırık anchor ve iki yüklenen görsel doğrulandı. Masaüstü görünüm ve 390px mobil görünüm kontrol edildi; yatay taşma yok.
- `git diff --check`: temiz. Ortak bileşenler, yazar profili, onay kayıtları ve görseller değiştirilmedi.
- Canlı sayfa web aracıyla okunamadı; üretimle tam metin karşılaştırması veya canlı düzeltme yapılmış gibi raporlanmaz.

## Açık kapılar ve eğitim değeri

Yeni revizyon Çağrı Sade'nin yazar onayını ve bağımsız bilimsel/tıbbi incelemeyi bekliyor. Eski 29 Temmuz onayı bu klinik değişiklikleri kapsamaz. Özgün kaynak dosya bulunursa mevcut klinik yaklaşım ve soru üslubu onunla da karşılaştırılmalı. SSS başka yazarın yazısında Dr. Aksoy adına dönüştürülmedi; Dr. Aksoy yanıtı istenmedi.

Hasta eğitimi için doğal değişim–yeni bulgu ve dikleştirme–hacim ayrımı kullanılabilir. İkincil AI/web alıntısında kaynak ve popülasyon sınırı birlikte aktarılmalıdır. Çağrı'nın yağ transferini rutin önermeme görüşü evrensel kontrendikasyon; menopoz sonrası veri garantisi veya kişisel cerrahi öneri olarak alıntılanamaz.
