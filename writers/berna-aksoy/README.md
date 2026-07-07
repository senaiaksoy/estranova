# Berna Aksoy — Yazar Profili (modüler)

> **v2.2.3 / modüler dönüşüm 2026-04-30.** Eski tek-dosya `legacy/writers/berna-aksoy.md` 30 gün rollback için saklanır.
> **Berna v2.1 protokol asimetrisi notu:** §0 Korpus Referansı, §0.5 Yürütme Protokolü, §12 Gold-Standard Pozitif Örnek, §13 Self-check Checklist henüz yazılmamıştır (Gamze v3.2'ye özel). Evrim review iş paketinde eklenecek; o zamana kadar AI agent CLAUDE.md HARD CONSTRAINTS + ARTICLE-PRODUCTION-SPEC.md Faz 2.2 v2.1 yönergesini takip eder.

## Klasör navigasyonu

| Dosya | Rol | Yükleme |
|---|---|---|
| **`profile.yaml`** | Machine-readable index — section_index, topic_sections, citations, dynamics, dual_role_warning, quick_reference. **AI ilk pas yükler.** | Her makale (zorunlu) |
| **`hot.md`** | §4 ses imzası (signature açılış / bağlama / kapanış kalıpları + asla listesi + ince humor 8 kalıp) + §5c tıbbi sınır (3 sınır vurgusu). | Her makale (zorunlu) |
| **`warm.md`** | §4b manifesto-aligned anekdot yönelimi + §4c mikro stil kuralları + §4d başlık ve alt başlık tonu. | Konu-tetikli (lazy) |
| **`cold.md`** | §1 kısa tanım + §2a/§2b biyografi + §3 karakter özeti + §5a yaşam tarzı + §6/§7/§8 içerik politikası + §9/§10 atama kriteri / kategori skorları + changelog (v1 → v2.2.3). | Yalnız audit/evrim review |
| **`hidden.md`** | §5b gizli gözlemler (HRT/peptid/kontrol/bakım + aile arka planı) + §5c-ek **Çift Rol Uyarısı (KRİTİK)** + §5d iç çelişkiler. **Yayınlanmaz; yalnız writer agent prompt'una enjekte edilir.** | Çift Rol veya hassas konularda lazy |
| **`citations/`** | Berna sade atıf çerçevesi: `canonical-sources.md` (atıf yapmama disiplini — yumuşak referans normatif tarifi), `extended.md` (onaylı genişleme — başlangıçta boş), `pending.md` (editör onay kuyruğu). | Atıf seçimi gerektiğinde |

## Bağlı dosyalar (klasör dışında)

- **`../berna-aksoy-article-log.md`** — akümülatif makale logu (Writer Dynamics Framework Katman B; cooldown hesabı)

> **Berna'da korpus / aforizma havuzu YOK.** Berna doğrudan akademik / kanonik atıf yapmaz; sesi *kendi okuma + Instagram feed merceği + hekim sohbeti* üzerinden kurulur. Gamze gibi `*-alintilar.md` veya `*-aphorism-pool.md` dosyaları yoktur.

## Akış (her makale öncesi)

1. `profile.yaml` oku → `section_index`, `topic_sections`, `citations`, `quick_reference`, `dual_role_warning.active` flag
2. `hot.md` oku → §4 ses + §5c tıbbi sınır (3 vurgu)
3. Konu eşleşmesi varsa `warm.md`'den ilgili bölümleri oku (örn. kilo konusunda §4b + §4c; başlık karar aşamasında §4d)
4. **`dual_role_warning.active: true` (Berna için aktif) → `hidden.md` oku** — §5b + §5c-ek + §5d
5. `berna-aksoy-article-log.md` parse et → cooldown listesi (Faz 1.5.2)
6. CLAUDE.md HARD CONSTRAINTS §1-§6 + ARTICLE-PRODUCTION-SPEC.md Faz 2.2 yönergesi
7. Yaz → 17 maddelik pre-publish checklist (ARTICLE-PRODUCTION-SPEC.md Faz 5)
8. Yayın → article-log'a satır ekle (Faz 7)

Detaylı pipeline: `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 2 + `docs/WRITER-DYNAMICS-FRAMEWORK.md`.

## Pre-script (her makale öncesi zorunlu)

```bash
node scripts/article-context-build.mjs --writer berna-aksoy --topic <konu> --json
```

Çıktı: yüklenecek dosyalar + cooldown listesi + Çift Rol bayrağı + atıf çerçevesi referansları.

## Çift Rol Uyarısı

Estranova editörü ve bilimsel inceleme katmanı **Doç. Dr. Senai Aksoy aynı zamanda Berna'nın eşidir** — ama etik prensip nedeniyle hekimi değil. Berna'nın asıl jinekoloğu eşinin meslektaşı = arkadaş çevresinden biri. **Çift ayrıcalık** (eş + arkadaş hekim): Berna bekleme odasında da beklemiyor, standart hasta sahneleri makaleye yazılmaz.

İstisna: Hekim-hasta ilişkisi sorgulayan / hekim seçimi konularında Berna kendi konumunu (eşinin hem partner hem hekim olduğunu) DÜRÜSTÇE ifşa edebilir; isim yine geçmez. Detay: `hidden.md §5c-ek` + `profile.yaml dual_role_warning`.

İki Çift Rol Uyarısı ekseni arasındaki tutarlılık: **Gamze ekseni** — uzun süreli mesleki bağ (jinekoloğu); muayene odası bilgisi taslaklara sızmaz. **Berna ekseni** — yakın eş bağı; etik prensip nedeniyle takip yok, takip arkadaş çevresinden bir meslektaşa devredilmiş. Yakınlık derecesine göre etik sınır farklı uygulanmış.
