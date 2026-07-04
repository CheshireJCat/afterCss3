# Custom states

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Astate%28--checked%29%20CSS" caniuse="https://caniuse.com/?search=%3Astate" status="CSS Custom States" label="Reference links" />

## Plain-language explanation

Expose custom element state to CSS through ElementInternals.

## Representative syntax

```css
:state(--checked)
```

## Demo

<CssDemo title="Custom states" code=":state(--checked)" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Expose custom element state to CSS through ElementInternals.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: CSS Custom States
- Representative syntax: `:state(--checked)`
- Position in category: 9 / 15
