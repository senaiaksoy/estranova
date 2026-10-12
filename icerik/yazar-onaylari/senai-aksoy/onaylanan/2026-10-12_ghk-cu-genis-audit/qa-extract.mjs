import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const directory = path.dirname(fileURLToPath(import.meta.url));
const target = path.resolve(directory, '../../../../../src/pages/bilimsel-pencere/hucreler-ve-yaslanma/ghk-cu-menopoz-cilt.astro');
function extract(source) {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
    .replace(/<h([23])\b[^>]*>(.*?)<\/h\1>/gs, (_, level, text) => `\n${'#'.repeat(Number(level))} ${text}\n`)
    .replace(/<\/?p\b[^>]*>/g, '\n\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n[ \t]+/g, '\n');
}
for (const [name, file] of [['before', path.join(directory, 'onceki-surum.astro')], ['after', target]]) {
  fs.writeFileSync(path.join(directory, `qa-${name}.md`), extract(fs.readFileSync(file, 'utf8')));
}
console.log('Astro body extracted explicitly. Dynamic props, metadata, FAQ and Evidence require separate inspection.');
