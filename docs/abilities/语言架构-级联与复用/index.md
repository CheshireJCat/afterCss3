# 语言架构、级联与复用

这个分类包含 12 个能力条目。每个条目都包含简明说明、MDN 入口、Can I Use 入口和可运行/可阅读的 demo。

- [Custom properties](custom-properties.md) — 原生变量、主题 token、跨组件继承。
- [注册自定义属性](注册自定义属性.md) — 让自定义属性可动画、可类型检查、可设初始值。
- [Cascade layers](cascade-layers.md) — 把来源、框架、组件样式分层，减少 specificity 竞争。
- [revert-layer](revert-layer.md) — 回滚当前 cascade layer 的声明，而不是回滚所有来源。
- [@scope](at-scope.md) — 原生局部作用域和 scoped proximity，减少全局选择器污染。
- [CSS Nesting](css-nesting.md) — 原生嵌套选择器和嵌套条件规则，替代预处理器的一部分能力。
- [条件规则增强](条件规则增强.md) — 检测属性、值、选择器、字体技术、字体格式等支持。
- [@when / @else](at-when-at-else.md) — 把 media/supports/container 等条件组合成原生条件链。
- [CSS if()](css-if.md) — 在属性值内部写条件，配合 media()/supports()/style()。
- [自定义函数](自定义函数.md) — 原生参数化 value 函数，减少 Sass/工具链依赖。
- [Mixins / @apply](mixins-at-apply.md) — 原生可参数化声明块复用。
- [CSSOM / Typed OM](cssom-typed-om.md) — 以结构化 API 操作 CSS 值，减少字符串拼接。
