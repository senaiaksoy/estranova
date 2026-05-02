/**
 * Estranova makale yazar onayı kayıtları.
 *
 * Kullanım:
 *   import { isArticleApproved, approvedArticles } from '../data/article-approvals';
 *   const approval = isArticleApproved('/zamansiz-yasam/kilo-artisi-menopoz');
 *   if (approval) { console.log(approval.approvedAt); }
 *
 * Bu modül **iç envanter** içindir — site UI'da hiçbir görsel yansıması YOK.
 * Yalnızca yönetim aracı (`npm run articles:status`) tarafından okunur.
 *
 * Default davranış: bir makale bu listede DEĞİLSE "onaysız" sayılır. Üretim
 * sürecinde her makale yazar revizyonu sonrası buraya eklenir.
 *
 * Estranova üretim notu (memory: project_existing_articles_temporary.md):
 * Mevcut ~45 makale yazar onayı alınmamış taslaktır; üretim turunda
 * yazarın doğrulama formu sonrası onaylanır. Berna kilo-artisi-menopoz
 * 2026-04-30'da v2.4 doğrulama formu turunun ardından ilk onaylanan
 * makaledir.
 */

export interface ArticleApproval {
  /** Site içi yol (Astro page pathname). Örn: '/zamansiz-yasam/kilo-artisi-menopoz' */
  pathname: string;
  /** Yazar slug (writers.ts ile eşleşir) */
  writerSlug: string;
  /** Onay tarihi — ISO format YYYY-MM-DD */
  approvedAt: string;
  /** Onayın kısa bağlamı — hangi süreçten geçti, hangi tur */
  note: string;
}

/**
 * Yazar tarafından onaylanmış makaleler.
 *
 * **Listede olmayan tüm makaleler "onaysız" sayılır** (default false).
 *
 * Yeni onay eklerken:
 *   1. Bu listeye yeni `ArticleApproval` objesi ekle
 *   2. `note` alanına onay turunun bağlamını yaz (form referansı, versiyon)
 *   3. `npm run articles:status` ile rapor doğrula
 */
