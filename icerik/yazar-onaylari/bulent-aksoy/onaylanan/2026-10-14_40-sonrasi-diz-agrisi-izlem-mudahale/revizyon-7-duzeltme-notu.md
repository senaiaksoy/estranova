# Revizyon 7 — üçüncü audit ve düzeltme notu

Tarih: 14 Ekim 2026
Revizyon anahtarı: `2026-10-14-audit-fix-v7`
Önceki sürüm: `revizyon-6/site-kaynak.astro` (korundu)
Kaynak SHA-256 (v7): `c9642e1219bf8cfde0b1437980b0351848ee1f007ca2504abf9f747b217e273c`

Kapsam: revizyon 6'nın yeniden audit'i. Bu turda önceki turlarda erişilemeyen birincil kaynaklar açıldı: NICE NG226 öneriler sayfası gerçek tarayıcıda, BMJ 2017 kılavuzu Europe PMC tam metninde (PMC5426368). Canlı rota, paylaşılan `article-faqs.ts` ve onay kaydı değişmedi. Yazar onayı ve bağımsız bilimsel inceleme bekleniyor; form gönderilmedi.

## Birincil kaynak doğrulaması (bu tur)

**NICE NG226 (kaynak [1])** — öneriler sayfasından doğrudan:
- "Consider intra-articular corticosteroid injections when other pharmacological treatments are ineffective or unsuitable, or to support therapeutic exercise. Explain to the person that these only provide short‑term relief (2 to 10 weeks)."
- "Do not offer intra-articular hyaluronan injections to manage osteoarthritis."
- Kilo: fazla kilo veya obezitesi olan osteoartritli kişilere kilo kaybının yaşam kalitesi ve işlevi iyileştireceği, ağrıyı azaltacağı söylenir.
- Egzersiz: tedavi egzersizine başlarken eklem ağrısının artabileceği, düzenli egzersizin buna rağmen yararlı olduğu anlatılır.
- Protez: belirtiler yaşam kalitesini belirgin etkiliyor ve cerrahi dışı yönetim etkisiz veya uygunsuzsa yönlendirme düşünülür.
- İzlem (1.5): çoğu kişide hasta tarafından başlatılan izlem; gerekirse planlı izlem; üzerinde anlaşılan sürede plan işlemiyorsa başvuru.
- Makaledeki tüm [1] atıflarının içeriği kılavuzla eşleşti.

**BMJ 2017 (kaynak [5])** — Europe PMC tam metninden:
- "We make a strong recommendation against the use of arthroscopy in nearly all patients with degenerative knee disease."
- Mekanik belirtilerin her şiddetinde ve travmasız ani başlangıçta da geçerli.
- "the only possible exception being those who are objectively unable to fully extend their knee"; büyük travma ve genç sporcu yaralanmaları kapsam dışı.

## Düzeltmeler

1. **Kortikosteroid süresi ve hyalüronan geri getirildi (önceki tur hatası).** Revizyon 5'te bu iki iddia NICE metni açılamadığı için silinmişti. Kılavuz iki iddiayı da birebir destekliyor. Metin: "Başvurulan osteoartrit kılavuzu, bu enjeksiyonların yalnızca kısa süreli, 2–10 haftalık bir rahatlama sağladığını belirtir ve eklem içine hyalüronan (hyalüronik asit) enjeksiyonunu önermez.[1]" Revizyon 5/6'daki "Etkisinin ne kadar süreceği kişiye göre değişir" cümlesi kaldırıldı.
   - Düzeltme: revizyon 5 notundaki "NICE ile doğrulanamadı, ikincil kaynaklarda geçiyor" değerlendirmesi artık geçersiz.

2. **Artroskopi cümlesi kaynakla hizalandı (kaynak [5]).** "çoğu kişi için önerilmez" → "neredeyse hiçbir hastaya önerilmez; takılma veya klik gibi mekanik belirtiler de bu öneriyi değiştirmez. Olası istisna, dizini nesnel olarak tam düzeltemeyen kişilerdir." Bu ayrıntı, SSS'deki "diziniz gerçekten kilitlenmiş ve açılamıyorsa" yanıtının [5] atfını da destekliyor.

3. **Kapatılmamış paragraf etiketi.** Kırmızı bayrak kutusundan sonraki `<p>` kapatılmadan `<h2 id="karar-zinciri">` başlıyordu (tarayıcı otomatik kapattığı için görünür bozulma yoktu). `</p>` eklendi; makale gövdesinde açılış/kapanış 28/28.

4. **Kırmızı bayrak maddesi.** "Dizin kilitlenmesi ve açılıp kapanmasının engellenmesi" → "Dizin kilitlenip tam düzeltilememesi". Daha anlaşılır ve BMJ'nin "dizini tam düzeltememe" ölçütüyle aynı.

## Değişmeyen ama not edilen bulgular

- "Tedavinin başarısı çoğu zaman doğru ilacı seçmek kadar iyi iletişim kurmaya da bağlıdır" ve "tedavinin en güçlü başlangıç noktası" — 8 Mayıs onaylı metinden; kaynaksız genel yargı. Yazar onayında görülmeli.
- Kırmızı bayrak kutusundan sonraki "Bu değerlendirme ayrımı ... resmî sağlık bilgilerinde yer alır" cümlesi bilgi taşımayan bir atıf cümlesi; kutu bileşeni atıf alamadığı için korunuyor.
- Öneri (yazar kararı, eklenmedi): NICE 1.1, 45 yaş ve üzerinde, hareketle artan ağrısı ve 30 dakikayı geçmeyen sabah tutukluğu olan kişilerde osteoartritin görüntülemesiz, klinik olarak tanınmasını ve görüntülemenin rutin kullanılmamasını önerir. Makalenin "MR raporu tek başına yetmez" savını doğrudan destekler.
- Negatif çerçeve ailesi 3 kez; korundu.

## Kontroller

- İzole Astro derlemesi başarılı (1 rota, hata/uyarı yok).
- Tarayıcı: banner "Revizyon 7"; yeni ifadeler görünür; SSS–FAQPage soru ve yanıt metni 4/4 birebir; `datePublished` 2026-05-08, `dateModified` 2026-10-14; `MedicalWebPage.reviewedBy` yok (inceleme bekliyor); tek H1; atıf hedefleri eksiksiz; yatay taşma yok.
- `structure-check`: yalnızca negatif çerçeve ailesi (3); ortalama 13,5 kelime, kısa cümle oranı %13.
- `editorial-check`: 0 aday.
- `rendered-check`: 9 `uncited-source` — bilinen yanlış pozitif.
- `kontrol-formu.html` ve `meta.json` v7 hash'ine bağlandı; durumlar `pending`, `sentAt: null`.
