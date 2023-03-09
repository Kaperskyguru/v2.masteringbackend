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
      return { hubs }
    } catch (error) {
      console.log(error)
    }
  },

  computed: {},
}
</script>
  
  <style scoped>
</style>