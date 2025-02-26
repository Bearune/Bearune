<template>
  <div id="siteHeader" class="fixed -top-0.5 left-0 right-0 backdrop-blur z-10">
    <div
      class="siteHeader_inner flex justify-between items-center w-full h-20 px-6 py-2 text-base-content sm:px-2 sm:h-16"
      style="--tw-bg-opacity: 1">
      <div class="min-w-32 flex gap-4 py-1 h-full sm:py-0">
        <NuxtLink to="/" class="btn btn-ghost">
          <ColorScheme>
            <LightLogo v-if="$colorMode.preference !== 'dark'" class="h-full" :font-controlled="false" />
            <DarkLogo v-else class="h-full" :font-controlled="false" />
          </ColorScheme>
        </NuxtLink>
      </div>
      <div v-if="device.isMobile ? false : true" class="flex-1 sm:hidden">
        <ul class="menu">
          <li>
            <NuxtLink to="/articles" class="btn btn-ghost">文章</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/cards" class="btn btn-ghost">筆記</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/toolbox" class="btn btn-ghost">工具箱</NuxtLink>
          </li>
          <!-- <li>
            <NuxtLink to="/tools" class="btn btn-ghost">組件練習</NuxtLink>
          </li> -->
        </ul>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-1">
        <ToolTip content="搜尋 Ctrl+K">
          <span class="btn btn-icon" @click="toggleSearch">
            <Search class="w-6 h-6" />
          </span>
        </ToolTip>
        <ToolTip :content="`${$colorMode.preference !== 'dark' ? '切換為暗模式' : '切換為亮模式'}`" placement="bottom"
          effect="customized" :hide-after="0">
          <DarkModeToggle class="btn btn-icon" />
        </ToolTip>
        <ToolTip content="Github">
          <a href="https://github.com/wenyanlin" class="btn btn-icon" target="_blank">
            <Github class="w-6 h-6" />
          </a>
        </ToolTip>
      </div>
    </div>
  </div>
  <SearchCard v-if="isSearchOpen" v-model="isSearchOpen" />
</template>

<script setup>
import LightLogo from '~/assets/icons/logo_light.svg';
import DarkLogo from '~/assets/icons/logo_dark.svg';
import Github from '~/assets/icons/github.svg?component';
import Search from '~/assets/icons/search.svg?component';

const device = useDeviceStore();
const tagsStore = useTagsStore();
if (!tagsStore.isLoaded) {
  await tagsStore.fetchTags();
}

const isSearchOpen = ref(false);
const html = ref();
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;

  if (isSearchOpen.value) {
    html.value.style.overflow = 'hidden';
  }
  else {
    html.value.style.overflow = 'auto';
  }
}

const handleKeyDown = (event) => {
  // 判斷 Ctrl + K 快捷鍵
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault(); // 阻止默認行為
    toggleSearch();
  }
};
onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  html.value = document.querySelector('html');
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style lang="scss" scoped>
#siteHeader {
  @apply bg-base-100;
  --tw-bg-opacity: 0.2;

  .menu .router-link-active {
    @apply relative;

    &::before {
      @apply content-[''] absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary;
    }
  }
}

@media (min-width: 1440px) and (max-height: 900px) {
  .siteHeader {
    &_inner {
      @apply h-16 py-0;
    }
  }
}
</style>