# Runtime environment queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83%E6%9F%A5%E8%AF%A2%20CSS" caniuse="https://caniuse.com/?search=%E8%BF%90%E8%A1%8C%E7%8E%AF%E5%A2%83%E6%9F%A5%E8%AF%A2" status="Media Queries 5" label="Reference links" />

## Plain-language explanation

Detect scripting, refresh capability, overflow behavior, and PWA display modes.

## Representative syntax

```css
scripting, update, overflow-block, overflow-inline, display-mode
```

## Demo

<CssDemo title="Runtime environment queries" code=".target {
  /* scripting, update, overflow-block, overflow-inline, display-mode */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Detect scripting, refresh capability, overflow behavior, and PWA display modes.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Media Queries 5
- Representative syntax: `scripting, update, overflow-block, overflow-inline, display-mode`
- Position in category: 5 / 13
