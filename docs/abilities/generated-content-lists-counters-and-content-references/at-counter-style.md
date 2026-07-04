# @counter-style

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@counter-style" caniuse="https://caniuse.com/?search=%40counter-style" status="official definition" label="Reference links" />

## Plain-language explanation

Define custom ordered and unordered list marker systems.

## Representative syntax

```css
@counter-style thumbs { system: cyclic; symbols: 👍; suffix: ' '; }
```

## Demo

<CssDemo title="@counter-style" code="@counter-style thumbs { system: cyclic; symbols: 👍; suffix: ' '; }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Define custom ordered and unordered list marker systems.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: official definition
- Representative syntax: `@counter-style thumbs { system: cyclic; symbols: 👍; suffix: ' '; }`
- Position in category: 1 / 9
