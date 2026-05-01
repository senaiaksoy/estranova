/**
 * Site içi arama için statik index.
 * - "Sayfa": ana sayfa, manifesto, hakkımızda, yayın-kurulu, library, symptoms vb.
 * - "Kategori": 5 hub + 17 alt-hub framework sayfası
 * - "Makale": static-articles manifest'inden gelen 17+ makale
 *
 * Bu index build-time'da derlenir; SearchOverlay onu client-side filtre eder.
 */

import { mainNav } from './navigation';
import { chapterMap } from './chapter-map';
import { staticArticles } from './static-articles';
import { issues, formatIssuePad } from './issues';
import { writers } from './writers';
import { magazineConfig } from './magazine-config';

export interface SearchItem {
  title: string;
  description: string;
  href: string;
  category: 'Sayfa' | 'Kategori' | 'Makale' | 'Semptom' | 'Sayı' | 'Yazar';
}

const staticPages: SearchItem[] = [
  {
    title: 'Anasayfa',
    description: 'Estranova editöryel sağlık platformu — perimenopoz, menopoz ve 40+ kadın sağlığı.',
    href: '/',
    category: 'Sayfa',
  },
  {
    title: 'Manifesto — Bu Masada Neden Varız',
    description: 'Estranova\'da yazan kadınlar neden burada yazıyor? Açılış sözleri.',
    href: '/manifesto',
    category: 'Sayfa',
  },
  {
    title: 'Hakkımızda',
    description: 'Estranova\'nın editöryel yaklaşımı, misyonu, değerleri.',
    href: '/hakkimizda',
    category: 'Sayfa',
  },
  {
    title: 'Yayın Kurulu',
    description: 'Editörler, yazarlar, tıbbi danışmanlar ve danışman ekip.',
    href: '/yayin-kurulu',
    category: 'Sayfa',
  },
  {
    title: 'Editöryal Politika',
    description: 'Estranova\'nın içerik üretim ilkeleri ve inceleme süreci.',
    href: '/editoryal-politika',
    category: 'Sayfa',
  },
  {
    title: 'Yazarlar',
    description: 'Estranova\'da yazan editörler ve konuk yazarların bibliyografisi.',
    href: '/authors',
    category: 'Sayfa',
  },
  {
    title: 'Editöryal Kütüphane',
    description: 'Tüm makalelerin tarihe göre listelendiği editöryal arşiv.',
    href: '/library',
    category: 'Sayfa',
  },
  {
    title: 'Semptom Rehberi',
    description: 'Sıcak basması, uyku, ruh hali, bellek ve diğer belirtilere giriş.',
    href: '/symptoms',
    category: 'Sayfa',
  },
  {
    title: 'İletişim',
    description: 'Estranova editöryel ekibiyle iletişim.',
    href: '/iletisim',
    category: 'Sayfa',
  },
  {
    title: 'Tıbbi Sorumluluk Reddi',
    description: 'Estranova içeriklerinin bilgi amaçlı olduğuna dair sorumluluk reddi.',
    href: '/tibbi-sorumluluk',
    category: 'Sayfa',
  },
];

// 5 ana hub girişi (chapter-map'te yok, navigation'dan gelir)
const hubEntries: SearchItem[] = mainNav
  .filter((n) => n.children && n.children.length > 0)
  .map((n) => ({
    title: n.name,
    description: n.label,
    href: n.href,
    category: 'Kategori' as const,
  }));

// 17 alt-hub framework sayfası
const subHubEntries: SearchItem[] = Object.values(chapterMap).map((entry) => ({
  title: `${entry.parent} · ${entry.chapter}`,
  description: `Bölüm ${entry.number} — ${entry.parent} kategorisinde alt başlık.`,
  href: entry.href,
  category: 'Kategori' as const,
}));

// 17+ makale (static-articles manifest)
const articleEntries: SearchItem[] = staticArticles.map((a) => ({
  title: a.title,
  description: a.description,
  href: a.path,
  category: 'Makale' as const,
}));

// Eşik dergi sayıları — numerik sayılar (Sayı 0 = arşiv, Sonra Oku gibi
// özel sayfalardan ulaşılır; arama sonuçlarında ana hedef yayınlanmış
// sayılar)
const issueEntries: SearchItem[] = issues
  .filter((issue) => issue.number > 0)
  .map((issue) => ({
    title: `${magazineConfig.name} · Sayı ${formatIssuePad(issue.number)} — ${issue.theme}`,
    description: `${issue.monthYear} sayısı: ${issue.lede}`,
    href: `/sayi/${issue.slug}`,
    category: 'Sayı' as const,
  }));

// Yazar profilleri — 11 yazar; bilimsel editör (senai-aksoy) için
// "Doç. Dr." önekiyle birlikte ayrı eklenmiyor (zaten writers.ts'te var
// ama görünür ad farklı). Senai için arama sonucunda "Doç. Dr. Senai
// Aksoy" gözüksün.
const writerEntries: SearchItem[] = writers.map((w) => {
  const displayName = w.slug === 'senai-aksoy' ? 'Doç. Dr. Senai Aksoy' : w.displayName;
  return {
    title: displayName,
    description: w.signaturePhrase,
    href: `/yazarlar/${w.slug}`,
    category: 'Yazar' as const,
  };
});

export const searchIndex: SearchItem[] = [
  ...staticPages,
  ...hubEntries,
  ...subHubEntries,
  ...issueEntries,
  ...writerEntries,
  ...articleEntries,
];