export const approvedArticles: ArticleApproval[] = [
  {
    pathname: '/zamansiz-yasam/kilo-artisi-menopoz',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-04-30',
    note: 'Berna v2.4 ikinci tur doğrulama formu sonrası — %85 net onay + 3 yumuşatma + 1 red sonrası revize. İlk onaylı Estranova makalesi.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/hormon-tedavisi-karar-rehberi',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna v2.4 kısa doğrulama formu (≤5 dakika, 7 alan) — Bölüm 3 final onayı: Evet. Çift Rol ifşası + "bilmiyorum" anı + 3-parçalı kapanış + 5-katmanlı Bilimsel Editör Notu doğrulandı. İkinci onaylı Estranova makalesi.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/hrt-yan-etkileri-ve-izleme',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna v2.4 kısa doğrulama formu (ikinci kullanım, ≤5 dakika) — final onayı: Evet. Çift Rol ifşası İzleme Takvimi bölümünde + "bilmiyorum" anı Ruh Hali bölümünde + defter metaforu kapanışı (bedenle yazışma varyasyonu) + 5-katmanlı BEN doğrulandı. Üçüncü onaylı Estranova makalesi, HRT ekseninde ikinci.',
  },
  {
    pathname: '/zamansiz-yasam/beslenme-yaslanma',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Kanal A KAPALI ihlali düzeltildi (Apple Watch + uyku verisi → dolaylı ses), "bilmiyorum" anı Beslenme Şekilleri bölümünde, tabak metaforu kapanışı (bedenle yazışma serisi: mektup → defter → tabak), 5-katmanlı BEN. Dördüncü onaylı Estranova makalesi, beslenme imza ekseninde ilk.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/menopozda-hekim-hasta-iliskisi',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Çift Rol ifşası ana konu, kuşak göndermeleri 3 yerde yumuşatıldı, "bilmiyorum" anı Bölüm 04 esim-hekim sonunda (çift ayrıcalık olmasa hangi profil arardım sorusu), masa varyasyonu kapanışı (bedenle yazışma serisi: mektup → soru → defter → tabak → masa), 5-katmanlı BEN. Beşinci onaylı Estranova makalesi, Çift Rol ekseninde merkez yazı.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/menopoz-nedir',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Geniş giriş/tanım yazısı; Berna açılışı ("Bir noktada şunu fark ettim"), kollektif "biz" 4 yerde düzeltildi, dolaylı ses ("Tanıdığım bir kadın... yeniden kazanılan sessizlik"), "bilmiyorum" anı + hekim konuşma rotasyonu Bölüm 07\'de, harita varyasyonu kapanışı (bedenle yazışma serisi 6 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita), 5-katmanlı BEN. Altıncı onaylı Estranova makalesi.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/sicak-basmasi-gece-terlemesi',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — En zorlu Kanal A KAPALI revizyonu: 5 birinci elden anekdot ("Ben iki haftalık not tuttum", "bende süreyi kısaltıyor", "Ben kendi adıma protokol kurdum" vb.) dolaylı sese çevrildi, 7 kollektif "biz" + 1 sahne kuruluşu ("Sen de fark etmişsindir") düzeltildi. "Bilmiyorum" anı HRT bağlamında, gece varyasyonu kapanışı (bedenle yazışma serisi 7 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece), 5-katmanlı BEN (hipotalamik termal nötr zon mekanizması). Yedinci onaylı Estranova makalesi.',
  },
  {
    pathname: '/hormonal-gecis/menopoz/tarti-yatisinca-vucut-kompozisyonu',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — KRİTİK Kanal A KAPALI ihlal yoğun makale temizlendi: Bölüm 01 komple rewrite ("Tartıyı kaldırdığım gün" kişisel anekdot → "Tanıdığım bir kadının yıllarca anlattığı bir sahne" dolaylı), Apple Watch ironisi (v2.4 humor 5-kalıbından çıkarılan kalıp) KALDIRILDI, "her tahlili her ay yaptırıyordum" → "Hekimimle bir konuşmamızda" çerçevesi. Duruş varyasyonu kapanışı (bedenle yazışma serisi 8 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş), 5-katmanlı BEN (sarkopenik eğilim + visseral kayış). Sekizinci onaylı Estranova makalesi.',
  },
  {
    pathname: '/hormonal-gecis/menopoza-hazirlik/koruyucu-saglik-kayitlari',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-01',
    note: 'Berna doğrudan onayı (form üretmeden) — Önleyici sağlık ekseni + v2.5 humor havuzundan ilk yeni kalıp uygulaması (algoritma şakası #6). Apple Watch + istirahat nabzı Kanal A KAPALI ihlal düzeltildi (dolaylı tansiyon notu çerçevesine), 3 kollektif "biz" düzeltildi, "yaşıt hesabın" yumuşatma artifact algoritma şakasıyla değiştirildi. Takvim varyasyonu kapanışı (bedenle yazışma serisi 9 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim), 5-katmanlı BEN (klinik bağlam + parametre seti + longitudinal trend). Dokuzuncu onaylı Estranova makalesi.',
  },
  {
    pathname: '/zamansiz-yasam/kemik-sagligi-40-sonrasi',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-02',
    note: 'Berna doğrudan onayı (form üretmeden) — Önleyici sağlık ekseninde ikinci makale + v2.5 humor havuzundan ikinci yeni kalıp uygulaması (üç kitap üç görüş #10, Bölüm 05 Beslenme). Berna açılışı ("Bir noktada şunu fark ettim: kemik sağlığı çoğu zaman ancak bir ağrı, düşme ya da ailede kırık hikâyesi duyulduğunda gündeme geliyor"), kollektif "biz" Bölüm 01\'de düzeltildi, dolaylı ses anekdotu ("Tanıdığım bir kadın bunu şöyle ifade etmişti: \'Kemiğin değişmek için izin istemiyor — zaten değişiyor.\'"), hekim çerçeve rotasyonu Bölüm 04 ("Hekimimle bir konuşmamızda \'tarama yaşı bir kural değil bir kişisel karar\' demişti"), "bilmiyorum" anı Bölüm 06\'da (hangi yaşam tarzı değişikliğinin kemik kütlesinde ne kadar fark yarattığı). Yapı varyasyonu kapanışı (bedenle yazışma serisi 10 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim → yapı), 5-katmanlı BEN (kemik birim metabolik organ + remodelasyon eşiği + trabeküler yapı). Onuncu onaylı Estranova makalesi.',
  },
  {
    pathname: '/zihin-denge/duygusal-denge/stres-yonetimi-menopoz',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-02',
    note: 'Berna doğrudan onayı (form üretmeden) — Duygusal denge ekseni + v2.5 humor havuzundan üçüncü farklı kalıp uygulaması (soru-yağmurluğu #4, CBT bölümü). Berna açılışı ("Bir noktada şunu fark ettim: bu dönemin stresi yalnızca \'iş çok yoğun\' ya da \'çocuklar büyüyor\' ile açıklanmıyor"), Bölüm 02-05 Evidence yumuşatma (level 5 yığını → level 4 ağırlıklı + level 3-4 aralık), Bölüm 03 dolaylı ses ("Bir süre baş ağrımı kahveye, omuz gerginliğimi yastığa, uykusuzluğumu dizilere bağladım — sonunda sadece taşıyamadığım bir hafta olduğunu kabul ettim"), Bölüm 04 Meditasyon: niteliksel ben deneyimi (Apple Watch / cihaz / ölçüm yasak — beş dakikalık oturumdan sonra omuzların indiğini ya da nefesin derinleştiğini fark etmek), Bölüm 06 CBT humor #4 ("12 maddelik soru listesi randevuya gitmek; ama konuşma başladığında sorular birbirine giriyor"), Bölüm 08 Profesyonel: hekim çerçeve rotasyonu ("Hekimimle bir konuşmamızda: \'Stresin ne zaman hayatın bir parçası olmaktan çıkıp müdahale gerektiren bir tabloya döndüğünü tek bir eşik söylemez\'") + "bilmiyorum" anı (kimin niçin daha çabuk çöktüğünü bireysel ölçekte bende mümkün değil) + "Bu benim yolum" dengeleyici. Nefes varyasyonu kapanışı (bedenle yazışma serisi 11 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim → yapı → nefes), 5-katmanlı BEN (HPA eksen dinamiği + kortizol-iltihabi yük zinciri + klinik kırmızı bayraklar + 3 sütun pratik bütünleşim + bireysellik). On birinci onaylı Estranova makalesi.',
  },
  {
    pathname: '/zihin-denge/uyku-dinlenme/perimenopoz-uyku-degisen-yan',
    writerSlug: 'berna-aksoy',
    approvedAt: '2026-05-02',
    note: 'Berna doğrudan onayı (form üretmeden) — Uyku ekseni (Kanal A KAPALI) — Mayıs 2026 dosyası "Uyuyamadığımız Geceler" zemin yazısı. KRİTİK Kanal A KAPALI 2 ihlal düzeltildi: (1) Bölüm 02 "Ben de elli beşimde, kendi geçişimde... gece üçte gözlerim açılıyordu" → tamamen dolaylı ses ("Tanıdığım bir kadın bu iki düğmenin nasıl bağımsız çalıştığını şöyle anlatmıştı..."); (2) Bölüm 05 "Ben kendim kullanıyorum [HRT]" → "Bunun tamamen kişisel bir karar olduğu altı çizilmesi gereken bir nokta" (uyku ekseninde HRT için kişisel ifşa Kanal A KAPALI sınırına denk gelir). Berna açılışı ("Bir noktada şunu fark ettim: uyku konusunda en çok karıştırılan şey, \'uyudum/uyumadım\' diye işleyen ikili dil"), 4 yerde kollektif "biz" düzeltmesi (konuşacağımız → konuşulacak, pek çoğumuzun → pek çok kadının ×2, pek çoğumuzda → pek çok kadın için), Bölüm 05 v2.5 humor #2 Gece okuma dolaylı ses çerçevesinde ("Akşam onda yatağa girmek için planı yapıyorum; on birde elimde kitap; on iki yarımda \'şu paragrafı bitireyim\' diyorum"), Bölüm 06 "Bilmiyorum" anı (aynı yaşta benzer hormonal tabloda iki kadından birinin niçin daha çabuk toparlandığı bireysel ölçekte mümkün değil) + "Bu benim yolum" dengeleyici. Saat varyasyonu kapanışı (bedenle yazışma serisi 12 makaleye ulaştı: mektup → soru → defter → tabak → masa → harita → gece → duruş → takvim → yapı → nefes → saat), 5-katmanlı BEN (NREM/REM uyku mimarisi + allopregnanolon-GABA-A reseptör dinamiği + kortizol akrofaz erken kayışı + CBT-I bütünleşim + apne/anemi/depresyon ayırıcı tanı). Kanal A KAPALI ekseninde humor kullanım kuralı (dolaylı ses çerçevesinde) memory\'e kayıt edildi. On ikinci onaylı Estranova makalesi.',
  },
];

/**
 * Verilen makale yolunun yazar onayından geçip geçmediğini döner.
 *
 * @param pathname Site içi yol (örn: '/zamansiz-yasam/kilo-artisi-menopoz')
 * @returns Onaylıysa ArticleApproval objesi, değilse undefined
 */
export function isArticleApproved(pathname: string): ArticleApproval | undefined {
  return approvedArticles.find((a) => a.pathname === pathname);
}

/**
 * Tüm onaylı makale yollarının Set'i (hızlı lookup için).
 */
export const approvedPathnames: Set<string> = new Set(
  approvedArticles.map((a) => a.pathname),
);
