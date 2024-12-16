<template>
  <label class="w-6 h-6 swap swap-rotate flex justify-center items-center sm:w-4 sm:h-4">
    <!-- this hidden checkbox controls the state -->
    <input v-model="themeStore.isDark" type="checkbox" @click="toggleTheme()">

    <!-- sun icon -->
    <Sun class="swap-off w-6 h-6" />

    <!-- moon icon -->
    <Moon class="swap-on w-6 h-6" />
  </label>
</template>

<script setup>
import Sun from '~/assets/icons/sun.svg?component';
import Moon from '~/assets/icons/moon.svg?component';

const themeStore = useThemeStore();

const toggleTheme = () => {
  themeStore.toggleTheme();
};

themeStore.initTheme();
</script>

<style lang="scss" scoped></style>