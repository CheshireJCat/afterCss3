# corner-shape

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=corner-shape%20CSS" caniuse="https://caniuse.com/?search=border-radius" status="Borders 4 / 新能力" />

## 简明说明

圆角之外的斜角、凹角、squircle 等角形。

## 代表语法

```css
border-radius: 2rem; corner-shape: squircle;
```

## Demo 演示

<CssDemo title="corner-shape" code=".target { clip-path: polygon(12% 0, 100% 0, 88% 100%, 0 100%); }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「圆角之外的斜角、凹角、squircle 等角形。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源：Borders 4 / 新能力
- 原始代表语法：`border-radius: 2rem; corner-shape: squircle;`
- 本分类序号：6 / 15
