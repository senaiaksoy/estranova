# Yazar Onayları

Bu klasör, Estranova yazar onay izlerinin kök arşividir.

> **Güncel kural (2026-10-14):** Yazar onayı ve tıbbi onay **Dr. Senai Aksoy (KC) tarafından sözlü verilir**. Yazar için onay formu, onay paketi veya onay e-postası **üretilmez**. `npm run author:send-for-approval` artık kullanılmaz.

Her yazar için iki alt klasör durabilir:

- `onay-bekleyen/`: Onay bekleyen eski paketler (2026-10-14 öncesi). Yeni paket açılmaz.
- `onaylanan/`: Onayı alınmış paketler ve onay kayıtları.

Yayın kapısı katıdır: makale, KC'nin sözlü onayı gelmeden siteye yayınlanmaz. Onay gelince `src/data/article-approvals.ts` kaydı ve `article-log.md` satırı tutulur; varsa paket `onaylanan/` altına taşınır.

`onay-bekleyen/` statüsündeki bir yazı canlı sitede görünmemelidir: `src/pages/` altında rota dosyası, hub/sayı indeksi bağlantısı, RSS/static manifest kaydı veya `icerik/yayinlanmis-makaleler/` arşiv kaydı tutulmaz. Kaynak kopya gerekiyorsa aynı pakette `site-kaynak.astro` veya `makale-kaynak.astro` adıyla saklanır.

Sözlü geri bildirim stil öğrenme girdisidir; `article-log.md` dosyasına özetlenir. Kalıcı `writers/<slug>/` profil değişiklikleri KC onayı olmadan yapılmaz.

Yazarın akümülatif üretim günlüğü varsa aynı yazar klasöründe `article-log.md` adıyla durur. Bu log, şablon cooldown ve yazar sesi sürekliliği için kullanılır.

Yazar klasörlerini yeniden senkronize etmek için:

```bash
npm run authors:init-folders
```

Detaylı süreç: `docs/AUTHOR-APPROVAL-WORKFLOW.md`.
