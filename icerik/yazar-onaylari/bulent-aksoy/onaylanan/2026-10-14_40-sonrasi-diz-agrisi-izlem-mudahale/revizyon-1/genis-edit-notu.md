# 40 Sonrası Diz Ağrısı — audit, humanize ve düzeltme notu (aday sürüm)

- Tarih: 14 Ekim 2026
- Yazar: Prof. Dr. Bülent Aksoy (`bulent-aksoy`, `category: scientific`, klinisyen istisnası)
- Makale türü (Astro): `clinical-guide`
- Canlı rota: `src/pages/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale.astro` — **değiştirilmedi**
- Aday sürüm: `site-kaynak.astro` (bu klasörde)
- Durum: **Yazar onayı bekliyor.** Revizyon yayına alınmaz.

## 1. Yayın kapısı

Bülent Aksoy `berna-aksoy`, `alara-baykent`, `senai-aksoy` istisnasında değildir. Revizyon yalnızca yazarın "ONAYLIYORUM" yanıtı ile yayına girer (`docs/AUTHOR-APPROVAL-WORKFLOW.md`). Bu nedenle:

- Canlı Astro dosyası aynen kaldı.
- `src/data/article-approvals.ts` ve `src/data/article-faqs.ts` değiştirilmedi.
- Kontrol formu üretilmedi. Form için `docs/AUTHOR-APPROVAL-WORKFLOW.md` içindeki `author:send-for-approval` adımı kullanılır; gönderim sizin kararınızdır.
- Commit, push ve deploy yapılmadı.

## 2. Başlangıç noktası

- Onaylı sürüm: `article-approvals.ts` kaydı, 8 Mayıs 2026 (Bülent Aksoy onayı).
- Canlı Astro dosyası ile onaylı metin karşılaştırıldı: metin aynı.
- Onaydan sonraki tek değişiklik `f5954fd3` (13 Ekim 2026) commit'indeki "ilgili okumalar" bağlantısının `kemik-gucu-kirigi-beklemeden-sorulacak-sorular` adresine çevrilmesi. Metin değişikliği değildir.
- Vault'taki `wiki/sites/estranova/articles/2026-05/2026-05-08__40-sonrasi-diz-agrisi-izlem-mudahale.md` kopyası eski ve bozuk bir dışa aktarımdır (ham `<p class=...>` parçaları, yanlış başlıklar). Canlı kaynak olarak kullanılmadı.

## 3. Bulgular

