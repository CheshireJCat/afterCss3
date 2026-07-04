<script setup lang="ts">
defineProps<{
  mdn: string
  caniuse: string
  status: string
}>()
</script>

<template>
  <div class="feature-links" aria-label="参考链接">
    <a :href="mdn" target="_blank" rel="noreferrer">MDN</a>
    <a :href="caniuse" target="_blank" rel="noreferrer">Can I Use</a>
    <span>{{ status }}</span>
  </div>
</template>
