<template>
  <el-tooltip class="box-item" :content="props.content" placement="bottom" effect="customized" :hide-after="0"
    :disabled="isDesktop ? false : true">
    <slot />
  </el-tooltip>
</template>

<script setup>

const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

// 初始化：取得使用裝置
const deviceStore = useDeviceStore();
const { isDesktop } = deviceStore;
</script>

<style lang="scss" scoped></style>