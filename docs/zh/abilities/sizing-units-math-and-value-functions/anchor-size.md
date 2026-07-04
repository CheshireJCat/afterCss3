# anchor-size()

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=anchor-size%28%29%20CSS" caniuse="https://caniuse.com/?search=inline-size" status="Anchor Positioning" label="参考链接" />

## 简明说明

取被锚定元素尺寸参与布局。

## 代表语法

```css
inline-size: anchor-size(width);
```

## Demo 演示

<CssDemo title="anchor-size()" code=".target:first-child { anchor-name: --demo; }
.target + .target { position-anchor: --demo; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「取被锚定元素尺寸参与布局。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 尺寸、单位、数学和值函数
- 成熟度 / 来源: Anchor Positioning
- 原始代表语法: `inline-size: anchor-size(width);`
- 本分类序号：16 / 17
