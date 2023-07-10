<template>
  <div class="row p-4">
    <div class="col-md-6">
      <nuxt-link
        v-if="prev"
        :to="`${getBaseURL}/${$route.params.hub}/${prev.slug}`"
      >
        <p class="fw-normal" style="color: #f7f5fa">Prev</p>
        <h4 class="text-white">{{ prev ? prev.title : '' }}</h4>
      </nuxt-link>
    </div>
    <div class="col-md-6 text-md-end">
      <nuxt-link
        v-if="next"
        :to="`${getBaseURL}/${$route.params.hub}/${next.slug}`"
      >
        <p class="text-white" style="color: #f7f5fa">Next</p>
        <h4 class="text-white">{{ next ? next.title : '' }}</h4>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chapter: { type: Object, default: () => {} },
    outlines: { type: Array, default: () => [] },
  },

  data: () => ({ hubs: [] }),

  computed: {
    getBaseURL() {
      if (this.$route?.name?.includes('resources-hub-slug')) return `/resources`
      return `/hubs`
    },

    chapterSlug() {
      return this.chapter?.slug ?? ''
    },
    next() {
      const size = this.chapter?.posts?.length
      const currentSlug = this.$route.params.slug

      let currentIndex = this.outlines.findIndex(
        (item) => item.slug === currentSlug
      )

      if (this.outlines[size - 1].slug === currentSlug) {
        // Enter next Chapter

        // Get Hub chapters
        // If the last chapter is == to slug
        // then disable
        // other wise
        // redirect to next chapter

        const chapter = this.nextChapter()

        if (!chapter || !chapter.posts || !chapter?.posts?.length) return
        return {
          title: chapter.title,
          slug: chapter.slug,
        }
      }

      currentIndex++
      return this.outlines[currentIndex]
    },

    prev() {
      const currentSlug = this.$route.params.slug

      let currentIndex = this.outlines.findIndex(
        (item) => item.slug === currentSlug
      )

      if (this.outlines[0].slug === currentSlug) {
        const chapter = this.prevChapter()

        if (!chapter || !chapter.posts || !chapter?.posts?.length) return
        return {
          title: chapter.title,
          slug: chapter.slug,
        }
      }
      currentIndex--
      return this.outlines[currentIndex]
    },
  },

  async created() {
    await this.getHub()
  },

  methods: {
    async getHub() {
      const slug = this.$route.params.hub
      const getHub = this.$store.getters['hubs/getHub']
      let hub = await getHub(slug)
      if (!hub?.length) {
        hub = await this.$store.dispatch('hubs/getHub', slug)
      }

      this.hubs = hub

      return hub
    },

    prevChapter() {
      const hub = this.hubs
      if (!hub || !hub?.chapters || !hub?.chapters?.length) return

      const chapters = hub.chapters

      if (chapters[0].slug === this.chapterSlug) return

      let currentIndex = chapters.findIndex(
        (item) => item.slug === this.chapterSlug
      )

      currentIndex--

      return chapters[currentIndex]
    },

    nextChapter() {
      const hub = this.hubs
      if (!hub || !hub?.chapters || !hub?.chapters?.length) return

      const chapters = hub.chapters

      if (chapters[chapters.length - 1].slug === this.chapterSlug) return

      let currentIndex = chapters.findIndex(
        (item) => item.slug === this.chapterSlug
      )

      currentIndex++

      return chapters[currentIndex]
    },
  },
}
</script>

<style>
</style>