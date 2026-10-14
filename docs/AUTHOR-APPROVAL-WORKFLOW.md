# Yazar Onay İş Akışı

> **Versiyon 2.0 (2026-10-14) — sözlü onay.** Yazar ve tıbbi onaylar Dr. Senai Aksoy (KC) tarafından **doğrudan ve sözlü** olarak verilir. Onay formu, onay paketi, `kontrol-formu.html`, `makale-onizleme.html` ve onay e-postası **artık üretilmez**. v1.1 (5 dakikalık form akışı) yürürlükten kalkmıştır.

---

## Temel kural

- Yazar onayı ve tıbbi onay **KC'ye sorulur**, sözlü yanıt alınır.
- Yazar için form, paket veya e-posta taslağı **hazırlanmaz**.
- `npm run author:send-for-approval` **kaldırıldı** (2026-10-14); onay paketi üretici script'i de silindi.
- Onay gelmeden makale siteye yayınlanmaz: `src/pages/` canlı rota, hub/sayı indeksi, RSS/static manifest veya `icerik/yayinlanmis-makaleler/` kaydı açılmaz.

---

## Klasör mimarisi

```
icerik/
  yazar-onaylari/
    <slug>/
      README.md                  (yazar başlığı + makale sayısı)
      article-log.md             (akümülatif üretim günlüğü; sözlü onay ve stil notları burada)
      onay-bekleyen/             (v1.1 öncesinden kalan eski paketler; yeni paket açılmaz)
      onaylanan/                 (onay izleri ve arşivlenmiş paketler)
  yayinlanmis-makaleler/         (yalnız onaylı ve yayındaki makalelerin kronolojik dump'ı)
```

---

## Akış (v2.0)

### 1. Taslak hazırlanır

AI agent makaleyi `docs/ARTICLE-PRODUCTION-SPEC.md` kurallarıyla yazar. Taslak onay gelene kadar yayın statüsünde değildir.

### 2. KC'ye sorulur

Makale, yazar ve (gerekiyorsa) tıbbi kapsam KC'ye doğrudan sorulur. Form, paket veya e-posta üretilmez.

### 3. Sözlü yanıt işlenir

| Yanıt | İşlem |
|---|---|
| **Onay** | `src/data/article-approvals.ts` kaydı eklenir; `note` alanına `KC sözlü onayı — <tarih> — <kısa bağlam>` yazılır. `article-log.md`'ye onay satırı girilir. Varsa eski paket `onaylanan/` altına taşınır. Yayın adımları ancak bu noktadan sonra başlar. |
| **Değişiklik** | Makale düzeltilir, yeniden KC'ye sorulur. Eski bir paket varsa dokunulmadan kalır. |
| **Stil geri bildirimi** | `article-log.md`'ye "sözlü geri bildirim / stil etkisi / önerilen profil güncellemesi" olarak özetlenir. `writers/<slug>/` profil dosyalarına kalıcı değişiklik yalnızca KC onayıyla yapılır. |

### 4. Yayın

Onay kaydı girildikten sonra `articles:status`, hub/sayı indeksleri, RSS/static manifest ve `icerik/yayinlanmis-makaleler/` güncellenir.

---

## Editör doğrudan onayı (kapsam)

- `berna-aksoy`, `alara-baykent`, `senai-aksoy` ve `estranova-editorial` için v2.0 öncesinde de form zorunlu değildi; v2.0'da **tüm yazarlar** bu yolla ilerler.
- Doğrudan onay yine iz bırakır (`article-approvals.ts` + `article-log.md`).
- Bu süreç yalnızca onay yolunu tanımlar. Tıbbi doğruluk, Çift Rol, BEN, Evidence, yayın checklist'i ve stil disiplini aynen geçerlidir.

### Kurumsal imza (`estranova-editorial`)

- "Estranova Editörleri" kurumsal byline'dır; kişi profili değildir ve görünür kadroda listelenmez.
- Onay yine KC'den sözlü alınır; kayıt `article-approvals.ts` içinde tutulur.

---

## Pasif yazar kuralı

Yazar geçici olarak kadrodan çıkarılacaksa profili, `article-log.md` ve onay arşivi silinmez. `src/data/writers.ts` içinde `status: 'inactive'` işaretlenir. Tekrar aktif etmek için `status` alanı kaldırılır veya `active` yapılır.

Pasif tutulan yazarlar: `bahar-ozeray`, `elif-ozcan-dulundu`, `ozlem-denizmen`.

---

## Komutlar

| Komut | Durum |
|---|---|
| `npm run authors:init-folders` | Geçerli. Yazar klasör iskeletini açar. |
| `npm run articles:status` | Geçerli. Onaylı/onaysız makale dökümü. |
| `npm run articles:export` | Geçerli. Yayındaki makaleleri markdown'a döker. |

---

## Versiyon

- **v2.0** (2026-10-14) — Yazar ve tıbbi onay KC'ye doğrudan sorulur ve sözlü alınır. Form, paket ve onay e-postası üretimi durdu. Kayıt `article-approvals.ts` + `article-log.md` ile tutulur.
- **v1.1** (2026-05-04) — 5 dakikalık form, değişiklik döngüsü, yalnızca yazar onayı sonrası yayın. *(Yürürlükten kalktı.)*
- **v1.0** (2026-05-03) — İlk yayım. *(Yürürlükten kalktı.)*
