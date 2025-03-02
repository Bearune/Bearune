<template>
  <main class="!min-h-screen relative flex flex-col justify-between">
    <div class="shape fixed top-0 left-0 w-full h-screen scale-100 -z-40">
    </div>
    <!-- <div class="fixed inset-0 backdrop-blur-[100px] -z-30"></div> -->
    <LayoutSiteMobileHeader :class="{ 'block': device.isMobile ? true : false }"
      class="hidden fixed bottom-8 left-1/2 -translate-x-1/2 sm:block" />
    <LayoutSiteHeader />
    <div class="flex justify-center mt-20 sm:mt-12">
      <slot />
    </div>
    <LayoutSiteFooter :class="{ 'pb-24': device.isMobile ? true : false }" class="sm:pb-24" />
    <BackTop />
  </main>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'zh-tw'
  },
  // link: [
  //   {
  //     rel: 'icon',
  //     type: 'image/png',
  //     href: '/favicon.png'
  //   }
  // ]
});

const device = useDeviceStore();
</script>

<style lang="scss" scoped>
.shape {
  &::after {
    @apply absolute top-0 left-0 w-full h-full;
    content: '';
    --bg-opacity: .6;
    background-image:
      linear-gradient(oklch(var(--base-300)/var(--bg-opacity)) 1px, transparent 1px),
      linear-gradient(90deg, oklch(var(--base-300)/var(--bg-opacity)) 1px, transparent 1px);
    background-size: 3.35rem 3.35rem;
    mask: linear-gradient(-20deg, transparent 20%, white);

    /* 固定背景，不隨滾動移動 ps 手機端支援不佳 */
    // background-attachment: fixed;

    @supports not(color: oklch(0% 0 0)) {
      background-image:
        linear-gradient(var(--fallback-b3) 1px, transparent 1px),
        linear-gradient(90deg, var(--fallback-b3) 1px, transparent 1px);
      opacity: .6;
    }
  }
}
</style>