const labels = {
  en: {
    bestFit: 'Best fit',
    example: 'Example',
    watchOut: 'Watch out',
    demoBadge: 'Practical demo',
    syntaxHint: 'Feature focus'
  },
  zh: {
    bestFit: '适合场景',
    example: '例子',
    watchOut: '注意点',
    demoBadge: '实用演示',
    syntaxHint: '特性焦点'
  }
}

const categoryProfiles = {
  'language-architecture-cascade-and-reuse': {
    en: {
      defaultScenario: {
        domain: 'design systems and component libraries',
        need: 'keep repeated styling decisions in one maintainable place',
        example: 'A shared button, card, and form field can inherit the same theme token or cascade rule without each component carrying a separate override.',
        watch: 'Keep the rule close to the ownership boundary. Global cascade tools are powerful, but broad use can make a component harder to reason about.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '设计系统和组件库',
        need: '把重复的样式决策收拢到一个可维护的位置',
        example: '例如按钮、卡片、表单控件都继承同一套主题 token 或级联规则，而不是每个组件里各写一份覆盖样式。',
        watch: '尽量把规则放在真实的归属边界内。级联工具很强，但作用域太大时，组件会变得难以推理。'
      }
    }
  },
  'selectors-pseudo-classes-and-pseudo-elements': {
    en: {
      defaultScenario: {
        domain: 'stateful UI and content-heavy pages',
        need: 'style an element from its relationship to nearby markup instead of adding JavaScript state classes',
        example: 'A list item can react when its checkbox is checked, a card can change when it contains media, and a form group can highlight the invalid field that caused the state.',
        watch: 'Prefer selectors that describe the document relationship clearly. Very long relationship chains become hard to maintain even when the browser supports them.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '有状态 UI 和内容密集页面',
        need: '根据元素和周围标记的关系来写样式，而不是额外用 JavaScript 加状态 class',
        example: '列表项可以在内部复选框选中时变化，卡片可以在包含媒体时切换布局，表单组也能高亮真正触发状态的字段。',
        watch: '优先写能读懂 DOM 关系的选择器。选择器链太长时，即使浏览器支持，也会拖累维护。'
      }
    }
  },
  'conditional-queries-container-queries-and-environment-awareness': {
    en: {
      defaultScenario: {
        domain: 'responsive components',
        need: 'adapt a component to its own container, input device, user preference, or runtime environment',
        example: 'A product card can switch from compact to editorial layout inside a wide slot while staying compact in a narrow sidebar on the same viewport.',
        watch: 'Name the condition after the component decision, not the device. A query like “summary can show media” ages better than “tablet layout”.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '响应式组件',
        need: '根据组件容器、输入设备、用户偏好或运行环境来调整样式',
        example: '同一个商品卡片在宽容器里可以展开成图文布局，在同一视口的窄侧栏里仍保持紧凑样式。',
        watch: '条件命名最好描述组件决策，而不是设备名。“摘要可展示媒体”通常比“平板布局”更耐用。'
      }
    }
  },
  'layout-positioning-and-reading-order': {
    en: {
      defaultScenario: {
        domain: 'application shells, editorial layout, and floating UI',
        need: 'let the browser solve placement, alignment, and source-order problems that used to need wrappers or script',
        example: 'A dashboard can align nested cards to the same tracks, while a tooltip can stay attached to its trigger and flip when the viewport edge gets close.',
        watch: 'Keep visual order and reading order aligned unless you have tested keyboard and assistive-technology behavior.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '应用外壳、图文排版和浮层 UI',
        need: '把摆放、对齐、源顺序这些原本靠 wrapper 或脚本解决的问题交给浏览器',
        example: '仪表盘里的嵌套卡片可以共用父级网格轨道，tooltip 也可以贴着触发器，并在靠近视口边缘时自动换位。',
        watch: '除非已经验证键盘和辅助技术行为，否则不要让视觉顺序和阅读顺序长期脱节。'
      }
    }
  },
  'sizing-units-math-and-value-functions': {
    en: {
      defaultScenario: {
        domain: 'fluid interfaces',
        need: 'describe size relationships directly in CSS instead of calculating them in build tools or JavaScript',
        example: 'A metric card can keep a fixed aspect ratio, clamp its title size, and reserve space from real content size without layout jumps.',
        watch: 'Use math to express a design rule, not to hide magic numbers. Future maintainers should be able to tell which constraint is doing the work.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '流式界面',
        need: '直接用 CSS 描述尺寸关系，而不是交给构建工具或 JavaScript 计算',
        example: '数据卡片可以保持固定宽高比，标题字号可以在范围内流动，内容尺寸也能参与布局，减少跳动。',
        watch: '数学函数应该表达设计规则，而不是藏一堆魔法数字。后续维护者要能看出真正起约束作用的是哪一项。'
      }
    }
  },
  'color-theming-and-high-dynamic-range': {
    en: {
      defaultScenario: {
        domain: 'theme systems, data states, and accessible UI',
        need: 'derive color decisions from semantic relationships instead of hard-coded hex variations',
        example: 'A status pill can mix its border from the same brand color, use perceptual color spaces for ramps, and cooperate with dark mode.',
        watch: 'Always validate contrast with real backgrounds and states. New color spaces make authoring better, but they do not automatically make a palette accessible.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '主题系统、数据状态和可访问 UI',
        need: '从语义关系推导颜色，而不是手写一堆十六进制近似色',
        example: '状态标签可以从同一个品牌色混合出边框，色阶可以使用感知更均匀的色彩空间，并和暗色模式协作。',
        watch: '一定要在真实背景和状态上验证对比度。新的颜色空间让创作更好，但不会自动保证可访问性。'
      }
    }
  },
  'fonts-text-and-typography': {
    en: {
      defaultScenario: {
        domain: 'reading surfaces and multilingual products',
        need: 'improve text rhythm, wrapping, and font behavior without per-breakpoint copy edits',
        example: 'A news card can balance its heading, trim awkward leading, and keep CJK annotations or long English words readable in tight spaces.',
        watch: 'Typography features depend on font files and language tagging. Test with real copy, not only short placeholder strings.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '阅读型页面和多语言产品',
        need: '改善文字节奏、换行和字体行为，而不是为每个断点手动改文案',
        example: '资讯卡片可以平衡标题换行、修正多余行高，并让 CJK 注音或很长的英文单词在窄空间里仍然可读。',
        watch: '排版特性常常依赖字体文件和语言标记。要用真实文案测试，不要只看短占位文本。'
      }
    }
  },
  'backgrounds-borders-images-masks-and-visual-effects': {
    en: {
      defaultScenario: {
        domain: 'visual components and media-heavy interfaces',
        need: 'create visual treatment with CSS instead of exporting one-off images for every state',
        example: 'A profile card can crop media, blend a highlight layer, mask an avatar, and still respond to theme changes without regenerating assets.',
        watch: 'Visual effects can become expensive. Prefer effects on small component areas and avoid stacking filters over large scrolling regions.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '视觉组件和媒体密集界面',
        need: '用 CSS 生成视觉处理，而不是为每种状态导出一张独立图片',
        example: '资料卡可以裁剪媒体、混合高光层、给头像加遮罩，并且在主题变化时不需要重新生成素材。',
        watch: '视觉效果有性能成本。优先把效果限制在小组件区域，避免在大面积滚动内容上叠很多 filter。'
      }
    }
  },
  'scrolling-overflow-and-scroll-based-components': {
    en: {
      defaultScenario: {
        domain: 'carousels, reading panes, and scroll-linked navigation',
        need: 'make scrolling behavior predictable without rebuilding the scroller in JavaScript',
        example: 'A horizontal gallery can snap to each card, reserve scrollbar space, and avoid scroll chaining into the page behind it.',
        watch: 'Scrolling is input-sensitive. Test with trackpads, touch, keyboard, and reduced-motion preferences before treating a demo as production-ready.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '轮播、阅读面板和滚动联动导航',
        need: '让滚动行为可预测，而不是用 JavaScript 重写滚动容器',
        example: '横向图库可以吸附到每张卡片，预留滚动条空间，并阻止滚动继续传递到背后的页面。',
        watch: '滚动体验很依赖输入方式。把 demo 当作生产方案前，要测触控板、触摸、键盘和减弱动态偏好。'
      }
    }
  },
  'animation-transforms-motion-paths-and-view-transitions': {
    en: {
      defaultScenario: {
        domain: 'state transitions and spatial feedback',
        need: 'explain where something came from, where it is going, or how state changed',
        example: 'A selected item can move along a path into a detail panel, while the old and new page states cross-fade through a view transition.',
        watch: 'Motion should clarify causality. Keep durations short, respect reduced-motion preferences, and avoid animating layout when transforms can carry the effect.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '状态切换和空间反馈',
        need: '解释元素从哪里来、要去哪里，或者状态是怎么变化的',
        example: '被选中的条目可以沿路径进入详情面板，旧页面和新页面也能通过视图过渡交接。',
        watch: '动效应该帮助理解因果关系。时长要短，尊重减弱动态偏好，能用 transform 表达时就不要强行动画布局。'
      }
    }
  },
  'forms-controls-and-interactive-ui': {
    en: {
      defaultScenario: {
        domain: 'forms, native controls, and editor surfaces',
        need: 'customize interaction details while preserving browser semantics',
        example: 'A settings form can use native checkboxes and select controls, but still match the product accent color and focus treatment.',
        watch: 'Do not restyle a native control until keyboard, focus, validation, and high-contrast behavior still work.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '表单、原生控件和编辑器界面',
        need: '在保留浏览器语义的前提下定制交互细节',
        example: '设置表单可以继续使用原生复选框和选择框，同时让强调色、焦点样式和产品视觉保持一致。',
        watch: '重写原生控件外观前，先确认键盘、焦点、校验和高对比模式仍然可用。'
      }
    }
  },
  'generated-content-lists-counters-and-content-references': {
    en: {
      defaultScenario: {
        domain: 'structured documents and generated labels',
        need: 'keep numbering, markers, quotes, and references tied to document structure',
        example: 'A legal checklist can use custom markers and nested counters while a table of contents can pull page references from targets.',
        watch: 'Generated content is presentation. Important information should remain present in the DOM when users need to copy, search, or translate it.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '结构化文档和自动标签',
        need: '让编号、标记、引号和引用跟文档结构绑定',
        example: '法律清单可以使用自定义 marker 和多级计数，目录也可以从目标位置提取页码或标题引用。',
        watch: '生成内容属于表现层。需要复制、搜索或翻译的重要信息，仍然应该真实存在于 DOM 中。'
      }
    }
  },
  'paged-media-print-and-publishing-layout': {
    en: {
      defaultScenario: {
        domain: 'print, PDF, and long-form publishing',
        need: 'control how web content becomes pages, spreads, headers, and footnotes',
        example: 'A report can assign a cover page, keep figure captions with images, and place section names in running headers.',
        watch: 'Browser print support varies by feature. Keep a browser-specific print test fixture for documents that have legal or billing value.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '打印、PDF 和长文出版',
        need: '控制网页内容如何变成页面、跨页版式、页眉和脚注',
        example: '报告可以指定封面页，避免图注和图片被分页拆开，并把章节名放到运行页眉里。',
        watch: '浏览器打印能力差异很大。涉及法律、账单或合同价值的文档，应该保留明确的浏览器打印测试样例。'
      }
    }
  },
  'css-related-web-apis-and-houdini-capabilities': {
    en: {
      defaultScenario: {
        domain: 'design tooling, inspectors, and runtime styling',
        need: 'connect CSS behavior to JavaScript without falling back to brittle string parsing',
        example: 'A visual editor can read a computed transform, update a typed length, or register a custom highlight range while CSS keeps rendering ownership.',
        watch: 'Use APIs when CSS alone cannot express the workflow. If the behavior is purely presentational, a stylesheet is usually easier to ship and debug.'
      }
    },
    zh: {
      defaultScenario: {
        domain: '设计工具、检查器和运行时样式',
        need: '把 CSS 行为和 JavaScript 连接起来，而不是靠脆弱的字符串拼接',
        example: '可视化编辑器可以读取计算后的 transform、更新 typed length，或注册自定义高亮范围，同时仍由 CSS 负责渲染。',
        watch: '只有 CSS 本身表达不了工作流时才引入 API。如果只是表现层需求，样式表通常更容易发布和调试。'
      }
    }
  }
}

