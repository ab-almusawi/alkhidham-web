export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'ar', dir: 'rtl' },
      title: 'الخضام للسفر والسياحة | Al Khidham Travel',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'كل خيارات السفر بمكان واحد - حجز طيران، فنادق، تأشيرات، كروبات سياحية' },
        { name: 'theme-color', content: '#101419' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
      Tajawal: [300, 400, 500, 700, 800],
    },
    display: 'swap',
    preload: true,
  },

  i18n: {
    locales: [
      { code: 'ar', name: 'العربية', dir: 'rtl', file: 'ar.json' },
      { code: 'en', name: 'English', dir: 'ltr', file: 'en.json' },
    ],
    defaultLocale: 'ar',
    lazy: true,
    strategy: 'prefix_except_default',
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://clinora.site',
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
})
