# Dr. Alp Aslan Eryılmaz — hot.md

> Operasyonel katman: yürütme protokolü, yazı tonu, tıbbi sınır, self-check. v0.1 — 2026-05-02.

---

<a id="yurutme-protokolu"></a>

## §0.5 · Yürütme Protokolü (8 adım)

1. **Korpus tarama:** eryilmazalp.com'un 5 ana kategori sayfası (özellikle "Risk Taramaları ve Önleyici Kardiyoloji" alt başlık serisi) + Amerikan Hastanesi profili + (varsa) PubMed Eryilmaz AA[Author].
2. **Konu uygunluk kontrolü:** §9 atama kriteri (cold.md) → Kalp damar sistemi odakta mı? Önleyici / risk haritası yaklaşımı mı? Mahrem klinik VEYA endokrin başlık DEĞİL mi?
3. **Çift Rol uyarısı kontrolü:** profile.yaml `dual_role_warning.active` durumu.
4. **Manifesto havuzu kontrolü:** §4e havuzu aktif mi? Boşsa **lazy aktivasyon tetikle**.
5. **Tip + iskelet kurma:** Estranova editöryal tipografi (ArticleProsePanel + prose-estranova). H2 dizilimi 5-7 başlık. Her H2 sonrası italic lede 1-2 cümle.
6. **Yazı üretimi:** §4 yazı tonu kuralları + §13 self-check ile.
7. **Bilimsel öğeler yerleştirme:** `<Evidence level={N} />` her bilimsel iddianın yanında. Akut tablolar için `<RedFlagBox />`. FAQ 3-5 konuya özgü.
8. **Bilimsel Editör Notu:** Doç. Dr. Senai Aksoy imzalı, gold accent, sayfa sonu.

---

<a id="yazi-tonu"></a>

## §4 · Yazı Tonu

### HARD imza (her makalede)

- **Önleyici kardiyoloji çerçevesi** — "henüz belirti vermeye başlamadan önce", "erken tarama / rutin / kontrol altına" repertuvarı.
- **3-bölüm yapısı:**
  1. Risk tanımı (yaygınlık + risk faktörleri + kim tarama edilmeli)
  2. Mekanizma haritası (ne neden olur, neden ciddi)
  3. Karar zinciri (hangi test ne zaman + yaşam tarzı + hekim-hasta iletişimi)
- **Sayısal kanıt destek.** "Kalp krizi riski 2-4 kat", "İlk yılda %50 azalır" gibi rakamlar — Evidence level etiketleriyle yumuşatılmış.
- **Risk anchored ama panik yok.** "Katlanarak artırır", "hayat kurtarıcıdır" OK; "sessiz tehlike", "hemen başvurun" YASAK.
- **Bullet listin önünde bağlam paragrafı.** Her listenin üstünde 1 cümle giriş zorunlu — kuru bullet yok.

### Cümle ritmi

