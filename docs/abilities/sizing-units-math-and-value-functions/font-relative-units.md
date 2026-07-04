# Font-relative units

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%AD%97%E4%BD%93%E7%9B%B8%E5%85%B3%E5%8D%95%E4%BD%8D%20CSS" caniuse="https://caniuse.com/?search=%E5%AD%97%E4%BD%93%E7%9B%B8%E5%85%B3%E5%8D%95%E4%BD%8D" status="Values 4/5, partial Baseline 2026" label="Reference links" />

## Plain-language explanation

Use cap height, CJK ideographic size, line height, and root font metrics in layout.

## Representative syntax

```css
cap, ic, lh, rlh, rcap, rch, rex, ric
```

## Demo

<CssDemo title="Font-relative units" css-b64="LyogRmVhdHVyZSBmb2N1czogY2FwLCBpYywgbGgsIHJsaCwgcmNhcCwgcmNoLCByZXgsIHJpYyAqLwouZGVtby1mcmFtZSB7CiAgZGlzcGxheTogZ3JpZDsKICBnYXA6IDE2cHg7Cn0KLmRlbW8tdGl0bGUgewogIG1hcmdpbjogMDsKICBmb250LXNpemU6IDEuMzVyZW07CiAgbGluZS1oZWlnaHQ6IDEuMTsKICBsZXR0ZXItc3BhY2luZzogMDsKfQouZGVtby1jb3B5IHsKICBtYXJnaW46IDA7CiAgY29sb3I6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA3MiUsIENhbnZhcyk7CiAgbGluZS1oZWlnaHQ6IDEuNTU7Cn0KLmRlbW8tY2hpcCB7CiAgZGlzcGxheTogaW5saW5lLWZsZXg7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICB3aWR0aDogbWF4LWNvbnRlbnQ7CiAgbWluLWhlaWdodDogMjhweDsKICBwYWRkaW5nOiAwIDEwcHg7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDE4JSwgdHJhbnNwYXJlbnQpOwogIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA2JSwgQ2FudmFzKTsKICBmb250OiA3MDAgLjc1cmVtLzEgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIG1vbm9zcGFjZTsKICB0cmFuc2l0aW9uOiAyMjBtcyBlYXNlOwp9Ci5kZW1vLWNhcmQgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ2FwOiAxMnB4OwogIHBhZGRpbmc6IDE4cHg7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDE2JSwgdHJhbnNwYXJlbnQpOwogIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzIDk2JSwgQ2FudmFzVGV4dCk7CiAgYm94LXNoYWRvdzogMCAxOHB4IDQ4cHggY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDEwJSwgdHJhbnNwYXJlbnQpOwogIHRyYW5zaXRpb246IDIyMG1zIGVhc2U7Cn0KLmRlbW8tbWVkaWEgewogIG1pbi1oZWlnaHQ6IDkwcHg7CiAgYmFja2dyb3VuZDoKICAgIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIGNvbG9yLW1peChpbiBva2xjaCwgb2tsY2goNjclIDAuMTUgMTkwKSAyNiUsIENhbnZhcyksIHRyYW5zcGFyZW50KSwKICAgIHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCA4JSwgdHJhbnNwYXJlbnQpIDAgOHB4LCB0cmFuc3BhcmVudCA4cHggMTZweCk7CiAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIG9rbGNoLCBDYW52YXNUZXh0IDEyJSwgdHJhbnNwYXJlbnQpOwp9Ci5kZW1vLWNhcmQgewogIGlubGluZS1zaXplOiBtaW4oMTAwJSwgNTYwcHgpOwogIHBhZGRpbmc6IGNsYW1wKDE0cHgsIDR2dywgMjhweCk7Cn0KLmRlbW8tdGl0bGUgewogIGZvbnQtc2l6ZTogY2xhbXAoMS4yNXJlbSwgNnZ3LCAyLjZyZW0pOwp9Ci5kZW1vLW1lZGlhIHsKICBhc3BlY3QtcmF0aW86IDE2IC8gNzsKfQo=" code-b64="LyogRmVhdHVyZSBmb2N1czogY2FwLCBpYywgbGgsIHJsaCwgcmNhcCwgcmNoLCByZXgsIHJpYyAqLwouZGVtby1jYXJkIHsKICBpbmxpbmUtc2l6ZTogbWluKDEwMCUsIDU2MHB4KTsKICBwYWRkaW5nOiBjbGFtcCgxNHB4LCA0dncsIDI4cHgpOwp9Ci5kZW1vLXRpdGxlIHsKICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDZ2dywgMi42cmVtKTsKfQouZGVtby1tZWRpYSB7CiAgYXNwZWN0LXJhdGlvOiAxNiAvIDc7Cn0=" html-b64="PGRpdiBjbGFzcz0iZGVtby1jYXJkIj4KICA8ZGl2IGNsYXNzPSJkZW1vLW1lZGlhIj48L2Rpdj4KICA8c3BhbiBjbGFzcz0iZGVtby1jaGlwIj5mbHVpZCBzaXppbmc8L3NwYW4+CiAgPGg0IGNsYXNzPSJkZW1vLXRpdGxlIj5GbHVpZCBtZXRyaWMgY2FyZDwvaDQ+CiAgPHAgY2xhc3M9ImRlbW8tY29weSI+VHlwZSwgcmF0aW8sIGFuZCBpbnRlcm5hbCBzcGFjZSBmb2xsb3cgdGhlIGF2YWlsYWJsZSByb29tLjwvcD4KPC9kaXY+" caption="This example lets size relationships come from CSS constraints instead of a fixed pixel value." lang="en-US" badge="Practical demo" />

## When to use it

<div class="usage-grid">
<section>
  <h3>Best fit</h3>
  <p>Use Font-relative units in reading and editorial UI when you need to protect readability when copy length, language, or font metrics vary. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.</p>
</section>
<section>
  <h3>Example</h3>
  <p>A bilingual card can balance the heading, clamp the summary, and keep inline annotations readable in a narrow column.</p>
</section>
<section>
  <h3>Watch out</h3>
  <p>Font-relative units should not be a hard dependency yet. Treat it as progressive enhancement: ship the baseline experience first, then add this capability behind feature detection or local fallbacks.</p>
</section>
</div>

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 4/5, partial Baseline 2026
- Representative syntax: `cap, ic, lh, rlh, rcap, rch, rex, ric`
- Position in category: 8 / 17
