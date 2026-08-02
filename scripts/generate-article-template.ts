// Estranova article template generator.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { getWriterStyleSummary } from '../src/utils/writer-style';
import { articleTypes, type ArticleType } from '../src/data/article-types';

type Args = {
  writer?: string;
  title?: string;
  section?: string;
  out?: string;
  date?: string;
  type?: string;
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
    '  npm run article:template -- --writer <writer-slug> --title "<Baslik>" --type <article-type> [--section perimenopoz] [--date "25 Nisan 2026"] [--out "src/pages/.../yeni-yazi.astro"]',
    '',
    `Article types: ${articleTypes.join(', ')}`,
    '',
    'Example:',
    '  npm run article:template -- --writer senai-aksoy --title "Menopozda..." --type clinical-guide --section menopoz',
  ].join('\n');
}

function buildTemplate(input: {
  title: string;
  writerSlug: string;
  writerName: string;
  publishedDate: string;
  stylePrompt: string;
  pathname: string;
  articleType: ArticleType;
}): string {
  const description = `${input.title} başlığını sade, güvenli ve okur dostu bir dille ele alan rehber.`;
  const isClinical = input.articleType === 'clinical-guide';
  const isExperience = input.articleType === 'experience-essay';
  const summaryTitle = isClinical
    ? 'Kısa Klinik Yanıt'
    : isExperience
      ? 'Bu yazıya başlarken'
      : 'Kısa Özet';
  const tocEntries = isExperience
    ? ''
    : `const tocEntries = [
  { id: 'acilis', label: 'Açılış' },
  { id: 'ana-baslik-1', label: 'Ana Başlık 1' },
  { id: 'ana-baslik-2', label: 'Ana Başlık 2' },
  { id: 'kapanis', label: 'Kapanış' },
];`;
  const tocRender = isExperience ? '' : '      <ArticleTOC slot="toc" entries={tocEntries} />\n';
  const clinicalImports = isClinical
    ? `import Evidence from '../../../components/site/Evidence.astro';
import ArticleEditorNote from '../../../components/site/ArticleEditorNote.astro';`
    : '';
  const clinicalTail = isClinical
    ? `
      <ArticleEditorNote>
        <p>Bilimsel inceleyen tarafından yazılacak kısa, nötr değerlendirme.</p>
      </ArticleEditorNote>`
    : '';
  const bodySections = isClinical
    ? `        <h2 id="acilis">Temel Klinik Ayrım</h2>
        <p>Bölümü açan 1-2 cümlelik editoryal lede.</p>
        <p>Tanım, kapsam ve sınırlama. <Evidence level={4} /></p>

        <h2 id="ana-baslik-1">Mekanizma ve Kanıt</h2>
        <p>Bölümü açan lede.</p>
        <p>Genel klinik açıklama ve kaynak numarası.<sup><a href="#kaynak-1">[1]</a></sup></p>

        <h2 id="ana-baslik-2">Seçenekler ve Güvenlik Sınırı</h2>
        <p>Bölümü açan lede.</p>
        <p>Ortak karar ölçütleri, özel durumlar ve ne zaman değerlendirme gerektiği.</p>

        <h2 id="kapanis">Kaynaklar</h2>
        <p>Yalnızca iddiaları gerçekten destekleyen seçilmiş kaynaklar.</p>
        <ol>
          <li id="kaynak-1"><a href="https://example.org/" rel="noopener noreferrer">Kaynak başlığı</a>.</li>
        </ol>`
    : isExperience
      ? `        <h2 id="acilis">Açılış Sahnesi</h2>
        <p>Yazarın dünyasından somut, ölçülü bir sahne.</p>
        <p>Deneyimin neden bu yazıya dönüştüğü.</p>

        <h2 id="fark-etmek">Fark Ettiğim Şey</h2>
        <p>Kişisel kırılma noktası ve düşünce.</p>
        <p>Okurla yaşıt bağı; tıbbi genelleme veya tavsiye değil.</p>

        <h2 id="kapanis">Sizin Yolunuz Farklı Olabilir</h2>
        <p>Bu deneyimin kişisel sınırını doğal biçimde kuran kapanış.</p>`
      : `        <h2 id="acilis">Açılış</h2>
        <p>Uzman veya editoryal bakışı kuran sahne ya da soru.</p>
        <p>Yazının temel ayrımı.</p>

        <h2 id="ana-baslik-1">Ana Başlık 1</h2>
        <p>Bölümü açan lede.</p>
        <p>Tıbbi iddia varsa kaynaklı ve sınırlı açıklama.</p>

        <h2 id="ana-baslik-2">Ana Başlık 2</h2>
        <p>Bölümü açan lede.</p>
        <p>Deneyim, mesleki içgörü veya editoryal sentez.</p>

        <h2 id="kapanis">Kapanış</h2>
        <p>Okura açılan, vaat vermeyen kapanış.</p>`;

  return `---
import SiteLayout from '../../../layouts/SiteLayout.astro';
import SiteNavbar from '../../../components/site/SiteNavbar.astro';
import SiteFooter from '../../../components/site/SiteFooter.astro';
import SubmenuArticleBody from '../../../components/site/SubmenuArticleBody.astro';
import ArticleAuthorBlock from '../../../components/site/ArticleAuthorBlock.astro';
import ArticleTOC from '../../../components/site/ArticleTOC.astro';
import ArticleProsePanel from '../../../components/site/ArticleProsePanel.astro';
import ArticleSummary from '../../../components/site/ArticleSummary.astro';
import RelatedReadings from '../../../components/site/RelatedReadings.astro';
import ArticleDisclaimer from '../../../components/site/ArticleDisclaimer.astro';
${clinicalImports}
import { buildArticleSchemas } from '../../../utils/article-schema';
import { resolveSiteUrl } from '../../../utils/seo';

${tocEntries}

const siteUrl = resolveSiteUrl(Astro.site);
const articleTitle = '${input.title.replaceAll("'", "\\'")}';
const articleDescription =
  '${description.replaceAll("'", "\\'")}';
const articleSchemas = buildArticleSchemas({
  title: articleTitle,
  description: articleDescription,
  writerSlug: '${input.writerSlug}',
  articleType: '${input.articleType}',
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
MAKALE TÜRÜ: ${input.articleType}
${input.stylePrompt}
-->

<SiteLayout title={\`\${articleTitle} - Estranova\`} description={articleDescription} ogType="article" jsonLd={articleSchemas}>
  <SiteNavbar currentPath="/hormonal-gecis" />

  <main id="main-content" class="pt-24 text-[#2D2D2D]">
    <SubmenuArticleBody>
${tocRender}
      <ArticleAuthorBlock authorSlug="${input.writerSlug}" publishedDate="${input.publishedDate}" readingMinutes={5} />

      <header class="mb-10">
        <p class="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D81B60]">Hormonal Geçiş</p>
        <h1 class="font-serif text-4xl leading-tight md:text-6xl">{articleTitle}</h1>
      </header>

      <ArticleSummary title="${summaryTitle}">
        <p>Bu türün amacına uygun, kendi başına anlaşılan kısa açılış.</p>
      </ArticleSummary>

      <ArticleProsePanel>
${bodySections}
      </ArticleProsePanel>

      <RelatedReadings paths={[]} />
${clinicalTail}

      <ArticleDisclaimer>
        <p>Bu içerik genel bilgilendirme amaçlıdır; kişisel tıbbi değerlendirme veya tanı yerine geçmez.</p>
      </ArticleDisclaimer>
    </SubmenuArticleBody>
  </main>

  <SiteFooter />
</SiteLayout>
`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.writer || !args.title || !args.type || !articleTypes.includes(args.type as ArticleType)) {
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
    articleType: args.type as ArticleType,
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

