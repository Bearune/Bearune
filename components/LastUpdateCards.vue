<template>
  <div v-if="cards.length" class="card_container mt-4 flex flex-col gap-4">
    <NuxtLink v-for="card in cards" :key="card._path" :to="card._path" target="_blank" class="card block">
      <div class="text-base-content">{{ card.title }}</div>
      <div class="text-secondary text-sm">{{ card.date }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>
const category = 'cards';
const cards = ref([]);
// 初始化：取得所有文章
const contentsStore = useContentsStore();

onMounted(async () => {
  try {
    if (contentsStore.shortArticle.length !== 0) {
      cards.value = contentsStore.shortArticle.slice(0, 5);
    } else {
      cards.value = await queryContent(category).sort({ date: -1, _id: -1 }).only(['title', 'date', '_path']).limit(5).find();
    }
  } catch (err) {
    console.error('載入文章時發生錯誤：', err);
  }
});
</script>

<style lang="scss" scoped></style>
