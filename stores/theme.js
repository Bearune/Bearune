const themes = {
  light: 'light',
  dark: 'dark'
};

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: false,
  }),

  actions: {
    toggleTheme() {
      const { $locally } = useNuxtApp();
      const colorMode = useColorMode();
      // 切換主題
      const newTheme = colorMode.preference === themes.light ? themes.dark : themes.light;
      this.isDark = newTheme === themes.dark;

      colorMode.preference = newTheme; // 設置新的主題
      $locally.setItem('nuxt-color-mode', newTheme); // 存儲在 localStorage
    },

    initTheme() {
      const { $locally } = useNuxtApp();
      const savedTheme = $locally.getItem('nuxt-color-mode');
      const theme = savedTheme || themes.light;
      this.isDark = theme === themes.dark;

      // 設置當前主題
      const colorMode = useColorMode();
      colorMode.preference = theme;
    }
  }
});
