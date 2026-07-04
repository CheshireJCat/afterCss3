# print-color-adjust

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=print-color-adjust%20CSS" caniuse="https://caniuse.com/?search=print-color-adjust" status="Color Adjustment 1 / Baseline 2025" />

## 简明说明

控制打印或节省墨水时的颜色调整。

## 代表语法

```css
print-color-adjust: exact;
```

## Demo 演示

<CssDemo title="print-color-adjust" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「控制打印或节省墨水时的颜色调整。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：颜色、主题与高动态范围
- 成熟度 / 来源：Color Adjustment 1 / Baseline 2025
- 原始代表语法：`print-color-adjust: exact;`
- 本分类序号：14 / 15