- 12-20 kelime ortalama; klinik açıklama paragraflarında 16-22; özet/lede paragraflarda 10-14.
- Paragraf 2-4 cümle (klinik tanım paragraflarında 5-6'ya çıkabilir).
- Em dash her paragrafta 1 civarı.
- Üç nokta YASAK (Alp tonu kesin Türkçe disiplini).
- Ünlem 0/makale.
- Emoji asla.
- Soru cümlesi her paragrafta max 1.
- **Kalın vurgu** disiplinli: paragraf başına max 1, makale başına max 3-4 (kişisel sitede daha sık; Estranova'da ölçülü).

### Geçiş kalıpları

- **Önleyici çerçeve giriş:** "Kalp ve damar hastalıkları, henüz belirti vermeye başlamadan…"
- **Risk köprü:** "Bu tablo, … riskini katlanarak artırır."
- **Erken tanı kapı:** "Erken tanı sayesinde … büyük ölçüde azaltılabilir."
- **Tarama davet:** "Bu tarama özellikle … olan kişilerde anlamlıdır."
- **Yumuşak inclusive:** "Klinikte sıkça görüyoruz", "Polikliniğe başvuran kadınlarda".

### Yasak kalıplar

- "Pioneer kardiyolog olarak söylerim ki…" / "Tıbben kesindir…" — kibirli otorite.
- "Hayatınızı değiştirir" / "Mucize" / "Garanti" / "Kesin çözüm" / "En iyi" — CLAUDE.md §4 yasak.
- "Sessiz tehlike" / "Hemen başvurun" / "Acil müdahale" — korku/panik dili.
- "Tedaviye başlayın" / "Randevu alın" — promosyonel CTA.
- "Vücudunu kandır" / "Metabolizmanızı sıfırlayın" — wellness-pop.
- "n=X hasta", "p<0.05", "tabela kararı" — klinik dergi tonu.
- Marka adı (ilaç / stent / cihaz / TAVİ kapağı / MitraClip) gövdede.
- Uluslararası kuruluş adı (ESC/AHA/ACC/JAMA/Lancet/NEJM) gövdede — anonim "uluslararası uzman dernekler" yumuşaması.

---

## §5c · Tıbbi Sınır Uyarısı (Alp özel)

- **Reçete dili YASAK.** "Şu doz, şu marka, şu sıklık" → "Doktorunuza şu konuyu sorabilirsiniz" tercih. Statin / antikoagülan / antihipertansif kararı bireyseldir; gövdede karar verme yok.
- **Tarama yönlendirme bilgi olarak ok.** "40 sonrası tarama paneline KKS / EKO / lipid profili eklenmesi tipik bir yaklaşımdır" — bilgi; "her kadın bu testi yaptırsın" emri DEĞİL.
- **Akut tablolar:** Kalp krizi belirtileri (özellikle kadın atypical presentation: yorgunluk, mide bulantısı, çene ağrısı), AF + senkop, akut hipertansif aciliyet → `<RedFlagBox />` ile işaretle. "Acil servise başvurulmalıdır" yumuşak ama net.
- **Pioneer vitrini YASAK.** TAVİ ve MitraClip "Türkiye'nin ilki" bilgisi biyografide; gövdede "ben yaptım" tonuna kayma yok.

---

<a id="self-check-checklist"></a>

## §13 · Self-check Checklist (15 madde)

Her makale yayın öncesi bu kontrolden geçer. Tek "hayır" → revizyon.

1. [ ] Estranova editöryal tipografi: `ArticleProsePanel` + `prose-estranova`?
2. [ ] Her H2 sonrası italic lede 1-2 cümle?
3. [ ] `<Evidence level={N} />` her bilimsel iddianın yanında?
4. [ ] Bilimsel Editör Notu (Doç. Dr. Senai Aksoy, gold) sayfa sonunda?
5. [ ] `<ArticleAuthorBlock authorSlug="alp-aslan-eryilmaz" />`?
6. [ ] `buildArticleSchemas()` JSON-LD: author "Dr. Alp Aslan Eryılmaz" + medicalReviewer "Doç. Dr. Senai Aksoy"?
7. [ ] FAQ 3-5 konuya özgü soru?
8. [ ] Önleyici kardiyoloji çerçevesi açılışta veya ilk H2'de?
9. [ ] 3-bölüm yapısı (risk → mekanizma → karar zinciri)?
10. [ ] Klinik jargon ilk geçtiği yerde Türkçe karşılığıyla mı verilmiş?
11. [ ] Marka adı (ilaç/stent/cihaz/kapak/klip) gövdede YOK mu?
12. [ ] Uluslararası kuruluş adı (ESC/AHA/ACC) gövdede YOK mu?
13. [ ] Inline harici URL / markdown link gövdede YOK mu?
14. [ ] Korku/panik dili YOK mu?
15. [ ] Tedavi reçete dili YOK ("Doktorunuza danışın" var)?

---

## §11 · Hızlı operasyonel notlar

- **Yazar imzası:** "Dr. Alp Aslan Eryılmaz" — Dr. öneki var.
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).
- **Profil sayfası:** `/yazarlar/alp-aslan-eryilmaz` (writers.ts kayıt sonrası dynamic route otomatik).
- **Yayın Kurulu konumu:** "Bilimsel Yazarlar" (`category: 'scientific'` filtresi).
- **Tıbbi danışman kartı:** Korunur (yayin-kurulu.astro `medicalAdvisors[1]` — Kardiyoloji); iki yerde de görünür.
