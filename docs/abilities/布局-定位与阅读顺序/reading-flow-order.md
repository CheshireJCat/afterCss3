# Reading flow/order

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Reading%20flow%2Forder%20CSS" caniuse="https://caniuse.com/?search=reading-flow" status="Display 4 / 实现推进中" />

## 简明说明

让辅助技术和 Tab 顺序跟随视觉布局。

## 代表语法

```css
reading-flow: grid-rows; reading-order: 2;
```

## Demo 演示

<CssDemo title="Reading flow/order" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「让辅助技术和 Tab 顺序跟随视觉布局。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：Display 4 / 实现推进中
- 原始代表语法：`reading-flow: grid-rows; reading-order: 2;`
- 本分类序号：13 / 16
