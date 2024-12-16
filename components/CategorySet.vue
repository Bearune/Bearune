<template>
  <div class="mt-4">
    <div v-for="i in cates" :key="i.title" class="flex gap-4 item group">
      <Feather class="w-6 h-6 text-primary" />
      <div>
        <span>{{ i.title }}</span>
        <span>（{{ i.amount }}）</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Feather from '~/assets/icons/feather.svg?component';

const cates = [
  {
    'title': '前端開發',
    'path': '/',
    'amount': '100'
  },
  {
    'title': '閱讀心得',
    'path': '/',
    'amount': '10'
  },
  {
    'title': '日常生活',
    'path': '/',
    'amount': '52'
  },
  {
    'title': '養貓日常',
    'path': '/',
    'amount': '2'
  },
  {
    'title': 'LeetCode',
    'path': '/',
    'amount': '20'
  },
]
</script>

<style lang="scss" scoped>
.item {
  @apply p-2 border-b border-base-300 select-none cursor-pointer transition-colors duration-btn last:border-none;

  @media (hover:hover) {
    &:hover {
      @apply text-primary;
    }
  }
}
</style>