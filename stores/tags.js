export const useTagsStore = defineStore('tags', {
  state: () => ({
    tags: [], // 儲存所有唯一標籤
  }),
  actions: {
    async fetchTags(path) {
      if (!path || this.tags.findIndex((tag) => tag.path === path) !== -1) return;
      try {
        const contentQuery = await queryContent(path).only('tags').find();
        const allTags = contentQuery.flatMap(item => item.tags || []);
        this.tags.push({ path: path, tags: [...new Set(allTags)] });

      } catch (error) {
        console.error('無法獲取標籤', error);
      }
    }
  },
});