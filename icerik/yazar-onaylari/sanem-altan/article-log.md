# Sanem Altan — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)
> **DNA referansı:** [`sanem-altan/`](./sanem-altan/) (v1.0 — yürütme protokolü §0.5 mevcut)
> **Korpus dosyaları:** [`sanem-altan-alintilar.md`](./sanem-altan-alintilar.md), [`sanem-altan-aphorism-pool.md`](./sanem-altan-aphorism-pool.md)
> **Log başlangıcı:** 2026-05-01

## Çift Rol Uyarısı (KRİTİK SINIR)

`profile.yaml.dual_role_warning.active: true` — Estranova editörü Doç. Dr. Senai Aksoy aynı zamanda **Sanem Altan'ın gerçek hayatta jinekoloğudur** ve **kızı Leyla'nın doğumunu yaptırmıştır** (≈2007). Gamze Cizreli ekseniyle paralel bir editöryal-etik sınır:

- Bu log'un "Notlar" sütununa **muayene odası bilgisi** (HRT/ilaç/doz/lab/tanı/jinekolojik bulgu/kontrol notu) **ima bile** yazılmaz.
- **Doğum süreci klinik detayı** (sezeryan/normal, komplikasyon, doğum sonrası süreç, hastane adı) log'a yazılmaz.
- **Leyla'nın ismi** Estranova metninde default ANONİM ("kızım" / "yakınımdaki bir genç"); 2014 köşede halka açık geçti diye otomatik kullanılmaz.
- Sanem'in ailesinin diğer sağlık durumu (özellikle 12 Haz 2025'te vefat eden anne Gülnur Altan) hakkında **kamuya açık olmayan** klinik bilgi log'a yazılmaz.

Detay: `sanem-altan/hidden.md §5c-ek`. Senai Aksoy üç yazar Çift Rol ekosistemi: Gamze (jinekolog) / Berna (eş — takip etmiyor) / **Sanem (jinekolog + doğum)**.

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0 | 2026-05-01 | (örnek) Mevsimsiz bir yaş — peri-menopozun ara mevsimi | hormonal-gecis/perimenopoz | v1.0 | Wordsworth "Bırakın doğa size dadılık etsin" | "Kağıttan çiçek değil sahici çiçek" (gevşek uyarlama) | T1 (akşam yürüyüşü) + T3 (aile aktarımı: Ahmet Altan "sıradan cümleler") | "Şubat sonuydu. Penceremin önünde mevsimsiz bir gün uzanıyordu..." | Tireli iki bölümlü ("Mevsimsiz bir yaş — peri-menopozun ara mevsimi") | İlkbahar (şubat sonu açılışı) | Pilot makale; yazar profili kuruluş gold-standard. `sanem-altan-ornek-makale.md` (DRAFT — yayın bandında değil). |

## Sütun anahtarı

- **Yazar v.** — yazar profil versiyonu (v1.0 = ilk modüler kurulum, §0.5 yürütme protokolü dahil)
- **Aforizma** — `aphorism-pool.md`'den seçilen, kaynak ile (örn. "Wordsworth — Bırakın doğa size dadılık etsin"); birebir kopya yasak, paraframe
- **Manifesto** — 5 imza-cümleden gevşek uyarlama (kağıttan çiçek / mevsimsiz gün / olanı sevmek / kusurların tılsımı / bugün de geçecek)
- **Anekdot** — anekdot türleri:
  - **T1** = akşam yürüyüşü / mevsim sahnesi
  - **T2** = babamın evi / tavan arası / ebeveyn ev sahnesi
  - **T3** = aile aktarımı (Ahmet/Çetin/Mehmet Altan'dan kamusal çerçeve)
  - **T4** = bedeniyle iç sorgulama (gece uyanma, sıradan cümleler)
  - **T5** = bir kitap / film / şiir altı çizilen cümle
  - **T6** = pencere / abajur / akşam çayı sahnesi (sigaranın nötrleştirilmiş hali)
  - **T7** = ağaç / yaprak / mevsim doğa imgesi
- **Açılış** — `signature_phrases_acilis`'ten 10 kalıp
- **Başlık tipi** — Üç nokta yarım bırakma / Lirik mevsim / Tireli iki bölümlü / Varoluşsal soru / Doğa-imge
- **Mevsim** — yazıldığı mevsim (içerik için referans)
- **Notlar** — özel durum; politik/hukuki bağlam SIZINTI YASAK

## Cooldown durumu (canlı — şu an)

> Aşağıdaki listeler yeni makale yazımında §0.5 Adım 2-5'te FİLTRE olarak uygulanır. Pilot makale 2026-05-01'de yayınlanmadı (DRAFT) — bu yüzden cooldown havuzları **henüz boş**.

**Cooldown'da olanlar (yasak — bir sonraki makalede kullanılmaz):**
- Aforizma (son 6 makale): _yok_ (pilot DRAFT — yayın bandında değil)
- Manifesto (son 4 makale): _yok_
- Doğa metaforu (son 5 makale): _yok_
- Başlık tipi (son 3 makale): _yok_
- Açılış kalıbı (son 4 makale): _yok_
- Mevsim açılışı (son 4 makale): _yok_

**Default cooldown parametreleri** (`docs/WRITER-DYNAMICS-FRAMEWORK.md`):
- aforizma: 6 makale
- manifesto: 4 makale
- başlık tipi: 3 makale
- açılış kalıbı: 4 makale
- mevsim açılışı: 4 makale

## Yazar versiyonu changelog

### v1.0 — 2026-05-01

- **Kuruluş:** Sanem Altan profili Estranova kanonuna eklendi.
- **Korpus:** `sanem-altan-alintilar.md` (731 satır) + `sanem-altan-aphorism-pool.md` (425 satır).
- **Yapı:** profile.yaml + hot/warm/cold/hidden.md + README + citations/ (canonical/extended/pending).
- **Pilot makale:** `sanem-altan-ornek-makale.md` — *Mevsimsiz bir yaş: peri-menopozun ara mevsimi* (DRAFT).
- **Aile bağlamı kuralı:** 2026-05-01 düzeltmesi — kamuya malolmuş şahsiyet kuralı (Çetin / Ahmet / Mehmet Altan).
- **Çift Rol Uyarısı:** Aktif değil (Sanem-Senai arasında hekim-hasta ilişkisi yok).

### Gelecek versiyon planı

- **5 makale yayımlandığında:** ilk akümülasyon değerlendirmesi, cooldown stabilitesi
- **10 makale eşiğinde:** evrim review (`evolution_review_threshold: 10`)
- **6 ay (2026-11):** zaman temelli evrim review (`evolution_review_time_threshold_months: 6`)
- **Kitap *Özler İnsan Kendini* tam metin okunduğunda:** korpus zenginleşmesi → aphorism-pool revizyonu
- **Twitter @AltanSan paywall çözüldüğünde:** son yıllar arşivi taraması, sosyal medya damarı eklenmesi

## Makale yazılırken referans rotası

1. `sanem-altan/profile.yaml` oku (her makale)
2. `sanem-altan/hot.md` oku (her makale)
3. Konu eşleşmesi varsa `sanem-altan/warm.md` ilgili bölümler (lazy)
4. Hassas konu varsa (anne-kayıp, beden imajı, kuşak) → `sanem-altan/hidden.md` oku
5. Aforizma seçimi: `sanem-altan-aphorism-pool.md` → `sanem-altan-alintilar.md` → `sanem-altan/citations/canonical-sources.md`
6. Yaz → `sanem-altan/hot.md §13` self-check
7. Yayın → bu log'a yeni satır ekle, cooldown güncelle
