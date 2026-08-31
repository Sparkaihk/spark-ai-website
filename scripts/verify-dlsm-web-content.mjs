import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const read = (path) => existsSync(path) ? readFileSync(path, "utf8") : "";

const homepage = read("app/(site)/page.tsx");
const investorRoute = read("app/investors/page.tsx");
const investorDeckRoute = read("app/investors/deck/page.tsx");
const homepageDlsm = read("components/home/dlsm-business-section.tsx");
const investorPage = read("components/sections/dlsm-investor-page.tsx");

assert.match(homepage, /DlsmBusinessSection/, "homepage must render the DLSM business section");
assert.doesNotMatch(investorRoute, /BrandedOverviewPage/, "investor route must not reuse the homepage");
assert.match(investorRoute, /DlsmInvestorPage/, "investor route must render the dedicated DLSM investor page");
assert.match(investorDeckRoute, /DlsmInvestorPage/, "investor deck route must render the dedicated DLSM investor page");

for (const [name, source] of [["homepage DLSM", homepageDlsm], ["investor page", investorPage]]) {
  assert.match(source, /DLSM/, `${name} must name DLSM`);
  assert.match(source, /数据生命周期/, `${name} must include Chinese lifecycle language`);
  assert.match(source, /Data Lifecycle/, `${name} must include English lifecycle language`);
  assert.doesNotMatch(source, /—/, `${name} must not contain em dash characters`);
  assert.doesNotMatch(source, /全球领先|行业标准|保证合规|guaranteed compliance|world.?s first/i, `${name} contains an unsupported or prohibited claim`);
}

assert.match(investorPage, /试点/, "investor page must explain the pilot route");
assert.match(investorPage, /Pilot/, "investor page must include the English pilot route");
assert.match(investorPage, /控制平面/, "investor page must identify the DLSM control plane");
assert.match(investorPage, /control plane/i, "investor page must include the English control-plane positioning");

console.log("DLSM web content acceptance: PASS");
