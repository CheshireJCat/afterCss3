# Shadow DOM selection

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Ahost%20CSS" caniuse="https://caniuse.com/?search=%3Ahost" status="CSS Scoping / Shadow Parts" label="Reference links" />

## Plain-language explanation

Manage style boundaries and exposed parts across Web Components.

## Representative syntax

```css
:host, :host(), :host-context(), ::slotted(), ::part()
```

## Demo

<CssDemo title="Shadow DOM selection" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Manage style boundaries and exposed parts across Web Components.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Selectors, Pseudo-classes, and Pseudo-elements
- Maturity / source: CSS Scoping / Shadow Parts
- Representative syntax: `:host, :host(), :host-context(), ::slotted(), ::part()`
- Position in category: 8 / 15
