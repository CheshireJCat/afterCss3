# Writing modes

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Writing%20modes%20CSS" caniuse="https://caniuse.com/?search=writing-mode" status="官方定义/Level 4" />

## 简明说明

竖排、横竖混排、国际化排版。

## 代表语法

```css
writing-mode: vertical-rl; text-orientation: mixed;
```

## Demo 演示

<CssDemo title="Writing modes" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「竖排、横竖混排、国际化排版。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：官方定义/Level 4
- 原始代表语法：`writing-mode: vertical-rl; text-orientation: mixed;`
- 本分类序号：9 / 16
