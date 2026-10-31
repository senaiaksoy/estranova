# Hormon tedavisi karar rehberi — 31 Ekim 2026

## Sonuç ve onay

Onaylı revizyon yerel kaynak dosyalarına aktarıldı. Kullanıcı bu sohbette “evet onaylar tamam commit” diyerek Dr. Senai Aksoy yazar onayı ve Dr. Alper Mumcu bağımsız tıbbi inceleme onayının tamamlandığını bildirdi. Bu, kullanıcı-bildirimli onaydır; ayrı imzalı yazılı inceleme belgesi alınmadı. Yetki yalnız yerel commit; push/deploy yapılmadı.

Makale SHA-256: `e15caaaa3201696e5c84ce7b72021bafc3a23e65b2fa20bdc0c6b7e916883f77`.

İlk yayın 20 Nisan 2026 olarak korundu. Güncelleme ve bağımsız inceleme tarihi 31 Ekim 2026. 4 Mayıs imza geçişi ve 30 Eylül inceleme geçmişi korundu; yeni onay eski tarihten türetilmedi. Ayrıntılı kayıt: `icerik/yazar-onaylari/senai-aksoy/klinik-katkilar/2026-09-28_hormon-tedavisi-karar-rehberi.json`, `october31Revision`.

## Değişiklikler

- Kısa Klinik Yanıt beş cümleden ikiye indirildi.
- Perimenopozda tedavi değerlendirmesi ve MHT'nin gebelikten korunma sağlamaması açıklandı.
- Planlı kanama, ilk altı ay / doz-preparat değişikliğinden sonraki üç ayda plansız kanama, bu süreler dışındaki kanamada gecikmeden değerlendirme ve yoğun/uzamış kanamada beklememe ayrıldı.
- İzlem ayrı H2'ye taşındı; eski anchor'lar ve TOC tutarlılığı korundu. Hormonsuz seçenekler Karar Planı altında kaldı.
- Kalp-damar hastalığı/demans önleme amacıyla hormon başlanmaması açıklandı.
- Çalışma terimi ve bilişsel davranışçı terapi sade açıklandı; kaydı bulunmayan “muayene odasında en sık duyduğum” genellemesi çıkarıldı. Yeni klinik anekdot yok; mizah H0.
- Tekrarlanan lokal seçenek paragrafı somut görüşme hazırlığına çevrildi. Beş gerçek SSS yanıtı ve imzalı editör notunun metni değişmedi.
- Kaynak [2], korunma kılavuzuna çevrildi ve yalnız ilgili yeni iddiaya bağlandı. Endometrium koruması mevcut NAMS/NICE kaynaklarına bağlı kaldı. ACP 2026 resmî öneri özeti [11] ve BMS kanama kılavuzu [12] eklendi.
- Şema citation alanı gerçek kaynak URL'leri taşıyor; meta/RSS açıklaması eşitlendi.
- Kanonik article:images ile 1200×1500 byline ve 2400×1000 kart üretildi, görseller incelendi ve IPTC AI etiketi eklendi. Üst hero değişmedi; kart eşleştirmesi yalnız articleCardImageByRoute üzerinde güncellendi.

## Anlam ve tekrar kontrolü

| Ana sonuç | Önce | Sonra | Gerekçe |
|---|---:|---:|---|
| Başlama zamanında yaş ve menopozdan geçen süre | 3 | 2 | Ayrıntı gövde ve gerçek SSS'de; özet tekrarı çıkarıldı. |
| Yalnız vajinal yakınmada lokal seçenek yeterli olabilir | 5 | 4 | Karar Planı tekrarı çıkarıldı; bağımsız SSS yanıtları korundu. |
| Mikronize progesteronun meme kanseri açısından üstün güvenliği kesin değil | 2 | 2 | Gövde kanıt sınırı ve imzalı inceleme notu. |

Mevcut 60 yaş/10 yıl/40 yaş eşikleri, üç aylık-yıllık izlem, WHI popülasyonu ve yaklaşık yedi yıllık kullanım, Cochrane etki cümlesi, meme kanseri/pıhtı istisnaları korundu. Yeni altı/üç ay kanama eşikleri kaynaklı eklemedir. check-fidelity farkları çıkarılan özet tekrarı, kaynak künyeleri ve yeni atıflarla eşleştirildi. Kaynaklar aşağıdadır; Türkiye ürün ruhsat/erişim bilgisi hakkında yeni iddia eklenmedi.

## Doğrulama

- npm run lint: geçti.
- npm run build: geçti (141 sayfa; encoding, renk, lexicon ve tarih prebuild kontrolleri dahil).
- npm run compliance: geçti; hedef dışındaki iki peptit yazısının mevcut uzun cümle uyarıları kaldı.
- npm run articles:audit:templates: geçti; eski yönlendirilen kemik makalesinin manifest uyarısı hedef dışı.
- npm run seo:audit: geçti (163 çıktı sayfası).
- Tek H1, canonical, tüm iç anchor'lar, eski yayın/yeni değişiklik tarihleri, Dr. Alper Mumcu inceleyici kimliği, beş görünür SSS/FAQPage eşleşmesi ve değişmemiş SSS veri dosyası doğrulandı.
- Üst hero, şema görseli, iki crop boyutu, IPTC etiketi ve makale/onay hash eşleşmesi doğrulandı.
- Taslakta editorial-check 0 aday verdi; structure-check ve check-fidelity çalıştırıldı. Kısa cümleler anlamlı koşul/uyarı veya hekim sesi taşıdığı için korundu; kaynakça künyeleri ritim sayımına dahil edilmedi. Sade metin çıkarımındaki link/nokta boşlukları HTML hatası değil.
- rendered-check adayları elle değerlendirildi: Dr. Alper Mumcu adı görünür; anonim inceleyen uyarısı yanlış pozitif. Numaralı atıflar mevcut; uncited-source sezgisi bu sitede geçersiz. Genel disclaimer ve özel kanser/pıhtı güvenlik sınırı farklı işlev taşıyor.
- Tarayıcı bağlantısı kurulamadığı için mobil/masaüstü sayfa ekranı ve performans ölçümü tamamlanmadı. İki görsel dosyası doğrudan incelendi.

## Kaynaklar ve erişim sınırı

- NICE NG23, 15 Nisan 2026: https://www.nice.org.uk/guidance/ng23/chapter/Recommendations
- CoSRH/FSRH, Mayıs 2025, bölüm 7: https://www.cosrh.org/Common/Uploaded%20files/documents/fsrh-guideline-contraception-for-women-aged-over-40-years.pdf
- ESE 2025: https://doi.org/10.1093/ejendo/lvaf206
- ACP, 5 Ekim 2026 resmî öneri özeti: https://www.acponline.org/acp-newsroom/acp-recommends-hormonal-therapy-as-a-first-line-treatment-for-menopausal-vasomotor-symptoms
- BMS, Mayıs 2026 gözden geçirme: https://thebms.org.uk/publications/bms-guidelines/management-of-unscheduled-bleeding-on-hormone-replacement-therapy-hrt/

IMS'nin yeni tam metni ve ACOG 2026 tam metni erişim engelleri nedeniyle bütünüyle doğrulanamadı; okunmuş gibi kaynakçaya eklenmedi. Kullanılan 2026 kapsamı yukarıdaki erişilebilir kaynaklarla sınırlıdır.
