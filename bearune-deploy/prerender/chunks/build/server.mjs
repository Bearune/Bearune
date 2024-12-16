import { hasInjectionContext, inject, version, ref, watchEffect, watch, getCurrentInstance, toRef, isRef, defineAsyncComponent, unref, getCurrentScope, onScopeDispose, computed, defineComponent, h, provide, shallowReactive, Suspense, nextTick, Fragment, Transition, shallowRef, readonly, mergeProps, useSSRContext, createApp, effectScope, reactive, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, isReadonly, toRaw, withCtx, isShallow, isReactive, toValue } from 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
import { $fetch } from 'file://C:/bearuneBlog/node_modules/ofetch/dist/node.mjs';
import { x as baseURL } from '../_/nitro.mjs';
import { createHooks } from 'file://C:/bearuneBlog/node_modules/hookable/dist/index.mjs';
import { getContext } from 'file://C:/bearuneBlog/node_modules/unctx/dist/index.mjs';
import { createError as createError$1, sanitizeStatusCode, getRequestHeaders, appendHeader } from 'file://C:/bearuneBlog/node_modules/h3/dist/index.mjs';
import { createPinia, setActivePinia, shouldHydrate } from 'file://C:/bearuneBlog/node_modules/pinia/dist/pinia.prod.cjs';
import defu$1, { defu } from 'file://C:/bearuneBlog/node_modules/defu/dist/defu.mjs';
import { getActiveHead, CapoPlugin } from 'file://C:/bearuneBlog/node_modules/unhead/dist/index.mjs';
import { defineHeadPlugin, composableNames, unpackMeta } from 'file://C:/bearuneBlog/node_modules/@unhead/shared/dist/index.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file://C:/bearuneBlog/node_modules/vue-router/dist/vue-router.node.mjs';
import { toRouteMatcher, createRouter as createRouter$1 } from 'file://C:/bearuneBlog/node_modules/radix3/dist/index.mjs';
import { hasProtocol, isScriptProtocol, joinURL, withQuery, withoutTrailingSlash, parseURL, withoutBase, stringifyQuery, withLeadingSlash, withBase, withTrailingSlash } from 'file://C:/bearuneBlog/node_modules/ufo/dist/index.mjs';
import { InferSeoMetaPlugin } from 'file://C:/bearuneBlog/node_modules/@unhead/addons/dist/index.mjs';
import { titleCase, camelCase } from 'file://C:/bearuneBlog/node_modules/scule/dist/index.mjs';
import { defineWebSite, defineWebPage, SchemaOrgUnheadPlugin } from 'file://C:/bearuneBlog/node_modules/@unhead/schema-org/dist/vue.mjs';
import { parse, stringify } from 'file://C:/bearuneBlog/node_modules/devalue/index.js';
import { isString as isString$1 } from 'file://C:/bearuneBlog/node_modules/@vue/shared/dist/shared.cjs.prod.js';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'file://C:/bearuneBlog/node_modules/vue/server-renderer/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unist-util-visit/index.js';
import 'file://C:/bearuneBlog/node_modules/hast-util-to-string/index.js';
import 'file://C:/bearuneBlog/node_modules/destr/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/bearuneBlog/node_modules/klona/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unenv/runtime/npm/consola.mjs';
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

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appPageTransition = { "name": "page", "mode": "out-in" };
const appLayoutTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const asyncDataDefaults = { "value": null, "errorValue": null, "deep": true };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.14.1592";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref$1(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref$1(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "prerender" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
function useServerHead(input, options = {}) {
  const head = options.head || injectHead();
  delete options.head;
  if (head)
    return head.push(input, { ...options, mode: "server" });
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher2 = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher2.matchAll(url).reverse());
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const ROUTE_KEY_PARENTHESES_RE$1 = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE$1 = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE$1 = /:\w+/g;
const interpolatePath = (route, match) => {
  return match.path.replace(ROUTE_KEY_PARENTHESES_RE$1, "$1").replace(ROUTE_KEY_SYMBOLS_RE$1, "$1").replace(ROUTE_KEY_NORMAL_RE$1, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const _routes = [
  {
    name: "..404",
    path: "/:..404()",
    component: () => import('./_..404_-BaSOBc47.mjs')
  },
  {
    name: "articles-slug",
    path: "/articles/:slug()",
    component: () => import('./_slug_-Bht8UMR2.mjs')
  },
  {
    name: "articles",
    path: "/articles",
    component: () => import('./index-BA2-wbe8.mjs')
  },
  {
    name: "cards-slug",
    path: "/cards/:slug()",
    component: () => import('./_slug_-BlxPHW8u.mjs')
  },
  {
    name: "cards",
    path: "/cards",
    component: () => import('./index-Bwk8mhZt.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-DTk90uOx.mjs')
  },
  {
    name: "privacy-policy-statement",
    path: "/privacy-policy-statement",
    component: () => import('./privacy-policy-statement-DcR9HfEg.mjs')
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from) => {
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestHeaders(include) {
  const event = useRequestEvent();
  const _headers = event ? getRequestHeaders(event) : {};
  {
    return _headers;
  }
}
function prerenderRoutes(path) {
  const paths = toArray(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const _0_siteConfig_jtc2qNDx4l = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a;
    const state = useState("site-config");
    {
      const context = (_a = useRequestEvent()) == null ? void 0 : _a.context;
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = context == null ? void 0 : context.siteConfig.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    let stack = {};
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
{
  reducers.push(["Island", (data) => data && (data == null ? void 0 : data.__nuxt_island)]);
}
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyAds = defineAsyncComponent(() => import('./Ads-mt4tQb2h.mjs').then((r) => r["default"] || r.default || r));
const LazyAnchor = defineAsyncComponent(() => import('./Anchor-C-JOtrFr.mjs').then((r) => r["default"] || r.default || r));
const LazyClient = defineAsyncComponent(() => import('./Client-CisMqavp.mjs').then((r) => r["default"] || r.default || r));
const LazyDetailsBlock = defineAsyncComponent(() => import('./DetailsBlock-ByXaTDr9.mjs').then((r) => r["default"] || r.default || r));
const LazyInfo = defineAsyncComponent(() => import('./Info-CV9OfZ2s.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoActivity = defineAsyncComponent(() => import('./activity-BWiXbJi4.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAirplay = defineAsyncComponent(() => import('./airplay-CdWs68J7.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlertCircle = defineAsyncComponent(() => import('./alert-circle-PSWIFbZM.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlertOctagon = defineAsyncComponent(() => import('./alert-octagon-ClgImbv-.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlertTriangle = defineAsyncComponent(() => import('./alert-triangle-DGR-uR6x.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlignCenter = defineAsyncComponent(() => import('./align-center-C_6Kfra3.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlignJustify = defineAsyncComponent(() => import('./align-justify-DFsrjp-n.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlignLeft = defineAsyncComponent(() => import('./align-left-Bos-7w3j.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAlignRight = defineAsyncComponent(() => import('./align-right-D8Ravbej.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAnchor = defineAsyncComponent(() => import('./anchor-BIeyxFoN.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAperture = defineAsyncComponent(() => import('./aperture-BRnr0ZLs.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArchive = defineAsyncComponent(() => import('./archive-CEsf50dR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowDownCircle = defineAsyncComponent(() => import('./arrow-down-circle-DRwIlxlq.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowDownLeft = defineAsyncComponent(() => import('./arrow-down-left-CyLDqB5F.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowDownRight = defineAsyncComponent(() => import('./arrow-down-right-DDcfWGHG.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowDown = defineAsyncComponent(() => import('./arrow-down-D-lsbJws.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowLeftCircle = defineAsyncComponent(() => import('./arrow-left-circle-CKVsiPzZ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowLeft = defineAsyncComponent(() => import('./arrow-left-DWg-hNUg.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowRightCircle = defineAsyncComponent(() => import('./arrow-right-circle-DmXCh1lr.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowRight = defineAsyncComponent(() => import('./arrow-right-DUV845qv.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowUpCircle = defineAsyncComponent(() => import('./arrow-up-circle-DW8-sTZf.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowUpLeft = defineAsyncComponent(() => import('./arrow-up-left-Be4c3l2v.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowUpRight = defineAsyncComponent(() => import('./arrow-up-right-DmiuMp45.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoArrowUp = defineAsyncComponent(() => import('./arrow-up-BH4PuKws.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAtSign = defineAsyncComponent(() => import('./at-sign-COPC5jsx.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoAward = defineAsyncComponent(() => import('./award-ClHCVeSJ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBarChart2 = defineAsyncComponent(() => import('./bar-chart-2-CAKAlrdP.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBarChart = defineAsyncComponent(() => import('./bar-chart-nKtSfQKG.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBatteryCharging = defineAsyncComponent(() => import('./battery-charging-CSGwd3Rq.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBattery = defineAsyncComponent(() => import('./battery-DLw5HgpB.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBellOff = defineAsyncComponent(() => import('./bell-off-BY0YfbnN.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBell = defineAsyncComponent(() => import('./bell-kb5wi4f9.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBluetooth = defineAsyncComponent(() => import('./bluetooth--tuRez3R.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBold = defineAsyncComponent(() => import('./bold-C0kilZf2.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBookOpen = defineAsyncComponent(() => import('./book-open-gnrc066K.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBook = defineAsyncComponent(() => import('./book-kUzJEkFp.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBookmark = defineAsyncComponent(() => import('./bookmark-DV4VDXqW.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBox = defineAsyncComponent(() => import('./box-BcqU2YRe.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoBriefcase = defineAsyncComponent(() => import('./briefcase-CnSU-sZq.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCalendar = defineAsyncComponent(() => import('./calendar-SccxEPwo.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCameraOff = defineAsyncComponent(() => import('./camera-off-BVV9D9em.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCamera = defineAsyncComponent(() => import('./camera-CerYnlWk.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCast = defineAsyncComponent(() => import('./cast-9OC-_Sil.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCheckCircle = defineAsyncComponent(() => import('./check-circle-CGkFpQri.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCheckSquare = defineAsyncComponent(() => import('./check-square-DnFCntg8.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCheck = defineAsyncComponent(() => import('./check-Ciltwnzw.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronDown = defineAsyncComponent(() => import('./chevron-down-DaAd3nO_.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronLeft = defineAsyncComponent(() => import('./chevron-left-C3NHwLUI.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronRight = defineAsyncComponent(() => import('./chevron-right-yBrXB6ms.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronUp = defineAsyncComponent(() => import('./chevron-up-DngUcn8i.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronsDown = defineAsyncComponent(() => import('./chevrons-down-DM2qBnbU.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronsLeft = defineAsyncComponent(() => import('./chevrons-left-D5vfFdVB.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronsRight = defineAsyncComponent(() => import('./chevrons-right-B07uYEFx.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChevronsUp = defineAsyncComponent(() => import('./chevrons-up-BSRtkOBD.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoChrome = defineAsyncComponent(() => import('./chrome-BhmlHIKH.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCircle = defineAsyncComponent(() => import('./circle-DlhgoEte.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoClipboard = defineAsyncComponent(() => import('./clipboard-DTcGpazx.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoClock = defineAsyncComponent(() => import('./clock-CXHND8dr.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCloudDrizzle = defineAsyncComponent(() => import('./cloud-drizzle-CJKHpaAG.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCloudLightning = defineAsyncComponent(() => import('./cloud-lightning-9jBNSCv0.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCloudOff = defineAsyncComponent(() => import('./cloud-off-m1m7ZPsX.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCloudRain = defineAsyncComponent(() => import('./cloud-rain-BvgV1CRd.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCloudSnow = defineAsyncComponent(() => import('./cloud-snow-Dv_GjQKf.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCloud = defineAsyncComponent(() => import('./cloud-B1lXkgyi.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCode = defineAsyncComponent(() => import('./code-B3E-WlCb.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCodepen = defineAsyncComponent(() => import('./codepen-DBq5qCvt.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCodesandbox = defineAsyncComponent(() => import('./codesandbox-miOJ6X_8.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCoffee = defineAsyncComponent(() => import('./coffee-C9u7gOBW.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoColumns = defineAsyncComponent(() => import('./columns-CmvB3wq0.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCommand = defineAsyncComponent(() => import('./command-BotblG6K.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCompass = defineAsyncComponent(() => import('./compass-C1i5AiJ9.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCopy = defineAsyncComponent(() => import('./copy-BlyX_z8K.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerDownLeft = defineAsyncComponent(() => import('./corner-down-left-CjylDgdG.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerDownRight = defineAsyncComponent(() => import('./corner-down-right-B8eyGo4e.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerLeftDown = defineAsyncComponent(() => import('./corner-left-down-KXOJBaGQ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerLeftUp = defineAsyncComponent(() => import('./corner-left-up-D-gXnFuR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerRightDown = defineAsyncComponent(() => import('./corner-right-down-CwulujwW.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerRightUp = defineAsyncComponent(() => import('./corner-right-up-DjhBTf5U.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerUpLeft = defineAsyncComponent(() => import('./corner-up-left-D7IJUzF5.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCornerUpRight = defineAsyncComponent(() => import('./corner-up-right-fIKvMbJv.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCpu = defineAsyncComponent(() => import('./cpu-DOGPaF3v.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCreditCard = defineAsyncComponent(() => import('./credit-card-OPVfX3M1.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCrop = defineAsyncComponent(() => import('./crop-Qc6Ov3Wm.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoCrosshair = defineAsyncComponent(() => import('./crosshair-Cosv3alM.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDatabase = defineAsyncComponent(() => import('./database-B_tbGDLL.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDelete = defineAsyncComponent(() => import('./delete-BRbdCMEp.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDisc = defineAsyncComponent(() => import('./disc-DRhM0Rdk.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDivideCircle = defineAsyncComponent(() => import('./divide-circle-D01S-zEE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDivideSquare = defineAsyncComponent(() => import('./divide-square-Cxd49Npw.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDivide = defineAsyncComponent(() => import('./divide-cLMxZdQV.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDollarSign = defineAsyncComponent(() => import('./dollar-sign-CBx_T_4h.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDownloadCloud = defineAsyncComponent(() => import('./download-cloud-BB-JKcS_.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDownload = defineAsyncComponent(() => import('./download-B2TVWzAr.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDribbble = defineAsyncComponent(() => import('./dribbble-Eg7T3O9y.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoDroplet = defineAsyncComponent(() => import('./droplet-CAElIHFF.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoEdit2 = defineAsyncComponent(() => import('./edit-2-Y9J6QQ6c.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoEdit3 = defineAsyncComponent(() => import('./edit-3-CJlMTGlN.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoEdit = defineAsyncComponent(() => import('./edit-BElhLkuA.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoExternalLink = defineAsyncComponent(() => import('./external-link-Bj7JDPfv.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoEyeOff = defineAsyncComponent(() => import('./eye-off-DF3aY3hD.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoEye = defineAsyncComponent(() => import('./eye-DOhgdnqR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFacebook = defineAsyncComponent(() => import('./facebook-Dr4z3gOQ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFastForward = defineAsyncComponent(() => import('./fast-forward-CMI-IDL0.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFeather = defineAsyncComponent(() => import('./feather-mEliSL0l.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFigma = defineAsyncComponent(() => import('./figma-BFSh-pE4.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFileMinus = defineAsyncComponent(() => import('./file-minus-DPXVpRB5.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFilePlus = defineAsyncComponent(() => import('./file-plus-DvO97PTA.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFileText = defineAsyncComponent(() => import('./file-text-Qt9WxfIF.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFile = defineAsyncComponent(() => import('./file-BywTLIsE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFilm = defineAsyncComponent(() => import('./film-M0B26X91.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFilter = defineAsyncComponent(() => import('./filter-HVyBoU8V.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFlag = defineAsyncComponent(() => import('./flag-vpMmie4r.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFolderMinus = defineAsyncComponent(() => import('./folder-minus-nc5KU5pw.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFolderPlus = defineAsyncComponent(() => import('./folder-plus-J9oEjEpF.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFolder = defineAsyncComponent(() => import('./folder-D5T93tTn.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFramer = defineAsyncComponent(() => import('./framer-BojflVyL.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoFrown = defineAsyncComponent(() => import('./frown-BDRPGDe3.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGift = defineAsyncComponent(() => import('./gift-BDz0mD-e.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGitBranch = defineAsyncComponent(() => import('./git-branch-WfPN66QJ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGitCommit = defineAsyncComponent(() => import('./git-commit-D6RmxRT7.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGitMerge = defineAsyncComponent(() => import('./git-merge-gJHPPV07.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGitPullRequest = defineAsyncComponent(() => import('./git-pull-request-PGgWIFy3.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGithub = defineAsyncComponent(() => import('./github-DVfWh_3m.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGitlab = defineAsyncComponent(() => import('./gitlab-7iJ0no7R.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGlobe = defineAsyncComponent(() => import('./globe-Cun1msxw.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoGrid = defineAsyncComponent(() => import('./grid-DihZKwt_.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHardDrive = defineAsyncComponent(() => import('./hard-drive-CNEOygQ9.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHash = defineAsyncComponent(() => import('./hash-BVdFjszl.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHeadphones = defineAsyncComponent(() => import('./headphones-DlOk8VOt.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHeart = defineAsyncComponent(() => import('./heart-b8jv7UxH.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHelpCircle = defineAsyncComponent(() => import('./help-circle-B-CTOzk1.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHexagon = defineAsyncComponent(() => import('./hexagon-LvpzS0jH.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoHome = defineAsyncComponent(() => import('./home-DCrlCQYV.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoImage = defineAsyncComponent(() => import('./image-C24jw-KO.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoInbox = defineAsyncComponent(() => import('./inbox-DQvxB0dm.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoInfo = defineAsyncComponent(() => import('./info-CrTZuHjr.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoInstagram = defineAsyncComponent(() => import('./instagram-nezc2Ynh.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoItalic = defineAsyncComponent(() => import('./italic-D_DgQp6g.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoKey = defineAsyncComponent(() => import('./key-DbXiim-2.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLayers = defineAsyncComponent(() => import('./layers-Dy0ObIre.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLayout = defineAsyncComponent(() => import('./layout-DeXBGI65.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLifeBuoy = defineAsyncComponent(() => import('./life-buoy-7Yl4M7hd.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLink2 = defineAsyncComponent(() => import('./link-2-Bb-bVsia.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLink = defineAsyncComponent(() => import('./link-C7XJMJgm.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLinkedin = defineAsyncComponent(() => import('./linkedin-RyDM4yY5.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoList = defineAsyncComponent(() => import('./list-kH857tkG.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLoader = defineAsyncComponent(() => import('./loader-BAB9ZWJR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLock = defineAsyncComponent(() => import('./lock-hx1FJa6y.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLogIn = defineAsyncComponent(() => import('./log-in-CsLOXDf0.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLogOut = defineAsyncComponent(() => import('./log-out-hH2Ki1hS.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLogoDark = defineAsyncComponent(() => import('./logo_dark-OGGJV8bp.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoLogoLight = defineAsyncComponent(() => import('./logo_light-Df4ZxAM8.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMail = defineAsyncComponent(() => import('./mail-BhVmRhWP.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMapPin = defineAsyncComponent(() => import('./map-pin-CJJOn9x3.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMap = defineAsyncComponent(() => import('./map-BcEhHAaW.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMaximize2 = defineAsyncComponent(() => import('./maximize-2-CZVdeDOC.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMaximize = defineAsyncComponent(() => import('./maximize-CpS-mICE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMeh = defineAsyncComponent(() => import('./meh-BcCf63tn.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMenu = defineAsyncComponent(() => import('./menu-49ZDKn3h.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMessageCircle = defineAsyncComponent(() => import('./message-circle-BDIHgOcl.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMessageSquare = defineAsyncComponent(() => import('./message-square-D0x_PP-2.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMicOff = defineAsyncComponent(() => import('./mic-off-BTM3iGjZ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMic = defineAsyncComponent(() => import('./mic-De0v56sK.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMinimize2 = defineAsyncComponent(() => import('./minimize-2-DW_g3Xf8.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMinimize = defineAsyncComponent(() => import('./minimize-D2B4IU4T.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMinusCircle = defineAsyncComponent(() => import('./minus-circle-D81lgMW1.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMinusSquare = defineAsyncComponent(() => import('./minus-square-KtTQFl17.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMinus = defineAsyncComponent(() => import('./minus-BdAB9kj6.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMonitor = defineAsyncComponent(() => import('./monitor-BVWCJnqo.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMoon = defineAsyncComponent(() => import('./moon-CUT66Vq4.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMoreHorizontal = defineAsyncComponent(() => import('./more-horizontal-B7Fkp6qI.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMoreVertical = defineAsyncComponent(() => import('./more-vertical-xOdFZX_b.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMousePointer = defineAsyncComponent(() => import('./mouse-pointer-Do5viVKj.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMove = defineAsyncComponent(() => import('./move-Bji4yB1Z.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoMusic = defineAsyncComponent(() => import('./music-C_UqqQ5r.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoNavigation2 = defineAsyncComponent(() => import('./navigation-2-oJ78jFjD.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoNavigation = defineAsyncComponent(() => import('./navigation-Dk2Rw6Zz.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoOctagon = defineAsyncComponent(() => import('./octagon-BF74qMUR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPackage = defineAsyncComponent(() => import('./package-BrsFz1wN.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPaperclip = defineAsyncComponent(() => import('./paperclip-CzGGszcD.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPauseCircle = defineAsyncComponent(() => import('./pause-circle-CLn_SvPN.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPause = defineAsyncComponent(() => import('./pause-DbMoNmdz.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPenTool = defineAsyncComponent(() => import('./pen-tool-Dwr7lF9Q.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPercent = defineAsyncComponent(() => import('./percent-CXqvho1N.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhoneCall = defineAsyncComponent(() => import('./phone-call-H9CpMH45.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhoneForwarded = defineAsyncComponent(() => import('./phone-forwarded-CQIegZbL.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhoneIncoming = defineAsyncComponent(() => import('./phone-incoming-BBn28zlV.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhoneMissed = defineAsyncComponent(() => import('./phone-missed-CBIrXYGe.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhoneOff = defineAsyncComponent(() => import('./phone-off-Cvcu5jcE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhoneOutgoing = defineAsyncComponent(() => import('./phone-outgoing-xvf9wQr-.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPhone = defineAsyncComponent(() => import('./phone-CJUr9_n9.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPieChart = defineAsyncComponent(() => import('./pie-chart-A_MZLR-J.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPlayCircle = defineAsyncComponent(() => import('./play-circle-6z5CGChW.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPlay = defineAsyncComponent(() => import('./play-MWiqV719.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPlusCircle = defineAsyncComponent(() => import('./plus-circle-CiHjGOL1.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPlusSquare = defineAsyncComponent(() => import('./plus-square-5tFjWx53.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPlus = defineAsyncComponent(() => import('./plus-DWzLJgzo.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPocket = defineAsyncComponent(() => import('./pocket-By6UC1qK.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPower = defineAsyncComponent(() => import('./power-D8GQKDPg.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoPrinter = defineAsyncComponent(() => import('./printer-9m5_DDtI.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoProfileDark = defineAsyncComponent(() => import('./profile_dark-yPzNhZYz.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoProfileLight = defineAsyncComponent(() => import('./profile_light-BF1Bda-b.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoQuotationMarks = defineAsyncComponent(() => import('./quotation-marks-cKZbPxzm.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRadio = defineAsyncComponent(() => import('./radio-Dl6EunTe.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRefreshCcw = defineAsyncComponent(() => import('./refresh-ccw-D0MJsSEN.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRefreshCw = defineAsyncComponent(() => import('./refresh-cw-BWZN0c8S.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRepeat = defineAsyncComponent(() => import('./repeat-BcdrNUvC.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRewind = defineAsyncComponent(() => import('./rewind-BvQk87ma.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRotateCcw = defineAsyncComponent(() => import('./rotate-ccw-BY8PZD4k.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRotateCw = defineAsyncComponent(() => import('./rotate-cw-D1nGlyuP.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoRss = defineAsyncComponent(() => import('./rss-R04DSzTy.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSave = defineAsyncComponent(() => import('./save-B7R0eV4z.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoScissors = defineAsyncComponent(() => import('./scissors-CX42U9z3.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSearch = defineAsyncComponent(() => import('./search-CquhL9hy.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSend = defineAsyncComponent(() => import('./send-DfcZ9GEt.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoServer = defineAsyncComponent(() => import('./server-D_WnJ4S9.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSettings = defineAsyncComponent(() => import('./settings-C-38h_cE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShare2 = defineAsyncComponent(() => import('./share-2-UCLu2oqM.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShare = defineAsyncComponent(() => import('./share-B9RhKzzH.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShieldOff = defineAsyncComponent(() => import('./shield-off-YmhxQPNE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShield = defineAsyncComponent(() => import('./shield-hGcVpLGP.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShoppingBag = defineAsyncComponent(() => import('./shopping-bag-DpxfVxMA.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShoppingCart = defineAsyncComponent(() => import('./shopping-cart-CEwh5M8N.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoShuffle = defineAsyncComponent(() => import('./shuffle-C1gGlJYm.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSidebar = defineAsyncComponent(() => import('./sidebar-Bkonh0gc.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSkipBack = defineAsyncComponent(() => import('./skip-back-CdTyFQBZ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSkipForward = defineAsyncComponent(() => import('./skip-forward-BvJHHOwy.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSlack = defineAsyncComponent(() => import('./slack-D-MRugpQ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSlash = defineAsyncComponent(() => import('./slash-Dj8K3X5S.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSliders = defineAsyncComponent(() => import('./sliders-xBDl5pzO.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSmartphone = defineAsyncComponent(() => import('./smartphone-DSoge9Ru.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSmile = defineAsyncComponent(() => import('./smile-BmuHLHC4.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSpeaker = defineAsyncComponent(() => import('./speaker-DgKT4tCp.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSquare = defineAsyncComponent(() => import('./square-CSyfGoms.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoStar = defineAsyncComponent(() => import('./star-agqc1ULY.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoStopCircle = defineAsyncComponent(() => import('./stop-circle-CAJ4RnW7.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSun = defineAsyncComponent(() => import('./sun-DWd3P2os.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSunrise = defineAsyncComponent(() => import('./sunrise-BUBYJuX0.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoSunset = defineAsyncComponent(() => import('./sunset-DAyWe1pW.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTable = defineAsyncComponent(() => import('./table-CrEliCjC.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTablet = defineAsyncComponent(() => import('./tablet-UXDn8GVR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTag = defineAsyncComponent(() => import('./tag-QGwLE13A.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTarget = defineAsyncComponent(() => import('./target-Dl5tvfzq.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTerminal = defineAsyncComponent(() => import('./terminal-DYr8YQbF.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoThermometer = defineAsyncComponent(() => import('./thermometer-DjH9b4Bs.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoThumbsDown = defineAsyncComponent(() => import('./thumbs-down-CKV_fhrO.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoThumbsUp = defineAsyncComponent(() => import('./thumbs-up-CUJ8vo-b.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoToggleLeft = defineAsyncComponent(() => import('./toggle-left--xybmCHl.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoToggleRight = defineAsyncComponent(() => import('./toggle-right-BWuYE5lD.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTool = defineAsyncComponent(() => import('./tool-Bh7iIHsY.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTrash2 = defineAsyncComponent(() => import('./trash-2-Dd5sTgxz.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTrash = defineAsyncComponent(() => import('./trash-C88rPSIk.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTrello = defineAsyncComponent(() => import('./trello-COATPXp6.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTrendingDown = defineAsyncComponent(() => import('./trending-down-BVa8AppB.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTrendingUp = defineAsyncComponent(() => import('./trending-up-DNfWlwt_.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTriangle = defineAsyncComponent(() => import('./triangle-CO8bjgqc.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTruck = defineAsyncComponent(() => import('./truck-DA2scQ4D.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTv = defineAsyncComponent(() => import('./tv-oTg2_iVH.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTwitch = defineAsyncComponent(() => import('./twitch-B6OxTL24.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoTwitter = defineAsyncComponent(() => import('./twitter-Dd96F9rg.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoType = defineAsyncComponent(() => import('./type-DMhazgqp.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUmbrella = defineAsyncComponent(() => import('./umbrella-iwDYkRK8.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUnderline = defineAsyncComponent(() => import('./underline-BSY4LQfw.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUnlock = defineAsyncComponent(() => import('./unlock-DrzfAQ9W.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUploadCloud = defineAsyncComponent(() => import('./upload-cloud-CiMbnKWQ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUpload = defineAsyncComponent(() => import('./upload-fTsuVJxJ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUserCheck = defineAsyncComponent(() => import('./user-check-D5yJFs-i.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUserMinus = defineAsyncComponent(() => import('./user-minus-vRnfDQPb.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUserPlus = defineAsyncComponent(() => import('./user-plus-xDhGLvKv.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUserX = defineAsyncComponent(() => import('./user-x-DutRx2Vo.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUser = defineAsyncComponent(() => import('./user-DqluPUWq.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoUsers = defineAsyncComponent(() => import('./users-B8pfnkIR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVideoOff = defineAsyncComponent(() => import('./video-off-BEuL_ZbR.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVideo = defineAsyncComponent(() => import('./video-D4cqikIZ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVoicemail = defineAsyncComponent(() => import('./voicemail-DgxlyYRd.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVolume1 = defineAsyncComponent(() => import('./volume-1-CgSL1EFM.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVolume2 = defineAsyncComponent(() => import('./volume-2-CGnFxKsM.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVolumeX = defineAsyncComponent(() => import('./volume-x-DFMEiqWA.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoVolume = defineAsyncComponent(() => import('./volume-lSN31HAO.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoWatch = defineAsyncComponent(() => import('./watch-D4DtudTQ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoWifiOff = defineAsyncComponent(() => import('./wifi-off-DMIlfLPJ.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoWifi = defineAsyncComponent(() => import('./wifi-B-iMrFD2.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoWind = defineAsyncComponent(() => import('./wind-v0c2sfv6.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoXCircle = defineAsyncComponent(() => import('./x-circle-DTs43uj6.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoXOctagon = defineAsyncComponent(() => import('./x-octagon-B30tOGWE.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoXSquare = defineAsyncComponent(() => import('./x-square-C-Fyrrne.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoX = defineAsyncComponent(() => import('./x-DqTgFTmB.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoYoutube = defineAsyncComponent(() => import('./youtube-B0fApSY1.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoZapOff = defineAsyncComponent(() => import('./zap-off-kGGAlTol.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoZap = defineAsyncComponent(() => import('./zap-Wob6LOVV.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoZoomIn = defineAsyncComponent(() => import('./zoom-in-BrTPhnYk.mjs').then((r) => r["default"] || r.default || r));
const LazySvgoZoomOut = defineAsyncComponent(() => import('./zoom-out-BU3bjq0U.mjs').then((r) => r["default"] || r.default || r));
const LazyContentDoc = defineAsyncComponent(() => import('./ContentDoc-BlXdMUPA.mjs').then((r) => r["default"] || r.default || r));
const LazyContentList = defineAsyncComponent(() => import('./ContentList-PPXSxxRs.mjs').then((r) => r["default"] || r.default || r));
const LazyContentNavigation = defineAsyncComponent(() => import('./ContentNavigation-Bol7adub.mjs').then((r) => r["default"] || r.default || r));
const LazyContentQuery = defineAsyncComponent(() => import('./ContentQuery-D5B2HD4_.mjs').then((r) => r["default"] || r.default || r));
const LazyContentRenderer = defineAsyncComponent(() => import('./ContentRenderer-t_mzOmLg.mjs').then((r) => r["default"] || r.default || r));
const LazyContentRendererMarkdown = defineAsyncComponent(() => import('./ContentRendererMarkdown-MJ4ZjC0z.mjs').then((r) => r["default"] || r.default || r));
const LazyContentSlot = defineAsyncComponent(() => import('./ContentSlot-DNhFlZPM.mjs').then((r) => r["default"] || r.default || r));
const LazyDocumentDrivenEmpty = defineAsyncComponent(() => import('./DocumentDrivenEmpty-CVfz7tly.mjs').then((r) => r["default"] || r.default || r));
const LazyDocumentDrivenNotFound = defineAsyncComponent(() => import('./DocumentDrivenNotFound-4pTrsASA.mjs').then((r) => r["default"] || r.default || r));
const LazyMarkdown = defineAsyncComponent(() => import('./Markdown-DRg0F_8k.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCode = defineAsyncComponent(() => import('./ProseCode-xuPxMa16.mjs').then((r) => r["default"] || r.default || r));
const LazyProseCodeInline = defineAsyncComponent(() => import('./ProseCodeInline-CmeVpD2T.mjs').then((r) => r["default"] || r.default || r));
const LazyProsePre = defineAsyncComponent(() => import('./ProsePre-Brs49lSw.mjs').then((r) => r["default"] || r.default || r));
const LazyProseA = defineAsyncComponent(() => import('./ProseA-Coq0Tuea.mjs').then((r) => r["default"] || r.default || r));
const LazyProseBlockquote = defineAsyncComponent(() => import('./ProseBlockquote-DNQcg633.mjs').then((r) => r["default"] || r.default || r));
const LazyProseEm = defineAsyncComponent(() => import('./ProseEm-CBuwUVnq.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH1 = defineAsyncComponent(() => import('./ProseH1-6k2TMmT3.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH2 = defineAsyncComponent(() => import('./ProseH2-De8AgXxk.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH3 = defineAsyncComponent(() => import('./ProseH3-BC6skGT4.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH4 = defineAsyncComponent(() => import('./ProseH4-C4esMcnW.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH5 = defineAsyncComponent(() => import('./ProseH5-Z9NS154L.mjs').then((r) => r["default"] || r.default || r));
const LazyProseH6 = defineAsyncComponent(() => import('./ProseH6-g38lHWVv.mjs').then((r) => r["default"] || r.default || r));
const LazyProseHr = defineAsyncComponent(() => import('./ProseHr-BfuX5MyD.mjs').then((r) => r["default"] || r.default || r));
const LazyProseImg = defineAsyncComponent(() => import('./ProseImg-DAr-RiPi.mjs').then((r) => r["default"] || r.default || r));
const LazyProseLi = defineAsyncComponent(() => import('./ProseLi-DWy9MK1I.mjs').then((r) => r["default"] || r.default || r));
const LazyProseOl = defineAsyncComponent(() => import('./ProseOl-CtcbAGMQ.mjs').then((r) => r["default"] || r.default || r));
const LazyProseP = defineAsyncComponent(() => import('./ProseP-CYKGpOXY.mjs').then((r) => r["default"] || r.default || r));
const LazyProseScript = defineAsyncComponent(() => import('./ProseScript-D0R07iM6.mjs').then((r) => r["default"] || r.default || r));
const LazyProseStrong = defineAsyncComponent(() => import('./ProseStrong-C8I8sj7z.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTable = defineAsyncComponent(() => import('./ProseTable-C9jOFb2x.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTbody = defineAsyncComponent(() => import('./ProseTbody-BxPHWHYH.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTd = defineAsyncComponent(() => import('./ProseTd-CikUcIE5.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTh = defineAsyncComponent(() => import('./ProseTh-BYUsMwsE.mjs').then((r) => r["default"] || r.default || r));
const LazyProseThead = defineAsyncComponent(() => import('./ProseThead-Dgd5k0I-.mjs').then((r) => r["default"] || r.default || r));
const LazyProseTr = defineAsyncComponent(() => import('./ProseTr-DGmy031d.mjs').then((r) => r["default"] || r.default || r));
const LazyProseUl = defineAsyncComponent(() => import('./ProseUl-D0zQdrbQ.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["Ads", LazyAds],
  ["Anchor", LazyAnchor],
  ["Client", LazyClient],
  ["DetailsBlock", LazyDetailsBlock],
  ["Info", LazyInfo],
  ["SvgoActivity", LazySvgoActivity],
  ["SvgoAirplay", LazySvgoAirplay],
  ["SvgoAlertCircle", LazySvgoAlertCircle],
  ["SvgoAlertOctagon", LazySvgoAlertOctagon],
  ["SvgoAlertTriangle", LazySvgoAlertTriangle],
  ["SvgoAlignCenter", LazySvgoAlignCenter],
  ["SvgoAlignJustify", LazySvgoAlignJustify],
  ["SvgoAlignLeft", LazySvgoAlignLeft],
  ["SvgoAlignRight", LazySvgoAlignRight],
  ["SvgoAnchor", LazySvgoAnchor],
  ["SvgoAperture", LazySvgoAperture],
  ["SvgoArchive", LazySvgoArchive],
  ["SvgoArrowDownCircle", LazySvgoArrowDownCircle],
  ["SvgoArrowDownLeft", LazySvgoArrowDownLeft],
  ["SvgoArrowDownRight", LazySvgoArrowDownRight],
  ["SvgoArrowDown", LazySvgoArrowDown],
  ["SvgoArrowLeftCircle", LazySvgoArrowLeftCircle],
  ["SvgoArrowLeft", LazySvgoArrowLeft],
  ["SvgoArrowRightCircle", LazySvgoArrowRightCircle],
  ["SvgoArrowRight", LazySvgoArrowRight],
  ["SvgoArrowUpCircle", LazySvgoArrowUpCircle],
  ["SvgoArrowUpLeft", LazySvgoArrowUpLeft],
  ["SvgoArrowUpRight", LazySvgoArrowUpRight],
  ["SvgoArrowUp", LazySvgoArrowUp],
  ["SvgoAtSign", LazySvgoAtSign],
  ["SvgoAward", LazySvgoAward],
  ["SvgoBarChart2", LazySvgoBarChart2],
  ["SvgoBarChart", LazySvgoBarChart],
  ["SvgoBatteryCharging", LazySvgoBatteryCharging],
  ["SvgoBattery", LazySvgoBattery],
  ["SvgoBellOff", LazySvgoBellOff],
  ["SvgoBell", LazySvgoBell],
  ["SvgoBluetooth", LazySvgoBluetooth],
  ["SvgoBold", LazySvgoBold],
  ["SvgoBookOpen", LazySvgoBookOpen],
  ["SvgoBook", LazySvgoBook],
  ["SvgoBookmark", LazySvgoBookmark],
  ["SvgoBox", LazySvgoBox],
  ["SvgoBriefcase", LazySvgoBriefcase],
  ["SvgoCalendar", LazySvgoCalendar],
  ["SvgoCameraOff", LazySvgoCameraOff],
  ["SvgoCamera", LazySvgoCamera],
  ["SvgoCast", LazySvgoCast],
  ["SvgoCheckCircle", LazySvgoCheckCircle],
  ["SvgoCheckSquare", LazySvgoCheckSquare],
  ["SvgoCheck", LazySvgoCheck],
  ["SvgoChevronDown", LazySvgoChevronDown],
  ["SvgoChevronLeft", LazySvgoChevronLeft],
  ["SvgoChevronRight", LazySvgoChevronRight],
  ["SvgoChevronUp", LazySvgoChevronUp],
  ["SvgoChevronsDown", LazySvgoChevronsDown],
  ["SvgoChevronsLeft", LazySvgoChevronsLeft],
  ["SvgoChevronsRight", LazySvgoChevronsRight],
  ["SvgoChevronsUp", LazySvgoChevronsUp],
  ["SvgoChrome", LazySvgoChrome],
  ["SvgoCircle", LazySvgoCircle],
  ["SvgoClipboard", LazySvgoClipboard],
  ["SvgoClock", LazySvgoClock],
  ["SvgoCloudDrizzle", LazySvgoCloudDrizzle],
  ["SvgoCloudLightning", LazySvgoCloudLightning],
  ["SvgoCloudOff", LazySvgoCloudOff],
  ["SvgoCloudRain", LazySvgoCloudRain],
  ["SvgoCloudSnow", LazySvgoCloudSnow],
  ["SvgoCloud", LazySvgoCloud],
  ["SvgoCode", LazySvgoCode],
  ["SvgoCodepen", LazySvgoCodepen],
  ["SvgoCodesandbox", LazySvgoCodesandbox],
  ["SvgoCoffee", LazySvgoCoffee],
  ["SvgoColumns", LazySvgoColumns],
  ["SvgoCommand", LazySvgoCommand],
  ["SvgoCompass", LazySvgoCompass],
  ["SvgoCopy", LazySvgoCopy],
  ["SvgoCornerDownLeft", LazySvgoCornerDownLeft],
  ["SvgoCornerDownRight", LazySvgoCornerDownRight],
  ["SvgoCornerLeftDown", LazySvgoCornerLeftDown],
  ["SvgoCornerLeftUp", LazySvgoCornerLeftUp],
  ["SvgoCornerRightDown", LazySvgoCornerRightDown],
  ["SvgoCornerRightUp", LazySvgoCornerRightUp],
  ["SvgoCornerUpLeft", LazySvgoCornerUpLeft],
  ["SvgoCornerUpRight", LazySvgoCornerUpRight],
  ["SvgoCpu", LazySvgoCpu],
  ["SvgoCreditCard", LazySvgoCreditCard],
  ["SvgoCrop", LazySvgoCrop],
  ["SvgoCrosshair", LazySvgoCrosshair],
  ["SvgoDatabase", LazySvgoDatabase],
  ["SvgoDelete", LazySvgoDelete],
  ["SvgoDisc", LazySvgoDisc],
  ["SvgoDivideCircle", LazySvgoDivideCircle],
  ["SvgoDivideSquare", LazySvgoDivideSquare],
  ["SvgoDivide", LazySvgoDivide],
  ["SvgoDollarSign", LazySvgoDollarSign],
  ["SvgoDownloadCloud", LazySvgoDownloadCloud],
  ["SvgoDownload", LazySvgoDownload],
  ["SvgoDribbble", LazySvgoDribbble],
  ["SvgoDroplet", LazySvgoDroplet],
  ["SvgoEdit2", LazySvgoEdit2],
  ["SvgoEdit3", LazySvgoEdit3],
  ["SvgoEdit", LazySvgoEdit],
  ["SvgoExternalLink", LazySvgoExternalLink],
  ["SvgoEyeOff", LazySvgoEyeOff],
  ["SvgoEye", LazySvgoEye],
  ["SvgoFacebook", LazySvgoFacebook],
  ["SvgoFastForward", LazySvgoFastForward],
  ["SvgoFeather", LazySvgoFeather],
  ["SvgoFigma", LazySvgoFigma],
  ["SvgoFileMinus", LazySvgoFileMinus],
  ["SvgoFilePlus", LazySvgoFilePlus],
  ["SvgoFileText", LazySvgoFileText],
  ["SvgoFile", LazySvgoFile],
  ["SvgoFilm", LazySvgoFilm],
  ["SvgoFilter", LazySvgoFilter],
  ["SvgoFlag", LazySvgoFlag],
  ["SvgoFolderMinus", LazySvgoFolderMinus],
  ["SvgoFolderPlus", LazySvgoFolderPlus],
  ["SvgoFolder", LazySvgoFolder],
  ["SvgoFramer", LazySvgoFramer],
  ["SvgoFrown", LazySvgoFrown],
  ["SvgoGift", LazySvgoGift],
  ["SvgoGitBranch", LazySvgoGitBranch],
  ["SvgoGitCommit", LazySvgoGitCommit],
  ["SvgoGitMerge", LazySvgoGitMerge],
  ["SvgoGitPullRequest", LazySvgoGitPullRequest],
  ["SvgoGithub", LazySvgoGithub],
  ["SvgoGitlab", LazySvgoGitlab],
  ["SvgoGlobe", LazySvgoGlobe],
  ["SvgoGrid", LazySvgoGrid],
  ["SvgoHardDrive", LazySvgoHardDrive],
  ["SvgoHash", LazySvgoHash],
  ["SvgoHeadphones", LazySvgoHeadphones],
  ["SvgoHeart", LazySvgoHeart],
  ["SvgoHelpCircle", LazySvgoHelpCircle],
  ["SvgoHexagon", LazySvgoHexagon],
  ["SvgoHome", LazySvgoHome],
  ["SvgoImage", LazySvgoImage],
  ["SvgoInbox", LazySvgoInbox],
  ["SvgoInfo", LazySvgoInfo],
  ["SvgoInstagram", LazySvgoInstagram],
  ["SvgoItalic", LazySvgoItalic],
  ["SvgoKey", LazySvgoKey],
  ["SvgoLayers", LazySvgoLayers],
  ["SvgoLayout", LazySvgoLayout],
  ["SvgoLifeBuoy", LazySvgoLifeBuoy],
  ["SvgoLink2", LazySvgoLink2],
  ["SvgoLink", LazySvgoLink],
  ["SvgoLinkedin", LazySvgoLinkedin],
  ["SvgoList", LazySvgoList],
  ["SvgoLoader", LazySvgoLoader],
  ["SvgoLock", LazySvgoLock],
  ["SvgoLogIn", LazySvgoLogIn],
  ["SvgoLogOut", LazySvgoLogOut],
  ["SvgoLogoDark", LazySvgoLogoDark],
  ["SvgoLogoLight", LazySvgoLogoLight],
  ["SvgoMail", LazySvgoMail],
  ["SvgoMapPin", LazySvgoMapPin],
  ["SvgoMap", LazySvgoMap],
  ["SvgoMaximize2", LazySvgoMaximize2],
  ["SvgoMaximize", LazySvgoMaximize],
  ["SvgoMeh", LazySvgoMeh],
  ["SvgoMenu", LazySvgoMenu],
  ["SvgoMessageCircle", LazySvgoMessageCircle],
  ["SvgoMessageSquare", LazySvgoMessageSquare],
  ["SvgoMicOff", LazySvgoMicOff],
  ["SvgoMic", LazySvgoMic],
  ["SvgoMinimize2", LazySvgoMinimize2],
  ["SvgoMinimize", LazySvgoMinimize],
  ["SvgoMinusCircle", LazySvgoMinusCircle],
  ["SvgoMinusSquare", LazySvgoMinusSquare],
  ["SvgoMinus", LazySvgoMinus],
  ["SvgoMonitor", LazySvgoMonitor],
  ["SvgoMoon", LazySvgoMoon],
  ["SvgoMoreHorizontal", LazySvgoMoreHorizontal],
  ["SvgoMoreVertical", LazySvgoMoreVertical],
  ["SvgoMousePointer", LazySvgoMousePointer],
  ["SvgoMove", LazySvgoMove],
  ["SvgoMusic", LazySvgoMusic],
  ["SvgoNavigation2", LazySvgoNavigation2],
  ["SvgoNavigation", LazySvgoNavigation],
  ["SvgoOctagon", LazySvgoOctagon],
  ["SvgoPackage", LazySvgoPackage],
  ["SvgoPaperclip", LazySvgoPaperclip],
  ["SvgoPauseCircle", LazySvgoPauseCircle],
  ["SvgoPause", LazySvgoPause],
  ["SvgoPenTool", LazySvgoPenTool],
  ["SvgoPercent", LazySvgoPercent],
  ["SvgoPhoneCall", LazySvgoPhoneCall],
  ["SvgoPhoneForwarded", LazySvgoPhoneForwarded],
  ["SvgoPhoneIncoming", LazySvgoPhoneIncoming],
  ["SvgoPhoneMissed", LazySvgoPhoneMissed],
  ["SvgoPhoneOff", LazySvgoPhoneOff],
  ["SvgoPhoneOutgoing", LazySvgoPhoneOutgoing],
  ["SvgoPhone", LazySvgoPhone],
  ["SvgoPieChart", LazySvgoPieChart],
  ["SvgoPlayCircle", LazySvgoPlayCircle],
  ["SvgoPlay", LazySvgoPlay],
  ["SvgoPlusCircle", LazySvgoPlusCircle],
  ["SvgoPlusSquare", LazySvgoPlusSquare],
  ["SvgoPlus", LazySvgoPlus],
  ["SvgoPocket", LazySvgoPocket],
  ["SvgoPower", LazySvgoPower],
  ["SvgoPrinter", LazySvgoPrinter],
  ["SvgoProfileDark", LazySvgoProfileDark],
  ["SvgoProfileLight", LazySvgoProfileLight],
  ["SvgoQuotationMarks", LazySvgoQuotationMarks],
  ["SvgoRadio", LazySvgoRadio],
  ["SvgoRefreshCcw", LazySvgoRefreshCcw],
  ["SvgoRefreshCw", LazySvgoRefreshCw],
  ["SvgoRepeat", LazySvgoRepeat],
  ["SvgoRewind", LazySvgoRewind],
  ["SvgoRotateCcw", LazySvgoRotateCcw],
  ["SvgoRotateCw", LazySvgoRotateCw],
  ["SvgoRss", LazySvgoRss],
  ["SvgoSave", LazySvgoSave],
  ["SvgoScissors", LazySvgoScissors],
  ["SvgoSearch", LazySvgoSearch],
  ["SvgoSend", LazySvgoSend],
  ["SvgoServer", LazySvgoServer],
  ["SvgoSettings", LazySvgoSettings],
  ["SvgoShare2", LazySvgoShare2],
  ["SvgoShare", LazySvgoShare],
  ["SvgoShieldOff", LazySvgoShieldOff],
  ["SvgoShield", LazySvgoShield],
  ["SvgoShoppingBag", LazySvgoShoppingBag],
  ["SvgoShoppingCart", LazySvgoShoppingCart],
  ["SvgoShuffle", LazySvgoShuffle],
  ["SvgoSidebar", LazySvgoSidebar],
  ["SvgoSkipBack", LazySvgoSkipBack],
  ["SvgoSkipForward", LazySvgoSkipForward],
  ["SvgoSlack", LazySvgoSlack],
  ["SvgoSlash", LazySvgoSlash],
  ["SvgoSliders", LazySvgoSliders],
  ["SvgoSmartphone", LazySvgoSmartphone],
  ["SvgoSmile", LazySvgoSmile],
  ["SvgoSpeaker", LazySvgoSpeaker],
  ["SvgoSquare", LazySvgoSquare],
  ["SvgoStar", LazySvgoStar],
  ["SvgoStopCircle", LazySvgoStopCircle],
  ["SvgoSun", LazySvgoSun],
  ["SvgoSunrise", LazySvgoSunrise],
  ["SvgoSunset", LazySvgoSunset],
  ["SvgoTable", LazySvgoTable],
  ["SvgoTablet", LazySvgoTablet],
  ["SvgoTag", LazySvgoTag],
  ["SvgoTarget", LazySvgoTarget],
  ["SvgoTerminal", LazySvgoTerminal],
  ["SvgoThermometer", LazySvgoThermometer],
  ["SvgoThumbsDown", LazySvgoThumbsDown],
  ["SvgoThumbsUp", LazySvgoThumbsUp],
  ["SvgoToggleLeft", LazySvgoToggleLeft],
  ["SvgoToggleRight", LazySvgoToggleRight],
  ["SvgoTool", LazySvgoTool],
  ["SvgoTrash2", LazySvgoTrash2],
  ["SvgoTrash", LazySvgoTrash],
  ["SvgoTrello", LazySvgoTrello],
  ["SvgoTrendingDown", LazySvgoTrendingDown],
  ["SvgoTrendingUp", LazySvgoTrendingUp],
  ["SvgoTriangle", LazySvgoTriangle],
  ["SvgoTruck", LazySvgoTruck],
  ["SvgoTv", LazySvgoTv],
  ["SvgoTwitch", LazySvgoTwitch],
  ["SvgoTwitter", LazySvgoTwitter],
  ["SvgoType", LazySvgoType],
  ["SvgoUmbrella", LazySvgoUmbrella],
  ["SvgoUnderline", LazySvgoUnderline],
  ["SvgoUnlock", LazySvgoUnlock],
  ["SvgoUploadCloud", LazySvgoUploadCloud],
  ["SvgoUpload", LazySvgoUpload],
  ["SvgoUserCheck", LazySvgoUserCheck],
  ["SvgoUserMinus", LazySvgoUserMinus],
  ["SvgoUserPlus", LazySvgoUserPlus],
  ["SvgoUserX", LazySvgoUserX],
  ["SvgoUser", LazySvgoUser],
  ["SvgoUsers", LazySvgoUsers],
  ["SvgoVideoOff", LazySvgoVideoOff],
  ["SvgoVideo", LazySvgoVideo],
  ["SvgoVoicemail", LazySvgoVoicemail],
  ["SvgoVolume1", LazySvgoVolume1],
  ["SvgoVolume2", LazySvgoVolume2],
  ["SvgoVolumeX", LazySvgoVolumeX],
  ["SvgoVolume", LazySvgoVolume],
  ["SvgoWatch", LazySvgoWatch],
  ["SvgoWifiOff", LazySvgoWifiOff],
  ["SvgoWifi", LazySvgoWifi],
  ["SvgoWind", LazySvgoWind],
  ["SvgoXCircle", LazySvgoXCircle],
  ["SvgoXOctagon", LazySvgoXOctagon],
  ["SvgoXSquare", LazySvgoXSquare],
  ["SvgoX", LazySvgoX],
  ["SvgoYoutube", LazySvgoYoutube],
  ["SvgoZapOff", LazySvgoZapOff],
  ["SvgoZap", LazySvgoZap],
  ["SvgoZoomIn", LazySvgoZoomIn],
  ["SvgoZoomOut", LazySvgoZoomOut],
  ["ContentDoc", LazyContentDoc],
  ["ContentList", LazyContentList],
  ["ContentNavigation", LazyContentNavigation],
  ["ContentQuery", LazyContentQuery],
  ["ContentRenderer", LazyContentRenderer],
  ["ContentRendererMarkdown", LazyContentRendererMarkdown],
  ["MDCSlot", LazyContentSlot],
  ["DocumentDrivenEmpty", LazyDocumentDrivenEmpty],
  ["DocumentDrivenNotFound", LazyDocumentDrivenNotFound],
  ["Markdown", LazyMarkdown],
  ["ProseCode", LazyProseCode],
  ["ProseCodeInline", LazyProseCodeInline],
  ["ProsePre", LazyProsePre],
  ["ProseA", LazyProseA],
  ["ProseBlockquote", LazyProseBlockquote],
  ["ProseEm", LazyProseEm],
  ["ProseH1", LazyProseH1],
  ["ProseH2", LazyProseH2],
  ["ProseH3", LazyProseH3],
  ["ProseH4", LazyProseH4],
  ["ProseH5", LazyProseH5],
  ["ProseH6", LazyProseH6],
  ["ProseHr", LazyProseHr],
  ["ProseImg", LazyProseImg],
  ["ProseLi", LazyProseLi],
  ["ProseOl", LazyProseOl],
  ["ProseP", LazyProseP],
  ["ProseScript", LazyProseScript],
  ["ProseStrong", LazyProseStrong],
  ["ProseTable", LazyProseTable],
  ["ProseTbody", LazyProseTbody],
  ["ProseTd", LazyProseTd],
  ["ProseTh", LazyProseTh],
  ["ProseThead", LazyProseThead],
  ["ProseTr", LazyProseTr],
  ["ProseUl", LazyProseUl]
];
const components_plugin_etk2rclpTq = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const REGEX_CRAWLER = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/);
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
function isMobile(userAgent) {
  return REGEX_MOBILE1.test(userAgent) || REGEX_MOBILE2.test(userAgent.slice(0, 4));
}
function isMobileOrTablet(userAgent) {
  return REGEX_MOBILE_OR_TABLET1.test(userAgent) || REGEX_MOBILE_OR_TABLET2.test(userAgent.slice(0, 4));
}
function isIos(userAgent) {
  return /iPad|iPhone|iPod/.test(userAgent);
}
function isAndroid(userAgent) {
  return /android/i.test(userAgent);
}
function isWindows(userAgent) {
  return /Windows/.test(userAgent);
}
function isMacOS(userAgent) {
  return /Mac OS X/.test(userAgent);
}
const browsers = [
  { name: "Samsung", regex: /SamsungBrowser/i },
  { name: "Edge", regex: /edg(?:[ea]|ios)?\//i },
  { name: "Firefox", regex: /firefox|iceweasel|fxios/i },
  { name: "Chrome", regex: /chrome|crios|crmo/i },
  { name: "Safari", regex: /safari|applewebkit/i }
];
function getBrowserName(userAgent) {
  for (const browser of browsers) {
    if (browser.regex.test(userAgent)) {
      return browser.name;
    }
  }
  return "";
}
function generateFlags(userAgent, headers = {}) {
  let mobile = false;
  let mobileOrTablet = false;
  let ios = false;
  let android = false;
  if (userAgent === "Amazon CloudFront") {
    if (headers["cloudfront-is-mobile-viewer"] === "true") {
      mobile = true;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-tablet-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = true;
    }
    if (headers["cloudfront-is-desktop-viewer"] === "true") {
      mobile = false;
      mobileOrTablet = false;
    }
    if (headers["cloudfront-is-ios-viewer"] === "true") {
      ios = true;
    }
    if (headers["cloudfront-is-android-viewer"] === "true") {
      android = true;
    }
  } else if (headers && headers["cf-device-type"]) {
    switch (headers["cf-device-type"]) {
      case "mobile":
        mobile = true;
        mobileOrTablet = true;
        break;
      case "tablet":
        mobile = false;
        mobileOrTablet = true;
        break;
      case "desktop":
        mobile = false;
        mobileOrTablet = false;
        break;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
    android = isAndroid(userAgent);
  }
  const windows = isWindows(userAgent);
  const macOS = isMacOS(userAgent);
  const browserName = getBrowserName(userAgent);
  const isSafari = browserName === "Safari";
  const isFirefox = browserName === "Firefox";
  const isEdge = browserName === "Edge";
  const isChrome = browserName === "Chrome";
  const isSamsung = browserName === "Samsung";
  const isCrawler = REGEX_CRAWLER.test(userAgent);
  return {
    userAgent,
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isAndroid: android,
    isWindows: windows,
    isMacOS: macOS,
    isApple: macOS || ios,
    isDesktopOrTablet: !mobile,
    isSafari,
    isFirefox,
    isEdge,
    isChrome,
    isSamsung,
    isCrawler
  };
}
const plugin_ghbUAjaD3n = /* @__PURE__ */ defineNuxtPlugin(() => {
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const defaultUserAgent = runtimeConfig.public.device.defaultUserAgent;
  let flags;
  {
    const headers = useRequestHeaders();
    const userAgent = headers["user-agent"] || defaultUserAgent;
    flags = reactive(generateFlags(userAgent, headers));
  }
  return {
    provide: {
      device: flags
    }
  };
});
function useSiteConfig(options) {
  var _a;
  let stack;
  stack = (_a = useRequestEvent()) == null ? void 0 : _a.context.siteConfig.get(defu({ resolveRefs: true }, options));
  return stack || {};
}
const siteConfig_JRId4KOeUL = /* @__PURE__ */ defineNuxtPlugin(() => {
  const head = injectHead();
  if (!head)
    return;
  const siteConfig = useSiteConfig();
  const input = {
    meta: [],
    templateParams: {
      site: siteConfig,
      // support legacy
      siteUrl: siteConfig.url,
      siteName: siteConfig.name
    }
  };
  if (siteConfig.separator)
    input.templateParams.separator = siteConfig.separator;
  if (siteConfig.titleSeparator)
    input.templateParams.titleSeparator = siteConfig.titleSeparator;
  if (siteConfig.description) {
    input.templateParams.siteDescription = siteConfig.description;
    input.meta.push(
      {
        name: "description",
        content: "%site.description"
      }
    );
  }
  head.push(input, { tagPriority: 150 });
});
const inferSeoMetaPlugin_JSh5nGhzCz = /* @__PURE__ */ defineNuxtPlugin(() => {
  const head = injectHead();
  if (!head)
    return;
  head.use(InferSeoMetaPlugin());
});
const titles_eoILE7jqvj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-seo:fallback-titles",
  env: {
    islands: false
  },
  setup() {
    const route = useRoute();
    const title = computed(() => {
      var _a, _b;
      if (typeof ((_a = route.meta) == null ? void 0 : _a.title) === "string")
        return (_b = route.meta) == null ? void 0 : _b.title;
      const path = withoutTrailingSlash(route.path || "/");
      const lastSegment = path.split("/").pop();
      return lastSegment ? titleCase(lastSegment) : null;
    });
    const minimalPriority = {
      // give nuxt.config values higher priority
      tagPriority: 101
    };
    useHead({ title: () => title.value }, minimalPriority);
  }
});
function useSchemaOrgConfig() {
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  return defu(runtimeConfig["nuxt-schema-org"], {
    scriptAttributes: {}
  });
}
function useSchemaOrg(input) {
  var _a;
  const config = useSchemaOrgConfig();
  const script = {
    type: "application/ld+json",
    key: "schema-org-graph",
    nodes: input,
    tagPriority: "high",
    ...config.scriptAttributes
  };
  {
    const event = useRequestEvent();
    if (typeof (event == null ? void 0 : event.context.robots) !== "undefined" && !((_a = event.context.robots) == null ? void 0 : _a.indexable)) {
      return;
    }
    return useServerHead({
      script: [script]
    });
  }
}
function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  let origin = withoutTrailingSlash(options.absolute ? options.siteUrl : "");
  if (base !== "/" && origin.endsWith(base)) {
    origin = origin.slice(0, origin.indexOf(base));
  }
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function isPathFile(path) {
  var _a;
  const lastSegment = path.split("/").pop();
  return !!((_a = (lastSegment || path).match(/\.[0-9a-z]+$/i)) == null ? void 0 : _a[0]);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  if (isPathFile($url.pathname))
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}
function useNitroOrigin(e) {
  var _a;
  {
    e = e || useRequestEvent();
    return ((_a = e == null ? void 0 : e.context) == null ? void 0 : _a.siteConfigNitroOrigin) || "";
  }
}
function createSitePathResolver(options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const nuxtBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return (path) => {
    return computed(() => resolveSitePath(unref(path), {
      absolute: unref(options.absolute),
      withBase: unref(options.withBase),
      siteUrl: unref(options.canonical) !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    }));
  };
}
function withSiteUrl(path, options = {}) {
  const siteConfig = useSiteConfig();
  const nitroOrigin = useNitroOrigin();
  const base = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL || "/";
  return computed(() => {
    return resolveSitePath(unref(path), {
      absolute: true,
      siteUrl: unref(options.canonical) !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base,
      withBase: unref(options.withBase)
    });
  });
}
function initPlugin(nuxtApp) {
  const head = injectHead();
  const config = useSchemaOrgConfig();
  const route = useRoute();
  const siteConfig = useSiteConfig();
  const resolvePath = createSitePathResolver({
    absolute: false,
    withBase: true
  });
  const resolveUrl = createSitePathResolver({
    canonical: true,
    absolute: true,
    withBase: true
  });
  const schemaOrg = computed(() => {
    var _a;
    return {
      ...((_a = route.meta) == null ? void 0 : _a.schemaOrg) || {},
      ...siteConfig,
      url: resolveUrl(route.path),
      host: withoutTrailingSlash(siteConfig.url),
      inLanguage: siteConfig.currentLocale || siteConfig.defaultLocale,
      path: resolvePath(route.path)
    };
  });
  head.push({ templateParams: { schemaOrg } });
  head.use(
    SchemaOrgUnheadPlugin({}, async () => {
      const meta = {};
      await nuxtApp.hooks.callHook("schema-org:meta", meta);
      return meta;
    }, {
      minify: config.minify,
      trailingSlash: siteConfig.trailingSlash
    })
  );
}
function maybeAddIdentitySchemaOrg() {
  const config = useSchemaOrgConfig();
  const siteConfig = useSiteConfig();
  if (config.identity || siteConfig.identity) {
    const identity2 = config.identity || siteConfig.identity;
    let identityPayload = {
      name: siteConfig.name,
      url: siteConfig.url
    };
    let identityType;
    if (typeof identity2 !== "string") {
      identityPayload = defu(identity2, identityPayload);
      identityType = identity2.type;
      delete identityPayload.type;
    } else {
      identityType = identity2;
    }
    if (siteConfig.twitter) {
      const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter.slice(1) : siteConfig.twitter;
      identityPayload.sameAs = [
        `https://twitter.com/${id}`
      ];
    }
    identityPayload._resolver = identityPayload._resolver || camelCase(identityType);
    useSchemaOrg([identityPayload]);
  }
}
const defaults_ejC916ejE3 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:defaults",
  dependsOn: [
    "nuxt-schema-org:init"
  ],
  setup() {
    const siteConfig = useSiteConfig();
    useSchemaOrg([
      defineWebSite({
        name: (siteConfig == null ? void 0 : siteConfig.name) || "",
        inLanguage: (siteConfig == null ? void 0 : siteConfig.currentLocale) || "",
        description: (siteConfig == null ? void 0 : siteConfig.description) || ""
      }),
      defineWebPage()
    ]);
    maybeAddIdentitySchemaOrg();
  }
});
const init_8zxuXEdLTw = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-schema-org:init",
  setup(nuxtApp) {
    initPlugin(nuxtApp);
  }
});
const componentNames = [{ "hash": "i0Vxmj8bqg", "pascalName": "BrandedLogo", "kebabName": "branded-logo", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "tBHg51xiAt", "pascalName": "Frame", "kebabName": "frame", "category": "community", "credits": "@arashsheyda <https://github.com/arashsheyda>" }, { "hash": "Sqc3OTP2KQ", "pascalName": "Nuxt", "kebabName": "nuxt", "category": "community", "credits": "NuxtLabs <https://nuxtlabs.com/>" }, { "hash": "ZZYBOVCtCQ", "pascalName": "NuxtSeo", "kebabName": "nuxt-seo", "category": "community", "credits": "Nuxt SEO <https://nuxtseo.com/>" }, { "hash": "q432NYEB0T", "pascalName": "Pergel", "kebabName": "pergel", "category": "community", "credits": "Pergel <https://nuxtlabs.com/>" }, { "hash": "6bQOH7FKu2", "pascalName": "SimpleBlog", "kebabName": "simple-blog", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "wt558K6QyQ", "pascalName": "UnJs", "kebabName": "un-js", "category": "community", "credits": "UnJS <https://unjs.io/>" }, { "hash": "6RdQZcuwZZ", "pascalName": "Wave", "kebabName": "wave", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }, { "hash": "gaB1TrbtTl", "pascalName": "WithEmoji", "kebabName": "with-emoji", "category": "community", "credits": "Full Stack Heroes <https://fullstackheroes.com/>" }];
function isInternalRoute(path) {
  return path.startsWith("/_") || path.startsWith("@");
}
function filterIsOgImageOption(key) {
  const keys = [
    "url",
    "extension",
    "width",
    "height",
    "fonts",
    "alt",
    "props",
    "renderer",
    "html",
    "component",
    "renderer",
    "emojis",
    "_query",
    "satori",
    "resvg",
    "sharp",
    "screenshot",
    "cacheMaxAgeSeconds"
  ];
  return keys.includes(key);
}
function separateProps(options, ignoreKeys = []) {
  options = options || {};
  const _props = defu(options.props, Object.fromEntries(
    Object.entries({ ...options }).filter(([k]) => !filterIsOgImageOption(k) && !ignoreKeys.includes(k))
  ));
  const props = {};
  Object.entries(_props).forEach(([key, val]) => {
    props[key.replace(/-([a-z])/g, (g) => g[1].toUpperCase())] = val;
  });
  return {
    ...Object.fromEntries(
      Object.entries({ ...options }).filter(([k]) => filterIsOgImageOption(k) || ignoreKeys.includes(k))
    ),
    props
  };
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function getExtension(path) {
  path = withoutQuery(path);
  const lastSegment = path.split("/").pop() || path;
  return lastSegment.split(".").pop() || lastSegment;
}
function generateMeta(url, resolvedOptions) {
  let urlExtension = getExtension(url) || resolvedOptions.extension;
  if (urlExtension === "jpg")
    urlExtension = "jpeg";
  const meta = [
    { property: "og:image", content: url },
    { property: "og:image:type", content: `image/${urlExtension}` },
    { name: "twitter:card", content: "summary_large_image" },
    // we don't need this but avoids issue when using useSeoMeta({ twitterImage })
    { name: "twitter:image", content: url },
    { name: "twitter:image:src", content: url }
  ];
  if (resolvedOptions.width) {
    meta.push({ property: "og:image:width", content: resolvedOptions.width });
    meta.push({ name: "twitter:image:width", content: resolvedOptions.width });
  }
  if (resolvedOptions.height) {
    meta.push({ property: "og:image:height", content: resolvedOptions.height });
    meta.push({ name: "twitter:image:height", content: resolvedOptions.height });
  }
  if (resolvedOptions.alt) {
    meta.push({ property: "og:image:alt", content: resolvedOptions.alt });
    meta.push({ name: "twitter:image:alt", content: resolvedOptions.alt });
  }
  return meta;
}
function getOgImagePath(pagePath, _options) {
  const baseURL2 = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
  const options = defu(_options, useOgImageRuntimeConfig().defaults);
  return joinURL("/", baseURL2, `__og-image__/${"static" }`, pagePath, `og.${options.extension}`);
}
function useOgImageRuntimeConfig() {
  return (/* @__PURE__ */ useRuntimeConfig())["nuxt-og-image"];
}
function createOgImageMeta(src, input, resolvedOptions, ssrContext) {
  const _input = separateProps(defu(input, ssrContext._ogImagePayload));
  let url = src || input.url || resolvedOptions.url;
  if (!url)
    return;
  if (input._query && Object.keys(input._query).length && url)
    url = withQuery(url, { _query: input._query });
  const meta = generateMeta(url, resolvedOptions);
  ssrContext._ogImageInstances = ssrContext._ogImageInstances || [];
  const script = [];
  if (src) {
    script.push({
      id: "nuxt-og-image-options",
      type: "application/json",
      processTemplateParams: true,
      innerHTML: () => {
        const payload = resolveUnrefHeadInput(_input);
        if (typeof payload.props.title === "undefined")
          payload.props.title = "%s";
        delete payload.url;
        if (payload._query && Object.keys(payload._query).length === 0) {
          delete payload._query;
        }
        return stringify(payload);
      },
      // we want this to be last in our head
      tagPosition: "bodyClose"
    });
  }
  const instance = useServerHead({
    script,
    meta
  }, {
    tagPriority: 35
  });
  ssrContext._ogImagePayload = _input;
  ssrContext._ogImageInstances.push(instance);
}
function normaliseOptions(_options) {
  var _a;
  const options = { ...unref(_options) };
  if (!options)
    return options;
  if (options.component && componentNames) {
    const originalName = options.component;
    for (const component of componentNames) {
      if (component.pascalName.endsWith(originalName) || component.kebabName.endsWith(originalName)) {
        options.component = component.pascalName;
        break;
      }
    }
  } else if (!options.component) {
    options.component = (_a = componentNames[0]) == null ? void 0 : _a.pascalName;
  }
  return options;
}
function ogImageCanonicalUrls(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e.path).pathname;
    if (isInternalRoute(path))
      return;
    ssrContext == null ? void 0 : ssrContext.head.use({
      key: "nuxt-og-image:overrides-and-canonical-urls",
      hooks: {
        "tags:resolve": async (ctx2) => {
          const hasPrimaryPayload = ctx2.tags.some((tag) => tag.tag === "script" && tag.props.id === "nuxt-og-image-options");
          let overrides;
          for (const tag of ctx2.tags) {
            if (tag.tag === "script" && tag.props.id === "nuxt-og-image-overrides") {
              if (hasPrimaryPayload) {
                overrides = separateProps(parse(tag.innerHTML || "{}"));
                delete ctx2.tags[ctx2.tags.indexOf(tag)];
              } else {
                tag.props.id = "nuxt-og-image-options";
                tag.innerHTML = stringify(separateProps(parse(tag.innerHTML || "{}")));
                tag._d = "script:id:nuxt-og-image-options";
              }
              break;
            }
          }
          ctx2.tags = ctx2.tags.filter(Boolean);
          for (const tag of ctx2.tags) {
            if (tag.tag === "meta" && (tag.props.property === "og:image" || ["twitter:image:src", "twitter:image"].includes(tag.props.name))) {
              if (!tag.props.content.startsWith("https")) {
                await nuxtApp.runWithContext(() => {
                  tag.props.content = toValue(withSiteUrl(tag.props.content, {
                    withBase: true
                  }));
                });
              }
            } else if (overrides && tag.tag === "script" && tag.props.id === "nuxt-og-image-options") {
              tag.innerHTML = stringify(defu(overrides, parse(tag.innerHTML)));
            }
          }
        }
      }
    });
  });
}
function routeRuleOgImage(nuxtApp) {
  nuxtApp.hooks.hook("app:rendered", async (ctx) => {
    var _a, _b, _c, _d, _e, _f;
    const { ssrContext } = ctx;
    const e = useRequestEvent();
    const path = parseURL(e.path).pathname;
    if (isInternalRoute(path))
      return;
    const _routeRulesMatcher2 = toRouteMatcher(
      createRouter$1({ routes: (_b = (_a = ssrContext == null ? void 0 : ssrContext.runtimeConfig) == null ? void 0 : _a.nitro) == null ? void 0 : _b.routeRules })
    );
    let routeRules = defu({}, ..._routeRulesMatcher2.matchAll(
      withoutBase(path.split("?")[0], (_c = ssrContext == null ? void 0 : ssrContext.runtimeConfig) == null ? void 0 : _c.app.baseURL)
    ).reverse()).ogImage;
    if (typeof routeRules === "undefined")
      return;
    const ogImageInstances = nuxtApp.ssrContext._ogImageInstances || [];
    if (routeRules === false) {
      ogImageInstances == null ? void 0 : ogImageInstances.forEach((e2) => {
        e2.dispose();
      });
      nuxtApp.ssrContext._ogImagePayload = void 0;
      nuxtApp.ssrContext._ogImageInstances = void 0;
      return;
    }
    const { defaults } = useOgImageRuntimeConfig();
    routeRules = normaliseOptions(defu((_f = (_e = (_d = nuxtApp.ssrContext) == null ? void 0 : _d.event.context._nitro) == null ? void 0 : _e.routeRules) == null ? void 0 : _f.ogImage, routeRules, {
      component: defaults.component
    }));
    const resolvedOptions = normaliseOptions(defu(routeRules, defaults));
    const src = getOgImagePath(ssrContext.url, resolvedOptions);
    createOgImageMeta(src, routeRules, resolvedOptions, nuxtApp.ssrContext);
  });
}
const og_image_canonical_urls_server_QnQwHpoQ3t = /* @__PURE__ */ defineNuxtPlugin({
  setup: ogImageCanonicalUrls
});
const route_rule_og_image_server_svhvDKOpur = /* @__PURE__ */ defineNuxtPlugin({
  setup: routeRuleOgImage
});
const robot_meta_server_8htXH4OkuR = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    var _a;
    const event = useRequestEvent();
    const ctx = (_a = event == null ? void 0 : event.context) == null ? void 0 : _a.robots;
    if (!ctx)
      return;
    const config = /* @__PURE__ */ useRuntimeConfig();
    useServerHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => {
            var _a2, _b;
            return ((_a2 = config["nuxt-robots"]) == null ? void 0 : _a2.debug) ? (_b = ctx.debug) == null ? void 0 : _b.source : void 0;
          }
        }
      ]
    });
  }
});
const preference = "system";
const componentName = "ColorScheme";
const dataValue = "theme";
const plugin_server_ano7jnMEqi = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  var _a;
  const colorMode = ((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) ? ref({}) : useState("color-mode", () => reactive({
    preference,
    value: preference,
    unknown: true,
    forced: false
  })).value;
  const htmlAttrs = {};
  {
    useHead({ htmlAttrs });
  }
  useRouter().afterEach((to) => {
    const forcedColorMode = to.meta.colorMode;
    if (forcedColorMode && forcedColorMode !== "system") {
      colorMode.value = htmlAttrs["data-color-mode-forced"] = forcedColorMode;
      {
        htmlAttrs[`data-${dataValue}`] = colorMode.value;
      }
      colorMode.forced = true;
    } else if (forcedColorMode === "system") {
      console.warn("You cannot force the colorMode to system at the page level.");
    }
  });
  nuxtApp.provide("colorMode", colorMode);
});
const element_plus_teleports_plugin_asoUor6pqg = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", (ctx) => {
    var _a;
    if ((_a = ctx.ssrContext) == null ? void 0 : _a.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports);
    }
  });
});
function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-") || [].includes(key)) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
  return { ...teleports, body };
}
var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a2;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a2 = void 0) != null ? _a2 : "sync"
  }));
  return readonly(result);
}
const isClient = false;
const isString = (val) => typeof val === "string";
const noop = () => {
};
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop;
    }
  };
  const filter = (_invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    const invoke2 = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke2();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke2();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke2());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function identity(arg) {
  return arg;
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading, rejectOnCancel), fn);
}
const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const namespaceContextKey = Symbol("namespaceContextKey");
const useGetDerivedNamespace = (namespaceOverrides) => {
  const derivedNamespace = getCurrentInstance() ? inject(namespaceContextKey, ref(defaultNamespace)) : ref(defaultNamespace);
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace;
  });
  return namespace;
};
const useNamespace = (block, namespaceOverrides) => {
  const namespace = useGetDerivedNamespace();
  const b = (blockSuffix = "") => _bem(namespace.value, block, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace.value, block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace.value, block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};
class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function debugWarn(scope, message) {
  {
    const error = isString$1(scope) ? new ElementPlusError(`[${scope}] ${message}`) : scope;
    console.warn(error);
  }
}
const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useIdInjection = () => {
  return getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection;
};
const useId = (deterministicId) => {
  const idInjection = useIdInjection();
  if (idInjection === defaultIdInjection) {
    debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const namespace = useGetDerivedNamespace();
  const idRef = computedEager(() => unref(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};
const isUndefined = (val) => val === void 0;
const isBoolean = (val) => typeof val === "boolean";
const isNumber = (val) => typeof val === "number";
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isStringNumber = (val) => {
  if (!isString$1(val)) {
    return false;
  }
  return !Number.isNaN(Number(val));
};
const initial = {
  current: 0
};
const zIndex = ref(0);
const defaultInitialZIndex = 2e3;
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const zIndexContextKey = Symbol("zIndexContextKey");
const useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(ZINDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0;
  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection);
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (!inject(ZINDEX_INJECTION_KEY)) {
    debugWarn("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`);
  }
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};
const element_plus_injection_plugin_8OwKCAVM2s = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { "prefix": 1024, "current": 0 }).provide(ZINDEX_INJECTION_KEY, { "current": 0 });
});
const plugin_LvdPTdInml = /* @__PURE__ */ defineNuxtPlugin(async () => {
});
const locally_Jp88xfIZzn = /* @__PURE__ */ defineNuxtPlugin(() => {
  return {
    provide: {
      locally: {
        getItem(item) {
          {
            return void 0;
          }
        },
        setItem(item, value) {
        },
        clear(item) {
        }
      }
    }
  };
});
let routes;
let _routeRulesMatcher = void 0;
const prerender_server_LXx1wM9sKF = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routerOptions.hashMode) {
    return;
  }
  if (routes && !routes.length) {
    return;
  }
  const routeRules = (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules;
  if (routeRules && Object.values(routeRules).some((r) => r.prerender)) {
    _routeRulesMatcher = toRouteMatcher(createRouter$1({ routes: routeRules }));
  }
  routes || (routes = Array.from(processRoutes(([__temp, __restore] = executeAsync(() => {
    var _a;
    return (_a = routerOptions.routes) == null ? void 0 : _a.call(routerOptions, _routes);
  }), __temp = await __temp, __restore(), __temp) ?? _routes)));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return !_routeRulesMatcher || defu$1({}, ..._routeRulesMatcher.matchAll(path).reverse()).prerender;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  var _a;
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !((_a = route.children) == null ? void 0 : _a.length) && shouldPrerender(currentPath)) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    if (shouldPrerender(fullPath)) {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const _1_absoluteImageUrls_server_zDt3Q5SdZ4 = /* @__PURE__ */ defineNuxtPlugin({
  enforce: "post",
  setup() {
    const head = injectHead();
    if (!head)
      return;
    const resolver = createSitePathResolver({
      withBase: true,
      absolute: true,
      canonical: true
    });
    head.use({
      hooks: {
        "tags:resolve": async ({ tags }) => {
          for (const tag of tags) {
            if (tag.tag !== "meta")
              continue;
            if (tag.props.property !== "og:image:url" && tag.props.property !== "og:image" && tag.props.name !== "twitter:image")
              continue;
            if (typeof tag.props.content !== "string" || !tag.props.content.trim() || tag.props.content.startsWith("http") || tag.props.content.startsWith("//"))
              continue;
            tag.props.content = unref(resolver(tag.props.content));
          }
        }
      }
    });
  }
});
const _0_routeRules_server_3qJ8nyBJBb = /* @__PURE__ */ defineNuxtPlugin({
  enforce: "post",
  async setup() {
    const head = injectHead();
    if (!head)
      return;
    const event = useRequestEvent();
    if (event.context._nitro.routeRules.head)
      head.push(event.context._nitro.routeRules.head, { mode: "server", tagPriority: -9 });
    if (event.context._nitro.routeRules.seoMeta) {
      const meta = unpackMeta({ ...event.context._nitro.routeRules.seoMeta });
      head.push({
        meta
      }, { mode: "server", tagPriority: -9 });
    }
  }
});
function applyDefaults(i18n) {
  const { canonicalQueryWhitelist } = (/* @__PURE__ */ useRuntimeConfig()).public["seo-utils"];
  const siteConfig = useSiteConfig();
  const route = useRoute();
  const resolveUrl = createSitePathResolver({ withBase: true, absolute: true });
  const canonicalUrl = computed(() => {
    const { query } = route;
    const url = resolveUrl(route.path || "/").value || route.path;
    const filteredQuery = Object.fromEntries(
      Object.entries(query).filter(([key]) => canonicalQueryWhitelist.includes(key))
    );
    return Object.keys(filteredQuery).length ? `${url}?${stringifyQuery(filteredQuery)}` : url;
  });
  const minimalPriority = {
    // give nuxt.config values higher priority
    tagPriority: 101
  };
  useHead({
    htmlAttrs: { lang: i18n.locale },
    templateParams: { site: siteConfig, siteName: siteConfig.name || "" },
    titleTemplate: "%s %separator %siteName",
    link: [{ rel: "canonical", href: () => canonicalUrl.value }]
  }, minimalPriority);
  const seoMeta = {
    ogType: "website",
    ogUrl: () => canonicalUrl.value,
    ogLocale: () => i18n.locale.value,
    ogSiteName: siteConfig.name
  };
  if (siteConfig.description)
    seoMeta.description = siteConfig.description;
  if (siteConfig.twitter) {
    const id = siteConfig.twitter.startsWith("@") ? siteConfig.twitter : `@${siteConfig.twitter}`;
    seoMeta.twitterCreator = id;
    seoMeta.twitterSite = id;
  }
  useSeoMeta(seoMeta, minimalPriority);
}
const defaults_M8ptihKv0z = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-seo:defaults",
  order: 999,
  env: {
    islands: false
  },
  setup() {
    const siteConfig = useSiteConfig();
    const locale = ref(siteConfig.currentLocale || siteConfig.defaultLocale);
    applyDefaults({
      locale
    });
  }
});
const plugins = [
  payloadPlugin,
  unhead_KgADcZ0jPj,
  plugin$1,
  _0_siteConfig_jtc2qNDx4l,
  revive_payload_server_eJ33V7gbc6,
  plugin,
  components_plugin_etk2rclpTq,
  plugin_ghbUAjaD3n,
  siteConfig_JRId4KOeUL,
  inferSeoMetaPlugin_JSh5nGhzCz,
  titles_eoILE7jqvj,
  defaults_ejC916ejE3,
  init_8zxuXEdLTw,
  og_image_canonical_urls_server_QnQwHpoQ3t,
  route_rule_og_image_server_svhvDKOpur,
  robot_meta_server_8htXH4OkuR,
  plugin_server_ano7jnMEqi,
  element_plus_teleports_plugin_asoUor6pqg,
  element_plus_injection_plugin_8OwKCAVM2s,
  plugin_LvdPTdInml,
  locally_Jp88xfIZzn,
  prerender_server_LXx1wM9sKF,
  _1_absoluteImageUrls_server_zDt3Q5SdZ4,
  _0_routeRules_server_3qJ8nyBJBb,
  defaults_M8ptihKv0z
];
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = () => {
    error.value = false;
    set(0);
  };
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const layouts = {
  default: defineAsyncComponent(() => import('./default-n-J2tt49.mjs'))
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLoadingIndicator = __nuxt_component_0;
  const _component_NuxtLayout = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, { color: "#6598c8" }, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-907cbbf8"]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-CujawC6U.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-DgRX6Gx5.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./island-renderer-WnxDdLrJ.mjs').then((r) => r.default || r));
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { useId as A, asyncDataDefaults as B, useRequestEvent as C, useState as D, isStringNumber as E, isUndefined as F, componentName as G, useThrottleFn as H, useOgImageRuntimeConfig as I, useSiteConfig as J, _export_sfc as _, useRouter as a, navigateTo as b, createError as c, useNuxtApp as d, entry$1 as default, useRuntimeConfig as e, useRoute as f, debugWarn as g, namespaceContextKey as h, injectHead as i, isElement as j, isBoolean as k, isNumber as l, isString as m, nuxtLinkDefaults as n, noop as o, resolveUnref as p, identity as q, resolveRouteObject as r, useNamespace as s, tryOnScopeDispose as t, useHead as u, useZIndex as v, isClient as w, useGetDerivedNamespace as x, useIdInjection as y, zIndexContextKey as z };
//# sourceMappingURL=server.mjs.map
