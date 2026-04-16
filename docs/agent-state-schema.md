# Estranova Agent State + Memory Protokolu

Bu dokuman, multi-agent icerik hattinda icerik brief'inden yayina hazir makaleye kadar giden surecte kullanilan:
- `State Transfer` parametrelerini (hangi alanlar hangi adimda aktarilir)
- `State` alanlarini (LangGraph benzeri state semantiği)
- `Memory` politikasini (onceki kosulardan hangi kurallari/risk sinyallerini hatirlamali)

operasyonel olarak tanimlar.

Hard constraints (tum zincirler icin):
- Teshis yok
- Tedavi veya ilac onerisi yok
- Recete/prescription dili yok
- Abartili vaat yok
- Tibbi kesinlik iddiasi yok

--- 

## 1) State: Ortak veri modeli (JSON benzeri)

> Not: Alan adlari repo dokumanlariyla uyumludur (agent-io-spec / orchestrator).

```json
{
  "state_version": "1.0",
  "run_id": "string",
  "created_at": "ISO-8601",
  "updated_at": "ISO-8601",

  "topic": "string",
  "audience": "string",
  "content_goal": "string",

  "risk_level_initial": "low | medium | high",
  "risk_level_current": "low | medium | high",

  "disclaimer_needed": true,
  "human_review_required": false,

  "approved_sources": [
    {
      "id": "src_1",
      "title": "string",
      "publisher": "string",
      "year": 2025,
      "url": "string",
      "source_type": "guideline | systematic_review | meta_analysis | peer_reviewed_study",
      "evidence_level": "high | medium | low"
    }
  ],

  "key_claims": [
    {
      "id": "claim_1",
      "text": "string",
      "source_ids": ["src_1"],
      "status": "draft | supported | partial | unsupported"
    }
  ],

  "finding_vs_commentary": [
    {
      "claim_id": "claim_1",
      "finding": "string",
      "commentary": "string"
    }
  ],

  "flagged_claims": [
    {
      "claim_id": "claim_1",
      "reason": "string",
      "severity": "low | medium | high"
    }
  ],

  "draft": {
    "article": "markdown_or_text",
    "social_post": "markdown_or_text",
    "newsletter": "markdown_or_text"
  },

  "claim_trace": [
    {
      "claim_id": "claim_1",
      "content_refs": ["article:p2", "newsletter:p1"]
    }
  ],

  "factcheck_report": {
    "key_claims_summary": [],
    "notes": "string"
  },

  "violations": [
    {
      "type": "medical_risk | regulation_risk | misleading_claim | overpromise | ad_language | disclaimer_gap",
      "severity": "critical | medium | low",
      "text_ref": "string",
      "rule_id": "string",
      "fix_suggestion": "string"
    }
  ],

  "compliance": {
    "compliance_score": 0,
    "required_fixes": [],
    "final_decision": "ready_to_publish | revision_required | rejected",
    "final_approver": {
      "type": "agent | human",
      "name": "string",
      "timestamp": "ISO-8601"
    }
  },

  "state_history": [
    {
      "stage": "brief | research | writer | validation | compliance | human_review | final",
      "summary": "string",
      "timestamp": "ISO-8601"
    }
  ]
}
```

---

## 2) State Transfer: Brief -> Makale son haline kadar aktarilan parametreler

### Notasyon

- `Transfer(A -> B)` = A chain'inin B chain'ine verdigi zorunlu state alanlarinin kumesi.
- Hard constraint ihlali gorulen alanlar, gecis engeli olarak isaretlenmelidir.

### 2.1 Brief init (Orchestrator)

**Input (disa sistemden):**
- topic, audience, content_goal
- risk_level_initial

**State init minimum:**
- topic, audience, content_goal
- risk_level_initial
- risk_level_current = risk_level_initial
- disclaimer_needed = true
- human_review_required = false

---

### 2.2 ResearchChain: Transfer

ResearchChain, state'i zenginlestirir.

**Alir (input state):**
- topic
- audience
- content_goal
- risk_level_current

**Uretir (output mutasyonu):**
- approved_sources
- key_claims
- finding_vs_commentary
- flagged_claims (opsiyonel)
- disclaimer_needed (varsayilan true)

**Transfer(Research -> Writer) icin minimum:**
- topic, audience, content_goal
- risk_level_current
- approved_sources
- key_claims
- disclaimer_needed

---

### 2.3 WriterChain: Transfer

**Alir (input state):**
- approved_sources
- key_claims
- disclaimer_needed
- risk_level_current

**Uretir:**
- draft.article
- draft.social_post
- draft.newsletter
- claim_trace

**Transfer(Writer -> Validation) icin minimum:**
- draft
- claim_trace
- approved_sources
- key_claims
- risk_level_current

---

### 2.4 ValidationChain (Fact-check): Transfer

**Alir:**
- draft
- claim_trace
- approved_sources
- key_claims
- risk_level_current

**Uretir:**
- factcheck_report
- key_claims status guncellemesi (supported/partial/unsupported)
- flagged_claims (unsupported / weak evidence -> severity)
- violations (opsiyonel: dogrulukla ilgili riskler, ama compliance siniflandirmasi yine ComplianceChain)

**Transfer(Validation -> Compliance) icin minimum:**
- factcheck_report
- flagged_claims
- draft
- risk_level_current

