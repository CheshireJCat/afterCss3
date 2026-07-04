# Scroll-state queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40container%20CSS" caniuse="https://caniuse.com/?search=%40container" status="Conditional 5" label="Reference links" />

## Plain-language explanation

Drive styles from scroll state, such as sticky header shadows.

## Representative syntax

```css
@container scroll-state(stuck: top)
```

## Demo

<CssDemo title="Scroll-state queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Drive styles from scroll state, such as sticky header shadows.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Conditional 5
- Representative syntax: `@container scroll-state(stuck: top)`
- Position in category: 9 / 10
