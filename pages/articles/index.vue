<template>
  <div class="w-[1200px] px-4 py-4 grid grid-cols-12 gap-8 mt-8 mb-32 md:grid-cols-8 sm:grid-cols-4 sm:px-4">
    <div
      class="col-span-8 grid grid-cols-8 gap-4 h-fit lg:col-span-12 lg:grid-cols-12 md:col-span-8 md:grid-cols-8 sm:col-span-4 sm:grid-cols-4">
      <div class="col-span-8 flex flex-col gap-4 lg:col-span-12 md:col-span-8 sm:col-span-4 sm:gap-2">
        <h1 class="page-title">文章</h1>
        <div class="flex items-center flex-wrap gap-2">
          <ToolTip content="過濾器">
            <span class="flex gap-2 items-center text-base-content">
              <Filter class="w-6 h-6" />
            </span>
          </ToolTip>
          <ToolTip content="選取全部">
            <button class="btn" @click="selectedAll">All</button>
          </ToolTip>
          <TagCard v-for="tag in tags" :key="tag" v-model="tag.checked" :path="route.path">#{{
            tag.tag }}</TagCard>
        </div>
      </div>
      <div v-if="filteredArticles.length" class="col-span-8 lg:col-span-12 md:col-span-8 sm:col-span-4">
        <!-- <p class="pb-4">共{{ filteredArticles.length }}篇文章</p> -->
        <TransitionGroup tag="div" name="list" class="relative p-0  flex flex-col gap-4 md:grid md:grid-cols-2">
          <ArticleCardMedium v-for="article in filteredArticles" :key="article._path" :data="article"
            :tags="selectedTags" class="md:col-span-1 sm:col-span-2" appear />
        </TransitionGroup>
      </div>
      <div v-else class="col-span-8 lg:col-span-12 md:col-span-8 sm:col-span-4">
        <h2 class="text-2xl">沒有文章</h2>
      </div>
      <!-- <ContentList v-slot="{ list }">
        <div class="col-span-9 flex flex-col gap-4">
          <ArticleCardMedium :data="article" v-for="article in list" :key="article._path" />
        </div>
      </ContentList> -->
    </div>
    <div class="col-span-4 flex gap-4 lg:hidden">
      <CommonSideBar />
    </div>
  </div>
</template>

<script setup>
import Filter from '~/assets/icons/filter.svg?component';

// 初始化：呼叫 Router 及 Route
const router = useRouter();
const route = useRoute();
const category = 'articles';

// 初始化：取得所有標籤
const tagsStore = useTagsStore();
await tagsStore.fetchTags(category);
const allTags = tagsStore.tags.find((item) => item.path === category).tags;

// 初始化：網址的標籤
const queryTags = computed(() => route.query.tags ? route.query.tags.split(',') : []);
let isUpdatingTags = false;

// 初始化：將網址的標籤轉為陣列
const updateTagsChecked = useDebounceFn(() => {
  isUpdatingTags = true;
  tags.value.forEach(tag => {
    tag.checked = queryTags.value.includes(tag.tag);
  });
  isUpdatingTags = false;
}, 10);

watch(() => route.query.tags, () => {
  if (isUpdatingTags) return;
  updateTagsChecked();
}, { immediate: true });

// 初始化：根據所有標籤(tagsStore.tags)分別加入 checked 預設 true
const tags = ref(allTags.map(tag => {
  return {
    tag,
    checked: queryTags.value.length !== 0 ? queryTags.value.includes(tag) : false,
  }
}));

// 初始化：取得所有文章
const contentsStore = useContentsStore();
await contentsStore.fetchContents(category, 'body');

// 過濾 checked === true 的標籤
const selectedTags = computed(() => tags.value.filter(tag => tag.checked));

let lastQuery = '';

// 根據 selectedTags 更改網址的標籤
const updateQuery = useDebounceFn((newTags) => {
  const tagList = newTags.map(tag => tag.tag).join(',');
  if (tagList === lastQuery) return;
  lastQuery = tagList;
  router.push({
    query: {
      tags: tagList,
    },
  });
  useHead({
    title: tagList ? `文章 | ${tagList || ''}| – 熊途` : `文章 – 熊途`
  });
}, 200);

watch(selectedTags, (newTags) => {
  updateQuery(newTags);
});

// 計算篩選後的文章列表
const filteredArticles = computed(() => {
  const selected = selectedTags.value.map(tag => tag.tag);
  if (selected.length === 0 || selected.length === tags.value.length) {// 如果選中所有標籤，顯示所有文章
    return contentsStore.articles;
  }
  // 過濾包含至少一個選中標籤的文章
  return contentsStore.articles.filter(article =>
    article.tags.some(tag => selected.includes(tag))
  );
});

const selectedAll = () => {
  tags.value.forEach((tag) => tag.checked = true);
}

// const clear = () => {
//   tags.forEach((tag) => tag.checked = false);
// }

</script>

<style lang="scss" scoped></style>