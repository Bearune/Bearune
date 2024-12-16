import { Launcher } from 'file://C:/bearuneBlog/node_modules/chrome-launcher/dist/index.js';
import playwrightCore from 'file://C:/bearuneBlog/node_modules/playwright-core/index.mjs';
import { createError } from 'file://C:/bearuneBlog/node_modules/h3/dist/index.mjs';
import { a as useOgImageRuntimeConfig, m as useNitroOrigin } from './nitro.mjs';
import { joinURL, withQuery } from 'file://C:/bearuneBlog/node_modules/ufo/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/unist-util-visit/index.js';
import 'file://C:/bearuneBlog/node_modules/hast-util-to-string/index.js';
import 'file://C:/bearuneBlog/node_modules/destr/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/hookable/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/ofetch/dist/node.mjs';
import 'file://C:/bearuneBlog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/bearuneBlog/node_modules/vue/index.mjs';
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

const chromePath = Launcher.getFirstInstallation();
async function createBrowser() {
  return playwrightCore.chromium.launch({
    headless: true,
    executablePath: chromePath
  });
}

async function createScreenshot({ basePath, e, options, extension }, browser) {
  const { colorPreference } = useOgImageRuntimeConfig();
  const path = options.component === "PageScreenshot" ? basePath : joinURL("/__og-image__/image", basePath, `og.html`);
  const page = await browser.newPage({
    colorScheme: colorPreference || "no-preference",
    baseURL: useNitroOrigin(e)
  });
  try {
    if (true && !options.html) {
      options.html = await e.$fetch(path).catch(() => void 0);
    }
    await page.setViewportSize({
      width: options.width || 1200,
      height: options.height || 630
    });
    if (options.html) {
      const html = options.html;
      await page.evaluate((html2) => {
        document.open("text/html");
        document.write(html2);
        document.close();
      }, html);
      await page.waitForLoadState("networkidle");
    } else {
      await page.goto(withQuery(path, options.props), {
        timeout: 1e4,
        waitUntil: "networkidle"
      });
    }
    const screenshotOptions = {
      timeout: 1e4,
      animations: "disabled",
      type: extension === "png" ? "png" : "jpeg"
    };
    const _options = options.screenshot || {};
    if (_options.delay)
      await page.waitForTimeout(_options.delay);
    if (_options.mask) {
      await page.evaluate((mask) => {
        for (const el of document.querySelectorAll(mask))
          el.style.display = "none";
      }, _options.mask);
    }
    if (_options.selector)
      return await page.locator(_options.selector).screenshot(screenshotOptions);
    return await page.screenshot(screenshotOptions);
  } finally {
    await page.close();
  }
}

const ChromiumRenderer = {
  name: "chromium",
  supportedFormats: ["png", "jpeg", "jpg"],
  async debug() {
    return {};
  },
  async createImage(ctx) {
    const browser = await createBrowser();
    const screenshot = await createScreenshot(ctx, browser).catch((e) => e);
    await browser.close();
    if (screenshot instanceof Error) {
      return createError({
        statusCode: 400,
        cause: screenshot,
        statusMessage: `[Nuxt OG Image] Failed to create screenshot ${screenshot.message}.`
      });
    }
    return screenshot;
  }
};

export { ChromiumRenderer as default };
//# sourceMappingURL=renderer2.mjs.map
