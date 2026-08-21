# Sanem Altan — Yazar Profili (modüler v2.1)

> **Durum:** Tarihsel korpus araştırması tamamlandı; güncel yazar onayı,
> portre ve ses kalibrasyonu bekleniyor. Bu nedenle writers.ts kaydı
> inactive kalır.

## Klasör navigasyonu

| Dosya | Tek sorumluluk | Yükleme |
|---|---|---|
| profile.yaml | Doğrulanmış kimlik, yetki, konu yönlendirme ve güvenlik özeti | Her makalede |
| hot.md | Kısa üretim sözleşmesi, tıbbi sınır ve persona kontrolü | Her makalede |
| warm.md | Seçilebilir gazetecilik ve edebiyat araçları | Konuya göre |
| cold.md | Kaynak güveni, biyografi, korpus sınırı ve bakım notları | Audit/evrim |
| hidden.md | Public özel-bilgi ve rıza politikası; sır deposu değildir | Güvenlik kontrolü |
| citations/extended.md | İnsan onaylı kaynak genişletmeleri | Gerektiğinde |
| citations/pending.md | Kaynak doğrulama ve onay kuyruğu | Gerektiğinde |

## Bağlı dosyalar

- ../_archive/sanem-altan-alintilar.md — tarihsel ham derleme; üretim prompt'u değildir
- ../_archive/sanem-altan-aphorism-pool.md — v1 distilasyonu; v2'de emekli
- ../_archive/sanem-altan-ornek-makale.md — v1 pilotu; gold-standard değildir
- ../../icerik/yazar-onaylari/sanem-altan/article-log.md — onay ve evrim günlüğü

## Repo dışı özel anı bankası

Ham yaşam notları tracked profil dosyalarında tutulmaz. Varsayılan yerel yol
`private-writer-context/sanem-altan/` klasörüdür ve kök `.gitignore` tarafından
dışlanır. Tercih edilen üretim kullanımı, repo dışındaki erişim kontrollü
bir dizini `ESTRANOVA_PRIVATE_WRITER_CONTEXT_DIR` ile göstermektir.

- `seeds.yaml` — gerçeklik, kaynak, hassasiyet, kullanım ve onay durumu;
- `usage-log.yaml` — her taslak kullanımının append-only günlüğü;
- `writers/_schema/private-writer-seed-bank.schema.json` — bankanın
  yazar kimliği, güvenlik bayrakları, durumları ve kullanım izinleri için
  fail-closed şema;
- `npm run writer:seed -- --writer sanem-altan --seed-id <kimlik>` —
  yalnız seçilen tek kaydın redakte edilmiş taslak bağlamını verir.

Özel bankanın tamamı otomatik yüklenmez; public profile, hidden.md,
article-log, terminal çıktısı veya onay paketi içine kopyalanmaz.

## Üretim akışı

1. profile.yaml ve hot.md dosyalarını yükle.
2. Makale türünü doğrula: yalnız experience-essay veya editorial-guide.
3. Konuya uyan warm.md bölümlerinden birkaç araç seç.
4. Özel bağlam kullanılacaksa yalnız açık seed kimliğiyle tek kayıt yükle.
5. Kurgusal veya onaysız birinci tekil sahneyi yalnız yazar-inceleme
   taslağında görünür biçimde etiketle.
6. Sanem'in gerçek/düzeltilmiş/tema/kompozit/çıkar kararını usage-log'a yaz.
7. Korpusla özgün ifade ve sahne akışı benzerliği kontrolü yap.
8. hot.md §13 kontrolünü çalıştır.
9. Taslak hash'ine bağlı yazılı son onay olmadan imzalı yayına geçme.

## Persona çekirdeği

Somut ayrıntıyı fark eden; onun altında kalan duygu veya çelişkinin peşine
röportajcı gibi düşen; kendi ilk hükmünü de sınayan gazeteci-denemeci sesi.

Bu çekirdek noktalama, mevsim, retorik soru veya aile anısı kotası değildir.
Eski özgün cümleler ve metaforlar yeniden üretilmez.

## Güncel kalibrasyon kapısı

Aktivasyondan önce Sanem Altan'dan şu onaylar alınır:

- tercih edilen güncel unvan ve kısa biyografi;
- 1993 ve kurum zaman çizgisi;
- portre ve byline kullanım izni;
- yazmak istediği ve istemediği sağlık başlıkları;
- kişisel deneyim ve mahremiyet sınırları;
- artık kullanmadığı dil ve noktalama alışkanlıkları;
- “bunu benim ağzımdan yazmayın” listesi;
- son dönemde kendisinin seçtiği üç metin;
- ilk pilot yazının nihai onayı.

## Gizlilik

Repo herkese açıktır. hidden.md dâhil hiçbir dosya özel kişi, sağlık,
klinik ilişki veya kamusal olmayan aile bilgisi saklamaz. Böyle bir bilgi
yalnız Git dışındaki kasadan, açık seed seçimiyle ve Sanem'in inceleyeceği
iç taslak için kullanılabilir.

## Versiyon

- v2.0 — 2026-08-12: gazetecilik zanaatı merkezli yeniden kurulum; mekanik
  üslup kotaları, “sen” hitabı ve onaysız kişisel deneyimler kaldırıldı.
- v2.1 — 2026-08-12: public persona ile Git dışı özel anı bankası ayrıldı;
  editör lead'i, yazar-onaylı anı ve kurgusal türev için ayrı kullanım/onay
  kapıları; banka şeması, yol containment ve opak kullanım günlüğü eklendi.
