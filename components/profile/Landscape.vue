<template>
  <div class="profile-landscape w-full rounded-box py-8 px-24 md:px-16">
    <div class="flex justify-center items-center gap-8 w-full">
      <div class="aspect-square h-fit w-4/12">
        <ProfileImg class="w-full" />
      </div>
      <div class="w-8/12 flex flex-col gap-2">
        <h3>瓜熊</h3>
        <p>你好，我是瓜熊，熱愛研究新鮮的東西。</p>
        <div class="flex gap-1">
          <el-tooltip class="box-item" content="Github" placement="bottom" effect="customized" :hide-after="0">
            <NuxtLink to="https://github.com/wenyanlin" class="btn btn-icon" target="_blank" external>
              <Github class="w-6 h-6 " />
            </NuxtLink>
          </el-tooltip>
          <el-tooltip class="box-item" content="作品集" placement="bottom" effect="customized" :hide-after="0">
            <NuxtLink to="https://portfolio.bearune.com" class="btn btn-icon" target="_blank">
              <Globe class="w-6 h-6 " />
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
import Globe from '~/assets/icons/globe.svg?component';

</script>

<style lang="scss" scoped>
.profile-landscape {
  background-color: oklch(var(--base-300)/.2);

  @supports not(color: oklch(0% 0 0)) {
    background-color: var(--fallback-b3);
  }
}

h3 {
  @apply text-2xl font-semibold text-base-content;
}

p {
  @apply text-neutral-500;
}
</style>