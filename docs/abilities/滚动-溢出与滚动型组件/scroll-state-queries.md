# Scroll-state queries

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40container%20CSS" caniuse="https://caniuse.com/?search=%40container" status="Conditional 5" />

## 简明说明

滚动状态驱动样式，常用于 sticky header 阴影等。

## 代表语法

```css
@container scroll-state(stuck: top)
```

## Demo 演示

<CssDemo title="Scroll-state queries" code=".stage { container-type: inline-size; }
@container (width &gt; 360px) {
  .target { width: 220px; }
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「滚动状态驱动样式，常用于 sticky header 阴影等。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：滚动、溢出与滚动型组件
- 成熟度 / 来源：Conditional 5
- 原始代表语法：`@container scroll-state(stuck: top)`
- 本分类序号：9 / 10
