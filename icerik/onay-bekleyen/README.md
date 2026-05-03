# Onay Bekleyen Paketler

Yazara gönderilmiş ama henüz onaylanmamış makaleler için **geçici depo**.
Onay sonrası dosyalar `icerik/yazarlar/<slug>/`'a taşınır ve bu klasörden silinir.

## Yapı

```
icerik/onay-bekleyen/
  <slug>/
    YYYY-MM-DD_<makale-slug>/
      kontrol-formu.html           10 dk tıklanabilir form (tek başına çalışır)
      makale-onizleme.html         yazıyı + form linkini gösteren landing
      meta.json                    gönderim/deadline/status meta verisi
```

## Akış (özet)

1. **Üret:** `npm run author:send-for-approval -- --slug X --article /path`
2. **İlet:** Editör `kontrol-formu.html` dosya yolunu (veya canlı URL'i) email ile yazara gönderir
3. **Yanıt:** Yazar formu tarayıcıda doldurur, "Onayla" veya "Değişiklik İste" butonuyla `mailto:` ile editöre yanıt gönderir
4. **İşle:** Editör email'deki JSON'u `icerik/yazarlar/<slug>/onay-belgeleri/`'a kaydeder; onaysa makaleyi `yayinlanan/`'a taşır + `src/data/article-approvals.ts`'e entry ekler; revizyon ise yeni paket üretir

## Detay

- [`docs/AUTHOR-APPROVAL-WORKFLOW.md`](../../docs/AUTHOR-APPROVAL-WORKFLOW.md) — uçtan uca sistem dokümantasyonu
- [`templates/`](../../templates/) — form ve landing template'leri (placeholder'lı)

## Hijyen

Bu klasör **geçicidir**. Onay süreci tamamlanan paketler temizlenir; yalnızca yanıt bekleyen paketler burada durur. Deadline aşan paketler için `meta.json` durumu manuel "expired" olarak güncellenir veya yeniden gönderilir.
