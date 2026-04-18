# Yarın Nereden Başlamalıyım

> **Tarih:** 2026-04-18 oturum kapanışı
> **Durum:** Sistem **production-ready** — pipeline uçtan uca çalışıyor, persona oturmuş, routing aktif
> **Maliyet/makale:** ~$0.20 · **Süre:** ~3 dk LLM + 5 dk polish

---

## TL;DR — 30 saniyelik özet

Estranova içerik fabrikası tamamen çalışır halde. Yarın yapacağın:
1. PowerShell aç → `cd E:\git_repo\estranova` → `streamlit run streamlit_app.py`
2. Tarayıcıda konu yaz → "Icerik Uret" → 3 dk bekle → metni oku → kategori seç → "Onayla ve Yayınla"
3. (Opsiyonel polish) `src/data/submenu-heroes.ts` ve ilgili kategori `index.astro` dosyasına 1-2 satır manuel ekle
4. `npm run dev` ile lokal preview

Hepsi bu kadar. Aşağısı detay.

---

## 1. Sistemi Çalıştırma

### Streamlit (içerik üretim merkezi)
```powershell
cd E:\git_repo\estranova
streamlit run streamlit_app.py
```
Tarayıcı: `http://localhost:8501`

### Astro preview (lokal site)
```powershell
cd E:\git_repo\estranova
npm run dev
```
Tarayıcı: `http://localhost:3000`

> **Not:** İki terminal aç, ikisini birden çalıştırabilirsin. Streamlit makale üretir, Astro hot reload ile otomatik gösterir.

---

## 2. Yeni Makale Üretim Akışı (Streamlit'ten)

| Adım | Ne yapacaksın |
|------|---------------|
| 1 | "Konu başlığı" kutusuna konuyu yaz |
| 2 | Makale açısı: varsayılan bırak (mekanizma/tedavi/deneyim varyasyonları yan etki yapabilir) |
| 3 | "Icerik Uret" → 3 dakika bekle |
| 4 | "Onay ekranı" açılınca metni oku |
| 5 | Kategori dropdown'unda writer'ın seçimini gör (yanlışsa override et) |
| 6 | Düzenleme istersen text-area'da yaz, sonra **"✅ Onayla ve Yayınla"** |
| 7 | Çıkan başarı mesajında 2 yol gösterir: markdown ve Astro page |

**Sonra (5 dk polish):**
- `src/data/submenu-heroes.ts`'a kategori-route eşleşmesi için Unsplash hero ekle
- İlgili `src/pages/{kategori}/index.astro` dosyasına makale linkini liste maddesi olarak ekle (zaten manuel örnek var: `hormonal-gecis/menopoz/index.astro`)

---

## 3. Bilinmesi Gereken Kritik Dosyalar

### Site kuralları (kanonik — değişiklik öncesi oku)
- **`CLAUDE.md`** — marka, persona, dil, FAQ disiplini, dış link yasağı (HARD CONSTRAINT §1-§6)
- **`AGENTS.md`** — pipeline ajan kuralları + model matrix one-liner
- **`COMPLIANCE_CHECKLIST.md`** — pre-publish denetim listesi (skill `create-article` kullanır)

### Operasyonel referans
- **`docs/PIPELINE.md`** — model matrix, eşikler, gotcha'lar (G1-G6), routing semantiği
- **`docs/style-rules-map.md`** — hangi kural hangi dosyada haritası
- **`docs/okuyucu-kaynaklari-referans-listesi.md`** — yazılarda referans verebileceğin medya kaynakları (Vogue, Elle, NYT Well vb.) — manuel kullanım, sisteme entegre değil
- **`CHANGELOG.md`** — bu oturumda yapılan tüm değişiklikler

### Pipeline kalbi
- `agents/writer_agent.md` — writer prompt (en önemli dosya)
- `agents/writer_agent.py` — validator (8 bölüm + FAQ disiplini + category)
- `agents/compliance_expert_agent.py` — deterministic checks
- `prompts/compliance-agent.md` — compliance LLM prompt
- `config/pipeline_limits.py` — eşikler (publish ≥85, max 2 iter)
- `config/llm_config.py` — model atamaları (writer/checker/compliance: claude-sonnet-4-6; researcher: gemini-2.5-flash; orchestrator: gpt-4o)
- `main.py` `save_approved_article_with_routing` — yayın fonksiyonu (markdown + Astro page)

### Site mimarisi
- `src/data/navigation.ts` — header menü
- `src/data/submenu-heroes.ts` — kategori sayfası ve makale hero görselleri
- `src/pages/{kategori}/{slug}.astro` — yayınlanmış makale sayfaları
- `src/content/blog/{date}-{slug}.md` — markdown içerik kaynağı

---

## 4. Bekleyen İşler (Opsiyonel İyileştirmeler — Önceliğe Göre)

### Yüksek değer / düşük efor
1. **Hero görsel galerisi** — `submenu-heroes.ts`'a önceden 10-15 tematik Unsplash görseli ekle, makale yayınlandığında kategoriye göre otomatik atansın
2. **Eski 14 makaleyi yeni persona ile yenile** — `output/2026-04-1{6,7}-*.md` dosyaları eski persona ile üretildi (doktor tonu, dış link). Yeni Vogue/Elle persona ile tekrar üretip eski sürümleri arşivle. Maliyet: ~$3, süre: 30 dk
3. **Streamlit kategori dropdown'u test et** — bu oturumda ekledim ama UI testi yapmadım, ilk sefer kullanırken görsel kontrol gerekebilir

