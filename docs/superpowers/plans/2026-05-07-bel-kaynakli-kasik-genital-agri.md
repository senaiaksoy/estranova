# Bel Kaynaklı Kasık ve Genital Ağrı Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ersin Saraç için yeni makaleyi canlı rotaya almadan, Estranova'nın yazar onay kapısına uygun biçimde onay bekleyen paket olarak hazırlamak.

**Architecture:** Makale, yayın hazır Astro kaynak dosyası olarak paket içine yazılacak; aynı pakette yazarın tarayıcıdan okuyabileceği bağımsız HTML önizleme, 5 dakikalık karar formu ve `meta.json` bulunacak. Canlı `src/pages`, RSS ve manifest yüzeyleri bu aşamada dokunulmadan kalacak.

**Tech Stack:** Astro bileşen sözleşmesi, statik HTML, JSON meta dosyası, iç editoryal klasör yapısı.

---

### Task 1: Plan ve paket iskeletini oluştur

**Files:**
- Create: `docs/superpowers/plans/2026-05-07-bel-kaynakli-kasik-genital-agri.md`
- Create: `icerik/yazar-onaylari/ersin-sarac/onay-bekleyen/2026-05-07_belden-gelen-agri-kasik-genital-bolge/meta.json`

- [ ] **Step 1: Plan dosyasını ekle**

Bu dosyayı yukarıdaki başlık ve görev yapısıyla kaydet.

- [ ] **Step 2: Paket meta iskeletini yaz**

```json
{
  "writer": {
    "slug": "ersin-sarac",
    "name": "Fzt. Ersin Saraç"
  },
  "article": {
    "slug": "belden-gelen-agri-kasik-genital-bolge",
    "title": "Belden Gelen Ağrı Her Zaman Belde Kalmaz: Kasık ve Genital Bölgeye Vuran Ağrıyı Nasıl Okumalı?",
    "previewUrl": "./makale-onizleme.html"
  },
  "package": {
    "createdAt": "2026-05-07T09:00:00.000Z",
    "deadline": "2026-05-14T09:00:00.000Z",
    "status": "pending-author-approval",
    "approvalGate": "publish-after-author-approval",
    "styleLearning": "collect-response-summarize-to-article-log-editor-approved-profile-update",
    "estimatedFormDuration": "5 dakika",
    "targetEmail": "drsenaiaksoy@gmail.com"
  }
}
```

- [ ] **Step 3: Dosyaların oluştuğunu doğrula**

Run: `Get-ChildItem icerik\yazar-onaylari\ersin-sarac\onay-bekleyen\2026-05-07_belden-gelen-agri-kasik-genital-bolge`

Expected: `meta.json` ve sonraki görevlerde eklenecek dosyalar için klasör görünür.

### Task 2: Route-ready Astro makale kaynağını yaz

**Files:**
- Create: `icerik/yazar-onaylari/ersin-sarac/onay-bekleyen/2026-05-07_belden-gelen-agri-kasik-genital-bolge/makale-kaynak.astro`

- [ ] **Step 1: Makale iskeletini oluştur**

Kod, eventual route `src/pages/zamansiz-yasam/belden-gelen-agri-kasik-genital-bolge.astro` için hazır olacak; import yolları da ona göre yazılacak.

- [ ] **Step 2: Gövde bileşen sözleşmesini tamamla**

Makale şu blokları içermeli:
- `SubmenuHero`
- `SubmenuArticleBody`
- `ArticleTOC`
- `ArticleAuthorBlock`
- `ArticleSummary`
- tek ana `ArticleProsePanel`
- `RedFlagBox`
- tek görünür `ArticleFAQ`
- `RelatedReadings`
- `ArticleEditorNote`
- `ArticleDisclaimer`

- [ ] **Step 3: İçeriği yaz**

Makale, aşağıdaki ayrımı açıkça kurmalı:
- yansıyan ağrı
- bel / sakroiliak / kalça / sinir hattı ilişkisi
- pelvik taban karışıklığı
- mekanik işaretler
- jinekolojik / ürolojik / acil değerlendirme eşikleri

- [ ] **Step 4: Kaynak dosyasını gözden geçir**

Run: `Get-Content icerik\yazar-onaylari\ersin-sarac\onay-bekleyen\2026-05-07_belden-gelen-agri-kasik-genital-bolge\makale-kaynak.astro -TotalCount 80`

Expected: `articleTitle`, `articleDescription`, `articlePath`, `faqItems` ve bileşen import'ları görünür.

### Task 3: Yazar önizleme ve karar formunu ekle

**Files:**
- Create: `icerik/yazar-onaylari/ersin-sarac/onay-bekleyen/2026-05-07_belden-gelen-agri-kasik-genital-bolge/makale-onizleme.html`
- Create: `icerik/yazar-onaylari/ersin-sarac/onay-bekleyen/2026-05-07_belden-gelen-agri-kasik-genital-bolge/kontrol-formu.html`
- Modify: `icerik/yazar-onaylari/ersin-sarac/article-log.md`

- [ ] **Step 1: Makale önizleme HTML'ini yaz**

Önizleme dosyası, Astro render'a ihtiyaç duymadan tarayıcıda okunabilir olmalı; başlık, kısa özet, bölüm başlıkları ve kapanış görünür olmalı.

- [ ] **Step 2: Karar formunu yaz**

Form şu alanları içermeli:
- 3 likert: ses, açıklık, pazarlama hissi
- 3 kritik toggle: klinik sınır, sakin dil, yön ihtiyacı
- 1 kısa yorum alanı
- `ONAYLIYORUM` / `DEĞİŞİKLİK İSTİYORUM` butonları

- [ ] **Step 3: Article log'a yeni satır ekle**

Yeni satırda şu bilgi görünmeli:
- tarih `2026-05-07`
- slug `belden-gelen-agri-kasik-genital-bolge`
- eksen `bel-kasık-genital ağrı / pelvik taban ayrımı`
- notlar kısmında `onay bekleyen paket` ifadesi

- [ ] **Step 4: Paket bütünlüğünü doğrula**

Run: `Get-ChildItem icerik\yazar-onaylari\ersin-sarac\onay-bekleyen\2026-05-07_belden-gelen-agri-kasik-genital-bolge`

Expected: `kontrol-formu.html`, `makale-kaynak.astro`, `makale-onizleme.html`, `meta.json`

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/plans/2026-05-07-bel-kaynakli-kasik-genital-agri.md icerik/yazar-onaylari/ersin-sarac/article-log.md icerik/yazar-onaylari/ersin-sarac/onay-bekleyen/2026-05-07_belden-gelen-agri-kasik-genital-bolge
git commit -m "Draft Ersin referred pain approval package"
```
