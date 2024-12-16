export const useContentsStore = defineStore('contents', {
  state: () => ({
    articles: [], // 儲存所有唯一標籤
    shortArticle: [],
  }),
  actions: {
    async fetchContents(path = 'articles', without = '') {
      try {
        if (without) {
          this.articles = await queryContent(path).without(without).sort({ date: -1 }).find();
        }
        else {
          this.articles = await queryContent(path).sort({ date: -1 }).find();
        }
      } catch (error) {
        console.error('無法獲取文章', error);
      }
    },
    async fetchShortContents(path = 'cards', without = '') {
      try {
        if (without) {
          this.shortArticle = await queryContent(path).without(without).sort({ date: -1 }).find();
        }
        else {
          this.shortArticle = await queryContent(path).sort({ date: -1 }).find();
        }
      } catch (error) {
        console.error('無法獲取文章', error);
      }
    }
  },
});