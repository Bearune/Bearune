<template>
  <div class="flex items-center justify-center gap-2 select-none">
    <component :is="iconComponent" class="w-6 h-fit" />
    <span>
      <slot/>
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: 'calendar', // 默認圖標
  },
});

// 使用 shallowRef 儲存動態導入的組件
const iconComponent = shallowRef(null);

// 在組件掛載後動態導入圖標
onMounted(async () => {
  try {
    const iconModule = await import(`~/assets/icons/${props.icon || ''}.svg?component`);
    iconComponent.value = iconModule.default;
  } catch (error) {
    console.error(`無法加載圖標: ${props.icon || ''}`, error);
  }
});
</script>

<style lang="scss" scoped>
/* 可根據需要定義樣式 */
</style>
