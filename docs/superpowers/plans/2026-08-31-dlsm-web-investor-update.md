# DLSM Website and Investor Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an evidence-bounded DLSM business module to the Spark AI homepage and create a distinct DLSM-led investor page.

**Architecture:** Keep the homepage composition stable and insert a focused server component for DLSM. Replace the investor route's shared homepage renderer with a dedicated server component that reuses the existing Container, Button, localization, and animation primitives.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 3, Lucide React, existing Spark AI design components.

**Spec:** `docs/superpowers/specs/2026-08-31-dlsm-web-investor-update.md`

## Global Constraints

- Preserve `/`, `/investors`, `/investors/deck`, existing primary navigation labels, logo treatment, bilingual switching, and homepage hero.
- Do not add dependencies.
- Do not publish unverified market, revenue, savings, performance, compliance, customer, or standards claims.
- Do not use em dash characters in visible copy.
- Keep the existing light blue-white theme, accent color, radius system, and reduced-motion behavior.

---

### Task 1: Content acceptance test

**Files:**
- Create: `scripts/verify-dlsm-web-content.mjs`

**Interfaces:**
- Consumes: homepage, investor route, and DLSM component source files.
- Produces: exit code 0 only when the approved DLSM content boundary and route separation are present.

- [ ] **Step 1: Write the failing source acceptance test**

Create assertions for homepage integration, investor route separation, bilingual DLSM terminology, pilot route language, and prohibited claim characters or phrases.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node scripts/verify-dlsm-web-content.mjs`

Expected: FAIL because the DLSM components and investor route separation do not exist.

### Task 2: Homepage DLSM business module

**Files:**
- Create: `components/home/dlsm-business-section.tsx`
- Modify: `app/(site)/page.tsx`

**Interfaces:**
- Consumes: `Container`, `AnimatedBlock`, `LocalizedText`, `Button`, and existing routes.
- Produces: `DlsmBusinessSection(): JSX.Element` rendered between the appliance and knowledge-flow sections.

- [ ] **Step 1: Implement the minimal homepage section**

Use one asymmetric introduction, a four-stage lifecycle flow, a control-plane boundary note, and CTAs to `/investors` and `/contact`.

- [ ] **Step 2: Run the source acceptance test**

Run: `node scripts/verify-dlsm-web-content.mjs`

Expected: still FAIL because the investor page is not yet separated.

### Task 3: Dedicated investor page

**Files:**
- Create: `components/sections/dlsm-investor-page.tsx`
- Modify: `app/investors/page.tsx`
- Modify: `app/investors/deck/page.tsx`

**Interfaces:**
- Consumes: existing design-system primitives and bilingual localization components.
- Produces: `DlsmInvestorPage(): JSX.Element`, used by both investor routes.

- [ ] **Step 1: Implement the investor narrative**

Create a compact hero, market problem, DLSM architecture, company role, enterprise participation model, pilot route, evidence boundary, and contact CTA.

- [ ] **Step 2: Replace homepage reuse in both investor routes**

Import `DlsmInvestorPage` and define DLSM-specific metadata while preserving route slugs.

- [ ] **Step 3: Run the source acceptance test**

Run: `node scripts/verify-dlsm-web-content.mjs`

Expected: PASS.

### Task 4: Build and rendered-page verification

**Files:**
- Verify only: all files above.

**Interfaces:**
- Consumes: completed implementation and installed dependencies.
- Produces: fresh typecheck, build, route response, and visual inspection evidence.

- [ ] **Step 1: Run type checking**

Run: `npm.cmd run typecheck`

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run: `npm.cmd run build`

Expected: exit code 0 and both `/` and `/investors` listed as generated routes.

- [ ] **Step 3: Start local preview and inspect routes**

Run: `npm.cmd run dev -- --port 3100`, then verify HTTP responses and capture desktop and mobile screenshots for `/` and `/investors`.

- [ ] **Step 4: Complete the design pre-flight**

Check bilingual copy, zero em dashes, one theme/accent/radius system, CTA contrast and wrapping, navigation stability, reduced motion, mobile collapse, and absence of fake metrics or unsupported claims.
