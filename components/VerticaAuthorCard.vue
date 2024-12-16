<template>
  <div class="card card-compact bg-base-200 w-full rounded-xl">
    <div class="card-body items-center">
      <div class="text-base">關於我</div>
      <div class="overflow-hidden rounded-full flex justify-center items-center">
        <figure class="aspect-square w-40">
          <img :src="Profile" alt="Album" >
        </figure>
      </div>
      <h2 class="card-title text-2xl !mb-0">圍巾熊</h2>
      <p class="text-sm">台灣人，2023年成為前端工程師。除了前端之外，過去曾涉略設計領域，發表過演算法相關論文，最近正在鑽研特效網站製作。</p>
      <div class="card-actions justify-center">
        <button class="btn btn-circle">
          <Github class="p-0.5 w-7" />
        </button>
        <button class="btn btn-circle">
          <Coffee class="p-0.5 w-7" />
        </button>
        <button class="btn btn-circle">
          <Rss class="p-0.5 w-7" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Profile from '~/assets/images/profile.webp';
import Github from '~/assets/icons/github.svg?component';
import Rss from '~/assets/icons/rss.svg?component';
import Coffee from '~/assets/icons/coffee.svg?component';

</script>

<style lang="scss" scoped></style>