# Güç / çanta — revizyon kaydı

15 Ekim 2026 · Başak Pelister · experience-essay

## Durum ve kapsam

Revizyon tamamlandı; yazar onayı ve Dr. Alper Mumcu'nun bağımsız tıbbi incelemesi bekleniyor. Bu dosya bir onay kaydı, form veya onay paketi değildir. Güncel `docs/AUTHOR-APPROVAL-WORKFLOW.md` v2.0 uygulanır: onay KC'den sözlü alınır. Onay verilmeden mevcut `src/pages/` rotası, yayın arşivi, manifest, onay envanteri ve yazar profili değiştirilmedi.

- Düzeltilmiş okuma metni: `guc-cantayi-daha-hafif-hazirlamak.md`.
- Astro kaynak taslağı: `guc-cantayi-daha-hafif-hazirlamak.astro`. Import yolları mevcut makale rotasına göredir; bu dosya kendi konumundan doğrudan derlenmez.
- Eski kaynak: `src/pages/hormonal-gecis/menopoz/guc-cantayi-daha-hafif-hazirlamak.astro`.
- Karşılaştırma: `icerik/yayinlanmis-makaleler/2026-06/2026-06-01__guc-cantayi-daha-hafif-hazirlamak.md` (2 Ekim arşiv dışa aktarımı; onaylı özgün metin olduğu doğrulanamadı).
- Mevcut 1 Haziran 2026 onay envanteri girdisi, yayın envanteri uzlaştırmasına dayanıyor. Bu revizyonun onayı olarak kullanılmadı.

## Değişiklikler

- Spot son geçişte iki cümleye indirildi; açılıştaki çanta sahnesini tekrar etmiyor. SEO açıklaması sadeleştirildi.
- Son geçişte ayrı kendine bakım bölümünün çanta tekrarı çıkarıldı; dinlenme ve kendine bakım içeriği kapanışla birleştirildi. Beş H2 kaldı. Eski altı bağlantı kimliği korundu: `self-care` son bölümün önündeki alias anchor olarak çalışıyor. Sonuçta tek kısa çanta dönüşü bırakıldı.
- Bedenin konuşması ailesindeki dört ifade çıkarıldı. Yeni klinik yaşanmışlık, kişi sözü, tedavi sonucu, oran veya doz eklenmedi.
- Genel sağlık bilgileri kişisel gövdeden ayrı tıbbi nota alındı; deneyime veya notun tamamına kanıt derecesi verilmedi.
- HRT ilk geçtiği yerde açıklandı. Kişisel risk, hekimle karar ve düzenli takip sınırları korundu. Genel tıbbi nota yaş ve menopozdan geçen sürenin değerlendirmedeki rolü açıkça eklendi; yazarın kişisel tedavi uygunluğu hakkında yeni hüküm verilmedi.
- Alt metin gerçek görüntüye göre düzeltildi. Mevcut byline görselinde `imagePosition="left center"` ile yüz korunuyor; görsel dosyası yeniden üretilmedi. Üst hero ve kart görseli değiştirilmedi.
- Kullanılmayan `tocEntries` kaldırıldı. `Article` ve `BreadcrumbList`, görünür güncelleme tarihi ve OG görseli kontrol edildi.
- Taslak `noindex`; tamamlanmış inceleme izlenimi veren reviewer byline'ı gösterilmiyor. Notta açıkça “İnceleme bekleniyor” yazıyor. Onaydan sonra bağımsız inceleyen adı gerçek kayda dayanarak eklenmeli, taslak uyarısı çıkarılmalı ve indeksleme durumu yeniden değerlendirilmelidir.

## Anlam ve kaynak izi

| Unsur | Koruma / işlem |
|---|---|
| Dokuz yıllık menopoz deneyimi | Aynı süre; yeni başlangıç tarihi veya yaş hesaplanmadı. |
| Çantadan üç eşya çıkarma; anne-kız gözlemleri | Mevcut anlatıdan korundu; yeni olay veya aile alıntısı eklenmedi. Özgün yazar kaynağı bulunmadığı için gerçekliği onaylanmış sayılmadı; yazar teyidi gerekli. |
| 40 sonrası hareket, kas ve kemik sağlığı | Tıbbi nota taşındı; sayısal eşik/tarama sıklığı veya kişiye özel egzersiz önerisi eklenmedi. |
| HRT kararı | Hekimle değerlendirme, kişisel riskler, düzenli takip ve kişisel yolların farklılığı korundu. |
| Tıbbi nottaki HRT ölçütleri | Meme sağlığı, rahim durumu, pıhtı riski ve kalp-damar öyküsü korundu; yaş ve menopozdan geçen süre kaynaklı açıklama olarak eklendi. |
| Tarihler | İlk yayın 1 Haziran 2026; revizyon 15 Ekim 2026. Revizyon tarihi onay/inceleme tarihi değildir. |

