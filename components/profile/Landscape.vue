<template>
  <div class="w-full bg-base-200 rounded-box py-8  shadow px-24 md:px-16">
    <div class="flex justify-center items-center gap-8 w-full">
      <div class="aspect-square h-fit overflow-hidden w-4/12">
        <img :src="Profile" alt="熊途" class="max-h-48">
      </div>
      <div class="w-8/12 flex flex-col gap-2">
        <h3>瓜熊</h3>
        <p>努力學習 Nuxt 中……</p>
        <div class="flex gap-1">
          <el-tooltip class="box-item" content="Github" placement="bottom" effect="customized" :hide-after="0">
            <a href="https://github.com/wenyanlin" class="btn btn-icon" target="_blank">
              <Github class="w-6 h-6 " />
            </a>
          </el-tooltip>
          <el-tooltip class="box-item" content="Youtube" placement="bottom" effect="customized" :hide-after="0">
            <a href="https://www.youtube.com/c/SimsEvelyn" class="btn btn-icon" target="_blank">
              <Youtube class="w-6 h-6 " />
            </a>
          </el-tooltip>
          <el-tooltip class="box-item" content="RSS" placement="bottom" effect="customized" :hide-after="0">
            <a href="https://bearune.com/rss.xml" class="btn btn-icon" target="_blank">
              <RSS class="w-6 h-6 " />
            </a>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Profile from '~/assets/images/profile.webp';
import Github from '~/assets/icons/github.svg?component';
import RSS from '~/assets/icons/rss.svg?component';
import Youtube from '~/assets/icons/youtube.svg?component';

</script>

<style lang="scss" scoped>
h3 {
  @apply text-2xl font-semibold text-base-content;
}

p {
  @apply text-neutral-500;
}
</style>