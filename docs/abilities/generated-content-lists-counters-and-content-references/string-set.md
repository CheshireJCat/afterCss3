# string-set

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=string-set%20CSS" caniuse="https://caniuse.com/?search=string-set" status="GCPM 3" label="Reference links" />

## Plain-language explanation

Capture content as page-header or table-of-contents strings.

## Representative syntax

```css
string-set: chapter content(text);
```

## Demo

<CssDemo title="string-set" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="Support for draft capabilities varies across browsers. This demo focuses on syntax and progressive enhancement; use the Can I Use link for the current compatibility matrix." lang="en-US" badge="Live-ish" />

## When to use it

- Consider it when you need to solve problems like: Capture content as page-header or table-of-contents strings.
- If the status includes draft, limited support, or implementation in progress, use @supports, feature detection, or conservative fallbacks.
- For older target browsers, verify support on MDN and Can I Use before using it in production.

## Source metadata

- Category: Generated Content, Lists, Counters, and Content References
- Maturity / source: GCPM 3
- Representative syntax: `string-set: chapter content(text);`
- Position in category: 9 / 9
