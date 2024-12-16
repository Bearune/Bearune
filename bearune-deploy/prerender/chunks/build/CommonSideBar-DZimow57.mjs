import { a as __nuxt_component_8, b as _sfc_main$1 } from './TagsSet-B0TFQKHH.mjs';
import { _ as __nuxt_component_0 } from './Adsbygoogle-BFVwqgX6.mjs';
import { useSSRContext, mergeProps } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ProfilePortrait = __nuxt_component_8;
  const _component_TagsSet = _sfc_main$1;
  const _component_Adsbygoogle = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-8" }, _attrs))}><div>`);
  _push(ssrRenderComponent(_component_ProfilePortrait, null, null, _parent));
  _push(`</div><div><h2 class="sidebar-title">\u6587\u7AE0\u6A19\u7C64</h2>`);
  _push(ssrRenderComponent(_component_TagsSet, null, null, _parent));
  _push(`</div><div><h2 class="sidebar-title">\u8D0A\u52A9-GOOGLE ADS</h2><div class="min-h-96 bg-base-200 mt-4">`);
  _push(ssrRenderComponent(_component_Adsbygoogle, {
    "ad-slot": "4540073945",
    "ad-format": "rspv"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CommonSideBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=CommonSideBar-DZimow57.mjs.map
