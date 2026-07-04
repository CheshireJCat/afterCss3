# border-shape / partial borders

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=border-shape%20%2F%20partial%20borders%20CSS" caniuse="https://caniuse.com/?search=border-shape" status="Borders 4 草案" />

## 简明说明

复杂边框路径、部分边框和 box decoration 扩展。

## 代表语法

```css
border-shape: ...; border-limit: ...
```

## Demo 演示

<CssDemo title="border-shape / partial borders" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「复杂边框路径、部分边框和 box decoration 扩展。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源：Borders 4 草案
- 原始代表语法：`border-shape: ...; border-limit: ...`
- 本分类序号：7 / 15
