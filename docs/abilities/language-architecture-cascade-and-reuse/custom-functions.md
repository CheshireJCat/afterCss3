# Custom functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40function%20CSS" caniuse="https://caniuse.com/?search=%40function" status="Functions and Mixins draft, partially implemented" label="Reference links" />

## Plain-language explanation

Native parameterized value functions reduce dependency on Sass or build tools.

## Representative syntax

```css
@function --space(--n) { result: calc(var(--n) * 4px); }
```

## Demo

<CssDemo title="Custom functions" code="@function --space(--n) { result: calc(var(--n) * 4px); }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Native parameterized value functions reduce dependency on Sass or build tools.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: Functions and Mixins draft, partially implemented
- Representative syntax: `@function --space(--n) { result: calc(var(--n) * 4px); }`
- Position in category: 10 / 12
