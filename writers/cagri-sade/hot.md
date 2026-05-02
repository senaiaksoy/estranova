# Op. Dr. Çağrı Sade — hot.md

> Operasyonel katman: yürütme protokolü, yazı tonu, tıbbi sınır, self-check. Estetik konularda Estranova promosyon yasakları **en sıkı** uygulanır. v0.1 — 2026-05-02.

---

## §0.5 · Yürütme Protokolü (8 adım)

1. **Korpus tarama:** cagrisade.com.tr blog 4-5 yazı + biyografi sayfası + Amerikan Hastanesi profili + (varsa) PubMed `Sade C[Author]`.
2. **Konu uygunluk kontrolü:** §9 atama kriteri (cold.md). Mahrem (Senai) / endokrin (Metin) / kardiyo (Alp) eksenleriyle çakışma var mı? Vücut estetiği veya saç ekimi tek başına ise menopoz çerçevesi yok ise REDDET.
3. **Promosyon riski kontrolü:** Konuyu "size uygun mu" karar çerçevesinde ele alabilir miyim? Marka / önce-sonra / başarı hikayesi gerekiyorsa konu DEĞİL.
4. **Çift Rol uyarısı kontrolü:** profile.yaml `dual_role_warning.active` durumu.
5. **Manifesto havuzu kontrolü:** §4e havuzu aktif mi? Boşsa **lazy aktivasyon tetikle**.
6. **Tip + iskelet kurma:** Estranova editöryal tipografi. H2 dizilimi 5-7 başlık; her H2 sonrası italic lede 1-2 cümle.
7. **Yazı üretimi:** §4 yazı tonu kuralları + §13 self-check ile.
8. **Bilimsel öğeler + Bilimsel Editör Notu:** Evidence + RedFlagBox (varsa) + FAQ + Doç. Dr. Senai Aksoy imzalı sayfa sonu notu.

---

## §4 · Yazı Tonu

### HARD imza (her makalede)

- **"Size uygun mu" karar çerçevesi** — "yapılabilir mi" değil. Kişiselleştirme felsefesi her açılış ya da ilk H2'de görünür.
- **3-bölüm yapısı:**
  1. Tablo tanımı (yaşlanma mekanizması, hangi yaş bandı, ne tür değişimler)
  2. Mekanizma haritası (cilt + yağ + kemik + kas katmanları; menopoz hızlandırması)
  3. Karar zinciri (ne zaman müdahale anlamlı + cerrahla iletişim soruları + doğal kabul dengesi)
- **Doğal yaşlanma + müdahale dengesi.** Yaşlanmayı reddetmek değil; gerekçeli düşünme.
- **Bilgilendirici + danışmanlık niteliğinde + hasta-merkezli** (kişisel siteye yakın ama promosyon yasaklarıyla sıkı çerçeveli).
- **Bullet listin önünde 1 cümle bağlam paragrafı zorunlu** — kuru bullet yasak.

### Cümle ritmi

- 12-20 kelime ortalama; klinik açıklama paragraflarında 16-22; lede paragraflarda 10-14.
- Paragraf 2-4 cümle.
- Em dash her paragrafta 1 civarı.
- Üç nokta YASAK.
- Ünlem 0/makale.
- Emoji asla.
- Soru cümlesi her paragrafta max 1.

### Yasak kalıplar (estetik için sıkı)

- "25 yıllık cerrah olarak söylerim ki…" / "Aston gözleminde olarak…" — kibirli otorite + promosyonel referans.
- "Hayatınızı değiştirir" / "Mucize" / "Garanti" / "Kesin çözüm" / "En iyi" — CLAUDE.md §4 yasak.
- "Genç görün" / "Yıllarınızı geri alın" / "Yeniden doğun" / "Sırrı" — wellness-pop pazarlama.
- "Doğal sonuç garantilidir" — kontrol edilemez vaat.
- **"Önce / sonra" anlatımı — MUTLAK YASAK.**
- Marka adı (dolgu / botoks / cihaz / lazer / iplik / krem) gövdede.
- Uluslararası kuruluş adı (ASPS/ISAPS/IPRAS) gövdede — anonim "uluslararası uzman dernekler" yumuşaması.
- Hasta hikayesi anekdot detayı (yaş / yer / tarih / hangi işlem).

