<template>
    <div class="columns px-4 mt-8 mb-32 sm:px-2">
        <div class="col-span-12 w-full rounded-box flex flex-col gap-4 bg-base-200
        md:col-span-8 sm:col-span-4">
            <div class="max-h-96 rounded-box overflow-hidden">
                <img :src="Leaves" alt="" class="w-full">
            </div>
        </div>
        <div class="!min-h-[calc(100vh-20.5rem)] auto-rows-min col-span-8 grid grid-cols-9 gap-8 h-fit
        lg:col-span-12 lg:grid-cols-12 md:col-span-8 md:grid-cols-8 sm:col-span-4 sm:grid-cols-4">
            <LazyContentList v-slot="{ list }" :query="{ path: 'articles', without: ['body'], sort: [{ date: -1 }] }">
                <ArticleCardLarge class="col-span-9 lg:col-span-12 md:col-span-8 sm:col-span-4" :data="list[0]" />
                <QuoteCard class="col-span-7 col-start-2 lg:col-span-8 lg:col-start-3 md:col-start-1 sm:col-span-4" />
                <div
                    class="col-span-9 flex flex-col gap-4 lg:col-span-12 md:col-span-8 sm:col-span-4 md:grid md:grid-cols-2">
                    <ArticleCardMedium v-for="article in list.slice(1)" :key="article._path" :data="article"
                        class="md:col-span-1 sm:col-span-2" />
                </div>
            </LazyContentList>
        </div>
        <div class="col-span-4 flex gap-4 lg:hidden">
            <CommonSideBar />
        </div>
        <!-- <div class="col-span-12 w-full min-h-24 rounded-box flex flex-col gap-4 bg-base-200
        md:col-span-8 sm:col-span-4 sm:min-h-24">
            <AdsMultiple />
        </div> -->
        <div class="col-span-12 w-full rounded-box grid grid-cols-12 gap-4
        md:col-span-8 md:grid-cols-8 sm:col-span-4 sm:grid-cols-4">
            <ShortArticleCardCollapse v-for="card in contentsStore.shortArticle" :key="card._path" :data="card"
                class="col-span-6 lg:col-span-12 md:col-span-8 sm:col-span-4" />
        </div>
    </div>
</template>

<script setup>
import Leaves from '~/assets/images/leaves.jpg';
useHead({
    title: ''
});

const isClient = ref(false);

// 初始化：取得所有文章
const contentsStore = useContentsStore();
await contentsStore.fetchShortContents('cards');

onMounted(() => {
    isClient.value = true;  // 在客戶端掛載後再顯示
});
</script>

<style lang="scss" scoped></style>