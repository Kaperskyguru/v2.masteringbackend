<template>
  <div class="container">
    <div class="my-5">
      <h5 class="topic__title--text text-center" :style="{ color: `${color}` }">
        More Topics
      </h5>
    </div>
    <div class="row g-4">
      <NuxtLink
        :to="`/hubs/${hub.slug}`"
        class="col-lg-4"
        v-for="hub in hubs"
        :key="hub.id"
      >
        <div
          class="card bg-pink pt-4"
          :style="{ backgroundColor: getColor(hub.color) }"
        >
          <div class="row">
            <div class="col-md-10 pt-2 ps-5">
              <h6
                class="text-white fw-bold"
                style="font-size: 0.84rem; font-weight: 700"
              >
                {{ getChapterCount(hub) }} Resource{{
                  getChapterCount(hub) > 1 ? 's' : ''
                }}
              </h6>
              <h2
                class="pt-4 text-white"
                style="
                  font-size: 1.68rem;
                  font-weight: 300;
                  line-height: 1.2;
                  display: block;
                "
              >
                {{ hub.title }}
              </h2>
            </div>
            <div class="col-lg-12 mb-3 p-5 d-flex justify-content-center">
              <div class="w-75">
                <img class="img-fluid" :src="getDesign(hub)" alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: '#1c168c' },
  },

  data: () => ({ hubs: [] }),

  computed: {},

  created() {
    this.getHubs()
  },

  methods: {
    getDesign(hub) {
      return (
        hub?.design_url ??
        hub?.image ??
        'https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.pngg'
      )
    },
    getChapterCount(hub) {
      return hub?.chapters?.length ?? 0
    },
    getColor(color) {
      const mixedColor = color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },
    async getHubs() {
      try {
        const getHubs = this.$store.getters['hubs/getHubs']
        let hubs = await getHubs()
        if (!hubs?.length) {
          const data = {}
          data.page = this.$route.query.page ? this.$route.query.page : 1
          data.count = 22
          hubs = await this.$store.dispatch('hubs/getHubs', data)
        }
        if (hubs.length < 0) return []
        this.hubs = hubs.splice(Math.floor(Math.random() * hubs.length), 3)
      } catch (error) {
        // console.log(error)
      }
    },
  },
}
</script>

<style>
</style>