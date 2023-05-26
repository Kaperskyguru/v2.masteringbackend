<!-- eslint-disable vue/no-v-html -->
<template>
  <main class="hero__grid">
    <!-- <HubContentOverview v-if="post" :post="post" :chapter="chapter" />
    <ChapterContentOverview v-else :post="post" :chapter="chapter" /> -->

    <ResourceOverview :post="post" :chapter="chapter" />
  </main>
</template>
  
  <script>
export default {
  async asyncData({ params, store }) {
    try {
      const getPost = await store.getters['post/getPost']

      let post = await getPost(params.slug)
      if (post === undefined || !post || post === null) {
        post = await store.dispatch('post/getPost', {
          slug: params.slug,
          populate: 'chapter',
        })
      }

      const slug = post?.chapter?.slug ?? params.slug

      const getChapter = await store.getters['hubs/getChapter']
      let chapter = await getChapter(slug)

      if (chapter === undefined || !chapter || chapter === null) {
        chapter = await store.dispatch('hubs/getChapter', {
          slug,
        })
      }

      return { post, chapter }
    } catch (error) {
      // console.log(error, 'error')
    }
  },

  data: () => ({
    BASE_URL: process.env.BASE_URL || 'https://masteringbackend.com',
  }),

  computed: {
    image() {
      if (this.post) {
        if (this.post?.image) {
          return this.post?.image
        }
      }

      return '/img/Base.png'
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
    let post = {}
    if (this.post) post = { ...this.post }
    else post = { ...this.chapter }

    if (post) {
      return {
        title: `${post.title}`,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: `${this.splitTags(post.tags) ?? ''}`,
          },
          {
            hid: 'description',
            name: 'description',
            content: `${this.stripTags(post?.description || post?.excerpt)}`,
          },

          { hid: 'og:title', property: 'og:title', content: post.title },
          {
            hid: 'og:description',
            property: 'og:description',
            content: this.stripTags(post?.description || post?.excerpt),
          },
          { hid: 'og:image', property: 'og:image', content: this.image },
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${this.BASE_URL}/resources/${this.$route.params.hub}/${this.$route.params.slug}`,
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
            content: post?.createdAt,
          },
          {
            hid: 'article:modified_time',
            property: 'article:modified_time',
            content: post?.updatedAt,
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