const scenarioRules = [
  {
    test: /custom-properties|registered-custom-properties|cascade|layer|revert-layer|at-scope|css-nesting|custom-functions|mixins|apply|cssom-typed/i,
    en: {
      domain: 'design systems and component libraries',
      need: 'make styling decisions reusable, typed, scoped, or easier to override',
      example: 'A theme package can expose tokens, register animatable values, and keep reset, framework, and component rules from fighting over specificity.',
      watch: 'These features shape the authoring model. Document the ownership rules so later contributors know where a token, layer, or scoped rule belongs.'
    },
    zh: {
      domain: '设计系统和组件库',
      need: '让样式决策可复用、可类型化、可限定作用域，或者更容易被覆盖',
      example: '主题包可以暴露 token，注册可动画的值，并让 reset、框架样式和组件样式不再靠 specificity 互相压制。',
      watch: '这些能力改变的是样式编写模型。需要写清归属规则，让后续贡献者知道 token、layer 或 scoped rule 应该放在哪里。'
    }
  },
  {
    test: /resize-observer/i,
    en: {
      domain: 'data visualizations and embedded widgets',
      need: 'respond when an element changes size for reasons CSS cannot report to JavaScript',
      example: 'A chart can recompute its canvas scale when a resizable split pane changes width, even if the viewport size did not change.',
      watch: 'Avoid feedback loops: do not observe an element and immediately write layout-affecting styles back to the same element without guardrails.'
    },
    zh: {
      domain: '数据可视化和嵌入式组件',
      need: '在 CSS 无法通知 JavaScript 的元素尺寸变化发生时做出响应',
      example: '例如可拖拽分栏改变图表容器宽度时，即使视口没有变化，图表也能重新计算 canvas 比例。',
      watch: '注意避免反馈循环：不要监听一个元素后又无保护地立刻写回会影响它尺寸的样式。'
    }
  },
  {
    test: /anchor|popover|top-layer|fallback-positioning|tooltip|position-fallback/i,
    en: {
      domain: 'floating UI',
      need: 'keep a tooltip, popover, or menu attached to its trigger while the surrounding layout changes',
      example: 'For example, an overflow menu can stay aligned to a button and choose a safer placement near the viewport edge.',
      watch: 'Pair it with a keyboard and focus plan. Placement can be CSS-driven, but opening, focus return, and dismissal still affect usability.'
    },
    zh: {
      domain: '浮层 UI',
      need: '让 tooltip、popover 或菜单在布局变化时仍然贴着触发元素',
      example: '例如溢出菜单可以跟随按钮定位，并在靠近视口边缘时选择更安全的位置。',
      watch: '需要配套键盘和焦点策略。摆放可以交给 CSS，但打开、焦点返回和关闭依然影响可用性。'
    }
  },
  {
    test: /container|容器|cq/i,
    en: {
      domain: 'reusable components',
      need: 'change a component based on the space it actually receives rather than the viewport width',
      example: 'A card in a sidebar can stay compact while the same card in the main column shows media, metadata, and actions.',
      watch: 'Choose thresholds from component content. A breakpoint that only matches today’s layout grid will feel arbitrary when the component moves.'
    },
    zh: {
      domain: '可复用组件',
      need: '根据组件实际拿到的空间变化，而不是只看视口宽度',
      example: '同一张卡片在侧栏保持紧凑，在主栏则展示图片、元信息和操作按钮。',
      watch: '阈值要来自组件内容本身。只服务于当前页面栅格的断点，一旦组件移动位置就会显得武断。'
    }
  },
  {
    test: /scroll|snap|carousel|overflow|spatial/i,
    en: {
      domain: 'scrollable interfaces',
      need: 'make a scrolling area feel deliberate without owning every wheel, touch, or keyboard event in JavaScript',
      example: 'A tutorial rail can snap between steps, reveal scroll buttons, and keep the page behind it from moving accidentally.',
      watch: 'Scrolling demos often look good with a mouse. Re-test with touch and keyboard because those are where hidden usability problems show up.'
    },
    zh: {
      domain: '滚动界面',
      need: '让滚动区域有明确手感，而不是用 JavaScript 接管每个滚轮、触摸或键盘事件',
      example: '教程横栏可以按步骤吸附、显示滚动按钮，并避免误滚动到背后的页面。',
      watch: '滚动 demo 用鼠标看起来通常没问题。真正容易暴露问题的是触摸和键盘。'
    }
  },
  {
    test: /color|oklch|lch|hwb|gamut|contrast|forced|accent|scheme|hdr|rgb|hsl|颜色/i,
    en: {
      domain: 'theme and state systems',
      need: 'build color variations from semantic inputs instead of hand-tuning every state',
      example: 'A warning banner can derive its background, border, and text color from one token and still adapt in dark mode.',
      watch: 'Perceptual spaces help with ramps, but they do not replace contrast checks against real text sizes and backgrounds.'
    },
    zh: {
      domain: '主题和状态系统',
      need: '从语义输入生成颜色变化，而不是每个状态手调一遍',
      example: '警告横幅可以从一个 token 推导背景、边框和文字色，并在暗色模式里继续适配。',
      watch: '感知色彩空间有助于生成色阶，但不能替代真实字号和背景上的对比度检查。'
    }
  },
  {
    test: /text|font|typography|ruby|line|wrap|space|indent|hyphen|字|文字|字体|排版/i,
    en: {
      domain: 'reading and editorial UI',
      need: 'protect readability when copy length, language, or font metrics vary',
      example: 'A bilingual card can balance the heading, clamp the summary, and keep inline annotations readable in a narrow column.',
      watch: 'Always test with real content extremes: long product names, mixed scripts, missing glyphs, and translated copy.'
    },
    zh: {
      domain: '阅读和内容型 UI',
      need: '在文案长度、语言和字体指标变化时保持可读性',
      example: '双语卡片可以平衡标题换行，限制摘要行数，并在窄列里保持注音或行内标注可读。',
      watch: '要用真实内容边界测试：超长商品名、混合文字、缺字和翻译后的文案。'
    }
  },
  {
    test: /grid|flex|subgrid|masonry|alignment|layout|flow-root|writing|reading|shapes|ruby|布局/i,
    en: {
      domain: 'complex layout',
      need: 'express alignment, wrapping, and order as layout rules instead of extra wrapper markup',
      example: 'A settings page can align every nested control row while a responsive gallery chooses the right packing behavior.',
      watch: 'Layout features can change reading and focus order indirectly. Check the experience with keyboard navigation, not only screenshots.'
    },
    zh: {
      domain: '复杂布局',
      need: '把对齐、换行和顺序表达成布局规则，而不是增加一层层 wrapper',
      example: '设置页可以让所有嵌套控件行对齐，响应式图库也能选择合适的排列方式。',
      watch: '布局特性可能间接改变阅读和焦点顺序。不要只看截图，要用键盘走一遍。'
    }
  },
  {
    test: /animation|transition|transform|view-transition|motion|easing|starting|pointer|动画|过渡|变换/i,
    en: {
      domain: 'interaction feedback',
      need: 'make a state change legible through movement, timing, or continuity',
      example: 'A selected card can lift, move, or cross-fade into a detail view so the user understands the relationship between states.',
      watch: 'Motion should be optional and purposeful. Add a reduced-motion path before the interaction becomes central to navigation.'
    },
    zh: {
      domain: '交互反馈',
      need: '通过运动、节奏或连续性让状态变化变得可理解',
      example: '被选中的卡片可以抬起、移动或淡入详情视图，让用户理解两个状态之间的关系。',
      watch: '动效应该可关闭且有目的。只要它开始承担导航意义，就需要准备减弱动态路径。'
    }
  },
  {
    test: /form|select|control|caret|user-select|cursor|outline|highlight|表单|控件/i,
    en: {
      domain: 'interactive controls',
      need: 'make native controls feel integrated without removing their built-in behavior',
      example: 'A preference panel can keep native validation and keyboard handling while matching the product accent and focus style.',
      watch: 'After styling, test disabled, focus, invalid, high-contrast, and keyboard-only states. Those are where custom control styling usually breaks.'
    },
    zh: {
      domain: '交互控件',
      need: '让原生控件融入产品视觉，同时保留浏览器内建行为',
      example: '偏好设置面板可以保留原生校验和键盘行为，同时匹配产品强调色和焦点样式。',
      watch: '改完样式后要测禁用、焦点、非法、高对比和纯键盘状态。这些最容易被自定义控件破坏。'
    }
  },
  {
    test: /counter|marker|content|quote|leader|string|target|generated|list|生成|列表|计数/i,
    en: {
      domain: 'document structure',
      need: 'derive labels, numbering, and references from the document instead of keeping them in sync by hand',
      example: 'A checklist can number nested requirements and a generated table of contents can reflect the current heading structure.',
      watch: 'Generated labels are not a substitute for source content. If users need to search, copy, or translate it, put it in the document.'
    },
    zh: {
      domain: '文档结构',
      need: '从文档结构推导标签、编号和引用，而不是人工同步',
      example: '清单可以自动编号多级要求，生成目录也能反映当前标题结构。',
      watch: '生成标签不能替代源内容。用户需要搜索、复制或翻译的信息，应该真实存在于文档里。'
    }
  },
  {
    test: /page|print|bleed|fragment|footnote|speech|paged|分页|打印|脚注/i,
    en: {
      domain: 'print and generated documents',
      need: 'make a browser-rendered document behave like a paged artifact',
      example: 'An invoice can reserve page margins, keep totals together, and place legal notes in a predictable area.',
      watch: 'Print engines differ more than screen engines. Lock down the browser and output path for critical documents.'
    },
    zh: {
      domain: '打印和生成文档',
      need: '让浏览器渲染的文档具备分页产物的行为',
      example: '发票可以预留页边距，避免总计区域被拆开，并把法律说明放在可预测的位置。',
      watch: '打印引擎差异比屏幕渲染更大。关键文档需要固定浏览器和输出链路。'
    }
  },
  {
    test: /api|cssom|typed|observer|animation-api|highlight|houdini|worklet|geometry|view-transition-api/i,
    en: {
      domain: 'authoring tools and runtime inspection',
      need: 'read or write CSS as structured data when a stylesheet alone cannot express the workflow',
      example: 'A page builder can inspect selected element geometry, update typed values, and preview a transition without parsing CSS strings.',
      watch: 'Do not move presentational styling into JavaScript just because an API exists. Use it when the workflow genuinely needs runtime coordination.'
    },
    zh: {
      domain: '编辑工具和运行时检查',
      need: '在样式表无法表达工作流时，以结构化数据读写 CSS',
      example: '页面搭建器可以检查选中元素的几何信息、更新 typed value，并预览过渡效果，而不必解析 CSS 字符串。',
      watch: '不要因为有 API 就把表现层样式搬进 JavaScript。只有确实需要运行时协同时才使用。'
    }
  }
]

