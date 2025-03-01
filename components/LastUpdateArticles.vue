<template>
  <div v-if="articles.length" class="article_container mt-4 flex flex-col gap-4">
    <NuxtLink v-for="article in articles" :key="article._path" :to="article._path" target="_blank" class="article">
      <div class="text-base-content">{{ article.title }}</div>
      <div class="text-secondary text-sm">{{ article.date }}</div>
    </NuxtLink>
  </div>
</template>

<script setup>

const category = 'articles';
const articles = ref([]);
// 初始化：取得所有文章
const contentsStore = useContentsStore();

onMounted(async () => {
  try {
    if (contentsStore.articles.length !== 0) {
      articles.value = contentsStore.articles.slice(0, 5);
    } else {
      articles.value = await queryContent(category).sort({ date: -1 }).only(['title', 'date', '_path']).limit(5).find();
    }
    // console.log(articles.value)
  } catch (err) {
    console.error('載入文章時發生錯誤：', err);
  }
});
</script>

<style lang="scss" scoped></style>
