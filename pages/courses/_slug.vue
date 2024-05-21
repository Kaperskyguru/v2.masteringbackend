<template>
  <CourseOverview :hub="hub" />
</template>
    
    <script>
export default {
  async asyncData({ params, store }) {
    try {
      const getHub = store.getters['hubs/getHub']
      let hub = await getHub(params.slug)
      if (!hub?.length) {
        hub = await store.dispatch('hubs/getHub', {
          slug: params.slug,
          populate: {
            image: true,
            topics: true,
            chapters: {
              populate: {
                posts: true,
              },
            },
          },
        })
      }

      return { hub }
    } catch (error) {
      //   console.log(error)
    }
  },

  data: () => ({
    BASE_URL: process.env.BASE_URL || 'https://masteringbackend.com',
  }),

  computed: {
    language() {
      const text = this.hub?.title?.split('Become A ')[1]
      return text?.split('Backend Engineer')[0]
    },
    image() {
      if (this?.hub && this.hub?.design_url) return this.hub?.design_url
      if (this?.hub && this.hub?.image) return this.hub?.image
      return '/img/backend-2023.jpg'
    },
  },

  methods: {
    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, '')
      }
    },
    splitTags(tags) {
      if (Array.isArray(tags)) {
        return tags.map((tag) => tag.title).join(', ')
      }
    },
  },

  head() {
    if (this.hub) {
      return {
        title: `Advanced ${this.language}Course: ${this.hub.title}`,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: `${this.hub?.chapters?.map((chapter) => {
              return chapter.title
            })}`,
          },
          {
            hid: 'description',
            name: 'description',
            content: `Advanced ${
              this.language
            } Course for Backend Engineers: ${this.stripTags(
              this.hub?.description
            )}`,
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          {
            hid: 'og:title',
            property: 'og:title',
            content: `Advanced ${this.language} Course: ${this.hub.title}`,
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: `Advanced ${
              this.language
            } Course for Backend Engineers: ${this.stripTags(
              this.hub?.description
            )}`,
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${this.BASE_URL}/courses/${this.$route.params.slug}`,
          },
          {
            hid: 'og:image:width',
            property: 'og:image:width',
            content: '800',
          },
          {
            hid: 'og:image:height',
            property: 'og:image:height',
            content: '800',
          },
          {
            hid: 'twitter:card',
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        ],
      }
    }
  },
}
</script>
    
  