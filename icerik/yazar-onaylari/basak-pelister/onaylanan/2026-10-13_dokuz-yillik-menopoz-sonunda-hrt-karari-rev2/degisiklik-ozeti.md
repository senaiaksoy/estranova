# İkinci revizyon — 13 Ekim 2026

Durum: yazar ve tıbbi inceleme onayı bekliyor. Önceki onaylı kaynak korunmuştur. Yeni gövde src/pages içine alınmadı; commit/push/deploy yapılmadı.

## Değişiklikler

- Genel HRT/kemik bilgisi ve kanıt etiketleri anlatı gövdesinden ayrı tıbbi nota taşındı. Anne öyküsü genel bilimsel hükmün kanıtı gibi kullanılmıyor.
- Zamanlama cümlesi tedaviye engel durum olmaması, rahatsız edici belirtiler ve kemik kaybının önlenmesi koşullarıyla sınırlandı. Yaş/zaman tek başına uygunluk sağlamaz; tür, yol ve süre riskleri etkiler.
- Geçmiş kişisel kararı genel kılavuz değişimine bağlayan açıklama kaldırıldı. Başak'ın geçmiş klinik gerekçesi tahmin edilmedi.
- Medeni durum ifadesi yeni taslaktan çıkarıldı; gizlilik istisnası tanımlanmadı ve yazar profili değiştirilmedi.
- Kapanış ve bireysel karar tekrarları azaltıldı. Anne, kardeş, hekim ve kızın özgün alıntıları ve sahneler korundu; yeni olgu/alıntı/yaşanmışlık eklenmedi.
- Tıbbi not dili sadeleştirildi. Yeni not Dr. Alper Mumcu'nun incelemesine sunulacak; önceki onay yeni notun onayı değildir.

## İddia ve anlam izi

| Önce | Sonra | Korunan veya düzeltilen sınır |
|---|---|---|
| İlk on yıl / 60 yaş yarar-risk cümlesi gövdede ve koşulsuz | Ayrı notta, engel durum bulunmaması + belirtiler/kemik kaybı amacı | NAMS 2022 PMID 35797481; doi:10.1097/GME.0000000000002028 |
| Anne öyküsü ardından genel kemik yararı | Deneyim gövdede; genel kemik yararı notta | Anekdot bilimsel kanıt değildir; aynı kaynak |
| Kılavuzlar değiştiği için kişisel karar değişti izlenimi | Farklı zamanlardaki kişisel değerlendirme | NAMS 2017 PMID 28650869 aynı zamanlama yaklaşımını içeriyordu |
| 46 yaş, 9 yıl, 30 yıllık hekim tanışıklığı | Aynı | Sayı/olgu korunur; aile alıntıları değişmez |

## Tekrar ölçümü (yalnız anlatı gövdesi)

| Sözcük ailesi | Önce | Sonra |
|---|---:|---:|
| Kişisel/bireysel/farklı yol | 9 | 2 |
| Aile/anne öyküsü | 4 | 3 |

Sayım ayrı hüküm sayısı değil, regex eşleşmesidir. Kalan kişisel karar cümlesi hekim yakınlığına güvenlik sınırı; kapanış ise okura açık sonuçtur. Kalan aile öyküsü kullanımları bölüm açılışı, somut öykü ve kapanıştaki kuşak bağı işlevindedir. Karar değişimi bölümünde başlık, lede ve somut eski/yeni karar bir arada tutuldu. Üç kısa kapanış farklı işlevdedir (öğrenilen refleks, duygu, açık soru); mekanik tekrar sayılmadı.

## Teknik düzeltmeler (mevcut yerel kaynak)

İki inceleme satırı Mumcu; dolu sorumluluk notu; arşivde özet+tıbbi not+inceleyici+güncelleme tarihi; yalnız tek makale export seçeneği. Görseller kanonik araçla 1200×1500 / 2400×1000, IPTC etiketleri korunmuş. Kırpma aracının position seçeneği onarıldı (gravity/strategy anahtarları Sharp resize tarafından dikkate alınmıyordu). Üst hero değişmedi.

## Kontroller

Astro compiler: yeni taslak 0 tanı. Editorial: 0 aday. Fidelity anlatı gövdesi: takip edilen öğelerde fark yok; anlam eşitliği veya tıbbi onay değildir. Standalone önizlemenin rendered kontrolündeki anonim-review adayı, 'onay bekliyor' durum başlığının yanlış pozitifidir; tamamlanmış inceleme iddiası yoktur.
