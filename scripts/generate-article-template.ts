#!/usr/bin/env tsx
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { getWriterStyleSummary } from '../src/utils/writer-style';

type Args = {
  writer?: string;
  title?: string;
  section?: string;
  out?: string;
  date?: string;
};

function parseArgs(argv: string[]): Args {
  const args: Args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    const value = argv[i + 1];
    if (!key.startsWith('--')) continue;
    const k = key.slice(2) as keyof Args;
    if (value && !value.startsWith('--')) {
      args[k] = value;
      i += 1;
    } else {
      args[k] = 'true';
    }
  }
  return args;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replaceAll('ı', 'i')
    .replaceAll('ğ', 'g')
    .replaceAll('ü', 'u')
    .replaceAll('ş', 's')
    .replaceAll('ö', 'o')
    .replaceAll('ç', 'c')
    .replaceAll(/[^a-z0-9\s-]/g, '')
    .trim()
    .replaceAll(/\s+/g, '-');
}

function usage(): string {
  return [
    'Usage:',
    '  npm run article:template -- --writer <writer-slug> --title "<Baslik>" [--section perimenopoz] [--date "25 Nisan 2026"] [--out "src/pages/.../yeni-yazi.astro"]',
    '',
    'Example:',
    '  npm run article:template -- --writer isik-selin-gunce --title "Perimenopozda..." --section perimenopoz',
  ].join('\n');
}

function buildTemplate(input: {
  title: string;
  writerSlug: string;
  writerName: string;
  publishedDate: string;
  stylePrompt: string;
  pathname: string;
}): string {
  const description = `${input.title} başlığını sade, güvenli ve okur dostu bir dille ele alan rehber.`;

  return `---
import SiteLayout from '../../../layouts/SiteLayout.astro';
import SiteNavbar from '../../../components/site/SiteNavbar.astro';
import SiteFooter from '../../../components/site/SiteFooter.astro';
import SubmenuArticleBody from '../../../components/site/SubmenuArticleBody.astro';
import ArticleAuthorBlock from '../../../components/site/ArticleAuthorBlock.astro';
import ArticleTOC from '../../../components/site/ArticleTOC.astro';
import ArticleProsePanel from '../../../components/site/ArticleProsePanel.astro';
import { buildArticleSchemas } from '../../../utils/article-schema';
import { resolveSiteUrl } from '../../../utils/seo';

const tocEntries = [
  { id: 'kisa-ozet', label: 'Kısa Özet' },
  { id: 'ana-baslik-1', label: 'Ana Başlık 1' },
  { id: 'ana-baslik-2', label: 'Ana Başlık 2' },
  { id: 'ana-baslik-3', label: 'Ana Başlık 3' },
];

const siteUrl = resolveSiteUrl(Astro.site);
const articleTitle = '${input.title.replaceAll("'", "\\'")}';
const articleDescription =
  '${description.replaceAll("'", "\\'")}';
const articleSchemas = buildArticleSchemas({
  title: articleTitle,
  description: articleDescription,
  writerSlug: '${input.writerSlug}',
  publishedDate: '${input.publishedDate}',
  pathname: '${input.pathname}',
  articleSection: 'Hormonal Geçiş',
  sectionPath: '/hormonal-gecis',
  keywords: ['menopoz', 'perimenopoz', 'kadın sağlığı'],
  siteUrl,
});
---

<!--
YAZAR ÜSLUP KARTI (${input.writerName})
${input.stylePrompt}
-->

<SiteLayout title={\`\${articleTitle} - Estranova\`} description={articleDescription} ogType="article" jsonLd={articleSchemas}>
  <SiteNavbar currentPath="/hormonal-gecis" />

  <main id="main-content" class="pt-24 text-[#2D2D2D]">
    <SubmenuArticleBody>
      <ArticleTOC slot="toc" entries={tocEntries} />
      <ArticleAuthorBlock authorSlug="${input.writerSlug}" publishedDate="${input.publishedDate}" readingMinutes={5} />

      <header class="mb-10">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D81B60]">Hormonal Geçiş</p>
        <h1 class="font-serif text-4xl leading-tight md:text-6xl">{articleTitle}</h1>
      </header>

      <ArticleProsePanel>
        <h2 id="kisa-ozet">Kısa Özet</h2>
        <p>...</p>

        <h2 id="ana-baslik-1">Ana Başlık 1</h2>
        <p>...</p>

        <h2 id="ana-baslik-2">Ana Başlık 2</h2>
        <p>...</p>

        <h2 id="ana-baslik-3">Ana Başlık 3</h2>
        <p>...</p>
      </ArticleProsePanel>
    </SubmenuArticleBody>
  </main>

  <SiteFooter />
</SiteLayout>
`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.writer || !args.title) {
    console.error(usage());
    process.exit(1);
  }

  const style = getWriterStyleSummary(args.writer as any);
  const section = args.section ?? 'perimenopoz';
  const date = args.date ?? '25 Nisan 2026';
  const titleSlug = slugify(args.title);
  const pathname = `/hormonal-gecis/${section}/${titleSlug}`;
  const out =
    args.out ??
    `src/pages/hormonal-gecis/${section}/${titleSlug}.astro`;

  const template = buildTemplate({
    title: args.title,
    writerSlug: style.writerSlug,
    writerName: style.writerName,
    publishedDate: date,
    stylePrompt: style.promptBlock,
    pathname,
  });

  const absOut = resolve(process.cwd(), out);
  await mkdir(dirname(absOut), { recursive: true });
  await writeFile(absOut, template, 'utf8');

  console.log(`✓ Article template created: ${out}`);
  console.log(`✓ Writer style applied: ${style.writerName} (${style.writerSlug})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

