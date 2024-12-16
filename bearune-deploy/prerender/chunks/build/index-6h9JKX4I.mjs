import { _ as __nuxt_component_0 } from './nuxt-link-sCOWmU--.mjs';
import { shallowReactive, ref, defineComponent, watch, renderSlot, useSSRContext, openBlock, createElementBlock, createElementVNode, getCurrentInstance, computed, unref, mergeProps, withCtx, createVNode, toDisplayString, inject, provide, isVNode } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, g as debugWarn, h as namespaceContextKey, z as zIndexContextKey, j as isElement, k as isBoolean, l as isNumber } from './server.mjs';
import { b as buildProps, d as definePropType, a as buildProp, w as withInstallFunction, G as Github, E as ElTooltip } from './tags-BANbHccD.mjs';
import { P as Profile, Y as Youtube, R as RSS } from './TagsSet-B0TFQKHH.mjs';
import { isFunction, isString } from 'file://C:/bearuneBlog/node_modules/@vue/shared/dist/shared.cjs.prod.js';

const _sfc_main$1 = {
  __name: "SurroundArticleCard",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: () => {
      }
    },
    way: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: props.data._path,
        class: [{ "right": props.way === "right" }, "flex flex-col gap-0.5 justify-center btn btn-outline btn-secondary border border-base-400 w-1/2 min-h-24 rounded-box !px-4 !py-3 line-clamp-2 group sm:w-full"]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="tracking-widest font-semibold" data-v-2fb6c2f6${_scopeId}>${ssrInterpolate(__props.way === "left" ? "\u4E0A\u4E00\u7BC7" : "\u4E0B\u4E00\u7BC7")}</div><div class="tracking-widest text-base-content group-hover:text-secondary-content" data-v-2fb6c2f6${_scopeId}>${ssrInterpolate(props.data.title)}</div>`);
          } else {
            return [
              createVNode("div", { class: "tracking-widest font-semibold" }, toDisplayString(__props.way === "left" ? "\u4E0A\u4E00\u7BC7" : "\u4E0B\u4E00\u7BC7"), 1),
              createVNode("div", { class: "tracking-widest text-base-content group-hover:text-secondary-content" }, toDisplayString(props.data.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SurroundArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2fb6c2f6"]]);
const _sfc_main = {
  __name: "Landscape",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-base-200 rounded-box py-8 shadow px-24 md:px-16" }, _attrs))} data-v-45fdf281><div class="flex justify-center items-center gap-8 w-full" data-v-45fdf281><div class="aspect-square h-fit overflow-hidden w-4/12" data-v-45fdf281><img${ssrRenderAttr("src", unref(Profile))} alt="\u718A\u9014" class="max-h-48" data-v-45fdf281></div><div class="w-8/12 flex flex-col gap-2" data-v-45fdf281><h3 data-v-45fdf281>\u74DC\u718A</h3><p data-v-45fdf281>\u52AA\u529B\u5B78\u7FD2 Nuxt \u4E2D\u2026\u2026</p><div class="flex gap-1" data-v-45fdf281>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        class: "box-item",
        content: "Github",
        placement: "bottom",
        effect: "customized",
        "hide-after": 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://github.com/wenyanlin" class="btn btn-icon" target="_blank" data-v-45fdf281${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Github), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://github.com/wenyanlin",
                class: "btn btn-icon",
                target: "_blank"
              }, [
                createVNode(unref(Github), { class: "w-6 h-6" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_tooltip, {
        class: "box-item",
        content: "Youtube",
        placement: "bottom",
        effect: "customized",
        "hide-after": 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://www.youtube.com/c/SimsEvelyn" class="btn btn-icon" target="_blank" data-v-45fdf281${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Youtube), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://www.youtube.com/c/SimsEvelyn",
                class: "btn btn-icon",
                target: "_blank"
              }, [
                createVNode(unref(Youtube), { class: "w-6 h-6" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_el_tooltip, {
        class: "box-item",
        content: "RSS",
        placement: "bottom",
        effect: "customized",
        "hide-after": 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://bearune.com/rss.xml" class="btn btn-icon" target="_blank" data-v-45fdf281${_scopeId}>`);
            _push2(ssrRenderComponent(unref(RSS), { class: "w-6 h-6" }, null, _parent2, _scopeId));
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", {
                href: "https://bearune.com/rss.xml",
                class: "btn btn-icon",
                target: "_blank"
              }, [
                createVNode(unref(RSS), { class: "w-6 h-6" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Landscape.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45fdf281"]]);
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  class: "feather feather-facebook",
  viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }, null, -1)
  ]));
}
const Facebook = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  class: "feather feather-link",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }, null, -1),
    createElementVNode("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }, null, -1)
  ]));
}
const Link = { render };
const keysOf = (arr) => Object.keys(arr);
const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const mutable = (val) => val;
const messageTypes = ["success", "info", "warning", "error"];
const messageDefaults = mutable({
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1,
  appendTo: void 0
});
buildProps({
  customClass: {
    type: String,
    default: messageDefaults.customClass
  },
  center: {
    type: Boolean,
    default: messageDefaults.center
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: messageDefaults.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: messageDefaults.duration
  },
  icon: {
    type: iconPropType,
    default: messageDefaults.icon
  },
  id: {
    type: String,
    default: messageDefaults.id
  },
  message: {
    type: definePropType([
      String,
      Object,
      Function
    ]),
    default: messageDefaults.message
  },
  onClose: {
    type: definePropType(Function),
    default: messageDefaults.onClose
  },
  showClose: {
    type: Boolean,
    default: messageDefaults.showClose
  },
  type: {
    type: String,
    values: messageTypes,
    default: messageDefaults.type
  },
  plain: {
    type: Boolean,
    default: messageDefaults.plain
  },
  offset: {
    type: Number,
    default: messageDefaults.offset
  },
  zIndex: {
    type: Number,
    default: messageDefaults.zIndex
  },
  grouping: {
    type: Boolean,
    default: messageDefaults.grouping
  },
  repeatNum: {
    type: Number,
    default: messageDefaults.repeatNum
  }
});
const instances = shallowReactive([]);
const configProviderContextKey = Symbol();
const localeContextKey = Symbol("localeContextKey");
const componentSizes = ["", "default", "small", "large"];
const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const SIZE_INJECTION_KEY = Symbol("size");
const emptyValuesContextKey = Symbol("emptyValuesContextKey");
const useEmptyValuesProps = buildProps({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (val) => isFunction(val) ? !val() : !val
  }
});
const globalConfig = ref();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = getCurrentInstance() ? inject(configProviderContextKey, globalConfig) : globalConfig;
  {
    return config;
  }
}
const provideGlobalConfig = (config, app, global = false) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = void 0) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  provideFn(localeContextKey, computed(() => context.value.locale));
  provideFn(namespaceContextKey, computed(() => context.value.namespace));
  provideFn(zIndexContextKey, computed(() => context.value.zIndex));
  provideFn(SIZE_INJECTION_KEY, {
    size: computed(() => context.value.size || "")
  });
  provideFn(emptyValuesContextKey, computed(() => ({
    emptyValues: context.value.emptyValues,
    valueOnClear: context.value.valueOnClear
  })));
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = b[key] !== void 0 ? b[key] : a[key];
  }
  return obj;
};
const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true
  },
  locale: {
    type: definePropType(Object)
  },
  size: useSizeProp,
  button: {
    type: definePropType(Object)
  },
  experimentalFeatures: {
    type: definePropType(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: true
  },
  message: {
    type: definePropType(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...useEmptyValuesProps
});
const messageConfig = {};
defineComponent({
  name: "ElConfigProvider",
  props: configProviderProps,
  setup(props, { slots }) {
    watch(() => props.message, (val) => {
      Object.assign(messageConfig, val != null ? val : {});
    }, { immediate: true, deep: true });
    const config = provideGlobalConfig(props);
    return () => renderSlot(slots, "default", { config: config == null ? void 0 : config.value });
  }
});
const normalizeOptions = (params) => {
  const options = !params || isString(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = (void 0).body;
  } else if (isString(normalized.appendTo)) {
    let appendTo = (void 0).querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      debugWarn("ElMessage", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = (void 0).body;
    }
    normalized.appendTo = appendTo;
  }
  if (isBoolean(messageConfig.grouping) && !normalized.grouping) {
    normalized.grouping = messageConfig.grouping;
  }
  if (isNumber(messageConfig.duration) && normalized.duration === 3e3) {
    normalized.duration = messageConfig.duration;
  }
  if (isNumber(messageConfig.offset) && normalized.offset === 16) {
    normalized.offset = messageConfig.offset;
  }
  if (isBoolean(messageConfig.showClose) && !normalized.showClose) {
    normalized.showClose = messageConfig.showClose;
  }
  return normalized;
};
const message = (options = {}, context) => {
  return { close: () => void 0 };
};
messageTypes.forEach((type) => {
  message[type] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type });
  };
});
function closeAll(type) {
  for (const instance of instances) {
    if (!type || type === instance.props.type) {
      instance.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;
const ElMessage = withInstallFunction(message, "$message");

export { ElMessage as E, Facebook as F, Link as L, __nuxt_component_6 as _, __nuxt_component_7 as a };
//# sourceMappingURL=index-6h9JKX4I.mjs.map
