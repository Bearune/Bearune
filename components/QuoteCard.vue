<template>
  <Transition name="fade" mode="out-in">
    <div v-if="quote.length" class="mt-2">
      <div class="item">
        <QuotationMarks class="w-12 h-12 absolute -top-4 left-4 text-primary" />
        <Transition name="fade" mode="out-in">
          <p :key="currentIndex" class="text-primary">{{ quote[currentIndex].content }}— {{ quote[currentIndex].author
            }}
          </p>
        </Transition>
      </div>
      <div class="w-full h-fit flex justify-end gap-8 pt-2 sm:justify-center">
        <button class="h-fit flex justify-center items-center gap-2 btn btn-primary btn-ghost" @click="prevQuote">
          <ChevronLeft class="w-4 h-4" />
          <span>Prev</span>
        </button>
        <button class="h-fit flex justify-center items-center gap-2 btn btn-primary btn-ghost" @click="nextQuote">
          <span>Next</span>
          <ChevronRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import QuotationMarks from '~/assets/icons/quotation-marks.svg?component';
import ChevronLeft from '~/assets/icons/chevron-left.svg?component';
import ChevronRight from '~/assets/icons/chevron-right.svg?component';

const quoteStore = useQuotesStore();

const quote = ref([]);

// 當前顯示的名言索引
const currentIndex = ref(0);

// 切換到上一張
const prevQuote = () => {
  currentIndex.value = (currentIndex.value - 1 + quote.value.length) % quote.value.length;
};

// 切換到下一張
const nextQuote = () => {
  currentIndex.value = (currentIndex.value + 1) % quote.value.length;
};

onMounted(async () => {
  await quoteStore.fetchQuote();
  quote.value = quoteStore.quote;
});
</script>

<style lang="scss" scoped>
.item {
  @apply w-full min-h-28 rounded-box border-2 border-primary bg-base-100 px-8 pt-10 pb-4 relative;

  // &::before {
  //   @apply content-[''] absolute -bottom-1.5 -right-1.5 w-full h-full rounded-box bg-primary -z-10;
  // }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s;
}
</style>