<template>
  <div class="min-w-fit bg-base-400 text-base-content shadow-md rounded-box px-2">
    <div class="h-fit">
      <ul class="!flex-nowrap menu gap-4">
        <li>
          <NuxtLink to="/articles" class="btn btn-ghost">文章</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/cards" class="btn btn-ghost">筆記</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/toolbox" class="btn btn-ghost">工具箱</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const tagsStore = useTagsStore();
if (!tagsStore.isLoaded) {
  await tagsStore.fetchTags();
}
</script>

<style lang="scss" scoped></style>