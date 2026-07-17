# Spark AI 官网正式发布记录 — 2026-07-17

## 本次上线版本说明

本版本冻结当前已确认的官网视觉、品牌定位和页面结构，用于 2026-07-17 客户来访展示。发布内容包括全站中英文共享语言状态、正式公司名称统一、首页与核心导航页面、产品及解决方案内容，以及知识中心与联系入口。本次发布不包含视觉重构或临时功能扩展。

## 已完成页面

- 首页 `/`
- Infrastructure `/platform/ai-cold-data`
- Appliance `/products/spark-ai-appliance`
- Technology `/technology`
- Knowledge `/knowledge` 及知识分类页
- Solutions `/solutions` 及主要解决方案详情页
- Principles `/principles`
- Company `/about`
- Contact `/contact`
- Resources `/resources`
- Architecture `/architecture`
- Cases `/cases`

## 已知但不阻碍上线的问题

- `npm audit` 报告 2 个 moderate severity 依赖问题；自动修复需要 `--force` 并可能带来破坏性升级，因此安排在发布后评估。
- `https://sparkai.hk` 当前可正常 HTTPS 访问；`https://www.sparkai.hk` 在发布前检查中请求超时，主域名不受影响，发布后继续检查域名重定向配置。
- 移动端逐页精修、动画性能、SEO、无障碍评分和下载中心仍有提升空间，不影响核心页面访问与客户展示。

## 后续优化事项

详见 `POST_LAUNCH_TODO.md`。

## 当前 Git commit hash

发布候选基线：`f774d90e89a56cc048950d8793acea537890c802`

正式发布提交 hash 以 Production 分支 `main` 上提交信息 `release: production website for client presentation` 为准。

## 部署时间

计划部署时间：2026-07-17 11:02 CST（UTC+08:00）

## 回滚方法

1. 若新 Production 出现故障，立即停止继续修改。
2. 在 Vercel 项目中找到本次发布前最后一个成功的 Production Deployment，并执行 **Promote to Production**。
3. 在 Git 中对发布提交执行非破坏性的 `git revert <release-commit>`，复核后推送 `main`。
4. 重新检查 `https://sparkai.hk` 首页、语言切换、导航、Appliance 与联系 CTA。
5. 记录失败原因，不删除任何已有可用 Deployment。
