<template>
  <div class="details-block mb-8 text-base-content text-base">
    <div class="btn btn-primary px-4 py-2 flex items-center gap-2 cursor-pointer select-none" :data-open="isOpen"
      @click="toggleDetails">
      <ChevronRight :class="{ 'rotate-90': isOpen }" class="w-6 h-6 transition-transform duration-btn" />
      <span>{{ props.title }}</span>
    </div>
    <div v-if="isOpen" class="details-block_content mt-2 p-4 border rounded-btn">
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

  .btn {
    --tw-bg-opacity: .2;
    --tw-border-opacity: 0;

    @supports(color: color-mix(in oklab, black, black)) {
      color: color-mix(in oklch, oklch(var(--primary, var(--base-content))) 90%, oklch(var(--primary-content)));
    }

    &[data-open=true] {
      --tw-border-opacity: 1;
    }
  }

  &_content {
    background-color: oklch(var(--primary)/.2);
    border-color: oklch(var(--primary, var(--base-200)) / var(--tw-border-opacity));
    --tw-border-opacity: 1;

    @supports(color: color-mix(in oklab, black, black)) {
      color: color-mix(in oklch, oklch(var(--primary, var(--base-content))) 90%, oklch(var(--primary-content)));
    }

    @supports not(color: oklch(0% 0 0)) {
      background-color: var(--fallback-b2);
    }
  }
}
</style>