Tıbbi dayanak (15 Ekim 2026 kontrolü; kamuya görünür deneyim metnine kaynakça eklenmedi):

1. NICE NG23, Recommendations: 1.2.5 fiziksel aktivite ile kas kütlesi ve gücünün korunmasını anlatır; kemik sağlığı bu maddede geçmez. 1.2.4 ve 1.8.1 güncel metinde 15 Ekim 2026 kontrolünde doğrulanamadı, bu yüzden kayıtta atıf olarak yer almaz. Tıbbi nottaki kemik sağlığı ifadesi için kaynak NICE değil, NAMS 2022 olarak eklendi (aşağıdaki “Kemik sağlığı kaynak izi” bölümü). https://www.nice.org.uk/guidance/ng23/chapter/Recommendations . Doğrudan web açılışı 403 verdi; resmi sayfanın arama aracında dönen ilgili metni üzerinden kontrol edildi.
2. The 2022 hormone therapy position statement of The North American Menopause Society. PMID 35797481; DOI 10.1097/GME.0000000000002028. Yaş, menopozdan geçen süre ve bireyselleştirilmiş değerlendirme. PubMed özeti ve Australasian Menopause Society resmi açıklaması: https://pubmed.ncbi.nlm.nih.gov/35797481/ ; https://www.menopause.org.au/health-professionals/position-statements/nams-2022-hormone-therapy-position-statement/ . Bu kontrol bağımsız tıbbi onay değildir.

## Tekrar sayımı

Aynı regex aileleri `structure-check.mjs` içindeki `checkStructure({ claims })` ile önce/sonra çalıştırıldı. Bunlar anlamsal toplam değil, sözcük eşleşmeleridir; eski arşivde görünür spot ve tıbbi bilgi notu bulunmadığı için yüzey kapsamı sınırlıdır.

| Aile | Önce | Sonra | Gerekçe |
|---|---:|---:|---|
| `hafif / taşımak değildir / taşımayacağınızı` | 7 | 1 | Tek başlık eşleşmesi kaldı; çanta motifi açılış ve kısa kapanışta korunuyor. |
| Beden/omuz konuşması ve beden cümlesi | 4 | 0 | Kişileştirme çıkarıldı. |
| Kişisel risk / herkese uygunluk / bireysel değerlendirme | 4 | 3 | HRT kişisel deneyim sınırı, ayrı tıbbi not ve disclaimer farklı işlevler taşıyor. |

## Doğrulama

- Ana çalışma ağacına rota eklemeden, geçici ayrı proje kopyasında hedef rotaya taslak yerleştirildi. `public` ve `node_modules` aynı çalışma alanındaki kaynaklara junction ile bağlandı; bu klasörlere yazılmadı.
- Astro statik derleme: geçti (139 sayfa). `npm run lint` (`tsc --noEmit`): geçti. Tarih kontrolü: 67 makale tutarlı. `articles:audit:templates` karşılığı strict şablon kontrolü: geçti. Eski kemik makalesinin yönlendirilmiş approval/RSS uyarısı hedef dışı, engelleyici değil.
- Derlenen hedef: tek H1, beş H2 ve altı eski bağlantı kimliği, doğru yazar, `Article + BreadcrumbList`; `MedicalWebPage` ve `FAQPage` yok. `dateModified` ve görünür güncelleme 15 Ekim 2026; ilk yayın tarihi korunuyor; noindex var.
- Son geçişte `editorial-check`: 0 aday. `structure-check`: 4/17 paragrafta kısa kapanış adayı; ikisi Başak'ın diyalog soruları, biri açılıştaki somut merdiven gözlemi, biri son bölümdeki kendine kızmama cümlesi. Birbirinin yerine geçen aforizmalar olmadığı için korundu. Ritim: 51 cümle, ortalama 9.8 kelime, standart sapma 3.7; eski arşiv 62 / 11.4 / 5.6. Kısalma tek başına kalite kanıtı sayılmadı; uzun cümleler ve sorulu ritim elle okundu.
- `check-fidelity`: yalnız görünür taslak tarihinin 15 / 2026 sayıları eklendi. 40 yaş, dokuz yıl ve üç eşya korunuyor. Frontmatter farklılığı taslak statüsü olarak elle incelendi.
- `rendered-check`: yalnız bekleyen incelemeye ait `review-anonymous` adayı. Bu yayına hazır bir review satırı değil, taslağın açık durum bilgisi; gerçek onay gelmeden kişi adı yazılmadı.
- Chrome 390 px: görüntüler yüklendi; viewport ve scroll genişliği 390, yatay taşma yok. Mobil hero/başlık ve byline yüzü görsel olarak kontrol edildi. Masaüstünde görsel konumu ayrıca kontrol edildi. Geçici viewport sıfırlandı.
- Commit, push, deploy ve yayın yapılmadı. Mevcut yayındaki gövde ve yayın arşivi korunuyor.

