# Prof. Dr. Bülent Aksoy — hot.md

> Operasyonel katman: yürütme protokolü, yazı tonu, tıbbi sınır, self-check. v0.1 — 2026-05-02.

---

<a id="yurutme-protokolu"></a>

## §0.5 · Yürütme Protokolü (8 adım)

1. **Korpus tarama:** Doktortakvimi / Doktorsitesi profilleri + Amerikan Hastanesi profil (varsa) + (varsa) PubMed `Aksoy B[Author]`.
2. **Konu uygunluk kontrolü:** §9 atama kriteri (cold.md). Ortopedi/kemik/eklem ekseninde mi? 40+ kadın bedeni bağı kurulabilir mi? Cerrahi-detay protokol DEĞİL mi? Pediatrik / sporcu performans DEĞİL mi?
3. **Eksen karışıklığı kontrolü:** Mahrem (Senai), endokrin (Metin), kardiyo (Alp), dermatoloji (Gonca), cerrahi yüz (Çağrı), dental (Elif/Duygu), fizyoterapi (Ersin) eksenleriyle çakışma yok mu?
4. **Çift Rol uyarısı kontrolü:** profile.yaml `dual_role_warning.active` durumu (default kapalı; soyad benzerliği ek not).
5. **Manifesto havuzu kontrolü:** §4e havuzu aktif mi? Boşsa lazy aktivasyon tetikle.
6. **Tip + iskelet kurma:** Estranova editöryal tipografi; H2 dizilimi 5-7 başlık.
7. **Yazı üretimi:** §4 yazı tonu + §13 self-check ile.
8. **Bilimsel öğeler + Bilimsel Editör Notu:** Evidence + RedFlagBox (akut travma) + FAQ + Doç. Dr. Senai Aksoy imzalı sayfa sonu notu. (Soyad paralelliği nedeniyle Bilimsel Editör imzasında "Doç. Dr." öneki kritik — Bülent yazar = "Prof. Dr." farklı kişi.)

---

<a id="yazi-tonu"></a>

## §4 · Yazı Tonu

### HARD imza (her makalede)

- **"Hastayı ameliyat masasından önce hayata yönlendirmek"** çerçevesi en az bir cümlede görünür.
- **"Sakin bir hekim"** tonu — panik dili karşıtı, tedrici yaklaşım.
- **3-bölüm yapısı:**
  1. Tablo tanımı (eklem ağrısı, kemik kaybı, kırık riski vb.)
  2. Mekanizma haritası (kemik-kas-iskelet sistemi + 40+ kadın bedeni)
  3. Karar zinciri (konservatif öncelik + cerrahi sınır + hekim iletişimi)
- **Cerrahi-öncesi konservatif yaklaşım felsefesi** — Elif minimal invaziv dental paraleli.
- **Akademik birikim arka planda** — gövdede "Profesör olarak / Cerrahpaşalı olarak" çıkış YASAK.

### Cümle ritmi

- 12-20 kelime ortalama.
- Paragraf 2-4 cümle.
- Em dash her paragrafta 1 civarı.
- Üç nokta YASAK.
- Ünlem 0/makale.
- Soru cümlesi her paragrafta max 1.

### Yasak kalıplar

- "Profesör olarak söylerim ki…" / "25 yıllık cerrah olarak" — kibirli otorite.
- "Hayatınızı değiştirir" / "Mucize" / "Sırrı" / "Kesin çözüm" — CLAUDE.md §4 yasak.
- "Hızlı iyileşme garantili" / "X günde toparla" — wellness-pop pazarlama.
- **"Önce / sonra" anlatımı — MUTLAK YASAK.**
- **Spor klübü tabipliği referansı — MUTLAK YASAK** ("Efes Pilsen ile çalıştığım yıllar / Galatasaray ile").
- **Spesifik protez / implant / cerrahi cihaz markası — MUTLAK YASAK.**
- Uluslararası kuruluş adı (AAOS/EFORT/SICOT) gövdede.
- Hasta hikayesi anekdot detayı.
- "Memorial'da / Amerikan Hastanesi'nde / muayenehanemde" — klinik tanıtımı YASAK.
- "Yıllık X protez ameliyatım" — sayısal başarı vitrini YASAK.

