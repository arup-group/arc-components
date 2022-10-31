# ARC CSS: `icon-button`

### Default

```html
<button class="arc-icon-button">
  <span class="arc-icon-button--icon">
    <svg class="arc-icon">
      <use href="/assets/icons.svg#arc-{ICON_NAME}" />
    </svg>
  </span>
  <span class="arc-icon-button--action">default</span>
</button>

<a class="arc-icon-button">
  <span class="arc-icon-button--icon">
    <svg class="arc-icon">
      <use href="/assets/icons.svg#arc-{ICON_NAME}" />
    </svg>
  </span>
  <span class="arc-icon-button--action">default</span>
</a>
```

### Active State

```html
<button class="arc-icon-button arc-icon-button--active">
  <span class="arc-icon-button--icon">
    <svg class="arc-icon">
      <use href="/assets/icons.svg#arc-{ICON_NAME}" />
    </svg>
  </span>
  <span class="arc-icon-button--action">active</span>
</button>
```

### Loading State

```html
<button class="arc-icon-button arc-icon-button--loading">
  <span class="arc-icon-button--loader">
    <svg class="arc-spinner">
      <circle class="arc-spinner--track" />
      <circle class="arc-spinner--indicator" />
    </svg>
  </span>
  <span class="arc-icon-button--icon">
    <svg class="arc-icon">
      <use href="/assets/icons.svg#arc-{ICON_NAME}" />
    </svg>
  </span>
  <span class="arc-icon-button--action">loading</span>
</button>
```