## İkinci kontrol sonrası düzeltme — 15 Ekim 2026

- Spot/açılıştaki “yıllarca hazırlıklı olmak” tekrarı 2 → 1 bağlam. Çanta açılışı korunuyor.
- İhtiyaç dışı eşyayı taşıma sorusu 2 → 1 bağlam. Ayrı kendine bakım/çanta tekrarı kaldırıldı; `self-care` eski bağlantısı kapanış bölümüne bağlandı.
- “Onunla aynı miktarda eşya taşımam gerekmiyor” karşılaştırması çıkarıldı (1 → 0); kızının eşya miktarı hakkında doğrulanmamış ima kalmadı. Mevcut “tek bir bakış” gözlemi anne-kız bölümünde korundu; yeni bir olay/diyalog eklenmedi.
- Bölüm açılışlarına eklenen benzer “Siz…?” soruları çıkarıldı; anne-kız sorusu bölüm içine alındı. Anne-kız diyaloğu ve Başak'ın anlatı sesi korundu.

## Üçüncü düzeltme — 15 Ekim 2026: soru başlıkları

- Ön durum: beş anlatı H2'sinden dördü soru cümlesiydi (“Güç Dediğimiz Şey Tam Olarak Ne?”, “Dokuz Yıllık … Duyuyorum?”, “Anne Kız Arasında Güç Nasıl Konuşulur?”, “Bedenle Anlaşmak Mümkün mü?”). [CLAUDE.md §3] “soru-başlıklı H2 makale başına en fazla 1” kuralı bunu sınırlıyor; önceki turda bu başlıklar yazar imzası sayılarak korunmuştu. Bu, kuralla çeliştiği için kabul edilmedi.
- Karar (KC, 15 Ekim 2026): başlıklar düz cümleye çevrildi; id değerleri ve `self-care` alias'ı aynen korundu, gövde metni değişmedi.
  - `guc-ne`: “Güç Dediğimiz Şey Tam Olarak Ne?” → “Güç Benim İçin Kapasiteye Dönüştü”
  - `dokuz-yil`: “Dokuz Yıllık Menopozdan Sonra Neyi Daha Net Duyuyorum?” → “Dokuz Yıllık Menopozdan Sonra Uykunun Değerini Fark Ettim”
  - `anne-kiz`: “Anne Kız Arasında Güç Nasıl Konuşulur?” → “Annem, Ben ve Kızım Güce Farklı Anlamlar Veriyoruz”
  - `bedenle-anlasma`: “Bedenle Anlaşmak Mümkün mü?” → “Günün Planında Dinlenmeye Yer Açmak”
- Kalan soru H2: 0. Bölüm girişleri ve lede'ler değişmedi.
- “Online otu hazırla” talebi KC tarafından yazım hatası olarak belirtildi; yayın, onay veya commit işlemi başlatılmadı.

## Kemik sağlığı kaynak izi — 15 Ekim 2026

Tıbbi notun cümlesi: “Kemik sağlığı, metabolik sağlık, uyku ve enerjiyle ilgili yakınmalar, kişinin sağlık geçmişi ve mevcut durumuyla birlikte değerlendirilir.”

