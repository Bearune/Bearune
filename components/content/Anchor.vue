<template>
  <div
    class="anchor min-w-96 w-fit h-fit border border-base-400 rounded-box py-5 px-4 hidden flex-col gap-2 text-base mb-8 lg:flex sm:w-full sm:min-w-full sm:text-lg">
    <div class="flex justify-start">
      <IconTextCard :icon="'align-right'" style="--tw-bg-opacity:1">目錄</IconTextCard>
    </div>
    <div id="anchorArea" class="relative text-gray-500 dark:text-slate-300">
      <ol v-if="data && data.body && data.body.toc && Array.isArray(data.body.toc.links)">
        <li v-for="anchor in data.body.toc.links" :key="anchor.id" class="pl-2 pt-2">
          <NuxtLink class="anchorItem" :to="`#${anchor.id || ''}`">{{
            anchor.text }}</NuxtLink>
          <ol v-if="anchor.children">
            <li v-for="anchorChild in anchor.children" :key="anchorChild.id" class="pl-2 pt-2 line-clamp-1">
              <NuxtLink class="anchorItem" :to="`#${anchorChild.id || ''}`">{{ anchorChild.text }}</NuxtLink>
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const category = route.path.includes('/articles') ? 'articles' : route.path;

const { data } = await useAsyncData(category, () => queryContent(route.fullPath).findOne());
</script>

<style lang="scss" scoped>
.anchor {
  background-color: oklch(var(--base-300)/.2);

  @supports not(color: oklch(0% 0 0)) {
    background-color: var(--fallback-b2);
  }
}

#anchorArea {
  ol {
    @apply mb-0;

    >li {
      @apply pl-0;

      &::before {
        @apply content-[''];
      }

      >ol {
        @apply mb-0;

        >li {
          @apply pl-2;

          &::before {
            @apply content-[''];
          }

          >ol {
            @apply mb-0;

            >li {
              @apply pl-4;

              &::before {
                @apply content-[''];
              }
            }
          }
        }
      }
    }
  }
}
</style>