# Registered custom properties

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property" caniuse="https://caniuse.com/?search=%40property" status="CSS Houdini / broad implementation in progress" label="Reference links" />

## Plain-language explanation

Make custom properties animatable, type-checkable, and able to define initial values.

## Representative syntax

```css
@property --angle { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
```

## Demo

<CssDemo title="Registered custom properties" code="@property --angle { syntax: '&lt;angle&gt;'; inherits: false; initial-value: 0deg; }" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Make custom properties animatable, type-checkable, and able to define initial values.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Language Architecture, Cascade, and Reuse
- Maturity / source: CSS Houdini / broad implementation in progress
- Representative syntax: `@property --angle { syntax: '&lt;angle&gt;'; inherits: false; initial-value: 0deg; }`
- Position in category: 2 / 12
