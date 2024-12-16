import { _ as __nuxt_component_0 } from './IconTextCard-BRb_DOd-.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-sCOWmU--.mjs';
import { withAsyncContext, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, f as useRoute } from './server.mjs';
import { u as useAsyncData } from './asyncData-C75XR2ok.mjs';
import { q as queryContent } from './query-BfItlduj.mjs';
import 'file://C:/bearuneBlog/node_modules/ufo/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/bearuneBlog/node_modules/h3/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unist-util-visit/index.js';
import 'file://C:/bearuneBlog/node_modules/hast-util-to-string/index.js';
import 'file://C:/bearuneBlog/node_modules/destr/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/hookable/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/bearuneBlog/node_modules/defu/dist/defu.mjs';
import 'file://C:/bearuneBlog/node_modules/klona/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/scule/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/radix3/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unenv/runtime/npm/consola.mjs';
import 'file://C:/bearuneBlog/node_modules/devalue/index.js';
import 'file://C:/bearuneBlog/node_modules/unstorage/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/bearuneBlog/node_modules/@unocss/core/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/@unocss/preset-wind/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/ohash/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/@unhead/schema-org/dist/index.mjs';
import 'fs';
import 'file://C:/bearuneBlog/node_modules/crosspath/dist/esm/index.js';
import 'file://C:/bearuneBlog/node_modules/image-size/dist/index.js';
import 'file://C:/bearuneBlog/node_modules/debounce/index.js';
import 'file://C:/bearuneBlog/node_modules/unstorage/drivers/github.mjs';
import 'file://C:/bearuneBlog/node_modules/unstorage/drivers/fs.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/bearuneBlog/node_modules/pathe/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unified/index.js';
import 'file://C:/bearuneBlog/node_modules/mdast-util-to-string/index.js';
import 'file://C:/bearuneBlog/node_modules/micromark/index.js';
import 'file://C:/bearuneBlog/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/bearuneBlog/node_modules/micromark-util-character/index.js';
import 'file://C:/bearuneBlog/node_modules/micromark-util-chunked/index.js';
import 'file://C:/bearuneBlog/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/bearuneBlog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/bearuneBlog/node_modules/slugify/slugify.js';
import 'file://C:/bearuneBlog/node_modules/remark-parse/index.js';
import 'file://C:/bearuneBlog/node_modules/remark-rehype/index.js';
import 'file://C:/bearuneBlog/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/remark-gfm/index.js';
import 'file://C:/bearuneBlog/node_modules/rehype-external-links/index.js';
import 'file://C:/bearuneBlog/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/bearuneBlog/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/bearuneBlog/node_modules/rehype-raw/index.js';
import 'file://C:/bearuneBlog/node_modules/detab/index.js';
import 'file://C:/bearuneBlog/node_modules/github-slugger/index.js';
import 'file:///C:/bearuneBlog/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/bearuneBlog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/bearuneBlog/node_modules/nuxt-site-config/dist/urls.mjs';
import 'file://C:/bearuneBlog/node_modules/unctx/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/pinia/dist/pinia.prod.cjs';
import 'file://C:/bearuneBlog/node_modules/unhead/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/bearuneBlog/node_modules/@unhead/addons/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/@unhead/schema-org/dist/vue.mjs';
import 'file://C:/bearuneBlog/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import './preview-CGv9_g9X.mjs';
import 'file://C:/bearuneBlog/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = {
  __name: "Anchor",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const category = route.path.includes("/articles") ? "articles" : route.path;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(category, () => queryContent(route.fullPath).findOne(), "$4E35uGK2tP")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconTextCard = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-96 w-fit h-fit bg-base-200 border border-base-400 rounded-box py-5 px-4 hidden flex-col gap-2 text-base mb-8 lg:flex sm:w-full sm:min-w-full sm:text-lg" }, _attrs))} data-v-dffaa539><div class="flex justify-start" data-v-dffaa539>`);
      _push(ssrRenderComponent(_component_IconTextCard, {
        icon: "align-right",
        style: { "--tw-bg-opacity": "1" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u76EE\u9304`);
          } else {
            return [
              createTextVNode("\u76EE\u9304")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div id="anchorArea" class="relative text-gray-500 dark:text-slate-300" data-v-dffaa539>`);
      if (unref(data) && unref(data).body && unref(data).body.toc && Array.isArray(unref(data).body.toc.links)) {
        _push(`<ol data-v-dffaa539><!--[-->`);
        ssrRenderList(unref(data).body.toc.links, (anchor) => {
          _push(`<li class="pl-2 pt-2" data-v-dffaa539>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "anchorItem",
            to: `#${anchor.id || ""}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(anchor.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(anchor.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (anchor.children) {
            _push(`<ol data-v-dffaa539><!--[-->`);
            ssrRenderList(anchor.children, (anchorChild) => {
              _push(`<li class="pl-2 pt-2 line-clamp-1" data-v-dffaa539>`);
              _push(ssrRenderComponent(_component_NuxtLink, {
                class: "anchorItem",
                to: `#${anchorChild.id || ""}`
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(anchorChild.text)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(anchorChild.text), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</li>`);
            });
            _push(`<!--]--></ol>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ol>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Anchor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Anchor = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dffaa539"]]);

export { Anchor as default };
//# sourceMappingURL=Anchor-C-JOtrFr.mjs.map
