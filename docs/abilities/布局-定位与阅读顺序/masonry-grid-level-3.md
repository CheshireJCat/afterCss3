# Masonry / Grid Level 3

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Masonry%20%2F%20Grid%20Level%203%20CSS" caniuse="https://caniuse.com/?search=grid-template-rows" status="草案/支持有限" />

## 简明说明

瀑布流类布局进入标准草案。

## 代表语法

```css
grid-template-rows: masonry;
```

## Demo 演示

<CssDemo title="Masonry / Grid Level 3" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「瀑布流类布局进入标准草案。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：草案/支持有限
- 原始代表语法：`grid-template-rows: masonry;`
- 本分类序号：3 / 16
