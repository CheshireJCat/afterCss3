# @when / @else

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40when%20CSS" caniuse="https://caniuse.com/?search=%40when" status="draft" label="Reference links" />

## Plain-language explanation

Combine media, supports, and container conditions into native conditional chains.

## Representative syntax

```css
@when media(width > 600px) and supports(display: grid) { ... } @else { ... }
```

## Demo

<CssDemo title="@when / @else" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Combine media, supports, and container conditions into native conditional chains.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: draft
- Representative syntax: `@when media(width &gt; 600px) and supports(display: grid) { ... } @else { ... }`
- Position in category: 8 / 12
