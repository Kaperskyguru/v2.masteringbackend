<template>
  <HubsOverview
    title="Welcome To Our Library"
    desc="Whether you're new to backend engineering, or want to scale up, this is your home for backend engineering books."
    :hubs="books"
  />
</template>
    
    <script>
export default {
  name: 'HubIndex',
  layout: 'hub',

  async asyncData({ query, store }) {
    try {
      const getBooks = store.getters['hubs/getBooks']
      let books = await getBooks()
      if (!books?.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.count = 22
        books = await store.dispatch('hubs/getBooks', {
          ...data,
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
      return { books }
    } catch (error) {
      const books = []
      return { books }
    }
  },

  head() {
    return {
      title: 'Backend Engineering Books',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Access to a catalog of backend books, backend development books, advanced backend engineering books, nestjs books and backend web development books. Next-level Backend Engineering books and Exclusive resources.`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Access to a catalog of backend books, backend development books, advanced backend engineering books, nestjs books and backend web development books. Next-level Backend Engineering books and Exclusive resources.`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Access to a catalog of backend books, backend development books, advanced backend engineering books, nestjs books and backend web development books. Next-level Backend Engineering books and Exclusive resources.`,
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
    
    <style scoped>
</style>