# string-set

<FeatureLinks mdn="https://developer.mozilla.org/en-US/search?q=string-set%20CSS" caniuse="https://caniuse.com/?search=string-set" status="GCPM 3" />

## 简明说明

把内容捕获为页面页眉/目录字符串。

## 代表语法

```css
string-set: chapter content(text);
```

## Demo 演示

<CssDemo title="string-set" code=".target {
  width: 220px;
  text-wrap: balance;
  font-size: clamp(18px, 4vw, 34px);
}
" note="不同浏览器对草案能力的支持差异较大；这里优先展示语法和渐进增强思路，兼容性请以右侧 Can I Use 链接为准。" />

## 什么时候用

- 当你需要解决「把内容捕获为页面页眉/目录字符串。」这类问题时，可以优先考虑它。
- 如果状态里包含“草案”“支持有限”“实现推进中”，建议用 `@supports`、特性检测或保守 fallback。
- 如果目标用户浏览器较旧，先从 MDN 与 Can I Use 核对支持矩阵，再决定是否进入生产。

## 迁移来源

- 分类：生成内容、列表、计数器与内容引用
- 成熟度 / 来源：GCPM 3
- 原始代表语法：`string-set: chapter content(text);`
- 本分类序号：9 / 9
