# Fallback positioning

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40position-try%20CSS" caniuse="https://caniuse.com/?search=%40position-try" status="Anchor Positioning" label="Reference links" />

## Plain-language explanation

Automatically flip or reposition floating UI when it would collide.

## Representative syntax

```css
@position-try --flip { position-area: top; } position-try: --flip;
```

## Demo

<CssDemo title="Fallback positioning" code="@position-try --flip { position-area: top; } position-try: --flip;" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Automatically flip or reposition floating UI when it would collide.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Layout, Positioning, and Reading Order
- Maturity / source: Anchor Positioning
- Representative syntax: `@position-try --flip { position-area: top; } position-try: --flip;`
- Position in category: 12 / 16
