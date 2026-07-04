# Scroll snap

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap" caniuse="https://caniuse.com/?search=Scroll%20snap" status="可靠候选" />

## 简明说明

原生吸附滚动、轮播和分页滚动。

## 代表语法

```css
scroll-snap-type, scroll-snap-align, scroll-padding, scroll-margin
```

## Demo 演示

<CssDemo title="Scroll snap" code=".stage { overflow-x: auto; scroll-snap-type: x mandatory; }
.target { scroll-snap-align: center; flex: 0 0 auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「原生吸附滚动、轮播和分页滚动。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：滚动、溢出与滚动型组件
- 成熟度 / 来源：可靠候选
- 原始代表语法：`scroll-snap-type, scroll-snap-align, scroll-padding, scroll-margin`
- 本分类序号：1 / 10
