# outline-color:auto

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=outline-color%3Aauto%20CSS" caniuse="https://caniuse.com/?search=outline-color" status="CSS UI 4" />

## 简明说明

让 UA 选择可访问的焦点轮廓颜色。

## 代表语法

```css
outline-color: auto;
```

## Demo 演示

<CssDemo title="outline-color:auto" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「让 UA 选择可访问的焦点轮廓颜色。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：表单、控件与交互 UI
- 成熟度 / 来源：CSS UI 4
- 原始代表语法：`outline-color: auto;`
- 本分类序号：9 / 12
