<template>
  <main class="w-[1200px] px-4 grid grid-cols-12 gap-8 mt-8 mb-32 md:grid-cols-8 sm:grid-cols-4 sm:px-4">
    <div class="col-span-8 h-fit lg:col-span-12 md:col-span-8 sm:col-span-4">
      <ContentDoc :excerpt="true">
        <template #default="{ doc }">
          <article class="normal grid grid-cols-8 gap-4 border-b border-base-300">
            <div class="col-span-8 pt-4 pb-2 border-b border-base-300 flex flex-col gap-4">
              <div class="flex flex-wrap gap-2 h-fit">
                <TagCard v-for="tag in doc.tags" :key="tag" :tag="tag" :path="$route.path">#{{ tag }}</TagCard>
              </div>
              <h1 v-if="doc.title">{{ doc.title }}</h1>
              <div class="flex justify-between items-center">
                <div class="flex gap-4 text-sm">
                  <IconTextCard class="opacity-70">{{ new Date(doc.date).toISOString().slice(0, 10) }}</IconTextCard>
                  <!-- <IconTextCard class="opacity-70" icon="clock">16 min read</IconTextCard> -->
                </div>
                <div class="flex text-base-content">
                  <ToolTip content="分享至 Facebook">
                    <a :href="`https://www.facebook.com/sharer/sharer.php?u=https://bearune.com${route.fullPath}`"
                      class="btn btn-icon" target="_blank" rel="noopener noreferrer">
                      <Facebook class="w-5 h-5" />
                    </a>
                  </ToolTip>
                  <ToolTip content="複製連結">
                    <a class="btn btn-icon" @click.prevent="copyLink">
                      <Link class="w-5 h-5" />
                    </a>
                  </ToolTip>
                </div>
              </div>
            </div>
            <ContentRenderer :value="doc" class="col-span-8" />
          </article>
          <div class="py-4 flex justify-between items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
            <div class="flex flex-wrap gap-2 h-fit">
              <TagCard v-for="tag in doc.tags" :key="tag" :tag="tag" :path="$route.path">#{{ tag }}</TagCard>
            </div>
            <div class="flex text-base-content">
              <ToolTip content="分享至 Facebook">
                <NuxtLink :href="`https://www.facebook.com/sharer/sharer.php?u=https://bearune.com${route.fullPath}`"
                  class="btn btn-icon" target="_blank" rel="noopener noreferrer" external>
                  <Facebook class="w-5 h-5" />
                </NuxtLink>
              </ToolTip>
              <ToolTip content="複製連結">
                <NuxtLink class="btn btn-icon" @click.prevent="copyLink">
                  <Link class="w-5 h-5" />
                </NuxtLink>
              </ToolTip>
            </div>
          </div>
          <div class="flex gap-8 justify-between sm:flex-col sm:gap-2">
            <SurroundArticleCard v-if="prev" :way="'left'" :data="prev" />
            <div v-else />
            <SurroundArticleCard v-if="next" :way="'right'" :data="next" />
            <div v-else />
          </div>
          <div class="mt-8">
            <ProfileLandscape class="sm:hidden" />
            <ProfilePortrait class="hidden sm:flex px-16" />
          </div>
          <div class="mt-8">
            <GiscusCard />
          </div>
        </template>
        <template #not-found>
          <h1>Document not found</h1>
        </template>
      </ContentDoc>
    </div>
    <div class="col-span-4 flex gap-4 h-full relative lg:hidden">
      <CommonSideBar />
    </div>
  </main>
</template>

<script setup>
import Facebook from '~/assets/icons/facebook.svg?component';
import Link from '~/assets/icons/link.svg?component';

const route = useRoute();

const copyLink = async () => {
  const url = window.location.href;
  try {
    await navigator.clipboard.writeText(url);
    ElMessage({
      message: '網址複製成功',
      type: 'success',
      duration: 1500,
    });
  } catch (err) {
    ElMessage.error('網址複製失敗', err);
  }
};

// 獲取當前文章數據
const { data } = await useAsyncData('cards', () =>
  queryContent(route.fullPath).findOne()
);
// 查找上一篇和下一篇
const [prev, next] = await queryContent('cards')
  .sort({ date: 1 })
  .where({ category: data.value.category })
  .only(['_path', 'title'])
  .findSurround(data.value._path);

</script>

<style lang="scss" scoped>
#sidebar-articles {
  &::-webkit-scrollbar {
    @apply w-2;
  }

  &::-webkit-scrollbar-track {
    @apply bg-base-200 rounded-box;
    --tw-bg-opacity: .5;
  }

  &::-webkit-scrollbar-thumb {
    @apply bg-base-300 rounded-box;

    &:hover {
      @apply bg-base-400;
    }
  }
}
</style>