function textFor(item, category) {
  return `${item.slug} ${item.sourceSlug || ''} ${item.name} ${item.originalName || ''} ${item.summary} ${item.syntax} ${category.slug} ${category.originalTitle || category.title}`
}

function scenarioFor(locale, category, item) {
  const source = textFor(item, category)
  const match = scenarioRules.find((rule) => rule.test.test(source))
  return match ? match[locale] : categoryProfiles[category.slug]?.[locale]?.defaultScenario
}

function isExperimentalStatus(item) {
  return /草案|支持有限|浏览器支持很少|部分实现|实现推进中|draft|limited|partial|implementation in progress|very limited/i.test(item.status)
}

function stableWatch(locale, scenario) {
  return scenario.watch
}

function experimentalWatch(locale, item, scenario) {
  if (locale === 'zh') {
    return `${item.name} 还不适合无条件依赖。把它作为渐进增强：先保证基础体验成立，再用特性检测或局部 fallback 加上这层能力。`
  }

  return `${item.name} should not be a hard dependency yet. Treat it as progressive enhancement: ship the baseline experience first, then add this capability behind feature detection or local fallbacks.`
}

export function buildUsage(locale, category, item) {
  const scenario = scenarioFor(locale, category, item)
  const watch = isExperimentalStatus(item) ? experimentalWatch(locale, item, scenario) : stableWatch(locale, scenario)

  if (locale === 'zh') {
    return [
      {
        heading: labels.zh.bestFit,
        body: `适合用于${scenario.domain}：如果目标是${scenario.need}，${item.name} 通常比额外加 class、wrapper 或脚本更直接。`
      },
      {
        heading: labels.zh.example,
        body: scenario.example
      },
      {
        heading: labels.zh.watchOut,
        body: watch
      }
    ]
  }

  return [
    {
      heading: labels.en.bestFit,
      body: `Use ${item.name} in ${scenario.domain} when you need to ${scenario.need}. It usually gives the stylesheet a clearer job than extra classes, wrappers, or script.`
    },
    {
      heading: labels.en.example,
      body: scenario.example
    },
    {
      heading: labels.en.watchOut,
      body: watch
    }
  ]
}

