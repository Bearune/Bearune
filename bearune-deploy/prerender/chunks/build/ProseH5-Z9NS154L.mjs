import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import { e as useRuntimeConfig } from './server.mjs';
import 'file://C:/bearuneBlog/node_modules/ofetch/dist/node.mjs';
import '../_/nitro.mjs';
import 'file://C:/bearuneBlog/node_modules/h3/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/ufo/dist/index.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH5",
  __ssrInlineRender: true,
  props: {
    id: {}
  },
  setup(__props) {
    const props = __props;
    const { headings } = useRuntimeConfig().public.mdc;
    const generate = computed(() => {
      var _a;
      return props.id && (typeof (headings == null ? void 0 : headings.anchorLinks) === "boolean" && (headings == null ? void 0 : headings.anchorLinks) === true || typeof (headings == null ? void 0 : headings.anchorLinks) === "object" && ((_a = headings == null ? void 0 : headings.anchorLinks) == null ? void 0 : _a.h5));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h5${ssrRenderAttrs(mergeProps({
        id: props.id
      }, _attrs))}>`);
      if (props.id && unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${props.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h5>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseH5.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseH5-Z9NS154L.mjs.map
