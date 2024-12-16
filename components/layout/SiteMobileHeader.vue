<template>
  <div class="bg-base-200 z-10">
    <div class="h-fit">
      <ul class="menu">
        <li>
          <NuxtLink :to="`/category?tags=${tagsStore.tags}`" class="btn btn-ghost">文章</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" class="btn btn-ghost">卡片</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const tagsStore = useTagsStore();
if (!tagsStore.isLoaded) {
  await tagsStore.fetchTags();
}
</script>

<style lang="scss" scoped></style>