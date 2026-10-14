export type OgType = 'website' | 'article';

interface CanonicalOptions {
  siteUrl: string;
  pathname: string;
  canonical?: string;
}

interface SocialImageOptions {
  siteUrl: string;
  image?: string;
}

const DEFAULT_SITE_URL = 'https://estranova.com';
const DEFAULT_SOCIAL_IMAGE_PATH = '/og-default.png';

function normalizeUrl(value: string): string {
  const url = new URL(value);

  // Site `trailingSlash: 'always'` ile yayınlanıyor (astro.config.mjs) ve
  // Cloudflare Pages slash'lı URL'yi canonical sayıyor. Slash'sız canonical,
  // GSC'de "Yönlendirmeli sayfa" / "Kopya" hatası üretir; bu yüzden dosya
  // uzantısı olmayan yollar daima slash'lı normalize edilir.
  const lastSegment = url.pathname.split('/').pop() ?? '';
  if (!url.pathname.endsWith('/') && !lastSegment.includes('.')) {
    url.pathname = `${url.pathname}/`;
  }

  url.hash = '';
  return url.toString();
}

function ensureAbsoluteUrl(urlOrPath: string, siteUrl: string): string {
  if (/^https?:\/\//iu.test(urlOrPath)) {
    return normalizeUrl(urlOrPath);
  }
  return normalizeUrl(new URL(urlOrPath, siteUrl).toString());
}

export function resolveSiteUrl(site?: URL | string | null): string {
  if (!site) return DEFAULT_SITE_URL;
  return normalizeUrl(site.toString());
}

export function resolveCanonicalUrl({
  siteUrl,
  pathname,
  canonical,
}: CanonicalOptions): string {
  if (canonical) {
    return ensureAbsoluteUrl(canonical, siteUrl);
  }
  return normalizeUrl(new URL(pathname, siteUrl).toString());
}

export function resolveSocialImageUrl({ siteUrl, image }: SocialImageOptions): string {
  const imagePath = image?.trim() || DEFAULT_SOCIAL_IMAGE_PATH;
  return ensureAbsoluteUrl(imagePath, siteUrl);
}
