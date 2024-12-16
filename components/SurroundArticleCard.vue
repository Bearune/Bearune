<template>
  <NuxtLink :to="props.data._path" :class="{ 'right': props.way === 'right' }"
    class="flex flex-col gap-0.5 justify-center btn btn-outline btn-secondary border border-base-400 w-1/2 min-h-24 rounded-box !px-4 !py-3 line-clamp-2 group sm:w-full">
    <div class="tracking-widest font-semibold">{{ way === 'left' ? '上一篇' : '下一篇' }}</div>
    <div class="tracking-widest text-base-content group-hover:text-secondary-content">{{ props.data.title }}</div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => { }
  },
  way: {
    type: String,
    default: ''
  }
});
</script>

<style lang="scss" scoped>
.right {
  @apply text-right items-end;
}
</style>