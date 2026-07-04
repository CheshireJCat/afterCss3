# user-select

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=user-select%20CSS" caniuse="https://caniuse.com/?search=user-select" status="CSS UI" />

## 简明说明

控制文本选择行为。

## 代表语法

```css
user-select: none | text | all | contain;
```

## Demo 演示

<CssDemo title="user-select" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「控制文本选择行为。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：表单、控件与交互 UI
- 成熟度 / 来源：CSS UI
- 原始代表语法：`user-select: none | text | all | contain;`
- 本分类序号：6 / 12
