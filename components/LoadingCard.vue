<template>
  <div class="loader">

  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
/* HTML: <div class="loader"></div> */
.loader {
  width: 50px;
  aspect-ratio: 1;
  border: 2px solid;
  box-sizing: border-box;
  --c: conic-gradient(from 180deg at 50% calc(100% - 2px), #000 90deg, #0000 0);
  background: var(--c), var(--c);
  background-position: 0 0, 8px 0;
  background-size: 16px 9.6px;
  animation: l15 1s infinite;
}

@keyframes l15 {
  100% {
    background-position: 0 -9.6px, 8px 9.6px
  }
}
</style>