| # | Konum | Bulgu | Durum |
|---|---|---|---|
| B1 | H2 başlıkları | 5 başlık soru biçiminde. Estranova kuralı: makale başına en fazla 1 soru başlıklı H2. | Düzeltildi: 4 başlık bildirim biçimine çevrildi, `id` değerleri korundu, TOC etiketleri aynı kaldı. |
| B2 | H2 lede'leri | Altı lede "X değil, Y" / "X yerine Y" antitezi kuruyordu; lede formülü tekrar ediyordu. | Düzeltildi: lede'ler doğrudan cümle, olumsuzlama ve kısa tespit karışımına çevrildi. |
| B3 | Gövde, antitez kalıbı | "değil/değildir" sözcüğü kaynakta 18 kez geçiyor (ham sayım; çoğu antitez değil). | Düzeltildi: aday metinde 5 geçiş, bunların 2'si gerçek "X değil, Y" antitezi. |
| B4 | Ritim | Düzenleme sırasında kısa cümle oranı %41'e çıktı (yazar profili 12-20 kelime ortalaması). | Düzeltildi: birleştirmelerle %22; ortalama 12,3 kelime, kaynak 12,8. |
| B5 | Okur bağı | "Mekanizmalar" ve SSS giriş bölümlerinde okura doğrudan hitap yoktu. Estranova kuralı: her H2'de en az bir yaşıt/okur bağı. | Düzeltildi: "siz" bağı eklendi (SSS giriş cümlesi, mekanizma paragrafı). |
| B6 | Kısa Özet | "Çoğu kadında … görünür": kaynaksız popülasyon genellemesi. | Düzeltildi, yumuşatıldı: "Birçok kadın … yaşar". Yazar kontrolüne açık. |
| B7 | SSS 1 | "Çoğu hastada evet" popülasyon nitelemesi eksik. | Düzeltildi (ifade): "Çoğu durumda evet". FAQ verisi senkron değil; bkz. §5. |
| B8 | SSS 3 (kilo) | "Çoğu hastada evet" kilo ile diz ağrısı ilişkisi için fazla genel. Kilo azaltmanın yararı en çok fazla kilosu olan kişilerde beklenir. | **Tıbbi düzeltme önerisi — yazar onayı gerekli.** Aday: "Fazla kilosu olan kişilerde genellikle evet." FAQ verisi senkron değil; bkz. §5. |
| B9 | Klinik not (ArticleEditorNote) | "güncel ortopedi ve rehabilitasyon kılavuzlarıyla uyumludur" iddiasına kaynak yok. | **Açık iş:** kılavuz kaynağı gerekli. Eklenmedi. |
| B10 | Kaynak bölümü | Tür `clinical-guide`. CLAUDE.md kanıtlı rejim: seçilmiş kaynak bölümü ve iddiaya bağlı dipnot klinik rehberde zorunlu. Gövdede kaynak ve dipnot yok. | **Açık iş:** kaynak seçimi yazarın ve tıbbi incelemenin işi. Kaynak uydurulmadı. |
| B11 | Kanıt etiketleri | `(kanıt 4-5)` mekanizma iddiasında. Kanıt tabanı yazarın ve incelemenin doğrulamasına bağlı. | Değişmedi. |
| B12 | "8-12 hafta" çerçevesi | Üç yerde (izlem, müdahale eşiği, SSS). Her yerde farklı işlev taşıyor. | Tekrar korundu; kaynak gerekli (B10 ile birlikte). |
| B13 | Sonuç ve Klinik not | "ilk basamakta konservatif plan" üç kez geçiyor: Kısa Özet, izlem, Sonuç; Klinik not dördüncü. | Korundu; Klinik not bir kutu özeti olarak bırakıldı. |
| B14 | Kırmızı bayrak | Liste RedFlagBox'ta, Klinik not paragraf 4'te özetliyor. | Korundu (kutu özeti). |
| B15 | Başlık ve SEO | `seoTitle`, `description` değişmedi. | Değişiklik yok. |
| B16 | Görsel | `zy-diz-agrisi-ortopedik-takip.png`: alt metin "Boğaz manzaralı sakin bir iç mekan". Görselin üretim kökeni bu oturumda doğrulanmadı. | Değişmedi. Görsel kökeni kaydı ayrıca kontrol edilmeli. |
| B17 | Dateline | Revizyon tarihi: `modifiedDate` ve `lastUpdated` = 14 Ekim 2026 (aday). | Aday dosyada eklendi. Canlıda değişmez. |

Mizah: eklenmedi. Konu ortopedik ve klinik olduğundan H0 seçildi (mizah yoğunluğu 0).
Anekdot: Eklenmedi. Yazar deneyimi üretilmedi (bkz. §6).

## 4. Önce / sonra

- Kısa Özet: "çoğu kadında bir sabah aniden başlamış gibi görünür" → "Birçok kadın 40 sonrası diz ağrısını bir sabah aniden başlamış gibi yaşar."
- Tek cümle lede: "Diz ağrısı bir rapor sonucu değil, bir işlev sorunudur; karar da işlev üzerinden kurulmalıdır." → "MR raporu dizin yapısını anlatır. Merdiven çıkıp çıkamadığınızı ya da yürürken nerede durmak zorunda kaldığınızı anlatmaz."
- Kilo SSS (aday): "Çoğu hastada evet." → "Fazla kilosu olan kişilerde genellikle evet." (popülasyon nitelemesi; onay gerekli)
- Müdahale lede: "Müdahale kararı ağrının varlığına değil, tedaviye yanıtsız işlev kaybına göre verilir." → "Karar, ağrının varlığına bakılarak verilmez; tedaviye yanıt vermeyen işlev kaybı belirleyicidir."

## 5. FAQ verisi senkron yaması (yayına girmeden önce zorunlu)

