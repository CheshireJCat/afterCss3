# Grid layout

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" caniuse="https://caniuse.com/?search=display" status="可靠候选" />

## 简明说明

二维布局、命名区域、自动放置。

## 代表语法

```css
display: grid; grid-template-columns: repeat(auto-fit, minmax(...));
```

## Demo 演示

<CssDemo title="Grid layout" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「二维布局、命名区域、自动放置。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：可靠候选
- 原始代表语法：`display: grid; grid-template-columns: repeat(auto-fit, minmax(...));`
- 本分类序号：1 / 16
