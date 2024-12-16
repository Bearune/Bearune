<template>
  <div class="w-full h-screen bg-black fixed inset-0 cursor-pointer z-10" style="--tw-bg-opacity:.5"
    @click="closeSearch" />
  <div class="w-[36rem] h-[37rem] p-4 bg-base-200 fixed left-1/2 top-16 -translate-x-1/2 rounded-box z-10
    lg:w-2/3 md:w-full md:h-screen md:rounded-none md:top-0">
    <div class="w-full flex gap-2">
      <div class="flex-1 bg-base-100 border border-primary flex justify-center items-center gap-2 px-2 rounded-md">
        <input ref="inputRef" v-model="inputValue" type="text" placeholder="輸入關鍵字" maxlength="30"
          class="w-full h-12 outline-0 text-lg bg-transparent">
        <div class="cursor-pointer transition-colors duration-150 hover:text-primary" @click="clearInput">×</div>
      </div>
      <button class="hidden btn btn-primary md:inline-block" @click="closeSearch">關閉</button>
    </div>
    <div class="w-full h-fit flex flex-col pt-2 gap-2">
      <div v-if="inputValue">
        搜尋<span class="font-semibold text-primary px-1">{{ inputValue }}</span>的結果如下：
      </div>
      <div class="h-[28.5rem] overflow-auto">
        <div v-if="filteredProducts.length === 0 && inputValue" class="text-center text-lg">
          找不到符合搜尋字詞「<span class="font-semibold text-primary px-1">{{ inputValue }}</span>」的文章。</div>
        <div v-else class="overflow-y-auto">
          <div class="flex flex-col gap-1 mr-2">
            <div v-for="result in filteredProducts " :key="result._path"
              class="w-full h-16 flex items-center px-4 border border-base-300 bg-base-100 rounded-md hover:bg-primary group">
              <RouterLink :to="result._path" class="no-style-a w-full h-full flex flex-col justify-center"
                @click="closeSearch">
                <div class="font-semibold tracking-wide text-base-content group-hover:text-white"
                  v-html="result.title" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isSearchOpen = defineModel({ type: Boolean, default: false });
const html = ref();
const inputValue = ref('');
const inputRef = ref(null);

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;

  if (isSearchOpen.value) {
    html.value.style.overflow = 'hidden';
  }
  else {
    html.value.style.overflow = 'auto';
  }
}
const closeSearch = () => {
  isSearchOpen.value = false;
  html.value.style.overflow = 'auto';
}

const highlightQuery = (title, { text, regex }) => {
  if (!text) return title;

  return title.replace(regex, '<span class="text-primary font-semibold group-hover:text-white group-hover:border-b group-hover:border-white group-hover:font-normal">$1</span>');
};

const filteredProducts = computed(() => {
  const query = inputValue.value.toLowerCase();

  const regex = new RegExp(`(${query})`, 'gi');
  return navigation.value[0].children.filter((item) => item.title.toLowerCase().includes(query))
    .map((item) => {
      return {
        ...item,
        title: highlightQuery(item.title, { text: query, regex }),
      };
    });
});

const clearInput = () => {
  inputValue.value = '';
};

const handleKeyDown = (event) => {
  // 判斷 Ctrl + K 快捷鍵
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault(); // 阻止默認行為
    toggleSearch();
  }
};

onMounted(async () => {
  window.addEventListener('keydown', handleKeyDown);
  html.value = document.querySelector('html');
  await nextTick(() => inputRef.value.focus());
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

// // 獲取所有文章
// const { fetchContent } = useContent()

// // 計算過濾後的文章列表
// const filteredArticles = computed(async () => {
//   // 如果沒有輸入搜尋關鍵字，顯示所有文章
//   if (!query.value) {
//     const { data } = await fetchContent('articles').only(['title', 'slug']);
//     return data;
//   }

//   // 有搜尋關鍵字時過濾文章
//   const { data } = await fetchContent('articles')
//     .where({ $text: query.value })
//     .only(['title', 'slug']);

//   return data;
// })
</script>

<style scoped></style>
