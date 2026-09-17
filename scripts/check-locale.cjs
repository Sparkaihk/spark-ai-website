const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
function load(relative) {
  const module = { exports: {} };
  const js = ts.transpileModule(fs.readFileSync(path.join(root, relative), "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS },
  }).outputText;
  new Function("exports", "require", "module", js)(module.exports, require, module);
  return module.exports;
}
test("saved language survives conflicting browser preferences and legacy aliases", () => {
  const { resolveLocale } = load("i18n/locale.ts");
  assert.equal(resolveLocale("zh-TW", "en-US"), "zh-TW");
  assert.equal(resolveLocale("zh", "en-US"), "zh-CN");
  assert.equal(resolveLocale("zh-Hant", "en-US"), "zh-TW");
  assert.equal(resolveLocale("en", "zh-HK"), "en");
});
test("language negotiation respects quality weights, traditional regions and exclusions", () => {
  const { resolveLocale } = load("i18n/locale.ts");
  assert.equal(resolveLocale(null, "zh-HK,zh;q=0.9,en;q=0.8"), "zh-TW");
  assert.equal(resolveLocale(null, "zh-Hant-TW"), "zh-TW");
  assert.equal(resolveLocale(null, "en;q=0.5,zh-TW;q=0.9"), "zh-TW");
  assert.equal(resolveLocale(null, "zh-CN;q=0,en;q=0.8"), "en");
  assert.equal(resolveLocale(null, "fr-FR"), "en");
});
test("three dictionaries contain matching nonempty keys and distinct Chinese copy", () => {
  const en = load("i18n/locales/en.ts").en;
  const cn = load("i18n/locales/zh-CN.ts").zhCN;
  const tw = load("i18n/locales/zh-TW.ts").zhTW;
  for (const dict of [cn, tw]) {
    assert.deepEqual(Object.keys(dict).sort(), Object.keys(en).sort());
    assert.ok(Object.values(dict).every(value => value.trim().length > 0));
  }
  assert.equal(cn["positioning.title"], "让长期保存的数据，持续服务企业 AI");
  assert.equal(tw["positioning.title"], "讓長期保存的數據，持續服務企業 AI");
  assert.match(tw["concept.caption"], /非工程定型/);
});
