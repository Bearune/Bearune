<template>
  <div
    class="w-[1200px] auto-rows-min !min-h-[calc(100vh-18.5rem)] p-4 grid grid-cols-12 gap-8 mt-8 mb-32 md:grid-cols-8 sm:grid-cols-4 sm:p-4">
    <div class="col-span-12 md:col-span-8 sm:col-span-4 flex flex-col gap-4">
      <h1 class="page-title">工具箱</h1>
      <p>收藏幾個瓜熊常用的網站及套件包。</p>
    </div>
    <div v-for="item in Object.keys(data)" :key="item"
      class="col-span-12 grid grid-cols-12 gap-4 md:col-span-8 md:grid-cols-8 sm:col-span-4 sm:grid-cols-4">
      <div class="col-span-12 md:col-span-8 sm:col-span-4">
        <h2 class="text-2xl font-semibold border-b border-base-300 pb-2">{{ item }}</h2>
      </div>
      <div v-for="card in data[item]" :key="card._id" class="col-span-4">
        <ToolboxCard :data="card" />
      </div>
    </div>
  </div>
</template>

<script setup>

// 初始化：呼叫 Router 及 Route
const category = 'toolbox';
const data = ref({});

// 初始化：取得所有文章
const contentsStore = useContentsStore();
await contentsStore.fetchToolboxContents(category);

const sortByCategory = () => {
  data.value = contentsStore.toolCard.reduce((acc, card) => {
    // 如果該類別不存在，先初始化為空陣列
    if (!acc[card.category]) acc[card.category] = [];
    // 將卡片加入對應類別的陣列
    acc[card.category].push(card);
    return acc;
  }, {});
};

onMounted(async () => {
  sortByCategory();
});

</script>

<style lang="scss" scoped></style>