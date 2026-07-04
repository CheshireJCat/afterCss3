<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  code: string
  note?: string
}>()

const srcdoc = computed(() => {
  const escapedCode = props.code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <style>
    :root {
      color-scheme: light dark;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    body {
      margin: 0;
      min-height: 230px;
      display: grid;
      place-items: center;
      background:
        linear-gradient(90deg, color-mix(in oklch, CanvasText 7%, transparent) 1px, transparent 1px),
        linear-gradient(0deg, color-mix(in oklch, CanvasText 7%, transparent) 1px, transparent 1px),
        Canvas;
      background-size: 24px 24px;
      color: CanvasText;
    }
    .stage {
      width: min(520px, calc(100vw - 48px));
      min-height: 150px;
      display: grid;
      place-items: center;
      gap: 14px;
      padding: 24px;
      border: 1px solid color-mix(in oklch, CanvasText 16%, transparent);
      background: color-mix(in oklch, Canvas 92%, CanvasText);
      box-shadow: 0 20px 60px color-mix(in oklch, CanvasText 12%, transparent);
    }
    .target {
      --brand: oklch(60% 0.18 235);
      width: 132px;
      min-height: 96px;
      display: grid;
      place-items: center;
      padding: 18px;
      border: 1px solid color-mix(in oklch, var(--brand), black 20%);
      background: color-mix(in oklch, var(--brand) 18%, Canvas);
      color: color-mix(in oklch, var(--brand), black 38%);
      font-weight: 700;
      text-align: center;
      transition: 220ms ease;
    }
    .target + .target {
      width: 92px;
      min-height: 64px;
      opacity: .78;
    }
    .target:hover {
      transform: translateY(-3px);
    }
    ${props.code}
  </style>
</head>
<body>
  <div class="stage">
    <div class="target">Preview</div>
    <div class="target">Item</div>
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
      <span>Live-ish</span>
    </div>
    <iframe :title="`${title} demo`" :srcdoc="srcdoc" loading="lazy" />
    <p v-if="note" class="css-demo__note">{{ note }}</p>
    <pre><code>{{ code }}</code></pre>
  </section>
</template>
