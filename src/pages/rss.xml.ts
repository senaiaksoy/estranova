import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { staticArticles } from '../data/static-articles';
import { toISODate, getWriter } from '../utils/article-schema';
import { resolveSiteUrl } from '../utils/seo';

export async function GET(context: APIContext) {
  const siteUrl = resolveSiteUrl(context.site);

  const items = staticArticles.map((article) => {
    const writer = getWriter(article.writerSlug);
    return {
      title: article.title,
      description: article.description,
      pubDate: new Date(`${toISODate(article.publishedDate)}T09:00:00+03:00`),
      link: article.path,
      categories: [article.section],
      author: `editorial@estranova.com (${writer.displayName})`,
      customData: article.keywords
        .map((k) => `<category>${escapeXml(k)}</category>`)
        .join(''),
    };
  });

  return rss({
    title: 'Estranova — Editöryal Kadın Sağlığı Yayını',
    description:
      'Perimenopoz, menopoz ve 40+ kadın sağlığı üzerine tıbben gözden geçirilmiş editöryal içerikler. Sakin, kesin, güven veren rehberlik.',
    site: siteUrl,
    items,
    customData: `
      <language>tr-TR</language>
      <copyright>© ${new Date().getFullYear()} Estranova</copyright>
      <managingEditor>editorial@estranova.com (Berna Aksoy)</managingEditor>
      <webMaster>webmaster@estranova.com</webMaster>
      <ttl>1440</ttl>
      <image>
        <url>${siteUrl.replace(/\/$/, '')}/favicon.svg</url>
        <title>Estranova</title>
        <link>${siteUrl}</link>
      </image>
    `,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
    },
    trailingSlash: false,
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