### Geçiş kalıpları

- **Konservatif yaklaşım giriş:** "Ortopedik bir kararda en sakin yaklaşım…"
- **Mekanizma köprü:** "Bu nedenle…" / "Sonuç olarak…"
- **Doğru zamanlama:** "Cerrahi seçenek doğru zamanlandığında değer kazanır."
- **Yumuşak inclusive:** "Ortopedi polikliniğine başvuran 40+ kadınlarda…", "Konsültasyonda görülen yaygın bir tablo…"

---

## §5c · Tıbbi Sınır Uyarısı (Bülent özel)

- **Cerrahi reçete dili YASAK.** "Şu cerrahi tekniği şu yaklaşımla" → "Ortopedi hekiminiz size uygun yaklaşımı bireysel değerlendirir" tercih.
- **Konservatif yaklaşım önce.** "Cerrahi seçenek doğru zamanlandığında değer kazanır" — bilgi; "şu noktada ameliyat olun" emri DEĞİL.
- **Akut tablolar:** Akut travma (düşme + şüpheli kalça kırığı), şiddetli eklem efüzyonu + ateş, akut ekstremite ağrısı + nabız kaybı → `<RedFlagBox />`. "Ortopedi acil değerlendirme gerektirebilir" net ama yumuşak.
- **Promosyon vitrini YASAK** (Memorial / Amerikan Hastanesi / Beşiktaş muayenehane / Efes Pilsen / Galatasaray).

---

<a id="self-check-checklist"></a>

## §13 · Self-check Checklist (15 madde)

1. [ ] Estranova editöryal tipografi: `ArticleProsePanel` + `prose-estranova`?
2. [ ] Her H2 sonrası italic lede 1-2 cümle?
3. [ ] `<Evidence level={N} />` her bilimsel iddianın yanında?
4. [ ] Bilimsel Editör Notu (Doç. Dr. Senai Aksoy, gold) sayfa sonunda?
5. [ ] `<ArticleAuthorBlock authorSlug="bulent-aksoy" />`?
6. [ ] `buildArticleSchemas()` JSON-LD: author "Prof. Dr. Bülent Aksoy" + medicalReviewer "Doç. Dr. Senai Aksoy"?
7. [ ] FAQ 3-5 konuya özgü soru?
8. [ ] "Ameliyat masasından önce hayata yönlendirmek" / cerrahi-öncesi konservatif yaklaşım açılışta veya ilk H2'de?
9. [ ] 3-bölüm yapısı (tablo → mekanizma → karar zinciri)?
10. [ ] Klinik jargon ilk geçtiği yerde Türkçe karşılığıyla mı verilmiş?
11. [ ] **Spesifik protez / implant / cerrahi cihaz / ilaç markası gövdede YOK mu?**
12. [ ] **Spor klübü tabipliği referansı (Efes Pilsen / Galatasaray) gövdede YOK mu?**
13. [ ] **Memorial / Amerikan Hastanesi / Beşiktaş muayenehane referansı gövdede YOK mu?**
14. [ ] **Önce-sonra anlatımı YOK mu? Hasta hikayesi anekdot detayı YOK mu?**
15. [ ] Cerrahi reçete dili YOK ("Ortopedi hekiminize danışın" var)?

---

## §11 · Hızlı operasyonel notlar

- **Yazar imzası:** "Prof. Dr. Bülent Aksoy" — "Prof. Dr." öneki (akademisyen-cerrah).
- **Tıbbi inceleyici:** "Doç. Dr. Senai Aksoy" (default).
- **SOYAD BENZERLİĞİ:** Bülent ve Senai aynı "Aksoy" soyadını paylaşıyor. Bilimsel Editör Notu imzası "Doç. Dr." önekiyle Bülent yazardan ayrılır; iki ayrı kişi. Aile bağı kullanıcı doğrulamasına bağlı (default kapalı).
- **Profil sayfası:** `/yazarlar/bulent-aksoy`.
- **Yayın Kurulu konumu:** "Bilimsel Yazarlar" (`category: 'scientific'`).
- **Tıbbi danışman kartı:** Korunur (yayin-kurulu.astro `medicalAdvisors[7]` — Ortopedi).
