# Cascade layers

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer" caniuse="https://caniuse.com/?search=%40layer" status="可靠候选 / Baseline 2022" />

## 简明说明

把来源、框架、组件样式分层，减少 specificity 竞争。

## 代表语法

```css
@layer reset, base, components; @import url(...) layer(base);
```

## Demo 演示

<CssDemo title="Cascade layers" code="@layer reset, base, components; @import url(...) layer(base);" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「把来源、框架、组件样式分层，减少 specificity 竞争。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：语言架构、级联与复用
- 成熟度 / 来源：可靠候选 / Baseline 2022
- 原始代表语法：`@layer reset, base, components; @import url(...) layer(base);`
- 本分类序号：3 / 12
