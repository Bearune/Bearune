<template>
  <div class="info border border-base-400 bg-base-200 p-4 mb-8 rounded-box flex flex-col gap-4">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.info {
  * {
    @apply mb-0 text-base;
  }
}
</style>