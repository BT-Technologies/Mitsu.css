# Icons

## Mitsu UI Icons

MitsuCSS includes a **lightweight SVG icon system** based on a sprite file.

---

## Sprite

```
assets/icons/mitsu-ui-32.svg
```

---

## Usage

```html
<svg class="mitsu-icon mitsu-icon-32" aria-hidden="true">
  <use href="assets/icons/mitsu-ui-32.svg#mi-home"></use>
</svg>
```

---

## Sizes

Icons are controlled via utility classes:

- `.mitsu-icon-32` → 32x32
- `.mitsu-icon-24` → 24x24
- `.mitsu-icon-16` → 16x16

---

## Color Behavior

Icons use `currentColor`, meaning they automatically inherit text color.

```css
.button {
  color: #2563eb;
}
```

```html
<button class="button">
  <svg class="mitsu-icon mitsu-icon-16">
    <use href="assets/icons/mitsu-ui-32.svg#mi-check"></use>
  </svg>
  Save
</button>
```

---

## Styling

You can customize icons using standard CSS:

```css
.mitsu-icon {
  stroke-width: 2;
}

.button:hover .mitsu-icon {
  color: #1d4ed8;
}
```

---

## Naming Convention

Icons follow the `mi-*` prefix:

- `mi-home`
- `mi-user`
- `mi-settings`
- `mi-check`
- `mi-close`

---

## Preview (Example)

```html
<div class="icon-grid">
  <svg class="mitsu-icon mitsu-icon-24">
    <use href="assets/icons/mitsu-ui-32.svg#mi-home"></use>
  </svg>

  <svg class="mitsu-icon mitsu-icon-24">
    <use href="assets/icons/mitsu-ui-32.svg#mi-user"></use>
  </svg>

  <svg class="mitsu-icon mitsu-icon-24">
    <use href="assets/icons/mitsu-ui-32.svg#mi-settings"></use>
  </svg>
</div>
```

---

## Features

- 🎯 Stroke-based SVG icons
- 🎨 Uses `currentColor` (automatic theming)
- ⚡ Single sprite file (performance friendly)
- 🧩 Easy to integrate in any component
- 🌗 Works with light and dark themes

---

## Recommendations

- Use `aria-hidden="true"` for decorative icons
- Provide accessible labels when icons convey meaning
- Keep icon usage consistent across components

---

## Accessibility Example

```html
<button>
  <svg class="mitsu-icon mitsu-icon-16" role="img" aria-label="Save">
    <use href="assets/icons/mitsu-ui-32.svg#mi-check"></use>
  </svg>
</button>
```
