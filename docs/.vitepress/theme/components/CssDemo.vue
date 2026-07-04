<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  code?: string
  codeB64?: string
  css?: string
  cssB64?: string
  html?: string
  htmlB64?: string
  note?: string
  caption?: string
  lang?: string
  badge?: string
}>()

function decodeBase64(value?: string) {
  if (!value) return ''

  const binary = atob(value)
  const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0))
  return new TextDecoder().decode(bytes)
}

const demoCss = computed(() => decodeBase64(props.cssB64) || props.css || props.code || '')
const displayCode = computed(() => props.code || demoCss.value)
const demoCode = computed(() => decodeBase64(props.codeB64) || displayCode.value)
const demoHtml = computed(() => decodeBase64(props.htmlB64) || props.html || '<div class="demo-card"><h4 class="demo-title">Preview</h4><p class="demo-copy">Demo content</p></div>')

const srcdoc = computed(() => {
  const escapedCode = demoCss.value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return `<!doctype html>
<html lang="${props.lang || 'en-US'}">
<head>
  <meta charset="utf-8">
  <style>
    :root {
      color-scheme: light dark;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      min-height: 320px;
      background:
        linear-gradient(90deg, color-mix(in oklch, CanvasText 7%, transparent) 1px, transparent 1px),
        linear-gradient(0deg, color-mix(in oklch, CanvasText 7%, transparent) 1px, transparent 1px),
        Canvas;
      background-size: 24px 24px;
      color: CanvasText;
    }
    .demo-root {
      min-height: 320px;
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .demo-frame {
      width: min(680px, calc(100vw - 48px));
    }
    ${demoCss.value}
  </style>
</head>
<body>
  <div class="demo-root">
    <div class="demo-frame">
${demoHtml.value}
    </div>
  </div>
  <pre hidden>${escapedCode}</pre>
</body>
</html>`
})
</script>

<template>
  <section class="css-demo">
    <div class="css-demo__head">
      <h3>{{ title }}</h3>
      <span>{{ badge || 'Live-ish' }}</span>
    </div>
    <iframe :title="`${title} demo`" :srcdoc="srcdoc" loading="lazy" />
    <p v-if="caption || note" class="css-demo__note">{{ caption || note }}</p>
    <pre><code>{{ demoCode }}</code></pre>
  </section>
</template>
