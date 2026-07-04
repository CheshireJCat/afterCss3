# color-scheme

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=color-scheme%20CSS" caniuse="https://caniuse.com/?search=color-scheme" status="Color Adjustment 1" label="参考链接" />

## 简明说明

让 UA 控件、滚动条、表单跟随主题。

## 代表语法

```css
color-scheme: light dark;
```

## Demo 演示

<CssDemo title="color-scheme" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「让 UA 控件、滚动条、表单跟随主题。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 颜色、主题与高动态范围
- 成熟度 / 来源: Color Adjustment 1
- 原始代表语法: `color-scheme: light dark;`
- 本分类序号：11 / 15
