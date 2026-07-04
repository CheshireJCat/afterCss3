# CSSOM

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model" caniuse="https://caniuse.com/?search=CSSOM" status="CSSOM 1" label="Reference links" />

## Plain-language explanation

Read, parse, serialize, and manipulate CSS rules.

## Representative syntax

```css
document.styleSheets, CSSStyleRule, CSSStyleDeclaration
```

## Demo

<CssDemo title="CSSOM" code=".target {
  /* document.styleSheets, CSSStyleRule, CSSStyleDeclaration */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Read, parse, serialize, and manipulate CSS rules.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: CSS-related Web APIs and Houdini Capabilities
- Maturity / source: CSSOM 1
- Representative syntax: `document.styleSheets, CSSStyleRule, CSSStyleDeclaration`
- Position in category: 1 / 11
