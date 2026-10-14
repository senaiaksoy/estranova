# Revizyon 6 — geniş audit düzeltmeleri (humanize)

14 Ekim 2026. `genis-audit-revizyon-5.md` maddeleri 1–7, kullanıcı onayıyla uygulandı. Madde 8 (görsel, IPTC, manifest, okuma süresi) yayın entegrasyonuna kaldı. Revizyon 5 kopyası `revizyon-5/` altında; SHA-256 `83282c62…a2c93` kayıtla eşleşti.

Yeni kaynak hash'i: `f6559071cff751f62dc7422f02144787d92b16df315c4b04e26c78ce59edc603`.
`duzenlenmis-metin.md` derlenmiş önizlemeden yeniden çıkarıldı (biçim önceki aynadan biraz farklı: başlık `##`, paragraflar boş satırla).

## Okunanlar

Senai-Wiki stil rehberi, CLAUDE.md §3, `senai-humanize` SKILL.md + `references/tr.md` + `references/sites.md`, `writers/ersin-sarac/hot.md` ve `profile.yaml`, `yazar-katkisi.json`.

## Değişiklikler

| Madde | Önce | Sonra |
|---|---|---|
| 1. Ersin'in sesi | Hareket bölümü üçüncü şahıs | Kayıtlı yanıtına yakın birinci tekil: "ağrının şiddetine bakarım", "bırakmanızı istemem", "öneririm", "basit bir egzersiz ağrısı saymam", "Benim yaklaşımım…". Yanıtta olmayan klinik deneyim eklenmedi. |
| 2. Evidence | 9 | 5 (satır 119, 132, 167, 188 kaldırıldı; [1, 2], [4], [2, 4, 5], [6, 7] atıfları yerinde) |
| 3. Soru başlıklı H2 | 3 | 1 ("Ne Zaman Fizyoterapi veya Hekim Desteği Gerekir?") |
| 4. "X değil, Y" | 10 (2 başlık + 8 gövde) | 2 (H2 4 başlığı + Ersin'in kendi cümlesi); "değildir" 5 → 0 |
| 5. Duygu / güvence | Yok | Denge lede: "Düşmekten korkmak anlaşılır bir duygudur; utanılacak bir yanı yoktur." Kapanış: "İçiniz rahat olsun diye ekleyeyim: … önerilen yaklaşımın parçasıdır [2, 5]." (NG59 1.2.1 olağan etkinlikleri sürdürme; NG226 egzersiz temel tedavi) |
| 6. Tekrar | idrar-dışkı 8 kez / 5 bölüm; kişiye göre hareket 6; üç ay 3 | 7 / 4; 4; 2 (lede + SSS 5). BEN'den idrar-dışkı ve "kişiye uyarlanmış" çıktı. |
| 7. Ritim | 3+ eş-uzunluk dizisi 4 (en uzun 5); ≤6 kelime 4; gövde kısa hüküm kapanışı 6 | 1 dizi, H2 sınırında (en uzun 3); ≤6 kelime 8; kısa kapanış 5 (2 güvenlik, 1 duygu, 1 imza, 1 bilgi) |
| "Yaşla değişen" somut detay | Yok | Başlık ve lede yeniden kuruldu; denge cümlesi sadeleşti |
| "değerlendirme" | Gövdede 11 | Gövdede 7 |

H2 başlıkları: 1, 2, 3 değişti ("Nerede, Ne Zaman, Neyi Zorlaştırıyor", "Yaşla Birlikte Kas, Eklem ve Dengede Değişenler", "Aynı Yolu İzlemez"). Tüm anchor'lar ve TOC etiketleri aynı.

## İddia sayımı (structure-check --claims)

| Sonuç | Rev 5 | Rev 6 | Kalan tekrarın gerekçesi |
|---|---:|---:|---|
| Acil idrar-dışkı/his kaybı | 8 kez / 5 bölüm | 7 / 4 | Özet; gövde acil paragrafı; kırmızı bayrak kutusu; SSS 4 (bağımsız okunur, FAQPage şemasında) |
| Kişiye göre hareket | 6 / 6 | 4 / 4 | Özet; osteoartrit cümlesi; SSS 2; kaynak listesi etiketi |
| Görüntülemenin sınırı | 3 / 2 | 3 / 2 | Gövde + SSS 4 (bağımsız okunur) |

## Anlam kaydı

- Eklendi, kaynaklı: kapanış güvence cümlesi [2, 5]; "Egzersize başlarken ağrı biraz artabilir" (NG226 1.3.3 ile daha birebir; önceki "bir miktar rahatsızlık").
- Çıkarıldı: gövdedeki "üç ay kronik tanımıdır [1]" cümlesi (SSS 5'te aynı açıklama duruyor; [1] atfı gövdede bir yerde kaldı); WHO 2020 kas güçlendirme önerisi için "orta kesinlik" ibaresi ("güçlü biçimde önerir" kaldı, kesinlik düşme önerisinde duruyor).
- Değişmedi: Kısa Özet, RedFlagBox, FAQ verisi ve FAQPage, kaynak listesi, JSON-LD, başlık, açıklama, alt metinler.
- Yeni sayı: "ağrım 6" örneğindeki ağrı puanı; klinik veri değil.

## Doğrulama

- Lexicon 0; `editorial-check` 0 aday.
- Önizleme derlemesi: 1 H1, FAQPage 1 (5 soru), MedicalWebPage yok, Evidence 2/5 ×2, 3/5 ×1, 4/5 ×2; 9 anchor tekil.
- `check-fidelity` (rev 5 → rev 6): yalnızca yukarıdaki beklenen sayı/atıf farkları.
- `rendered-check`: tekrar eden uyarı, adsız inceleme satırı (inceleme bekleniyor), uncited-source (Estranova'da geçersiz). Şablon bulguları; metinle gizlenmedi.
- `space-before-punctuation`: metin çıkarıcının `<sup>` boşluğu; yayın sayfasında yok.

## Onay ve açık işler

- Hareket bölümündeki birinci tekil cümleler Ersin Saraç'ın 14 Ekim tarihli yanıtının düzenlenmiş hâlidir; yazar formunda bu cümleler ayrıca gösterilmeli. "İçiniz rahat olsun diye ekleyeyim" cümlesi de onun ağzından; onaylamazsa üçüncü şahsa dönebilir.
- Yazara isteğe bağlı soru (gövdeye değer katar, cevap gelmeden eklenmez): "Denge kaygısıyla gelen 40+ bir kadına ilk görüşmede hangi günlük işi sorarak başlıyorsunuz?" → `denge-guven` bölümü.
- Tıbbi inceleme (`medicalReviewer: pending`), kontrol formu, `teknik-kontrol.json` ve `makale.html` önizlemesi revizyon 6 hash'iyle yeniden üretilmeli.
- Madde 8 yayın entegrasyonunda.

Commit, push ve yayın yapılmadı. `releaseAuthorized: false`.
