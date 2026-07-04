# Color and dynamic-range queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E8%89%B2%E5%BD%A9%E4%B8%8E%E5%8A%A8%E6%80%81%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2%20CSS" caniuse="https://caniuse.com/?search=%E8%89%B2%E5%BD%A9%E4%B8%8E%E5%8A%A8%E6%80%81%E8%8C%83%E5%9B%B4%E6%9F%A5%E8%AF%A2" status="Media Queries 5" label="Reference links" />

## Plain-language explanation

Progressively enhance for P3, HDR, and video dynamic range.

## Representative syntax

```css
color-gamut, dynamic-range, video-dynamic-range
```

## Demo

<CssDemo title="Color and dynamic-range queries" css-b64="LyogRmVhdHVyZSBmb2N1czogY29sb3ItZ2FtdXQsIGR5bmFtaWMtcmFuZ2UsIHZpZGVvLWR5bmFtaWMtcmFuZ2UgKi8KLmRlbW8tZnJhbWUgewogIGRpc3BsYXk6IGdyaWQ7CiAgZ2FwOiAxNnB4Owp9Ci5kZW1vLXRpdGxlIHsKICBtYXJnaW46IDA7CiAgZm9udC1zaXplOiAxLjM1cmVtOwogIGxpbmUtaGVpZ2h0OiAxLjE7CiAgbGV0dGVyLXNwYWNpbmc6IDA7Cn0KLmRlbW8tY29weSB7CiAgbWFyZ2luOiAwOwogIGNvbG9yOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgNzIlLCBDYW52YXMpOwogIGxpbmUtaGVpZ2h0OiAxLjU1Owp9Ci5kZW1vLWNoaXAgewogIGRpc3BsYXk6IGlubGluZS1mbGV4OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAgd2lkdGg6IG1heC1jb250ZW50OwogIG1pbi1oZWlnaHQ6IDI4cHg7CiAgcGFkZGluZzogMCAxMHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxOCUsIHRyYW5zcGFyZW50KTsKICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgNiUsIENhbnZhcyk7CiAgZm9udDogNzAwIC43NXJlbS8xIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBtb25vc3BhY2U7CiAgdHJhbnNpdGlvbjogMjIwbXMgZWFzZTsKfQouZGVtby1jYXJkIHsKICBkaXNwbGF5OiBncmlkOwogIGdhcDogMTJweDsKICBwYWRkaW5nOiAxOHB4OwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxNiUsIHRyYW5zcGFyZW50KTsKICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhcyA5NiUsIENhbnZhc1RleHQpOwogIGJveC1zaGFkb3c6IDAgMThweCA0OHB4IGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxMCUsIHRyYW5zcGFyZW50KTsKICB0cmFuc2l0aW9uOiAyMjBtcyBlYXNlOwp9Ci5kZW1vLW1lZGlhIHsKICBtaW4taGVpZ2h0OiA5MHB4OwogIGJhY2tncm91bmQ6CiAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBjb2xvci1taXgoaW4gb2tsY2gsIG9rbGNoKDY3JSAwLjE1IDE5MCkgMjYlLCBDYW52YXMpLCB0cmFuc3BhcmVudCksCiAgICByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBjb2xvci1taXgoaW4gb2tsY2gsIENhbnZhc1RleHQgOCUsIHRyYW5zcGFyZW50KSAwIDhweCwgdHJhbnNwYXJlbnQgOHB4IDE2cHgpOwogIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBva2xjaCwgQ2FudmFzVGV4dCAxMiUsIHRyYW5zcGFyZW50KTsKfQouZGVtby1mcmFtZSB7CiAgY29udGFpbmVyOiBmZWF0dXJlLWFyZWEgLyBpbmxpbmUtc2l6ZTsKfQouZGVtby1jYXJkIHsKICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsKfQpAY29udGFpbmVyIGZlYXR1cmUtYXJlYSAod2lkdGggPiA1MjBweCkgewogIC5kZW1vLWNhcmQgewogICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNTBweCAxZnI7CiAgICBhbGlnbi1pdGVtczogY2VudGVyOwogIH0KfQo=" code-b64="LyogRmVhdHVyZSBmb2N1czogY29sb3ItZ2FtdXQsIGR5bmFtaWMtcmFuZ2UsIHZpZGVvLWR5bmFtaWMtcmFuZ2UgKi8KLmRlbW8tZnJhbWUgewogIGNvbnRhaW5lcjogZmVhdHVyZS1hcmVhIC8gaW5saW5lLXNpemU7Cn0KLmRlbW8tY2FyZCB7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7Cn0KQGNvbnRhaW5lciBmZWF0dXJlLWFyZWEgKHdpZHRoID4gNTIwcHgpIHsKICAuZGVtby1jYXJkIHsKICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUwcHggMWZyOwogICAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICB9Cn0=" html-b64="PGRpdiBjbGFzcz0iZGVtby1jYXJkIj4KICA8ZGl2IGNsYXNzPSJkZW1vLW1lZGlhIj48L2Rpdj4KICA8ZGl2PgogICAgPHNwYW4gY2xhc3M9ImRlbW8tY2hpcCI+Y29udGFpbmVyLWF3YXJlPC9zcGFuPgogICAgPGg0IGNsYXNzPSJkZW1vLXRpdGxlIj5Db250YWluZXItYXdhcmUgY2FyZDwvaDQ+CiAgICA8cCBjbGFzcz0iZGVtby1jb3B5Ij5UaGUgc2FtZSBjb21wb25lbnQgYWRqdXN0cyBpdHMgZGVuc2l0eSBpbnNpZGUgZGlmZmVyZW50IHNsb3RzLjwvcD4KICA8L2Rpdj4KPC9kaXY+" caption="When the preview width changes, the component responds to its own container instead of the whole viewport." lang="en-US" badge="Practical demo" />

## When to use it

<div class="usage-grid">
<section>
  <h3>Best fit</h3>
  <p>Use Color and dynamic-range queries in reusable components when you need to change a component based on the space it actually receives rather than the viewport width. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.</p>
</section>
<section>
  <h3>Example</h3>
  <p>A card in a sidebar can stay compact while the same card in the main column shows media, metadata, and actions.</p>
</section>
<section>
  <h3>Watch out</h3>
  <p>Choose thresholds from component content. A breakpoint that only matches today’s layout grid will feel arbitrary when the component moves.</p>
</section>
</div>

## Source metadata

- Category: Conditional Queries, Container Queries, and Environment Awareness
- Maturity / source: Media Queries 5
- Representative syntax: `color-gamut, dynamic-range, video-dynamic-range`
- Position in category: 4 / 13
