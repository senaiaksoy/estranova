# Prof. Dr. Bülent Aksoy — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)

> Yazılan her makalenin kalıp seçimi ve cooldown takibi. v0.1 başlangıç.

---

## v0.1 — 2026-05-02 başlangıç

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| — | — | (henüz makale yok) | — | v0.1 | — | — | — | — | — | — | v0.1 lazy aktivasyon. **Soyad benzerliği (Senai Aksoy paraleli) her makalede kontrol — Bilimsel Editör Notu imzasıyla iki ayrı kişi netleşmeli.** |

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
2. Onay sonrası `writers/bulent-aksoy/hot.md §4` ve `warm.md §4e` güncellenir.
3. `profile.yaml.pattern_pool_sizes` 6 → 10.
4. `manifesto_templates.templates` doldurulur.
5. `writer_version` v0.1 → v0.2.
6. Bu log'un ilk satırı doldurulur.
7. **Soyad benzerliği:** kullanıcı aile bağını doğrularsa `dual_role_warning.active=true`.

## 13 Ekim 2026 — Kemik gücü birleşik taslağı: onay bildirimi ve geniş edit

- Kullanıcının aynen bildirimi: **“Onay geldi. makaleyi tekrar geniş edit yap.”** Önceki birleşik sürümün onayı kullanıcı bildirimiyle kaydedildi; yazarın ham form yanıtı bu sohbete verilmedi, form yanıtı veya stil puanı üretilmedi.
- Bildirimin kapsadığı kaynak, `onaylanan/2026-10-13_kemik-gucu-kirigi-beklemeden-sorulacak-sorular/makale-kaynak.astro` içinde değiştirilmeden saklandı. SHA-256: `a8058d5e1b45f83edc82c1d21289113972dc4c6810dd01a3ecb518a869df328d`. Kullanıcı bildirimi `onay-bildirimi.json`, o sürümün ortak SSS kopyası `sss-kaynak.json` içindedir.
- Sonraki geniş edit `onay-bekleyen/2026-10-13_kemik-gucu-kirigi-beklemeden-sorulacak-sorular/` içinde yapıldı: giriş/lede, tekrarlar, terim açıklamaları, özet, beş SSS, kaynak bağlantısı ve TOC sırası birlikte ele alındı. Onaylı kaynakla anlam ve sayısal fark karşılaştırıldı; ayrıntılar `genis-edit-notu.md` içindedir.
- Yazarın mevcut ortopedik yaklaşımı ve birinci tekil görüşleri korundu; yeni hasta sahnesi, deneyim, alıntı veya Senai adına SSS eklenmedi. H0, mizah eklenmedi. Motif: günlük bağımsız hareket; merak motorları: rapor–risk ayrımı ve sonraki görüşmeye hazırlanma. Yeni imza havuzu veya kalıcı profil değişikliği yapılmadı.
- Bu turda tıbbi açıklama ve SSS değişiklikleri de bulunduğundan önceki onay yeni revizyonun onayı olarak işaretlenmedi. Mumcu incelemesi tamamlanmış sayılmadı. Canlı rota kaynakları ve `article-approvals.ts` geçmiş kaydı korunuyor; geçiş/yönlendirme ve yayın uygulanmadı.
