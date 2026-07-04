# Scrollbar styling

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Scrollbar%20styling%20CSS" caniuse="https://caniuse.com/?search=Scrollbar%20styling" status="Scrollbars 1 / Overflow" label="Reference links" />

## Plain-language explanation

Style scrollbar color, width, and reserved layout space.

## Representative syntax

```css
scrollbar-color, scrollbar-width, scrollbar-gutter
```

## Demo

<CssDemo title="Scrollbar styling" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Style scrollbar color, width, and reserved layout space.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Scrolling, Overflow, and Scroll-based Components
- Maturity / source: Scrollbars 1 / Overflow
- Representative syntax: `scrollbar-color, scrollbar-width, scrollbar-gutter`
- Position in category: 4 / 10
