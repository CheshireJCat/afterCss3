# Custom Highlight API

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Custom%20Highlight%20API%20CSS" caniuse="https://caniuse.com/?search=Custom%20Highlight%20API" status="Highlight 1 / Baseline 2026" label="参考链接" />

## 简明说明

用 JS 注册范围，CSS 用 ::highlight(name) 样式化。

## 代表语法

```css
CSS.highlights.set('name', new Highlight(range));
```

## Demo 演示

<CssDemo title="Custom Highlight API" code=".target {
  /* CSS.highlights.set('name', new Highlight(range)); */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「用 JS 注册范围，CSS 用 ::highlight(name) 样式化。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: CSS 相关 Web APIs 与 Houdini 能力
- 成熟度 / 来源: Highlight 1 / Baseline 2026
- 原始代表语法: `CSS.highlights.set('name', new Highlight(range));`
- 本分类序号：7 / 11
