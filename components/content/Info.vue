<template>
  <div class="info border border-primary text-primary-content p-4 mb-8 rounded-box flex flex-col gap-4">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.info {

  background-color: oklch(var(--primary)/.2);

  @supports(color: color-mix(in oklab, black, black)) {
    color: color-mix(in oklch, oklch(var(--primary)) 90%, oklch(var(--primary-content)));
  }

  @supports not(color: oklch(0% 0 0)) {
    background-color: var(--fallback-b2);
  }

  * {
    @apply mb-0 text-base;
  }
}
</style>