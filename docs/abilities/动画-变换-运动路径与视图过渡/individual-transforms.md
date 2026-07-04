# Individual transforms

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Individual%20transforms%20CSS" caniuse="https://caniuse.com/?search=Individual%20transforms" status="Transforms 2 / 预 CR 例外" />

## 简明说明

单独控制变换组件，组合动画更稳定。

## 代表语法

```css
translate, rotate, scale
```

## Demo 演示

<CssDemo title="Individual transforms" code=".target {
  /* translate, rotate, scale */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「单独控制变换组件，组合动画更稳定。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：动画、变换、运动路径与视图过渡
- 成熟度 / 来源：Transforms 2 / 预 CR 例外
- 原始代表语法：`translate, rotate, scale`
- 本分类序号：2 / 14
