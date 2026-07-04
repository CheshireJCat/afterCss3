const categoryTranslations = {
  '语言架构、级联与复用': 'Language Architecture, Cascade, and Reuse',
  '选择器、伪类与伪元素': 'Selectors, Pseudo-classes, and Pseudo-elements',
  '条件查询、容器查询与环境感知': 'Conditional Queries, Container Queries, and Environment Awareness',
  '布局、定位与阅读顺序': 'Layout, Positioning, and Reading Order',
  '尺寸、单位、数学和值函数': 'Sizing, Units, Math, and Value Functions',
  '颜色、主题与高动态范围': 'Color, Theming, and High Dynamic Range',
  '字体、文字与排版': 'Fonts, Text, and Typography',
  '背景、边框、图像、遮罩与视觉效果': 'Backgrounds, Borders, Images, Masks, and Visual Effects',
  '滚动、溢出与滚动型组件': 'Scrolling, Overflow, and Scroll-based Components',
  '动画、变换、运动路径与视图过渡': 'Animation, Transforms, Motion Paths, and View Transitions',
  '表单、控件与交互 UI': 'Forms, Controls, and Interactive UI',
  '生成内容、列表、计数器与内容引用': 'Generated Content, Lists, Counters, and Content References',
  '分页、打印与出版排版': 'Paged Media, Print, and Publishing Layout',
  'CSS 相关 Web APIs 与 Houdini 能力': 'CSS-related Web APIs and Houdini Capabilities'
}

const nameTranslations = {
  '注册自定义属性': 'Registered custom properties',
  '条件规则增强': 'Enhanced conditional rules',
  '自定义函数': 'Custom functions',
  '函数式选择器': 'Functional selectors',
  '相对选择器': 'Relative selectors',
  '增强 nth-child': 'Enhanced nth-child',
  '焦点与可访问状态': 'Focus and accessibility states',
  '组件/元素状态': 'Component and element states',
  '表单状态': 'Form states',
  '弹层与顶层状态': 'Popover and top-layer states',
  'Shadow DOM 选择': 'Shadow DOM selection',
  '自定义状态': 'Custom states',
  '视图过渡状态': 'View transition states',
  '列选择器': 'Column selectors',
  '现代伪元素': 'Modern pseudo-elements',
  'View Transition 伪元素': 'View Transition pseudo-elements',
  '原生滚动控件伪元素': 'Native scroll control pseudo-elements',
  '原生表单部件伪元素': 'Native form control pseudo-elements',
  'Media Queries 4 范围语法': 'Media Queries 4 range syntax',
  '输入能力查询': 'Input capability queries',
  '显示与偏好查询': 'Display and preference queries',
  '色彩与动态范围查询': 'Color and dynamic-range queries',
  '运行环境查询': 'Runtime environment queries',
  '容器单位': 'Container units',
  '特性查询函数': 'Feature query functions',
  '环境变量': 'Environment variables',
  '自定义媒体查询': 'Custom media queries',
  'Anchor/position fallback 查询': 'Anchor and position fallback queries',
  '多关键字 display': 'Multi-keyword display',
  '比较函数': 'Comparison functions',
  '进阶数学函数': 'Advanced math functions',
  '数学常量': 'Math constants',
  '动态视口单位': 'Dynamic viewport units',
  '逻辑视口单位': 'Logical viewport units',
  '字体相关单位': 'Font-relative units',
  '树计数函数': 'Tree counting functions',
  '随机与选择函数': 'Random and selection functions',
  'fallback/条件值函数': 'Fallback and conditional value functions',
  'URL 请求修饰': 'URL request modifiers',
  '现代 rgb/hsl 语法': 'Modern rgb()/hsl() syntax',
  '相对颜色语法': 'Relative color syntax',
  '颜色插值方法': 'Color interpolation methods',
  '字体加载控制': 'Font loading control',
  '字体指标覆盖': 'Font metric overrides',
  '字体调色板': 'Font palettes',
  'OpenType 控制': 'OpenType controls',
  '字体合成控制': 'Font synthesis control',
  'white-space 分解': 'white-space decomposition',
  '断词与连字符增强': 'Word breaking and hyphenation enhancements',
  '文本装饰增强': 'Text decoration enhancements',
  '强调与特殊装饰': 'Emphasis and special decorations',
  '首字下沉': 'Drop caps',
  '基线与行网格': 'Baselines and line grids',
  '间距与自动排版': 'Spacing and automatic typography',
  'text-indent 扩展': 'text-indent extensions',
  '多背景与背景控制': 'Multiple backgrounds and background control',
  '渐变族': 'Gradient family',
  'content 扩展': 'content extensions',
  '@page': '@page',
  'page selectors': 'Page selectors',
  'margin boxes': 'Margin boxes',
  'named pages': 'Named pages',
  'bleed and marks': 'Bleed and marks',
  'fragmentation': 'Fragmentation',
  'page floats': 'Page floats',
  'footnotes': 'Footnotes'
}

