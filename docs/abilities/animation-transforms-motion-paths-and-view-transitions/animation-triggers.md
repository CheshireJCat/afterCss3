# Animation triggers

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Animation%20triggers%20CSS" caniuse="https://caniuse.com/?search=Animation%20triggers" status="draft" label="Reference links" />

## Plain-language explanation

Trigger animations from state or events instead of only timelines.

## Representative syntax

```css
animation-trigger, trigger-exit, and related trigger properties
```

## Demo

<CssDemo title="Animation triggers" code=".target { animation: pulse 1.8s ease-in-out infinite alternate; }
@keyframes pulse { to { scale: 1.12; rotate: 3deg; } }
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Trigger animations from state or events instead of only timelines.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Animation, Transforms, Motion Paths, and View Transitions
- Maturity / source: draft
- Representative syntax: `animation-trigger, trigger-exit, and related trigger properties`
- Position in category: 13 / 14
