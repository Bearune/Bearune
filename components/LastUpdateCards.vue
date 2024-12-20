<template>
  <div v-if="cards.length" class="card_container mt-4 flex flex-col gap-2">
    <NuxtLink v-for="card in cards" :key="card._path" :to="card._path" target="_blank"
      class="card block p-4 bg-base-200 rounded-box shadow relative" @mousemove="hoverEffect">
      <div class="effect-circle absolute" />
      <div class="flex items-center gap-4">
        <Book class="w-5 h-5 text-primary" />
        <b class="font-semibold line-clamp-1 text-base-content">{{ card.title }}</b>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import Book from '~/assets/icons/feather.svg?component';

const category = 'cards';
const cards = ref([]);
// 初始化：取得所有文章
const contentsStore = useContentsStore();

const hoverEffect = (e) => {
  const card = e.currentTarget; // 正確取得目標 DOM 元素
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty('--x', `${x}px`);
  card.style.setProperty('--y', `${y}px`);
};

onMounted(async () => {
  try {
    if (contentsStore.shortArticle.length !== 0) {
      cards.value = contentsStore.shortArticle.slice(0, 5);
    } else {
      cards.value = await queryContent(category).sort({ date: -1, _id: -1 }).only(['title', '_path']).limit(5).find();
    }
  } catch (err) {
    console.error('載入文章時發生錯誤：', err);
  }
});
</script>

<style lang="scss" scoped>
@media (hover: hover) {
  .card_container {
    perspective: 500px;
  }

  .card {
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
