## 🎯 Objective

Build a **fully static, versioned documentation website** for **Axis-Twelve**, using **Next.js** for structure and routing.

The site must:

* Support **multiple major versions (v1 & v2)**
* Document **every feature/module exhaustively**
* Include **technical API docs, usage examples, and changelogs**
* Use **static HTML files generated via Next.js (no Markdown)**
* Provide a **searchable left-side navigation menu**

This is a **documentation-first, developer-focused website**.

---

## 🧱 Core Technology Stack

### Required

* **Next.js (App Router preferred)**
* **Static Site Generation (SSG) only**
* **No Markdown files**
* **No inline CSS**
* **Axis-Twelve CSS utilities only**

### Explicitly Disallowed

* Markdown (`.md`, `.mdx`)
* Runtime backend APIs
* Inline styles
* CSS frameworks other than Axis-Twelve

---

## 🔗 Source Repositories (Source of Truth)

* **Axis-Twelve v1**

  * [https://github.com/dale-tomson/axis-twelve/tree/ver-1.x](https://github.com/dale-tomson/axis-twelve/tree/ver-1.x)
* **Axis-Twelve v2**

  * [https://github.com/dale-tomson/axis-twelve/tree/ver-2.x](https://github.com/dale-tomson/axis-twelve/tree/ver-2.x)

All documentation **must fully reflect** the features, modules, variants, and utilities present in these branches.

---

## 🏗️ Site Structure (Next.js Routing)

```txt
/app
  /page.tsx                 → Home / Landing
  /v1
    /page.tsx               → V1 index
    /features
      /[feature]
        /page.tsx           → Individual feature pages
    /changelog
      /page.tsx
  /v2
    /page.tsx               → V2 index
    /modules
      /[module]
        /page.tsx           → Individual module pages
    /changelog
      /page.tsx
/components
  Header.tsx
  Sidebar.tsx
  SearchInput.tsx
  CodeBlock.tsx
  Collapsible.tsx
/lib
  v1-data.ts                → Structured static data (JSON/TS)
  v2-data.ts
```

📌 **All content must be rendered from structured static data (TS/JSON), not Markdown.**

---

## 1️⃣ Home / Landing Page

### Must Include

#### 🔹 Axis-Twelve Highlights

* GitHub links (v1 & v2)
* npm package links
* CDN links via **unpkg**, versioned and sub-versioned (up to 5 per version)

Example:

```txt
https://unpkg.com/axis-twelve@2.0.0/dist/
https://unpkg.com/axis-twelve@2.1.0/dist/
```

#### 🔹 Bundle Size Information

* Static display of:

  * Total bundle size per version
  * Individual module sizes
* Values sourced from build artifacts or documented constants

#### 🔹 Documentation Entry Points

* “Documentation – v1”
* “Documentation – v2”

---

## 2️⃣ Documentation – Version 1

### 📌 V1 Index Page

* What Axis-Twelve v1 is
* Architectural overview
* Feature-based system explanation
* Installation & basic usage
* Known limitations / design philosophy

---

### 📚 V1 Feature Pages

Each **feature must have its own page**, for example:

* Grid
* Flex
* Spacing
* Variables
* Utilities
* Helpers
* Any additional feature present in `ver-1.x`

⚠️ **Every feature must be fully documented — no placeholders.**

---

### 📄 Structure of Each Feature Page (Mandatory)

Each page must contain **three clearly separated sections**:

#### 1️⃣ Technical / API Documentation

* Full list of:

  * Classes
  * Variants
  * Modifiers
  * Responsive behaviors
* Nested sub-navigation for variants (if applicable)

#### 2️⃣ Usage Examples (Collapsible)

* Multiple examples per feature:

  * Basic usage
  * Advanced usage
  * Edge cases
* HTML examples
* Syntax-highlighted code blocks
* Collapsible UI (expand/collapse)

#### 3️⃣ Feature-Scoped Changelog (Collapsible)

* Versioned changes affecting **only that feature**
* Grouped by sub-version (e.g., `1.1.0`, `1.2.0`)
* Collapsible per version

---

### 📜 Full Changelog – V1

* Dedicated top-menu page
* Complete changelog for **all v1 releases**
* Grouped by version & sub-version
* Collapsible sections

---

## 3️⃣ Documentation – Version 2

### 📌 V2 Index Page

* Overview of Axis-Twelve v2
* Modular architecture explanation
* Differences from v1
* Module-first design philosophy
* Installation & usage

---

### 📦 V2 Module Pages

Each **module must have its own page**, for example:

* Grid Module
* Flex Module
* Spacing Module
* Variables Module
* Any module present in `ver-2.x`

⚠️ **Every module and its variants must be fully documented with examples.**

---

### 📄 Structure of Each Module Page (Mandatory)

#### 1️⃣ Technical / API Documentation

* Module purpose
* Available utilities
* Configuration options
* Variants & modifiers

#### 2️⃣ Usage Examples (Collapsible)

* Multiple real-world usage examples
* Code snippets
* Optional visual preview

#### 3️⃣ Module-Scoped Changelog (Collapsible)

* Changes specific to that module
* Grouped by sub-version

---

### 📜 Full Changelog – V2

* Dedicated top-menu page
* Complete v2 changelog
* Collapsible by version

---

## 🔍 Sidebar Navigation (Critical Requirement)

### Left Sidebar Must:

* Be **version-aware**
* List:

  * Features (v1)
  * Modules (v2)
* Be **sticky & scrollable**
* Include a **search input**

### Search Behavior:

* Client-side filtering
* Real-time
* Matches:

  * Feature/module names
  * Variants
  * Utility class names
* Keyboard accessible

---

## 🎨 Styling & Design Rules

### CSS Source (Mandatory)

Load Axis-Twelve v2 from CDN:

```html
https://unpkg.com/axis-twelve@2.0.0/dist/modules/
```

🚫 No inline styles
🚫 No external CSS frameworks
✅ Axis-Twelve utilities only

---

### Design Inspiration

* Inspired by:

  * [http://preview.themeforest.net/item/thedocs-online-documentation-template/full_screen_preview/13070884](http://preview.themeforest.net/item/thedocs-online-documentation-template/full_screen_preview/13070884)
* Maintain originality:

  * Do NOT copy markup or assets
  * Only mirror layout patterns (sidebar + content)

---

### 🎨 Color Palette (Mandatory)

```css
.first-color { background: #ff6138; }
.second-color { background: #ffff9d; }
.third-color { background: #beeb9f; }
.fourth-color { background: #79bd8f; }
```

Use consistently for:

* Headers
* Active navigation
* Accents
* Callouts

---

## ⚙️ Technical Constraints Summary

* Next.js only
* Static site generation
* No Markdown
* No inline styles
* Fully documented features/modules
* Searchable sidebar
* Accessible & responsive

---

## 📦 Final Deliverables

* Fully working Next.js static documentation site
* Clean, scalable folder structure
* Structured static data files for v1 & v2
* Ready for GitHub Pages / Netlify / Vercel export

---

## ✅ Success Criteria

* Every Axis-Twelve feature/module is documented
* Clear separation between v1 and v2
* Excellent developer UX
* Fast navigation & search
* Looks and feels like a **serious OSS documentation platform**