const syntaxTranslations = {
  'line-clamp': 'line-clamp: 3; block-ellipsis: auto;',
  'content-扩展': "content: url(icon.svg) / 'alternative text';",
  'animation-triggers': 'animation-trigger, trigger-exit, and related trigger properties',
  'anchor-position-fallback-查询': '@container anchored(...) or fallback-related queries'
}

const demoTranslations = {
  'line-clamp': 'line-clamp: 3; block-ellipsis: auto;',
  'content-扩展': "content: url(icon.svg) / 'alternative text';"
}

const summaryTranslations = {
  'custom-properties': 'Native variables, design tokens, and cross-component inheritance.',
  '注册自定义属性': 'Make custom properties animatable, type-checkable, and able to define initial values.',
  'cascade-layers': 'Layer browser resets, frameworks, and component styles to reduce specificity battles.',
  'revert-layer': 'Roll back declarations from the current cascade layer without reverting every origin.',
  'at-scope': 'Native local scoping and scoped proximity reduce global selector pollution.',
  'css-nesting': 'Native nested selectors and nested conditional rules replace part of the preprocessor workflow.',
  '条件规则增强': 'Detect support for properties, values, selectors, font technologies, and font formats.',
  'at-when-at-else': 'Combine media, supports, and container conditions into native conditional chains.',
  'css-if': 'Write conditions inside property values with media(), supports(), and style().',
  '自定义函数': 'Native parameterized value functions reduce dependency on Sass or build tools.',
  'mixins-at-apply': 'Native reusable declaration blocks with parameters.',
  'cssom-typed-om': 'Manipulate CSS values through structured APIs instead of string concatenation.',
  '函数式选择器': 'Compose complex conditions, control specificity, and select parents or relationships.',
  '相对选择器': 'Select an element based on children, following siblings, or relationship chains.',
  '增强-nth-child': 'Calculate structural positions within a filtered subset of children.',
  '焦点与可访问状态': 'Style visible keyboard focus and coordinate focus state with parent containers.',
  '组件-元素状态': 'Style custom-element definition state, directionality, link states, and related states.',
  '表单状态': 'Respond to validity, defaults, required fields, and user interaction from CSS.',
  '弹层与顶层状态': 'Select open or top-layer states such as details, dialog, popover, and fullscreen.',
  'shadow-dom-选择': 'Manage style boundaries and exposed parts across Web Components.',
  '自定义状态': 'Expose custom element state to CSS through ElementInternals.',
  '视图过渡状态': 'Select roots or transition types during View Transition rendering.',
  '列选择器': 'Target table column relationships and column positions.',
  '现代伪元素': 'Style list markers, placeholders, file buttons, selections, highlights, and top-layer backdrops.',
  'view-transition-伪元素': 'Define captured layers and animations for page state changes.',
  '原生滚动控件伪元素': 'Build CSS-only carousels, pagination indicators, and scroll buttons.',
  '原生表单部件伪元素': 'Style select, checkbox, range, date/time, and other native control internals more precisely.',
  'media-queries-4-范围语法': 'Write breakpoints with syntax that reads closer to mathematical expressions.',
  '输入能力查询': 'Adapt UI for mouse, touch, pen, and other input capabilities.',
  '显示与偏好查询': 'Respond to system preferences and accessibility settings.',
  '色彩与动态范围查询': 'Progressively enhance for P3, HDR, and video dynamic range.',
  '运行环境查询': 'Detect scripting, refresh capability, overflow behavior, and PWA display modes.',
  'container-size-queries': 'Respond to a component container size instead of the viewport.',
  'container-style-queries': 'Branch on computed container styles or custom properties.',
  'container-scroll-state-queries': 'Respond to sticky, snapped, scrollable, and other scroll states.',
  '容器单位': 'Compute values directly from the query container dimensions.',
  '特性查询函数': 'Detect selectors, declarations, font technologies, or font formats.',
  '环境变量': 'Adapt to notches, foldable viewport segments, virtual keyboards, and title bars.',
  '自定义媒体查询': 'Name and reuse common media conditions.',
  'anchor-position-fallback-查询': 'Adjust styles based on the result of anchor positioning fallback selection.',
  'grid-layout': 'Two-dimensional layout with named areas and automatic placement.',
  'subgrid': 'Let nested grids inherit parent tracks to align deep content.',
  'masonry-grid-level-3': 'Bring masonry-style layout into the standards track.',
  'flexbox': 'One-dimensional flexible layout and space distribution.',
  'box-alignment': 'A unified alignment model across flex, grid, and block layout.',
  '多关键字-display': 'Split outer and inner display values for more precise layout semantics.',
  'flow-root': 'Create a new block formatting context without clearfix hacks.',
  'logical-properties': 'Map layout, margin, border, and sizing properties to writing direction.',
  'writing-modes': 'Support vertical writing, mixed writing modes, and international typography.',
  'containment': 'Isolate layout, style, and paint work to improve performance and enable container queries.',
  'anchor-positioning': 'Position tooltips, popovers, and menus relative to anchors without JavaScript.',
  'fallback-positioning': 'Automatically flip or reposition floating UI when it would collide.',
  'reading-flow-order': 'Make assistive technology and tab order follow the intended visual layout.',
  'shapes-and-exclusions': 'Wrap text around non-rectangular shapes and complex float regions.',
  'multicol-and-fragmentation': 'Control multi-column layout and breaks across pages or columns.',
  'ruby-layout': 'Typeset East Asian annotations and pronunciation guides.',
  'intrinsic-sizing': 'Compute dimensions from natural content size and constraints.',
  'aspect-ratio': 'Let aspect ratio participate in layout without padding hacks.',
  '比较函数': 'Create fluid typography, responsive sizing, and bounded values.',
  '进阶数学函数': 'Use native grid math, trigonometry, exponentials, rounding, and sign checks.',
  '数学常量': 'Use standard math constants inside calc expressions.',
  '动态视口单位': 'Handle mobile browser UI changes that break classic 100vh layouts.',
  '逻辑视口单位': 'Define viewport units along inline and block axes.',
  '字体相关单位': 'Use cap height, CJK ideographic size, line height, and root font metrics in layout.',
  'interpolate-size': 'Allow intrinsic sizes such as auto and min-content to animate.',
  'calc-size': 'Perform calculations on intrinsic sizes and use them in animation.',
  'typed-attr': 'Read typed HTML attribute values for properties beyond content.',
  '树计数函数': 'Use sibling position and total counts for staggered effects, layout formulas, and color distribution.',
  '随机与选择函数': 'Use native random values or random choices without pre-generated classes.',
  'fallback-条件值函数': 'Express value-level fallbacks, state switching, progress normalization, and numeric blending.',
  'url-请求修饰': 'Attach metadata such as integrity to CSS resource requests.',
  'anchor-size': 'Use the size of an anchored element in layout calculations.',
  'field-sizing': 'Make inputs and textareas size themselves from their content.',
  '现代-rgb-hsl-语法': 'Use space-separated channels and slash alpha across modern color functions.',
  'hwb': 'Describe color through hue, whiteness, and blackness.',
  'lab-lch-oklab-oklch': 'Use perceptually uniform color spaces for design systems and gradients.',
  'wide-gamut-color': 'Target Display-P3, Rec.2020, A98, ProPhoto, XYZ, and other wide-gamut spaces.',
  'color-mix': 'Mix colors in a chosen color space.',
  '相对颜色语法': 'Extract channels from an existing color and derive new colors.',
  'light-dark': 'Select theme-aware values in cooperation with color-scheme.',
  'contrast-color': 'Choose a readable foreground color based on a background.',
  'color-contrast': 'Select a color from candidates that satisfies a contrast target.',
  '颜色插值方法': 'Control the color space and hue interpolation used by gradients and animations.',
  'color-scheme': 'Let browser UI, scrollbars, and form controls follow the selected theme.',
  'forced-colors': 'Adapt to high-contrast and forced-colors modes.',
  'accent-color': 'Set the accent color for native checkbox, radio, range, and progress controls.',
  'print-color-adjust': 'Control color adjustments during printing or ink-saving output.',
  'hdr-color': 'Control color output for high dynamic range displays.',
  'variable-fonts': 'Use variable axes, optical sizing, and font technology declarations.',
  '字体加载控制': 'Control web font loading timing, fallback behavior, and dynamic loading.',
  '字体指标覆盖': 'Reduce CLS and layout jumps caused by font replacement.',
  '字体调色板': 'Theme and customize color font palettes.',
  'opentype-控制': 'Control ligatures, numbers, East Asian typography, and feature switches.',
  '字体合成控制': 'Control whether browsers synthesize bold, italic, small caps, and similar faces.',
  'text-wrap': 'Balance headings and improve line wrapping for body text.',
  'white-space-分解': 'Control white-space collapsing and wrapping behavior independently.',
  '断词与连字符增强': 'Tune word breaking, hyphenation, and language-aware line wrapping.',
  '文本装饰增强': 'Control underline thickness, offset, ink skipping, and font-recommended positions.',
  '强调与特殊装饰': 'Style East Asian emphasis marks and spelling or grammar error decorations.',
  'text-box-trimming': 'Trim excess font-box leading for more precise vertical alignment.',
  '首字下沉': 'Create newspaper-style drop caps and first-letter alignment.',
  '基线与行网格': 'Manage cross-script baselines, rhythm sizing, and line grids.',
  '间距与自动排版': 'Handle CJK punctuation, Latin/East Asian spacing, and character spacing.',
  'ruby-annotation': 'Lay out Japanese, Chinese pinyin, zhuyin, and side annotations.',
  'text-indent-扩展': 'Control hanging indentation and per-line indentation.',
  'line-clamp': 'Clamp multi-line text and add block ellipses.',
  '多背景与背景控制': 'Control multiple background layers, clipping, positioning, and sizing.',
  '渐变族': 'Create linear, radial, and conic gradients without images.',
  'image-set': 'Choose assets by resolution, format, and type.',
  'cross-fade-image': 'Blend CSS images, provide fallbacks, and handle directional images.',
  'object-fit-object-position': 'Control replaced-element cropping without background-image hacks.',
  'corner-shape': 'Use bevels, notches, squircles, and other corner shapes beyond border-radius.',
  'border-shape-partial-borders': 'Describe complex border paths, partial borders, and box-decoration extensions.',
  'box-shadow-longhands': 'Split shadows into longhands that can be animated or overridden independently.',
  'masking': 'Use alpha and luminance masks, clipping paths, and complex shapes.',
  'basic-shapes-shape': 'Use native parameterized shape functions in CSS.',
  'filters': 'Apply post-processing effects to elements or background layers.',
  'blend-modes': 'Control layer compositing and blending.',
  'image-rendering': 'Choose scaling strategies for pixel art and low-resolution assets.',
  'css-image-animation': 'Control animated image playback, first frames, and related behavior.',
  'gap-decorations': 'Draw lines and decorations inside grid, flex, and multicol gaps.',
  'scroll-snap': 'Build native snap scrolling, carousels, and paged scrolling.',
  'scroll-behavior': 'Enable native smooth scrolling.',
  'overscroll-behavior': 'Control scroll chaining and system bounce at scroll boundaries.',
  'scrollbar-styling': 'Style scrollbar color, width, and reserved layout space.',
  'scroll-anchoring': 'Keep viewport position stable when content is inserted.',
  'overflow-clip': 'Clip overflow without creating a scroll container.',
  'line-clamp-block-ellipsis': 'Clamp multi-line text and show block-level ellipses.',
  'css-carousels': 'Use scroll buttons, pagination dots, and scroll target groups without JavaScript.',
  'scroll-state-queries': 'Drive styles from scroll state, such as sticky header shadows.',
  'spatial-navigation': 'Support directional-key navigation for remotes and keyboards.',
  'transitions-animations': 'Change CSS properties over time.',
  'individual-transforms': 'Animate transform components independently for more stable composition.',
  '3d-transforms': 'Use three-dimensional transforms and perspective.',
  'motion-path': 'Position and animate elements along a path.',
  'easing-functions': 'Use linear segments, Bezier curves, and step easing.',
  'discrete-transitions': 'Transition discrete values such as display and overlay.',
  'at-starting-style': 'Define starting styles for elements entering the DOM or appearing from display:none.',
  'animation-composition': 'Control how multiple animations compose with one another.',
  'scroll-driven-animations': 'Drive animation from scroll progress or viewport entry.',
  'animation-range': 'Limit the active range of a scroll or view timeline.',
  'view-transitions': 'Animate page state changes or cross-document navigation.',
  'view-transition-classes-types': 'Reuse transition styles and declare cross-page transition types.',
  'animation-triggers': 'Trigger animations from state or events instead of only timelines.',
  'pointer-driven-animations': 'Drive animation from mouse or pointer position.',
  'accent-color-2': 'Quickly customize native form accent colors.',
  'appearance-base-appearance': 'Control native control appearance and customizable select modes.',
  'customizable-select': 'Style native select buttons, pickers, options, and icons.',
  'form-control-parts': 'Style file buttons, dropdown arrows, check marks, slider tracks, and other parts.',
  'caret-color': 'Control the color of the text input caret.',
  'user-select': 'Control text selection behavior.',
  'resize-logical-values': 'Resize controls along logical axes.',
  'cursor-url-set': 'Provide high-resolution cursor assets more clearly.',
  'outline-colorauto': 'Let the browser choose an accessible focus outline color.',
  'highlight-pseudos': 'Style selections, text fragments, and custom range highlights.',
  'color-scheme-plus-forced-colors': 'Coordinate native controls with color schemes and high-contrast modes.',
  'reading-flow-order-2': 'Control accessible reading and tab order when visual layout is rearranged.',
  'at-counter-style': 'Define custom ordered and unordered list marker systems.',
  'counter-set': 'Set counter values explicitly to complement reset and increment.',
  'marker-styling': 'Control list marker content and styling.',
  'content-扩展': 'Generate content, alternative text, and image content.',
  'quotes-and-counters': 'Use language-aware quotation marks and hierarchical numbering.',
  'target-star-functions': 'Reference target page numbers, counters, and text for publishing workflows.',
  'leaders': 'Create dotted leaders for tables of contents and page numbers.',
  'running-elements': 'Reuse document content in page headers and footers.',
  'string-set': 'Capture content as page-header or table-of-contents strings.',
  'at-page': 'Style page size, margins, and page-level rules for paged media.',
  'page-selectors': 'Control first, left, right, and blank pages separately.',
  'margin-boxes': 'Place content in headers, footers, and margin areas.',
  'named-pages': 'Use different page templates for different document sections.',
  'bleed-and-marks': 'Describe print bleed and crop or registration marks.',
  'fragmentation': 'Control breaks across pages, columns, and regions.',
  'page-floats': 'Place figures and tables as deferred floats in publications.',
  'footnotes': 'Control footnote areas, numbering, and rules.',
  'css-speech': 'Style spoken rendering.',
  'cssom': 'Read, parse, serialize, and manipulate CSS rules.',
  'cssom-view': 'Query viewports, scrolling, and layout boxes.',
  'geometry-interfaces': 'Use geometric objects, matrices, and coordinate transforms.',
  'resize-observer': 'Observe element size changes when CSS alone cannot notify JavaScript.',
  'font-loading-api': 'Control font loading and font set state from scripts.',
  'web-animations-api': 'Use a JavaScript API that shares timing and effects with the CSS animation model.',
  'custom-highlight-api': 'Register ranges in JavaScript and style them with ::highlight(name).',
  'properties-and-values-api': 'Register typed and animatable CSS custom properties at runtime.',
  'typed-om': 'Represent CSS values as typed objects.',
  'paint-layout-animation-worklets': 'Extend parts of the browser rendering pipeline.',
  'view-transition-api': 'Work with CSS view-transition pseudo-elements from JavaScript.'
}

