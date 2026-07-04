# CSSOM

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model" caniuse="https://caniuse.com/?search=CSSOM" status="CSSOM 1" />

## 简明说明

读取、解析、序列化和操作 CSS 规则。

## 代表语法

```css
document.styleSheets, CSSStyleRule, CSSStyleDeclaration
```

## Demo 演示

<CssDemo title="CSSOM" code=".target {
  /* document.styleSheets, CSSStyleRule, CSSStyleDeclaration */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「读取、解析、序列化和操作 CSS 规则。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：CSS 相关 Web APIs 与 Houdini 能力
- 成熟度 / 来源：CSSOM 1
- 原始代表语法：`document.styleSheets, CSSStyleRule, CSSStyleDeclaration`
- 本分类序号：1 / 11
