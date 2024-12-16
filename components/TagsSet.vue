<template>
  <div class="mt-4 flex flex-wrap gap-2">
    <TagCard v-for="tag in tagsStore.tags.find((item) => item.path === 'articles').tags" :key="tag" :tag="tag"
      :path="'/articles'" class="badge-primary">
      #{{ tag }}</TagCard>
  </div>
</template>

<script setup>
const tagsStore = useTagsStore();
await tagsStore.fetchTags('articles');
</script>

<style lang="scss" scoped></style>