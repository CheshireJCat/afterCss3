# 条件规则增强

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40supports%20CSS" caniuse="https://caniuse.com/?search=%40supports" status="Conditional 3/4/5" label="参考链接" />

## 简明说明

检测属性、值、选择器、字体技术、字体格式等支持。

## 代表语法

```css
@supports selector(:has(*)) { ... }
```

## Demo 演示

<CssDemo title="条件规则增强" code=".stage:has(.target:hover) .target {
  border-radius: 999px;
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「检测属性、值、选择器、字体技术、字体格式等支持。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 语言架构、级联与复用
- 成熟度 / 来源: Conditional 3/4/5
- 原始代表语法: `@supports selector(:has(*)) { ... }`
- 本分类序号：7 / 12