function escapeComment(value) {
  return String(value).replace(/\*\//g, '* /')
}

function syntaxComment(locale, item) {
  const label = labels[locale].syntaxHint
  return `/* ${label}: ${escapeComment(item.syntax)} */`
}

function featureCss(locale, item) {
  const slug = item.slug
  const snippets = {
    'registered-custom-properties': `
@property --meter {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 28%;
}
.meter-fill {
  --meter: 74%;
  width: var(--meter);
  transition: --meter 700ms ease;
}
.demo-frame:hover .meter-fill {
  --meter: 92%;
}`,
    'cascade-layers': `
@layer reset, components, utilities;
@layer components {
  .demo-card { border-color: oklch(68% 0.12 210); }
}
@layer utilities {
  .demo-card.is-featured { border-color: oklch(62% 0.18 35); }
}`,
    'css-nesting': `
.demo-card {
  & .demo-title { color: oklch(38% 0.14 210); }
  &:hover .demo-chip { transform: translateY(-2px); }
}`,
    'at-scope': `
@scope (.demo-frame) to (.demo-footer) {
  .demo-title { color: oklch(36% 0.16 210); }
  .demo-chip { border-color: oklch(70% 0.16 160); }
}`,
    'functional-selectors': `
.demo-list:has(input:checked) .demo-card {
  border-color: oklch(66% 0.16 160);
}
.demo-card:is(:hover, :focus-within) {
  transform: translateY(-2px);
}`,
    'relative-selectors': `
.demo-card:has(+ .demo-card.is-featured) {
  border-color: oklch(72% 0.16 70);
}`,
    'enhanced-nth-child': `
.demo-list .demo-row:nth-child(2n of .is-active) {
  background: oklch(94% 0.04 170);
}`,
    'focus-and-accessibility-states': `
.demo-field:focus-visible {
  outline: 3px solid oklch(67% 0.19 210);
  outline-offset: 3px;
}`,
    'form-states': `
.demo-field:user-invalid {
  border-color: oklch(58% 0.2 28);
}
.demo-field:valid {
  border-color: oklch(64% 0.16 150);
}`,
    'container-size-queries': `
.demo-frame {
  container: feature-card / inline-size;
}
@container feature-card (width > 520px) {
  .demo-card { grid-template-columns: 140px 1fr; }
  .demo-media { min-height: 120px; }
}`,
    'container-style-queries': `
.demo-frame {
  container-name: tone;
  --density: spacious;
}
@container style(--density: spacious) {
  .demo-card { gap: 18px; padding: 22px; }
}`,
    'container-scroll-state-queries': `
.demo-frame {
  container-type: scroll-state;
}
@container scroll-state(scrollable: bottom) {
  .scroll-hint { opacity: 1; }
}`,
    'comparison-functions': `
.demo-title {
  font-size: clamp(1.1rem, 4vw, 2rem);
}`,
    'aspect-ratio': `
.demo-media {
  aspect-ratio: 16 / 9;
  min-height: auto;
}`,
    'color-mix': `
.demo-chip {
  background: color-mix(in oklch, oklch(64% 0.18 190) 22%, white);
  border-color: color-mix(in oklch, oklch(64% 0.18 190) 60%, black);
}`,
    'lab-lch-oklab-oklch': `
.palette {
  background: linear-gradient(90deg, oklch(72% 0.16 35), oklch(72% 0.16 190), oklch(72% 0.16 310));
}`,
    'light-dark': `
.demo-card {
  color-scheme: light dark;
  background: light-dark(oklch(98% 0.02 90), oklch(24% 0.03 250));
}`,
    'text-wrap': `
.demo-title {
  text-wrap: balance;
}`,
    'line-clamp': `
.demo-copy {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`,
    'scroll-snap': `
.demo-scroller {
  scroll-snap-type: x mandatory;
}
.demo-slide {
  scroll-snap-align: center;
}`,
    'overscroll-behavior': `
.demo-scroller {
  overscroll-behavior-inline: contain;
}`,
    'scrollbar-styling': `
.demo-scroller {
  scrollbar-color: oklch(62% 0.18 190) transparent;
  scrollbar-width: thin;
}`,
    'scroll-driven-animations': `
@keyframes reveal-progress {
  from { scale: .7; opacity: .55; }
  to { scale: 1; opacity: 1; }
}
.demo-chip {
  animation: reveal-progress linear both;
  animation-timeline: view();
}`,
    'motion-path': `
.motion-dot {
  offset-path: path('M 0 40 C 90 -20 160 110 250 34');
  animation: travel 2200ms ease-in-out infinite alternate;
}
@keyframes travel {
  to { offset-distance: 100%; }
}`,
    'individual-transforms': `
.demo-card {
  translate: 0 0;
  rotate: -1deg;
  scale: 1;
}
.demo-card:hover {
  translate: 0 -8px;
  rotate: 1deg;
  scale: 1.02;
}`,
    'accent-color': `
.demo-field {
  accent-color: oklch(61% 0.18 190);
}`,
    'customizable-select': `
.demo-select {
  appearance: base-select;
  border: 1px solid oklch(78% 0.04 240);
}`,
    'user-select': `
.demo-copy {
  user-select: text;
}
.demo-chip {
  user-select: none;
}`,
    'at-counter-style': `
@counter-style steps {
  system: cyclic;
  symbols: '01' '02' '03';
  suffix: ' ';
}
.demo-list {
  list-style: steps;
}`,
    'marker-styling': `
.demo-list li::marker {
  color: oklch(58% 0.18 35);
  font-weight: 800;
}`,
    'at-page': `
@page {
  size: A5;
  margin: 18mm;
}`,
    'resize-observer': `
.api-meter::after {
  content: 'ResizeObserver can update this measurement label when the panel changes size.';
}`,
    'custom-highlight-api': `
::highlight(search-result) {
  background: oklch(86% 0.12 85);
  color: black;
}`
  }

  return snippets[slug] || ''
}

function sharedCss(locale, item) {
  return `${syntaxComment(locale, item)}
.demo-frame {
  display: grid;
  gap: 16px;
}
.demo-title {
  margin: 0;
  font-size: 1.35rem;
  line-height: 1.1;
  letter-spacing: 0;
}
.demo-copy {
  margin: 0;
  color: color-mix(in oklch, CanvasText 72%, Canvas);
  line-height: 1.55;
}
.demo-chip {
  display: inline-flex;
  align-items: center;
  width: max-content;
  min-height: 28px;
  padding: 0 10px;
  border: 1px solid color-mix(in oklch, CanvasText 18%, transparent);
  background: color-mix(in oklch, CanvasText 6%, Canvas);
  font: 700 .75rem/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  transition: 220ms ease;
}
.demo-card {
  display: grid;
  gap: 12px;
  padding: 18px;
  border: 1px solid color-mix(in oklch, CanvasText 16%, transparent);
  background: color-mix(in oklch, Canvas 96%, CanvasText);
  box-shadow: 0 18px 48px color-mix(in oklch, CanvasText 10%, transparent);
  transition: 220ms ease;
}
.demo-media {
  min-height: 90px;
  background:
    linear-gradient(135deg, color-mix(in oklch, oklch(67% 0.15 190) 26%, Canvas), transparent),
    repeating-linear-gradient(45deg, color-mix(in oklch, CanvasText 8%, transparent) 0 8px, transparent 8px 16px);
  border: 1px solid color-mix(in oklch, CanvasText 12%, transparent);
}`
}

function languageDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '组件主题 token', copy: '卡片、按钮和进度条共享同一组 CSS 决策。', chip: 'theme-ready', metric: '74%' }
    : { title: 'Component theme tokens', copy: 'A card, action, and progress meter share the same CSS decision.', chip: 'theme-ready', metric: '74%' }

  return {
    html: `<div class="demo-card is-featured">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
  <div class="meter"><span class="meter-fill"></span></div>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-card {
  --feature-color: oklch(62% 0.17 190);
  border-color: color-mix(in oklch, var(--feature-color) 55%, CanvasText);
}
.meter {
  height: 10px;
  overflow: hidden;
  background: color-mix(in oklch, CanvasText 10%, Canvas);
}
.meter-fill {
  display: block;
  height: 100%;
  width: ${t.metric};
  background: linear-gradient(90deg, oklch(66% 0.17 190), oklch(70% 0.16 145));
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? `${item.name} 在这里用于把组件级样式决策集中起来，而不是散落在每个元素上。`
      : `${item.name} is used here to centralize a component-level styling decision instead of scattering it across elements.`
  }
}

function selectorsDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '发布检查清单', a: '内容已审校', b: '封面已上传', c: 'SEO 摘要待补齐', chip: 'state from markup' }
    : { title: 'Release checklist', a: 'Copy reviewed', b: 'Cover uploaded', c: 'SEO summary missing', chip: 'state from markup' }

  return {
    html: `<div class="demo-list">
  <label class="demo-card demo-row is-active"><input type="checkbox" checked> <span>${t.a}</span></label>
  <label class="demo-card demo-row is-active"><input type="checkbox" checked> <span>${t.b}</span></label>
  <label class="demo-card demo-row"><input type="checkbox"> <span>${t.c}</span></label>
  <span class="demo-chip">${t.chip}</span>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-list {
  display: grid;
  gap: 10px;
}
.demo-row {
  grid-template-columns: auto 1fr;
  align-items: center;
  box-shadow: none;
}
.demo-row input {
  accent-color: oklch(62% 0.18 170);
}
.demo-row:has(input:checked) {
  background: color-mix(in oklch, oklch(74% 0.13 165) 20%, Canvas);
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '这个演示让列表项直接响应内部表单状态，适合观察选择器如何减少手写状态 class。'
      : 'This demo lets list rows react to internal form state, showing how selectors can replace hand-written state classes.'
  }
}

function queriesDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '容器驱动卡片', copy: '同一组件在不同槽位里自行切换密度。', chip: 'container-aware' }
    : { title: 'Container-aware card', copy: 'The same component adjusts its density inside different slots.', chip: 'container-aware' }

  return {
    html: `<div class="demo-card">
  <div class="demo-media"></div>
  <div>
    <span class="demo-chip">${t.chip}</span>
    <h4 class="demo-title">${t.title}</h4>
    <p class="demo-copy">${t.copy}</p>
  </div>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-frame {
  container: feature-area / inline-size;
}
.demo-card {
  grid-template-columns: 1fr;
}
@container feature-area (width > 520px) {
  .demo-card {
    grid-template-columns: 150px 1fr;
    align-items: center;
  }
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '改变预览宽度时，组件根据自己的容器空间调整，而不是依赖整页视口。'
      : 'When the preview width changes, the component responds to its own container instead of the whole viewport.'
  }
}

function layoutDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '仪表盘区域', copy: '内容、操作区和指标按同一套布局规则对齐。', chip: 'layout rule' }
    : { title: 'Dashboard section', copy: 'Content, actions, and metrics align through the same layout rule.', chip: 'layout rule' }

  return {
    html: `<div class="demo-dashboard">
  <article class="demo-card">
    <span class="demo-chip">${t.chip}</span>
    <h4 class="demo-title">${t.title}</h4>
    <p class="demo-copy">${t.copy}</p>
  </article>
  <aside class="demo-card compact"><strong>42%</strong><span>change</span></aside>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-dashboard {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(120px, .7fr);
  gap: 14px;
  align-items: stretch;
}
.compact {
  place-items: center;
  text-align: center;
}
.compact strong {
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: oklch(50% 0.16 190);
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '演示把布局能力放进一个真实 UI 片段：主内容和辅助指标需要稳定对齐。'
      : 'The demo places the layout feature in a realistic UI fragment where primary content and supporting metrics need stable alignment.'
  }
}

function sizingDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '流式指标卡', copy: '字号、比例和内部空间都跟随可用空间变化。', chip: 'fluid sizing' }
    : { title: 'Fluid metric card', copy: 'Type, ratio, and internal space follow the available room.', chip: 'fluid sizing' }

  return {
    html: `<div class="demo-card">
  <div class="demo-media"></div>
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-card {
  inline-size: min(100%, 560px);
  padding: clamp(14px, 4vw, 28px);
}
.demo-title {
  font-size: clamp(1.25rem, 6vw, 2.6rem);
}
.demo-media {
  aspect-ratio: 16 / 7;
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '这个示例让尺寸关系来自 CSS 约束本身，而不是固定写死一个像素值。'
      : 'This example lets size relationships come from CSS constraints instead of a fixed pixel value.'
  }
}

function colorDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '语义色阶', copy: '从一个品牌色推导背景、边框和强调状态。', chip: 'theme state' }
    : { title: 'Semantic color ramp', copy: 'Background, border, and emphasis states derive from one brand color.', chip: 'theme state' }

  return {
    html: `<div class="demo-card">
  <div class="palette"></div>
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-card {
  --brand: oklch(62% 0.18 190);
  border-color: color-mix(in oklch, var(--brand) 45%, CanvasText);
  background: color-mix(in oklch, var(--brand) 9%, Canvas);
}
.palette {
  height: 46px;
  background: linear-gradient(90deg,
    color-mix(in oklch, var(--brand) 12%, Canvas),
    var(--brand),
    color-mix(in oklch, var(--brand) 75%, black));
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '演示重点是颜色之间的关系：同一语义色如何生成可维护的一组状态。'
      : 'The important part is the relationship between colors: one semantic color generates a maintainable set of states.'
  }
}

function typographyDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '跨语言标题需要真实排版规则', copy: '长标题、混排和摘要在窄卡片里最容易暴露排版问题。', chip: 'reading surface' }
    : { title: 'Real typography rules for multilingual headings', copy: 'Long titles, mixed scripts, and summaries reveal typography problems inside narrow cards.', chip: 'reading surface' }

  return {
    html: `<article class="demo-card">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
</article>`,
    css: `${sharedCss(locale, item)}
.demo-card {
  max-inline-size: 560px;
}
.demo-title {
  text-wrap: balance;
}
.demo-copy {
  max-inline-size: 44ch;
  hyphens: auto;
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '这个示例用接近真实的标题和摘要，看排版特性如何改善阅读面。'
      : 'This example uses realistic heading and summary copy to show how typography features improve a reading surface.'
  }
}

function visualDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '媒体卡片视觉处理', copy: '裁剪、遮罩、混合和滤镜可以直接服务组件状态。', chip: 'visual layer' }
    : { title: 'Media card treatment', copy: 'Cropping, masks, blending, and filters can directly serve component states.', chip: 'visual layer' }

  return {
    html: `<article class="demo-card">
  <div class="demo-media"></div>
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
</article>`,
    css: `${sharedCss(locale, item)}
.demo-media {
  min-height: 150px;
  background:
    radial-gradient(circle at 28% 28%, oklch(75% 0.16 65), transparent 30%),
    linear-gradient(135deg, oklch(58% 0.17 210), oklch(42% 0.12 285));
  filter: saturate(1.15) contrast(1.05);
}
.demo-card:hover .demo-media {
  clip-path: inset(6px round 18px);
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '演示把视觉特性放在媒体卡片上，能直接看到裁剪、色彩和层次如何影响组件。'
      : 'The visual feature is placed on a media card so the effect on cropping, color, and hierarchy is visible immediately.'
  }
}

