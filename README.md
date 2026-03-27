# MitsuCSS Framework (2026)

**MitsuCSS** is a modern CSS framework and UI toolkit, evolved from the legacy **Gumby 2.0** codebase and redesigned for current web standards.

It provides a lightweight, dependency-free foundation for building responsive, accessible, and maintainable user interfaces.

---

# Overview

MitsuCSS is designed as a **modular front-end framework**, combining:

- Design tokens
- Layout primitives
- UI components
- Utility classes
- Minimal JavaScript behaviors

The goal is to deliver a **clean, scalable, and framework-agnostic UI system** without relying on heavy external libraries.

---

# Core Principles

- 🚫 No jQuery
- 🎯 Utility-first + component-based approach
- 🎨 Token-driven design system (light / dark themes)
- ♿ Accessibility-first (ARIA + keyboard support)
- ⚡ Lightweight and fast
- 📱 Fully responsive (Grid + Flexbox)

---

# Project Structure

```
project-root/
│
├── css/
│   ├── mitsucss.css     # Core framework styles
│   └── style.css        # Project/demo overrides
│
├── js/
│   ├── libs/
│   │   └── mitsucss.js  # Core framework JS
│   └── main.js          # Demo initialization
│
├── index.html           # Framework overview
├── tokens.html          # Design tokens
├── layout.html          # Layout system
├── components.html      # Components showcase
├── utilities.html       # Utility classes
├── demo.html            # Playground
├── ui.html              # UI showcase
```

---

# Core Files

| File | Description |
|---|---|
| `css/mitsucss.css` | Core framework (tokens, layout, components, utilities) |
| `js/libs/mitsucss.js` | Runtime API (`MitsuCSS.ready()`, `MitsuCSS.init()`) |
| `css/style.css` | Custom project styles |
| `js/main.js` | Demo boot logic |

---

# JavaScript API

MitsuCSS provides a minimal runtime API:

```js
MitsuCSS.ready(() => {
  MitsuCSS.init();
});
```

### Data Attributes

| Attribute | Description |
|---|---|
| `data-mitsu-toggle` | Toggle elements (menus, modals, etc.) |
| `data-mitsu-tabs` | Tab navigation behavior |

---

# Pages

| Page | Description |
|---|---|
| `index.html` | Overview and navigation |
| `tokens.html` | Design tokens |
| `layout.html` | Layout primitives |
| `components.html` | UI components |
| `utilities.html` | Utility classes |
| `demo.html` | Interactive playground |
| `ui.html` | Full UI showcase |

---

# 2026 Standards

MitsuCSS follows modern front-end practices:

- Tokenized design system
- Native CSS variables
- CSS Grid and Flexbox layouts
- Semantic HTML structure
- Accessible components with ARIA states
- Keyboard-friendly interactions
- Reduced motion support
- Non-blocking JavaScript

---

# Migration from Gumby

Legacy **Gumby 2.0** assets are still included for compatibility, but MitsuCSS is now the **active baseline**.

### Migration Steps

1. Keep existing HTML structure where possible.
2. Replace old classes with MitsuCSS utilities/components.
3. Migrate JS behavior to:
   - `data-mitsu-toggle`
   - `data-mitsu-tabs`
4. Move custom styles to `css/style.css`.

---

# Philosophy

MitsuCSS is built to be:

- Simple to adopt
- Easy to extend
- Framework-agnostic
- Free of unnecessary dependencies

It is not meant to compete with large ecosystems, but to provide a **clean and controlled UI foundation**.

---

# Status

| Area | Status |
|---|---|
| Core CSS | Stable |
| Components | In progress |
| JavaScript API | Stable |
| Documentation | In progress |

---

# License

This project is **proprietary**.

Usage, distribution, or modification is restricted without authorization from:

**BT-Tech Developers Labs**
