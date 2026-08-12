# Estranova makale türleri ve şablonları

Bu belge, ortak Estranova görsel kabuğu içinde klinik uzmanlık ile yaşanmış deneyimin aynılaşmasını önler. Tür seçiminde ilk kapı yazarın editoryal yetki hattı, ikinci kapı yazının okuyucuya verdiği ana değerdir.

## Karar ağacı

1. Yazar `scientific` hattında bir hekim/klinik uzman mı?
   - Sağlık sorusunu tanım, mekanizma, kanıt, seçenek ve güvenlik sınırlarıyla yanıtlıyorsa `clinical-guide`.
   - Kendi mesleki deneyiminden hareketle karar, iletişim veya etik meseleyi tartışıyorsa `expert-essay`.
2. Yazar `lifestyle` hattında hekim olmayan bir yaşıt yazar mı?
   - Ana değer kendi hayatı, gözlemi ve yaşıt deneyimiyse `experience-essay`.
   - Kişisel klinik otorite kurmadan pratik bir konuyu araştırma ve editoryal sentezle açıklıyorsa `editorial-guide`.
   - Fizyoterapist veya hareket uzmanı gibi doktor olmayan alan uzmanları da klinik schema yetkisi almaz; kendi mesleki sınırlarında `editorial-guide` kullanır.
3. İmza kurumsal Estranova editörleri mi? Yalnız `editorial-guide`.

Hekim olmayan isimli yazar `clinical-guide` veya `expert-essay` yazamaz; hekim/klinik uzman da yaşıt deneyimi personasına geçirilmez. Tıbbi bağlam gereken kişisel yazıda bilgi, yazarın deneyiminden ayrı bir `MedicalContextNote` içinde görünür.

## Ortak kabuk

Tüm türlerde `SiteLayout`, tek H1, `SubmenuHero`, `SubmenuArticleBody`, yazar ve tarih bilgisi, `RelatedReadings`, canonical, Open Graph, `Article` ve `BreadcrumbList` korunur. Görsel dil, Türkçe arayüz, "siz" hitabı, satış dili yasağı ve tıbbi sorumluluk sınırı ortaktır. `ArticleProsePanel` tek tipografi sistemidir; `mode="experience"` kişisel anlatıda klinik bölüm sayacını kaldırır.

## 1. Klinik Rehber (`clinical-guide`)

Amaç: Bir sağlık sorusunu kaynaklı, karar vermeye yardımcı ve güvenlik sınırları görünür biçimde açıklamak.

Tipik sıra:

1. `ArticleSummary` içinde 70-120 kelimelik **Kısa Klinik Yanıt**.
2. `ArticleAuthorBlock`: yazar, yazardan bağımsız bilimsel inceleyen, ilk yayın ve son güncelleme.
3. Beş veya daha fazla bölümde `ArticleTOC`.
4. Tanım ve klinik ayrım.
5. Mekanizma ve nedenler.
6. Kanıt haritası; her önemli iddiada kapsam, sonuç ve sınırlama.
7. Seçenekler ve ortak karar ölçütleri.
8. Özel durumlar ve ne zaman değerlendirme gerektiği.
9. Konuya değer katıyorsa 3-5 gerçek SSS; zorunlu SEO dolgusu değildir.
10. `ArticleSources`: seçilmiş ve tıklanabilir bilimsel kaynaklar.
11. `ArticleEditorNote` ve `ArticleDisclaimer`.

### Klinik sahne ve vaka anlatımı

Bir yazıda en fazla iki kısa klinik sahne kullanılabilir. Amaç hekimin deneyimini ve hasta-hekim iletişiminin insani tarafını göstermektir; vaka tedavi başarısı kanıtı değildir.

Kullanılabilecek türler:

- kimliği ve ayırt edici ayrıntıları temizlenmiş anonim gerçek gözlem;
- birden fazla benzer görüşmeden oluşturulan ve açıkça "temsili/birleşik örnek" diye belirtilen sahne;
- tek hastaya bağlanmayan, muayene odasında tekrar eden bir iletişim gözlemi.

