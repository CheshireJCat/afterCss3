# @when / @else

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%40when%20CSS" caniuse="https://caniuse.com/?search=%40when" status="草案" label="参考链接" />

## 简明说明

把 media/supports/container 等条件组合成原生条件链。

## 代表语法

```css
@when media(width > 600px) and supports(display: grid) { ... } @else { ... }
```

## Demo 演示

<CssDemo title="@when / @else" code=".stage { display: grid; grid-template-columns: repeat(2, 1fr); }
.target { width: auto; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「把 media/supports/container 等条件组合成原生条件链。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 语言架构、级联与复用
- 成熟度 / 来源: 草案
- 原始代表语法: `@when media(width &gt; 600px) and supports(display: grid) { ... } @else { ... }`
- 本分类序号：8 / 12
