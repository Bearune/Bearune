<template>
  <el-backtop class="!text-base-content !bg-base-400 sm:hidden" :right="padding" :bottom="padding" />
</template>

<script setup>
const device = useDeviceStore();
const padding = ref(device.isDesktop ? 60 : 32);
</script>

<style lang="scss" scoped></style>