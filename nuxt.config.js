require('dotenv').config()
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'v2.masteringbackend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    BASE_ENDPOINT_URL: process.env.BASE_ENDPOINT_URL,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/hub/style.css'],

  // Plugins to run before rendering page: https://go.nu xtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/infiniteloading', ssr: false, mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms',
      '~/components/templates',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-lazy-load',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    [
      'nuxt-highlightjs',
      {
        // Module Options
        style: 'dracula',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_ENDPOINT_URL,
    // Proxy: true,
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
      'Content-Type': 'application/json',
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
