<template>
  <div :class="{ '!h-fit': show }" class="short-article-card_collapse w-full h-96 rounded-box overflow-hidden relative">
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
    <div v-if="!show"
      class="w-full h-32 bg-gradient-to-b absolute bottom-0 left-0 right-0 from-transparent via-base-200 to-base-200 flex justify-center pt-12 cursor-pointer"
      @click="openFullContent">
      <span class="text-base-content" style="--tw-bg-opacity:.6">展開全部</span>
    </div>
  </div>
</template>

<script setup>
import Inbox from '~/assets/icons/inbox.svg?component';

const { data, tags } = defineProps({ 'data': { type: Object, default: () => { } }, 'tags': { type: Array, default: () => [] } });
const activeTags = (tag) => tags.find(t => t.tag === tag)

const show = ref(false);
const openFullContent = () => {
  show.value = true;
}
</script>

<style lang="scss" scoped>
.short-article-card_collapse {
  background-color: oklch(var(--base-300)/.2);

  @supports not(color: oklch(0% 0 0)) {
    background-color: var(--fallback-b3);
  }
}
</style>