# ARC CSS: `card`

### Default

```html
<article class="arc-card">
  <header class="arc-card--header">
    <h2>Default</h2>
  </header>
  <div class="arc-card--content">Card Content ...</div>
  <footer class="arc-card--footer">
    <button class="arc-button arc-button--color-primary">Action</button>
  </footer>
</article>
```

### Image

```html
<article class="arc-card">
  <header class="arc-card--header">
    <h2>Default</h2>
  </header>
  <div class="arc-image arc-card--image">
    <div id="arc-image--overlay">
      <svg
        id="placeholder"
        width="100%"
        height="100%"
        viewBox="0 0 360 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M182.36 55L216.446 114.04H148.273L182.36 55Z" fill="rgb(var(--arc-grey-030))" />
        <circle cx="236" cy="55" r="17" fill="rgb(var(--arc-grey-030))" />
        <rect x="122" y="87" width="27" height="27" fill="rgb(var(--arc-grey-030))" />
      </svg>
    </div>
  </div>
  <div class="arc-card--content">Card Content ...</div>
  <footer class="arc-card--footer">
    <button class="arc-button arc-button--color-primary">Action</button>
  </footer>
</article>
```

### Collapsed

```html
<article class="arc-card arc-card--collapsed">
  <header class="arc-card--header">
    <h2>Default</h2>
  </header>
  <div class="arc-card--content">Card Content ...</div>
  <footer class="arc-card--footer">
    <button class="arc-button arc-button--color-primary">Action</button>
  </footer>
</article>
```
