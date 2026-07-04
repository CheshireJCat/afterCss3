# ::marker styling

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%3A%3Amarker%20styling%20CSS" caniuse="https://caniuse.com/?search=li" status="Pseudo 4 / 预 CR 例外" label="参考链接" />

## 简明说明

列表标记内容和样式控制。

## 代表语法

```css
li::marker { color: red; content: counters(item, '.') '. '; }
```

## Demo 演示

<CssDemo title="::marker styling" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「列表标记内容和样式控制。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 生成内容、列表、计数器与内容引用
- 成熟度 / 来源: Pseudo 4 / 预 CR 例外
- 原始代表语法: `li::marker { color: red; content: counters(item, '.') '. '; }`
- 本分类序号：3 / 9
