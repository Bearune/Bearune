<template>
  <div class="w-full bg-base-200 rounded-box p-8  shadow">
    <div class="flex flex-col justify-center items-center gap-4 w-full">
      <div class="w-full flex flex-col items-center gap-2">
        <h2 class="sidebar-title">關於我</h2>
      </div>
      <div class="aspect-square w-fit">
        <!-- <img :src="Profile" alt="熊途" class="max-w-48"> -->
        <ProfileImg class="w-48 h-48" />
      </div>
      <div class="w-full flex flex-col items-center gap-2">
        <h3>瓜熊</h3>
        <p>努力學習 Nuxt 中……</p>
        <div class="flex gap-1">
          <el-tooltip class="box-item" content="Github" placement="bottom" effect="customized" :hide-after="0">
            <NuxtLink to="https://github.com/wenyanlin" class="btn btn-icon" target="_blank" external>
              <Github class="w-6 h-6 " />
            </NuxtLink>
          </el-tooltip>
          <el-tooltip class="box-item" content="CodePen" placement="bottom" effect="customized" :hide-after="0">
            <NuxtLink to="https://codepen.io/Lin-Donna" class="btn btn-icon" target="_blank" external>
              <CodePen class="w-6 h-6 " />
            </NuxtLink>
          </el-tooltip>
          <el-tooltip class="box-item" content="Youtube" placement="bottom" effect="customized" :hide-after="0">
            <NuxtLink to="https://www.youtube.com/c/SimsEvelyn" class="btn btn-icon" target="_blank" external>
              <Youtube class="w-6 h-6 " />
            </NuxtLink>
          </el-tooltip>
          <el-tooltip class="box-item" content="RSS" placement="bottom" effect="customized" :hide-after="0">
            <NuxtLink to="https://bearune.com/rss.xml" class="btn btn-icon" target="_blank">
              <RSS class="w-6 h-6 " />
            </NuxtLink>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Github from '~/assets/icons/github.svg?component';
import RSS from '~/assets/icons/rss.svg?component';
import Youtube from '~/assets/icons/youtube.svg?component';
import CodePen from '~/assets/icons/codepen.svg?component';

</script>

<style lang="scss" scoped>
h3 {
  @apply text-2xl font-semibold text-base-content;
}

p {
  @apply text-neutral-500;
}
</style>