const ui = {
  en: {
    lang: 'en-US',
    label: 'English',
    description: 'A modern CSS capability guide with explanations, demos, MDN links, and Can I Use entries.',
    navCapabilities: 'Capabilities',
    outline: 'On this page',
    previous: 'Previous',
    next: 'Next',
    lastUpdated: 'Last updated',
    editThisPage: 'Edit this page on GitHub',
    footerMessage: 'Built with VitePress. Data migrated from the CSS3-after capability document.',
    overview: 'Overview',
    home: 'Home',
    categoryOverview: 'Category overview',
    heroText: 'Modern CSS Capability Guide',
    tagline: 'A practical map of modern CSS features after the CSS3 era, with explanations, demos, MDN references, and Can I Use compatibility links.',
    browse: 'Browse capabilities',
    github: 'View GitHub',
    intro: (categoryCount, featureCount) =>
      `This site currently organizes ${categoryCount} categories and ${featureCount} capability entries. The sidebar groups features by capability area, and each feature page includes an explanation, MDN link, demo, and Can I Use compatibility entry.`,
    start: 'Start browsing',
    categoryIndex: 'Category Index',
    itemCount: (count) => `${count} capabilities`,
    contains: (count) => `This category contains ${count} capability entries. Each entry includes a short explanation, MDN entry, Can I Use entry, and a readable demo.`,
    abilitiesTitle: 'Modern CSS Capability Navigation',
    abilitiesIntro: 'Modern CSS features after the CSS3 era are organized by capability area. Use the sidebar for full navigation or the category groups below for quick entry.',
    total: (count) => `${count} entries`,
    viewAll: (count) => `View all ${count} entries`,
    summary: 'Plain-language explanation',
    syntax: 'Representative syntax',
    demo: 'Demo',
    whenToUse: 'When to use it',
    source: 'Source metadata',
    category: 'Category',
    status: 'Maturity / source',
    originalSyntax: 'Representative syntax',
    categoryPosition: (index, total) => `Position in category: ${index + 1} / ${total}`,
    liveish: 'Live-ish',
    referenceLinks: 'Reference links'
  },
  zh: {
    lang: 'zh-CN',
    label: '简体中文',
    description: 'CSS3 之后的新 CSS 能力导航、说明、Demo 与兼容性入口',
    navCapabilities: '能力导航',
    outline: '本页',
    previous: '上一项',
    next: '下一项',
    lastUpdated: '最后更新',
    editThisPage: '在 GitHub 编辑此页',
    footerMessage: 'Built with VitePress. Data migrated from the CSS3-after capability document.',
    overview: '总览',
    home: '首页',
    categoryOverview: '分类概览',
    heroText: '新 CSS 能力导航',
    tagline: '从 CSS3 之后的模块化演进里，把可用能力、草案方向、MDN 与 Can I Use 入口整理成一份可查的轻文档。',
    browse: '浏览能力导航',
    github: '查看 GitHub',
    intro: (categoryCount, featureCount) =>
      `当前迁移 ${categoryCount} 个分类、${featureCount} 个能力条目。左侧导航按能力域分组；每个条目页固定包含说明、MDN、demo 和 Can I Use 兼容性入口。`,
    start: '开始查阅',
    categoryIndex: '分类索引',
    itemCount: (count) => `${count} 项能力`,
    contains: (count) => `这个分类包含 ${count} 个能力条目。每个条目都包含简明说明、MDN 入口、Can I Use 入口和可运行/可阅读的 demo。`,
    abilitiesTitle: '新 CSS 能力导航',
    abilitiesIntro: '这里按能力域组织 CSS3 之后的新 CSS 能力。左侧侧边栏是完整导航，正文先给每个分类的快速入口。',
    total: (count) => `共 ${count} 项。`,
    viewAll: (count) => `查看全部 ${count} 项`,
    summary: '简明说明',
    syntax: '代表语法',
    demo: 'Demo 演示',
    whenToUse: '什么时候用',
    source: '迁移来源',
    category: '分类',
    status: '成熟度 / 来源',
    originalSyntax: '原始代表语法',
    categoryPosition: (index, total) => `本分类序号：${index + 1} / ${total}`,
    liveish: 'Live-ish',
    referenceLinks: '参考链接'
  }
}

