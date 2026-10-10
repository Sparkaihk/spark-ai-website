import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const page = readFileSync(new URL('../app/(site)/products/spark-ai-appliance/page.tsx', import.meta.url), 'utf8');
const section = page.split('<section id="agent-memory-tco"')[1]?.split('</section>')[0] ?? '';

test('product page publishes all three comparison configurations', () => {
  for (const text of ['All SSD', 'SSD + HDD', 'SSD + HDD + Optical Archive']) assert.ok(section.includes(text), `Missing configuration: ${text}`);
});
test('benchmark publishes five measurable outcomes and fairness controls', () => {
  for (const text of ['Cost per 1,000 tasks', 'Retrieval latency', 'Answer accuracy', 'Stale-state rate', 'Energy consumption', 'P50 / P95', 'dataset', 'concurrency', 'cache']) assert.ok(section.includes(text), `Missing benchmark requirement: ${text}`);
});
test('benchmark states unverified status and conditional tiering in three languages', () => {
  for (const text of ['Results pending validation', '结果待验证', '結果待驗證', 'No measured results', 'does not assume', 'recovery', 'permission', 'amortized']) assert.ok(section.includes(text), `Missing qualification: ${text}`);
});
