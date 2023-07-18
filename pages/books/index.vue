<template>
  <HubsOverview
    title="Welcome to the Masteringbackend library"
    desc="Whether you're new to backend engineering, or want to scale up, this is your home for backend engineering knowledge."
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
        books = await store.dispatch('hubs/getBooks', data)
      }
      return { books }
    } catch (error) {
      const books = []
      return { books }
    }
  },

  head() {
    return {
      title: 'Books',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.`,
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