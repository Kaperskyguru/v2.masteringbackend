<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <HubContentOverview v-if="post" :post="post" :chapter="chapter" />
    <ChapterContentOverview v-else :post="post" :chapter="chapter" />
  </div>
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
      console.log(error, 'error')
    }
  },
}
</script>
  
  <style scoped>
</style>