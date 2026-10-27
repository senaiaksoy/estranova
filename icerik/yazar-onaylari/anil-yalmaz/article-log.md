# Anıl Yalmaz — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)

> Akümülatif yazar sesi ve cooldown kaydı. v0.1 başlangıç: 2026-06-18.

---

## Profil Durumu

- `writers/anil-yalmaz/` profili oluşturuldu.
- Kategori: Hareket & Egzersiz Bilimsel Yazarı.
- Ton kararı: 30 yaş altı spor hocası; genç, neşeli, dinamik; birinci tekil serbest.
- Ana sınır: kişisel egzersiz reçetesi, kilo/görünüm vaadi, danışan başarısı ve pazarlama dili yok.

---

## Yayın / Onay İzleri

- **2026-10-27 — yeni makale, onay.** `/zamansiz-yasam/sarkopeni-40-sonrasi-sessiz-kas-kaybi/` (editorial-guide). Yazar ve tıbbi onay KC tarafından sözlü verildi; kayıt `src/data/article-approvals.ts` içinde, manifest girdisi `static-articles.ts` içinde. Byline (4:5) ve kart (2.4:1) görselleri editörden bekleniyor; `articleCardImageByRoute` girdisi görsel gelince eklenecek. Kalıp seçim notu: açılış sandalye/kavanoz sahnesi (anekdot kapısı: derslerde sık gördüğüm an, birleşik gözlem); kapanış "Güç yalnız spor salonunda değil, merdivende ve market poşetinde de görünür" (önceki iki makalede kullanılan "Önce küçük başlayın, sonra ritmi koruyun" cooldown'da bırakıldı); Bilimsel Editör Notu başlıkları: Tanı ve ölçüm / Menopoz ile yaşın ayrımı / Egzersiz çalışmalarının sınırı. Humor: H1, tek dokunuş (kavanoz kapağı). Soru başlıklı H2: 1. Kanıt: Consensus taraması (EWGSOP2 tanımı, direnç çalışması meta-analizleri, menopoz–kas derlemesi); gövdede kaynak adı yok.

- **2026-10-14 — humanize ikinci geçiş (commit yok).** `/zamansiz-yasam/menopozda-hangi-hareket/`. Soru başlıklı H2 altıdan 1'e indi (`Hangi Gün Hangisi Daha Uygun?`); TOC etiketleri başlıklarla eşitlendi, id'ler korundu. Tekrarlanan iki paragraf birleşti (ertesi sabah / kas hassasiyeti). "değil" antitezi 2'ye, "olabilir" 6'dan 4'e indi; inkâr kalıpları seyreltildi. Tıbbi iddialar, Evidence seviyeleri (3, 3, 4, 4), RedFlagBox ve güvenlik metni değişmedi. `dateModified` 14 Ekim 2026. Kalıp seçim notu: kapanış "Önce küçük başlayın, sonra ritmi koruyun." (experience seed); açılış mat sahnesi.

- **2026-06-18 — ilk yayın.** `/zamansiz-yasam/menopozda-hangi-hareket/` onaylı sürümle yayımlandı. Bu yazı önceki kayıtta "geri çekildi" diye işaretlenmişti; o ifade tarihsel olarak geçersizdir, canlı route 2026-06-18'den beri vardı.
- **2026-10-14 — revizyon.** Kapsamlı audit ve humanize geçişi. Kaynak: `docs/editorial/menopozda-hangi-hareket-audit-humanize-2026-10-14.md`. Yazar onayı ve kontrol (tıbbi, KC) onayı sözlü alındı ve KC tarafından teyit edildi; onay kaydı `src/data/article-approvals.ts` içinde. Görseller: byline 1200×1500, kart 2400×1000; üst hero parent Zamansız Yaşam'da korundu. Commit/push/deploy bu kayıtla yapılmadı.

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| — | 2026-06-18 | Menopozda Hangi Hareket? Yoga, Pilates, HIIT ve Direnç Arasında Bir Rehber | — | v0.1 | — | — | — | — | — | — | Anıl Yalmaz imzalı ikinci yazı; Zamansız Yaşam kategorisi. İlk onaylı sürüm 18 Haziran 2026'da yayımlandı. 14 Ekim 2026 revizyonu (audit + humanize, SSS bölümü yok) sözlü onayla canlı route'a alındı; güncel kayıt aşağıdaki "Yayın / Onay İzleri" bölümünde. |
| — | 2026-05-26 | 40'tan Sonra Harekete Yeniden Başlamak: Daha Sert Değil, Daha Akıllı | — | v0.1 | — | — | — | — | — | — | Profil v0.1 için ton ve konu referansı olarak kullanıldı. 21 Ekim 2026 revizyonu (geniş audit + humanize): soru başlıklı H2 6→1, "değil" 17→1, "ben" kalıbı ~17→5, beden kişileştirmesi 4→0, ledeler 2 cümle; açılış sahnesi ayakkabı/üyelik/takvim ve apartman merdiveni korundu; güvenlik sınırı cümlesi "Önce şunu söyleyeyim" teselliyle ağrı bölümünde. Sayısal çapa (haftada ~150 dk orta tempolu hareket + 2 gün kas güçlendirme) eklendi. Yazar ve tıbbi onay KC tarafından sözlü verildi (21 Ekim 2026); kayıt `src/data/article-approvals.ts` içinde. Görseller 21 Ekim 2026'da yeniden kırpıldı: tek 1800×1000 dosya yerine byline 1200×1500 (4:5) ve kart 2400×1000 (2,4:1); özgün kaynak `icerik/yazar-onaylari/anil-yalmaz/gorsel-kaynak/` altında yedekli, iki kırpma da IPTC `trainedAlgorithmicMedia` etiketli, alt metinler görüneni anlatacak şekilde kısaltıldı. Görsel kırpmaları sözlü onayın kapsamı dışındaydı; KC'nin göz atması bekleniyor. 2026-10-21 (denetim sonrası): Kısa Özet ve üç cümlede antitez/aforizma seyreltmesi; Bilimsel Editör Notu inceleme imzası (Doç. Dr. Senai Aksoy) eklendi. KC sohbette "onay" yanıtını verdi; kayıt article-approvals.ts içinde. |

---

## Cooldown Başlangıcı

Henüz yeterli yayın rotasyonu yok. İlk 3 Anıl yazısından sonra aşağıdaki kalıplar izlenecek:

- Açılış kalıbı.
- Kapanış kalıbı.
- "Önce küçük başla, sonra ritmi koru" kullanımı.
- Birinci tekil sahne türü.
- Güvenlik sınırı cümlesi.

---

## Editöryal Not

Anıl metinlerinde enerji isteniyor; ancak fitness influencer, satış, hizmet yönlendirme, dönüşüm vaadi veya kişisel program dili istemiyoruz. "Genç spor hocası" hissi ritim ve sıcaklıkta görünmeli; içerik güvenli, nötr ve Estranova'nın Türkçe editoryal sağlık platformu çizgisinde kalmalı.
