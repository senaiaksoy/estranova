# Prof. Dr. Gonca Gökdemir — Profil README

> Estranova bilimsel yazar profili. v0.1 — 2026-05-02. Kozmetik konularda promosyon yasakları **sıkı** çerçevede (Çağrı Sade ile yan eksen).

---

## Konum

- **Kategori:** `scientific` (Bilimsel Yazar — 5. eksen).
- **Eksen:** Cilt biyolojisi merkezli; hormon-cilt ekseninde menopoz odaklı dermatoloji; "trendin değil cildin tarafında" felsefe.
- **Yazar imzası:** "Prof. Dr. Gonca Gökdemir" (Prof. Dr. öneki — akademisyen).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).

## Çağrı Sade ile eksen ayrımı

Hem Çağrı Sade hem Gonca estetik konularda yazıyor; eksen sıkı ayrımı:

| | Çağrı Sade | Gonca Gökdemir |
|---|---|---|
| Eksen | Yüz katmanlı cerrahi haritası (cilt+yağ+kemik+kas) | Cilt biyolojisi merkez (UV+hormon+melanin+kollajen) |
| Anlatım | "Yapılabilir mi/size uygun mu" karar süreci | "Trendin değil cildin tarafında" mekanizma açıklama |
| Tipik konu | Cerrahi yüz germe, blefaroplasti, BBL | Lekeler, akne, saç dökülmesi, ben takibi |

Aynı konuda nadiren çakışırlar (örn. lazer fraksiyonel: Gonca dermatoloji tarafı, Çağrı cerrahi tarafı).

## Kozmetik marka hassasiyeti

Gonca'nın **medikal kozmetik marka danışmanlığı geçmişi** var. Estranova'da:

- **Avantaj:** Aktif madde derin bilgi (retinol, niasinamid, askorbik asit, hyalüronik asit, peptid).
- **Risk:** Marka tanıtım kapısı.
- **Kural:** Spesifik kozmetik / dermokozmetik / cihaz marka adı **MUTLAK YASAK**. Aktif madde düzeyinde anlatım OK.

## Dosya yapısı

```
writers/gonca-gokdemir/
├── README.md             # bu dosya
├── profile.yaml          # makina-okunur
├── cold.md               # kamuya açık biyografi + tema kesişimi
├── warm.md               # yazma stili + manifesto (lazy)
├── hot.md                # yürütme + ton + self-check (kozmetik sıkı)
├── hidden.md             # çift rol uyarısı + kozmetik marka hassasiyeti
└── citations/
    └── canonical-sources.md   # GG-K / GG-T

writers/gonca-gokdemir-article-log.md
```

## v0.1 → v0.2 geçiş protokolü

1. goncagokdemir.com/makaleler/'den 4-5 blog yazısı tam metin.
2. Pharmetic.org Gonca yazıları.
3. NG Dergi "Sağlıklı Güzellik" yazısı.
4. PubMed `Gokdemir G[Author]` sorgusu.
5. YouTube 1-2 video transkripti.
6. 4-6 manifesto kalıbı + 10/10/6 varyantı → kullanıcı onayı.
7. profile.yaml + hot.md + warm.md güncelleme; v0.1 → v0.2.

## Estranova'da iki yerde görünür (bilinçli mimari)

- **Yayın Kurulu → Bilimsel Yazarlar** kartı (yeni — `category: 'scientific'`).
- **Yayın Kurulu → Tıbbi Danışmanlar** kartı (mevcut — Dermatoloji rolü).

## Çift Rol Uyarısı durumu

`profile.yaml` → `dual_role_warning.active: false` (default).
