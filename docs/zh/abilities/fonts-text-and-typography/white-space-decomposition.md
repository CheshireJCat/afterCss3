# white-space 分解

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=white-space%20%E5%88%86%E8%A7%A3%20CSS" caniuse="https://caniuse.com/?search=white-space%20%E5%88%86%E8%A7%A3" status="Text 4" label="参考链接" />

## 简明说明

把 white-space 的折叠与换行行为拆开控制。

## 代表语法

```css
white-space-collapse, text-wrap-mode, text-wrap-style
```

## Demo 演示

<CssDemo title="white-space 分解" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「把 white-space 的折叠与换行行为拆开控制。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 字体、文字与排版
- 成熟度 / 来源: Text 4
- 原始代表语法: `white-space-collapse, text-wrap-mode, text-wrap-style`
- 本分类序号：8 / 18
