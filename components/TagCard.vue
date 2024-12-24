<template>
  <!-- 如果有 path 則顯示 NuxtLink，否則顯示 button 並加上 @click.prevent -->
  <template v-if="path">
    <NuxtLink :to="`${path}?tags=${tag || ''}`" class="badge badge-secondary badge-outline text-sm">
      <slot />
    </NuxtLink>
  </template>
  <template v-else>
    <label class="badge badge-secondary badge-outline text-sm">
      <!-- 當 label 被點擊時，會自動控制 checkbox -->
      <input v-model="checked" type="checkbox">
      <slot />
    </label>
  </template>
</template>

<script setup>
const { tag, path } = defineProps({
  tag: { type: String, default: '' },
  path: { type: String, default: '' }
});
const checked = defineModel({ type: Boolean, default: true });

</script>

<style lang="scss" scoped>
a,
label {
  @apply select-none;
}

label {
  @apply cursor-pointer;

  input {
    @apply appearance-none hidden;
  }
}
</style>