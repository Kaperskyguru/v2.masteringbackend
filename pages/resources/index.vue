<template>
  <HubsOverview
    title="Welcome To Our Resources Page"
    desc="Whether you're new to backend engineering, or want to scale up, this is your home for Exclusive backend engineering resources."
    :hubs="hubs"
  />
</template>
  
  <script>
export default {
  name: 'HubIndex',
  layout: 'hub',

  async asyncData({ query, store }) {
    try {
      const getPDFs = store.getters['hubs/getPDFs']
      let hubs = await getPDFs()
      if (!hubs?.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.count = 22
        hubs = await store.dispatch('hubs/getPDFs', data)
      }
      return { hubs }
    } catch (error) {
      const hubs = []
      return { hubs }
    }
  },

  head() {
    return {
      title: 'Resources',
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