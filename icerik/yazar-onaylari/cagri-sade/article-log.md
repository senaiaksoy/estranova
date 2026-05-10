# Op. Dr. Çağrı Sade — Article Log

> Yazılan her makalenin kalıp seçimi ve cooldown takibi.

---

## v0.2 — 2026-05-10 (debut + lazy aktivasyon)

| # | Tarih | Yazı | Eksen | Açılış | Kapanış | Manifesto | Dengeleyici | Anekdot | Notlar |
|---|---|---|---|---|---|---|---|---|---|
| 01 | 2026-05-10 | [Hangi Yüz Müdahalesi Sizin İçin? — 40 Sonrası 'Ölçü Sorusu'](/zamansiz-yasam/yuz-mudahalesi-olcu-sorusu) | estetik-karar-kriterleri + dogal-yaslanma-kabulu | "Ben yıllar içinde şunu fark ettim..." Çağrı ben-anlatımı (v3 seed) | "Ben size hep şunu hatırlatmak istiyorum: modaya değil, kendi yüzünüzün tarihine bakan bir yaklaşım..." (v3) | "yapılabilir mi → size uygun mu" (5 eksen, ben-anlatımı) | "Bu yazıda size öneri listesi sunmayacağım; karar verirken zihninizde tutmanın yardımcı olacağına inandığım bir çerçeveyi paylaşacağım" (v3) | "Bana gelen kadınların çoğunda... / Ben bunu hep şöyle özetliyorum / Bana en sık sorulan soru..." (klinik gözlem aktarımı, vitrinsiz) | KC editör doğrudan onayı v1; **revize v2** (didaktik→samimi, kısaltma); **revize v3 (10 May)**: "dr çağrı sadenin ağzından daha sıcak ve samimi" feedback'iyle ben-anlatımına geçildi. 3. kişi gözlem ("bir hekim olarak gözlemim") yerine 1. kişi danışman tonu ("ben yıllar içinde fark ettim ki", "bana gelen kadınların", "size hep söylüyorum"). Vitrin yasakları korundu (25 yıl/binlerce hasta YOK). Profile.yaml v0.3 → **v0.4** |

---

## Cooldown takibi (v0.2)

| Kalıp türü | Havuz | Cooldown | Son kullanım | Kullanılan varyant |
|---|---|---|---|---|
| Açılış | 6 | 6 makale | 2026-05-10 | Aynaya bakan kadın · hekim gözlemi |
| Kapanış | 6 | 4 makale | 2026-05-10 | 3-katmanlı özet + "sizin elinizde kalması" |
| Dengeleyici | 6 | 4 makale | 2026-05-10 | "Bu yazı bir öneri rehberi değil; bir karar çerçevesi" |
| Bilmiyorum | 6 | 4 makale | — | (debut'ta kullanılmadı) |
| Hekim çerçevesi | 6 | 4 makale | 2026-05-10 | "Bir hekim olarak gözlemim şu" |
| Anekdot kapısı | 6 | 4 makale | 2026-05-10 | "Aynaya bakan kadın çoğu zaman..." |
| İmza kapanış | 6 | 4 makale | 2026-05-10 | "kararın sizin elinizde kalması için kurulmuştur" |

---

## v0.1 → v0.2 geçişi (2026-05-10)

İlk makale üretildi ve havuzlar **lazy aktivasyon** ile bu yazıdan seed alındı:

1. ✅ AI agent kullanıcıya 4 manifesto kalıbı önerdi (article body içinden çıktı):
   - **`olcu-sorusu`** — "yapılabilir mi" → "size uygun mu" + 5 eksen (yaş, beklenti, yaşam tarzı, sağlık zemini, motivasyon kaynağı)
   - **`ritim-dili`** — "panik dili yerine ritim dili" (doğal yaşlanma kabulü ↔ müdahale dengesi)
   - **`dort-katman`** — yüz yaşlanması = cilt + yağ + kemik + kas (mekanizma çerçevesi)
   - **`kadar-cok-degil-dogru`** — "Daha çok değil, daha doğru" (FAQ'da geçti, manifesto kapısı)
2. ✅ KC editör doğrudan onayı (article-approvals.ts kaydında).
3. ⏳ `writers/cagri-sade/hot.md §4` ve `warm.md §4e` güncellenmeli (bu PR'da yapılacak).
4. ⏳ `profile.yaml.pattern_pool_sizes` 6 → 10 (v0.2'de hedef; ilk makale ile 6 yeterli).
5. ✅ `writer_version` v0.1 → **v0.2** (profile.yaml).
6. ✅ Bu log'un ilk satırı dolduruldu.

---

## Sıradaki makale öncesi kontrol

- Yeni makale **estetik-karar-kriterleri** ekseninden geliyorsa: bu satırdaki açılış / dengeleyici / kapanış varyantlarından **farklı** seç. Cooldown 4-6 makale.
- Manifesto: aynı 4 kalıptan farklı bir kalıbı sırada kullan; aynı kalıp 4 makale ardışık yasak.
- "Bir hekim olarak" çerçevesi: bu yazıda 3 yerde kullanıldı — sıradaki makalede yoğunluğu azalt (1-2 kullanım yeter).
