import { _ as __nuxt_component_0 } from './nuxt-link-sCOWmU--.mjs';
import { _ as __nuxt_component_1 } from './TagsSet-B0TFQKHH.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  __name: "Medium",
  __ssrInlineRender: true,
  props: { "data": { type: Object, default: () => {
  } }, "tags": { type: Array, default: () => [] } },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_TagCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card flex min-h-36 lg:card-side bg-base-100 md:flex-col" }, _attrs))} data-v-4b6a1aa2><div class="overflow-hidden rounded-box w-1/3 aspect-video flex justify-center items-center bg-base-200 h-fit md:w-full" data-v-4b6a1aa2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.data._path,
        class: "no-style-a block w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<figure class="aspect-video overflow-hidden flex justify-center items-center" data-v-4b6a1aa2${_scopeId}><img${ssrRenderAttr("src", props.data.image ? props.data.image : "https://picsum.photos/1600/1600")}${ssrRenderAttr("alt", `\u9810\u89BD\u5716-${props.data.title}`)} data-v-4b6a1aa2${_scopeId}></figure>`);
          } else {
            return [
              createVNode("figure", { class: "aspect-video overflow-hidden flex justify-center items-center" }, [
                createVNode("img", {
                  src: props.data.image ? props.data.image : "https://picsum.photos/1600/1600",
                  alt: `\u9810\u89BD\u5716-${props.data.title}`
                }, null, 8, ["src", "alt"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col justify-between gap-2 w-2/3 py-1 pl-4 md:w-full md:pl-0 sm:px-2" data-v-4b6a1aa2><div data-v-4b6a1aa2><div class="text-primary line-clamp-1" data-v-4b6a1aa2>${ssrInterpolate(new Date(props.data.date).toISOString().slice(0, 10))}</div><h2 class="text-xl font-semibold line-clamp-1 sm:line-clamp-2" data-v-4b6a1aa2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.data._path,
        class: "no-style-a"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.data.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.data.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</h2><p class="grow-0 opacity-70 line-clamp-2" data-v-4b6a1aa2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: props.data._path,
        class: "no-style-a"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(props.data.description)}`);
          } else {
            return [
              createTextVNode(toDisplayString(props.data.description), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="flex justify-between items-center" data-v-4b6a1aa2><div class="flex gap-2 flex-wrap" data-v-4b6a1aa2><!--[-->`);
      ssrRenderList(props.data.tags, (tag) => {
        _push(ssrRenderComponent(_component_TagCard, {
          key: tag,
          tag,
          path: "/articles",
          class: { "badge-active": props.tags.find((t) => t.tag === tag) }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`#${ssrInterpolate(tag)}`);
            } else {
              return [
                createTextVNode("#" + toDisplayString(tag), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/articleCard/Medium.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b6a1aa2"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Medium-jvoFFxf0.mjs.map
