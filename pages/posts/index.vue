<template>
  <main>
    <PostOverview :posts="posts" @scroll="infiniteScroll"></PostOverview>

    <infinite-loading spinner="spiral" @infinite="infiniteScroll"><span slot="no-more"></span></infinite-loading>
  </main>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'PostsIndex',

  data() {
    return {
      page: 2
    }
  },

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

  methods: {
    infiniteScroll($state) {
      setTimeout(async () => {

        const data = {
          populate: 'author',
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
    }
  },
}
</script>

<style></style>