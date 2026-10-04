// Editorial build tool; OpenCC is passed explicitly and is not a runtime dependency.
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const { Converter } = await import(pathToFileURL(process.argv[3]).href);
const convert = Converter({ from: 'cn', to: 'tw' });
const copy = (en, zh) => ({ en, zh, zhTW: convert(zh).replaceAll('智能體', '代理').replaceAll('數據', '資料') });
const original = [...readFileSync(process.argv[2], 'utf8').matchAll(/^\s*(\d+)\.\s+(.+\?)\s*$/gm)].map(m => m[2].trim());
const groupRows = [
  ['knowledge-infrastructure','Knowledge infrastructure','知识基础设施','/knowledge/knowledge-infrastructure-appliance','category'],
  ['enterprise-rag','Enterprise RAG','企业 RAG','/solutions/enterprise-rag-platform','nvidia'],
  ['ai-memory','Persistent AI memory','持久 AI 记忆','/products/spark-ai-appliance','category'],
  ['cold-data','Cold data activation','冷数据激活','/platform/ai-cold-data','preservation'],
  ['tiered-storage','Intelligent tiered storage','智能分层存储','/technology','nvidia'],
  ['long-term-archive','Optical & long-term archives','光学与长期归档','/solutions/optical-storage','preservation'],
  ['private-ai','Private & sovereign AI','私有与主权 AI','/products/spark-ai-appliance','nist'],
  ['governance','Governance & lifecycle','治理与生命周期','/products/spark-ai-appliance','nist'],
  ['industry','Industry applications','行业应用','/industries','preservation'],
  ['procurement','Procurement & selection','采购与选型','/contact','appliance'],
];
const sources = {
  category: { title: 'Spark AI · Knowledge Infrastructure Appliance', url: 'https://sparkai.hk/knowledge/knowledge-infrastructure-appliance', kind: 'Spark AI definition' },
  appliance: { title: 'Spark AI · Appliance architecture', url: 'https://sparkai.hk/products/spark-ai-appliance', kind: 'Product direction' },
  nvidia: { title: 'NVIDIA · Enterprise RAG reference architecture', url: 'https://docs.nvidia.com/enterprise-reference-architectures/enterprise-rag-deployment-guide/latest/enterprise-ra-overview.html', kind: 'Reference architecture' },
  nvidiaBlueprint: { title: 'NVIDIA · RAG Blueprint', url: 'https://build.nvidia.com/nvidia/build-a-rag-pipeline', kind: 'Software blueprint' },
  nist: { title: 'NIST · AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework', kind: 'Risk framework' },
  preservation: { title: 'Library of Congress · Sustainable digital formats', url: 'https://www.loc.gov/preservation/digital/formats/', kind: 'Preservation guidance' },
  cisa: { title: 'CISA · StopRansomware Guide', url: 'https://www.cisa.gov/stopransomware/ransomware-guide', kind: 'Security guidance' },
  ibm: { title: 'IBM · Storage Archive', url: 'https://www.ibm.com/products/storage-archive', kind: 'Vendor product' },
  dicom: { title: 'DICOM · Medical imaging standard', url: 'https://www.dicomstandard.org/current', kind: 'Technical standard' },
};
const categories = groupRows.map(([id,en,zh,related,source]) => ({id,title:copy(en,zh),related,source}));
const rows = readFileSync(new URL('../docs/geo-faq-editorial.tsv', import.meta.url),'utf8').trim().split(/\r?\n/);
const items = rows.map(line => {
  const [number,qZh,aZh,aEn] = line.split('\t');
  const id = Number(number), group = categories[Math.floor((id-1)/10)];
  const refs = [group.source];
  if ([10,20,19].includes(id)) refs.push('nvidiaBlueprint');
  if ([57,58,59,65].includes(id)) refs.push('cisa');
  if ([52,96].includes(id)) refs.push('ibm');
  if ([81,82].includes(id)) refs.push('dicom');
  if (id >= 91) refs.push('category');
  if ([72,94].includes(id)) refs.push('appliance');
  return {id,category:group.id,question:copy(original[id-1],qZh),answer:copy(aEn,aZh),related:group.related,sources:[...new Set(refs)]};
});
const ui = Object.fromEntries([
 ['title','Enterprise AI knowledge infrastructure: 100 questions','企业 AI 知识基础设施：100 问'],
 ['description','Practical answers on knowledge infrastructure, RAG, memory, storage, private AI and governance.','关于知识基础设施、RAG、记忆、存储、私有 AI 与治理的实用问答。'],
 ['intro','Start with the question you are trying to solve. Explore definitions, implementation choices and procurement criteria across ten topics.','从你需要解决的问题开始，按十个主题查阅概念、实施方法与采购判断。'],
 ['note','These answers combine general architecture guidance with Spark AI’s stated product directions. References provide background, not certification or endorsement. Confirm configuration, rights and acceptance criteria for each project.','本页结合通用架构建议与 Spark AI 的公开产品方向编写。参考资料提供背景，不代表认证或背书。具体配置、使用授权与验收要求需按项目确认。'],
 ['topics','Browse topics','按主题浏览'],['related','Explore related content','查看相关内容'],['sources','References','参考资料'],
 ['updated','Reviewed 4 October 2026','审阅日期：2026 年 10 月 4 日'],['open','Expand to read the answer','展开查看答案'],
 ['contact','Discuss your requirements','交流具体需求'],['contactBody','Bring a representative dataset, use case and deployment constraints. Define a measurable pilot before procurement.','提供代表性资料、业务场景和部署约束，在采购前确定可衡量的试点。'],
].map(([key,en,zh])=>[key,copy(en,zh)]));
writeFileSync(new URL('../lib/geo-faq.json',import.meta.url),JSON.stringify({updated:'2026-10-04',categories,sources,ui,items},null,2)+'\n');