export const locales = ui

export function slugify(value) {
  return String(value)
    .replace(/@/g, ' at ')
    .replace(/\+/g, ' plus ')
    .replace(/&/g, ' and ')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function englishCategoryTitle(category) {
  return categoryTranslations[category.title] || category.title
}

function categorySlug(category) {
  return slugify(englishCategoryTitle(category)) || category.slug
}

function englishItemName(item) {
  return nameTranslations[item.name] || item.name
}

function itemSlug(item) {
  return slugify(englishItemName(item)) || item.slug
}

export function localizeCategory(category, locale) {
  const title = locale === 'en' ? englishCategoryTitle(category) : category.title
  return {
    ...category,
    title,
    slug: categorySlug(category),
    originalTitle: category.title
  }
}

export function localizeItem(item, locale) {
  const slug = itemSlug(item)
  if (locale === 'zh') {
    return {
      ...item,
      slug,
      sourceSlug: item.slug,
      originalName: item.name
    }
  }

  const name = englishItemName(item)
  return {
    ...item,
    name,
    slug,
    sourceSlug: item.slug,
    syntax: syntaxTranslations[item.slug] || item.syntax,
    summary: summaryTranslations[item.slug] || item.summary,
    status: translateStatus(item.status),
    mdn: localizeReferenceUrl(item.mdn, name, 'mdn'),
    caniuse: localizeReferenceUrl(item.caniuse, name, 'caniuse'),
    demo: demoTranslations[item.slug] || item.demo,
    originalName: item.name
  }
}

function localizeReferenceUrl(url, name, type) {
  if (!/[\u4e00-\u9fff]|%e[0-9a-f]{2}/i.test(url)) return url

  const query = encodeURIComponent(`${name}${type === 'mdn' ? ' CSS' : ''}`)
  if (type === 'mdn') return `https://developer.mozilla.org/en-US/search?q=${query}`
  return `https://caniuse.com/?search=${encodeURIComponent(name)}`
}

function translateStatus(status) {
  return String(status)
    .replace(/，/g, ', ')
    .replace(/预 CR 可发布/g, 'pre-CR snapshot, publishable')
    .replace(/预 CR 例外/g, 'pre-CR exception')
    .replace(/官方定义/g, 'official definition')
    .replace(/可靠候选/g, 'candidate recommendation')
    .replace(/可发布/g, 'publishable')
    .replace(/较稳定模块/g, 'relatively stable module')
    .replace(/较稳定/g, 'relatively stable')
    .replace(/广泛实现中/g, 'broad implementation in progress')
    .replace(/广泛实现/g, 'broadly implemented')
    .replace(/实现推进中/g, 'implementation in progress')
    .replace(/支持有限/g, 'limited support')
    .replace(/支持差异较大/g, 'support varies significantly')
    .replace(/浏览器支持很少/g, 'very limited browser support')
    .replace(/部分实现/g, 'partially implemented')
    .replace(/部分/g, 'partial')
    .replace(/多项/g, 'many features')
    .replace(/草案/g, 'draft')
    .replace(/粗略互通/g, 'rough interoperability')
    .replace(/新能力/g, 'new capability')
    .replace(/集成/g, 'integration')
    .replace(/演进中/g, 'evolving')
    .replace(/为/g, 'as')
}
