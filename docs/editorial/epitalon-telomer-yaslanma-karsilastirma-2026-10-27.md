# Epitalon ve telomer biyolojisi: peptid yazısıyla karşılaştırma ve değişiklik planı

Tarih: 27 Ekim 2026. Yetki: Dr. Aksoy'un 27 Ekim 2026 talimatı ("aynı akışla epitalon yazısına geç"). Bu not makaleyi değiştirmez; yazıya geçmeden önce onay gerekir.

- **Hedef:** `src/pages/bilimsel-pencere/hucreler-ve-yaslanma/epitalon-telomer-yaslanma.astro`.
  - Son içerik değişikliği 12 Ekim 2026 (`e3e64ccf`, `835bdf55`, `14e8dbd0`).
  - Yazar `senai-aksoy`, tür `clinical-guide`. Bilimsel Editör Notu imzası Dr. Alper Mumcu (KC beyanı).
  - Gövdede onaylı hekim birinci tekili var ("Otuz yıldır kadın sağlığının içindeyim…") ve "Dr. Aksoy'a sorular" bölümünde 5 hekim yanıtı.
- **Karşılaştırılan yazı:** `src/pages/zamansiz-yasam/deneysel/peptid-kullanimlari-menopoz.astro` (epitalon bölümü ve FDA bölümü).
- **Araştırma tabanı:** `docs/editorial/peptid-kullanimlari-menopoz-arastirma-2026-10-26.md`. Eksikler ayrıca tarandı (aşağıda).
- **Skill:** `estranova-deneysel-molekul`, karışık durum (PR #57).

## 1. Roller

| | Bilimsel Pencere (bu yazı) | Peptid yazısı |
|---|---|---|
| Ana soru | Telomer biyolojisi ve epitalonun hücre verisi neyi gösteriyor; ALT sorusu | Sekiz peptid için "almalı mıyım", ruhsat, FDA süreci |
| Kendine özgü içerik | Telomer ve menopoz (Dalgård 2015); Al-dulaimi 2025 hücre çalışması ve ALT; epitalon ile epithalamin ayrımı; telomer testi | Kanıt tablosu, iddia tablosu, beş eksen, WADA, genel FDA ve TİTCK süreci |
| Epitalon örtüşmesi | Epitalon FDA belgesi bu yazıda ayrıntılı | Bir alt bölüm ve tablo satırları |

Devir notundaki "peptid yazısı GHK-Cu yazısına tek yönlü bağlanıyor" bilgisi epitalon için de geçerli değil: bu yazının RelatedReadings listesinde peptid yazısı **yok**. Peptid yazısındaki epitalon bölümünde de bu yazıya bağlantı yok. İki yönlü bağlantı eksik.

## 2. Doğrulamalar (yazıdaki mevcut iddialar)

| İddia | Sonuç |
|---|---|
| Kaynak 4, FDA dosyası (media/193345): "insanlarda güvenliğini inceleyen klinik çalışma bulunamadı" | **Doğru.** Dosya epitalon dosyası. "Clinical Studies Assessing Safety" bölümü (s. 36) bunu birebir söylüyor. FAERS'te rapor yok. Farmakokinetik veri yok. |
| FDA: uykusuzluk için etkinliği destekleyen yeterli veri yok | **Doğru** (s. 28: "lack of evidence to support the effectiveness… for insomnia"). |
| Düzeltme notu (15 Kasım 2025): "yalnızca şekiller değişti, sonuçlar aynı kaldı" | **Yarısı doğrulandı.** Düzeltme metni (PMC12619744), Şekil 1, 2 ve 3'te yanlış sürümlerin yer aldığını ve doğru şekillerin onların yerine geçtiğini söylüyor. "Sonuçlar aynı kaldı" ifadesi düzeltme metninde **yok**. Araştırma notu da düzeltmenin içeriğinin okunmadığını söylüyordu. |
| Peptid yazısındaki FDA bağlantısı (media/193342) | Ayrı belge: 7 maddenin ortak bilgilendirmesi. Bu yazıdaki 193345 epitalona özgü. İkisi birbirinin yerine geçmez; değişiklik gerekmez. |

**Öneri:** Kaynaklar bölümündeki cümleyi "Düzeltme, Şekil 1–3'ün yanlış sürümlerinin değiştirildiğini bildiriyor" diye daraltmak. "Sonuçlar aynı kaldı" çıkar. Bu, onaylı metindeki bir iddiayı değiştirdiği için onayınızı bekliyor.

## 3. Eksikler

| Eksik | Bu yazıdaki durum | Öneri |
|---|---|---|
| Kanıt merdiveni | Yok. "Mevcut Kanıt Düzeyi" bölümü hücre/insan ayrımını anlatıyor ama basamak basamak değil. | İkinci sırada kısa bir H2, altı basamak, her basamağa bir cümle. |
| İnsandaki biyobelirteç çalışması | Yok. FDA dosyası (s. 26) 40–50 yaşında 75 kadında (gece vardiyası) 20 gün dil altı AEDG ile randomize plasebo kontrollü bir çalışmayı özetliyor: idrarda melatonin metaboliti 1,7 kat arttı. Uyku ölçülmedi, güvenlik verisi bildirilmedi. | Menopoz yaşındaki kadınlara en yakın insan verisi. Merdivende "insanda biyobelirteç" basamağında tek cümleyle, FDA dosyası [4] üzerinden anılır. PubMed'de PMID 33280326 (Ivko 2020, Adv Gerontol) aynı grubun çalışması; FDA'nın "Ivko 2021" dediği çalışmayla aynı olduğu doğrulanmadı. Bu yüzden ayrı kaynak olarak eklenmez. |
| Hayvanda ömür | "Hayvan deneylerinde yaşam süresi… araştırıldı" cümlesi var, kaynağı yalnızca FDA dosyası. | ITP kaydı bulunamadı (peptid notu: ITP'nin kendi test listesi ayrıca kontrol edilmedi). Merdivende "bilinmiyor / kontrol edilemedi" yazılır; "test edilmedi" denmez. |
| FDA, Nisan ve Temmuz 2026 | Yazı yalnızca Temmuz bilgilendirme dosyasına atıf yapıyor. Kurulun oyu, Nisan'daki çıkarma ve nihai karar durumu yok. | Tek paragraf: 15 Nisan 2026'da epitalon "ciddi güvenlik endişesi" listesinden çıkarıldı (başvuru geri çekildi, hazırlanabilir değil). 23–24 Temmuz 2026'da FDA personeli listeye alınmamasını önerdi; kurul bağlayıcı olmayan oyla çoğunlukla (uykusuzluk için) listeye almayı önerdi; nihai karar 26 Ekim 2026 itibarıyla yok. Tek tek oy sayısı yazılmaz (kaynaklar 7–4 ve 7–5 diye ayrışıyor, FDA tutanağı okunmadı). Genel süreç için peptid yazısına bağlantı. |
| Türkiye | "Ruhsat durumunu bu yazıdan çıkarmayın" cümlesi var. | TİTCK'nin 16 Ekim 2026 listesinde epitalon etkin maddeli ruhsatlı ürün yok; Bakanlığın 21 Ekim 2026 kısıtlı maddeler listesinde epitalon geçmiyor (izin anlamına gelmez). Ayrıntı için peptid yazısına bağlantı. |
| Süren çalışmalar | Yok | ClinicalTrials.gov'da epitalon için kayıtlı çalışma yok (27 Ekim 2026 yeniden arandı; yalnızca topikal bir karışım serumu çalışması çıktı, NCT07888595: beş peptid ve sistemik ilaçlar birlikte, epitalonun etkisi ayrışmıyor, yazıya alınmaz). |
| 2026 derlemesi | Yok | Jain 2026 (*Int J Mol Sci*, PMID 42884164): "biyolojik olarak etkin, klinik olarak kanıtsız". Tek cümle ve kaynak. Peptid yazısıyla ortak kaynak. |
| Menopoz | Menopoz ve telomer (Dalgård) paragrafı ve SSS'de ilk soru var; ClinicalTrials.gov bilgisi yok. | Tek cümle: menopoz koşuluyla kayıtlı epitalon çalışması yok. |
| Bilinmeyenler | Ayrı bölüm yok. | Kapanıştan önce kısa bir H2: insanda uzun dönem güvenlik; ALT sorusunun insanda yanıtı; FDA'nın nihai kararı; ölçüm. Süren epitalon çalışması olmadığı için "çalışma sonuçlanınca güncelleriz" cümlesi kurulmaz. |
| Tarihler | `modifiedDate` 12 Ekim; kanıt taraması "12 Ekim 2026" | Düzenleme günü; 27 Ekim kaynak gözden geçirmesi; Mumcu satırı yeni onay tarihi. |
| Onay kaydı | `article-approvals.ts` kaydı 8 Mayıs, 12 Ekim not içinde. | Yeni kayıtla güncellenir. |

Yazıya alınmayacak:
- **Willis 2026 (PMID 42752426)** ve **Mavrych 2026 (PMID 42021992)**: genel derlemeler, Jain 2026'dan fazlasını eklemiyor.
- **Zhang 2026, *Cell Death Dis* (PMID 42209466)**: lenfoma hücre ve fare çalışması, epitalon yalnızca araç.

## 4. Skill ile çelişen nokta: hücre ve hayvan verisindeki Evidence etiketleri

NAD+ yazısında verdiğiniz karar (hayvan ve laboratuvar verisine dayanan etiketlerin kaldırılması) bu yazıda da geçerli olur. Aşağıdaki etiketler hücre kültürü ya da hayvan verisine dayanıyor (satır numaraları geçerli dosyaya göre):

- s. 152: hayvan deneyi, `level={1}`
- s. 165: normal hücre modeli, `level={1}`
- s. 172: kanser hücre hatları, ALT, `level={1}`
- s. 188: C-halkası ölçümleri, hücre hatları, `level={1}`
- s. 205: "üç haftalık hücre deneyi", `level={1}`

**Öneri:** Beşini de kaldırmak; basamak metinde zaten yazıyor ("hücre kültüründe", "hayvan deneylerinde").

Korunacaklar:
- **İnsan verisine dayanan etiketler:** özetteki "güvenilir klinik kanıt yok" (s. 103), Dalgård kohortu `level={2}` (s. 132), FDA'ya dayanan insan verisi yokluğu (s. 214), FDA'nın enjeksiyon uyarıları (s. 231).
- **Mekanizma ve kavram etiketleri:** telomer biyolojisi (s. 119, 126), epithalamin ayrımı (s. 146), ALT'nin kanserlerdeki payı (s. 183).
- **s. 193** ("hücre deneyi insanda kanser riskini göstermez, dışlayamaz da"): insanda sonuç çıkarma sınırı olduğu için kalır.
- **SSS içindeki etiketler** hekim yanıtlarının parçası; dokunulmaz.

Bu etiketler 12 Ekim'de onaylandı. Değiştirmek için ayrıca onayınız gerekiyor.

## 5. Örtüşmeler

| Konu | Öneri |
|---|---|
| Epitalon FDA bilgilendirme dosyası | Bu yazıda ayrıntılı kalır. Peptid yazısındaki tek paragrafa bağlantı verilir. |
| Epitalon ile epithalamin ayrımı | İki yazıda da var. Kalsın; peptid yazısı bu yazıya atıf yapacak. |
| Genel FDA süreci | Bu yazıda yalnızca epitalona özgü kısım. Genel süreç için peptid yazısına bağlantı. |
| İddia tablosu | Bu yazıya eklenmez. Peptid yazısındaki satıra ("epitalon uykuyu düzeltir, telomeri uzatır") bağlantı. |
| SSS'deki "internetten epitalon almak güvenli mi?" | Hekim yanıtı. Aynen kalır; Türkiye cümlesiyle çakışırsa Türkiye cümlesi kısaltılır. |

## 6. Dokunulmayacaklar

- SSS'deki beş hekim yanıtı ve gövdedeki onaylı birinci tekil cümleler.
- Bilimsel Editör Notu metni; yalnızca Mumcu satırının tarihi güncellenir.
- Yeni hekim cümlesi ya da yeni SSS sorusu yok. Merdivendeki ve diğer yeni cümleler üçüncü şahıs ya da "biz" anlatımında kalır.
- Mizah H0. Hero parent hub'da kalır; byline ve kart görseli değişmez.
- Doz, tedarik ve marka bilgisi yazılmaz. FDA dosyasındaki çalışma dozları (0,5 mg/gün) yazıya alınmaz.

## 7. Yeni kaynaklar

11. Jain A ve ark. *Int J Mol Sci*. 2026;27(19):8922. PMID 42884164. [DOI](https://doi.org/10.3390/ijms27198922)
12. T.C. TİTCK Ruhsatlı Beşeri Tıbbi Ürünler Listesi, 16 Ekim 2026.
13. T.C. Tarım ve Orman Bakanlığı Takviye Edici Gıdalar Kısıtlı Maddeler Listesi, 21 Ekim 2026.
14. ClinicalTrials.gov, epitalon araması, 27 Ekim 2026 (kayıt yok).

Mevcut kaynak 5 (FDA güvenlik sayfası) için sayfa içeriği tarihi (22 Nisan 2026) ve erişim tarihi güncellenir. Kaynak 4 aynen kalır; "tek başına nihai karar değildir" notu korunur.

## 8. Kararınızı bekleyen noktalar

1. Plan bu hâliyle uygulansın mı?
2. Düzeltme notundaki "sonuçlar aynı kaldı" ifadesi çıkarılsın mı? (Önerim: çıkarılsın.)
3. Hücre ve hayvan verisine dayanan beş Evidence etiketi kaldırılsın mı? (Önerim: evet.)
4. Peptid yazısının epitalon bölümüne bu yazıya bağlantı bu PR'da eklensin mi?