- **Birincil kaynak:** Hormone therapy position statement of The North American Menopause Society (NAMS 2022), *Menopause* 2022;29(7):767-794, PMID 35797481 (PubMed: https://pubmed.ncbi.nlm.nih.gov/35797481/).
- **Özet düzeyinde destek:** Özette hormon tedavisinin kemik kaybını ve kırığı önlediği; 60 yaş altı veya menopozdan sonra 10 yıl içindeki kadınlarda yarar-risk oranının kemik kaybını önlemeye lehte olduğu belirtiliyor. Bu ifadeler Australasian Menopause Society'nin resmi sayfasında (https://www.menopause.org.au/health-professionals/position-statements/nams-2022-hormone-therapy-position-statement/) yeniden yayımlanmış özetten alındı.
- **Doğrulama sınırı:** Bu kontrol, araç tarafından özetlenmiş sayfa içeriğine dayanıyor; birebir ifadeler yayın öncesi PubMed özeti veya NAMS PDF'i ile karşılaştırılmalı. NAMS PDF'i (menopause.org) 15 Ekim 2026'da 404 döndü; PubMed sayfası tam özeti vermedi.
- **Ek ikincil kaynak:** NICE NG23 (2015 sürümü) kemik sağlığı konusunda tavsiye veriyor (1.5.12); bu, ikincil bir PDF kopyasından alındı, güncel NG23 metni doğrulanamadı.
- **Gövde metni:** Değiştirilmedi. Cümle bir değerlendirme sürecini anlatıyor ve yukarıdaki kaynakların kapsamıyla uyumlu; tek bir sayı, oran veya kesin etki iddiası içermiyor.

## Denetim sonrası düzeltmeler — 15 Ekim 2026

- Son H2 (“Yorgunluğu Planın Parçası Yapmak”) için yaşıt bağı eklendi: “Hepimiz bilir: uykusuz bir gecenin ertesi sabahı her şey ağır gelir.”
- Okura doğrudan teselli cümlesi eklendi: “Önce şunu söyleyeyim: iyi hissetmediğiniz günler bir başarısızlık değil.”
- Lede ile tekrar eden üç başlık yeniden adlandırıldı: “Dokuz Yıllık Menopozdan Sonra Sabahlar”, “Üç Kuşak, Aynı Kelime”, “Yorgunluğu Planın Parçası Yapmak”. Id değerleri aynı kaldı.
- Eş-uzunluklu beş cümlelik blok (güç bölümü ve dokuz yıl bölümü) kırıldı; “Şimdi ise her davete evet demeden önce duruyorum.” ve “Merdivende ne kadar yorulduğuma bile dikkat ediyorum…” cümleleri kısaltıldı.
- NICE atfı düzeltildi (yukarıda 1. madde): 1.2.5 kemiği anmıyor; 1.2.4 ve 1.8.1 doğrulanamadı. Tıbbi nottaki kemik sağlığı ifadesi için kaynak gerekiyor.
- NAMS 2022 atfı (PMID 35797481) yeniden kontrol edildi: kayıt doğru; bireyselleştirme ve yaş/menopoz süresi vurgusu tıbbi notla uyumlu (özet ve ikincil kaynak düzeyinde).
- Sözlü onay (KC, 15 Ekim 2026): alındı. Başak'ın HRT beyanı için onay: alındı (KC bildirdi). Dr. Alper Mumcu tıbbi incelemesi: onaylandı (KC bildirdi, sözlü, 15 Ekim 2026). Taslak sayfadaki “İnceleme bekleniyor” ifadesi ve `noindex` yayın kararına kadar olduğu gibi kalır. Bu iki durum `article-approvals.ts` ve `article-log.md` kayıtlarına henüz işlenmedi; yayın kararıyla birlikte işlenecek.
- Açık kalanlar: canlı sayfa (`src/pages/hormonal-gecis/...`) onaylı ve değiştirilmedi; yayın için ayrı commit/push/deploy yetkisi gerekir. Yazarın HRT beyanı Başak tarafından onaylanmalı. `#self-care` çapası eski bağlantılar için korunuyor. `writers.ts` jobTitle'ı bu taslağın kapsamı dışında.
- Tıbbi not, HRT kişisel karar sınırı, görseller, byline ve onay durumu bu geçişte değiştirilmedi.
- Son taslakla ayrı önizlemede Astro yeniden derlendi (139 sayfa, başarılı), tarih kontrolü geçti (67 makale). Markdown, Astro ve derlenmiş hedefte paragraf eşliği, eski bağlantılar ve taslak/noindex durumu kontrol edildi. Yeni onay kaydı oluşturulmadı.
