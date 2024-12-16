import { openBlock, createElementBlock, createElementVNode, unref } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { defineStore } from 'file://C:/bearuneBlog/node_modules/pinia/dist/pinia.prod.cjs';
import { q as queryContent } from './query-BfItlduj.mjs';

const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  class: "feather feather-filter",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z" }, null, -1)
  ]));
}
const Filter = { render };
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  let lastRejector = noop;
  const _clearTimeout = (timer2) => {
    clearTimeout(timer2);
    lastRejector();
    lastRejector = noop;
  };
  const filter = (invoke2) => {
    const duration = toValue(ms);
    const maxDuration = toValue(options.maxWait);
    if (timer)
      _clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        _clearTimeout(maxTimer);
        maxTimer = null;
      }
      return Promise.resolve(invoke2());
    }
    return new Promise((resolve, reject) => {
      lastRejector = options.rejectOnCancel ? reject : resolve;
      if (maxDuration && !maxTimer) {
        maxTimer = setTimeout(() => {
          if (timer)
            _clearTimeout(timer);
          maxTimer = null;
          resolve(invoke2());
        }, maxDuration);
      }
      timer = setTimeout(() => {
        if (maxTimer)
          _clearTimeout(maxTimer);
        maxTimer = null;
        resolve(invoke2());
      }, duration);
    });
  };
  return filter;
}
function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(
    debounceFilter(ms, options),
    fn
  );
}
const useContentsStore = defineStore("contents", {
  state: () => ({
    articles: [],
    // 儲存所有唯一標籤
    shortArticle: []
  }),
  actions: {
    async fetchContents(path = "articles", without = "") {
      try {
        if (without) {
          this.articles = await queryContent(path).without(without).sort({ date: -1 }).find();
        } else {
          this.articles = await queryContent(path).sort({ date: -1 }).find();
        }
      } catch (error) {
        console.error("\u7121\u6CD5\u7372\u53D6\u6587\u7AE0", error);
      }
    },
    async fetchShortContents(path = "cards", without = "") {
      try {
        if (without) {
          this.shortArticle = await queryContent(path).without(without).sort({ date: -1 }).find();
        } else {
          this.shortArticle = await queryContent(path).sort({ date: -1 }).find();
        }
      } catch (error) {
        console.error("\u7121\u6CD5\u7372\u53D6\u6587\u7AE0", error);
      }
    }
  }
});

export { Filter as F, useDebounceFn as a, useContentsStore as u };
//# sourceMappingURL=content-C9FzVVnW.mjs.map
