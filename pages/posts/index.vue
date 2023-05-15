<template>
  <main>
    <PostOverview :posts="posts" @search="searchPosts"></PostOverview>

    <infinite-loading spinner="spiral" @infinite="infiniteScroll"
      ><span slot="no-more"></span
    ></infinite-loading>
  </main>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'PostsIndex',

  components: {
    PostOverview: () => import('@/components/templates/PostOverview.vue'),
  },

  data() {
    return {
      page: 2,
    }
  },

  async asyncData({ query, store }) {
    try {
      const getPosts = store.getters['post/getPosts']
      let posts = await getPosts()
      if (!posts?.length) {
        const data = {
          populate: 'author,categories',
          page: query.page ? query.page : 1,
          count: 22,
        }

        posts = await store.dispatch('post/getPosts', data)
      }
      return { posts }
    } catch (error) {
      // console.log(error)
      const posts = []
      return { posts }
    }
  },

  methods: {
    async searchPosts(search) {
      const data = {
        ppopulate: 'author,categories',
        search,
      }
      const posts = await this.$store.dispatch('post/filterPosts', data)
      this.posts = posts
    },
    infiniteScroll($state) {
      setTimeout(async () => {
        const data = {
          ppopulate: 'author,categories',
          page: this.page,
          count: 22,
        }

        const posts = await this.$store.dispatch('post/getPosts', data)

        if (posts.length > 1) {
          $state.loaded()
        } else $state.complete()
        this.page++
        this.posts.push(...posts)
      }, 500)
      if (!this.posts.length) $state.complete()
    },
  },

  head() {
    return {
      title: 'Posts',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>

<style></style>