# forced colors

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=forced%20colors%20CSS" caniuse="https://caniuse.com/?search=forced%20colors" status="Color Adjustment 1" label="参考链接" />

## 简明说明

高对比/强制颜色模式适配。

## 代表语法

```css
forced-color-adjust, Canvas, CanvasText
```

## Demo 演示

<CssDemo title="forced colors" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「高对比/强制颜色模式适配。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 颜色、主题与高动态范围
- 成熟度 / 来源: Color Adjustment 1
- 原始代表语法: `forced-color-adjust, Canvas, CanvasText`
- 本分类序号：12 / 15
