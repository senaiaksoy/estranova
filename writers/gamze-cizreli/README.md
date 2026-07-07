# Gamze Cizreli — Yazar Profili (modüler)

> **v3.2 / modüler dönüşüm 2026-04-29.** Eski tek-dosya `legacy/gamze-cizreli.md` 30 gün rollback için saklanır.

## Klasör navigasyonu

| Dosya | Rol | Yükleme |
|---|---|---|
| **`profile.yaml`** | Machine-readable index — section_index, topic_sections, citations, dynamics, quick_reference. **AI ilk pas yükler.** | Her makale (zorunlu) |
| **`hot.md`** | §0.5 yürütme protokolü (12 adım) + §4 ses imzası + §5c tıbbi sınır + §13 self-check (20 madde). | Her makale (zorunlu) |
| **`warm.md`** | §4a-§4f stil/şablon katmanları (Hürriyet 12 kural, anekdot türleri, mikro stil, başlık tonu, Erken/Olgun sentezi, manifesto kalıpları, Mevlana spiritüel omurga). | Konu-tetikli (lazy) |
| **`cold.md`** | §0 korpus referansı + §1-§3 biyografi/karakter + §5a yaşam tarzı + §6-§10 içerik politikası + §12 gold-standard mini-makale + changelog. | Yalnız audit/evrim review |
| **`hidden.md`** | §5b gizli gözlemler + §5c-ek Çift Rol Uyarısı (KRİTİK) + §5d iç çelişkiler. **Yayınlanmaz; yalnız writer agent prompt'una enjekte edilir.** | Çift Rol veya hassas konularda lazy |
| **`citations/`** | Hybrid Whitelist + Editorial Gate atıf çerçevesi: `canonical-sources.md` (44 yazar × kanonik kaynak), `extended.md` (onaylı genişleme — başlangıçta boş), `pending.md` (editör onay kuyruğu). | Atıf seçimi gerektiğinde |

## Bağlı dosyalar (klasör dışında)

- **`../gamze-cizreli-alintilar.md`** — TAM korpus (~79 KB, 241 unique alıntı)
- **`../gamze-cizreli-aphorism-pool.md`** — distile aforizma havuzu (~29 KB, 56 cümle)
- **`../gamze-cizreli-article-log.md`** — akümülatif makale logu (Writer Dynamics Framework Katman B; cooldown hesabı)

## Akış (her makale öncesi)

1. `profile.yaml` oku → `section_index`, `topic_sections`, `citations`, `quick_reference`, `dual_role_warning.active` flag
2. `hot.md` oku → §0.5 protokol + §4 ses + §13 self-check
3. Konu eşleşmesi varsa `warm.md`'den ilgili bölümleri oku (örn. uyku konusunda §4a + §4c)
4. `dual_role_warning.active: true` ise `hidden.md` oku
5. `gamze-cizreli-article-log.md` parse et → cooldown listesi
6. Aforizma seçimi: aphorism-pool → korpus → uygunsa `citations/canonical-sources.md`
7. Yaz → §13 self-check
8. Yayın → article-log'a satır ekle

Detaylı pipeline: `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 2 + `docs/WRITER-DYNAMICS-FRAMEWORK.md`.

## Çift Rol Uyarısı

Estranova editörü **Doç. Dr. Senai Aksoy aynı zamanda Gamze'nin gerçek hayatta jinekoloğudur**. Muayene odası bilgisi (HRT, ilaç, doz, lab, tanı) Estranova taslaklarına **sızmaz**. Detay: `hidden.md` §5c-ek + `profile.yaml.dual_role_warning`.
