# Berna Aksoy — Pending Citations (editör onay kuyruğu)

> **Bu dosya AI agent'ın korpus dışı önerdiği, editör onayı bekleyen atıfları tutar.**
>
> **Akış:** AI aday önerir → bu dosyaya yazar → editör (Senai Aksoy veya delege) haftalık batch olarak inceler → onaylananlar `extended.md`'ye taşınır, reddedilenler bu dosyada **REDDEDİLDİ** etiketi ile arşivlenir (gelecekte aynı aday tekrar önerilmesin).
>
> **AI agent için kural:** `pending.md`'deki adaylar makale yazımında **kullanılmaz**; yalnız `extended.md` ve `canonical-sources.md` yumuşak referans kalıpları kullanılır. Bu dosya editör süreci içindir.
>
> **Berna özel notu:** Berna birebir alıntı default olarak yapmaz (`profile.yaml.citations.frequency_rule.direct_quote_per_article_max: 0`). Bu kuyruğa yazılan adaylar **istisnaen gerekli görülen** birebir alıntılar olur — AI agent neden gerekli olduğunu "Önerme bağlamı" alanında açıkça belirtir.

---

## Yazma şablonu (AI bunu kopyalayıp doldurur)

```markdown
### [PENDING] [Yazar / Kaynak Adı] — [Eser / Bağlam], s.[Sayfa veya zaman damgası]

> *"Birebir alıntı tırnak içinde."*

- **Önerildiği makale:** [slug + tarih]
- **Atıf etiketi:** [BA ↦ Yazar]
- **Atıf üslubu:** "[Berna'nın yumuşak çerçevesi]"
- **Eser kanonik kaynağı:** [yayınevi, çevirmen]
- **Doğrulayan kaynaklar (≥2):** [URL/kaynak 1] · [URL/kaynak 2]
- **Önerme bağlamı:** [hangi paragraf, neden bu cümle seçildi, neden yumuşak referans yetmiyor]
- **CLAUDE.md §4 filtresi:** [kuruluş adı sızıntısı yok mu, AI ön-eleme]
- **Çift Rol filtresi:** [muayene odası bilgisi sızıntısı yok mu, AI doğrulaması]
- **Frekans uyumu:** [bu atıf eklendiğinde makaledeki toplam ödünç-cümle sayısı]
- **3 sınır vurgusu uyumu:** [atıfın yanına eklenecek üç sınır vurgusu — `hot.md §5c`]
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
