# Prof. Dr. Gonca Gökdemir — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)

> Yazılan her makalenin kalıp seçimi ve cooldown takibi. v0.1 başlangıç.

---

## v0.1 — 2026-05-02 başlangıç

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| — | — | (henüz makale yok) | — | v0.1 | — | — | — | — | — | — | v0.1 lazy aktivasyon |

---

## Cooldown takibi

| Kalıp türü | Havuz | Cooldown | Son kullanım |
|---|---|---|---|
| Açılış | 6 (v0.2'de 10) | 6 makale | — |
| Kapanış | 6 (v0.2'de 10) | 4 makale | — |
| Dengeleyici | 6 (v0.2'de 10) | 4 makale | — |
| Bilmiyorum | 6 (v0.2'de 10) | 4 makale | — |
| Hekim çerçevesi | 6 (v0.2'de 10) | 4 makale | — |
| Anekdot kapısı | 6 (v0.2'de 10) | 4 makale | — |
| İmza kapanış | 6 | 4 makale | — |

---

## Aktivasyon notu (v0.2'ye geçiş)

İlk makale üretilince:
1. AI agent kullanıcıya 4-6 manifesto + 10/10/6 varyant havuzu önerir.
2. Onay sonrası `writers/gonca-gokdemir/hot.md §4` ve `warm.md §4e` güncellenir.
3. `profile.yaml.pattern_pool_sizes` 6 → 10.
4. `manifesto_templates.templates` doldurulur.
5. `writer_version` v0.1 → v0.2.
6. Bu log'un ilk satırı doldurulur.

## 2 Ekim 2026 — Menopozda Cilt Değişimleri: onay kaydı düzeltmesi

`/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri/` 18 Mayıs 2026'da (commit 8043985d) Estranova Editörleri imzasından Prof. Dr. Gonca Gökdemir imzasına geçirildi; o tarihte yazar onayı `article-approvals.ts` veya bu log'a işlenmemişti. KC 2 Ekim 2026'da Gonca Gökdemir'in metni onayladığını teyit etti; onay kaydı `gonca-gokdemir` olarak güncellendi. Metin değişmedi. Kalıp kaydı geriye dönük çıkarılmadı; havuzlar hâlâ v0.1 lazy aktivasyon durumunda.

## 14 Ekim 2026 — Menopozda Cilt Değişimleri: revizyon onayı ve canlı rota

Revizyon (audit + humanize, iki tur) için yazar onayı ve Doç. Dr. Senai Aksoy tıbbi onayı KC bildirimiyle sözlü alındı. Form, JSON yanıtı veya onay paketi üretilmedi. Kapsam: `icerik/taslaklar/menopozda-cilt-degisimleri.md` son sürümü; canlı rota `src/pages/beden-yakinlik/cilt-gorunum/menopozda-cilt-degisimleri.astro` bu sürümle yenilendi. SSS 3 soruya indirildi ve `src/data/article-faqs.ts` tek kaynağından hem görünür SSS hem FAQPage'e bağlandı. OG kart görseli patch ile bağlandı; üst hero değişmedi. `dateModified` 14 Ekim 2026. Önceki 2 Ekim 2026 onayı bu revizyonu kapsamaz.

Açık not (kapandı, 14 Ekim 2026): Kart için 2.4:1 crop üretildi (`menopozda-cilt-degisimleri-card.webp`, commit 0755d34a) ve `articleCardImageByRoute` bu crop'a bağlandı.

## 14 Ekim 2026 — Menopozda Cilt Değişimleri: geniş audit sonrası ikinci tur

Yayındaki sürüm `/makale-denetle` ile yeniden denetlendi, bulgular `/makale-humanize` ile uygulandı. Yazar onayı ve tıbbi onay KC tarafından sohbette sözlü verildi; form, JSON yanıtı veya onay paketi üretilmedi.

Değişen kapsam:

- 7 soru-H2'den 6'sı düz başlığa çevrildi; tek soru başlığı "Ne zaman dermatolojik değerlendirme gerekir?" kaldı. Anchor id'leri değişmedi.
- Kısa Özet 63 → 53 kelime.
- Sıcaklık katmanı: 1. bölüme genelleştirilmiş poliklinik gözlemi (tek hasta yok, hasta sözü alıntılanmadı), adlandırılmış duygu (mahcubiyet) ve teselli cümlesi; kolajen bölümüne eczane rafı lede'i, değerlendirme bölümüne kuaför/tatil fotoğrafı ayrıntısı.
- 7. bölümde RedFlagBox ile birebir tekrarlanan H3 listesi kaldırıldı; asimetrik ben maddesi kaynak 6 ile paragrafa taşındı.
- Parfüm/peeling cümlesine kaynak 1, 7, 11 bağlandı (AAD menopoz sayfası: parfümsüz nemlendirici tahrişi azaltabilir).
- SSS 1 yanıtına hassasiyet/tahriş ve parfümsüz ürün eklendi (kaynak 1: menopozda cilt daha hassas, döküntü ve tahriş eğilimi).
- Arama yüzeyleri: manifest açıklaması sayfa açıklamasıyla eşitlendi; kart alt metni görseldeki sahneye göre yeniden yazıldı.
- Kart crop'u IPTC `trainedAlgorithmicMedia` ile etiketlendi.
- Makale yolundaki eski `submenuHeroByRoute` girdisi kaldırıldı; hero doğrudan parent hub'dan okunuyor, görsel değişmedi.

Ölçüm (önce → sonra): soru-H2 7 → 1; ardışık eş uzunluk kümesi 8 → 3; ≤6 kelimelik vurgu 6 → 14. Yeni tıbbi iddia eklenmedi; Evidence düzeyleri, RedFlagBox ve Bilimsel Editör Notu korundu.

Stil sinyali (profil değişikliği değil): `experience_seeds` hâlâ v0.1 placeholder; klinik sahne için hot.md'deki "Polikliniğe başvuran kadınlarda…" genelleştirilmiş gözlem çerçevesi kullanıldı. Kalıcı profil güncellemesi KC onayı gerektirir.
