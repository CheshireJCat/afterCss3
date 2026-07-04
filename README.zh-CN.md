# After CSS3

[![Deploy VitePress site to Pages](https://github.com/CheshireJCat/afterCss3/actions/workflows/deploy.yml/badge.svg)](https://github.com/CheshireJCat/afterCss3/actions/workflows/deploy.yml)
[![VitePress](https://img.shields.io/badge/built%20with-VitePress-646CFF.svg)](https://vitepress.dev/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](#license)

[English](README.md) | 简体中文

After CSS3 是一份面向 CSS3 之后现代 CSS 能力的导航型知识库。它按能力域组织新 CSS 特性，并为每个能力提供简明说明、代表语法、Demo、MDN 入口和 Can I Use 兼容性入口。

CSS 已经不再以单一的 "CSS4" 大版本方式演进，而是通过 Selectors、Cascade、Color、Values and Units、Containment、Anchor Positioning、View Transitions 等独立模块持续推进。本项目的目标，是把这些分散的能力整理成一份可浏览、可维护、可部署的轻文档。

在线站点：[cheshirejcat.github.io/afterCss3](https://cheshirejcat.github.io/afterCss3/)

## 语言

- 英文是默认语言：[`/`](https://cheshirejcat.github.io/afterCss3/)
- 简体中文位于：[`/zh/`](https://cheshirejcat.github.io/afterCss3/zh/)
- README 也提供两版：`README.md` 和 `README.zh-CN.md`。

## 内容范围

- 14 个能力分类，覆盖语言架构、选择器、条件查询、布局、值与单位、颜色、字体排版、视觉效果、滚动、动画、表单、生成内容、分页媒体和 CSS 相关 API。
- 每种语言各生成 186 个能力页面。
- 每个能力页都包含统一结构：简明说明、代表语法、Demo、MDN 链接、Can I Use 链接、成熟度/状态说明和使用建议。
- 基于 VitePress 构建，支持本地搜索、GitHub Pages 部署、i18n 路由和自动生成的侧边栏导航。

## 使用场景

- 快速判断“这个 CSS 问题现在有没有原生能力可以解决”。
- 系统回顾 CSS3 品牌时代之后新增的 CSS 能力。
- 在生产中引入新 CSS 能力前，快速查看成熟度和兼容性入口。
- 将结构化数据作为学习资料、团队内部文档或浏览器支持清单的来源。

## 快速开始

```bash
npm install
npm run docs:dev
```

开发命令会先运行生成器，再启动 VitePress。

## 可用脚本

```bash
npm run docs:generate
npm run docs:dev
npm run docs:build
npm run docs:preview
```

- `docs:generate`：读取 `data/abilities.json`，重新生成中英文页面和侧边栏。
- `docs:dev`：重新生成文档并启动 VitePress 开发服务器。
- `docs:build`：重新生成文档并构建静态站点。
- `docs:preview`：本地预览构建产物。

## 项目结构

```text
.
|-- data/
|   `-- abilities.json          # CSS 能力数据源
|-- docs/
|   |-- .vitepress/             # VitePress 配置、主题和生成的侧边栏
|   |-- abilities/              # 生成的英文分类和能力页面
|   |-- zh/                     # 生成的简体中文站点
|   `-- index.md                # 生成的英文首页
|-- scripts/
|   |-- i18n.mjs                # 语言文案和能力翻译
|   `-- generate-docs.mjs       # 数据到 Markdown 的生成器
`-- .github/workflows/
    `-- deploy.yml              # GitHub Pages 部署工作流
```

## 内容模型

能力清单的源数据在 `data/abilities.json`。每个分类包含一组能力条目，主要字段包括：

- `name`：显示名称。
- `slug`：页面 slug。
- `syntax`：代表性 CSS 语法。
- `summary`：简短说明。
- `status`：成熟度或规范状态。
- `mdn`：MDN 参考链接或搜索入口。
- `caniuse`：Can I Use 兼容性链接或搜索入口。
- `demo`：Demo 组件使用的 CSS 片段。

修改数据后运行：

```bash
npm run docs:generate
```

英文显示名、摘要和界面文案位于 `scripts/i18n.mjs`。新增或重命名能力时，也需要同步更新 i18n 映射，确保默认英文站点完整。

## 部署

项目通过 GitHub Actions 部署到 GitHub Pages。工作流会构建 VitePress，并将 `docs/.vitepress/dist` 作为 Pages artifact 上传。

仓库 Pages 设置应使用：

- Source：GitHub Actions
- Base path：`/afterCss3/`

VitePress 的 `base` 已按仓库 Pages 地址配置。英文站点位于 `/afterCss3/`，简体中文站点位于 `/afterCss3/zh/`。

## 贡献

欢迎贡献。比较有价值的改进包括：

- 补充遗漏的 CSS 能力。
- 改进摘要、示例和成熟度说明。
- 将宽泛的 MDN 或 Can I Use 搜索链接替换为更精确的条目链接。
- 在保持 Demo 小而清晰的前提下改进演示。
- 修正分类位置或术语。
- 改进英文或简体中文翻译。

提交变更前请运行：

```bash
npm run docs:build
```

## 内容规范

- 说明保持短小、实用。
- 优先引用 MDN、W3C 草案、CSSWG 草案和浏览器厂商文档等官方资料。
- 浏览器支持是时效信息，优先链接到 Can I Use 或 MDN 兼容性数据，不在文档中复制静态表格。
- 实验性或草案能力需要明确标注。
- 不要把 "CSS4" 表述成正式发布版本。

## License

MIT
