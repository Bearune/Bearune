import { s as serverQueryContent } from './nitro.mjs';
import 'file://C:/bearuneBlog/node_modules/h3/dist/index.mjs';
import 'file://C:/bearuneBlog/node_modules/ufo/dist/index.mjs';
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

async function serverSearchContent(event, filterQuery) {
  if (filterQuery) {
    return await serverQueryContent(event).where(filterQuery).find();
  } else {
    return await serverQueryContent(event).find();
  }
}
const HEADING = /^h([1-6])$/;
const isHeading = (tag) => HEADING.test(tag);
function splitPageIntoSections(page, { ignoredTags }) {
  const path = page._path ?? "";
  const sections = [{
    id: path,
    title: page.title || "",
    titles: [],
    content: (page.description || "").trim(),
    level: 1
  }];
  if (!page?.body?.children) {
    return sections;
  }
  let section = 1;
  let previousHeadingLevel = 0;
  const titles = [page.title ?? ""];
  for (const item of page.body.children) {
    const tag = item.tag || "";
    if (isHeading(tag)) {
      const currentHeadingLevel = Number(tag.match(HEADING)?.[1] ?? 0);
      const title = extractTextFromAst(item).trim();
      if (currentHeadingLevel === 1) {
        titles.splice(0, titles.length);
      } else if (currentHeadingLevel < previousHeadingLevel) {
        titles.splice(currentHeadingLevel - 1, titles.length - 1);
      } else if (currentHeadingLevel === previousHeadingLevel) {
        titles.pop();
      }
      sections.push({
        id: `${path}#${item.props?.id}`,
        title,
        titles: [...titles],
        content: "",
        level: currentHeadingLevel
      });
      titles.push(title);
      previousHeadingLevel = currentHeadingLevel;
      section += 1;
    } else {
      const content = extractTextFromAst(item, ignoredTags).trim();
      if (section === 1 && sections[section - 1]?.content === content) {
        continue;
      }
      sections[section - 1].content = `${sections[section - 1].content} ${content}`.trim();
    }
  }
  return sections;
}
function extractTextFromAst(node, ignoredTags = []) {
  let text = "";
  if (node.type === "text") {
    text += node.value || "";
  }
  if (ignoredTags.includes(node.tag ?? "")) {
    return "";
  }
  if (node.children?.length) {
    text += node.children.map((child) => extractTextFromAst(child, ignoredTags)).filter(Boolean).join("");
  }
  return text;
}

export { serverSearchContent, splitPageIntoSections };
//# sourceMappingURL=search.mjs.map
