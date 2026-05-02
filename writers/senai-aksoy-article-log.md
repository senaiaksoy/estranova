# Senai Aksoy — Article Log

> **Article log framework:** [`docs/WRITER-DYNAMICS-FRAMEWORK.md`](../docs/WRITER-DYNAMICS-FRAMEWORK.md)
> **DNA referansı:** [`writers/senai-aksoy/`](./senai-aksoy/) (modüler v1.0)
> **Log başlangıcı:** 2026-05-02

## Schema

| # | Tarih | Konu | Kategori | Yazar v. | Aforizma | Manifesto | Anekdot | Açılış | Başlık tipi | Mevsim | Notlar |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 2026-05-02 | 40 sonrası idrar kaçırma | beden-yakinlik/pelvik-taban | v1.0 | — | Kalıp 1 (Bilgi belirsizliğin panzehiri) + Kalıp 4 (Biz ne yapıyoruz?) | T1 (Hastalarımın çoğu — anonim genelleme) + T2 (Sokakta her on kadından dördü — epidemiyolojik) | "Hastalarımın çok büyük bir kısmı yıllardır söyleyemediği şeyi sonunda söylediğinde..." | Tabu açan dürüst | ilkbahar | İlk yayın (REWRITE — eski MD-based yapıdan modern Astro Senai sesine). Hub editorPick güncellendi (berna→senai). 6 Evidence + 5-katman BEN. Dörtgen direkleri: bilgi-belirsizlik + hekim-hasta diyalogu (max 2). |
| 2 | 2026-05-02 | Vajinal kuruluk / GSM | beden-yakinlik/cinsel-saglik | v1.0 | — | Kalıp 1 (Bilgi belirsizliğin panzehiri) + Kalıp 6 (Haute couture bireyselleştirme) | T1 (Hastalarımın çoğu — anonim genelleme) + T3 (Bir kadın bana 'utanıyorum sormaya' dedi — anonim hekim-hasta) | "Konunun adı bile söylenemiyorsa, çözümü zaten konuşulmaz. Hastalarımın çoğu yıllarca 'yaşlanma işte' deyip geçtiği..." | Yeniden çerçeveleyen | ilkbahar | İlk yayın (REWRITE — Duygu sesinden Senai sesine). cinsel-saglik index tocArticles güncellendi (duygu→senai). 9 Evidence + 5-katman BEN. Dörtgen direkleri: bilgi-belirsizlik + kişiselleştirme (max 2). Lokal vs sistemik HRT netleştirme imzası uygulandı. |
| 3 | 2026-05-02 | NAD+ takviyesi (NMN/NR) — kanıt sınırı | zamansiz-yasam/deneysel | v1.0 | — | Kalıp 1 (Bilgi belirsizliğin panzehiri) + Kalıp 5 (Kapı/yol haritası) | T1 (Hastalarımın bir kısmı son aylarda — anonim genelleme) + T2 (epidemiyolojik yaygınlık) | "Bu konuda kimsenin yazmaması bence asıl sorun değil; kimsenin sınırı dürüstçe söylememesi asıl sorun..." | Yeniden çerçeveleyen + iki bölümlü tireli ("Umut Etiketi vs Kanıt Sınırı") | ilkbahar | REWRITE (Başak → Senai). deneysel/index editorPick güncellendi (basak-pelister → senai-aksoy). 9 Evidence + 5-katman BEN + 6 RedFlagBox + 5 FAQ. **BEN 1. şahıs istisnası uygulandı (Faz 4.3-ek)**: üst geçiş Varyant 3 ("Yazının başında değinmeden geçtiğim birkaç klinik ayrıntıyı, bu kez uzman tarafımdan eklemek istiyorum") — Varyant 1 ve 2 önceki iki makalede kullanıldı, cooldown korundu. Klinik bağlam ben çapası: "kliniğimde de en sık sorulan anti-aging takviyeleri arasına girdi". Pratik bütünleşim ben çapası: "Yıllar içindeki klinik yaklaşımım şu basamakları izler". Dörtgen direkleri: bilgi-belirsizlik + kişiselleştirme (max 2). "Umut etiketi vs kanıt" çerçevesi (Senai imza — yerel lazer/RF paraleli). Profile.yaml: zamansız-yasam category_score 1 → 3 (deneysel takviye kanıt yorumlama imza eksen). Hero entry submenu-heroes.ts'e eklendi. |

