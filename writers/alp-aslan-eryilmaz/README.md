# Dr. Alp Aslan Eryılmaz — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-05-02. İlk versiyon iskelettir; manifesto kalıpları ve dynamics havuzları "lazy aktivasyon" ile ilk makale üretiminde tamamlanır.

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — Senai/Metin paraleli, kalp damar ekseni).
- **Eksen:** Önleyici kardiyoloji ve menopoz sonrası kalp sağlığı.
- **Yazar imzası:** "Dr. Alp Aslan Eryılmaz" (Dr. öneki var).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default `article-schema.ts:71`).

## Dosya yapısı

```
writers/alp-aslan-eryilmaz/
├── README.md             # bu dosya
├── profile.yaml          # makina-okunur konfigürasyon
├── cold.md               # kamuya açık biyografi + tema kesişimi
├── warm.md               # yazma stili + manifesto kalıpları (lazy)
├── hot.md                # operasyonel: yürütme protokolü + ton + self-check
├── hidden.md             # yayınlanmaz: çift rol uyarısı + iç notlar
└── citations/
    └── canonical-sources.md   # kaynak izi (AAE-K / AAE-T)

writers/alp-aslan-eryilmaz-article-log.md   # makale akümülatif log + cooldown
```

## v0.1 → v0.2 geçiş protokolü

**v0.1 (mevcut):** profile iskeleti + lazy aktivasyon notları + placeholder manifesto cümleleri.

**v0.2 hedefi (ilk makale öncesi):**

1. eryilmazalp.com'un kalan 4 kategori sayfasını topla.
2. PubMed `Eryilmaz AA[Author]` sorgusu.
3. Türkçe gazete / dergi köşe yazısı taraması.
4. 4-6 manifesto kalıbı türet → kullanıcı onayı.
5. 10 açılış / 10 kapanış / 6 dengeleyici varyant → kullanıcı onayı (kısa form ≤5 dakika).
6. hot.md §4 + warm.md §4e + profile.yaml `manifesto_templates` + `pattern_pool_sizes` güncelle.
7. `writer_version: v0.2` ve article-log'da ilk satır.

## Estranova'da iki yerde görünür (bilinçli mimari)

- **Yayın Kurulu → Bilimsel Yazarlar** kartı (yeni — `category: 'scientific'`).
- **Yayın Kurulu → Tıbbi Danışmanlar** kartı (mevcut — Kardiyoloji rolü, korunuyor).

> Memory: kullanıcı kuralı — *"daha önce bilim kurulunda olan yazarlar/doktorlar korunacak"*.

## Çift Rol Uyarısı durumu

`profile.yaml` → `dual_role_warning.active: false` (default). Senai (jinekolog) ile Alp (kardiyolog) arasındaki olası mesleki bağ kullanıcı tarafından doğrulanmadığı için kapalı.
