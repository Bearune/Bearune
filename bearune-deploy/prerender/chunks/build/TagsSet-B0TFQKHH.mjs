import { e as buildAssetsURL } from '../_/nitro.mjs';
import { G as Github, u as useTagsStore, E as ElTooltip } from './tags-BANbHccD.mjs';
import { useSSRContext, mergeModels, useModel, mergeProps, withCtx, renderSlot, unref, createVNode, withAsyncContext, createTextVNode, toDisplayString, openBlock, createElementBlock, createElementVNode } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-sCOWmU--.mjs';

const _sfc_main$2 = {
  __name: "TagCard",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    tag: { type: String, default: "" },
    path: { type: String, default: "" }
  }, {
    "modelValue": { type: Boolean, default: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const checked = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (__props.tag) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: `${__props.path}?tags=${__props.tag || ""}`,
          class: "badge badge-secondary badge-outline text-sm"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<label${ssrRenderAttrs(mergeProps({ class: "badge badge-secondary badge-outline text-sm" }, _attrs))} data-v-08d84312><input${ssrIncludeBooleanAttr(Array.isArray(checked.value) ? ssrLooseContain(checked.value, null) : checked.value) ? " checked" : ""} type="checkbox" data-v-08d84312>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</label>`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-08d84312"]]);
const Profile = "" + buildAssetsURL("profile.D9ydHZ4u.webp");
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  class: "feather feather-rss",
  viewBox: "0 0 24 24"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" }, null, -1),
    createElementVNode("circle", {
      cx: "5",
      cy: "19",
      r: "1"
    }, null, -1)
  ]));
}
const RSS = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "40",
  height: "40",
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "1.5",
  class: "feather feather-youtube",
  viewBox: "0 0 24 24"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createElementVNode("path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" }, null, -1),
    createElementVNode("path", { d: "m9.75 15.02 5.75-3.27-5.75-3.27v6.54z" }, null, -1)
  ]));
}
const Youtube = { render };
const _sfc_main$1 = {
  __name: "Portrait",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_tooltip = ElTooltip;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-base-200 rounded-box p-8 shadow" }, _attrs))} data-v-d8241c77><div class="flex flex-col justify-center items-center gap-4 w-full" data-v-d8241c77><div class="w-full flex flex-col items-center gap-2" data-v-d8241c77><h2 class="sidebar-title" data-v-d8241c77>\u95DC\u65BC\u6211</h2></div><div class="aspect-square w-fit overflow-hidden" data-v-d8241c77><img${ssrRenderAttr("src", unref(Profile))} alt="\u718A\u9014" class="max-w-48" data-v-d8241c77></div><div class="w-full flex flex-col items-center gap-2" data-v-d8241c77><h3 data-v-d8241c77>\u74DC\u718A</h3><p data-v-d8241c77>\u52AA\u529B\u5B78\u7FD2 Nuxt \u4E2D\u2026\u2026</p><div class="flex gap-1" data-v-d8241c77>`);
      _push(ssrRenderComponent(_component_el_tooltip, {
        class: "box-item",
        content: "Github",
        placement: "bottom",
        effect: "customized",
        "hide-after": 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a href="https://github.com/wenyanlin" class="btn btn-icon" target="_blank" data-v-d8241c77${_scopeId}>`);
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
            _push2(`<a href="https://www.youtube.com/c/SimsEvelyn" class="btn btn-icon" target="_blank" data-v-d8241c77${_scopeId}>`);
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
            _push2(`<a href="https://bearune.com/rss.xml" class="btn btn-icon" target="_blank" data-v-d8241c77${_scopeId}>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/profile/Portrait.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d8241c77"]]);
const _sfc_main = {
  __name: "TagsSet",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const tagsStore = useTagsStore();
    [__temp, __restore] = withAsyncContext(() => tagsStore.fetchTags("articles")), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TagCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 flex flex-wrap gap-2" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(tagsStore).tags.find((item) => item.path === "articles").tags, (tag) => {
        _push(ssrRenderComponent(_component_TagCard, {
          key: tag,
          tag,
          path: "/articles",
          class: "badge-primary"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` #${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode(" #" + toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TagsSet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { Profile as P, RSS as R, Youtube as Y, __nuxt_component_1 as _, __nuxt_component_8 as a, _sfc_main as b };
//# sourceMappingURL=TagsSet-B0TFQKHH.mjs.map
