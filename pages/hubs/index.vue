<template>
  <HubsOverview :hubs="hubs" />
</template>
  
  <script>
export default {
  name: 'HubIndex',
  layout: 'hub',

  async asyncData({ query, store }) {
    try {
      const getHubs = store.getters['hubs/getHubs']
      let hubs = await getHubs()
      if (!hubs?.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.count = 22
        hubs = await store.dispatch('hubs/getHubs', data)
      }

      // console.log(hubs)

      return { hubs }
    } catch (error) {
      // console.log(error)
      const hubs = []
      return { hubs }
    }
  },

  head() {
    return {
      title: 'Hubs',
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