# Revizyon 2 — HRT yan etkileri ve izleme (30 Eylül 2026)

**Durum:** Yazar onayı (Dr. Alper Mumcu) ve tıbbi inceleme (Doç. Dr. Senai Aksoy) bekliyor. Kaynak ağacında (`src/pages/…`) hâlâ 30 Eylül onaylı sürüm duruyor; bu revizyon yalnızca `makale-kaynak.astro` içinde. Commit/push/deploy yok.

**İstek:** Kullanıcı denetim raporundan sonra 1–3 numaralı düzeltmeleri onayladı: İçindekiler eşitleme, uydurma anekdot eklemeden sıcaklık katmanı, gövde H2 sayısını 8'e indirme.

## Değişenler
- **Bölüm yapısı:** 9 → 8 gövde H2. "Kontrol Görüşmesine Hazırlanmak" bölümü, "İzleme Takvimi ve Kontrole Hazırlık" altına alındı. SSS artık güvenlik belirtilerinden önce; makale güvenlik listesi ve sakin bir kapanışla bitiyor.
- **İçindekiler:** Etiketler H2 metinleriyle birebir aynı.
- **Bölüm açılışları çeşitlendi:** sahne (ilaç sonrası meme hassasiyeti; gece uyanma), teselli ("Önce şunu söyleyeyim…"), duygu ("Kanama görmek insanı haklı olarak tedirgin eder"), doğrudan hitap ("Takvim aslında basit"), niyet ("Bu listeyi korkmanız için değil…").
- **Duygu anları:** "“Abartıyor muyum?” diye düşünüp susmayın"; kapanışta "İlk aylarda kaygı duymanız çok anlaşılır."
- **Tereddüt seyreltme:** üç yerde "-ebilir" kesin ve güvenli ifadeye çevrildi (not yeter; kafasını karıştırır; not edin).
- **Dil:** "Rahmi olan kişilerde" → "kadınlarda"; "Bazı kişiler" → "Bazı kadınlar".

## Yazarın ayrıca onaylaması gerekenler (hekim sesi)
Bu cümleler anekdot değil, yaklaşım beyanı; yine de Dr. Mumcu'nun kendi pratiğini yansıtıp yansıtmadığını o onaylamalı:
1. "Yanıtlarken üç şeye bakarım: Belirti ne zaman başladı, ne kadar şiddetli ve zamanla nasıl değişiyor?"
2. "Benim ilk sorum genellikle şudur: “Sizi en çok ne rahatsız ediyor?”"
3. "Her belirti için “ikinci ayda düzelir” gibi sabit bir süre vermem; bu dürüst bir söz olmaz."
Uymuyorsa bu cümleler kişisiz hâline döndürülür; tıbbi içerik etkilenmez.

## Değişmeyenler
Tüm tıbbi iddialar, süreler ve eşikler; 4 Evidence; 6 kaynak ve 21 atıf bağlantısı (sayım eşleşti); beş Dr. Aksoy SSS yanıtı (article-faqs.ts, birebir); Kısa Klinik Yanıt; Bilimsel Editör Notu; tıbbi uyarı; hero ve görseller; schema tarihleri.

## Kontroller (revizyon geçici olarak kaynağa konup yapıldı, sonra onaylı sürüm geri yüklendi)
- `npm run build:ci`: geçti (143 sayfa; compliance, encoding, SEO output audit). Lexicon: hard_ban 0; tek soft uyarı başka dosyada.
- Üretilen HTML: 1 H1, 1 FAQPage, yinelenen id yok, kırık iç anchor yok.
- Kalıp taraması (gövde, SSS hariç): "X değil, Y" (değil; ve değil, deseni) 1 → 1, bağlamla okunduğunda ~3 (sınırda); beden kişileştirme 0; soru başlıklı H2 1; "-ebilir/-abilir" 18 → 15; ≤6 kelimelik cümle (otomatik bölme, başlık kırıntıları dahil) 12 → 19.

## Onay gelince
Yazar ONAYLIYORUM + tıbbi inceleme tamamlandığında: `makale-kaynak.astro` → `src/pages/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme.astro`; paket `onaylanan/` altına taşınır; `article-approvals.ts` notu revizyon 2'yi kapsayacak şekilde güncellenir; article-log'a kalıp seçimi yazılır. `modifiedDate` onay gününe çekilir.
