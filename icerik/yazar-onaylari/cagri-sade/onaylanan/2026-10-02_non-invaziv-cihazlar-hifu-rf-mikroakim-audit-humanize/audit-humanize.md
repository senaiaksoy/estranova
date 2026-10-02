# Audit / humanize / fix — 2 Ekim 2026

Hedef: `makale-onizleme.html` ve onu üreten onay paketi. Verilen eski yol, onay sonrası `onaylanan/2026-10-02_non-invaziv-cihazlar-hifu-rf-mikroakim` altına taşınmıştı. Onaylı taban `17ea6324`; pakette bu commit sonrası fark yoktu. Arşivdeki yazar ve tıbbi onay korunur. Yeni çalışma, verilen `onay-bekleyen` yolunda ayrı revizyondur; eski onay yeni ifadelerin onayı sayılmadı.

## Bulgular ve uygulanan düzeltmeler

- **Gramer / gönderim — mekanizma:** İki cihazdan sonra gelen “üçü de” gönderimi belirsizdi; üç yöntem açıkça adlandırıldı. “İmplante” yerine anlaşılır Türkçe kullanıldı.
- **Yazar kimliği — menopoz:** “Çoğumuz bu dönemde...” erkek klinisyeni menopoz deneyimine dahil ediyordu. Doğrudan “siz” anlatımına çevrildi; yaşanmışlık eklenmedi. Önceki kayıtlı onayın kapsadığı danışman sesi korunur; yeni hekim anekdotu veya alıntısı üretilmedi.
- **Humanizasyon / ritim:** “İyi haber şu”, “Burada önemli bir ayrım var”, “Bu bölüm biraz kuru gelebilir” girişleri bilgiyle değiştirildi. Aynı menopoz-alt-grup sınırlamasının yakın tekrarı birleştirildi. Soyut kapanış yerine hedef, beklenen değişim ve riskler verildi. Açılış sahnesi, üç italik karar sorusu, kısa paragraf ritmi ve işlem yaptırmama seçeneği korundu.
- **Kanıt — mikroodaklı ultrason:** 42 çalışmanın tamamı yüz/boyun çalışması gibi sunulmadı. Memnuniyet sınırlaması, nötr seçeneğin formda bulunmaması ve olası yanlış sınıflandırma üzerinden düzeltildi. “Cilt kalitesi” bütün alanlar için toplu bulgudur; yüz/boyun cümlesi görünüm bulgusuyla sınırlandı. [Tam metin](https://academic.oup.com/asj/article/45/3/NP86/7900203).
- **Kanıt — RF:** Derlemenin farklı uygulamaları kapsadığı ve sonuçlarının tamamının yüzey RF'ye ait olmadığı açıklandı. HIFU ile doğrudan üstünlük çıkarılmadı. [Kaynak özeti ve referansları](https://pubmed.ncbi.nlm.nih.gov/34923652/).
- **Kanıt — ev cihazı:** 36 kadının sağlıklı Koreli katılımcılar olduğu belirtildi. Birleşik enerjilerin katkısını ayıramama ve sekiz haftalık izlemin kalıcılık için yetersizliği ayrı gerekçelerle yazıldı. [Özgün çalışma özeti](https://link.springer.com/article/10.1007/s10103-024-03982-8).
- **Güvenlik:** İmplant/metal uyarısı RF ve terapötik ultrasonla ilişkilendirildi; açık yara uyarısının ultrason kapsamında olduğu gösterildi. Metal içeren dövme mürekkebi için RF kullanım engeli açık yazıldı. Vücut şekillendirme belgesi, yüz ve mikroakım için evrensel kontrendikasyon listesi sayılmadı; cihaz talimatı gereği korundu. [Resmî kaynak](https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/non-invasive-body-contouring-technologies).
- **İğneli RF:** Yüzey RF risk sıklığıyla eşitlenmedi; evde uygulanmaması gerektiği eklendi. [Resmî güvenlik bildirimi](https://www.fda.gov/medical-devices/safety-communications/potential-risks-certain-uses-radiofrequency-rf-microneedling-fda-safety-communication).
- **Menopoz / kesinlik:** Bütün literatür için “işe yaramayacağını gösteren bulgu yok” iddiası yerine alt-grup verisinin azlığı yazıldı. Hormon tedavisini yalnız cilt için başlatmama sınırı korundu. [Derleme özeti](https://pubmed.ncbi.nlm.nih.gov/40847905/).
- **Onay durumu:** Eski önizlemedeki bekleyen-onay satırları arşiv meta kaydıyla çelişiyordu. Yeni önizleme, önceki onay ile yeni revizyon incelemesini ayırır. Dört SSS cevabı değiştirilmedi; bunlar yazar onaylı editoryal yanıtlardır, kayıtlı özgün hekim yanıtı diye sunulmaz. Dr. Aksoy adına SSS eklenmedi.

## Anlam kaydı

| Alan | Korunan veya açıkça düzeltilen nokta |
|---|---|
| Popülasyon / süre | 42 çalışma, 36 kadın, sekiz hafta korunur; ikinci çalışmanın sağlıklı Koreli kadın popülasyonu eklenir. |
| Sonuç | Görünüm/gevşeklik bulgusu cerrahi eşdeğerlik veya kişisel sonuç garantisi yapılmaz. |
| Belirsizlik | Kanıt yokluğu etkisizlik ilanına çevrilmez; mikroakımın birleşik cihazdan ayrı değerlendirilemediği korunur. |
| Güvenlik | İmplant, metal, yara, dövme, gebelik/emzirme, ilaç, ağrı ve acil değerlendirme sınırları korunur; enerji türüne göre kaynak kapsamı düzeltilir. |
| Atıf / kimlik | Altı kaynak URL'si, kaynak id'leri, bölüm anchor'ları, başlık ve Çağrı Sade byline'ı korunur. |
| SSS | Dört soru ve cevap önceki onaylı paketle birebir aynıdır. |
| Katkı / onay | Yeni gerçek klinik katkı veya onay tarihi üretilmez; değişen editör notu tıbbi revizyon incelemesi bekler. |

## Kontroller ve sınırlar

Metnin tamamında gramer, doğal Türkçe ve ritim okumaları yapıldı. Başlık, özet, tablo, tüm bölümler, SSS, kaynaklar, editör notu ve uyarı birlikte değerlendirildi. Yerel sözlük `config/editorial-lexicon.json`, proje yasakları ve yazar profili kullanıldı; ayrı `glossary.json` / `banned-terms.tr.md` bu depoda yok.

Hasta eğitimi değeri: farklı dokulara yönelik hedefleri ayırır, görüşme soruları verir ve işlem yaptırmama seçeneğini görünür tutar. İkincil web/AI alıntısında cihaz mekanizması ve kanıt sınırlamaları kullanılabilir; marka veya yöntem üstünlüğü, kalıcılık süresi, bireysel uygunluk ve evrensel güvenlik listesi olarak alıntılanmamalıdır. Evidence düzeyleri editoryal yorumdur; resmi GRADE değildir. Mikroodaklı ultrason derlemesindeki üretici finansmanı ve bazı yazarların sektör ilişkileri kaynak değerlendirmesinde dikkate alınmalıdır.

Canlı sayfa tarayıcıda okundu: Çağrı Sade imzalı eski onaylı metin yayında; revizyonda düzeltilen ifadeler canlıda da mevcut. Ayrıca canlı `RedFlagBox` başlığı/ön açıklaması acil belirtileri genel bir danışma ihtiyacı gibi sunuyor; yeni paketin Astro kaynağında hedefe özgü başlık ve açıklama kullanılarak düzeltildi. Ortak bileşeni değiştirmek bu dosya önizleme kapsamının dışındadır.

Bu iş site build'i veya yayın değildir. Onaylı arşiv, canlı rota, ortak SSS, manifest, görseller ve başka oturumların değişiklikleri değiştirilmedi. `site-kaynak.astro`, hedef rota için hazırlanmış derlenebilir aktarım taslağıdır; gerçek JSON-LD/SSS bağlama ve yayın doğrulaması onay sonrası yapılır. Yeni kontrol formu gönderilmedi veya doldurulmadı.

## Son doğrulama

- Tek H1; 15 benzersiz id; iç atıf ve yerel form bağlantıları sağlam.
- Dört görünür SSS cevabı JSON kaynağıyla ve onaylı arşivle birebir eşleşiyor.
- Altı dış kaynak URL’si korundu; sayı/atıf kontrolü `no_tracked_changes`, editoryal yardımcı 0 aday, yerel hard-ban taraması 0 bulgu. Bu sonuçlar tıbbi eşdeğerlik veya onay kanıtı değildir; olgusal değişiklikler yukarıda ayrı kayıtlıdır.
- Astro compiler: 0 tanı. Onaylı önizlemenin SHA-256 özeti değişmedi.
- Canlı sayfa tarayıcıda kontrol edildi. Yerel önizlemenin `file:` URL’si tarayıcı güvenlik politikası tarafından engellendi; yerel görsel doğrulama tamamlanamadı. HTML yapısı dosyadan doğrulandı.
- Commit, push veya deploy yapılmadı. Yeni revizyonun yazar ve tıbbi incelemesi bekliyor; mevcut onaylı sürüm ve onay kayıtları korunuyor.

## Son editoryal geçiş — audit-humanize-3

Kullanıcı önce AI/human yönünden salt okunur inceleme istedi; ardından önerilen son geçişi “yap” diyerek yetkilendirdi. Önceki revizyon `son-gecis-once.html` ve `son-gecis-once.txt` olarak korundu.

- RF paragrafı beklenti/memnuniyet, mikroakım paragrafı birleşik cihaz çalışması üzerinden açıldı; üç eş biçimli kaynak özetinin ritmi çeşitlendirildi. Kanıt düzeyleri, 42 çalışma, 36 sağlıklı Koreli kadın ve sekiz hafta bilgileri korundu.
- Menopoz bölümündeki hedef/bugünkü cilt tekrarı kısaltıldı; asıl değerlendirme ölçütleri özet, mekanizma, görüşme soruları ve değişmeyen SSS’de korunuyor.
- Güvenlik cümleleri sadeleştirildi ve implant/metal, dövme, diğer sağlık bilgileri üç paragrafa ayrıldı. RF ve tedavi amaçlı ultrason kullanım engelleri; yara, dövme, gebelik/emzirme, ilaç, ev cihazı ve acil değerlendirme uyarıları korunuyor.
- Okura çekinme/utanma duygusu atfeden genelleme çıkarıldı; ağrısını açıkça söylemesi gerektiği korundu.
- Kapanıştaki yöntem özeti ve ayna geri çağırması kaldırıldı. H2 sonrası danışman bakışı korunup kapanış, görüşmeden beklenen değişim ve riskleri anlayarak ayrılma mesajıyla sadeleşti. Kapanıştan çıkan klinik sonuçlar Kısa Klinik Yanıt ve kanıt bölümünde mevcut. Yeni anekdot veya klinik deneyim üretilmedi.
- Kontrol formundaki kapanış alıntısı yeni cümleyle eşitlendi. Önizleme, gövde ve Astro taslağı aynı düzenlemeleri taşıyor; Astro ana paneli gövde kaynağıyla birebir eşleşiyor.
- Hem önceki editoryal geçişe hem onaylı tabana karşı sayı/atıf kontrolü: fark yok. Editoryal yardımcı: 0 aday. Özet ve dört SSS cevabı değişmedi; 15 id ve bütün link hedefleri korundu. Astro compiler: 0 tanı.
- Bu geçiş bir dedektör sonucu veya insan yazarlığı kanıtı değildir. Önceki onay arşivi ve site kaynakları değişmedi; yeni revizyon inceleme bekliyor. Yerel görsel doğrulama önceki tarayıcı politika engeli nedeniyle tamamlanmış sayılmadı.


## Revizyon onayı — 2 Ekim 2026

Kullanıcı: “revizyon onay tamam”. audit-humanize-3 onaylandı; önceki bekleme kayıtları tarihsel olarak korunur. Onaylı metin site kaynağına aktarıldı. Ayrıntı: onay-kaydi.md.
