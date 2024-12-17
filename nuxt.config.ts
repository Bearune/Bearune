// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devServer: {
  //   https: true,
  //   port: 3000, // default: 3000
  //   host: '192.168.0.51' // deafult: 'localhost'
  // },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true, // 設置 defer
          'data-website-id': '04f3f2b1-f83f-4489-92ce-a67fef11ad03',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-18',
  devtools: {
    enabled: true,
  },
  css: [
    '~/assets/scss/color.scss',
    '~/assets/scss/theme.css',
    '~/assets/scss/main.scss',
    '~/assets/scss/btn.scss',
    '~/assets/scss/badge.scss',
    'animate.css',
    '~/assets/scss/article.scss',
  ],
  vite: {
    plugins: [
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `@use "~/assets/scss/element.scss" as *;`,
        }
      }
    }
  },
  content: {
    markdown: {
      // anchorLinks: { depth: 3, exclude: [1] },
      anchorLinks: false,
      toc: { depth: 2, searchDepth: 2 }
    },
    sources: {
      // content:{
      //   driver:'fs',
      //   prefix:'/articles',
      //   base: resolve(__dirname, 'content')
      // }
    },
    highlight: {
      preload: ['vue-html', 'vue', 'javascript', 'html'],
    },
    experimental: {
      search: {
        indexed: true,
        ignoredTags: [],
        filterQuery: {},
        options: {
          fields: ['title', 'content', 'titles'],
          storeFields: ['title', 'content', 'titles'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              content: 2,
              titles: 1
            }
          }
        }
      }
    },
  },
  // $production: {
  //   routeRules: {
  //     '/**': { isr: true }
  //   }
  // },

  // $development: {
  //   //
  // },

  $meta: {

  },
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-content-assets',
    '@nuxt/content',
    '@element-plus/nuxt',
    '@nuxtjs/color-mode',
    // '@nuxtjs/eslint-module'
    'nuxt-svgo',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    '@nuxtjs/device',
    '@nuxtjs/google-adsense'
  ],
  googleAdsense: {
    id: 'ca-pub-9967002932441195', // 將此處替換為你的 Google Adsense 客戶端 ID
    pageLevelAds: true, // 是否啟用頁面級廣告
    analyticsDomainName: 'bearune.com',
    onPageLoad: true,
    test: true
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode',
    dataValue: 'theme'
  },
  svgo: {
    svgoConfig: {}
  },
  site: {
    url: 'https://bearune.com',
    name: '熊途 Bearune'
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml', '/rss.xml'],
    }
  }
});