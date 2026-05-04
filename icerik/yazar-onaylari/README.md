# Yazar Onayları

Bu klasör, Estranova yazar onay sürecinin tek kök arşividir.

Her yazar için iki alt klasör kullanılır:

- `onay-bekleyen/`: Yazara gönderilmiş, yanıtı beklenen makale paketleri.
- `onaylanan/`: Yazar onayı alınmış paketler ve onay kayıtları.

Bir makale paketi kendi içinde bütün izleri birlikte tutar: makale PDF'i, onay formu PDF'i, tıklanabilir 5 dakikalık kontrol formu, önizleme HTML'i, `meta.json` ve onay geldikten sonra yazar yanıtı/karar kaydı.

Yayın kapısı katıdır: yeni makale önce `onay-bekleyen/` altına girer ve yazar onayı gelmeden siteye yayınlanmaz. Yazar değişiklik isterse revizyon yapılır, revize makale + yeni 5 dakikalık form içeren yeni paket üretilir ve döngü tekrar eder. Yazar `ONAYLIYORUM` dediğinde yanıt pakete kaydedilir, paket `onaylanan/` altına taşınır ve yayın süreci ancak bundan sonra başlar.

`onay-bekleyen/` statüsündeki bir yazı canlı sitede görünmemelidir: `src/pages/` altında rota dosyası, hub/sayı indeksi bağlantısı, RSS/static manifest kaydı veya `icerik/yayinlanmis-makaleler/` arşiv kaydı tutulmaz. Yayın kaynak kopyası gerekiyorsa aynı pakette `site-kaynak.astro` veya `makale-kaynak.astro` adıyla saklanır.

İstisna: `berna-aksoy`, `alara-baykent` ve `senai-aksoy` için 5 dakikalık yazar formu zorunlu değildir. Bu üç yazarın yazılarında KC editör doğrudan onayı yeterlidir; onay izi `article-approvals.ts`, varsa paket README'si ve/veya `article-log.md` içinde tutulur.

Form yanıtları aynı zamanda yazar stilini geliştirmek için kullanılır. Ham JSON yanıtı paket klasöründe kalır; likert, toggle ve serbest yorumlardan çıkan stil sinyali `article-log.md` dosyasına özetlenir. Kalıcı `writers/<slug>/` profil değişiklikleri otomatik yapılmaz, editör onayı gerektirir.

Yazarın akümülatif üretim günlüğü varsa aynı yazar klasöründe `article-log.md` adıyla durur. Bu log, şablon cooldown ve yazar sesi sürekliliği için kullanılır.

Yeni paket üretmek için:

```bash
npm run author:send-for-approval -- --slug <writer-slug> --article <article-pathname>
```

Yazar klasörlerini yeniden senkronize etmek için:

```bash
npm run authors:init-folders
```

Detaylı süreç: `docs/AUTHOR-APPROVAL-WORKFLOW.md`.
