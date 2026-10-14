# Menopozda Cilt Değişimleri — güncel audit ve düzeltme kaydı

14 Ekim 2026. Türkçe; Prof. Dr. Gonca Gökdemir; clinical-guide.

Metin: [menopozda-cilt-degisimleri.md](./menopozda-cilt-degisimleri.md). Bu dosya bağımsız çalışma kaydıdır; onay formu, onay paketi veya yayın onayı değildir.

## Sürüm ve yetki

İlk çalışma başlangıcı HEAD: `f874795852a7798fb74cb75910afd70e7223ceca`. Hedef Astro dosyasında commit edilmemiş değişiklik yoktu. Son kayıtlı yazar onayı 2 Ekim 2026; `icerik/yazar-onaylari/gonca-gokdemir/article-log.md` ve `src/data/article-approvals.ts`. Yazar sürümü `8043985d` commitine dayanır; sonraki teknik farklar önceki turda incelendi. Eski onay bu taslağın onayı olarak kullanılmadı.

İkinci detaylı audit sonrasında kullanıcı “fix” dedi. Bu tur taslak ve çalışma kaydı düzeltildi; canlı rota, ortak bileşenler, yayın arşivi, onay kayıtları ve yazar profilleri değiştirilmedi. Yeni yazar/tıbbi onay alınmış değildir. `CLAUDE.md` ve `docs/AUTHOR-APPROVAL-WORKFLOW.md` v2.0 canlı rotaya aktarımı onaya bağlı tutar.

Önceki taslak ve audit kaydı, değişiklikten önce `C:/Users/KC3/AppData/Local/Temp/estranova-cilt-fix-d8da6c6b9acd4d82ab80fd82f7d03f2b/` içine kopyalandı. Bu karşılaştırma kaydı onay arşivi değildir.

## Son audit bulgularının karşılığı

| Bulgu | Yapılan düzeltme / durum |
|---|---|
| Sigara önerisinde yanlış atıf | Güneş korumasıyla birleştirilmiş cümle kaldırıldı. Sigara cümlesi, sigarayı açıkça ele alan kuruluk kaynağına [7] bağlandı. |
| Kaş-kirpik ve tırnak uyarısında kaynak kapsamı | Saç dökülmesi [1], kaş-kirpik kaybı [9], tırnak değişiklikleri [10] olarak ayrıldı. |
| Güneş korumasının uygulaması eksik | Bakım listesine geniş spektrumun UVA/UVB açıklaması ve SPF 30 veya üzeri eklendi; kaynak [1]. Bu, önceki taslağa eklenen kaynaklı sayısal öneridir. |
| Açıklanmadan sayılan aktif maddeler | Niasinamid, antioksidan, peptid ve asit listesi kaldırıldı. Bölüm gerçekten açıklanan retinoidler ve nem tutuculara odaklandı; H2 ve anchor korundu. |
| İşlem sonrası uyarı kaybı | İşlem sonrası uzayan tahriş, yanık hissi ve yeni lekelenme açıkça geri kondu. Peeling sonrası yanma/kaşıntı/şişlik ve pigment değişikliği kaynak [11] ile eşlendi. |
| SSS tekrarları | Beş soru üçe indi. Kuruluk yanıtı banyo sonrası nemlendirmeyi, güneş sorusu kış kullanımını açıklar. Kolajen yanıtı kısa cevap ve ilgili gövde bölümüne bağlantı taşır. Değerlendirme uyarıları SSS'den kaldırılırken özet/gövde/editör notunda korundu. |
| Doğal Türkçe | “Rutin kullanım sonucuna varmak” düzeltildi; “randomize” yerine gruplara rastgele ayırma açıklandı; “Değişimin fark edilmesi...” cümlesi kaldırıldı. |
| Yanlış istatistik ve anlam kaydı | Önceki 16,2 → 11,9 karşılaştırması geri çekildi. “Hormon kaynaklı kaybı önleme kapsamı çıkarılmadı” ifadesi hatalıydı; doğru anlam aşağıda kaydedildi. |
| Canlı OG görseli | Uygulanabilir teknik düzeltme `menopozda-cilt-degisimleri-og-image.patch` dosyasında hazır; `git apply --check` geçti. Henüz uygulanmadı. |

İlk turdaki melanin/melanosit düzeltmesi, menopoz ile güneş lekelerinin ayrılması, kolajen belirsizliği, retinoid tanımı ve gebelik uyarısı korundu. Marka/ürün önerisi, yeni kişisel klinik deneyim veya hasta alıntısı eklenmedi. Dr. Aksoy adına SSS oluşturulmadı. Mizah H0; yazar profili değiştirilmedi.

## Anlam ve kaynak sınırları