## Sütun anahtarı

- **Yazar v.** — yazar profil versiyonu (v1.0 başlangıç)
- **Aforizma** — kullanılan alıntı (kaynak/sayfa); yoksa "—"
- **Manifesto** — kullanılan kalıp; yoksa "—"
- **Anekdot** — anekdot türleri (T1+T2 vb. profile §4b'ye göre); yoksa "—"
- **Açılış** — açılış kalıbı kısa kod
- **Başlık tipi** — `title_style.prefer` listesinden
- **Mevsim** — yazıldığı mevsim (ilkbahar/yaz/sonbahar/kış)
- **Notlar** — özel durum (Test, Retrofit, Evrim review tetik vb.)

## Cooldown durumu (canlı)

> Şu an log boş — cooldown filtresi 2026-05-02 sonrası ilk gerçek yayından itibaren tam çalışacak.

## Evolution review

> Son review: —
> Tetikleyici: 10 makale veya 6 ay (default)

## Retrofit özet (pre-framework yayınlar — 2026-05-02 öncesi)

Senai Aksoy yazar olarak yayınlanmış makale: **YOK**.

Senai mevcut sistemde **tıbbi inceleyici** rolüyle (article-schema.ts default `medicalReviewer = 'Doç. Dr. Senai Aksoy'`) tüm Estranova makalelerinin sonundaki Bilimsel Editör Notu'nda görünüyor; ama **yazar olarak imzalı makale yok**. v1.0 yazar profili 2026-05-02'de oluşturuldu, ilk yazar makalesi bekleniyor.

## Versiyon notları

### v1.0 — yeni profil oluşturuldu (2026-05-02)

**Tetikleyici:** Kullanıcı (Dr. Senai Aksoy) Estranova yazar kadrosunda kendi profilinin oluşturulmasını istedi. Mevcut writers.ts kaydı vardı (yıllar önce eklenmiş — *"Geçici yazar"* yorumu ile *"Doç. Dr. öneki bilinçli düşürüldü, klinik otorite değil 'bilen biri' sesi"*) ama 5 katman profile mimarisi yoktu.

**Web araştırması:**
- senaiaksoy.net, tupbebek.com, draksoyivf.com (biyografik veri)
- tupbebek.com/blog/fiv-basarisizligi-sonrasi-ne-yapmali (yazı tarzı kanıt)
- youtube.com/senaiaksoy (geniş video arşivi — *"200 Menopoz 1"*, *"Yumurta Dondurma"* çalma listesi)
- Vaidam, doctortakvimi, edhacare, medsurgeindia, bulutklinik, LinkedIn (kariyer doğrulama)

**Kullanıcı yönlendirmesi:**
1. **Konum (A):** Bilimsel Editör + Tabu Açan Klinik Yazar — diğer yazarların yaşıt persona'sıyla giremediği mahrem klinik konularda (idrar kaçırma, vajinal estetik, GSM, cinsel ağrı, vb.)
2. **Berna ilişkisi:** Estranova yazarımız Berna Aksoy = Senai'nin eşi (doğrulandı)
3. **Unvan:** *"Doç. Dr."* tıbbi inceleyici imzası için tercih
4. **Çerçeve seçimi (A):** Mevcut writers.ts tasarımını koru (yazar = *"Senai Aksoy"* Dr. öneksiz / tıbbi inceleyici = *"Doç. Dr. Senai Aksoy"* — iki rol bilinçli ayrı)

**Eklenen katmanlar (Gamze v3.2 paritesinde):**

1. `profile.yaml` — `writer_version: v1.0` + `writer_protocol_version: v3.2`; section_index 16 §-ID; topic_sections 28 alan; signature_topics 12 imza alanı; manifesto_templates 6 kalıp havuzu (3 [SA-K] + 3 [SA-T]); clinical_spine 4 direkli felsefe omurgası (Mevlana yerine); category_scores; quick_reference must_not/must_include/conditional; private_context_inject geniş; experience_seeds 12; dynamics cooldown_overrides + havuz boyutları
2. `cold.md` — §0 Korpus (23 alıntı: 16 [SA-K] + 7 [SA-T]); §1 Kısa Tanım; §2a Yayınlanan Biyografi; §2b Geçmiş ve Birikim (kariyer kronolojisi); §3 Karakter Özeti; §5a Yaşam Tarzı; §6/§7/§8 İçerik / Uygun konular (15 tabu) / Uzak duruları; §9 AI Atama Kriteri; §10 Kategori Skorları; §12 Gold-Standard mini makale (~700 kelime, *"40 Sonrası İdrar Kaçırma"* örneği); Changelog v1.0
3. `warm.md` — §4b Manifesto-aligned Anekdot Yönelimi; §4e Manifesto Kalıpları (6 kalıp); §4f Klinik Felsefe Omurgası (Dörtgen — bilgi-belirsizlik / bilim+duygu / kişiselleştirme / hekim-hasta diyalogu)
4. `hot.md` — §0.5 Yürütme Protokolü (12 adım); §4 Yazı Tonu (10 açılış kalıbı); §5c Tıbbi Sınır (Senai özel — kendi muayenehanesi yasağı + Berna eşi + 8 yazar hekimi + Sanem Leyla doğumu); §13 Self-check Checklist (20 madde, 13-17 MUST-PASS)
5. `hidden.md` — §5b Gizli Gözlemler (kendi muayenehanesi yasağı + hasta öyküsü anonimliği + tabu disiplini + lifestyle dergi yasağı + IVF yazılmaz); §5c-ek Çift Rol Uyarısı (Berna eşi + 8 yazarın hekimi + Sanem Leyla doğumu) — KRİTİK + EŞSİZ MİMARİ
6. `README.md` — klasör navigasyon
7. `citations/canonical-sources.md` — Senai'nin yayın kaynakları (tupbebek.com / draksoyivf.com / YouTube / sosyal medya / akademik / dernek üyelikleri) + frekans kuralı + Senai özgün manifesto havuzu
8. `senai-aksoy-article-log.md` — bu dosya (boş — ilk yayın bekleniyor)

**Mevcut writers.ts tasarımı KORUNDU:**
Yazar imzası *"Senai Aksoy"* (Dr. öneksiz, komşu sıcaklığı) / Tıbbi inceleyici imzası *"Doç. Dr. Senai Aksoy"* (article-schema.ts default `medicalReviewer`) — iki rol bilinçli olarak ayrı. writers.ts displayName + role + publicBio + writingStyle alanları korundu.

**Disiplin (HARD CONSTRAINT v1.0):**

1. **Yazar imzası "Senai Aksoy"** Dr. öneksiz; tıbbi inceleyici imzası "Doç. Dr. Senai Aksoy" ayrı blok (iki rol farklı kart)
2. **Çift Rol KRİTİK** — Berna eşi olduğunu yazıya katma YASAK + 8 yazarın muayene odası bilgisi sızdırma YASAK + Sanem Leyla doğumu klinik referansı YASAK
3. **Kendi muayenehanesi pazarlama YASAK** (Lotus Nişantaşı / Acıbadem Fulya / draksoyivf.com / tupbebek.com)
4. **Promosyonel başhekim vitrini gövdede YASAK** (30 yıl / 10.000 doğum / Türkiye'nin ilk ICSI ekibi)
5. **Tedavi reçete dili YASAK** (şu doz şu marka şu sıklık) — bireyselleştirme felsefesiyle çelişir
6. **Spesifik marka YASAK** (HRT / vajinal östrojen / yerel cihaz)
7. **IVF / tüp bebek promosyonel içeriği YASAK** — Senai kariyer odağı IVF, ama Estranova menopoz/40+ ekseninde
8. **Yaşıt yazar pozu YASAK** — Senai 64, erkek, hekim; kategori farklı (tabu açan uzman)
9. **Lokal lazer / RF / PRP konularında "umut etiketi" yasak** — sınırlı kanıt çerçevesi, dürüst yorumlama
10. **Hekim-hasta iletişimi rehberi tercih** — *"Doktorunuza şu üç soruyu sorun"* formatı; kendi muayenehanesi DEĞİL

**Pattern_pool_sizes default değişmedi** (Şablon Kırma Disiplini v2.6 evrensel kuralı uyumlu):
- opening: 10
- closing: 10
- balance_phrase: 10
- not_knowing: 10
- clinician_frame: 10
- anecdote_door: 10
- signature_closing: 6
- humor: 6 (Senai için "humor" değil "hocalık sıcaklığı" — kavramsal eşleştirme)
