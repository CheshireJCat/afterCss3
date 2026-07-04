# Variable fonts

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Variable%20fonts%20CSS" caniuse="https://caniuse.com/?search=%40font-face" status="Fonts 4" />

## 简明说明

可变轴、光学尺寸、字体技术声明。

## 代表语法

```css
font-variation-settings, font-optical-sizing, @font-face tech(variations)
```

## Demo 演示

<CssDemo title="Variable fonts" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「可变轴、光学尺寸、字体技术声明。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：字体、文字与排版
- 成熟度 / 来源：Fonts 4
- 原始代表语法：`font-variation-settings, font-optical-sizing, @font-face tech(variations)`
- 本分类序号：1 / 18
