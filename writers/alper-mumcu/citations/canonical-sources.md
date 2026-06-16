# Dr. Alper Mumcu — Kaynak İzi (Canonical Sources)

> Kanıt etiketleri: **[AM-K]** = mumcu.com / röportaj / yayın korpusundan birinci-elden kanıtlanmış kalıp · **[AM-T]** = arşiv başlıkları + yayın kimliğinden tematik türetme (henüz kanıtlanmamış).

---

## Durum (v0.1 — 2026-06-16)

mumcu.com bot isteklerini **403 Forbidden** ile engelliyor; korpus birinci-elden alınamadı. Bu sürümdeki tüm açılış/manifesto/experience kalıpları **[AM-T]** etiketlidir.

## Birincil korpus

- **mumcu.com (1998→)** — Türkçe kadın sağlığı/gebelik başvuru sitesi. Soru-yanıt + açıklayıcı makale arşivi. Doğrulanan başlık örnekleri (WebSearch ile):
  - Adet siklusu · Adet görememe (amenore) · Yumurtalık rezervi / yumurta dondurma · Yumurtalıkların uyarılması · Menopoz sonrası vajinal kuruluk (lazer) · Salin infüzyon sonografi · Doğum kontrolü.
- **Biyografi kaynakları:** mumcu.com "kimdir" sayfası (özet, WebSearch) + tavsiyeediyorum.com hekim profili (Hacettepe 1992, 1969 Ankara doğumlu, V.K.V. Amerikan Hastanesi Nişantaşı).

## v0.2 toplama planı

1. Kullanıcıdan birkaç tam makale metni iste (veya yetkili fetch aracı) → [AM-K] dönüşümü.
2. Soru-yanıt mikro-kalıplarını (açılış soru biçimi, güvence cümlesi, kapanış yönlendirmesi) gerçek metinden çıkar.
3. PubMed `Mumcu A[Author]` üreme/onkoloji erken tanı yayınlarını akademik iz için kontrol et.
4. Doğrulanan her kalıbı [AM-T] → [AM-K] olarak yükselt ve `profile.yaml`'a işle (kullanıcı onayı).

## Atıf frekans kuralı (Estranova)

- direct_quote_per_article_max: 1
- metaphor_per_article_max: 1
- manifesto_template_per_article_max: 1
- total_borrowed_per_article_max: 2
