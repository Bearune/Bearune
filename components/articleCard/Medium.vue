<template>
  <div class="card flex min-h-36 lg:card-side bg-base-100 md:flex-col">
    <div
      class="overflow-hidden rounded-box w-1/3 aspect-video flex justify-center items-center bg-base-200 h-fit md:w-full">
      <NuxtLink :to="props.data._path" class="no-style-a block w-full h-full">
        <figure class="aspect-video overflow-hidden flex justify-center items-center">
          <img :src="props.data.image ? props.data.image : 'https://picsum.photos/1600/1600'"
            :alt="`預覽圖-${props.data.title}`">
        </figure>
      </NuxtLink>
    </div>
    <div class="flex flex-col justify-between gap-2 w-2/3 py-1 pl-4 md:w-full md:pl-0 sm:px-2">
      <div>
        <div class="text-primary line-clamp-1">
          <!-- <NuxtLink to="/" class="no-style-a">{{ props.data.category }}</NuxtLink> -->
          <!-- {{ props.data.category }} -->
          {{ new Date(props.data.date).toISOString().slice(0, 10) }}
        </div>
        <h2 class="text-xl font-semibold line-clamp-1 sm:line-clamp-2">
          <NuxtLink :to="props.data._path" class="no-style-a">{{ props.data.title }}</NuxtLink>
        </h2>
        <p class="grow-0 opacity-70 line-clamp-2">
          <NuxtLink :to="props.data._path" class="no-style-a">{{ props.data.description }}</NuxtLink>
        </p>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex gap-2 flex-wrap">
          <TagCard v-for="tag in props.data.tags" :key="tag" :tag="tag" :path="'/articles'"
            :class="{ 'badge-active': props.tags.find(t => t.tag === tag) }">#{{ tag }}</TagCard>
        </div>
      </div>
    </div>
  </div>
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