require('dotenv').config()

import Utils from './helpers/utils'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Mastering Backend',
    htmlAttrs: {
      lang: 'en',
    },
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              author: { '@id': '#identity' },
              copyrightHolder: { '@id': '#identity' },
              copyrightYear: new Date(),
              creator: { '@id': '#creator' },
              dateModified: new Date(),
              description:
                'Advance your backend engineering skills. Become a great backend engineer',
              headline: 'Mastering Backend',
              image: {
                '@type': 'ImageObject',
                url: '/img/logo.png',
              },
              inLanguage: 'en-us',
              mainEntityOfPage: 'https://masteringbackend.com/',
              name: 'Mastering Backend',
              publisher: { '@id': '#creator' },
              url: 'https://masteringbackend.com',
            },
            { '@id': '#identity', '@type': 'LocalBusiness', priceRange: '$' },
            { '@id': '#creator', '@type': 'Organization' },
            {
              '@type': 'BreadcrumbList',
              description: 'Breadcrumbs list',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  item: 'https://masteringbackend.com/',
                  name: 'Homepage',
                  position: 1,
                },
              ],
              name: 'Breadcrumbs',
            },
          ],
        },
      },

      {
        src: 'https://cdn.paddle.com/paddle/paddle.js',
        hid: 'Paddle',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content:
          'Advance your backend engineering and software engineering skills from system design, databases, data structures and algorithms to backend',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Advance your backend engineering and software engineering skills from system design, databases, data structures and algorithms to backend',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Advance your backend engineering and software engineering skills from system design, databases, data structures and algorithms to backend',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Mastering Backend',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/img/logo.png',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@master_backend',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@master_backend',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'backend,backend development,backend developer,backend web development, backend developers',
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      // {
      //   hid: 'http-equiv',
      //   'http-equiv': 'Content-Type',
      //   content: 'text/html; charset=utf-8',
      // },
      { hid: 'language', name: 'language', content: 'English' },
      { hid: 'revisit-after', name: 'revisit-after', content: '7 days' },
      { hid: 'author', name: 'author', content: 'Solomon Eseme' },

      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/android-chrome-192x192.png',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-chrome-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png',
      },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '96x96',
      //   href: '/favicon/favicon-96x96.png',
      // },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      // {
      //   rel: 'stylesheet',
      //   // rel: 'preload',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Merriweather&display=swap',
      // },
    ],
  },

  env: {
    BASE_ENDPOINT_URL: process.env.BASE_ENDPOINT_URL,
    STRAPI_TOKEN: process.env.STRAPI_TOKEN,
    MAILCHIMP_KEY: process.env.MAILCHIMP_KEY,
    MAILCHIMP_SERVER: process.env.MAILCHIMP_SERVER,
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
    PADDLE_VENDOR: process.env.PADDLE_VENDOR,
    RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/hub/style.css'],

  // Plugins to run before rendering page: https://go.nu xtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/infiniteloading', ssr: false, mode: 'client' },
    '~/plugins/jsonld',
    { src: '~/plugins/disqus', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms',
      '~/components/templates',
    ],
  },

  devServerHandlers: [],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/recaptcha',
    'nuxt-lazy-load',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/redirect-module',
    '@nuxtjs/feed',
    'nuxt-goodshare',
    'vue-social-sharing/nuxt',
    [
      'nuxt-highlightjs',
      {
        // Module Options
        style: 'night-owl',
      },
    ],

    [
      'nuxt-compress',
      {
        gzip: {
          cache: true,
        },
        brotli: {
          threshold: 10240,
        },
      },
    ],
  ],

  feed: [
    {
      path: '/feed.xml', // The route to your feed.
      async create(feed) {
        feed.options = {
          title: 'Mastering Backend',
          link: 'https://masteringbackend.com/feed.xml',
          description: 'This is Mastering Backend feeds!',
        }

        const posts = await Utils.getPosts()

        posts.forEach((post) => {
          feed.addItem({
            title: post.title,
            id: `https://masteringbackend.com/posts/${post.slug}`,
            link: `https://masteringbackend.com/posts/${post.slug}`,
            description: post.excerpt,
            content: post.content,
            date: new Date(post.publishedAt),
            updated: new Date(post.updatedAt),
            author: {
              name: post?.author?.name,
              link:
                'https://masteringbackend.com/authors/' + post?.author?.slug,
            },
          })

          Array.isArray(post?.categories) &&
            post.categories.forEach((category) => {
              feed.addCategory(category.title)
            })

          feed.addContributor({
            name: post?.author?.name,
          })
        })
      },
      cacheTime: 1000 * 60 * 15, // How long should the feed be cached
      type: 'rss2', // Can be: rss2, atom1, json1
    },
  ],

  // recaptcha: {
  //   siteKey: process.env.RECAPTCHA_SITE_KEY,
  //   version: 3,
  //   hideBadge: true,
  //   mode: 'basic',
  // },

  serverMiddleware: {
    '/api': '~/api',
  },

  redirect: [
    // Redirect opt`ions here
    {
      from: '^/posts/backend-development-the-ultimate-guide(.*)$',
      to: 'https://blog.boot.dev/backend/become-backend-developer',
      statusCode: 301,
    },

    {
      from: '^/courses/rust-for-backend-engineering(.*)$',
      to: 'https://masteringbackend.com/courses/become-a-rust-backend-engineer',
      statusCode: 301,
    },

    {
      from: '^/jobs/(.*)$',
      to: 'https://getbackendjobs.com?ref=masteringbackend',
      statusCode: 301,
    },

    // {
    //   from: '^/posts/rust-programming-the-ultimate-guide(.*)$',
    //   to: '/books/rust-essentials',
    //   statusCode: 301,
    // },
    {
      from: '^/courses/text/advanced-docker(.*)$',
      to: '/hubs/advanced-docker',
      statusCode: 301,
    },

    {
      from: 'http://academy.masteringbackend.com(.*)$',
      to: '/academy',
      statusCode: 301,
    },

    {
      from: '^/courses/video/advanced-docker(.*)$',
      to: '/hubs/advanced-docker',
      statusCode: 301,
    },
    {
      from: '^/posts/introduction-to-backend-development(.*)$',
      to: '/posts/getting-started-with-backend-development',
      statusCode: 301,
    },

    {
      from: '^/posts/laravel-breeze-tutorial-the-definitive-guide(.*)$',
      to: '/resources/laravel/laravel-breeze-tutorial-the-definitive-guide',
      statusCode: 301,
    },
    {
      from: '^/posts/laravel-framework-the-ultimate-guide-2021(.*)$',
      to: '/posts/laravel-framework-the-ultimate-guide',
      statusCode: 301,
    },
    {
      from: '^/category/(.*)$',
      to: '/categories/$1',
      statusCode: 301,
    },

    {
      from: '^/jobs(.*)$',
      to: 'https://getbackendjobs.com?ref=masteringbackend',
      statusCode: 301,
    },

    {
      from: '^/slack(.*)$',
      to: '/community',
      statusCode: 301,
    },
  ],

  sitemap: {
    hostname: 'https://masteringbackend.com',
    exclude: ['/maintenance'],
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    async routes() {
      const posts = await Utils.getPosts()
      return posts.map((post) => {
        return `posts/${post.slug}`
      })
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_ENDPOINT_URL,
    // Proxy: true,
    headers: {
      Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
      'Content-Type': 'application/json',
    },
  },

  publicRuntimeConfig: {
    recaptcha: {
      /* reCAPTCHA options */
      version: 3,
      hideBadge: true,
      mode: 'basic',
      siteKey: process.env.RECAPTCHA_SITE_KEY, // for example
    },
    SEGMENT_WRITE_KEY: process.env.SEGMENT_WRITE_KEY,
    SEGMENT_USE_ROUTER: process.env.SEGMENT_USE_ROUTER || true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
