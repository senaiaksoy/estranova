# Prof. Dr. Bülent Aksoy — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-05-02. **9. (şimdilik son) bilimsel yazar — Tıbbi Danışmanlar listesi 8/8'i bilimsel yazara dönüşmüş oluyor.**

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — 9. eksen).
- **Eksen:** Ortopedi & travmatoloji + 40+ kadın kemik-kas-iskelet sistemi cerrahi sınır kanadı.
- **Yazar imzası:** "Prof. Dr. Bülent Aksoy" (Prof. Dr. öneki — akademisyen-cerrah).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).

## ⚠️ SOYAD BENZERLİĞİ — KRİTİK NOT

"Aksoy" soyadı Senai Aksoy ile paylaşılıyor. Üstüne **Cerrahpaşa Tıp 1985 paralel mezuniyet** (Senai 1985, Bülent 1979-1985). İki Aksoy arasında:

- **Aile bağı (kardeş, kuzen, akraba)** olabilir mi? Doğrulanmadı.
- **Akademik tanışıklık** (sınıf arkadaşı, asistan dönemi yan-yana) olasılığı yüksek.

`dual_role_warning.active: false` (default kapalı). Eğer aile bağı varsa kullanıcı tarafından açıkça belirtilmeli ve active=true'ya çekilmeli.

**Bilimsel Editör Notu imzası ("Doç. Dr. Senai Aksoy") + Yazar imza ("Prof. Dr. Bülent Aksoy")** aynı sayfada görüldüğünde **iki ayrı unvan + iki ayrı isim** netleşir; okuyucu karıştırmamalı. Pre-publish checklist'e bu kontrol madde olarak eklenmeli.

## Üçlü kemik-kas-iskelet sistemi mimarisi

Estranova'nın 40+ kadın kemik-kas-iskelet ekseninde **üç ayrı yazar** paralel çalışıyor:

| Yazar | Eksen |
|---|---|
| **Metin Alış** | Endokrin osteoporoz medikal tedavi tarafı |
| **Ersin Saraç** | Fizyoterapi kas-iskelet rehab + önleyici hareket |
| **Bülent Aksoy** | Ortopedi cerrahi sınır + ortopedik takip + artroplasti karar |

Üçü birlikte **kemik-kas-iskelet üçlüsü** oluşturur. Konu paylaşımı:
- Postmenopozal osteoporoz tanı + medikal tedavi → Metin
- Konservatif egzersiz + rehabilitasyon → Ersin
- Kırık riski takibi + cerrahi sınır + artroplasti → Bülent

İki yazar arasındaki konu çakışması düşük; ama her yazar **kendi alanından** yazarken "meslektaşım Metin/Ersin" referansı YASAK.

## Estetik konularda promosyon yasakları (Çağrı Sade/Gonca/Elif paraleli)

- **Önce-sonra anlatımı MUTLAK YASAK.**
- **Spesifik protez / implant / cerrahi cihaz / ilaç markası MUTLAK YASAK.**
- **Spor klübü tabipliği gövdede MUTLAK YASAK** ("Efes Pilsen ile çalıştığım yıllar / Galatasaray").
- **Memorial / Amerikan Hastanesi / Beşiktaş muayenehane gövdede MUTLAK YASAK.**
- **Pediatrik ortopedi / spor yaralanmaları geneli — Estranova menopoz çerçevesi dışı.**

## Dosya yapısı

```
writers/bulent-aksoy/
├── README.md             # bu dosya — soyad benzerliği + üçlü kemik-kas-iskelet sistem
├── profile.yaml          # makina-okunur
├── cold.md               # kamuya açık biyografi + tema kesişimi
├── warm.md               # yazma stili + manifesto (lazy)
├── hot.md                # yürütme + ton + self-check 15 madde
├── hidden.md             # 3 eksen Çift Rol notu (soyad + Metin + Amerikan Hastanesi)
└── citations/
    └── canonical-sources.md   # BA-K / BA-T

writers/bulent-aksoy-article-log.md
```

## v0.1 → v0.2 geçiş protokolü

1. xn--blentaksoy-9db.com.tr (bülentaksoy.com.tr kişisel site) tam metin (alt user-agent ile).
2. Amerikan Hastanesi profil sayfası tam metin.
3. PubMed `Aksoy B[Author]` sorgusu.
4. Facebook paylaşımları analizi.
5. 4-6 manifesto kalıbı + 10/10/6 varyantı → kullanıcı onayı.
6. **Soyad benzerliği — aile bağı kullanıcı doğrulaması.**
7. profile.yaml + hot.md + warm.md güncelleme; v0.1 → v0.2.

## Estranova'da iki yerde görünür (bilinçli mimari)

- **Yayın Kurulu → Bilimsel Yazarlar** kartı (`category: 'scientific'`).
- **Yayın Kurulu → Tıbbi Danışmanlar** kartı (Ortopedi rolü).

## Çift Rol Uyarısı durumu

`profile.yaml` → `dual_role_warning.active: false` (default). 3 olası eksen:
- Soyad benzerliği (Senai Aksoy + Cerrahpaşa 1985 paralelliği)
- Metin Alış ile osteoporoz konusu çakışması
- Amerikan Hastanesi 4'lü çoklu çalışma (Bülent + Metin + Alp + Senai geçmişte)
