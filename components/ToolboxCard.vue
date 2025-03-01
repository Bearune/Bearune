<template>
  <div class="toolbox-card_container">
    <NuxtLink v-if="data" :to="data.url"
      class="toolbox-card relative block aspect-video rounded-box p-4 cursor-pointer lg:aspect-square md:aspect-video sm:aspect-auto"
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

</script>

<style lang="scss" scoped>
.toolbox-card {
  background-color: oklch(var(--base-300)/.2);

  @supports not(color: oklch(0% 0 0)) {
    background-color: var(--fallback-b2);
  }
}
</style>