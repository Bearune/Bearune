<template>
  <div class="w-[1200px] px-4 py-4 grid grid-cols-12 gap-8 mt-8 mb-32 md:grid-cols-8 sm:grid-cols-4 sm:p-4">
    <div
      class="!min-h-[calc(100vh-20.5rem)] auto-rows-min col-span-8 grid grid-cols-8 gap-4 h-fit lg:col-span-12 lg:grid-cols-12 md:col-span-8 md:grid-cols-8 sm:col-span-4 sm:grid-cols-4">
      <div class="col-span-8 flex flex-col gap-4 lg:col-span-12 md:col-span-8 sm:col-span-4 sm:gap-2">
        <h1 class="page-title">筆記</h1>
        <div class="flex items-center flex-wrap gap-2">
          <ToolTip content="過濾器">
            <span class="flex gap-2 items-center text-base-content">
              <Filter class="w-6 h-6" />
            </span>
          </ToolTip>
          <ToolTip content="選取全部">
            <button class="btn" @click="selectedAll">All</button>
          </ToolTip>
          <TagCard v-for="tag in tags" :key="tag" v-model="tag.checked" :path="route.path">#{{ tag.tag }}</TagCard>
        </div>
      </div>
      <div v-if="filteredCards.length"
        class="col-span-8 flex flex-col gap-4 lg:col-span-12 md:col-span-8 sm:col-span-4">
        <TransitionGroup tag="div" name="list" class="relative p-0  flex flex-col gap-4">
          <!-- <ContentList v-slot=" { list }" :query="{ path: 'cards', sort: [{ date: -1 }] }"> -->
          <ShortArticleCardCommon v-for="card in filteredCards" :key="card._path" :data="card" :tags="selectedTags"
            appear />
          <!-- </ContentList> -->
        </TransitionGroup>
      </div>
    </div>
    <div class="col-span-4 flex gap-4 lg:hidden">
      <CommonSideBar />
    </div>
  </div>
</template>

<script setup>
import Filter from '~/assets/icons/filter.svg?component';

useHead({
  title: '筆記'
});

// 初始化：呼叫 Router 及 Route
const router = useRouter();
const route = useRoute();
const category = 'cards';

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
await contentsStore.fetchShortContents(category);

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
    title: tagList ? `筆記 | ${tagList || ''}` : '筆記'
  });
}, 200);

watch(selectedTags, (newTags) => {
  updateQuery(newTags);
});

// 計算篩選後的文章列表
const filteredCards = computed(() => {
  const selected = selectedTags.value.map(tag => tag.tag);
  if (selected.length === 0 || selected.length === tags.value.length) {// 如果選中所有標籤，顯示所有文章
    return contentsStore.shortArticle;
  }
  // 過濾包含至少一個選中標籤的文章
  return contentsStore.shortArticle.filter(article =>
    article.tags.some(tag => selected.includes(tag))
  );
});

const selectedAll = () => {
  tags.value.forEach((tag) => tag.checked = true);
}
</script>

<style lang="scss" scoped></style>