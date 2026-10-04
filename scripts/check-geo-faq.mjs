import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const data = JSON.parse(readFileSync(new URL('../lib/geo-faq.json', import.meta.url), 'utf8'));
const attachment = process.argv[2];
assert.equal(data.categories.length, 10);
assert.equal(data.items.length, 100);
const ids = new Set();
for (const [index, item] of data.items.entries()) {
  assert.equal(item.id, index + 1, 'Original numbering must be preserved');
  assert.equal(item.category, data.categories[Math.floor(index / 10)].id);
  assert(!ids.has(item.id)); ids.add(item.id);
  for (const locale of ['en', 'zh', 'zhTW']) {
    assert(item.question[locale]?.trim().length > 8, `Missing question ${item.id}/${locale}`);
    assert(item.answer[locale]?.trim().length > 30, `Missing answer ${item.id}/${locale}`);
    assert(!/TODO|TBD|待补充/.test(item.answer[locale]));
  }
  assert(item.related.startsWith('/'));
  assert(item.sources.length > 0);
  for (const key of item.sources) assert(data.sources[key], `Unknown source ${key}`);
}
for (const source of Object.values(data.sources)) assert(source.url.startsWith('https://'));
if (attachment) {
  const original = [...readFileSync(attachment, 'utf8').matchAll(/^\s*(\d+)\.\s+(.+\?)\s*$/gm)];
  assert.equal(original.length, 100);
  original.forEach((match, index) => assert.equal(data.items[index].question.en, match[2].trim()));
}
console.log('FAQ_CORPUS_OK: 100 original questions, 10 categories, 3 locales, valid references');
