# Shadow DOM 选择

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3Ahost%20CSS" caniuse="https://caniuse.com/?search=%3Ahost" status="CSS Scoping / Shadow Parts" label="参考链接" />

## 简明说明

Web Components 内外部样式边界和可暴露部件。

## 代表语法

```css
:host, :host(), :host-context(), ::slotted(), ::part()
```

## Demo 演示

<CssDemo title="Shadow DOM 选择" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「Web Components 内外部样式边界和可暴露部件。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 选择器、伪类与伪元素
- 成熟度 / 来源: CSS Scoping / Shadow Parts
- 原始代表语法: `:host, :host(), :host-context(), ::slotted(), ::part()`
- 本分类序号：8 / 15