- Östrojen–cilt: nem, kalınlık ve esneklik ilişkisi; bireysel farklılık ve başka kuruluk nedenleri korunuyor [1,2,7].
- Kolajen: yapısal protein ile takviye etkisi ayrılıyor. 2025 derlemesindeki yüksek kaliteli çalışma ve finansman alt grubu farklılıkları korunuyor; kesin etkisizlik sonucuna çevrilmiyor [4].
- Güneş: güneşe bağlı yaşlanma sonucu korunuyor. Bu çalışmadan hormonal kolajen kaybının tamamının önlenebileceği sonucu çıkarılmıyor; çalışma menopoza özgü değil [3].
- Retinoid: etki ihtimali ve tahriş sınırı korunuyor; gebelikte kullanmama uyarısı duruyor [5].
- Güvenlik: değişen ben, kanama, kabuklanma, iyileşmeyen yara, yoğun kaşıntı/yanma/kızarıklık, saç/kaş/kirpik/tırnak değişiklikleri ve işlem sonrası tahriş/yanık hissi/lekelenme metinde mevcut. Her tabloya uygun kaynak ayrı bağlanıyor [1,5,6,7,9,10,11].
- Bilimsel Editör Notu: mevcut Astro sayfasındaki üç paragraf ve imza kelimesi kelimesine korunuyor. Bu koruma yeni gövdeye tıbbi onay verildiği anlamına gelmiyor.
- Evidence: 4/5 mekanizma etiketleri [1,2], 2/5 takviye yararının sınırlılığı [4], 4/5 güneşe bağlı yaşlanma sonucu [3], 3/5 genel retinoid açıklaması [5] ile eşlendi. Bunlar editoryal sınıflardır; kaynaklarda yapılmış resmî bir GRADE değerlendirmesi diye sunulmaz.

## Eşdeğer kapsamla yeniden kontrol

Karşılaştırma tabanı ilk yayımlanmış metin değil, ikinci audit'te incelenen taslaktır. İki sürümde de aynı işlem uygulandı: metadata, başlıklar, kaynakça, ilgili okumalar, sorumluluk sınırı ve Evidence kodları çıkarıldı; özet, tüm gövde/listeler, SSS cevapları ve Bilimsel Editör Notu korundu. Güvenlik listeleri iki tarafta da kapsamda.

| Aynı kapsamda ölçüm | Önce | Sonra |
|---|---:|---:|
| Cümle sayısı | 78 | 75 |
| Ortalama sözcük | 12,5 | 12,5 |
| Standart sapma | 6,5 | 6,1 |
| Güneş koruması ifade eşleşmesi | 9 | 5 |
| Kolajen takviyesi ifade eşleşmesi | 4 | 3 |
| Östrojen ifade eşleşmesi | 4 | 4 |

Bu son üç satır sözel eşleşmedir; anlamsal iddia sayısı değildir. Başlıklar artık sayılmaz. Aynı paragraftaki iki sözel eşleşme yine iki eşleşmedir ve iki bağımsız iddia diye yorumlanmaz.

Elle sonuç kontrolü (bir paragraf veya liste tek yer):

| Ana sonuç | Önce kaç yerde | Sonra kaç yerde | Kalan tekrarın görevi |
|---|---:|---:|---|
| Güneşten korunmanın önerilmesi / yararı | 7 | 5 | Özet, güneşe bağlı yaşlanma kanıtı, uygulama listesi, kış sorusu, korunan editör notu |
| Takviyenin rutin kullanımına yeterli kanıt olmaması | 3 | 3 | Özet, kanıt açıklaması, bağımsız SSS |
| Yeni/değişen lezyonda değerlendirme | 6 | 5 | Özet, leke açıcı kullanmadan önce ayrım, değerlendirme açılışı, belirtiler listesi, korunan editör notu |

## Doğrulama

- Elle gramer, doğal Türkçe ve anlam kontrolü yapıldı.
- Aynı kapsamdaki son metinde `editorial-check.mjs`: 0 aday bulgu.
- `structure-check.mjs`: son eşdeğer prose kapsamındaki bulgular yalnız tanımlanan üç ifade ailesinin eşleşmeleri; kısa kapanış ailesi eşiği aşmıyor. Kaynak kurumlarının gerçek adları değiştirilmedi.
- `check-fidelity.mjs`: `review_changes`. Değişiklikler SPF 30, düzeltilmiş/eklenmiş atıflar ve kolajen bölümüne iç bağlantıdır; bu farklar kaynak ve anlam kaydıyla incelendi. Sonuç anlam eşitliği veya tıbbi onay değildir.
- Otomatik doğrulama: 8/8 mevcut bölüm anchor'ı, 3 SSS, 11 numaralı kaynak girdisi, atıfların mevcut kaynağa gitmesi, tüm kaynak girdilerinin metinde kullanılması, korunan editör notu, güvenlik ifadeleri ve yasaklı sözlük kontrolü geçti.
- Kaynak 8 ve 11 iki bağlantı içerir; “11 kaynak girdisi”, 11 bağımsız çalışma anlamına gelmez.
- Taslak ve audit kaydındaki değişiklikler `git diff --no-index --check` ile eski kopyalara karşı denetlendi; yeni patch `git apply --check` ile kontrol edildi.

Önceki salt okunur canlı denetimde HTTP 200, tek H1, doğru canonical ve 5/5 görünür SSS–FAQPage eşleşmesi vardı. Bu eski yayındaki sürümdür; yeni taslak veya üç soruluk SSS için render/şema doğrulaması sayılmaz. Bağımsız taslak tesliminde site build'i çalıştırılmadı.

## Onay sonrası kalan aktarım

Yazar ve tıbbi onaydan sonra taslak Astro rotaya aktarılacak; üç SSS görünür yüzey ve FAQPage için tek veri kaynağına bağlanacak. Güncelleme tarihi gerçek entegrasyon tarihi olacak; tıbbi inceleme tarihi uydurulmayacak. OG patch'i mevcut kart görselini hem Article/MedicalWebPage image alanına hem `SiteLayout image` özelliğine bağlar; üst hero'yu ve görsel dosyalarını değiştirmez. Bu teknik değişiklik henüz canlı rotaya uygulanmadı. Aktarım sonrasında proje doğrulamaları ve yerel render kontrolü gerekir. Commit/push/deploy yapılmadı.
