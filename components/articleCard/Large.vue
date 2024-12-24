<template>
  <NuxtLink :to="props.data._path" class="card bg-base-100 w-full no-style-a">
    <div class="overflow-hidden rounded-box w-full h-fit bg-base-200 shadow">
      <figure class="aspect-video overflow-hidden flex justify-center items-center">
        <img :src="props.data.image ? props.data.image : 'https://picsum.photos/1600/900'"
          :alt="`預覽圖-${props.data.title}`">
      </figure>
    </div>
    <div class="pt-4 px-4 flex flex-wrap gap-2 sm:px-2">
      <div>
        <div class="text-primary flex">
          <!-- <NuxtLink to="/" class="no-style-a">{{ props.data.category }}</NuxtLink> -->
          <!-- {{ props.data.category }} -->
          {{ new Date(props.data.date).toISOString().slice(0, 10) }}
        </div>
        <h2 class="text-2xl font-semibold line-clamp-2 sm:text-xl">
          {{ props.data.title }}
        </h2>
        <p class="grow-0 opacity-70 line-clamp-1 sm:line-clamp-2">
          {{ props.data.description }}
        </p>
      </div>
      <div class="w-full h-fit flex justify-between items-end">
        <div class="flex gap-2 flex-wrap">
          <TagCard v-for="tag in props.data.tags" :key="tag" :tag="tag" :path="'articles'"
            :class="{ 'badge-active': props.tags.find(t => t.tag === tag) }">#{{ tag }}
          </TagCard>
        </div>
      </div>
    </div>
  </NuxtLink>

</template>

<script setup>
const props = defineProps({ 'data': { type: Object, default: () => { } }, 'tags': { type: Array, default: () => [] } });
</script>

<style lang="scss" scoped>
.card {
  img {
    @apply duration-input transition-transform;
  }

  @media (hover:hover) {
    &:hover {
      img {
        @apply scale-110;
      }
    }
  }
}
</style>