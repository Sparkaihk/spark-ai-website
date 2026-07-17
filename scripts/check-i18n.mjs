import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function extract(file) {
  const source = readFileSync(path.join(root, file), "utf8");
  return new Map([...source.matchAll(/^\s*"([^"]+)":\s*"([^"]*)",?$/gm)].map((match) => [match[1], match[2]]));
}

const en = extract("i18n/locales/en.ts");
const zh = extract("i18n/locales/zh-CN.ts");
const errors = [];

for (const key of en.keys()) if (!zh.has(key)) errors.push(`Missing zh-CN key: ${key}`);
for (const key of zh.keys()) if (!en.has(key)) errors.push(`Unknown zh-CN key: ${key}`);
for (const [key, value] of [...en, ...zh]) if (!value.trim()) errors.push(`Empty translation: ${key}`);
for (const [key, value] of zh) {
  if (/^[\x00-\x7F\s™©|.-]+$/.test(value) && !/^(Spark AI|AI |RAG|FAQ|CAD \/ PLM|©|中文 \/ English)/.test(value)) {
    errors.push(`Suspicious English-only zh-CN value: ${key}`);
  }
}
for (const [key, value] of en) {
  if (/[\u3400-\u9fff]/.test(value) && key !== "common.languageLabel") errors.push(`Chinese text in English value: ${key}`);
}

const sourceFiles = ["app", "components", "data", "lib", "i18n"].flatMap(walk);
const forbiddenNames = /Spark AI (?:科技|技术|技術)有限公司|火花人工智能|星火人工智能/;
const traditionalChinese = /[資據階權擴訪訓歸儲應為與這個開關於產術網絡]/;

for (const file of sourceFiles) {
  if (!/\.(?:ts|tsx)$/.test(file)) continue;
  const source = readFileSync(file, "utf8");
  if (forbiddenNames.test(source)) errors.push(`Forbidden company name: ${path.relative(root, file)}`);
  if (source.includes("Appliance?")) errors.push(`Broken trademark symbol: ${path.relative(root, file)}`);
  const zhValues = [
    ...source.matchAll(/\bzh\s*:\s*"([^"]*)"/g),
    ...source.matchAll(/\bzh="([^"]*)"/g),
  ].map((match) => match[1]);
  for (const value of zhValues) {
    if (traditionalChinese.test(value)) {
      errors.push(`Traditional Chinese in zh-CN content: ${path.relative(root, file)} -> ${value.slice(0, 36)}`);
      break;
    }
  }
}

function walk(relativeDir) {
  const directory = path.join(root, relativeDir);
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(relativeDir, entry.name);
    return entry.isDirectory() ? walk(relative) : [path.join(root, relative)];
  });
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`i18n OK: ${en.size} keys aligned across en and zh-CN.`);