### Geçiş kalıpları

- **Karar çerçevesi giriş:** "X işlemini düşünüyorsanız, bilmek isteyebileceğiniz birkaç noktayı paylaşmak isterim."
- **Mekanizma köprü:** "Bu nedenle…" / "Sonuç olarak…"
- **Beklenti yönetimi:** "Beklenen değişim sınırlıdır; gerçekçi olan…"
- **Kişiselleştirme:** "Her yüz farklıdır; aynı işlem her kişide aynı sonucu vermez."
- **Yumuşak inclusive:** "Konsültasyona gelen kadınlarda sıkça…"

---

## §5c · Tıbbi Sınır Uyarısı (Çağrı Sade özel)

- **İşlem reçete dili YASAK.** "Şu marka dolgu / şu mililitre / şu enjeksiyon noktası" → "Cerrahınız size uygun yöntem ve dozu bireysel olarak değerlendirir" tercih.
- **Değerlendirme sürecini bilgi olarak aç.** "Konsültasyonda hekim tipik olarak yüz analizi, tıbbi öykü ve beklenti değerlendirmesi yapar" — bilgi; "şu işleme gidin" emri DEĞİL.
- **Akut komplikasyon eğitimi:** dolgu sonrası vasküler komplikasyon, anestezi reaksiyonu, ciddi hematom → `<RedFlagBox />` ile işaretle. "Beklenmedik durumda hemen iletişime geçilmelidir" yumuşak ama net.
- **Promosyon vitrini YASAK.** Aston gözleminde olmak, Sherrell J. Aston, 25 yıl deneyim — biyografide; gövdede "ben yaptım" tonuna kayma yok.

---

## §13 · Self-check Checklist (15 madde — estetik sıkı)

1. [ ] Estranova editöryal tipografi: `ArticleProsePanel` + `prose-estranova`?
2. [ ] Her H2 sonrası italic lede 1-2 cümle?
3. [ ] `<Evidence level={N} />` her bilimsel iddianın yanında?
4. [ ] Bilimsel Editör Notu (Doç. Dr. Senai Aksoy, gold) sayfa sonunda?
5. [ ] `<ArticleAuthorBlock authorSlug="cagri-sade" />`?
6. [ ] `buildArticleSchemas()` JSON-LD: author "Op. Dr. Çağrı Sade" + medicalReviewer "Doç. Dr. Senai Aksoy"?
7. [ ] FAQ 3-5 konuya özgü soru?
8. [ ] "Size uygun mu" karar çerçevesi açılışta veya ilk H2'de?
9. [ ] 3-bölüm yapısı (tablo → mekanizma → karar zinciri)?
10. [ ] Klinik jargon ilk geçtiği yerde Türkçe karşılığıyla mı verilmiş?
11. [ ] Marka adı (dolgu/botoks/cihaz/lazer/iplik/krem) gövdede YOK mu?
12. [ ] Uluslararası kuruluş adı (ASPS/ISAPS/IPRAS) gövdede YOK mu?
13. [ ] Inline harici URL / markdown link gövdede YOK mu?
14. [ ] **Önce-sonra anlatımı YOK mu? Hasta hikayesi anekdot detayı YOK mu?**
15. [ ] Tedavi/işlem reçete dili YOK ("Cerrahınızla değerlendirin" var)?

---

## §11 · Hızlı operasyonel notlar

- **Yazar imzası:** "Op. Dr. Çağrı Sade" — "Op. Dr." öneki var (cerrah imzası).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).
- **Profil sayfası:** `/yazarlar/cagri-sade` (writers.ts kayıt sonrası dynamic route otomatik).
- **Yayın Kurulu konumu:** "Bilimsel Yazarlar" (`category: 'scientific'`).
- **Tıbbi danışman kartı:** Korunur (yayin-kurulu.astro `medicalAdvisors[2]` — Plastik Cerrahi).
