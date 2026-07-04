# Anchor and position fallback queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40container%20CSS" caniuse="https://caniuse.com/?search=%40container" status="Conditional/Anchor draft" label="Reference links" />

## Plain-language explanation

Adjust styles based on the result of anchor positioning fallback selection.

## Representative syntax

```css
@container anchored(...) or fallback-related queries
```

## Demo

<CssDemo title="Anchor and position fallback queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Adjust styles based on the result of anchor positioning fallback selection.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Conditional/Anchor draft
- Representative syntax: `@container anchored(...) or fallback-related queries`
- Position in category: 13 / 13
