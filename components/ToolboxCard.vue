<template>
  <div class="toolbox-card_container">
    <NuxtLink v-if="data" :to="data.url"
      class="toolbox-card relative block aspect-video bg-base-200 rounded-box p-4 cursor-pointer lg:aspect-square md:aspect-video sm:aspect-auto"
      target="_blank" noreferrer @mousemove="hoverEffect">
      <div class="effect-circle absolute" />
      <div class="h-full flex flex-col justify-between">
        <div>
          <div class="flex gap-2 items-center">
            <img :src="data.icon" alt="" class="aspect-square w-8 sm:w-6">
            <h3 class="text-lg font-semibold">{{ data.title }}</h3>
          </div>
          <p class="text-base-content line-clamp-4 md:line-clamp-3 sm:line-clamp-6" style="--tw-bg-opacity: .8;">{{
            data.description }}</p>
        </div>
        <!-- <div class="flex gap-2 flex-wrap">
        <TagCard v-for="tag in data.tags" :key="tag" :tag="tag">#{{ tag }}</TagCard>
      </div> -->
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>

const { data } = defineProps({
  data: {
    type: Object,
    default: () => { },
  }
});

const hoverEffect = (e) => {
  const card = e.currentTarget; // 正確取得目標 DOM 元素
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  card.style.setProperty('--x', `${x}px`);
  card.style.setProperty('--y', `${y}px`);
};

</script>

<style lang="scss" scoped>
@media (hover: hover) {
  .toolbox-card_container {
    @apply w-full;
    perspective: 500px;
    display: inline-block;
  }

  .toolbox-card {
    @apply overflow-hidden duration-input shadow;

    transition-property: transform, box-shadow;
    transform-style: preserve-3d;

    .effect-circle {
      @apply -z-10 w-0 aspect-square -translate-x-1/2 -translate-y-1/2 opacity-0 duration-input;
      background: radial-gradient(oklch(var(--primary)/var(--tw-bg-opacity, 1)), transparent, transparent);
      top: var(--y);
      left: var(--x);
      transition-property: opacity, width, height;
      --tw-bg-opacity: 1;
    }

    &:hover {
      @apply -translate-y-2 shadow-xl rotate-2;

      .effect-circle {
        @apply opacity-100 w-full;
      }
    }
  }
}
</style>