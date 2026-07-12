import type { APIRoute } from 'astro';
import { isProductionLaunch } from '../utils/launch';
import { scheduledReleasePaths, todayInTurkeyISO } from '../data/scheduled-releases';

export const GET: APIRoute = ({ site }) => {
  const base = (site?.href ?? 'https://estranova.com/').replace(/\/$/, '');

  if (!isProductionLaunch()) {
    return new Response(['User-agent: *', 'Disallow: /', ''].join('\n'), {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const today = todayInTurkeyISO();
  const futureDisallows = scheduledReleasePaths
    .filter((item) => item.releaseDate > today)
    .map((item) => `Disallow: ${item.path}`);

  const lines = [
    'User-agent: *',
    ...futureDisallows,
    'Allow: /',
    '',
    `Sitemap: ${base}/sitemap-index.xml`,
    `# Feed discovery: ${base}/rss.xml`,
  ];
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};

