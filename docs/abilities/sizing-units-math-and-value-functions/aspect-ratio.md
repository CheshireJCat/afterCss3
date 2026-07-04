# aspect-ratio

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio" caniuse="https://caniuse.com/?search=aspect-ratio" status="Snapshot pre-CR snapshot, publishable" label="Reference links" />

## Plain-language explanation

Let aspect ratio participate in layout without padding hacks.

## Representative syntax

```css
aspect-ratio: 16 / 9;
```

## Demo

<CssDemo title="aspect-ratio" code=".target {
  /* aspect-ratio: 16 / 9; */
  outline: 3px solid var(--brand);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Let aspect ratio participate in layout without padding hacks.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Snapshot pre-CR snapshot, publishable
- Representative syntax: `aspect-ratio: 16 / 9;`
- Position in category: 2 / 17
