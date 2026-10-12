# Epitalon — Codex revizyonunun kontrolü ve ikinci humanize turu (Claude Code)

Tarih: 12 Ekim 2026. Baz: `e3e64ccf` + Codex'in commit edilmemiş revizyonu (`son-metin.astro`).
Durum: Yerel revizyon. Commit, push, deploy yapılmadı. KC editör onayı ve Dr. Alper Mumcu onayı bekliyor.

## Codex revizyonunda korunanlar

- Sentetik Epitalon ile pineal özüt Epithalamin ayrımı.
- ALT'nin güvence değil çekince olarak yorumlanması (önceki sürümdeki "rahatlatıcı" ve "teorik güvenlik kapısı" çerçevesi hatalıydı; kanser hücrelerinde telomerler uzuyor).
- Klinik çıkarım için kanıt etiketlerinin düşürülmesi; numaralı dipnotlu kaynak bölümü (clinical-guide için CLAUDE.md §4 gereği).
- `modifiedDate` / `lastUpdated` 12 Ekim 2026; kullanılmayan `article-faqs.ts` kaydının silinmesi.

## Kaynak doğrulaması (bağımsız alt ajan, tam metin/PMC ve FDA PDF)

| İddia | Sonuç | Uygulanan düzeltme |
|---|---|---|
| IBR.3/HMEC normal, 21NT/BT474 kanser; 3 hafta / 4 gün | Doğrulandı | — |
| Kanser hücrelerinde telomeraz aktivitesi artmadı | Doğrulandı; hTERT ifadesi ise arttı (21NT ~12×, BT474 ~5×) | "hTERT ifadesi artsa da" eklendi |
| ALT ~10× (21NT), ~3× (BT474) | Doğrulandı; C-halkası testi, yazarlar abartabileceğini belirtiyor | Test adı ve yazar uyarısı eklendi |
| Normal hücrelerde ALT artışı yok | HMEC'te anlamsız küçük artış | "anlamlı artış saptanmadı" korundu |
| Düzeltme 15 Kasım 2025 | Yalnızca Şekil 1–3 değişti | Kaynak notuna eklendi |
| Dalgård 2015 | Doğrulandı: premenopoz 20,6, perimenopoz 16,5, postmenopoz 15,1 bp/yıl; Danimarka ikiz kaydı, ~12 yıl | Çalışma tanımı somutlaştırıldı |
| FDA PCAC 23–24 Temmuz 2026 dosyası | Doğrulandı; insan güvenlik çalışması yok (s.36, 38); yalnızca uykusuzluk değerlendirildi (s.28, s.8 dn.4); Epitalon/Epithalamin ayrımı s.8 | Gövde "bir ilaç düzenleme kurumunun danışma kurulu" olarak anonim |
| FDA bulk substances sayfası | Epitalon "nominated but withdrawn" altında; immünojenite, kümelenme, safsızlık | Kaynak başlığı netleştirildi |
| UCSF telomer testi sayfası | Erişilemedi (bot koruması) | Doğrulanamayan yazar/tarih künyeden çıkarıldı; Dr. Aksoy'un anıldığı kurum olduğu için bağlantı tutuldu |
| ALT kanserlerin %10–15'i | Cesare & Reddel 2010 ile doğrulandı | Codex'in çıkardığı bilgi kaynak [7] ile geri kondu |

Eklenen kaynaklar: [7] Cesare & Reddel 2010, [8] MedlinePlus TERT, [9] NCI telomeraz sözlüğü, [10] The Menopause Society perimenopoz sayfası. [8]–[10], Dr. Aksoy'un 5. yanıtta andığı kurumlara ve 2. yanıttaki kanser hücresi cümlesine karşılık gelir; yanıtlara yalnızca dipnot işareti eklendi, kelime değişmedi.

## Humanize

- Gövdede hekim sesi geri getirildi: onaylı "Otuz yıldır kadın sağlığının içindeyim…" açılışı; özet birinci tekil.
- Gövdenin Dr. Aksoy yanıtlarını tekrar eden kısımları çıkarıldı (telomeraz–kanser paragrafı, ürün güvenliği girişi); kırmızı bayraklar yalnızca editör notunda.
- Üçüncü şahıs yönlendirme ("Dr. Aksoy'un aşağıdaki yanıtları…", "kaynak 1, 2 ve 6'ya başvurabilirsiniz") kaldırıldı; dipnotlar ilgili cümlelere taşındı.
- İnkâr çerçeveleri olumlu anlatıma çevrildi; kapanış, yanıt 5'i tekrar etmeyen üç soruluk okuma ölçütüne dönüştürüldü.
- Editör notuna diğer Senai makalelerindeki "Kanıt Düzeyi" başlığı geri kondu (1–2).
- Görsel alt metni: hero kaydındaki üretim talimatı ve Codex'in eksik alt metni ("çay içen kadın") yerine görselde görülen sahne (üç kadın).

Ölçüm (kaynak listesi hariç gövde): kısa hükümle biten paragraf 10→4 (kalan 3'ü Dr. Aksoy yanıtlarında), ortalama cümle 12,0→13,4 kelime, standart sapma 5,5→6,8. Evidence 17→19.

## Dr. Aksoy yanıtları

Yanıt 5: `main`'deki "sağlam yolu" (Cursor, `e3e64ccf`) ile Codex'in "uygun yolu" çakışıyordu; yayındaki "sağlam yolu" korundu. Dr. Aksoy'un teyidi bekleniyor.

## Doğrulama

`npm run build:ci` geçti (lint, compliance, articles:audit:strict, templates, 140 sayfa, SEO 160 sayfa). editorial-check 0 aday. rendered-check yalnızca `uncited-source` (dipnot düzeninde yanlış pozitif). FAQPage yok; reviewedBy Dr. Alper Mumcu; dateModified 2026-10-12.

## Açık iş

1. KC editör onayı (gövde, özet, kaynaklar esaslı değişti).
2. Dr. Alper Mumcu onayı: editör notu metni Codex tarafından yeniden yazıldı, bu turda dili düzeltildi; Mumcu'nun önceki onayı bu metni kapsamıyor.
3. Yanıt 5 "sağlam yolu" teyidi.
4. Sayfadaki `<style>` bloğu (sticky TOC) site genelindeki `overflow-hidden` sorununa sayfaya özel bir yamadır; ortak bileşende çözülmesi önerilir.
5. Aynı görsel NAD+ makalesinde de kullanılıyor; o sayfanın alt metni bu turda incelenmedi.
