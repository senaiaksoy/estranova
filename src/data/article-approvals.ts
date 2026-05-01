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
