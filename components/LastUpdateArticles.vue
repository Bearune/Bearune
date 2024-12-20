<template>
  <div v-if="articles.length" class="article_container mt-4 flex flex-col gap-2">
    <NuxtLink v-for="article in articles" :key="article._path" :to="article._path" target="_blank"
      class="article flex min-h-20 p-4 bg-base-200 rounded-box shadow relative" @mousemove="hoverEffect">
      <div class="effect-circle absolute" />
      <div class="flex items-center gap-4">
        <Book class="w-5 h-5 text-primary" />
        <b class="flex-1 font-semibold line-clamp-2 text-base-content">{{ article.title }}</b>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import Book from '~/assets/icons/book-open.svg?component';

const category = 'articles';
const articles = ref([]);
// 初始化：取得所有文章
const contentsStore = useContentsStore();

const hoverEffect = (e) => {
  const article = e.currentTarget; // 正確取得目標 DOM 元素
  const rect = article.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  article.style.setProperty('--x', `${x}px`);
  article.style.setProperty('--y', `${y}px`);
};

onMounted(async () => {
  try {
    if (contentsStore.articles.length !== 0) {
      articles.value = contentsStore.articles.slice(0, 5);
    } else {
      articles.value = await queryContent(category).sort({ date: -1 }).only(['title', '_path']).limit(5).find();
    }
    // console.log(articles.value)
  } catch (err) {
    console.error('載入文章時發生錯誤：', err);
  }
});
</script>

<style lang="scss" scoped>
@media (hover: hover) {
  .article_container {
    perspective: 500px;
  }

  .article {
    @apply overflow-hidden duration-input shadow;

    transition-property: transform, box-shadow;
    transform-style: preserve-3d;

    .effect-circle {
      @apply -z-10 w-0 aspect-square -translate-x-1/2 -translate-y-1/2 opacity-0 duration-input;
      background: radial-gradient(oklch(var(--primary)/var(--tw-bg-opacity, 1)), transparent, transparent);
      top: var(--y);
      left: var(--x);
      transition-property: opacity, width, height;
      --tw-bg-opacity: .6;
    }

    &:hover {
      @apply -translate-y-2 shadow-xl rotate-2;

      .effect-circle {
        @apply opacity-100 w-2/3;
      }
    }
  }
}
</style>
