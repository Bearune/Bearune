import { E as ElTooltip } from './tags-BANbHccD.mjs';
import { computed, useSSRContext, mergeProps, unref, withCtx, renderSlot } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { defineStore } from 'file://C:/bearuneBlog/node_modules/pinia/dist/pinia.prod.cjs';
import { d as useNuxtApp } from './server.mjs';

const useDevice = () => useNuxtApp().$device;
const useDeviceStore = defineStore("device", () => {
  const device = useDevice();
  const isMobile = computed(() => device.isMobile);
  const isTablet = computed(() => device.isTablet);
  const isDesktop = computed(() => device.isDesktop);
  return {
    device,
    isMobile,
    isTablet,
    isDesktop
  };
});
const _sfc_main = {
  __name: "ToolTip",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const deviceStore = useDeviceStore();
    const { isDesktop } = deviceStore;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      _push(ssrRenderComponent(_component_el_tooltip, mergeProps({
        class: "box-item",
        content: props.content,
        placement: "bottom",
        effect: "customized",
        "hide-after": 0,
        disabled: unref(isDesktop) ? false : true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ToolTip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ToolTip-Hsh188Ac.mjs.map