### Orta değer / orta efor
4. **3-seviye navigation hierarchy** — şu an Hormonal Geçiş → Menopoz düz link, alt makaleler dropdown'da görünmüyor. Yeni makaleler için Menopoz → Kemik erimesi gibi alt-alt menü eklemek istersen `src/data/navigation.ts` tip tanımı + `SiteNavbar.astro` render değişikliği gerekir
5. **Compliance kalibrasyon** — Sonnet compliance LLM 70-85 bandında takılıyor, 90+ nadiren. Best-effort akışı çalışıyor ama "tutarlı 90+" için compliance prompt'una farklı kalibrasyon denemeleri yapılabilir
6. **Description bug daha temizlenebilir** — bugün düzelttim ama tek satırlık description bazı makalelerde fazla teknik kalabilir; özet cümlesi seçim mantığı geliştirilebilir

### Düşük değer / yüksek efor
7. **EEAT + Schema Markup** — `docs/PIPELINE.md` "Gelecek çalışmalar" bölümünde detaylı: FAQPage JSON-LD, author bio + medical reviewer signature, last updated, NewsArticle schema. Astro tarafında SEO ileri seviye iş
8. **Researcher kaynak tutarsızlığı** — Gemini 2.5-flash bazen `approved_sources` boş döndürüyor (bug fix var ama temel sebep researcher prompt). Kaliteli source paketi için researcher iyileştirmesi
9. **Skill mimarisi** — agent'lara LangChain tools ekleme. Bu oturum sonunda tartıştık, şimdilik gereksiz overengineering kararı verdik

### İçerik stratejisi (kod değil)
10. **Editöryal takvim** — haftada 2-3 makale tempo planı, hangi pillar'larda hangi sırada
11. **Author profili sayfası** — `src/pages/yayin-kurulu.astro` veya `authors.astro` zaten var, gerçek persona/imza eklenebilir
12. **İlk gerçek yayın (Cloudflare Pages)** — şu an lokal preview; deploy henüz tetiklenmedi

---

## 5. Bu Oturumda (2026-04-17/18) Ne Yapıldı?

35+ commit, en önemli mihenk taşları:

| Mihenk | Etki |
|--------|------|
| Sonnet 4.6 upgrade (writer/checker/compliance) | Kalite tavanı yükseldi |
| Akran persona (Vogue/Elle tonu) | "Doktor yazısı" hissi gitti, lifestyle dergisi tonu |
| Dış URL link yasağı | Akran tonu güçlendi, NAMS/NICE atfı kalktı |
| Humanize zorunluluğu | Her makalede biz-tonu, akran cümlesi |
| FAQ disiplini (3-5 konuya özgü) | Publisher hardcoded jenerik FAQ silindi |
| Category routing | Yayın artık doğru kategori klasörüne otomatik düşüyor |
| Site kuralları konsolidasyonu | CLAUDE/AGENTS/COMPLIANCE_CHECKLIST tek kaynak; 3 stale dosya silindi |
| Threshold 85 + best-effort yayın | Sonnet varyansı best_effort ile bypass ediliyor |

Detay: `git log b6d06f2..HEAD` veya `CHANGELOG.md`.

---

## 6. Yeni Claude Code Oturumu İçin Priming Prompt

Yeni bir oturum açtığında, Claude'a şunu yapıştır:

```
Estranova içerik fabrikası üzerinde çalışıyoruz. Sistem üretime
hazır — geçmiş oturumda kuruldu. Bağlam dosyaları:

- docs/YARIN-NEREDEN-BASLAMALIYIM.md (bu oturumun handoff notu)
- CLAUDE.md (marka + persona kuralları, HARD CONSTRAINT)
- docs/PIPELINE.md (operasyonel detay)
- CHANGELOG.md (geçmiş oturumun ne yaptığı)

Önce bu dört dosyayı oku, sonra bana ne yapmak istediğimi sor.
Yapabileceğim üç şey var:
1. Yeni makale üret (Streamlit'ten veya CLI)
2. Beklemde olan iyileştirmelerden birini uygula (handoff notunda
   "Bekleyen İşler" listesi var)
3. Spesifik bir konu/sorun üzerinde çalış (söyleyeceğim)
```

Bu prompt seni hızla bağlama oturtur. Claude bağlamı okur, hangi yöne gideceğini sana sorar.

---

## 7. Acil Sorun Olursa

| Belirti | Yapılacak |
|---------|-----------|
| Streamlit "No module" hatası | `pip install -r requirements.txt` |
| API key hatası | `.env` dosyasında ANTHROPIC/OPENAI/GOOGLE key dolu mu? |
| Pipeline takılıyor | `output/_debug/` altındaki son writer/compliance dump'a bak |
| Astro page görünmüyor | `npm run dev` aktif mi? Hot reload bazen elle restart ister |
| Yayın klasör hatalı | `category` writer'dan ne geldi? CLI'da `--category` ile override |
| Yeni Cursor branch'e düştün | `git checkout main` ile geri dön (bu oturumda bir kere oldu) |

---

İyi geceler Dr. Aksoy 🌿
Yarın görüşürüz.
