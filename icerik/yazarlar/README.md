# Yazar Arşivi

Estranova'nın her yazarı için kalıcı arşiv. Her yazar için bir klasör vardır;
yayınlanmış makaleler ile yazarın doldurduğu onay formları yan yana tutulur.

## Yapı

```
icerik/yazarlar/
  <slug>/
    README.md              yazar başlığı + yayınlanan makale sayısı
    yayinlanan/            onaylı + yayında makaleler (markdown kopyaları)
      YYYY-MM-DD_<makale-slug>.md
    onay-belgeleri/        yazarın doldurduğu form yanıtları (JSON)
      YYYY-MM-DD_<makale-slug>.json
```

## Komutlar

| Komut | Ne yapar |
|---|---|
| `npm run authors:init-folders` | `src/data/writers.ts`'teki tüm yazarlar için klasör iskeletini açar (idempotent — tekrar çalıştırılabilir) |
| `npm run author:send-for-approval -- --slug X --article /path` | Yeni onay paketi üretir (`icerik/onay-bekleyen/` altına yerleşir) |
| `npm run articles:status` | Onaylı / onaysız makale dökümü |

## İlişkili belgeler

- [`docs/AUTHOR-APPROVAL-WORKFLOW.md`](../../docs/AUTHOR-APPROVAL-WORKFLOW.md) — sistem dokümantasyonu
- [`icerik/onay-bekleyen/README.md`](../onay-bekleyen/README.md) — geçici onay deposu
- [`icerik/yayinlanmis-makaleler/`](../yayinlanmis-makaleler/) — kronolojik dump (`articles:export`)
- [`src/data/article-approvals.ts`](../../src/data/article-approvals.ts) — onaylı makale envanteri (build entegrasyonu)
