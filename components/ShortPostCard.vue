<template>
  <div class="w-full min-h-fit bg-base-200 rounded-box shadow">
    <ContentDoc :path="data._path">
      <article class="short p-8">
        <div class="flex flex-wrap gap-2 h-fit">
          <TagCard v-for="tag in data.tags" :key="tag" :tag="tag" :path="$route.path"
            :class="{ 'badge-active': activeTags(tag) }">#{{ tag }}</TagCard>
        </div>
        <ContentRenderer :value="data" class="col-span-8 pt-4" />
      </article>
    </ContentDoc>
  </div>
</template>

<script setup>
const { data, tags } = defineProps({ 'data': { type: Object, default: () => { } }, 'tags': { type: Array, default: () => [] } });
const activeTags = (tag) => tags.find(t => t.tag === tag)
</script>

<style lang="scss" scoped></style>