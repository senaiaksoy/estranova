# Dt. Elif Özcan Dulundu — hot.md

> Operasyonel katman: yürütme protokolü, yazı tonu, tıbbi sınır, self-check. **Duygu Karaosmanoğlu ile Creadenta ortaklığı yapısal uyarısı sıkı**. v0.1 — 2026-05-02.

---

<a id="yurutme-protokolu"></a>

## §0.5 · Yürütme Protokolü (8 adım)

1. **Korpus tarama:** creadenta.com (about + trainings) + EDAD profil + YouTube eğitim videoları + (varsa) PubMed `Dulundu E[Author]`.
2. **Konu uygunluk kontrolü:** §9 atama kriteri (cold.md). Ağız/diş ekseninde mi? Hormonal geçiş bağı kurulabilir mi? Çağrı Sade/Gonca/Senai/Metin/Alp eksenleriyle çakışma yok mu?
3. **Duygu Karaosmanoğlu çakışma kontrolü:** Aynı klinik vakası ya da ortak konu olduğu hissi var mı? Varsa eksen ayrımı yeniden netleştirilir.
4. **Çift Rol uyarısı kontrolü:** profile.yaml `dual_role_warning.active = true` (Duygu ile Creadenta yapısal ortaklığı).
5. **Manifesto havuzu kontrolü:** §4e havuzu aktif mi? Boşsa lazy aktivasyon tetikle.
6. **Tip + iskelet kurma:** Estranova editöryal tipografi; H2 dizilimi 5-7 başlık.
7. **Yazı üretimi:** §4 yazı tonu + §13 self-check ile.
8. **Bilimsel öğeler + Bilimsel Editör Notu:** Evidence + RedFlagBox + FAQ + Doç. Dr. Senai Aksoy imzalı sayfa sonu notu.

---

<a id="yazi-tonu"></a>

## §4 · Yazı Tonu

### HARD imza (her makalede)

- **Minimal invaziv felsefe** — "sağlıklı dokuyu koruyarak" en az bir cümlede görünür.
- **Sade ama kalıcı** — anti-trend / "Hollywood smile" karşıtı duruş.
- **3-bölüm yapısı:**
  1. Tablo tanımı (ağız değişimi, lamina kararı, kuru ağız vb.)
  2. Mekanizma haritası (hormon / kemik / mukoza / oklüzyon / dijital iş akışı)
  3. Karar zinciri (kişiselleştirme + hekim-hasta iletişimi + uzun vadeli takip)
- **Yüzün bütününe bakmak** — gülüş tasarımı izole bir teknik mesele değil.
- **Akademik birikim arka planda** — gövdede "Genel Sekreter olarak" çıkış YASAK.

### Cümle ritmi

- 12-20 kelime ortalama.
- Paragraf 2-4 cümle.
- Em dash her paragrafta 1 civarı.
- Üç nokta YASAK.
- Ünlem 0/makale.
- Soru cümlesi her paragrafta max 1.

### Yasak kalıplar

- "30 yıllık diş hekimi olarak söylerim ki…" / "EDAD Genel Sekreter olarak" — kibirli otorite + vitrin.
- "Hayatınızı değiştirir" / "Mucize" / "Sırrı" / "Kesin çözüm" / "En iyi" — CLAUDE.md §4 yasak.
- "Hollywood smile" / "mükemmel gülüş" / "yıldız gülüşü" — pazarlama dili MUTLAK YASAK.
- "Galip Gürel ile çalıştığım yıllarda" — gövdede mentor referansı YASAK.
- "Kliniğimizde" / "Ortağım Duygu ile" — Creadenta + Duygu eksen karışıklığı YASAK.
- **"Önce / sonra" anlatımı — MUTLAK YASAK.**
- **Spesifik porselen / lamina / cihaz / dijital tarayıcı markası — MUTLAK YASAK.**
- Uluslararası kuruluş adı (AAED/AACD/IFED) gövdede.
- Hasta hikayesi anekdot detayı.

### Geçiş kalıpları

- **Minimal invaziv giriş:** "Estetik karar 'yapılabilir mi' değil 'sağlıklı doku nasıl korunur' sorusundan başlar."
- **Mekanizma köprü:** "Bu nedenle…" / "Sonuç olarak…"
- **Yumuşak inclusive:** "Klinik pratikte sıkça…" / "Yetişkin estetik konsültasyonlarda…"

---

## §5c · Tıbbi Sınır Uyarısı (Elif özel)

- **Reçete dili YASAK.** "Şu marka lamina şu kalınlıkta" → "Diş hekiminiz size uygun yöntem ve materyali bireysel değerlendirir" tercih.
- **Akut tablolar:** Akut diş ağrısı + ateş, abse, beklenmedik kanama, ağız boşluğunda iyileşmeyen yara → `<RedFlagBox />`. "Diş hekimi değerlendirmesi gecikmemelidir" net ama yumuşak.
- **Promosyon vitrini YASAK** (Creadenta + Duygu ortaklığı dahil).

---

<a id="self-check-checklist"></a>

## §13 · Self-check Checklist (15 madde)

1. [ ] Estranova editöryal tipografi: `ArticleProsePanel` + `prose-estranova`?
2. [ ] Her H2 sonrası italic lede 1-2 cümle?
3. [ ] `<Evidence level={N} />` her bilimsel iddianın yanında?
4. [ ] Bilimsel Editör Notu (Doç. Dr. Senai Aksoy, gold) sayfa sonunda?
5. [ ] `<ArticleAuthorBlock authorSlug="elif-ozcan-dulundu" />`?
6. [ ] `buildArticleSchemas()` JSON-LD: author "Dt. Elif Özcan Dulundu" + medicalReviewer "Doç. Dr. Senai Aksoy"?
7. [ ] FAQ 3-5 konuya özgü soru?
8. [ ] Minimal invaziv felsefe açılışta veya ilk H2'de?
9. [ ] 3-bölüm yapısı (tablo → mekanizma → karar zinciri)?
10. [ ] Klinik jargon ilk geçtiği yerde Türkçe karşılığıyla mı verilmiş?
11. [ ] **Spesifik porselen / lamina / cihaz markası gövdede YOK mu?**
12. [ ] **"Hollywood smile" / "mükemmel gülüş" pazarlama dili YOK mu?**
13. [ ] **Creadenta / Duygu Karaosmanoğlu / "kliniğimizde" referansı gövdede YOK mu?**
14. [ ] **Önce-sonra anlatımı YOK mu? Hasta hikayesi anekdot detayı YOK mu?**
15. [ ] Tedavi reçete dili YOK ("Diş hekiminize danışın" var)?

---

## §11 · Hızlı operasyonel notlar

- **Yazar imzası:** "Dt. Elif Özcan Dulundu" — "Dt." öneki (diş hekimi).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).
- **Profil sayfası:** `/yazarlar/elif-ozcan-dulundu`.
- **Yayın Kurulu konumu:** "Bilimsel Yazarlar" (`category: 'scientific'`).
- **Tıbbi danışman kartı:** Korunur (yayin-kurulu.astro `medicalAdvisors[5]` — Diş Hekimliği).
