import { writers, type Writer } from '../data/writers';

export interface WriterStyleSummary {
  writerSlug: Writer['slug'];
  writerName: string;
  voice: string;
  rhythm: string;
  framing: string;
  dos: string[];
  donts: string[];
  promptBlock: string;
}

function assertWriter(slug: Writer['slug']): Writer {
  const writer = writers.find((w) => w.slug === slug);
  if (!writer) throw new Error(`Writer not found: ${slug}`);
  return writer;
}

export function getWriterStyleSummary(slug: Writer['slug']): WriterStyleSummary {
  const writer = assertWriter(slug);
  const style = writer.writingStyle;

  if (!style) {
    throw new Error(`Writing style not found for writer: ${slug}`);
  }

  const promptBlock = [
    `Yazar: ${writer.displayName}`,
    `Ses: ${style.voice}`,
    `Ritim: ${style.rhythm}`,
    `Kurgu: ${style.framing}`,
    `Yap: ${style.dos.join(' | ')}`,
    `Yapma: ${style.donts.join(' | ')}`,
  ].join('\n');

  return {
    writerSlug: writer.slug,
    writerName: writer.displayName,
    voice: style.voice,
    rhythm: style.rhythm,
    framing: style.framing,
    dos: style.dos,
    donts: style.donts,
    promptBlock,
  };
}

export function getWriterStylePrompt(slug: Writer['slug']): string {
  return getWriterStyleSummary(slug).promptBlock;
}

