<template>
  <main><TagsOverview :name="name" :posts="posts" /></main>
</template>
  
  <script>
// import { mapState } from 'vuex'
export default {
  name: 'PostsIndex',

  async asyncData({ query, params, store }) {
    try {
      const getPosts = store.getters['post/getPosts']
      let posts = await getPosts()
      if (!posts?.length) {
        const data = {
          page: query.page ? query.page : 1,
          slug: params?.slug ?? 'backend',
          count: 22,
        }
        posts = await store.dispatch('post/getCategoryPosts', data)
      }

      return { posts }
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    name() {
      return this.$route.params?.slug ?? 'backend'
    },
  },
}
</script>
  
  <style>
</style>
  