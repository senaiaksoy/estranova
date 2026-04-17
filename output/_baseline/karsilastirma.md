# Ekzozom konusu — eski çıktı vs yeni pipeline çalıştırması

**Tarih:** 2026-04-17  
**Konu:** Ekzozom Terapisi ve Perimenopozal Cilt Yenilenmesi

## Özet

| Durum | Açıklama |
|-------|----------|
| Referans | `output/_baseline/eski-ekzozom.md` — `output/drafts/2026-04-16-ekzozom-*.md` kopyası (16 Nisan taslak + frontmatter). |
| Yeni çalıştırma | `python main.py "Ekzozom Terapisi ve Perimenopozal Cilt Yenilenmesi" --pretty` **Writer adımında durdu**; tamamlanmadı, yeni `.md` üretilmedi. |

**Kök neden (çalıştırma):** `WriterAgent._validate_writer_structure` → `RuntimeError: INVALID OUTPUT: mekanizma bolumu yetersiz derinlik (kelime ~24, min 40)`.

Bu, **validator bypass değildir**: doğrulama LLM çıktısını reddetti ve graph exception ile sonlandı; `save_operational_outputs` çalışmadı.

---

## Metrik tablosu

| Metrik | Eski (16 Nisan taslağı) | Yeni (bugünün çalıştırması) | Hedef |
|--------|-------------------------|-----------------------------|-------|
| H2 sayısı (`## `) | 5 | **—** (çalışma Writer’da kesildi) | ≥8 |
| "Türkiye" geçiyor mu | Hayır | **—** | Evet |
| Kelime sayısı (govde) | ~229 | **—** | 900–2000 |
| Açılış sahnesi | Yok (soğuk giriş + doğrudan alt başlık) | **—** | Var |
| Mekanizma derinliği | Master 8 bölüm yok; yapı uyumsuz | LLM çıktısı **<40 kelime** (validator reddi) | ≥40 kelime (mekanizma bölümü) |
| Compliance score | 85 (eski `-report.json`) | **—** (Compliance’a gelinmedi) | ≥80 (pratikte 90+ yayın) |
| Final decision | `revision_required` | **—** | `ready_to_publish` (hedef) |
| Hangi klasöre yazıldı | `output/drafts/` (önceki düzeltme sonrası mantık) | **Yazılmadı** (invoke hata) | `output/` veya `drafts/` |

---

## Eski çıktı — kısa içerik değerlendirmesi

- **H2:** 5 adet; estranova-master **8 bölüm** şablonu ile uyumlu değil.
- **Türkiye:** Metinde yok.
- **Kelime:** Yaklaşık 229 (frontmatter hariç gövde).
- **Açılış:** `#` başlıktan sonra tanımlayıcı paragraf; ayrı “sahne” bölümü yok.
- **Not:** Bu dosya, daha önce tartışıldığı gibi, **o anki tam Writer doğrulamasından geçmiş “garantili” bir artefakt olmayabilir** (eski koşum / farklı kayıt yolu). Bugünkü çalıştırmada ise validator **aktif** ve **katı** şekilde devreye girdi.

---

## Yeni çalıştırma — log özeti

- Research: Gemini modeli 404; fallback **gpt-4o** ile tamamlandı (`[WARN] researcher...`).
- Writer: JSON üretildi; `_validate_writer_structure` mekanizma bölümünde **~24 kelime** tespit etti (**min 40**).
- Sonuç: `RuntimeError`, pipeline **yarıda**; yeni `output/*.md` veya `output/drafts/*.md` **oluşmadı**; yeni `-report.json` da **yok**.

---

## Sonraki adımlar (kod değişikliği yapılmadı)

1. **Validator bypass devam ediyor** — **hayır.** Bu koşuda bypass yok; üretim **bilerek durduruldu**.
2. **LLM hâlâ 8 H2 / Türkiye / derinlik üretmiyor** — Evet; en azından mekanizma derinliği için **prompt-following** zayıf. İyileştirme için **writer prompt’a FEW-SHOT örnek** (veya benzeri) eklenmesi mantıklı; bunu sen (Claude Code) prompt tarafında yapabilirsin — **pipeline kodunda otomatik fix uygulanmadı.**

---

## Dosya yolları

| Dosya | Açıklama |
|-------|----------|
| `output/_baseline/eski-ekzozom.md` | Bu karşılaştırma için referans kopya |
| `output/_baseline/karsilastirma.md` | Bu rapor |
