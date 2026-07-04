# text-indent 扩展

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=text-indent%20%E6%89%A9%E5%B1%95%20CSS" caniuse="https://caniuse.com/?search=text-indent" status="Text 3/4 / Baseline 2026" />

## 简明说明

悬挂缩进和每行缩进。

## 代表语法

```css
text-indent: 2em hanging each-line;
```

## Demo 演示

<CssDemo title="text-indent 扩展" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「悬挂缩进和每行缩进。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：字体、文字与排版
- 成熟度 / 来源：Text 3/4 / Baseline 2026
- 原始代表语法：`text-indent: 2em hanging each-line;`
- 本分类序号：17 / 18
