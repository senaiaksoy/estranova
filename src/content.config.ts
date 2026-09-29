import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    modifiedDate: z.string().optional(),
    summary: z.string().optional(),
    medicalEditorNote: z.string().optional(),
    disclaimer: z.string().optional(),
    relatedPaths: z.array(z.string()).optional(),
    faqTitle: z.string().optional(),
    faqIntro: z.string().optional(),
    faqId: z.string().optional(),
    tags: z.array(z.string()).optional(),
    /** Yazının kanonik yolu başka bir rotadaysa (birleştirilmiş yinelenen içerik) /blog/ rotası üretilmez. */
    canonicalPath: z.string().optional(),
    imageSrc: z.string().optional(),
    imageAlt: z.string().optional(),
    writerSlug: z.string().optional(),
    articleType: z.enum(['clinical-guide', 'expert-essay', 'experience-essay', 'editorial-guide']),
    faqItems: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
