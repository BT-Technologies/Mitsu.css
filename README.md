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
