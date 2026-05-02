# Dr. Metin Alış — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-05-02. İlk versiyon iskelettir; manifesto kalıpları ve dynamics havuzları "lazy aktivasyon" ile ilk makale üretiminde tamamlanır.

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — Senai paraleli, ayrı eksen).
- **Eksen:** Endokrinoloji ve metabolizma — hormonal geçişin bilimsel tercümanı.
- **Yazar imzası:** "Dr. Metin Alış" (Dr. öneki var; Senai'den farklı — Senai'nin "iki ayrı kart" mimarisi sadece kendine özgü).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default `article-schema.ts:71`).

## Dosya yapısı

```
writers/metin-alis/
├── README.md             # bu dosya
├── profile.yaml          # makina-okunur konfigürasyon
├── cold.md               # kamuya açık biyografi + tema kesişimi
├── warm.md               # yazma stili + manifesto kalıpları (lazy)
├── hot.md                # operasyonel: yürütme protokolü + ton + self-check
├── hidden.md             # yayınlanmaz: çift rol uyarısı + iç notlar
└── citations/
    └── canonical-sources.md   # kaynak izi (MA-K / MA-T)

writers/metin-alis-article-log.md   # makale akümülatif log + cooldown
```

## v0.1 → v0.2 geçiş protokolü

**v0.1 (mevcut):** profile iskeleti + lazy aktivasyon notları + placeholder manifesto cümleleri.

**v0.2 hedefi (ilk makale öncesi):**

1. metinalis.com'un kalan 3 kategori sayfasını topla (metabolik sendrom, şeker hastalığı, Cushing).
2. PubMed `Alis M[Author]` sorgusu ile birinci-isim makaleleri tara.
3. TEMD osteoporoz kılavuzunda spesifik bölüm katkısını doğrula.
4. 4-6 manifesto kalıbı türet → kullanıcı onayı.
5. 10 açılış / 10 kapanış / 6 dengeleyici varyantını rafine et → kullanıcı onayı (kısa form ≤5 dakika).
6. hot.md §4 + warm.md §4e + profile.yaml `manifesto_templates` + `pattern_pool_sizes` güncelle.
7. `writer_version: v0.2` ve article-log'da ilk satır.

## Estranova'da iki yerde görünür (bilinçli mimari)

- **Yayın Kurulu → Bilimsel Yazarlar** kartı (yeni — `category: 'scientific'`).
- **Yayın Kurulu → Tıbbi Danışmanlar** kartı (mevcut — Endokrinoloji rolü, korunuyor).

> Memory: kullanıcı talebi — *"daha önce bilim kurulunda olan yazarlar/doktorlar korunacak"*. İki kart aynı kişidir; rolleri farklı olduğu için ikisi de görünür.

## Çift Rol Uyarısı durumu

`profile.yaml` → `dual_role_warning.active: false` (default). Senai (jinekolog) ile Metin (endokrinolog) arasındaki olası mesleki bağ kullanıcı tarafından doğrulanmadığı için kapalı. Doğrulanırsa `hidden.md §5c-ek` aktif kural setine taşınır.
