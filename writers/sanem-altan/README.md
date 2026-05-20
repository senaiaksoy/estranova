# Sanem Altan — Yazar Profili (modüler)

> **v1.0 / kuruluş 2026-05-01.** İlk modüler yazar profili kurulumu (Gamze v3.2, Rima v2.0 yapısına paralel).

## Klasör navigasyonu

| Dosya | Rol | Yükleme |
|---|---|---|
| **`profile.yaml`** | Machine-readable index — section_index, topic_sections, citations, dynamics, quick_reference. **AI ilk pas yükler.** | Her makale (zorunlu) |
| **`hot.md`** | §0.5 yürütme protokolü (10 adım) + §4 ses imzası + §5c tıbbi sınır + §13 self-check (16 madde). | Her makale (zorunlu) |
| **`warm.md`** | §4a-§4f stil/şablon katmanları (Vatan 10 kural, imge bankası, mikro stil, başlık tonu, edebi referans köprüsü, aile bağlamı). | Konu-tetikli (lazy) |
| **`cold.md`** | §0 korpus referansı + §1-§3 biyografi/karakter + §5a yaşam tarzı + §6-§10 içerik politikası + §12 gold-standard mini-makale + changelog. | Yalnız audit/evrim review |
| **`hidden.md`** | §5b gizli gözlemler (politik damar yasağı, sigara nötrleştirme, anne kaybı çerçevesi) + §5d iç çelişkiler. **Yayınlanmaz; yalnız writer agent prompt'una enjekte edilir.** | Hassas konularda lazy |
| **`citations/`** | Hybrid Whitelist + Editorial Gate atıf çerçevesi: `canonical-sources.md` (Sanem'in atıfladığı yazar/sanatçılar), `extended.md` (onaylı genişleme — başlangıçta boş), `pending.md` (editör onay kuyruğu). | Atıf seçimi gerektiğinde |

## Bağlı dosyalar (klasör dışında)

- **`../sanem-altan-alintilar.md`** — Ham derleme (~40 KB, 731 satır, ~30 yazı + kitap + söyleşi)
- **`../sanem-altan-aphorism-pool.md`** — Distile aforizma havuzu (~26 KB, 425 satır, 9 tema, 5 imza-cümle)
- **`../sanem-altan-article-log.md`** — Akümülatif makale logu (Writer Dynamics Framework Katman B; cooldown hesabı)
- **`../sanem-altan-ornek-makale.md`** — Gold-standard pilot makale ("Mevsimsiz bir yaş: peri-menopozun ara mevsimi")

## Akış (her makale öncesi)

1. `profile.yaml` oku → `section_index`, `topic_sections`, `citations`, `quick_reference`, `dual_role_warning.active` flag
2. `hot.md` oku → §0.5 protokol + §4 ses + §13 self-check
3. Konu eşleşmesi varsa `warm.md`'den ilgili bölümleri oku (örn. peri-menopoz konusunda §4a + §4b)
4. Hassas konu varsa (anne-kayıp, beden imajı, kuşak) → `hidden.md` oku
5. `sanem-altan-article-log.md` parse et → cooldown listesi
6. Aforizma seçimi: aphorism-pool → korpus → uygunsa `citations/canonical-sources.md`
7. Yaz → §13 self-check
8. Yayın → article-log'a satır ekle

Detaylı pipeline: `docs/ARTICLE-PRODUCTION-SPEC.md` Faz 2 + `docs/WRITER-DYNAMICS-FRAMEWORK.md`.

## Çift Rol Uyarısı (KRİTİK SINIR)

`profile.yaml.dual_role_warning.active: true` — Estranova editörü Doç. Dr. Senai Aksoy aynı zamanda **Sanem Altan'ın gerçek hayatta jinekoloğudur** ve **kızı Leyla'nın doğumunu yaptırmıştır** (≈2007). Muayene odası bilgisi (HRT/ilaç/doz/lab/tanı/jinekolojik bulgu) ve doğum süreci klinik detayı (sezeryan/normal, komplikasyon, doğum sonrası) Estranova taslaklarına **sızmaz**. Detay: `hidden.md §5c-ek` + `profile.yaml.dual_role_warning.hard_constraints`.

**Senai Aksoy üç yazar Çift Rol ekosistemi:**

| Yazar | Çift Rol türü |
|---|---|
| Gamze Cizreli | Senai = Gamze'nin gerçek jinekoloğu |
| Berna Aksoy | Senai = Berna'nın eşi (etik prensip nedeniyle takip etmiyor; arkadaş çevresinden meslektaşa devredilmiş) |
| **Sanem Altan** | **Senai = Sanem'in jinekoloğu + kızı Leyla'nın doğumunu yaptırdı** |

**Leyla'nın ismi:** Default ANONİM ("kızım", "yakınımdaki bir genç"). 2014 köşede halka açık geçti, ama Estranova'da otomatik kullanılmaz.

## Aile bağlamı (kamuya malolmuş şahsiyetler — 2026-05-01 kuralı)

Sanem'in aile şahsiyetleri (Ahmet Altan baba / Çetin Altan dede / Mehmet Altan amca) üç kuşak Türk gazetecilik-edebiyat mirasının kamuya malolmuş kişilikleri olduğu için, aile çerçevesinde **isim+akrabalık+eser bağıyla doğal olarak makale gövdesine yansıyabilirler**. Detay: `warm.md §4f`.

**Yasak ayrı kategori:** politik / hukuki bağlam (cezaevi, müebbet, dava, basın özgürlüğü polemiği) **gövde metne taşınmaz**.

## Sigara nötrleştirme (Sanem-spesifik)

Sanem'in orijinal yazılarında "bir sigara yaktım" sahnesi imza imgelerinden biri. Estranova'da çay/kahve/abajur ile değiştirilir; sahnenin yalnızlık + yüz yüze gelme çekirdeği korunur, nesne değişir. Detay: `warm.md §4a kural 9` ve `hidden.md §5b`.

## Politik damar yasağı

Vatan köşelerinin yaklaşık yarısı dönem Türkiye siyasetine dair (AKP, Gezi, Soma, basın özgürlüğü vb.). **Hiçbiri Estranova metnine taşınmaz** (CLAUDE.md §5 düzenlemeye uygun nötrlük). Sadece edebi/lirik/varoluşsal damar imza-malzemesi olarak kullanılır.

## Versiyon

- **v1.0** — 2026-05-01 — kuruluş