Yasak ayrıntılar: isim/baş harf, kesin tarih, kurum, şehir, benzersiz meslek-aile kombinasyonu, ayırt edici tetkik/ilaç/doz dizisi ve nadir tanıyla birleşen yaşam ayrıntısı. Hasta sözü gerçek alıntı gibi yeniden üretilmez. Tekil vakadan genelleme veya üstünlük/başarı sonucu çıkarılmaz.

Klinik sahnenin ardından şu üçlü kurulur: **bireyselleştirme cümlesi → genel klinik açıklama → kaynak/kanıt sınırı**.

### Kaynaklar

Klinik rehberlerde doğrulanmış bilimsel dış bağlantı kullanılabilir ve kaynak bölümü zorunludur. Öncelik: resmî sağlık kaynakları, güncel klinik kılavuzlar, sistematik derlemeler/meta-analizler ve temel hakemli çalışmalar. Bağlantı, gerçekten desteklediği iddiaya yakın numaralı dipnotla kaynak listesine bağlanır. SEO için rastgele "otorite linki" eklenmez.

Schema: `Article` + `MedicalWebPage` + `BreadcrumbList`; yalnızca görünür SSS varsa `FAQPage`. Görünür inceleyen, tarihler, görsel ve kaynaklar schema ile birebir uyumlu olmalıdır.

`ArticleAuthorBlock` içindeki görünen inceleyen, `buildArticleSchemas` içindeki `medicalReviewer` ile aynı değeri taşımalıdır. Şema yazarı, kurumsal imza dışında `/yazarlar/<slug>/` profil sayfasına bağlanır.

### Dr. Aksoy gözlemci mizah katmanı

Dr. Aksoy imzalı yazıda ana ses doktor ve aktif klinisyen sesidir; yalnızca tıbbi inceleme panelinde görünmez. Persona bilimsel yönteme güvenen, hayatı gerektiği kadar ciddiye alan, eğlenceli, anlayışlı ve babacan doktordur. Hastaya dosya/vaka değil, sağlık yolculuğuna tanıklık edilen insan olarak yaklaşır; aile yakınlığı kadar sahiplenici duygu promosyon sloganına dönüştürülmez.

Düşük riskli klinik rehberlerde `docs/editorial-style-guide.md` içindeki H1 veya H2 mizah seviyesi seçilebilir. Bu katman makale omurgasına sonradan rastgele espri serpiştirme yöntemi değildir.

Taslak sırası:

1. Önce klinik omurga ve iddia-kaynak izi yazılır.
2. Tek ana motif seçilir: ör. takvim, telefon uygulaması, spor çantası veya takviye kavanozu.
3. Açılışta `tanıdık gerçek → ters açı → tıbbi köprü` kurulur.
4. Orta bölümde en fazla bir ritim kırılması veya ters sınıflandırma kullanılır.
5. Uygunsa kapanışta açılış motifine tek ve kısa bir geri çağırma yapılır.
6. Risk, ilaç, komplikasyon, kırmızı bayrak ve ciddi ruhsal belirti bölümleri H0 bırakılır.

Anonim klinik sahne `Geçen gün bir hastam...` diye açılabilir. Sahne gerçek karşılaşmanın anonim parafrazı olmalı; isim, yaş, yer, kurum, kesin tarih, nadir tanı, ilaç/doz veya ayırt edici ayrıntı içermemelidir. Birleşik sahne `muayene odasında sık duyduğum` diye açıkça genellenir. Tek hasta bilimsel kanıt sayılmaz.

Dr. Aksoy özgün katkısı mizahın hemen ardından görünmelidir: hangi soruyu önce sorduğu, hangi iddiayı ayırdığı, neyi rutin önermediği veya hangi bulgunun kararı gerçekten değiştirdiği. Mizah, bu klinik katkının yerine geçmez.

## 2. Uzman Denemesi (`expert-essay`)

Amaç: Hekim veya uzmanın mesleki deneyiminden hareketle iletişim, karar, belirsizlik veya etik bir meseleyi tartışmak.

