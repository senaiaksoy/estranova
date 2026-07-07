# Estranova abonelik etiği — paywall politikası

**Belge statüsü:** Faz 1'de kararı kilitlemek için yazıldı. Faz 4'e (premium içerik) geldiğimizde bu belge tek doğru rehberdir.

**Son güncelleme:** 2026-05-01

---

## Tek cümlelik kural

> **Estranova kanıt-temelli temel sağlık bilgisini her zaman herkese açık tutar; abonelik yalnızca aylık sayıların kendine özgü editöryal parçalarını kapsar.**

Bu kural CLAUDE.md §5 DNA güven mimarisinin uzantısıdır. Çelişki halinde **bu cümle** önceliklidir.

---

## Ne her zaman ücretsiz kalır (HARD)

Aşağıdaki içerikler **hiçbir koşulda** abonelik duvarı arkasına alınmaz:

- **Hub sayfaları** (perimenopoz, menopoz, hormonal-geçiş, beden-yakınlık, zihin-denge, bilimsel-pencere, yaşam-tarzı, 40 sonrası vb.).
- **Eşik dergisi yayına girmeden önceki tüm yazılar** ("Sayı 0 — Arşiv" şemsiyesi altındaki içeriklerin tamamı; üretim turu sonrası yazar onaylı makaleler de aynı şemsiyeye girer).
- **Tıbbi sorumluluk reddi**, **Editöryal Politika**, **Nasıl Araştırıyoruz**, **KVKK**, **İletişim** sayfaları.
- **Kanıt seviyesi açıklamaları** ve bilimsel inceleme süreçleri.
- **Kapak dosyalarındaki ana yazılar** (her aylık sayının "MonthlyDossier"daki 4-6 yazısı).
- **Yazar profilleri ve biyografileri** (`/yazarlar/<slug>`).
- **Bilimsel editörün açılış mektubu** (her sayının başında, sayı sayfasının üstünde).
- **Kütüphane** (`/library`) — tüm makalelere arama ve erişim.

Niye? Çünkü **bilgi sansürlemiyoruz.** Kadın sağlığında perimenopoz, menopoz, HRT, kemik sağlığı, uyku gibi temel başlıklarda doğru ve nötr bilginin paywall arkasına alınması platformun trust mimarisini bozar (CLAUDE.md §5).

---

## Ne abone-erişimine alınabilir (faz 4'te aktive olur)

Aboneliğin somut karşılığı yalnızca **aylık sayının kendine özgü editöryal parçaları** olabilir:

- **Editör mektubunun uzun-form versiyonu** — kısa açılış sayı sayfasında herkese açık; ek 2-3 sayfalık derinlemesine versiyon abonelere.
- **Yazar köşesi sabit aylık imza** — örn. "Berna'nın Sayfası" — kapak dosyasından bağımsız, sayıya özel kişisel köşe.
- **Okur sayfası** — gelen sorulara yazılı yanıt (bu yapıda paywall etik problem doğurmaz çünkü sorular okurların kendisi gönderir).
- **Aylık sayı PDF'i** — tüm sayının yazıcı dostu derlenmiş hali.
- **Audio versiyon** — yazar veya profesyonel seslendirme.
- **Yıllık baskı "Estranova Yıllığı"** — basılı sınırlı edisyon (ayrı satın alınır, abone değil; abonelere indirim de uygulanmaz).
- **Sayı arşivi PDF erişimi** — geçmiş tüm sayıların derlenmiş PDF'leri.

Niye bu kategoriler etik? Çünkü hiçbiri "sağlık bilgisi sansürü" değildir. Hepsi **dergi nesnesinin kendisi** veya **derginin sunum/biçim katmanı** (PDF, audio, basılı yıllık).

---

## Ne **hiçbir zaman** abone-erişimine alınmaz (HARD YASAK)

- **Kanıt-temelli temel sağlık rehberleri.** "HRT'de güvenlik", "kemik yoğunluğu nasıl ölçülür", "perimenopozda adet düzensizliği" gibi başlıklar paywall arkasına KONULAMAZ.
- **Acil sağlık bilgisi** (kırmızı bayraklar, hekime başvurma uyarıları).
- **Tıbbi sorumluluk reddi**, **bilimsel inceleme açıklamaları**, **kanıt seviyesi metodolojisi**.
- **Hub sayfaları** veya **kategori giriş sayfaları**.
- **Yazarın profilinde tanıtılan kamuya açık bilgiler.**
- **Yayına girmeden önce yer alan tüm hub yazıları.** Faz öncesi hiçbir içerik geriye dönük paywall'a alınmaz.

