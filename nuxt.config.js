require('dotenv').config()
import ru from './locales/ru'
import en from './locales/en'
import metaHome from './SEO/main'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  head: metaHome,
  //   head: {
  //     title: 'journal',
  //     htmlAttrs: {
  //       lang: 'en'
  //     },
  //     meta: [
  //       { charset: 'utf-8' },
  //       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //       { hid: 'description', name: 'description', content: '' },
  //       { name: 'format-detection', content: 'telephone=no' }
  //     ],
  //     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  //   },
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/i18n', '@nuxtjs/auth-next', '@leandromatos/nuxt-cookie'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  env: {
    baseURL: process.env.baseURL
  },
  axios: {
    baseURL: process.env.baseURL,
    retry: true
  },

  i18n: {
    locales: [
      { code: 'ru', lang: 'RUS', name: 'Russian', iso: 'ru-RU', file: 'ru', isCatchallLocale: true },
      { code: 'en', lang: 'ENG', name: 'English', iso: 'en-EN', file: 'en' }
    ],
    defaultLocale: 'ru',
    seo: true,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        ru,
        en
      }
    }
  },
  auth: {
    redirect: {
      login: '/admin',
      logout: 'admin/login',
      callback: '/admin',
      home: '/admin'
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
        },
        endpoints: {
          login: { url: '/admin/login', method: 'post' },
          logout: false,
          user: false
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  publicRuntimeConfig: {}
}
