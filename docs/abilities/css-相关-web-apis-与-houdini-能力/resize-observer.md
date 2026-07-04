# Resize Observer

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API" caniuse="https://caniuse.com/?search=Resize%20Observer" status="Snapshot 粗略互通" />

## 简明说明

观察元素尺寸变化，补足纯 CSS 无法通知 JS 的场景。

## 代表语法

```css
new ResizeObserver(entries => ...)
```

## Demo 演示

<CssDemo title="Resize Observer" code=".target {
  /* new ResizeObserver(entries =&gt; ...) */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「观察元素尺寸变化，补足纯 CSS 无法通知 JS 的场景。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：CSS 相关 Web APIs 与 Houdini 能力
- 成熟度 / 来源：Snapshot 粗略互通
- 原始代表语法：`new ResizeObserver(entries =&gt; ...)`
- 本分类序号：4 / 11
