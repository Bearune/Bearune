<template>
  <main class="!min-h-screen relative flex flex-col justify-between">
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

<style lang="scss" scoped></style>