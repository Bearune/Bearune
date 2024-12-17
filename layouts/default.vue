<template>
  <main class="!min-h-screen relative flex flex-col justify-between">
    <LayoutSiteHeader />
    <div class="flex justify-center mt-20 sm:mt-12">
      <slot />
    </div>
    <LayoutSiteFooter />
    <BackTop />
    <!-- <LayoutSiteMobileHeader class="hidden fixed bottom-0 left-0 right-0 sm:block" /> -->
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
</script>

<style lang="scss" scoped></style>