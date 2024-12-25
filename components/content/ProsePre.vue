<template>
  <div class="code-block">
    <div class="code-header relative">
      <div class="flex gap-4 items-center sm:gap-2 overflow-x-auto sm:px-2">
        <span v-if="props.language"
          class="language bg-base-400 text-base-content py-1 px-1.5 rounded-btn sm:py-0 sm:px-0 sm:bg-base-100">{{
            props.language }}</span>
        <span v-if="props.filename" class="text-base">{{ props.filename }}</span>
      </div>
      <ToolTip content="複製程式碼">
        <button class="btn btn-icon absolute right-2 -bottom-12" @click="copyCode">
          <Clipboard class="w-5 h-5" />
        </button>
      </ToolTip>
    </div>
    <pre :class="props.class" class="mr-8"><slot /></pre>
  </div>

</template>

<script setup lang="ts">
import Clipboard from '~/assets/icons/clipboard.svg?component';

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})

const { copy } = useClipboard();
const copyCode = () => {
  copy(props.code);
  ElMessage({
    message: '已複製程式碼',
    type: 'success',
  })
};
</script>

<style>
pre code .line {
  display: block;
}

ul,
ol {
  li>.code-block {
    @apply sm:-ml-9;
  }

  ul,
  ol {
    li>.code-block {
      @apply sm:-ml-[4.2rem];
    }
  }
}

.code-block {
  @apply mb-8 rounded-box border border-base-400 overflow-hidden sm:-mx-4 sm:border-none sm:rounded-none;

  .code-header {
    @apply min-h-12 px-2 pt-1 border-b border-base-400 flex justify-between items-center text-base-content text-sm whitespace-nowrap;

    ::-webkit-scrollbar {
      @apply h-1;
    }

    ::-webkit-scrollbar-thumb {
      @apply bg-base-300 rounded-sm;
    }
  }
}

.normal {
  .code-block {
    @apply bg-base-200;

    .code-header {
      @apply bg-base-100;
    }
  }
}

.short {
  .code-block {
    @apply bg-base-100;

    .code-header {
      @apply bg-base-200;
    }
  }
}

pre {
  @apply px-4;

  /* 行號容器樣式 */
  &.shiki {

    code {
      @apply px-0 py-4 border-none block !bg-inherit;

      .line {
        @apply block py-0.5 text-sm;
        font-family: 'Fira Code', 'Courier New', monospace;

        >span {
          @apply text-wrap;
        }

        &.highlight {
          @apply bg-base-400;
        }
      }
    }
  }
}

@media screen {}
</style>