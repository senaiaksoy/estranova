# Estranova Agent I/O Specification

Bu dokuman, Estranova multi-agent icerik sisteminde her agent icin standart input/output sozlesmesini tanimlar.
Amac; operasyonu izlenebilir, tekrar edilebilir ve saglik icerigi acisindan guvenli tutmaktir.

## Temel ilkeler

- Teshis dili kullanilmaz.
- Tedavi veya ilac onerisi verilmez.
- Recete dili kullanilmaz.
- Abartili vaat ve kesin sonuc iddiasi kurulmaz.
- Tibbi belirsizlikler acikca belirtilir.
- Standart yasal uyari metni zorunludur.

---

## Ortak veri modeli (JSON benzeri)

Asagidaki alanlar tum agent handoff'larinda ortak anahtar seti olarak kullanilir:

```json
{
  "topic": "string",
  "audience": "string",
  "content_goal": "string",
  "risk_level": "low | medium | high",
  "key_claims": [
    {
      "id": "claim_1",
      "text": "string",
      "source_ids": ["src_1"],
      "status": "draft | supported | partial | unsupported"
    }
  ],
  "approved_sources": [
    {
      "id": "src_1",
      "title": "string",
      "publisher": "string",
      "year": 2025,
      "url": "string",
      "evidence_level": "high | medium | low"
    }
  ],
  "flagged_claims": [
    {
      "claim_id": "claim_1",
      "reason": "string",
      "severity": "low | medium | high"
    }
  ],
  "disclaimer_needed": true,
  "human_review_required": false
}
```

Not:
- `risk_level` ilk olarak Orchestrator tarafinda atanir.
- `human_review_required` degeri `high` riskte otomatik `true` olur.

---

## 1) Research Agent

### Amaci
Konuya ait guvenilir kaynaklari toplamak, iddia havuzu cikarmak ve kanit seviyesini etiketlemek.

