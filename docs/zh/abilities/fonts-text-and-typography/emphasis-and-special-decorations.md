# 强调与特殊装饰

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=%E5%BC%BA%E8%B0%83%E4%B8%8E%E7%89%B9%E6%AE%8A%E8%A3%85%E9%A5%B0%20CSS" caniuse="https://caniuse.com/?search=%E5%BC%BA%E8%B0%83%E4%B8%8E%E7%89%B9%E6%AE%8A%E8%A3%85%E9%A5%B0" status="Text Decoration 3/4" label="参考链接" />

## 简明说明

东亚着重号、拼写/语法错误装饰。

## 代表语法

```css
text-emphasis, spelling-error, grammar-error decorations
```

## Demo 演示

<CssDemo title="强调与特殊装饰" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" lang="zh-CN" badge="Live-ish" />

## 什么时候用

- 当你需要解决「东亚着重号、拼写/语法错误装饰。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类: 字体、文字与排版
- 成熟度 / 来源: Text Decoration 3/4
- 原始代表语法: `text-emphasis, spelling-error, grammar-error decorations`
- 本分类序号：11 / 18
