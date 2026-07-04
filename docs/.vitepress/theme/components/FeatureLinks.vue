<script setup lang="ts">
defineProps<{
  mdn: string
  caniuse: string
  status: string
  label?: string
}>()
</script>

<template>
  <div class="feature-links" :aria-label="label || 'Reference links'">
    <a :href="mdn" target="_blank" rel="noreferrer">MDN</a>
    <a :href="caniuse" target="_blank" rel="noreferrer">Can I Use</a>
    <span>{{ status }}</span>
  </div>
</template>
