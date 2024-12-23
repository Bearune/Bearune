<template>
  <div class="w-full min-h-fit bg-base-200 rounded-box shadow">
    <!-- <ContentDoc :path="data._path"> -->
    <article class="short p-8 sm:p-2">
      <div class="flex justify-between">
        <div class="flex flex-wrap gap-2 h-fit">
          <TagCard v-for="tag in data.tags" :key="tag" :tag="tag" :path="'/cards'"
            :class="{ 'badge-active': activeTags(tag) }">#{{ tag }}</TagCard>
        </div>
        <ToolTip content="另開頁面">
          <NuxtLink :to="data._path" class="btn btn-icon h-fit" target="_blank">
            <Inbox class="w-5 h-5" />
          </NuxtLink>
        </ToolTip>
      </div>
      <h1 v-if="data.title" class="pt-2">{{ data.title }}</h1>
      <ContentRenderer :value="data" class="col-span-8 mt-1" />
      <div class="flex justify-end text-sm text-base-content" style="--tw-bg-opacity:.6">
        {{ new Date(data.date).toISOString().slice(0, 10) }}
      </div>
    </article>
    <!-- </ContentDoc> -->
  </div>
</template>

<script setup>
import Inbox from '~/assets/icons/inbox.svg?component';

const { data, tags } = defineProps({ 'data': { type: Object, default: () => { } }, 'tags': { type: Array, default: () => [] } });
const activeTags = (tag) => tags.find(t => t.tag === tag)
</script>

<style lang="scss" scoped></style>