# Named pages

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=named%20pages%20CSS" caniuse="https://caniuse.com/?search=page" status="Paged Media 3" label="Reference links" />

## Plain-language explanation

Use different page templates for different document sections.

## Representative syntax

```css
.cover { page: cover; } @page cover { ... }
```

## Demo

<CssDemo title="Named pages" code=".cover { page: cover; } @page cover { ... }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Use different page templates for different document sections.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Paged Media, Print, and Publishing Layout
- Maturity / source: Paged Media 3
- Representative syntax: `.cover { page: cover; } @page cover { ... }`
- Position in category: 4 / 9
