<template>
  <div class="details-block mb-8 text-base-content text-base">
    <div :class="{ 'btn-primary': isOpen, 'btn-secondary': !isOpen }"
      class="btn px-4 py-2 flex items-center gap-2 cursor-pointer select-none" @click="toggleDetails">
      <ChevronRight :class="{ 'rotate-90': isOpen }" class="w-6 h-6 transition-transform duration-btn" />
      <span>{{ props.title }}</span>
    </div>
    <div v-if="isOpen" class="mt-2 p-4 border border-primary rounded-btn">
      <slot />
    </div>
  </div>
</template>

<script setup>
import ChevronRight from '~/assets/icons/chevron-right.svg?component';

const props = defineProps({ title: { type: String, default: '' } });

const isOpen = ref(false);

const toggleDetails = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.details-block {
  *:last-child {
    @apply mb-0 text-base;
  }
}
</style>
