# Anchor positioning

<FeatureLinks mdn="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning" caniuse="https://caniuse.com/?search=position-anchor" status="Current Work 草案" />

## 简明说明

无 JS 定位 tooltip、popover、菜单等依附浮层。

## 代表语法

```css
position-anchor: --btn; top: anchor(bottom); position-area: bottom center;
```

## Demo 演示

<CssDemo title="Anchor positioning" code=".target:first-child { anchor-name: --demo; }
.target + .target { position-anchor: --demo; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「无 JS 定位 tooltip、popover、菜单等依附浮层。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：Current Work 草案
- 原始代表语法：`position-anchor: --btn; top: anchor(bottom); position-area: bottom center;`
- 本分类序号：11 / 16
