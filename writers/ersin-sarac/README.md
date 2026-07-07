# Fzt. Ersin Saraç — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-05-02. **Bilimsel yazar grubunda en genç (33 yaş, 1993 doğumlu); klinisyen mesafesi sıkı.**

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — 8. eksen).
- **Eksen:** Kas-iskelet rehabilitasyon + 40+ kadın bedeni + önleyici hareket. Alp önleyici kardiyoloji / Ersin önleyici kas-iskelet paralel ekseninde.
- **Yazar imzası:** "Fzt. Ersin Saraç" (Fzt. öneki — fizyoterapist).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).

## Yaş farkı — kritik

Ersin **33 yaşında**, Estranova okuyucusu 40+. Diğer 7 bilimsel yazar 50+/60+. Bu kuşak farkı:

- Yaşıt persona'sı YASAK (zaten kategori farkı; ek olarak yaş farkı içtenlik kapısı değil).
- Klinisyen mesafesi DAHA SIKI.
- Öğretmen tonu (paternalist DEĞİL, kanıt-temelli rehber).

## Korpus karakter notu — kadın sağlığı vurgusu eksen tasarımı

Pain Free Nişantaşı sitesi kas-iskelet, spor yaralanmaları, postür, kronik ağrı vurguluyor. **"Kadın sağlığı fizyoterapisi" Estranova tıbbi danışman bio'sunda tag olarak var ama kişisel sitede vurgulanmamış.** Estranova çerçevesinde:

- 40+ kadın bedenine yönelik kas-iskelet rehab
- Pelvik taban fizyoterapisi (kegel + biyofeedback)
- Doğum sonrası rehabilitasyon (40+ geç doğum)
- Postmenopozal kemik koruyucu egzersiz

**Bu eksen tasarımı kişisel klinik deneyiminden türemiş gibi sunulamaz** — "klinik gözlem" anonim çerçevesinde, "kanıt-temelli yaklaşım" tonunda yazılır.

## Eksen ayrımları

- **Senai mahrem klinik (idrar kaçırma, GSM)** — anlatım odaklı / Ersin pelvik taban fizyoterapisi (kegel/biyofeedback) — egzersiz odaklı.
- **Alara yaşıt sporcu felsefe (anti-aging hareket)** / Ersin klinik fizyoterapist (klinisyen mesafesi).
- **Alp kalp damar** / Ersin kas-iskelet (paralel önleyici eksenler).

## Dosya yapısı

```
writers/ersin-sarac/
├── README.md             # bu dosya
├── profile.yaml          # makina-okunur
├── cold.md               # kamuya açık biyografi + tema kesişimi
├── warm.md               # yazma stili + manifesto (lazy)
├── hot.md                # yürütme + ton + self-check 15 madde
├── hidden.md             # yaş farkı + sporcu klinisyen pazarlama riski + Çift Rol
└── citations/
    └── canonical-sources.md   # ES-K / ES-T

writers/ersin-sarac-article-log.md
```

## v0.1 → v0.2 geçiş protokolü

1. painfree.com.tr (about + services) tam metin.
2. Sosyal medya (Instagram / YouTube) eğitim içerikli paylaşım transkripti.
3. PubMed `Sarac E[Author]` sorgusu.
4. 4-6 manifesto kalıbı + 10/10/6 varyantı → kullanıcı onayı.
5. profile.yaml + hot.md + warm.md güncelleme; v0.1 → v0.2.

## Estranova'da iki yerde görünür (bilinçli mimari)

- **Yayın Kurulu → Bilimsel Yazarlar** kartı (`category: 'scientific'`).
- **Yayın Kurulu → Tıbbi Danışmanlar** kartı (Fizyoterapi rolü).

## Çift Rol Uyarısı durumu

`profile.yaml` → `dual_role_warning.active: false` (default). Senai (jinekolog) ile pelvik taban yönlendirmesi olası ama doğrulanmadı.
