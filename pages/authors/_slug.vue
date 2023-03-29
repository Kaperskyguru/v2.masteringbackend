<template>
  <main><AuthorsOverview :name="name" :posts="posts" /></main>
</template>
  
  <script>
// import { mapState } from 'vuex'
export default {
  name: 'PostsIndex',

  async asyncData({ query, params, store }) {
    try {
      const getPosts = store.getters['post/getPostsByAuthor']
      let posts = await getPosts()
      if (!posts?.length) {
        const data = {
          page: query.page ? query.page : 1,
          slug: params?.slug,
          count: 22,
          populate: 'author',
        }
        posts = await store.dispatch('post/getAuthorPosts', data)
      }

      let name
      if (posts.length) {
        name = posts[0]?.author?.name ?? params?.slug
      }

      return { posts, name }
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    // name() {
    //   return this.$route.params?.slug ?? 'backend'
    // },
  },
}
</script>
  
  <style>
</style>
  