---

### 2.5 ComplianceChain: Transfer

**Alir:**
- draft
- flagged_claims
- factcheck_report
- risk_level_current
- disclaimer_needed

**Uretir:**
- violations (tıbbi risk, regülasyon riski, yanıltıcı ifade, aşırı vaat, reklam/funnel dili, disclaimer_gap)
- compliance.compliance_score
- compliance.required_fixes
- compliance.final_decision
- human_review_required (kural: risk high veya critical violation varsa true)

**Transfer(Compliance -> HumanReview) kurali:**
- Eger `human_review_required == true` ise human_review adimina gecilir.

Transfer(Compliance -> HumanReview) icin minimum:
- draft
- violations
- required_fixes
- risk_level_current
- factcheck_report

---

### 2.6 Human Review (zorunlu oldugunda): Transfer

**Alir:**
- compliance.required_fixes listesi
- violations kritik/orta kalemleri
- draft (revize edilmemis ya da revize edilmis son surum)

**Uretir:**
- final approval / revision request / reject
- compliance.final_approver (human)
- compliance.final_decision guncellemesi

**Transfer(HumanReview -> Final):**
- final_decision
- compliance.final_approver
- final metin (draft)

---

## 3) Hard Constraint Gating (gecis engeli kural seti)

Her chain cikti uretmeden once ve urettikten sonra Orchestrator tarafinda gecis kontrolu yapilmalidir.

### 3.1 Gecis kontrolu

Gecis icin asagidakiler saglanmalidir:
1) Teshis/tedavi/recete dili yakalanmadi
2) Abartili vaat (garanti/mucize/kesin cozum vb.) yakalanmadi
3) Yaniltici medikal kesinlik iddiasi yok (kismen de olsa "kanıt var/yok" ayrimi yapilmali)
4) Disclamer gap yok (disclaimer_needed true ise zorunlu)
5) risk_level_current:
   - Validation/Compliance flagged severity high veya critical violation gordugunde otomatik high'e yukseltilmeli

### 3.2 Revizyon dongusu

Eger `compliance.final_decision = revision_required` ise:
- required_fixes uygulanir
- draft yeniden uretilecek zincir: WriterChain
- revizyon sonrasi tekrar ValidationChain (risk medium/high ise) ve ComplianceChain calistirilir.

---

## 4) Memory Protokolu

Memory iki katmandan olusur:
1) **Durable Memory (kalici)**: kurallar, stil, yasakli kelime kaliplari, disclaimer sablonlari
2) **Episodic Memory (kosula ozel)**: run_id bazli state_history ve uretim izleri (claim_trace vb.)

### 4.1 Durable Memory: Ne hatirlamali?

Durable Memory, her yeni run baslangicinda Orchestrator tarafinda chain prompt'larina enjekte edilmelidir.

Hatirlamali:
- **Uslupla ilgili hard constraints**
  - plaza dili yasagi
  - korku/manipulasyon dilinin yasagi
  - panik/“mucize cozum”/“kesin cozum” kaliplari
  - kisa, anlasilir, 8-10. sinif duzeyi hedefi (WriterChain)
- **Yasakli dil listeleri**
  - "Randevu al", "Tedaviye basla", "Hemen basvur"
  - "En iyi", "En basarili", "Garantili", "Kesin cozum", "Basari oranlarimiz"
  - "Paketlerimiz", "Kampanya", "Indirim", "Simdi satin al"
- **Standart saglik uyari/disclaimer**
  - compliance-rules'deki standart disclaimer metni (her zaman en sona)
- **Icerik yapisi**
  - Makale: H1, Kisa Ozet, duzenli basliklar, ilgili icerikler (repo kullanimina gore)
  - Sosyal/bulten: CTA'nin notr olmasi ("icerigi inceleyin", "rehberi kesfedin")
- **Kaynagi olmayan iddia politikasi**
  - “kaynak yoksa unsupported/kanit sinirli” yaklasimi
- **Teknografik tutarlilik**
  - Estranova kurallarina uygun terim yazim standardi (ornegin oestrojen/östrojen politikalari; uygulanacaksa memory'e de “normalize rule” olarak eklenir)

### 4.2 Memory retrieval: Memory nasil kullanilmali?

- Orchestrator, her chain icin bir “system_ruleset” parcasini memory'den cekerek prompt girdisine ekler.
- ComplianceChain, violations tespitinde durable memory'deki yasakli kaliplar listesine referans verir.
- WriterChain, riskli kelime kaliplarini otomatik filtrelemeli (linter/regex benzeri).

### 4.3 Memory update: Memory nasil guncellenir?

Orchestrator, run sonunda asagidaki durumlara gore memory'yi guncelleyebilir (opsiyonel, kontrollu):
- Compliance kritik ihlal tespit ettiyse:
  - bulunan “disallowed phrase signature” durable memory'ye eklenir
- Fact-check unsupported sonuc ciktiysa:
  - benzer iddia kaliplarini gelecekte “otomatik desteklenmiyor” on-onay listesine eklemek icin not dusulur

Memory update kurali:
- Durable memory’ye ekleme sadece “kural kalibi/kelime imza” duzeyinde yapilir.
- Tekil okuyucu/klinisyen gibi ozel bilgi saklanmaz.

