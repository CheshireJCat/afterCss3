# 多关键字 display

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%A4%9A%E5%85%B3%E9%94%AE%E5%AD%97%20display%20CSS" caniuse="https://caniuse.com/?search=display" status="Display 3" />

## 简明说明

拆分 outer/inner display，表达更精确。

## 代表语法

```css
display: inline flex; display: block flow-root; display: contents;
```

## Demo 演示

<CssDemo title="多关键字 display" code=".stage { display: flex; justify-content: center; align-items: center; }
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「拆分 outer/inner display，表达更精确。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：布局、定位与阅读顺序
- 成熟度 / 来源：Display 3
- 原始代表语法：`display: inline flex; display: block flow-root; display: contents;`
- 本分类序号：6 / 16
