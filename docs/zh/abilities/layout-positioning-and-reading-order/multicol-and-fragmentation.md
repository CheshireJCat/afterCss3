# Multicol and fragmentation

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Multicol%20and%20fragmentation%20CSS" caniuse="https://caniuse.com/?search=Multicol%20and%20fragmentation" status="官方定义/较稳定" label="参考链接" />

## 简明说明

多列排版和跨页/跨列断点控制。

## 代表语法

```css
column-count, column-span, break-inside, box-decoration-break
```

## Demo 演示

<CssDemo title="Multicol and fragmentation" code=".target {
  /* column-count, column-span, break-inside, box-decoration-break */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「多列排版和跨页/跨列断点控制。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 布局、定位与阅读顺序
- 成熟度 / 来源: 官方定义/较稳定
- 原始代表语法: `column-count, column-span, break-inside, box-decoration-break`
- 本分类序号：15 / 16
