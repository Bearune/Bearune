import { useSSRContext, shallowRef, mergeProps, createVNode, resolveDynamicComponent, unref } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderVNode, ssrRenderSlot } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "IconTextCard",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: "calendar"
      // 默認圖標
    }
  },
  setup(__props) {
    const iconComponent = shallowRef(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-2 select-none" }, _attrs))} data-v-719f6b06>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(iconComponent)), { class: "w-6 h-fit" }, null), _parent);
      _push(`<span data-v-719f6b06>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/IconTextCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-719f6b06"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=IconTextCard-BRb_DOd-.mjs.map
