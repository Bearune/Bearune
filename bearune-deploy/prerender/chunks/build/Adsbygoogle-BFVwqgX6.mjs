import { useSSRContext, defineComponent, mergeProps, unref, ref, computed, watch, watchEffect, getCurrentInstance, nextTick, customRef } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { defu } from 'file://C:/bearuneBlog/node_modules/defu/dist/defu.mjs';
import { _ as _export_sfc, e as useRuntimeConfig, f as useRoute } from './server.mjs';

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  watch(source, update, { flush: "sync" });
  const get2 = typeof fn === "function" ? fn : fn.get;
  const set2 = typeof fn === "function" ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get2();
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set2 == null ? void 0 : set2(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
function useCurrentElement(rootComponent) {
  const vm = getCurrentInstance();
  const currentElement = computedWithControl(
    () => null,
    () => vm.proxy.$el
  );
  return currentElement;
}
function useAdsense(input) {
  var _a;
  const config = useRuntimeConfig().public.googleAdsense;
  const options = defu(input, config);
  const adClient = (_a = options.adClient) != null ? _a : options.id;
  const adTest = options.test ? "on" : null;
  const key = Math.random();
  const ad = useCurrentElement();
  const adClass = ref("");
  const show = ref(false);
  const adRegion = computed(() => show.value ? `page-${Math.random()}` : null);
  const isUnfilled = computed(() => {
    var _a2;
    return ((_a2 = ad.value) == null ? void 0 : _a2.getAttribute("data-ad-status")) === "unfilled";
  });
  const path = useRouteAttr("path");
  const queryParams = useRouteAttr("query");
  const status = computed(() => show.value ? null : "");
  async function updateAd() {
    return;
  }
  async function showAd() {
    var _a2;
    show.value = true;
    await nextTick();
    if ((_a2 = ad.value) == null ? void 0 : _a2.innerHTML)
      return;
    try {
      ((void 0).adsbygoogle = (void 0).adsbygoogle || []).push({});
    } catch (error) {
      console.error(error);
    }
  }
  watch([path, queryParams], (newRoute, oldRoute) => {
    const routeChanged = hasRouteChanged(newRoute, oldRoute, options.includeQuery);
    if (ad.value && !ad.value.isConnected)
      return;
    if (!routeChanged)
      return;
    updateAd();
  });
  watchEffect(() => {
    if (!ad.value || !ad.value.isConnected)
      return;
    if (show.value)
      ad.value.innerHTML = "";
    else
      ad.value.innerHTML = " ";
  });
  if (options.hideUnfilled) {
    watchEffect(() => isUnfilled.value && (adClass.value = "hide-unfilled"));
  }
  return {
    // computed properties
    adClass,
    dataAdClient: adClient,
    dataAdRegion: adRegion,
    dataAdTest: adTest,
    dataAnalyticsDomainName: options.analyticsDomainName,
    dataAnalyticsUacct: options.analyticsUacct,
    isUnfilled,
    key,
    status,
    // methods
    updateAd,
    showAd
  };
}
function useRouteAttr(name) {
  const route = useRoute();
  return computed(() => route[name]);
}
function hasRouteChanged(newRoute, oldRoute, includeQuery) {
  const [newPath, newQuery] = newRoute;
  const [oldPath, oldQuery] = oldRoute;
  if (newPath !== oldPath)
    return true;
  if (!includeQuery)
    return;
  const newQueryKeys = Object.keys(newQuery);
  const oldQueryKeys = Object.keys(oldQuery);
  return newQueryKeys.length !== oldQueryKeys.length || newQueryKeys.some((key) => newQuery[key] !== oldQuery[key]);
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Adsbygoogle",
  __ssrInlineRender: true,
  props: {
    adClient: { default: void 0 },
    adSlot: { default: null },
    adFormat: {},
    adLayout: { default: null },
    adLayoutKey: { default: null },
    adStyle: { default: () => ({ display: "block" }) },
    adFullWidthResponsive: { type: Boolean, default: false },
    hideUnfilled: { type: Boolean, default: void 0 },
    pageUrl: { default: null },
    analyticsUacct: {},
    analyticsDomainName: {},
    includeQuery: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const {
      adClient,
      analyticsDomainName,
      analyticsUacct,
      hideUnfilled,
      includeQuery
    } = __props;
    const {
      adClass,
      dataAdClient,
      dataAdRegion,
      dataAdTest,
      dataAnalyticsDomainName,
      dataAnalyticsUacct,
      isUnfilled,
      key,
      status,
      // methods
      updateAd,
      showAd
    } = useAdsense({
      adClient,
      analyticsDomainName,
      analyticsUacct,
      hideUnfilled,
      includeQuery
    });
    __expose({ isUnfilled, updateAd, showAd });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ins${ssrRenderAttrs(mergeProps({
        ref: "ad",
        key: unref(key),
        class: ["adsbygoogle", unref(adClass)],
        style: _ctx.adStyle,
        "data-ad-client": unref(dataAdClient),
        "data-ad-slot": _ctx.adSlot,
        "data-ad-format": _ctx.adFormat,
        "data-ad-region": unref(dataAdRegion),
        "data-ad-layout": _ctx.adLayout,
        "data-ad-layout-key": _ctx.adLayoutKey,
        "data-page-url": _ctx.pageUrl,
        "data-analytics-uacct": unref(dataAnalyticsUacct),
        "data-analytics-domain-name": unref(dataAnalyticsDomainName),
        "data-adtest": unref(dataAdTest),
        "data-adsbygoogle-status": unref(status),
        "data-ad-full-width-responsive": _ctx.adFullWidthResponsive
      }, _attrs))} data-v-101bfb4a></ins>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/google-adsense/dist/runtime/components/Adsbygoogle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-101bfb4a"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Adsbygoogle-BFVwqgX6.mjs.map
