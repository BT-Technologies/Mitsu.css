# MitsuCSS Framework (v0.0.1)

![Status](https://img.shields.io/badge/status-en%20desarrollo-orange)
![Type](https://img.shields.io/badge/type-CSS%20Framework-blue)
![Tech](https://img.shields.io/badge/tech-HTML%2C%20CSS%2C%20JavaScript-lightgrey)
![Version](https://img.shields.io/badge/version-0.0.1-informational)

**MitsuCSS** is a modern CSS framework and UI toolkit, evolved from the legacy Gumby 2.0 codebase.

This is an **early development release**, focused on establishing the core architecture, design system, and foundational components.

---

# ⚠️ Status

> 🚧 Early development (v0.0.1)  
> APIs, structure, and components may change without notice.

---

# Overview

MitsuCSS is a **lightweight front-end framework** that provides:

- Design tokens
- Layout primitives
- UI components
- Utility classes
- Minimal JavaScript behaviors

Built to deliver a **clean, scalable, and fully controllable UI system** using modern web standards.

---

# Quick Start

Open the demo environment:

```
demo/index.html
```

No build step required.

---

# Project Structure

```
project-root/
│
├── assets/              # Images, icons, and static resources
├── css/                 # Compiled framework styles
├── sass/                # Source Sass files
├── js/                  # JavaScript (core + legacy)
├── demo/                # Documentation & showcase
├── fonts/               # Font assets
├── vendor/              # Third-party libraries
│
├── gumby.min.js         # Legacy (deprecated)
├── favicon.svg
├── README.md
├── .gitignore
```

---

# Core Files

| File | Description |
|---|---|
| `css/mitsucss.css` | Core framework (tokens, layout, components, utilities) |
| `js/libs/mitsucss.js` | Runtime API (`MitsuCSS.ready()`, `MitsuCSS.init()`) |
| `css/style.css` | Custom styles / overrides |
| `js/main.js` | Demo boot logic |

---

# Icons

## Mitsu UI Icons

**Sprite:**
```
assets/icons/mitsu-ui-32.svg
```

### Usage

```html
<svg class="mitsu-icon mitsu-icon-32" aria-hidden="true">
  <use href="assets/icons/mitsu-ui-32.svg#mi-home"></use>
</svg>
```

### Sizes

- `.mitsu-icon-32`
- `.mitsu-icon-24`
- `.mitsu-icon-16`

### Features

- Stroke-based SVG icons
- Uses `currentColor`
- Lightweight sprite system
- Theme compatible (light/dark)

---

# JavaScript API

```js
MitsuCSS.ready(() => {
  MitsuCSS.init();
});
```

### Data Attributes

| Attribute | Description |
|---|---|
| `data-mitsu-toggle` | Toggle behavior |
| `data-mitsu-tabs` | Tabs system |

---

# Modern Standards

- CSS variables (design tokens)
- CSS Grid and Flexbox
- Semantic HTML
- Accessible components (ARIA)
- Keyboard navigation
- Reduced motion support
- Non-blocking JavaScript

---

# Migration (from Gumby 2.0)

Legacy assets remain for transition purposes.

**Suggested approach:**

1. Keep existing structure
2. Replace legacy classes progressively
3. Use `data-mitsu-*` attributes
4. Move custom styles to `style.css`

---

# Legacy Notes

Some Gumby files (e.g. `gumby.min.js`) are still included for compatibility.

These are **deprecated** and will be removed in future versions.

---

# Philosophy

- Simplicity over complexity  
- Control over abstraction  
- Performance over bloat  

---

# Roadmap

- [ ] Expand components
- [ ] Improve documentation
- [ ] Stabilize utilities
- [ ] Enhance theming
- [ ] Refine JS behaviors

---

# License

Proprietary — **BT-Tech Developers Labs**
# MitsuCSS Framework (v0.0.1)

![Status](https://img.shields.io/badge/status-en%20desarrollo-orange)
![Type](https://img.shields.io/badge/type-CSS%20Framework-blue)
![Tech](https://img.shields.io/badge/tech-HTML%2C%20CSS%2C%20JavaScript-lightgrey)
![Version](https://img.shields.io/badge/version-0.0.1-informational)

**MitsuCSS** is a modern CSS framework and UI toolkit, evolved from the legacy Gumby 2.0 codebase.

This is an **early development release**, focused on establishing the core architecture, design system, and foundational components.

---

# ⚠️ Status

> 🚧 Early development (v0.0.1)  
> APIs, structure, and components may change without notice.

---

# Overview

MitsuCSS is a **lightweight front-end framework** that provides:

- Design tokens
- Layout primitives
- UI components
- Utility classes
- Minimal JavaScript behaviors

Built to deliver a **clean, scalable, and fully controllable UI system** using modern web standards.

---

# Project Structure

```
project-root/
│
├── css/
│   ├── mitsucss.css
│   └── style.css
│
├── js/
│   ├── libs/
│   │   └── mitsucss.js
│   └── main.js
│
├── demo/
│   ├── index.html
│   ├── tokens.html
│   ├── layout.html
│   ├── components.html
│   ├── utilities.html
│   ├── demo.html
│   └── ui.html
```

---

# Core Files

| File | Description |
|---|---|
| `css/mitsucss.css` | Core framework (tokens, layout, components, utilities) |
| `js/libs/mitsucss.js` | Runtime API (`MitsuCSS.ready()`, `MitsuCSS.init()`) |
| `css/style.css` | Custom styles / overrides |
| `js/main.js` | Demo boot logic |

---

# Demo Pages

All demo and documentation pages are located in the `/demo` folder.

---

# JavaScript API

```js
MitsuCSS.ready(() => {
  MitsuCSS.init();
});
```

---

# Modern Standards

- CSS variables (design tokens)
- CSS Grid and Flexbox
- Semantic HTML
- Accessible components (ARIA)
- Keyboard navigation
- Reduced motion support
- Non-blocking JavaScript

---

# Philosophy

- Simplicity over complexity  
- Control over abstraction  
- Performance over bloat  

---

# License

 — **BT-Tech Developers Labs**
