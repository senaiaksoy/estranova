# Op. Dr. Çağrı Sade — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-05-02. Estetik konularda promosyon yasakları **en sıkı** çerçevede.

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — Senai/Metin/Alp paraleli, 4. eksen).
- **Eksen:** Yüz ve cilt yaşlanması 40+; estetik karar süreci (kişiselleştirme felsefesi).
- **Yazar imzası:** "Op. Dr. Çağrı Sade" (Op. Dr. öneki var — cerrah).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default `article-schema.ts:71`).

## Estetik konuları için Estranova özel uyarısı

CLAUDE.md §1 (klinik sitesi DEĞİL) ve §4 (promosyon yasakları) bu yazar için **en sıkı** uygulanır:

- Önce-sonra anlatımı MUTLAK YASAK.
- Marka adı (dolgu / botoks / cihaz / lazer / iplik / krem) gövdede MUTLAK YASAK.
- "25 yıl deneyim / Aston gözleminde / binlerce hasta" promosyonel vitrini gövdede YASAK.
- Kendi sitesi (cagrisade.com.tr) / Nişantaşı muayenehane / Amerikan Hastanesi yönlendirme gövdede YASAK.

## Dosya yapısı

```
writers/cagri-sade/
├── README.md              # bu dosya
├── profile.yaml           # makina-okunur
├── cold.md                # kamuya açık biyografi + tema kesişimi (sıkı liste)
├── warm.md                # yazma stili + manifesto (lazy)
├── hot.md                 # yürütme + ton + self-check (estetik sıkı)
├── hidden.md              # çift rol uyarısı + iç notlar
└── citations/
    └── canonical-sources.md   # kaynak izi (CS-K / CS-T)

writers/cagri-sade-article-log.md   # makale akümülatif log + cooldown
```

## v0.1 → v0.2 geçiş protokolü

**v0.1 (mevcut):** profile iskeleti + lazy aktivasyon notları + placeholder manifesto cümleleri.

**v0.2 hedefi (ilk makale öncesi):**

1. cagrisade.com.tr blog 4-5 yazıyı tam metin topla (öncelik: göz kapağı karar / dudak dolgusu karar / sigara-beslenme / sekonder rinoplasti / kombine güzellik).
2. PubMed `Sade C[Author]` sorgusu.
3. YouTube kanalında 1-2 video transkripti.
4. 4-6 manifesto kalıbı türet → kullanıcı onayı.
5. 10 açılış / 10 kapanış / 6 dengeleyici varyant → kullanıcı onayı.
6. hot.md §4 + warm.md §4e + profile.yaml `manifesto_templates` + `pattern_pool_sizes` güncelle.
7. `writer_version: v0.2`.

## Estranova'da iki yerde görünür (bilinçli mimari)

- **Yayın Kurulu → Bilimsel Yazarlar** kartı (yeni — `category: 'scientific'`).
- **Yayın Kurulu → Tıbbi Danışmanlar** kartı (mevcut — Plastik Cerrahi rolü, korunuyor).

## Çift Rol Uyarısı durumu

`profile.yaml` → `dual_role_warning.active: false` (default). Senai (jinekolog) ile Çağrı Sade arasındaki olası mesleki bağ (labiaplasti / vajinoplasti vakalarında) kullanıcı doğrulamasına bağlı.
