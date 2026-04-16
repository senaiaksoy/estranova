# Estranova Pilot Manual Orchestration Runbook

Bu dokuman, Estranova multi-agent sisteminin ilk manual test kosusu icin hazirlanmistir.
Amaç, ekibin tek bir pilot konu uzerinden orchestrator -> research -> writer -> fact-check -> compliance akisini copy-paste ile calistirabilmesidir.

## Pilot konu

- Konu: `Perimenopoz doneminde beyin sisi ve odaklanma guclugu`
- Hedef kitle: `40+ kadinlar`
- Icerik hedefi: `bilgilendirici makale + sosyal medya turevi + bulten turevi`

---

## 1) Orchestrator siniflandirmasi

### Beklenen siniflandirma

Bu konu, yanlis tibbi yorum riski tasidigi icin varsayilan olarak `medium` risk ile baslatilir.

Gerekce:
- Belirti odakli ve mental performansla ilgili.
- Okuyucu tarafinda tani/tedavi cikarimi yapma riski var.
- Kaynak destekli ve notr dil zorunlu.

### Risk tabanli akis

- `medium` -> Research -> Writer -> Fact-check -> Compliance
- Compliance veya Fact-check kritik bulgu verirse risk `high` olur ve Human Review zorunlu hale gelir.

---

## 2) Research Agent gorev paketi (copy-paste)

Asagidaki metni Research Agent'a dogrudan verin:

```text
ROL: Research Agent

KONU:
Perimenopoz doneminde beyin sisi ve odaklanma guclugu

HEDEF:
Yalnizca guvenilir kaynaklara dayali research-output uret.
Icerik yazma. Yorumlari bulgulardan ayir.

SINIRLAR:
- Sadece guvenilir kaynaklar: NICE, WHO, CDC, NHS, Cochrane, PubMed uzerinden yuksek kaliteli calismalar
- Kaynak turleri: guideline, systematic_review, meta_analysis, peer_reviewed_study
- Blog/forum/sosyal medya/anonim kaynak kullanma
- Teshis, tedavi onerisi, recete dili, kesinlik iddiasi kurma

CIKTI FORMATI (JSON benzeri):
- topic
- audience
- content_goal
- risk_level
- approved_sources[]
- key_claims[]
- finding_vs_commentary[]
- flagged_claims[]
- disclaimer_needed
- human_review_required

EK KURAL:
- Her key_claim en az bir source_id ile eslesmeli.
- Kanit zayifsa claim notuna "kanit_sinirli" ekle.
```

---

## 3) Research output ornegi

Asagidaki ornek, beklenen seviye ve formati gosterir:

```json
{
  "topic": "Perimenopoz doneminde beyin sisi ve odaklanma guclugu",
  "audience": "40+ kadinlar",
  "content_goal": "bilgilendirici makale + sosyal medya + bulten",
  "risk_level": "medium",
  "approved_sources": [
    {
      "id": "src_1",
      "title": "Menopause",
      "publisher": "NHS",
      "year": 2025,
      "url": "https://www.nhs.uk/conditions/menopause/",
      "source_type": "guideline",
      "evidence_level": "high"
    },
    {
      "id": "src_2",
      "title": "Menopause",
      "publisher": "National Institute on Aging",
      "year": 2025,
      "url": "https://www.nia.nih.gov/health/menopause",
      "source_type": "guideline",
      "evidence_level": "high"
    }
  ],
  "key_claims": [
    {
      "id": "claim_1",
      "text": "Perimenopozda odaklanma ve zihinsel berraklikta dalgalanma yasamak yaygin olabilir.",
      "source_ids": ["src_1", "src_2"],
      "status": "draft"
    },
    {
      "id": "claim_2",
      "text": "Uyku bozulmasi ve stres artisi, beyin sisi hissini siddetlendirebilir.",
      "source_ids": ["src_1"],
      "status": "draft"
    }
  ],
  "finding_vs_commentary": [
    {
      "claim_id": "claim_1",
      "finding": "Kaynaklar perimenopozda bilissel sikayetlerin gorulebilecegini belirtiyor.",
      "commentary": "Bu sikayetler tek basina hastalik tanisi anlamina gelmez."
    }
  ],
  "flagged_claims": [],
  "disclaimer_needed": true,
  "human_review_required": false
}
```

---

## 4) Writer Agent gorev paketi (copy-paste)

