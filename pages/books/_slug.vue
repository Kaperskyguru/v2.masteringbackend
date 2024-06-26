<template>
  <main class="hero__grid">
    <BookOverview :hub="hub" />
  </main>
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
      console.log(error)
    }
  },

  data: () => ({
    BASE_URL: process.env.BASE_URL || 'https://masteringbackend.com',
  }),

  computed: {
    image() {
      return (
        this.hub &&
        (this.hub?.design_url ?? this.hub?.image ?? '/img/backend-2023.jpg')
      )
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
        title: `${this.hub?.title}`,
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
            content: `${this.stripTags(this.hub?.description)}`,
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          { hid: 'og:title', property: 'og:title', content: this.hub.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.stripTags(this.hub?.description),
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${this.BASE_URL}/books/${this.$route.params.slug}`,
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
            hid: 'og:type',
            property: 'og:type',
            content: 'article',
          },
          {
            hid: 'article:published_time',
            property: 'article:published_time',
            content: this.hub?.createdAt,
          },
          {
            hid: 'article:modified_time',
            property: 'article:modified_time',
            content: this.hub?.updatedAt,
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
  
  <style scoped>
</style>