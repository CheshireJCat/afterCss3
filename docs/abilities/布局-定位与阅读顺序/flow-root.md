# Flow root

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=Flow%20root%20CSS" caniuse="https://caniuse.com/?search=display" status="Display 3" />

## 简明说明

无需 clearfix 创建新的块格式化上下文。

## 代表语法

```css
display: flow-root;
```

## Demo 演示

<CssDemo title="Flow root" code=".target {
  /* display: flow-root; */
  outline: 3px solid var(--brand);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「无需 clearfix 创建新的块格式化上下文。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：Display 3
- 原始代表语法：`display: flow-root;`
- 本分类序号：7 / 16
