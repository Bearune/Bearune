export const useQuotesStore = defineStore('quotes', {
  state: () => ({
    quote: [], // 儲存所有唯一標籤
    isLoaded: false, // 確保只在第一次加載時執行查詢
  }),
  actions: {
    async fetchQuote() {
      if (this.isLoaded) return;
      try {
        const response = await fetch('https://api.quotable.io/quotes/random?limit=4&maxLength=100');
        const data = await response.json();
        this.quote = data;

      } catch (error) {
        console.error('獲取名言或翻譯時出錯:', error);
      }
    }
  },
});