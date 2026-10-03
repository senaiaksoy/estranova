# Revizyon özeti — Tartı Susunca Kalan (3 Ekim 2026)

> **Durum (3 Ekim 2026):** Yazar onayı KC bildirimiyle alındı (“başak onayladı”; form JSON yanıtı yok — bkz. `onay-yaniti.json`). Revize kaynak canlı rotaya alındı, paket `onaylanan/` altına taşındı. Aşağıdaki “dokunulmadı” ifadesi onay öncesi duruma aittir.

**Yazar:** Başak Pelister (standart yazar — 5 dk form zorunlu)
**Canlı rota:** `/zihin-denge/duygusal-denge/olcu-panigi-beden-algisi-menopoz/` — **dokunulmadı**; yayındaki sürüm 16 Temmuz 2026 onaylı metin.
**Revize kaynak:** `site-kaynak.astro` · **Önceki kaynak:** `onceki-kaynak.astro`
**Başak'ın okuyacağı sayfa:** `revizyon-onizleme.html` (form ve landing bağlantıları buraya yönlendirildi)

## Neden

KC talebiyle yapılan inceleme (3 Ekim 2026): deneme yazısında gövde içi SSS ve mekanik izler.

## Değişiklikler

1. **Son soru bölümü (5 → 3 soru):** Cevaplar kişisiz danışman dilindeydi ve gövdeyi tekrar ediyordu. Kalan üç soru Başak'ın birinci tekil sesiyle yeniden yazıldı; tıbbi içerik (günlük değişkenler, tartılma sıklığını uzmanla konuşmak, bazı durumlarda düzenli izlem gerektiği) korundu. Çıkarılanlar: "kıyafet dar gelmesi" ve "annem ile kızım" (gövdede `ayna` ve `uc-kusak` bölümleri karşılıyor).
2. **"X değil, Y" antitezi:** ~9 noktalı + birkaç cümle içi kullanım → 3 (sınır 2–3).
3. **Üç nokta:** 7 → 2.
4. **"self-care pozu"** → "fotoğraflık bir kendine özen pozu".
5. **Teknik:** kullanılmayan `tocEntries` kaldırıldı; `modifiedDate` / `lastUpdated` eklendi (şimdilik 3 Ekim 2026 — yayın günü güncellenecek).

Değişmeyenler: sahneler, kızıyla sofra sahnesi, anne kuşağı cümleleri, kilo yolculuğu sınır cümlesi ("tek formül yok"), `Evidence` etiketleri, `MedicalContextNote`, başlık ve açıklama. Yeni deneyim veya sahne eklenmedi.

## Doğrulama

Revize kaynak geçici olarak canlı yola kopyalanıp `compliance`, `prebuild` (tarih tutarlılığı dahil) ve tam `build` çalıştırıldı — temiz. Ardından canlı dosya `git checkout` ile geri yüklendi.

## Onay sonrası adımlar

1. Başak'ın form yanıtı (JSON) bu pakete `onay-yaniti.json` olarak kaydedilir.
2. ONAYLIYORUM ise: `site-kaynak.astro` canlı yola kopyalanır, tarihler yayın gününe çekilir, `article-approvals.ts` notu ve `article-log.md` güncellenir, paket `onaylanan/` altına taşınır, `articles:export` taze build'den çalıştırılır.
3. DEĞİŞİKLİK İSTİYORUM ise: revizyon yapılır, yeni paket + yeni form üretilir.
