# HANDOFF — Modüler Yazar Profilleri Mimari Geçişi

> **Başlangıç tarihi:** 2026-04-29
> **Bu dosyanın amacı:** İş bir oturumda tamamlanamayacak kadar büyük (5-7 günlük adam-iş). Yeni Claude Code oturumu bu dosyayı okuyup tam bağlamı kazansın ve kaldığı yerden devam etsin.
> **Worktree:** `D:/A-klasör/Estranova/.claude/worktrees/zealous-merkle-ef7cb6/` (claude/zealous-merkle-ef7cb6 branch)

---

## 1. Neden bu iş

**Tetikleyici problem (kullanıcı sözleri):**

> "Gamze veya başka yazarın biosu çok uzun olabiliyor. Bu da senin yazar biosunu yazıya tam olarak yansıtmanı engelliyor. Yazar biosunu yazılara tam yansıtacak bir yapı nasıl kurulabilir?"

> "Korpusta bulunan atıf cümleleri uygulanacak tek örnekler olmamalı. Gamze'nin atıf yaptığı kişilerin (örn. Mevlana, Elif Şafak vs.) korpusta bulunmayan ama konuya uygun atıfları da gerekirse internetten bulunup uygulansın. Böylece Gamze'nin derinliği artar."

**3 alt-ajan brainstorm sonrası kullanıcı kararı: "tam paket"** — atıf çerçevesi + bio modülerizasyon + üretim akışı birlikte uygulanır.