### Ne alir (input)
- `topic`
- `audience`
- `content_goal`
- `risk_level` (Orchestrator'dan)
- Varsa onceki topic brief notlari

### Ne uretir (output)
- `approved_sources`
- `key_claims` (kaynakla eslesmis taslak iddialar)
- Kanit seviyesi notlari
- Belirsizlik/celiski listesi
- `disclaimer_needed` (varsayilan: `true`)

### Neyi asla yapmaz
- Makale, sosyal medya postu veya bulten metni yazmaz.
- Tedavi dili, recete dili, kesinlik iddiasi kurmaz.
- Kaynaksiz iddia uretmez.

### Ornek output
```json
{
  "topic": "Menopoz sonrasi kalp sagligi",
  "audience": "40+ kadinlar",
  "content_goal": "bilgilendirici makale + turevler",
  "risk_level": "medium",
  "approved_sources": [],
  "key_claims": [],
  "flagged_claims": [],
  "disclaimer_needed": true,
  "human_review_required": false
}
```

---

## 2) Writer Agent

### Amaci
Research output'una bagli kalarak operasyonel icerik paketini uretmek:
- `article`
- `social_post`
- `newsletter`

### Ne alir (input)
- Research Agent output'u:
  - `topic`, `audience`, `content_goal`, `risk_level`
  - `approved_sources`
  - `key_claims`
  - `disclaimer_needed`

### Ne uretir (output)
- `draft_content`:
  - `article`
  - `social_post`
  - `newsletter`
- Iddia-kaynak izlenebilirlik listesi (`claim_trace`)
- Varsa yazar notlari (`writer_notes`)

### Neyi asla yapmaz
- Yeni tibbi iddia icat etmez.
- Research paketinde olmayan kaynaga dayanarak kesin ifade kurmaz.
- Compliance veya fact-check kararini kendisi vermez.

### Ornek output
```json
{
  "topic": "string",
  "risk_level": "medium",
  "draft_content": {
    "article": "markdown_or_text",
    "social_post": "markdown_or_text",
    "newsletter": "markdown_or_text"
  },
  "claim_trace": [
    { "claim_id": "claim_1", "content_refs": ["article:p2"] }
  ],
  "disclaimer_needed": true
}
```

---

## 3) Fact-check Agent

### Amaci
Writer ciktilarindaki iddialari tek tek dogrulamak ve riskli iddialari isaretlemek.

### Ne alir (input)
- Writer output'u (`draft_content`, `claim_trace`)
- Research output'u (`approved_sources`, `key_claims`)
- `risk_level`

### Ne uretir (output)
- `factcheck_report`
- Guncellenmis `key_claims` durumu:
  - `supported`
  - `partial`
  - `unsupported`
- `flagged_claims`
- Revizyon gerektiren bolum listesi

### Neyi asla yapmaz
- Icerigi bastan yazmaz.
- Compliance puani vermez.
- Kaynaksiz "dogru" onayi vermez.

### Ornek output
```json
{
  "risk_level": "medium",
  "key_claims": [
    { "id": "claim_1", "status": "supported" },
    { "id": "claim_2", "status": "unsupported" }
  ],
  "flagged_claims": [
    {
      "claim_id": "claim_2",
      "reason": "Kaynak ile desteklenmiyor",
      "severity": "high"
    }
  ],
  "factcheck_report": "markdown_or_text"
}
```

---

## 4) Compliance Agent

### Amaci
Yasal ve editoriyal uyumu denetlemek; saglik icerigi risklerini puanlayip karar vermek.

### Ne alir (input)
- Fact-check sonrasi icerik paketi
  - `draft_content`
  - `flagged_claims`
  - `risk_level`
- Kural setleri:
  - `AGENTS.md`
  - `CLAUDE.md`
  - `compliance-rules.md`

### Ne uretir (output)
- `compliance_report`
- `compliance_score` (0-100)
- `required_fixes`
- `disclaimer_needed` kontrol sonucu
- `human_review_required` (risk veya kritik bulguya gore)

### Neyi asla yapmaz
- Bilimsel iddia dogrulugu karari vermez (bu Fact-check gorevidir).
- Teshis veya tedavi dili onermez.
- Kritik risk acikken "yayina hazir" demez.

### Ornek output
```json
{
  "risk_level": "high",
  "compliance_score": 72,
  "required_fixes": [
    "Kesinlik ifade eden cumleyi notr dille degistir",
    "Standart yasal uyarayi ekle"
  ],
  "disclaimer_needed": true,
  "human_review_required": true,
  "final_decision": "revizyon_gerekli"
}
```

---

## 5) Orchestrator

### Amaci
Risk seviyesine gore agent sirasini calistirmak, handoff'lari yonetmek ve final yayin kararini vermek.

### Ne alir (input)
- `topic`
- `audience`
- `content_goal`
- Baslangic `risk_level`

### Ne uretir (output)
- Agent raporlari ile birlikte final paket:
  - `research_output`
  - `writer_output`
  - `factcheck_report` (risk `medium/high`)
  - `compliance_report`
  - `human_review_result` (risk `high` veya zorunlu durumda)
- Final durum:
  - `ready_to_publish`
  - `revision_required`
  - `rejected`

### Neyi asla yapmaz
- Agent rollerini birlestirip tek adimda icerik uretmez.
- Risk seviyesini kritik bulgulara ragmen dusurmez.
- Human review zorunluyken bu adimi atlamaz.

### Risk tabanli routing
- `low` -> Research -> Writer -> Compliance
- `medium` -> Research -> Writer -> Fact-check -> Compliance
- `high` -> Research -> Writer -> Fact-check -> Compliance -> Human Review

---

## Handoff mantigi (zorunlu donusumler)

### 1) Research output -> Writer input

Donusum kurali:
- `approved_sources` ve `key_claims` oldugu gibi Writer'a gecer.
- Writer, her ana paragrafi en az bir `claim_id` ile esler.
- `disclaimer_needed` alani Writer tarafinda korunur.

### 2) Writer output -> Fact-check input

Donusum kurali:
- Writer'in `claim_trace` listesi Fact-check icin zorunlu girdidir.
- Fact-check, her `claim_id` icin durum etiketi uretir.
- Kaynaksiz kalan claim otomatik `unsupported` olur.

### 3) Fact-check output -> Compliance input

Donusum kurali:
- `flagged_claims` ve `factcheck_report` Compliance'a zorunlu aktarilir.
- `severity = high` flagged claim varsa `risk_level` en az `high` kabul edilir.
- Compliance, bu bulgular kapanmadan final onay vermez.

---

## Operasyon notlari

- Bu spesifikasyon, `docs/orchestrator.md` ve `docs/agent-prompts/05-orchestrator-pipeline.md` ile uyumlu calisir.
- Tum adimlarda yasal uyari metninin varligi denetlenmelidir.
- `human_review_required = true` oldugunda yayin karari insan onayi olmadan tamamlanamaz.
