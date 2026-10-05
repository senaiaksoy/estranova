import type { Writer } from '../data/writers';

// Yazar profil bağlantıları (Writer.sameAs) için ortak yardımcılar.
// URL'ler yalnızca yazarın rızasıyla eklenir; boşsa hiçbir şey basılmaz.

const KNOWN_HOSTS: Record<string, string> = {
  'linkedin.com': 'LinkedIn',
  'instagram.com': 'Instagram',
  'x.com': 'X',
  'twitter.com': 'X',
  'youtube.com': 'YouTube',
  'facebook.com': 'Facebook',
  'threads.net': 'Threads',
  'orcid.org': 'ORCID',
  'wikidata.org': 'Wikidata',
  'scholar.google.com': 'Google Akademik',
  'researchgate.net': 'ResearchGate',
};

/** Yazarın profil URL'leri; tanımsız veya boşsa boş dizi. */
export function writerSameAs(writer: Pick<Writer, 'sameAs'> | undefined): string[] {
  return (writer?.sameAs ?? []).filter((url) => typeof url === 'string' && url.trim().length > 0);
}

/** Mevcut sameAs listesiyle yazar profillerini sırayı koruyarak, tekrarsız birleştirir. */
export function mergeSameAs(base: string[], writer: Pick<Writer, 'sameAs'> | undefined): string[] {
  return [...new Set([...base, ...writerSameAs(writer)])];
}

/** URL'nin hostname'inden okunur bir etiket türetir (ör. "LinkedIn"). */
export function profileLinkLabel(url: string): string {
  let host: string;
  try {
    host = new URL(url).hostname.toLowerCase().replace(/^(www\.|m\.)/, '');
  } catch {
    return url;
  }
  if (KNOWN_HOSTS[host]) return KNOWN_HOSTS[host];
  const match = Object.keys(KNOWN_HOSTS).find((known) => host.endsWith(`.${known}`));
  return match ? KNOWN_HOSTS[match] : host;
}