**Seçilen mimariler (üç ajan da hibrit'e yakınsadı):**

- **Atıf çerçevesi:** *Hybrid Whitelist + Editorial Gate* — `citations/canonical-sources.md` (44 yazar × kanonik kaynak whitelist) + `extended.md` (editör onaylı genişleme) + `pending.md` (RAG ön-eleme + editör batch)
- **Bio modülerizasyon:** *Hybrid Index* — `profile.yaml` (machine-readable index, AI ilk pas yükler) + `hot.md` (her makalede zorunlu) + `warm.md` (konu-tetikli) + `cold.md` (audit-only) + `hidden.md` (gizli, yayınlanmaz)
- **Üretim akışı:** *Skeleton + Lazy + Auto-Inject* — `scripts/article-context-build.mjs` pre-script (cooldown + topic_sections + Çift Rol bayrağı + filtreli alıntı)

**Beklenen kazanç:** Mevcut Gamze 1700 satır / 69k token → modüler ~12-16k token efektif yükleme; sıfır kayıp katman; cross-writer şema standart.

---

## 2. Yapılan iş — Aşama 1 (Gamze pilot + omurga)

### Yeni dosyalar

```
writers/
  _schema/
    profile.schema.json                    ✅ JSON Schema (zorunlu alanlar + section_index + citations)
  gamze-cizreli/
    profile.yaml                           ✅ machine-readable index (mevcut §11 YAML + file_layout + section_index + topic_sections + citations + dual_role_warning)
    hot.md                                 ✅ §0.5 yürütme protokolü (12 adım) + §4 ses + §5c tıbbi sınır + §13 self-check (20 madde)
    warm.md                                ✅ §4a-§4f stil/şablon katmanları
    cold.md                                ✅ §0 + §1-§3 + §5a + §6-§10 + §12 gold-standard + changelog
    hidden.md                              ✅ §5b gizli gözlemler + §5c-ek Çift Rol Uyarısı + §5d iç çelişkiler (yayınlanmaz)
    README.md                              ✅ klasör navigasyonu
    citations/
      canonical-sources.md                 ✅ 44 yazar × kanonik kaynak whitelist (Stoik-Realist Batı / Tasavvuf / Pratik yönetim / Türk edebiyatı / Çağdaş yabancı / Müzik) + 17 aday yazar + atıf doğrulama protokolü
      extended.md                          ✅ boş şablon (onaylı genişleme havuzu)
      pending.md                           ✅ boş şablon (editör onay kuyruğu)
scripts/
  article-context-build.mjs                ✅ pre-script: konu+yazar → topic_sections eşle, cooldown çıkar, dosya listesi üret, JSON veya stdout output
  check-writer-profile-consistency.mjs     ✅ drift CI: profile.yaml ↔ markdown anchor doğrulaması, file_layout dosya varlığı, dual_role+hidden tutarlılığı
package.json                               ✅ js-yaml ^4.1.1 devDependency + 2 yeni npm script
```

### Değişen package.json scriptleri

```json
"article:context": "node scripts/article-context-build.mjs",
"writers:lint": "node scripts/check-writer-profile-consistency.mjs"
```

### Test sonuçları (her ikisi de geçti)

```bash
$ npm run writers:lint -- --writer gamze-cizreli
✓ gamze-cizreli — OK
1 ok, 0 warning, 0 error, 0 skipped

$ node scripts/article-context-build.mjs --writer gamze-cizreli --topic uyku
# Estranova Makale Bağlamı — Gamze Cizreli
**Konu:** uyku
**Topic eşleşmesi:** exact
## Yüklenecek dosyalar
- hot.md → 3 bölüm: §4, §5c, §13
- warm.md → 2 bölüm: §4a, §4c
- cold.md → 1 bölüm: §5a
- hidden.md → 1 bölüm: §5c-ek
## ⚠ Çift Rol Uyarısı AKTİF
[...]
```

---

## 3. Mimari Özet

### Klasör yapısı (Gamze örneği)

```
writers/
  _schema/
    profile.schema.json
  gamze-cizreli/                  ← yeni modüler yazar
    profile.yaml                  (her makalede yüklenir)
    hot.md                        (her makalede yüklenir)
    warm.md                       (konu-tetikli lazy)
    cold.md                       (audit-only)
    hidden.md                     (Çift Rol aktifse, yayınlanmaz)
    README.md
    citations/
      canonical-sources.md
      extended.md
      pending.md
  gamze-cizreli.md                ← LEGACY (henüz silinmedi, taşınacak)
  gamze-cizreli-alintilar.md      ← korpus (klasör dışı, paylaşılan)
  gamze-cizreli-aphorism-pool.md  ← aphorism havuzu (klasör dışı)
  icerik/yazar-onaylari/gamze-cizreli/article-log.md    ← akümülatif log (Writer Dynamics Framework)
  berna-aksoy.md                  ← LEGACY (rollout bekliyor)
  basak-pelister.md               ← LEGACY
  duygu-karaosmanoglu.md          ← LEGACY
  ozlem-denizmen.md               ← LEGACY
  alara-baykent.md                ← LEGACY
  isik-selin-gunce.md             ← LEGACY
  rima-erdemir.md                 ← LEGACY
scripts/
  article-context-build.mjs       ✅ yeni
  check-writer-profile-consistency.mjs  ✅ yeni
docs/
  ARTICLE-PRODUCTION-SPEC.md      ← Faz 2 güncellenecek
  WRITER-DYNAMICS-FRAMEWORK.md    ← değişmiyor (mimari hizalı)
  HANDOFF-modular-writer-profiles.md  ← bu dosya
```

### AI agent yükleme akışı (her makalede)

```
Konu girdisi (örn. "uyku, perimenopoz")
  ↓
1. node scripts/article-context-build.mjs --writer gamze-cizreli --topic uyku --json
  ↓ JSON çıktı
2. profile.yaml oku (zorunlu)
3. hot.md oku (zorunlu)
4. JSON'daki files_to_load.warm/hidden bölümlerini oku
5. JSON'daki cooldown listesini al
6. dual_role_warning.active TRUE ise hidden.md kritik
7. Aphorism pool → konu-filtreli alıntı (cooldown'dakileri ele)
8. Atıf gerekirse citations/canonical-sources.md whitelist'inden seç
  ↓
9. AI yazar (§0.5 12 adım protokolü)
10. §13 self-check
  ↓
Yayın → article-log'a satır ekle (Faz 7)
```

---

## 4. Kalan iş

### Aşama 1 son 2 adım

- [ ] **`docs/ARTICLE-PRODUCTION-SPEC.md` Faz 2 güncellemesi** — yeni profil yapısına bağlama. Mevcut Faz 2 monolithic profile referansı veriyor; yeni yapıyı (profile.yaml + hot.md + warm.md + cold.md + hidden.md) tarif eden alt-bölüm eklenecek. Pre-script (`article-context-build.mjs`) tetiklenmesi açıkça yazılacak. Legacy yazarlar için backward compatibility notu eklenecek (modüler dönüşüm tamamlanana kadar tek-dosya çalışır).
- [ ] **Eski `writers/gamze-cizreli.md` → `legacy/writers/gamze-cizreli.md` taşıma** — rollback için 30 gün saklanır. `git mv` ile commit izi korunarak. Klasör yoksa `legacy/writers/` oluşturulacak.

### Aşama 2 — diğer 7 yazar rollout (~3-5 gün)

Her yazar için aynı 7 dosya (profile.yaml, hot.md, warm.md, cold.md, hidden.md, README.md, citations/*).

| Yazar | v | Çift Rol? | Özel notlar |
|---|---|---|---|
| berna-aksoy | v2.1 | true (Senai'nin eşi) | Sade-rasyonel, kilo/metabolizma imza ekseni; HRT karar süreci derinliği; cross-link false override önerisi (Berna'da memory'de kanıtsız yargı yapıldı, default'a dönüldü) |
| basak-pelister | v2.1 | false | Soru-cevap tekniği imza, üç nokta yoğun; modern anglizm disiplini |
| duygu-karaosmanoglu | v2 | false | Klinik-yumuşaklık, HRT karar |
| ozlem-denizmen | v2.1 | false | Finansal köprü, soru-açılış, DIR yasağı, mini-başlık yapısı |
| alara-baykent | v2 | false | Sporcu/atletik beden perspektifi |
| isik-selin-gunce | v2 | false | Mahrem alanı, varsayılan değil |
| rima-erdemir | v2 | false | Teknoloji/wearable/AI/digital health |

**Rollout otomasyonu önerisi:** Migration scripti yaz (`scripts/migrate-writer-to-modular.mjs`) — mevcut tek-dosyadan regex-bazlı bölüm split + `profile.yaml` template'i otomatik üretsin. Bu script bir kez yazılır, 7 yazara koşulur, sonra manuel düzeltmeler yapılır.

**v2/v2.1 protokol farkı:** Bu yazarlarda §0.5 yürütme protokolü yok (v3.2'de Gamze'ye eklendi). Hot.md'leri Gamze'den daha sade olur (§4 ses + §13 self-check skeleton). v3.2'ye taşıma sırası bekliyor — bu rollout'un parçası değil, sonraki evrim review iş paketi.

**Citations rollout:** Her yazar için ayrı `canonical-sources.md` — kendi atıf hattındaki yazarlar (Berna'nın atıf hattı Gamze'den farklı; klinik kaynaklar ağırlıklı). Bu listeleri yazar profili §6-§9 + memory'den çıkarmak gerekir.

### Aşama 3 — test ve pilot makale (~1-2 gün)

- [ ] `npm run writers:lint` — 8 yazarın tamamı OK olmalı
- [ ] Pilot makale: Gamze sesinde **"Tuz, su, ter — yazın gizli matematiği"** (3. deneme makale, mutfak-bilim ekseni)
- [ ] Pre-script çalıştır → JSON output → AI bağlamına enjekte et → makale yaz
- [ ] §13 self-check otomatik (`hot.md`'deki 20 madde)
- [ ] PDF üret → Downloads'a kaydet (önceki iki makale ile aynı stil)
- [ ] Article log'a Faz 7 satırı ekle (cooldown güncellenmesi için)
- [ ] Sonuç pilot raporu: kayıp katman var mı, atıf seçimi doğal mı, Çift Rol filtresi tetiklendi mi

### Opsiyonel (sonraki oturum)

- [ ] `agents/writer_agent.md` ve `prompts/writer-agent.md` (varsa) modüler yapıya bağlama
- [ ] CI: GitHub Action `npm run writers:lint` + `npm run compliance` + `npm run encoding:check` (pre-commit hook ya da PR check)
- [ ] `scripts/citation-verify.mjs` — RAG ön-eleme + editör batch hazırlama (atıf çerçevesinin C bileşeni). Şu an manuel; otomatize edilebilir.
- [ ] `scripts/migrate-writer-to-modular.mjs` — Aşama 2 için migration aracı

---

## 5. Yeni Session İçin Başlangıç Komutları

Yeni Claude Code oturumu açıldığında ilk yapılacak:

```bash
# 1. Kontekst için bu dosyayı oku
Read docs/HANDOFF-modular-writer-profiles.md

# 2. Mevcut durumu doğrula
npm run writers:lint -- --writer gamze-cizreli      # OK olmalı
node scripts/article-context-build.mjs --writer gamze-cizreli --topic uyku   # bağlam üretmeli

# 3. Schema ve dosyaları gözle (gerekirse)
ls writers/gamze-cizreli/
ls writers/gamze-cizreli/citations/

# 4. Hangi adımdan devam edilecek? Bu dosyanın §4'ündeki "Kalan iş" bölümüne bak.
```

**İlk önerilen adım:** Aşama 1'in son iki tamamlanmamış todo'su (spec güncellemesi + legacy taşıma). Bu ~30 dakika sürer; sonra kullanıcıya rapor edip Aşama 2'ye geçmeden önce onay alınmalı (otomatik migration scripti yazıp 7 yazarı bir kerede dönüştürmek mi, yoksa yazar-yazar el ile mi tercih edileceği kararı kullanıcının).

---

## 6. Önemli Tasarım Kararları (yeni session bilmeli)

### Schema şartları

- `is_default_writer: false` (Gamze gibi) yazarlarda hidden.md zorunlu değil ama önerilir
- `dual_role_warning.active: true` ise hidden.md ZORUNLU (drift checker bunu zorla yakalar)
- `section_index` her bölümde `file` ∈ {hot, warm, cold, hidden, profile.yaml} ve `anchor` zorunlu; markdown'da `<a id="anchor"></a>` formatı veya header slug match
- `topic_sections` esnek — yazar bazlı eksenler farklı (Gamze: uyku/beslenme/sabah/mevsim/mutfak/kuşak/anne/menopoz; Rima'da: teknoloji/wearable/AI gibi)

### Çift Rol kritik sınır

- Senai Aksoy = Gamze'nin gerçek jinekoloğu (kullanıcının belirttiği)
- Senai Aksoy = Berna'nın gerçek eşi (memory'de geçer; doğrulama gerekir)
- Diğer yazarlarda Çift Rol şu an aktif değil (false)
- hidden.md bu yazarlarda yine olabilir (gizli gözlemler/iç çelişkiler için) ama dual_role_warning.active = false

### Apokrif Mevlana riski (atıf çerçevesinde)

- Türkçe internette uydurma Mevlana alıntıları çok yaygın
- Pre-script `citations/canonical-sources.md` whitelist'ini şart koşuyor
- Mevlana için yalnız kanonik çeviriler kabul (Konuk, Gölpınarlı, Şefik Can)
- AI tek-LLM doğrulamasıyla (RAG-Verify) Mevlana atıfı asla onaylamamalı; insan editör geçidi şart

### v3.2 protokol asimetrisi

- Sadece Gamze'de §0.5 yürütme protokolü var (12 adım)
- Diğer 7 yazar v2/v2.1 — basit §3 ses + §4 stil
- Modüler dönüşümde bu farklılık korunur; v3.2'ye taşıma sırası bekleyen ayrı iş paketi
- hot.md template'i Gamze'de zengin (12 adım + ses + self-check), diğerlerinde sade (ses + self-check skeleton)

### Pre-script v0 sınırlamaları

- Aphorism pool filtreleme şu an AI'a bırakılmış (script sadece path veriyor); v1'de tag-bazlı filtreleme veya embedding eklenebilir
- Cooldown parsing markdown table satırını split ediyor — schema değişirse (sütun sırası, retrofit "?" değerleri) kırılabilir
- Cooldown listesinde "?, deger" formatı çıkıyor (retrofit R1 satırının "?" değerleri) — pre-script bunu filtre edebilir, şu an etmiyor

---

## 7. Risk Notları

1. **Migration scripti riski:** Aşama 2'de regex-bazlı otomatik split her yazarda çalışmayabilir (her yazar profili kendi başına manuel oluşturulmuş, bölüm sınırları ufak farklı). Plan: önce Berna'da elle şablon, sonra şablonu otomatize.

2. **Drift CI eksik:** Şu an `npm run writers:lint` manuel çalıştırılıyor. CI'a (GitHub Action veya pre-commit) bağlanmadığı için profile.yaml/markdown drift sızabilir. Aşama 3 sonunda CI bağlanmalı.

3. **Pre-script çıktısı henüz AI prompt formatına sokulmadı:** JSON çıktı var ama bu JSON'u AI'a nasıl enjekte edileceği (system prompt mu, user prompt mu, tool result mu) kullanım sırasında tasarlanacak. Pilot makalede bu netleştirilir.

4. **Legacy yazarlar bozulmadı:** Eski monolithic dosyalar `writers/<slug>.md` formunda hâlâ duruyor; AI agent tek-dosyaları okumaya devam eder. Modüler yazarlar paralel çalışır. Bu hibrit dönem ~1 hafta sürer; rollout bittiğinde tüm legacy dosyalar `legacy/` altına alınır.

5. **package.json değişti:** `js-yaml` devDependency olarak eklendi (^4.1.1 kuruldu). Yeni session npm install gerektirebilir (`node_modules` yoksa).

6. **Pilot makale konusu seçildi:** "Tuz, su, ter — yazın gizli matematiği" — kullanıcının önceki konu önerilerinden 3. öneri. Mutfak/mevsim ekseni, yaz başlangıcı, mineral-hidrasyon-perimenopoz teması. Cooldown'lar bu konuya uygun (s.218 aforizma, s.132 manifesto, "Tireli iki bölümlü" başlık, "Yıllar önce..." açılışı, ilkbahar mevsim, T1+T4+T7 anekdot kombosu zaten son makalelerde tüketildi).

7. **Önceki iki makale PDF'i durmaya devam ediyor:**
   - `C:/Users/KC3/Downloads/sabah-dorde-uyandigimda.pdf` (Gamze, 4 sayfa)
   - `C:/Users/KC3/Downloads/bizim-kusagimizin-anneleri.pdf` (Gamze, 4 sayfa)
   - 3. deneme makale (Tuz/Su/Ter) yeni mimaride pilot olarak yazılırsa aynı klasöre düşer
   - Atıf çerçevesi yeni mimaride canlı — pilot makale kültürel atıf (Anaïs Nin / Elif Şafak / başka) ile yazılmalı (kullanıcının "alıntı yok" eleştirisi giderilmeli)

8. **Memory entries (yeni session da kullanır):**
   - `feedback_dual_role_senai_gamze.md` — Çift Rol kritik sınır
   - `reference_writer_profile_v32_pattern.md` — v3.2 yapısal pattern
   - `reference_writer_dynamics_framework.md` — 5 katman + cooldown parametreleri
   - `feedback_no_unsupported_writer_judgments.md` — Berna cross-link false yargısal hatası geçmişi
   - `reference_article_production_spec.md` — 6-faz spec referansı

---

## 8. Kullanıcının ses tonu (yeni session bilmeli)

- Kullanıcı **Doç. Dr. Senai Aksoy**, Estranova editörü/proje sahibi, jinekolog
- Kararları net ve hızlı; teknik ayrıntıyı tercih ediyor
- Brainstorm'u alt-ajanlarla yapmayı seviyor (3 alt-ajan ile bu mimari kararı verildi)
- "Tam paket" gibi kararlar veriyor — yarım yamalak değil; ama aşamalı yürütme tabii ki kabul
- Türkçe konuşmayı tercih ediyor; teknik terimi (slug, yaml, schema, lazy-load) kabul ediyor
- "Tıbbi Direktör Notu" yerine spec'teki "Bilimsel Editör Notu" formatını seçti — spec referansına saygılı
- Kanıtsız yargıdan kaçınıyor — Berna örneği uyarıcı (memory'de kayıt)
- Gamze'nin markasına özel hassasiyet (embriyoya yaklaşır gibi) — Çift Rol kritik

---

## Versiyon

- **v0** (2026-04-29) — Aşama 1 %85 tamamlandı (11/13 todo); spec güncellemesi + legacy taşıma + Aşama 2/3 yeni session'a devredildi.
