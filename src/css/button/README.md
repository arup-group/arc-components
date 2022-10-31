# ARC CSS: `button`

### Default

- type: filled
- size: medium
- color: default

```html
<button class="arc-button">default</button>
```

### Prefix

```html
<button class="arc-button">
  <svg class="arc-icon arc-button--prefix">
    <use href="/assets/icons.svg#arc-{ICON_NAME}" />
  </svg>
  <span class="arc-button--label">label</span>
</button>
```

### Suffix

```html
<button class="arc-button">
  <svg class="arc-icon arc-button--suffix">
    <use href="/assets/icons.svg#arc-{ICON_NAME}" />
  </svg>
  <span class="arc-button--label">label</span>
</button>
```

### Type

```html
<button class="arc-button arc-button--type-filled">filled</button>

<button class="arc-button arc-button--type-outlined">outlined</button>

<button class="arc-button arc-button--type-tab">tab</button>
```

### Size

```html
<button class="arc-button arc-button--size-small">small</button>

<button class="arc-button arc-button--size-medium">medium</button>

<button class="arc-button arc-button--size-large">large</button>
```

### Color

```html
  <button class="arc-button arc-button--color-primary">primary</button>
  <button class="arc-button arc-button--color-secondary">primary</button>
  <button class="arc-button arc-button--color-error">primary</button>
  <button class="arc-button arc-button--color-warning">primary</button>
  <button class="arc-button arc-button--color-info">primary</button>
  <button class="arc-button arc-button--color-success">primary</button>
```

> `arc-button--type-tab` is not compatible with `arc-button--color-{color}`.

### Disabled

```html
<button class="arc-button arc-button--disabled">disabled</button>
```

### Active

```html
<button class="arc-button arc-button--type-tab arc-button--active">active</button>
```

> `arc-button--type-filled` & `arc-button--type-outlined` are not compatible with `arc-button--active`.

### Loading

```html
<button class="arc-button arc-button--loading">
  <svg class="arc-spinner arc-button--loader">
    <circle class="arc-spinner--track" />
    <circle class="arc-spinner--indicator" />
  </svg>
  <span class="arc-button--label">loading</span>
</button>
```
