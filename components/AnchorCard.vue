<template>
  <div class="w-full h-fit bg-base-200 border border-base-400 rounded-box py-5 px-4 flex flex-col gap-2">
    <div class="flex justify-start">
      <IconTextCard class="text-base-content" :icon="'align-right'"><span class="font-semibold">目錄</span></IconTextCard>
    </div>
    <div id="anchorArea" class="relative text-gray-500 dark:text-slate-300">
      <ol>
        <li v-for="anchor in props.anchors.links" :key="anchor.id" class="pl-2 pt-2">
          <NuxtLink :to="`#${anchor.id || ''}`" :class="{ 'active': activeToc === anchor.id }" class="line-clamp-1">{{
            anchor.text }}</NuxtLink>
          <ol>
            <li v-for="anchorChild in anchor.children" :key="anchorChild.id"
              :class="{ 'active': activeToc === anchorChild.id }" class="pl-2 pt-2 line-clamp-1">
              <NuxtLink :to="`#${anchorChild.id || ''}`">{{ anchorChild.text }}</NuxtLink>
            </li>
          </ol>
        </li>
      </ol>
      <div ref="tocMaker"
        class="line w-1 h-4 my-2 bg-primary rounded-btn absolute top-1 -left-1 duration-btn transition-all hidden"
        :class="{ 'hidden': !props.dynamic }" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  anchors: {
    type: Object,
    default: () => { }
  },
  dynamic: {
    type: Boolean,
    default: true
  }
});

const activeToc = ref();
const tocMaker = ref(null);

function flattenTocLinks(links) {
  const flattened = [];

  const flatten = (items) => {
    items.forEach(item => {
      flattened.push({
        id: item.id,
        depth: item.depth,
        text: item.text
      });
      if (item.children) {
        flatten(item.children); // 遞歸處理子節點
      }
    });
  };

  flatten(links);

  return flattened;
}
const flattedAchors = flattenTocLinks(props.anchors.links);
const sectionElement = ref([]);

const onScroll = () => {
  const { scrollY } = window;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  flattedAchors.forEach((section, index) => {
    // const sectionElement = document.getElementById(section.id);
    if (sectionElement.value[index] && scrollY >= sectionElement.value[index].offsetTop) {
      tocMaker.value.style.top = `calc(0.25rem + ${index || 0} * 2rem)`;
      tocMaker.value.style.display = 'block';
      activeToc.value = section.id;
    }
    if (index === flattedAchors.length - 1 && scrollY + windowHeight >= documentHeight) {
      tocMaker.value.style.top = `calc(0.25rem + ${index || 0} * 2rem)`;
      tocMaker.value.style.display = 'block';
      activeToc.value = section.id;
    }

  });
}

onMounted(() => {
  sectionElement.value = flattedAchors.map((section) => {
    return document.getElementById(section.id);
  });
  if (props.dynamic) {
    onScroll();
    window.addEventListener('scroll', onScroll);
  }
});

onUnmounted(() => {
  if (props.dynamic) {
    window.removeEventListener('scroll', onScroll);
  }
})
</script>

<style lang="scss" scoped>
#anchorArea {
  .active {
    @apply text-primary;
  }
}
</style>