Aday gövdedeki SSS yanıtları değişti. `src/data/article-faqs.ts` içindeki `'/zamansiz-yasam/40-sonrasi-diz-agrisi-izlem-mudahale/'` kaydı da aynı metne getirilmeli; aksi halde görünür SSS ile FAQ şeması ayrışır (Estranova kuralı: aynı kaynak).

Onerilen yanıtlar (aday gövdeyle birebir):

- Q1 "Dizimde ağrı varken yürüyüş yapabilir miyim?": `Çoğu durumda evet. Süre ve tempo kişiye göre ayarlanmalıdır; ağrıyı artıran uzun yürüyüşler yerine kısa ve düzenli yürüyüşler tercih edilir.`
- Q2 "MR'da menisküs yırtığı yazıyorsa ameliyat şart mı?": `Hayır. Menisküs bulgusu klinik muayene ve işlev kaybıyla birlikte yorumlanır. Her menisküs bulgusu ameliyat gerektirmez.`
- Q3 "Kilo vermek gerçekten diz ağrısını azaltır mı?": `Fazla kilosu olan kişilerde genellikle evet. Vücut ağırlığındaki azalma, diz eklemine binen yükü azaltır ve hareket toleransını artırır.`
- Q4 "Ne kadar süre konservatif plan denenmeli?": değişmedi.

Q2 ve Q3 için yazar onayı gerekir. Q1 ifadesi yalnızca nitelemedir.

## 6. Yazara sorular (anekdot ve klinik katkı; uydurulmadı)

Persona gereği klinisyen birinci tekil ve anonim muayene gözlemi meşrudur, ama bu metne ancak yazar verirse girer. Üç soru:

1. Diz ağrısıyla gelen 40+ kadınlarda muayene odasında en sık hangi yanlış anlamayı düzeltirsiniz?
2. "Konservatif plan" dönemini hangi bulgu olduğunda kısaltıyor veya uzatıyorsunuz?
3. Kas güçlendirme dışında, bu yaş grubunda izlemde öncelikli gördüğünüz ilk iki değişken nedir?

## 7. Kontroller (skill betikleri)

Betikler `senai-humanize` skill'indeki `structure-check.mjs`, `editorial-check.mjs` ve `check-fidelity.mjs` ile, yalnızca gövde metni üzerinde çalıştırıldı (JSX özellikleri ve frontmatter kapsam dışı).

- `structure-check.mjs` (kaynak → aday): kısa cümle oranı %14 → %22; ortalama 12,8 → 12,3 kelime; kısa kapanış ailesi 3 (kasıtlı: "Görüntü tek başına yetmez.", "Ağrı tam geçmeden…", SSS yanıtı).
- `editorial-check.mjs` (aday): 0 aday.
- `check-fidelity.mjs`: bu betik izlenen değişiklik işaretlerini arar; düzenleme düz metinde olduğu için sonuç bilgilendirici değil. Anlam karşılaştırması aşağıda elle yapıldı.
- `rendered-check.mjs`: derlenmiş sayfa yok (aday rota dışında). Çalıştırılmadı.

Anlam kaydı (elle):

- Sayılar korundu: 8-12 hafta (3 yer), 15 dakika, 2-3 ay, 5 belirti, 4 soru.
- Değiştirilen modal: hiçbiri güçlendirilmedi. "ilk yaklaşım çoğu zaman konservatif izlem olmalıdır" korundu.
- Yumuşatılan: "çoğu kadında … görünür" → "birçok kadın … yaşar" (kaynaksız popülasyon ifadesi).
- Daraltılan (onay gerekli): kilo SSS (B8).
- Eklenmeyen: kaynak, ilaç, doz, klinik deneyim, yeni tanı.

## 8. Açık işler (yazar veya tıbbi inceleme)

1. Kaynak bölümü ve dipnotlar (B9, B10): kılavuz ve derleme seçimi.
2. Kilo SSS nitelemesi (B8) ve FAQ senkronu (§5).
3. Kısa Özet popülasyon ifadesi (B6): onay sırasında kontrol.
4. Görsel köken kaydı (B16).
5. Yazar onayı: "ONAYLIYORUM" olmadan aday canlıya alınmaz.
