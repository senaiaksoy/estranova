# Dr. Alper Mumcu — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-06-16. İlk versiyon iskelettir; manifesto kalıpları ve dynamics havuzları "lazy aktivasyon" ile ilk makale üretiminde mumcu.com korpusundan tamamlanır.

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — Senai/Metin paraleli, ayrı eksen).
- **Eksen:** Kadın hastalıkları ve doğum (jinekoloji). Senai ile **aynı branş**; ayrım KONUDA değil **SESTE**: Mumcu "1998'den beri kadınların sorduğu soruları sade ve içini ferahlatan bir dille yanıtlayan köklü başvuru hekimi" sesi.
- **Yazar imzası:** "Dr. Alper Mumcu" (kullanıcı kararı, 2026-06-16).
- **Tıbbi inceleyici (Mumcu'nun kendi makaleleri):** "Doç. Dr. Senai Aksoy" (default `src/utils/article-schema.ts`).
- **Mumcu'nun denetleyici rolü (2026-06-16):** Mumcu, **Doç. Dr. Senai Aksoy'un kendi yazdığı makalelerin** tıbbi denetleyicisidir (Senai kendini inceleyemez; aynı branş — kadın hastalıkları ve doğum). `buildArticleSchemas`, `writerSlug==='senai-aksoy'` olduğunda `reviewedBy`'ı otomatik "Dr. Alper Mumcu" atar; o makalelerin görünür Bilimsel Editör Notu imzası da Mumcu olur. Diğer tüm yazarların denetleyicisi Senai olmaya devam eder.
- **Portre:** kullanıcı sağlayacak; `writers.ts` `portrait` alanı şimdilik boş → kart `signaturePhrase`/baş-harf fallback'ine düşer.

## Eksen ayrımı (kritik — site içi yazar tekilliği)

Estranova'da jinekoloji ekseninde üç bilimsel ses var; çakışmamaları için:

| Yazar | Eksen | İmza |
|---|---|---|
| Doç. Dr. Senai Aksoy | Mahrem klinik + bilimsel editör | Tabu açma, GSM/idrar kaçırma/lokal HRT |
| Dr. Metin Alış | Endokrin-kavşak | Tiroid-menopoz, kemik, metabolik sendrom |
| **Dr. Alper Mumcu** | **Köklü başvuru hekimi sesi** | **Okurun gerçek sorusunu sade ve içini ferahlatan dille yanıtlama** |

Konu örtüşse de (menopoz, perimenopoz) **ses farkı belirleyicidir**: Mumcu soru-yanıt + güvence; mahrem-tabu derinliği Senai'de, endokrin teknik Metin'de kalır.

## Dosya yapısı

```
writers/alper-mumcu/
├── README.md             # bu dosya
├── profile.yaml          # makina-okunur konfigürasyon
├── cold.md               # kamuya açık biyografi + tema kesişimi
├── warm.md               # yazma stili + manifesto kalıpları (lazy)
├── hot.md                # operasyonel: yürütme protokolü + ton + self-check
├── hidden.md             # yayınlanmaz: çift rol uyarısı + iç notlar
└── citations/
    └── canonical-sources.md   # kaynak izi (AM-K / AM-T)

icerik/yazar-onaylari/alper-mumcu/article-log.md   # makale akümülatif log + cooldown
```

## v0.1 → v0.2 geçiş protokolü

**v0.1 (mevcut):** profile iskeleti + lazy aktivasyon notları + [AM-T] türetilmiş kalıplar. mumcu.com bot isteklerini 403 ile engellediği için korpus henüz birinci-elden toplanmadı.

**v0.2 hedefi (ilk makale öncesi):**

1. mumcu.com makale metinlerini topla (kullanıcı paylaşımı veya yetkili araç) → [AM-K] kanıt etiketi.
2. Soru-yanıt DNA'sını gerçek metinlerden doğrula; açılış/kapanış mikro-kalıplarını çıkar.
3. 5 → 10 açılış / 5 → 10 kapanış / 5 → 6+ manifesto varyantını kullanıcı onayıyla rafine et (kısa form ≤5 dakika).
4. Çift Rol Uyarısı'nı (meslektaş bağı) kullanıcıyla netleştir.
5. Portre görselini ekle (`/images/writers/alper-mumcu.webp`).

## CLAUDE.md klinisyen istisnası

Mumcu, CLAUDE.md §3 **klinisyen istisnası** kapsamındadır: klinik birinci tekil meşru ("klinik pratiğimde", "muayene odasında en sık duyduğum"), anekdot **klinik çerçeveli** ("bir hastam" — "bir kadın" değil). Promosyonel başhekim vitrini §4 ile YASAK; hitap **"siz"**.
