<template>
  <main><PostOverview :posts="posts"></PostOverview></main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PostsIndex',

  async asyncData({ query, store }) {
    try {
      const getPosts = store.getters['post/getPosts']
      const posts = getPosts()
      if (!posts.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.count = 22
        await store.dispatch('post/getPosts', data)
      }
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    ...mapState({
      posts: (state) => {
        return [...state.post.posts]
      },
      post_count: (state) => {
        return state.post.total_post_pages
      },
    }),
  },
}
</script>

<style>
</style>