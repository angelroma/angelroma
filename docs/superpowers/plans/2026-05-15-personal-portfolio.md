# Personal Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static-first modern developer portfolio for `angelroma.github.io`.

**Architecture:** Use Vite + React + TypeScript with local structured content files for profile, project, experience, and link data. Render a single-page portfolio with reusable sections and embedded GitHub contribution visuals that can later be replaced by build-time generated data.

**Tech Stack:** Vite, React, TypeScript, Vitest, React Testing Library, CSS.

---

## File Structure

- `package.json`: npm scripts and dependencies for development, tests, build, and preview.
- `index.html`: Vite app entry shell.
- `vite.config.ts`: Vite config with React plugin and Vitest jsdom environment.
- `tsconfig.json`, `tsconfig.node.json`: TypeScript project configuration.
- `src/main.tsx`: React root mounting.
- `src/App.tsx`: Page composition using focused section components.
- `src/content/portfolio.ts`: Curated profile, project, experience, and social data.
- `src/components/*.tsx`: Small presentational sections and cards.
- `src/App.test.tsx`: Behavior tests for required portfolio content.
- `src/styles.css`: Global responsive visual design.

## Task 1: Project Tooling And Test Harness

**Files:**
- Create: `package.json`
- Create: `index.html`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.node.json`
- Create: `src/setupTests.ts`

- [ ] **Step 1: Create tooling files**

Create npm scripts for `dev`, `build`, `test`, and `preview`. Configure Vitest with jsdom and Testing Library matchers.

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: dependencies install and `package-lock.json` is generated.

## Task 2: Failing Portfolio Render Test

**Files:**
- Create: `src/App.test.tsx`

- [ ] **Step 1: Write the failing test**

Test that the app renders the required portfolio sections, the projects `QueHay` and `Porky Finance`, LinkedIn/GitHub contact links, and an accessible GitHub contributions image.

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- --run`

Expected: FAIL because `src/App.tsx` and the portfolio implementation do not exist yet.

## Task 3: Minimal React Portfolio Implementation

**Files:**
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/content/portfolio.ts`
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/Projects.tsx`
- Create: `src/components/Experience.tsx`
- Create: `src/components/GitHubActivity.tsx`
- Create: `src/components/Contact.tsx`

- [ ] **Step 1: Implement content data**

Add local structured data for profile summary, social links, projects, experience, and GitHub visual URLs.

- [ ] **Step 2: Implement focused components**

Render the single-page portfolio from local data. Keep project and experience rendering data-driven.

- [ ] **Step 3: Run test to verify it passes**

Run: `npm test -- --run`

Expected: PASS.

## Task 4: Responsive Visual Design

**Files:**
- Create: `src/styles.css`
- Modify: `src/main.tsx`

- [ ] **Step 1: Add global styling**

Create a modern developer visual system with responsive layout, project cards, experience timeline, GitHub activity section, and compact contact area.

- [ ] **Step 2: Import styles**

Import `src/styles.css` from `src/main.tsx`.

- [ ] **Step 3: Run build**

Run: `npm run build`

Expected: build exits 0 and outputs `dist`.

## Task 5: Local Browser Verification

**Files:**
- No source changes expected unless verification finds layout issues.

- [ ] **Step 1: Start local dev server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite serves the app locally.

- [ ] **Step 2: Open browser and inspect desktop/mobile**

Use the in-app browser to verify the site loads, content is visible, links render, and the responsive layout does not overlap.

- [ ] **Step 3: Final verification**

Run: `npm test -- --run`

Run: `npm run build`

Expected: both commands exit 0.