- Açılış klinik bir sahne, mesleki tereddüt veya tekrar eden bir soruyla kurulabilir.
- Kaynak ve `Evidence`, yalnızca genel tıbbi iddia kurulduğunda kullanılır.
- SSS varsayılan değildir.
- `MedicalWebPage`, yazı gerçekten klinik rehbere dönüşmedikçe kullanılmaz.
- Vaka mahremiyeti ve tekil vakadan genelleme yasağı Klinik Rehber ile aynıdır.

Tipik akış: **sahne → mesleki soru → ayrım → kanıt gereken yerde kaynak → hekimin neyi önemsediği → okura açılan düşünce**.

Bu türde `ArticleTOC` varsayılan olarak eklenmez; yazı klinik rehber gibi numaralı bir başvuru sayfasına dönüştürülmez.

## 3. Yaşam ve Deneyim (`experience-essay`)

Amaç: Yazarın kendi hayatından veya izinli yakın çevre gözleminden hareketle "bizden biri" hissi veren bir dergi yazısı kurmak.

Tipik akış:

1. `EditorialStandfirst`: 2-3 cümlelik spot; klinik özet değil.
2. Somut açılış sahnesi.
3. Deneyimin kırılma noktası.
4. Yazarın neyi fark ettiği ve hangi soruyu sorduğu.
5. Okura açılan daha geniş yaşıt bağı.
6. "Bu benim yolumdu; sizinki farklı olabilir" anlamını doğal taşıyan denge.
7. Tıbbi iddia varsa kısa, ayrı, kaynaklı ve nötr `MedicalContextNote`; tıbbi bilgi kontrolü görünürdür.
8. `RelatedReadings` ve gerektiğinde `ArticleDisclaimer`.

Bu türde `ArticleTOC`, numaralı klinik bölümler, SSS ve kaynak listesi varsayılan değildir. `Evidence` yalnız ayrı tıbbi bağlamda önemli bir iddiayı sınırlandırmak için kullanılabilir. `ArticleEditorNote` yerine `MedicalContextNote` kullanılır; yazı klinik rehber gibi gösterilmez.

Schema: `Article` + `BreadcrumbList`. Tıbbi inceleme görünür bir notla gerçekten yapıldıysa belirtilir; `MedicalWebPage` varsayılan değildir.

Deneyim yazısında `ArticleTOC`, numaralı bölüm haritası ve SEO amacıyla eklenmiş SSS kullanılmaz. SSS yalnızca metnin doğal bir parçası olarak okura belirgin değer katıyorsa eklenir.

## 4. Editoryal Rehber (`editorial-guide`)

Hekim olmayan bir yazarın veya kurumsal editoryal imzanın araştırma ve editoryal sentezle pratik bir konuyu açıkladığı klinik olmayan türdür. Yazar hekim/klinisyen otoritesi kurmaz. Tıbbi iddialar ayrı bilimsel editör sorumluluğunda kontrol edilir; kaynaklar gerektiğinde görünür, fakat metin akademik kaynak yığınına dönmez. SSS yalnızca gerçek okur sorularına değer katıyorsa kullanılır. Schema `Article + BreadcrumbList` ile sınırlıdır.

## Yayın öncesi ortak kontrol

- Yazarın yetki hattı tür seçiminden önce kontrol edildi mi?
- Hekim olmayan isimli bir yazar yanlışlıkla `clinical-guide` / `expert-essay` olarak işaretlendi mi?
- Görünür yazar/inceleyen/tarihler/görsel ile JSON-LD aynı mı?
- Klinik sahne anonim mi; temsiliyse açıkça belirtildi mi?
- Tekil deneyim bilimsel kanıt veya tedavi başarısı gibi sunuluyor mu?
- Kaynaklar iddiaları gerçekten destekliyor ve görünür mü?
- Klinik rehber kaynak kapısı (`npm run articles:audit:sources`) temiz mi? Bu kapı, kaynak eklenmeden tıbbi metin yayınlamayı engeller.
- SSS okura değer katıyor mu, yoksa yalnızca SEO dolgusu mu?
- Kısa Klinik Yanıt veya editoryal spot kendi başına anlaşılıyor mu?
- Makale komşu içeriklerden farklı bir arama/okuma niyetine sahip mi?
