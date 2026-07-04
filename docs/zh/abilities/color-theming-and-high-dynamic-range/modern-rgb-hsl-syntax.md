# 现代 rgb/hsl 语法

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E7%8E%B0%E4%BB%A3%20rgb%2Fhsl%20%E8%AF%AD%E6%B3%95%20CSS" caniuse="https://caniuse.com/?search=%E7%8E%B0%E4%BB%A3%20rgb%2Fhsl%20%E8%AF%AD%E6%B3%95" status="Color 4" label="参考链接" />

## 简明说明

空格分隔、斜杠 alpha，统一颜色函数语法。

## 代表语法

```css
rgb(255 0 0 / 50%), hsl(120 80% 40% / .8)
```

## Demo 演示

<CssDemo title="现代 rgb/hsl 语法" code=".target {
  /* rgb(255 0 0 / 50%), hsl(120 80% 40% / .8) */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「空格分隔、斜杠 alpha，统一颜色函数语法。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 颜色、主题与高动态范围
- 成熟度 / 来源: Color 4
- 原始代表语法: `rgb(255 0 0 / 50%), hsl(120 80% 40% / .8)`
- 本分类序号：1 / 15
