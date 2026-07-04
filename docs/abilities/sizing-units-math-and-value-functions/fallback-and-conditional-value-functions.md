# Fallback and conditional value functions

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=first-valid%28%29%20CSS" caniuse="https://caniuse.com/?search=first-valid%28%29" status="Values 5 draft" label="Reference links" />

## Plain-language explanation

Express value-level fallbacks, state switching, progress normalization, and numeric blending.

## Representative syntax

```css
first-valid(), toggle(), progress(), calc-mix()
```

## Demo

<CssDemo title="Fallback and conditional value functions" css-b64="LyogRmVhdHVyZSBmb2N1czogZmlyc3QtdmFsaWQoKSwgdG9nZ2xlKCksIHByb2dyZXNzKCksIGNhbGMtbWl4KCkgKi8KLmRlbW8tZnJhbWUgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ2FwOiAxNnB4Owp9Ci5kZW1vLXRpdGxlIHsKICBtYXJnaW46IDA7CiAgZm9udC1zaXplOiAxLjM1cmVtOwogIGxpbmUtaGVpZ2h0OiAxLjE7CiAgbGV0dGVyLXNwYWNpbmc6IDA7Cn0KLmRlbW8tY29weSB7CiAgbWFyZ2luOiAwOwogIGNvbG9yOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgNzIlLCBDYW52YXMpOwogIGxpbmUtaGVpZ2h0OiAxLjU1Owp9Ci5kZW1vLWNoaXAgewogIGRpc3BsYXk6IGlubGluZS1mbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgd2lkdGg6IG1heC1jb250ZW50OwogIG1pbi1oZWlnaHQ6IDI4cHg7CiAgcGFkZGluZzogMCAxMHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxOCUsIHRyYW5zcGFyZW50KTsKICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgNiUsIENhbnZhcyk7CiAgZm9udDogNzAwIC43NXJlbS8xIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBtb25vc3BhY2U7CiAgdHJhbnNpdGlvbjogMjIwbXMgZWFzZTsKfQouZGVtby1jYXJkIHsKICBkaXNwbGF5OiBncmlkOwogIGdhcDogMTJweDsKICBwYWRkaW5nOiAxOHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxNiUsIHRyYW5zcGFyZW50KTsKICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhcyA5NiUsIENhbnZhc1RleHQpOwogIGJveC1zaGFkb3c6IDAgMThweCA0OHB4IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxMCUsIHRyYW5zcGFyZW50KTsKICB0cmFuc2l0aW9uOiAyMjBtcyBlYXNlOwp9Ci5kZW1vLW1lZGlhIHsKICBtaW4taGVpZ2h0OiA5MHB4OwogIGJhY2tncm91bmQ6CiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBjb2xvci1taXgoaW4gb2tsY2gsIG9rbGNoKDY3JSAwLjE1IDE5MCkgMjYlLCBDYW52YXMpLCB0cmFuc3BhcmVudCksCiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgOCUsIHRyYW5zcGFyZW50KSAwIDhweCwgdHJhbnNwYXJlbnQgOHB4IDE2cHgpOwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxMiUsIHRyYW5zcGFyZW50KTsKfQouZGVtby1jYXJkIHsKICBpbmxpbmUtc2l6ZTogbWluKDEwMCUsIDU2MHB4KTsKICBwYWRkaW5nOiBjbGFtcCgxNHB4LCA0dncsIDI4cHgpOwp9Ci5kZW1vLXRpdGxlIHsKICBmb250LXNpemU6IGNsYW1wKDEuMjVyZW0sIDZ2dywgMi42cmVtKTsKfQouZGVtby1tZWRpYSB7CiAgYXNwZWN0LXJhdGlvOiAxNiAvIDc7Cn0K" code-b64="LyogRmVhdHVyZSBmb2N1czogZmlyc3QtdmFsaWQoKSwgdG9nZ2xlKCksIHByb2dyZXNzKCksIGNhbGMtbWl4KCkgKi8KLmRlbW8tY2FyZCB7CiAgaW5saW5lLXNpemU6IG1pbigxMDAlLCA1NjBweCk7CiAgcGFkZGluZzogY2xhbXAoMTRweCwgNHZ3LCAyOHB4KTsKfQouZGVtby10aXRsZSB7CiAgZm9udC1zaXplOiBjbGFtcCgxLjI1cmVtLCA2dncsIDIuNnJlbSk7Cn0KLmRlbW8tbWVkaWEgewogIGFzcGVjdC1yYXRpbzogMTYgLyA3Owp9" html-b64="PGRpdiBjbGFzcz0iZGVtby1jYXJkIj4KICA8ZGl2IGNsYXNzPSJkZW1vLW1lZGlhIj48L2Rpdj4KICA8c3BhbiBjbGFzcz0iZGVtby1jaGlwIj5mbHVpZCBzaXppbmc8L3NwYW4+CiAgPGg0IGNsYXNzPSJkZW1vLXRpdGxlIj5GbHVpZCBtZXRyaWMgY2FyZDwvaDQ+CiAgPHAgY2xhc3M9ImRlbW8tY29weSI+VHlwZSwgcmF0aW8sIGFuZCBpbnRlcm5hbCBzcGFjZSBmb2xsb3cgdGhlIGF2YWlsYWJsZSByb29tLjwvcD4KPC9kaXY+" caption="This example lets size relationships come from CSS constraints instead of a fixed pixel value." lang="en-US" badge="Practical demo" />

## When to use it

<div class="usage-grid">
<section>
  <h3>Best fit</h3>
  <p>Use Fallback and conditional value functions in fluid interfaces when you need to describe size relationships directly in CSS instead of calculating them in build tools or JavaScript. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.</p>
</section>
<section>
  <h3>Example</h3>
  <p>A metric card can keep a fixed aspect ratio, clamp its title size, and reserve space from real content size without layout jumps.</p>
</section>
<section>
  <h3>Watch out</h3>
  <p>Fallback and conditional value functions should not be a hard dependency yet. Treat it as progressive enhancement: ship the baseline experience first, then add this capability behind feature detection or local fallbacks.</p>
</section>
</div>

## Source metadata

- Category: Sizing, Units, Math, and Value Functions
- Maturity / source: Values 5 draft
- Representative syntax: `first-valid(), toggle(), progress(), calc-mix()`
- Position in category: 14 / 17
