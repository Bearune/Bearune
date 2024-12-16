<template>
  <footer class="footer bg-base-200 text-base-content items-center p-4 flex justify-between gap-4 sm:flex-col">
    <aside class="items-center">
      <p>熊途 Bearune © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav class="flex gap-4 md:place-self-center md:justify-self-end">
      <NuxtLink to="/privacy-policy-statement">隱私權宣告</NuxtLink>
    </nav>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>