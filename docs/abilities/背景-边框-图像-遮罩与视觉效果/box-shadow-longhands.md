# box-shadow longhands

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=box-shadow%20longhands%20CSS" caniuse="https://caniuse.com/?search=box-shadow%20longhands" status="Borders/Shadow 草案" />

## 简明说明

把阴影拆成可单独动画/覆盖的长属性。

## 代表语法

```css
box-shadow-color, box-shadow-offset, box-shadow-blur, box-shadow-spread
```

## Demo 演示

<CssDemo title="box-shadow longhands" code=".target {
  background: oklch(72% 0.16 210);
  color: oklch(22% 0.04 240);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「把阴影拆成可单独动画/覆盖的长属性。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：背景、边框、图像、遮罩与视觉效果
- 成熟度 / 来源：Borders/Shadow 草案
- 原始代表语法：`box-shadow-color, box-shadow-offset, box-shadow-blur, box-shadow-spread`
- 本分类序号：8 / 15
