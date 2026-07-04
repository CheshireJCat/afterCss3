# outline-color:auto

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=outline-color%3Aauto%20CSS" caniuse="https://caniuse.com/?search=outline-color" status="CSS UI 4" label="Reference links" />

## Plain-language explanation

Let the browser choose an accessible focus outline color.

## Representative syntax

```css
outline-color: auto;
```

## Demo

<CssDemo title="outline-color:auto" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Let the browser choose an accessible focus outline color.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Forms, Controls, and Interactive UI
- Maturity / source: CSS UI 4
- Representative syntax: `outline-color: auto;`
- Position in category: 9 / 12
