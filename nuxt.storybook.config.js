import nuxtConfig from './nuxt.config'

export default {
  ...nuxtConfig,

  buildModules: nuxtConfig.buildModules.filter(
    (module) => module !== 'nuxt-build-optimisations'
  ),

  storybook: {
    port: 4001,
    stories: ['~/components/**/*.stories.@(js|mdx)'],
    addons: [
      '@storybook/addon-docs',
      '@storybook/addon-controls',
      '@storybook/addon-actions',
      '@storybook/addon-viewport',
      '@storybook/addon-backgrounds',
      '@storybook/addon-a11y',
      'storybook-dark-mode/register',
    ],
    parameters: {
      controls: { expanded: true, sort: 'requiredFirst' },
      backgrounds: {
        default: 'light',
        values: [
          { name: 'light', value: '#fafaf8' },
          { name: 'middle', value: '#999' },
          { name: 'dark', value: '#222' },
        ],
      },
      viewport: {
        viewports: {
          phoneSmall: {
            name: 'Phone small (all: 320px)',
            styles: {
              width: '320px',
              height: '568px',
            },
            type: 'mobile',
          },
          phoneSmallLandscape: {
            name: 'Phone small landscape (640px)',
            styles: {
              width: '568px',
              height: '320px',
            },
            type: 'mobile',
          },
          phoneLarge: {
            name: 'Phone large (xs: 414px)',
            styles: {
              width: '414px',
              height: '736px',
            },
            type: 'mobile',
          },
          phoneLargeLandscape: {
            name: 'Phone large landscape (736px)',
            styles: {
              width: '736px',
              height: '414px',
            },
            type: 'mobile',
          },
          tabletSmall: {
            name: 'Tablet small (md: 768px)',
            styles: {
              width: '768px',
              height: '1024px',
            },
            type: 'tablet',
          },
          tabletLarge: {
            name: 'Tablet large (lg: 1024px)',
            styles: {
              width: '1024px',
              height: '1366px',
            },
            type: 'tablet',
          },
          desktopSmall: {
            name: 'Desktop small (xl: 1280px)',
            styles: {
              width: '1280px',
              height: '800px',
            },
            type: 'desktop',
          },
          desktopLarge: {
            name: 'Desktop large (2xl: 1536px)',
            styles: {
              width: '1600px',
              height: '864px',
            },
            type: 'desktop',
          },
        },
      },
    },
    webpackFinal(config) {
      config.performance = { hints: false }
      return config
    },
  },
}