---

## Dil ve UX kuralları (Brand-writer ajanı tarafından kilitlendi)

Estranova arayüzünde **şu kelimeler kullanılmaz:**

- "Premium"
- "Abone ol" (CTA olarak yasak; "Yayını izle" tercih edilir)
- "Üye ol"
- "Kilitli içerik"
- "Bedava deneme"
- "Kampanya / Paket / İndirim"
- "Webinar / Canlı yayın"

**Tercih edilen ifadeler:**

| Bunu yazma | Bunu yaz |
|---|---|
| Abone ol | Yayını izle · Aylık sayıyı oku · Estranova okuru ol |
| Premium içerik | Yayın okurlarına açık |
| Kilitli makale | Bu sayı yayını izleyen okurlara açıktır |
| Bültene kayıt ol | Estranova Mektubu'nu al |

**Sayfa altında abone-erişim notu örneği:**

> *"Bu sayfa Eşik'a katılan okurlara açıktır. Tüm hub içerikleri ve makalelerimiz ücretsiz okunmaya devam ediyor."*

Niye bu çift cümle? Çünkü "ücretsiz olan ne kalıyor?" sorusunu sessizce cevaplar — bilgi paywall'da değil, dergi nesnesi paywall'da.

---

## Faz 3 (abonelik altyapısı) öncesi kontrol listesi

Faz 3 implementasyonuna geçmeden önce aşağıdaki cümlelerin her biri **doğru olmalıdır:**

1. [ ] Yayına girmeden önce yer alan tüm hub yazılarının hiçbiri paywall'a alınmadı, hepsi açık.
2. [ ] Tüm hub sayfaları (perimenopoz, menopoz, vb.) açık erişimde.
3. [ ] Tıbbi sorumluluk reddi, editöryal politika, nasıl araştırıyoruz sayfaları açık.
4. [ ] Yazar profilleri (`/yazarlar/<slug>`) açık.
5. [ ] Aylık sayının kapak dosyasındaki ana yazılar açık.
6. [ ] Bilimsel editör açılış mektubu (kısa hâli) açık.
7. [ ] Paywall sadece "sayıya-özel uzun röportaj/yazar köşesi/okur sayfası/PDF/audio" kapsamında.
8. [ ] Arayüzde "Abone ol", "Premium", "Kilitli" kelimeleri yok; "Yayını izle", "okur" kelimeleri kullanılıyor.
9. [ ] Aylık ücretsiz kota (örneğin 3 sayı-özel parça) anonim okura açık — flexible sampling.
10. [ ] JSON-LD `isAccessibleForFree` ve `hasPart{cssSelector}` doğru ayarlandı.

---

## Çelişki çözüm sırası

Eğer bir karar bu belgeyle CLAUDE.md ya da başka bir politika ile çelişirse, **uygulanan öncelik:**

1. CLAUDE.md HARD CONSTRAINT §1-§6 (en üst kural)
2. Bu belge (paywall-policy.md)
3. AGENTS.md teknik talimatları
4. Diğer policy belgeleri

---

## İlişkili belgeler

- [`CLAUDE.md`](../CLAUDE.md) — özellikle §5 DNA / Trust architecture
- [`docs/ARTICLE-PRODUCTION-SPEC.md`](ARTICLE-PRODUCTION-SPEC.md) — makale üretimi tek kanonik referans
- [`src/data/magazine-config.ts`](../src/data/magazine-config.ts) — dergi adı/sayı isimlendirme tek noktadan
- [`src/data/issues.ts`](../src/data/issues.ts) — sayı manifest'i (premium flag faz 4'te aktif)

---

## Değişiklik geçmişi

- **2026-05-01:** İlk yazım. Eşik dergisinin Faz 1 (UI/dergi görünümü) ile birlikte etik kararı kilitlemek için oluşturuldu. Senai Aksoy'un "selective premium" tercihi onaylandı.