Asagidaki metni Writer Agent'a dogrudan verin:

```text
ROL: Writer Agent

GOREV:
Yalnizca research-output kullanarak 3 icerik uret:
1) Makale
2) Sosyal medya metni
3) Bulten metni

YAZIM KURALLARI:
- 8-10. sinif duzeyinde Turkce
- Kisa ve anlasilir cumleler
- Plaza dili yasak
- Korku dili yok
- Tani/tedavi iddiasi yok
- Kesinlik iddiasi yok

OPERASYON:
- Her ana iddiayi claim_trace ile claim_id'ye bagla
- disclaimer_needed=true ise standart yasal uyarayi mutlaka ekle

CIKTI FORMATI (JSON benzeri):
- topic
- risk_level
- draft_content.article
- draft_content.social_post
- draft_content.newsletter
- claim_trace[]
- disclaimer_needed
- human_review_required
```

---

## 5) Writer output beklentisi

Beklenen minimum kalite:
- Makalede:
  - Baslik + kisa ozet + 4-6 alt baslik + kapanis + yasal uyari
- Sosyal metinde:
  - Kisa caption + notr yonlendirme
- Bultende:
  - Konu satiri + kisa govde + notr CTA
- Tum ana ifadeler `claim_trace` ile baglanmis olmali

Basarisiz sayilacak durumlar:
- Plaza dili
- "kesin cozum", "garanti", "hemen duzelir" gibi vaat
- Tani koyan veya tedavi yonlendiren cumle
- Kaynaksiz yeni tibbi iddia

---

## 6) Fact-check Agent gorev paketi (copy-paste)

Asagidaki metni Fact-check Agent'a dogrudan verin:

```text
ROL: Fact-check Agent

GOREV:
Writer output'taki tum dogrulanabilir iddialari kontrol et.
Research output ile eslestir.

KONTROL:
- Her claim icin durum ver: supported | partial | unsupported
- Kanit gucunu etiketle: high | medium | low
- Eksik dayanaklari flagged_claims listesine ekle
- Kaynaksiz claim otomatik unsupported olsun

SINIR:
- Metni bastan yazma
- Compliance karari verme

CIKTI:
- key_claims (guncel durumlarla)
- flagged_claims
- factcheck_report
- gerekiyorsa duzeltme maddeleri
```

---

## 7) Compliance Agent gorev paketi (copy-paste)

Asagidaki metni Compliance Agent'a dogrudan verin:

```text
ROL: Compliance Agent

GOREV:
Fact-check sonrasi metni yasal/editoriyal guvenlik acisindan denetle.

ZORUNLU KONTROLLER:
- Tibbi risk (tani/tedavi/recete dili)
- Regulasyon riski
- Yaniltici ifade
- Asiri vaat
- Reklam/funnel dili
- Uygun disclaimer varligi

KARAR:
- Risk seviyesi: critical | medium | low
- Final: yayina_hazir | revizyon_gerekli
- Kritik risk varsa human_review_required=true

CIKTI FORMATI:
- compliance_score
- risk_findings[]
- required_fixes[]
- disclaimer_needed
- human_review_required
- final_decision
```

---

## 8) Pilot test checklist

Bu checklist her kosu sonunda doldurulmalidir:

- [ ] Plaza dili var mi?
- [ ] Tibbi kesinlik var mi?
- [ ] Yasakli vaat var mi? (or: kesin cozum, garanti, mucize)
- [ ] Kaynak destegi zayif iddia var mi?
- [ ] Disclaimer gerekiyor mu? (beklenen: evet)
- [ ] Human review gerekiyor mu? (risk `high` veya kritik bulgu varsa evet)

Ek kontrol:
- [ ] Tum key_claim satirlari en az bir source_id ile bagli mi?
- [ ] Writer claim_trace listesi tam mi?
- [ ] Unsupported claim kaldiysa final karar revizyon_gerekli mi?

---

## 9) Run sonu karar mantigi

- Compliance `yayina_hazir` ve kritik bulgu yoksa:
  - Sonuc: `ready_to_publish`
- Compliance `revizyon_gerekli` ise:
  - Writer'a duzeltme dongusu acilir, sonra yeniden Fact-check + Compliance calisir
- Kritik risk veya unsupported kritik claim devam ediyorsa:
  - `human_review_required = true`
  - Human Review onayi olmadan yayin yapilmaz
