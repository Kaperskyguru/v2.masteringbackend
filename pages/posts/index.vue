<template>
  <main><PostOverview :posts="posts"></PostOverview></main>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'PostsIndex',

  async asyncData({ query, store }) {
    try {
      const getPosts = store.getters['post/getPosts']
      let posts = await getPosts()
      if (!posts?.length) {
        const data = {
          populate: 'author',
          page: query.page ? query.page : 1,
          count: 22,
        }

        posts = await store.dispatch('post/getPosts', data)
      }
      return { posts }
    } catch (error) {
      console.log(error)
    }
  },

  // computed: {
  //   ...mapState({
  //     posts: (state) => {
  //       return [...state.post.posts]
  //     },
  //     post_count: (state) => {
  //       return state.post.total_post_pages
  //     },
  //   }),
  // },
}
</script>

<style>
</style>