function scrollDemo(locale, item) {
  const t = locale === 'zh'
    ? { a: '概览', b: '语法', c: '兼容性', chip: 'snap rail' }
    : { a: 'Overview', b: 'Syntax', c: 'Compatibility', chip: 'snap rail' }

  return {
    html: `<div class="demo-scroller" tabindex="0">
  <section class="demo-slide"><span class="demo-chip">${t.chip}</span><strong>${t.a}</strong></section>
  <section class="demo-slide"><span class="demo-chip">${t.chip}</span><strong>${t.b}</strong></section>
  <section class="demo-slide"><span class="demo-chip">${t.chip}</span><strong>${t.c}</strong></section>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-scroller {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(220px, 72%);
  gap: 14px;
  overflow-x: auto;
  padding: 8px 8px 16px;
  scroll-snap-type: x mandatory;
  overscroll-behavior-inline: contain;
}
.demo-slide {
  min-height: 150px;
  display: grid;
  align-content: space-between;
  padding: 18px;
  scroll-snap-align: center;
  border: 1px solid color-mix(in oklch, CanvasText 16%, transparent);
  background: color-mix(in oklch, oklch(70% 0.14 190) 13%, Canvas);
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '这个演示使用可聚焦滚动轨道，观察滚动特性如何改变轮播和阅读面板的手感。'
      : 'This demo uses a focusable scroll rail to show how scrolling features change the feel of carousels and reading panes.'
  }
}

function animationDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '状态转场', copy: '移动和节奏让用户理解元素状态变化。', chip: 'motion cue' }
    : { title: 'State transition', copy: 'Movement and timing help users understand state changes.', chip: 'motion cue' }

  return {
    html: `<div class="demo-card">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
  <span class="motion-dot"></span>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-card {
  position: relative;
  min-height: 190px;
  overflow: hidden;
}
.motion-dot {
  position: absolute;
  left: 28px;
  bottom: 28px;
  width: 24px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: oklch(62% 0.19 28);
  animation: pulse 1300ms ease-in-out infinite alternate;
}
@keyframes pulse {
  to { transform: translateX(220px) scale(1.2); }
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '动效示例聚焦“状态变化是否能被理解”，而不是只让元素动起来。'
      : 'The animation focuses on whether a state change is understandable, not merely whether something moves.'
  }
}

function formsDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '偏好设置', a: '启用重点提示', b: '界面密度', chip: 'native control' }
    : { title: 'Preferences', a: 'Enable priority hints', b: 'Interface density', chip: 'native control' }

  return {
    html: `<form class="demo-card">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <label><input class="demo-field" type="checkbox" checked> ${t.a}</label>
  <label>${t.b}<select class="demo-select demo-field"><option>Comfortable</option><option>Compact</option></select></label>
</form>`,
    css: `${sharedCss(locale, item)}
.demo-card label {
  display: grid;
  gap: 6px;
  color: color-mix(in oklch, CanvasText 78%, Canvas);
}
.demo-field,
.demo-select {
  accent-color: oklch(61% 0.18 190);
}
.demo-select {
  min-height: 38px;
  padding: 0 10px;
  border: 1px solid color-mix(in oklch, CanvasText 18%, transparent);
  background: Canvas;
  color: CanvasText;
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '表单 demo 保留原生控件，展示 CSS 如何改变交互表面而不丢掉语义。'
      : 'The form demo keeps native controls and shows how CSS can shape the interaction surface without losing semantics.'
  }
}

function generatedContentDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '发布步骤', a: '收集资料', b: '生成目录', c: '导出 PDF', chip: 'structured labels' }
    : { title: 'Publishing steps', a: 'Collect sources', b: 'Generate contents', c: 'Export PDF', chip: 'structured labels' }

  return {
    html: `<div class="demo-card">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <ol class="demo-list">
    <li>${t.a}</li>
    <li>${t.b}</li>
    <li>${t.c}</li>
  </ol>
</div>`,
    css: `${sharedCss(locale, item)}
.demo-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding-inline-start: 2rem;
  counter-reset: steps;
}
.demo-list li {
  padding: 8px 10px;
  background: color-mix(in oklch, CanvasText 5%, Canvas);
}
.demo-list li::marker {
  color: oklch(58% 0.17 36);
  font-weight: 800;
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '演示展示编号和标记如何跟文档结构绑定，而不是手动写死。'
      : 'The demo shows numbering and markers staying tied to document structure instead of being typed by hand.'
  }
}

function pagedMediaDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '季度报告', foot: '页眉、页脚、边距和分页规则服务输出产物。', chip: 'print preview' }
    : { title: 'Quarterly report', foot: 'Headers, footers, margins, and breaks serve the final artifact.', chip: 'print preview' }

  return {
    html: `<div class="paper">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.foot}</p>
  <div class="paper-lines"></div>
</div>`,
    css: `${sharedCss(locale, item)}
.paper {
  width: min(360px, 100%);
  min-height: 220px;
  padding: 24px;
  margin: auto;
  border: 1px solid color-mix(in oklch, CanvasText 18%, transparent);
  background: Canvas;
  box-shadow: 0 18px 50px color-mix(in oklch, CanvasText 14%, transparent);
}
.paper-lines {
  height: 78px;
  margin-top: 18px;
  background: repeating-linear-gradient(
    to bottom,
    color-mix(in oklch, CanvasText 13%, transparent) 0 1px,
    transparent 1px 16px
  );
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? '分页媒体能力的价值在最终输出：纸张、页边距、页眉页脚和分页位置都要可预测。'
      : 'Paged media features matter at output time: paper size, margins, running areas, and breaks need to be predictable.'
  }
}

function apiDemo(locale, item) {
  const t = locale === 'zh'
    ? { title: '样式检查器', copy: '工具读取结构化值，再把渲染交还给 CSS。', chip: 'runtime CSS' }
    : { title: 'Style inspector', copy: 'Tooling reads structured values while CSS keeps rendering ownership.', chip: 'runtime CSS' }

  return {
    html: `<div class="demo-card api-panel">
  <span class="demo-chip">${t.chip}</span>
  <h4 class="demo-title">${t.title}</h4>
  <p class="demo-copy">${t.copy}</p>
  <code class="api-meter">width: 320px</code>
</div>`,
    css: `${sharedCss(locale, item)}
.api-panel {
  border-style: dashed;
}
.api-meter {
  display: block;
  padding: 12px;
  background: color-mix(in oklch, CanvasText 8%, Canvas);
  color: oklch(46% 0.14 210);
  font: 700 .85rem/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
}
${featureCss(locale, item)}`,
    caption: locale === 'zh'
      ? 'API 类能力通常服务工具链或运行时协作；演示用检查器场景表达它们的使用位置。'
      : 'API capabilities usually serve tooling or runtime coordination; this inspector scene shows where they fit.'
  }
}

const demoBuilders = {
  'language-architecture-cascade-and-reuse': languageDemo,
  'selectors-pseudo-classes-and-pseudo-elements': selectorsDemo,
  'conditional-queries-container-queries-and-environment-awareness': queriesDemo,
  'layout-positioning-and-reading-order': layoutDemo,
  'sizing-units-math-and-value-functions': sizingDemo,
  'color-theming-and-high-dynamic-range': colorDemo,
  'fonts-text-and-typography': typographyDemo,
  'backgrounds-borders-images-masks-and-visual-effects': visualDemo,
  'scrolling-overflow-and-scroll-based-components': scrollDemo,
  'animation-transforms-motion-paths-and-view-transitions': animationDemo,
  'forms-controls-and-interactive-ui': formsDemo,
  'generated-content-lists-counters-and-content-references': generatedContentDemo,
  'paged-media-print-and-publishing-layout': pagedMediaDemo,
  'css-related-web-apis-and-houdini-capabilities': apiDemo
}

export function buildDemo(locale, category, item) {
  const builder = demoBuilders[category.slug] || languageDemo
  const demo = builder(locale, item)
  const baseCss = sharedCss(locale, item)
  const code = demo.css
    .replace(baseCss, syntaxComment(locale, item))
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return {
    badge: labels[locale].demoBadge,
    ...demo,
    code
  }
}
