// generated by the @nuxtjs/tailwindcss <https://github.com/nuxt-modules/tailwindcss> module at 2024/12/16 下午11:36:19
const configMerger = require("C:/bearuneBlog/node_modules/@nuxtjs/tailwindcss/dist/runtime/merger.js");

const inlineConfig = {"content":[],"theme":{"extend":{}},"plugins":[]};

const config = [
require("./../tailwind.config.js")
].reduce((prev, curr) => configMerger(curr, prev), configMerger(inlineConfig, { content: { files: ["C:/bearuneBlog/components/**/*.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/components/global/**/*.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/components/**/*.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/pages/**/*.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/plugins/**/*.{js,ts,mjs}","C:/bearuneBlog/composables/**/*.{js,ts,mjs}","C:/bearuneBlog/utils/**/*.{js,ts,mjs}","C:/bearuneBlog/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}","C:/bearuneBlog/app.config.{js,ts,mjs}"] } }));

module.exports = (() => {const cfg=config;cfg["content"]["files"]["15"] = "C:/bearuneBlog/bearune-deploy/content-cache/parsed/**/*.{md,yml,yaml,json}";;return cfg;})()
