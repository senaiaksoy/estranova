# Dt. Duygu Karaosmanoğlu — Pending Citations (editör onay kuyruğu)

> **Bu dosya AI agent'ın korpus dışı önerdiği, editör onayı bekleyen atıfları tutar.**
>
> **Akış:** AI aday önerir → bu dosyaya yazar → editör (Senai Aksoy veya delege) haftalık batch olarak inceler → onaylananlar `extended.md`'ye taşınır, reddedilenler bu dosyada **REDDEDİLDİ** etiketi ile arşivlenir.
>
> **AI agent için kural:** `pending.md`'deki adaylar makale yazımında **kullanılmaz**; yalnız `extended.md` ve `canonical-sources.md` yumuşak/mercek referans kalıpları kullanılır.
>
> **Duygu özel notu:** Duygu birebir alıntı default olarak yapmaz (`profile.yaml.citations.frequency_rule.direct_quote_per_article_max: 0`). **Klinisyen otorite veya klinik dekoru içeren adaylar bu kuyruğa BİLE yazılmaz** — MUTLAK YASAK (`hidden.md §5b` Diş Hekimi Kimliği KRİTİK).

---

## Yazma şablonu (AI bunu kopyalayıp doldurur)

```markdown
### [PENDING] [Yazar / Kaynak Adı] — [Eser / Bağlam], s.[Sayfa veya zaman damgası]

> *"Birebir alıntı tırnak içinde."*

- **Önerildiği makale:** [slug + tarih]
- **Atıf etiketi:** [DK ↦ Yazar]
- **Atıf üslubu:** "[Duygu'nun yumuşak çerçevesi]"
- **Eser kanonik kaynağı:** [yayınevi, çevirmen]
- **Doğrulayan kaynaklar (≥2):** [URL/kaynak 1] · [URL/kaynak 2]
- **Önerme bağlamı:** [hangi paragraf, neden bu cümle seçildi, neden yumuşak referans yetmiyor]
- **CLAUDE.md §4 filtresi:** [kuruluş adı sızıntısı yok mu]
- **Diş hekimi kimliği filtresi:** [klinisyen otorite / klinik dekoru sızıntısı yok mu — VARSA AYNI ANDA REDDEDİLİR]
- **Estetik marka filtresi:** [estetik uygulama markası / cihaz modeli sızıntısı yok mu — VARSA AYNI ANDA REDDEDİLİR]
- **Aile gizlilik filtresi:** [21 yaş kızın spesifik kimlik bilgisi sızıntısı yok mu — VARSA AYNI ANDA REDDEDİLİR]
- **Frekans uyumu:** [bu atıf eklendiğinde makaledeki toplam ödünç-cümle sayısı]
- **3 sınır vurgusu uyumu:** [atıfın yanına eklenecek üç sınır vurgusu — `hot.md §5c` fiziksel yakınlık]
- **Notlar:** [varsa]

**Editör kararı:** [BEKLİYOR / ONAYLANDI / REDDEDİLDİ — gerekçe]
```

---

## Aktif kuyruk

> _Henüz hiçbir aday önerilmedi. İlk pilot makale sonrası AI buraya yazmaya başlayacak._

---

## Reddedilen adaylar (arşiv)

> _Henüz reddedilen aday yok._

---

## İstatistikler

- Bekleyen aday: **0**
- Onaylanan: **0** (bkz. `extended.md`)
- Reddedilen: **0**
- Son haftalık review: — (henüz yapılmadı)
- Sonraki review: pilot makale sonrası
