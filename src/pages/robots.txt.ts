import type { APIRoute } from 'astro';
import { isProductionLaunch } from '../utils/launch';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://estranova.com/').replace(/\/$/, '');

  if (!isProductionLaunch()) {
    return new Response(['User-agent: *', 'Disallow: /', ''].join('\n'), {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const lines = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap-index.xml`,
    `# RSS: ${base}/rss.xml`,
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
