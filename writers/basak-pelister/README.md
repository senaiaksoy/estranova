# Başak Pelister — Yazar Profili (modüler)

> **v2.1 / modüler dönüşüm 2026-04-30 (Aşama 2 rollout 2/7).** Eski tek-dosya `legacy/writers/basak-pelister.md` 30 gün rollback için saklanır.
> **Başak v2.1 protokol asimetrisi notu:** §0/§0.5/§4c/§4d/§5d/§12/§13 henüz yazılmamıştır (Gamze v3.2'ye özel). Evrim review iş paketinde eklenecek; o zamana kadar AI agent CLAUDE.md HARD CONSTRAINTS + ARTICLE-PRODUCTION-SPEC.md Faz 2.2 v2.1 yönergesini takip eder.

## Klasör navigasyonu

| Dosya | Rol | Yükleme |
|---|---|---|
| **`profile.yaml`** | Machine-readable index — section_index, topic_sections (33 konu ekseni), citations, dynamics, dual_role_warning (false), quick_reference. **AI ilk pas yükler.** | Her makale (zorunlu) |
| **`hot.md`** | §4 ses imzası (signature açılış / akran açılışı + soru-cevap kalıpları + kapanış + 30 yıllık hekim çerçevesi + asla listesi) + §5c tıbbi sınır (3 sınır vurgusu + kilo hassas çerçevesi). | Her makale (zorunlu) |
| **`warm.md`** | §4a Plume + Mahmure 12 HARD kural (soru-cevap, üç nokta, soru başlık, modern anglizm, ad-koyma yumuşat, ünlem max 1, akran açılışı, lüks marka yasak, ilişki teması eksen dışı, hashtag yasak) + §4b Manifesto-aligned Anekdot Yönelimi (üç kuşaklı kahve masası — anne, ben, 16 yaş kız; ikincil renkler — yeni HRT, 6 ay takip, kardeş, akdeniz, seyahat). | Konu-tetikli (lazy) |
| **`cold.md`** | §1 + §2a + §2b + §3 + §5a + §6/§7/§8 + §9/§10 + changelog. | Yalnız audit/evrim review |
| **`hidden.md`** | §5b gizli gözlemler — 14 alt madde: 9 yıl menopoz + bekar + 16 yaş kız (ergen gizliliği MUTLAK) + anne her gün + erkek kardeş + üç kuşak orta nokta + hobi yokluğu + 30 yıllık hekim arkadaş + 6 ay takip + sağlık geçmişi + yeni HRT (sevinç+rahatlama+dikkat) + annenin osteoporozu + kilo hassas çerçevesi (HARD CONSTRAINT) + akdeniz + sosyal çevre + bilim/merak dengesi + HRT Estranova pozisyonu. **Yayınlanmaz.** | Hassas konularda lazy (HRT, kilo, aile, kız, anne) |
| **`citations/`** | Başak sade atıf çerçevesi: `canonical-sources.md` (atıf yapmama disiplini — yumuşak referans normatif tarif + bilim/popüler kültür merceği), `extended.md` (onaylı genişleme — başlangıçta boş), `pending.md` (editör onay kuyruğu). | Atıf seçimi gerektiğinde |

## Bağlı dosyalar (klasör dışında)

- **`../basak-pelister-article-log.md`** — akümülatif makale logu (Writer Dynamics Framework Katman B; cooldown hesabı)

> **Başak'ta korpus / aforizma havuzu YOK.** Başak doğrudan akademik / kanonik atıf yapmaz; sesi *üç kuşaklı sahne + bilim merakı + popüler kültür merceği + 30 yıllık hekim arkadaş anonim çerçeve* üzerinden kurulur. Berna gibi `*-alintilar.md` veya `*-aphorism-pool.md` dosyaları yoktur.

## Akış (her makale öncesi)

1. `profile.yaml` oku → `section_index`, `topic_sections`, `citations`, `quick_reference`, `dual_role_warning.active` (false — Başak için)
2. `hot.md` oku → §4 ses + §5c tıbbi sınır (3 vurgu)
3. **`warm.md` oku** — Başak'ta §4a Plume+Mahmure HARD CONSTRAINT olduğundan **her makalede zorunlu** (topic_sections'ta her konu için §4a listede)
4. Konu eşleşmesi varsa `warm.md`'den ek bölümleri (§4b) ve `hidden.md`'den ilgili maddeleri (HRT, kilo, aile temaları için)
5. `basak-pelister-article-log.md` parse et → cooldown listesi (Faz 1.5.2)
6. CLAUDE.md HARD CONSTRAINTS §1-§6 + ARTICLE-PRODUCTION-SPEC.md Faz 2.2 yönergesi
7. Yaz → 17 maddelik pre-publish checklist (ARTICLE-PRODUCTION-SPEC.md Faz 5)
8. Yayın → article-log'a satır ekle (Faz 7)

Detaylı pipeline: `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 2 + `docs/WRITER-DYNAMICS-FRAMEWORK.md`.

## Pre-script (her makale öncesi zorunlu)

```bash
node scripts/article-context-build.mjs --writer basak-pelister --topic <konu> --json
```

Çıktı: yüklenecek dosyalar + cooldown listesi + atıf çerçevesi referansları (Çift Rol bayrağı **Başak'ta tetiklenmez** — false).

## Çift Rol (Başak için aktif değil)

Başak'ın hekimi 30 yıllık arkadaşı **Doç. Dr. Senai Aksoy** — uzun süreli arkadaşlık + mesleki bağ. Başak Senai Aksoy'un yakın aile/eş üyesi **değil** (Berna ekseninden farklı: Berna Senai Aksoy'un eşi → etik prensip nedeniyle takip yok; Gamze ekseninden farklı: Gamze Senai Aksoy'un uzun süreli hastası → muayene odası bilgisi sızmaz). Başak'ta **uzun arkadaşlık duygusal güveni** vardır ama Çift Rol Uyarısı'nın *"yakın aile takip etmeme"* veya *"muayene odası bilgisi sızıntısı"* kuralları ihlal edilmiyor. Yine de **doktor adı CLAUDE.md HARD CONSTRAINT gereği gövdeye yazılmaz**; *"30 yıllık arkadaşım olan hekimim"* anonim çerçeve uygundur.

## İmza eksenler (özet)

- **ÜÇ KUŞAKLI KAHVE MASASI** (HARD imza — anne her gün, ben HRT yeni, 16 yaş kız) — her makalede en az bir an
- **Plume + Mahmure 12 kural** (HARD CONSTRAINT) — soru-cevap tekniği yoğun, üç nokta sık, soru başlıklı H2, modern anglizm disiplinli
- **9 yıl HRT'siz + yeni başlayan retrospektif** — guideline tanıklığı, *"geç mi?"* sorusu, sevinç+rahatlama+dikkat
- **30 yıllık arkadaşım olan hekimim** — anonim çerçevede tonal imza
- **Bekar 50+ kadın için menopoz** — partner-eksenli olmayan ses
- **Time reverse + biohacking + longevity** — meraklı + bilimsel şüphecilik dengesi
- **Akdeniz sofrası gündelik renk** (otorite olmadan)
