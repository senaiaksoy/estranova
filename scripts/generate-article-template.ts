// Estranova article template generator.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, relative, resolve } from 'node:path';
import { getWriterStyleSummary } from '../src/utils/writer-style';
import { writers } from '../src/data/writers';
import {
  articleTypes,
  assertArticleTypeForWriter,
  type ArticleType,
} from '../src/data/article-types';

type Args = {
  writer?: string;
  title?: string;
  hub?: string;
  section?: string;
  sectionPath?: string;
  sectionLabel?: string;
  related?: string;
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
    const k = key.slice(2).replace(/-([a-z])/g, (_, character: string) => character.toUpperCase()) as keyof Args;
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

function importPath(fromDirectory: string, target: string): string {
  const value = relative(fromDirectory, target).replaceAll('\\', '/');
  return value.startsWith('.') ? value : `./${value}`;
}

const sectionLabels: Record<string, string> = {
  'hormonal-gecis': 'Hormonal Geçiş',
  'bilimsel-pencere': 'Bilimsel Pencere',
  'zamansiz-yasam': 'Zamansız Yaşam',
  'zihin-denge': 'Zihin & Denge',
  'beden-yakinlik': 'Beden & Yakınlık',
};

function usage(): string {
  return [
    'Usage:',
    '  npm run article:template -- --writer <writer-slug> --title "<Baslik>" --type <article-type> --related "/ilgili-1/,/ilgili-2/" [--hub hormonal-gecis] [--section menopoz] [--section-path /bilimsel-pencere/yeni-arastirmalar] [--section-label "Bilimsel Pencere"] [--date "25 Nisan 2026"] [--out "src/pages/.../yeni-yazi.astro"]',
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
  hubPath: string;
  articleSection: string;
  relatedPaths: string[];
  imports: Record<string, string>;
  articleType: ArticleType;
}): string {
  const description = `${input.title} başlığını sade, güvenli ve okur dostu bir dille ele alan rehber.`;
  const isClinical = input.articleType === 'clinical-guide';
  const isExperience = input.articleType === 'experience-essay';
  const isExpert = input.articleType === 'expert-essay';
  const summaryTitle = isClinical
    ? 'Kısa Klinik Yanıt'
    : isExperience
      ? 'Bu yazıya başlarken'
      : 'Kısa Özet';
  const tocEntries = isExperience || isExpert
    ? ''
    : `const tocEntries = [
  { id: 'acilis', label: 'Açılış' },
  { id: 'ana-baslik-1', label: 'Ana Başlık 1' },
  { id: 'ana-baslik-2', label: 'Ana Başlık 2' },
  { id: 'kapanis', label: 'Kapanış' },
];`;
  const tocRender = isExperience || isExpert ? '' : '      <ArticleTOC slot="toc" entries={tocEntries} />\n';
  const tocImport = isExperience || isExpert
    ? ''
    : `import ArticleTOC from '${input.imports.components}/ArticleTOC.astro';`;
  const clinicalImports = isClinical
    ? `import Evidence from '${input.imports.components}/Evidence.astro';
import ArticleEditorNote from '${input.imports.components}/ArticleEditorNote.astro';`
    : '';
  const articleTail = isClinical
    ? `
      <ArticleEditorNote>
        <p>Bilimsel inceleyen tarafından yazılacak kısa, nötr değerlendirme.</p>
      </ArticleEditorNote>`
    : '';
  const disclaimerText = isExperience
    ? 'Bu yazı kişisel deneyimi aktarır; bilimsel kanıt, tanı veya kişiye özel sağlık önerisi değildir.'
    : 'Bu içerik genel bilgilendirme amaçlıdır; kişisel tıbbi değerlendirme veya tanı yerine geçmez.';
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
          <li id="kaynak-1"><a href="REPLACE_WITH_VERIFIED_SOURCE_URL" rel="noopener noreferrer">Doğrulanmış kaynak başlığı</a>.</li>
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
import SiteLayout from '${input.imports.layout}';
import SiteNavbar from '${input.imports.components}/SiteNavbar.astro';
import SiteFooter from '${input.imports.components}/SiteFooter.astro';
import SubmenuHero from '${input.imports.components}/SubmenuHero.astro';
import SubmenuArticleBody from '${input.imports.components}/SubmenuArticleBody.astro';
import ArticleAuthorBlock from '${input.imports.components}/ArticleAuthorBlock.astro';
${tocImport}
import ArticleProsePanel from '${input.imports.components}/ArticleProsePanel.astro';
import ArticleSummary from '${input.imports.components}/ArticleSummary.astro';
import RelatedReadings from '${input.imports.components}/RelatedReadings.astro';
import ArticleDisclaimer from '${input.imports.components}/ArticleDisclaimer.astro';
${clinicalImports}
import { buildArticleSchemas } from '${input.imports.utils}/article-schema';
import { resolveSiteUrl } from '${input.imports.utils}/seo';
import { submenuHeroByRoute } from '${input.imports.data}/submenu-heroes';

${tocEntries}

const siteUrl = resolveSiteUrl(Astro.site);
const hero = submenuHeroByRoute['${input.hubPath}/'];
if (!hero) throw new Error('Şablon için alt menü hero görseli bulunamadı: ${input.hubPath}/');
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
  articleSection: '${input.articleSection}',
  sectionPath: '${input.hubPath}',
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
  <SiteNavbar currentPath="${input.hubPath}" />

  <main id="main-content" class="text-[#2D2D2D]">
    <SubmenuHero
      eyebrow="${input.articleSection}"
      title={articleTitle}
      lede={articleDescription}
      imageSrc={hero.src}
      imageAlt={hero.alt}
      compact
    />

    <SubmenuArticleBody>
${tocRender}
      <ArticleAuthorBlock
        authorSlug="${input.writerSlug}"
        articleType="${input.articleType}"
        publishedDate="${input.publishedDate}"
        readingMinutes={5}
      />

      <ArticleSummary title="${summaryTitle}">
        <p>Bu türün amacına uygun, kendi başına anlaşılan kısa açılış.</p>
      </ArticleSummary>

      <ArticleProsePanel mode="${isExperience ? 'experience' : isClinical ? 'scientific' : 'editorial'}">
${bodySections}
      </ArticleProsePanel>

      <RelatedReadings paths={${JSON.stringify(input.relatedPaths)}} />
      <!-- Deneyim metnine tıbbi iddia eklenirse, kişisel anlatıdan ayrı kaynaklı bir bağlam ve uygun inceleme paneli ekleyin. -->
${articleTail}

      <ArticleDisclaimer>
        <p>${disclaimerText}</p>
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
  const writer = writers.find((item) => item.slug === style.writerSlug);
  if (!writer) throw new Error(`Writer not found: ${style.writerSlug}`);
  assertArticleTypeForWriter(writer, args.type as ArticleType);
  const hub = (args.hub ?? 'hormonal-gecis').replace(/^\/+|\/+$/g, '');
  const routePrefix = (args.sectionPath ?? `/${hub}/${args.section ?? 'perimenopoz'}`).replace(/\/+$/, '');
  const hubPath = `/${routePrefix.split('/').filter(Boolean)[0]}`;
  const date = args.date ?? '25 Nisan 2026';
  const titleSlug = slugify(args.title);
  const pathname = `${routePrefix}/${titleSlug}`;
  const out =
    args.out ??
    `src/pages${routePrefix}/${titleSlug}.astro`;
  const absOut = resolve(process.cwd(), out);
  const outputDirectory = dirname(absOut);
  const articleSection = args.sectionLabel ?? sectionLabels[hub] ?? hub;
  const relatedPaths = (args.related ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  if (!relatedPaths.length || relatedPaths.some((item) => !item.startsWith('/'))) {
    throw new Error('--related zorunludur ve virgülle ayrılmış, / ile başlayan gerçek makale yolları içermelidir.');
  }

  const template = buildTemplate({
    title: args.title,
    writerSlug: style.writerSlug,
    writerName: style.writerName,
    publishedDate: date,
    stylePrompt: style.promptBlock,
    pathname,
    hubPath,
    articleSection,
    imports: {
      layout: importPath(outputDirectory, resolve(process.cwd(), 'src/layouts/SiteLayout.astro')),
      components: importPath(outputDirectory, resolve(process.cwd(), 'src/components/site')),
      utils: importPath(outputDirectory, resolve(process.cwd(), 'src/utils')),
      data: importPath(outputDirectory, resolve(process.cwd(), 'src/data')),
    },
    relatedPaths,
    articleType: args.type as ArticleType,
  });

  await mkdir(dirname(absOut), { recursive: true });
  await writeFile(absOut, template, 'utf8');

  console.log(`✓ Article template created: ${out}`);
  console.log(`✓ Writer style applied: ${style.writerName} (${style.writerSlug})`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
