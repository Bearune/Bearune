<template>
  <Giscus id="comments" repo="Bearune/Bearune" repo-id="R_kgDONeIkuQ" category="General"
    category-id="DIC_kwDONeIkuc4ClSOk" mapping="pathname" strict="1" term="Welcome to Bearune!" reactions-enabled="1"
    emit-metadata="1" input-position="bottom" :theme="themeStore.isDark ? 'dark_dimmed' : 'preferred_color_scheme'"
    lang="zh-TW" loading="lazy" crossorigin="anonymous" />
</template>

<script setup>
import Giscus from '@giscus/vue';

const themeStore = useThemeStore();
</script>

<style lang="scss" scoped></style>