# Revizyon özeti — Yıllarca Beklediğim Cevabı Duyduğumda (13 Ekim 2026)

> **Durum (13 Ekim 2026):** Yazar onayı KC bildirimiyle alındı ("yazar onay verdi, Başak onayı var"; form JSON yanıtı yok — bkz. `onay-yaniti.json`). Tıbbi bilgi kontrolü: Dr. Alper Mumcu inceledi ve onayladı (KC bildirimi). Revize kaynak canlı rotaya alındı, paket `onaylanan/` altına taşındı. Aşağıdaki "dokunulmadı" ifadeleri onay öncesi duruma aittir.

**Yazar:** Başak Pelister (standart yazar — 5 dk form zorunlu)
**Canlı rota:** `/hormonal-gecis/menopoz/dokuz-yillik-menopoz-sonunda-hrt-karari/` — **gövde metnine dokunulmadı**; yayındaki sürüm 7 Mayıs 2026 metni. Canlı dosyada yalnızca yazar metnini değiştirmeyen teknik düzeltmeler var (aşağıda).
**Revize kaynak:** `site-kaynak.astro` · **Önceki kaynak:** `onceki-kaynak.astro` (HEAD)
**Başak'ın okuyacağı sayfa:** `revizyon-onizleme.html` (form ve landing bağlantıları buraya yönlendirildi)

## Neden

KC talebiyle yapılan geniş audit (13 Ekim 2026). Ayrıca 7 Mayıs onay kaydı (`basak-test-makale (1).pdf`) 30 Nisan tarihli editoryal test taslağına dayanıyor; yayındaki metin o taslaktan farklı. Bu paket, yayındaki metnin revize hâli için ilk gerçek yazar onayıdır.

## Metin değişiklikleri (yazar onayı bekliyor)

1. **Dil:** "bir abartılı bir dönüşüm anlatısı değil" → "abartılı bir dönüşüm hikâyesi yok"; "kendi başına yetişmek" → "kendi kendine olgunlaşmak"; "güvenlik şeridi" → "emniyet ağı"; "nasıl tercüme edebilirsiniz" → "nasıl anlatırsınız"; "Bir genç kız" → "Genç bir kız"; "HRT bakışı … bir dilden kuruluyordu" → "hormon tedavisine (HRT) … bir dille bakılıyordu"; "dürüst bir yerin" → "en dürüst kaynakların, bilmediklerini de açıkça söyleyenler"; S1'de iki kez geçen "bedenimi dinlediğim" tekrarı giderildi.
2. **Tekrar (structure-check):** "aile öyküsü karar vermez" 4 → 3 (son paragraf tek cümle); "karar zamanla değişir" 3 → 2; S4'te "güven tedavinin yerine geçmez" cümlesi, sonraki paragraf aynı şeyi söylediği için çıktı.
3. **Kalıplar:** "X değil, Y" ~8 → 3 (başlık ve kızına söylenen alıntı dahil); "anlamına gelmez" inkâr çerçevesi 2 → 0; tabela cümleleri ("burada açık cümleyi kurmak önemli", "en dürüst kapanış burada başlıyor") çıktı.
4. **Tıbbi doğruluk:** "Bence bu sorunun tek başına bir yaşı yok" çıktı. Yerine: menopozdan bu yana geçen süre de tartılır; ilk on yıl içinde ya da 60 yaştan önce başlanan tedavide yarar–risk dengesi genellikle daha olumlu (Evidence 4). Kaynak (arka plan, gövdede atıf yok — yaşıt rejimi): NAMS 2022 Hormone Therapy Position Statement, Menopause 2022;29(7):767-794, PMID 35797481, doi:10.1097/GME.0000000000002028. `MedicalContextNote`'a menopozdan geçen süre, pıhtılaşma ve inme eklendi (aynı kaynak).
5. **Başak imzası (hot.md: soru-cevap HARD, üç nokta 2–4, 3 parçalı kapanış):** S2'ye soru, S6 lede'si soru; iki üç nokta; kapanışa "bilmiyorum" itirafı; S3'e teselli cümlesi. Bunlar yeni cümlelerdir, yeni olgu veya anı içermez; yazarın onayı özellikle isteniyor.
6. **Teknik (revize kaynakta):** `modifiedDate` / `lastUpdated` = 13 Ekim 2026 (yayın günü güncellenecek).

Değişmeyenler: sahneler, erkek kardeşin cümlesi, hekim "evet"i, kızla sofra sahnesi, anne cümleleri, başlık, H2'ler ve anchor'lar, `Evidence` etiketleri (bir yenisi eklendi), `RelatedReadings`.

## Canlıya zaten alınan teknik düzeltmeler (yazar onayı gerektirmez)

- Tıbbi bilgi kontrolü: Senai Aksoy → Dr. Alper Mumcu (byline + şema; KC kararı — yazarın hekim arkadaşı Senai Aksoy olduğu için çakışma).
- Byline görseli 4:5 (`basak-pelister-hrt-karari-byline.webp`, 1072×1340) ve kart/OG görseli 2.4:1 (`basak-pelister-hrt-karari.webp`, 2400×1000); ikisine de IPTC `trainedAlgorithmicMedia` etiketi; `submenuHeroByRoute` makale girdisi kaldırıldı, kart `articleCardImageByRoute`'a taşındı; `og:image` artık varsayılan değil.
- Alt metin tek cümleye indi; `tocEntries` (kullanılmıyordu) silindi; okuma süresi 9 → 7 dk; manifest açıklaması sayfa açıklamasıyla eşitlendi.

## Doğrulama

Revize kaynak canlı yolda geçici olarak derlendi: `check-article-dates`, `astro build`, `rendered-check` (0 bulgu), SEO audit temiz. Ardından canlı dosya HEAD + teknik düzeltmeler olarak geri yazıldı.

## Onay sonrası adımlar

1. Başak'ın form yanıtı (JSON) bu pakete `onay-yaniti.json` olarak kaydedilir.
2. ONAYLIYORUM ise: `site-kaynak.astro` canlı yola kopyalanır, `modifiedDate`/`lastUpdated` yayın gününe çekilir, `article-approvals.ts` notu ve `article-log.md` güncellenir, paket `onaylanan/` altına taşınır, `articles:export` taze build'den çalıştırılır.
3. DEĞİŞİKLİK İSTİYORUM ise: revizyon yapılır, yeni paket + yeni form üretilir.
