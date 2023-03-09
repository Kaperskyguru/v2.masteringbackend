<template>
  <HubOverview :hub="hub" />
</template>

<script>
export default {
  name: 'ContentHub',
  layout: 'hub',

  async asyncData({ params, store }) {
    try {
      const getHub = store.getters['hubs/getHub']
      let hub = await getHub(params.hub)
      if (!hub?.length) {
        hub = await store.dispatch('hubs/getHub', params.hub)
      }

      return { hub }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style scoped>
</style>