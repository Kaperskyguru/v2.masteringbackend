<template>
  <main class="main">
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section class="hero">
      <div class="container">
        <div class="row hero__grid">
          <div class="col-md-6 hero__title">
            <h1 class="title__text">Welcome to MB Content Hub</h1>
            <p class="title__subtext fs-6">
              Whether you're new to backend engineering, or want to scale up,
              this is your home for backend engineering knowledge.
            </p>

            <div class="input-group my-3">
              <input
                type="email"
                class="form-control p-3"
                placeholder="Enter your Email"
              />
              <button class="btn btn-outline-secondary" type="button">
                Start Now
              </button>
            </div>
          </div>
          <div class="col-md-6 hero__image">
            <img
              class="img-fluid"
              src="~/assets/img/image19.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- -------------------------------------------End Hero Section------------------------------------------------------------- -->

    <!-- -----------------------------------------Start Content Section------------------------------------------------------------------------ -->
    <section class="Content">
      <div class="container">
        <div v-for="(hub, i) in hubs" :key="i" class="row bg-white">
          <div
            class="col-xl-3 lh-lg col-lg-12 bg-warning text-center text-white"
          >
            <nuxt-link to="#">
              <h3 class="py-5 font-weight-normal fs-4">{{ hub.title }}</h3>

              <img
                class="img-fluid hub mt-3"
                :src="getDesign(hub)"
                :alt="hub.title"
              />
            </nuxt-link>
          </div>
          <div class="col-xl-9 col-lg-12">
            <div class="row justify-content-between py-5 px-4">
              <div class="col-12 row">
                <div class="col-lg-6">
                  <h5 class="pb-4" :style="{ color: `${color(hub)}` }">
                    What you will learn
                  </h5>
                  <p class="lh-lg">
                    {{ hub.description }}
                  </p>
                </div>
                <div class="col-lg-6">
                  <div class="row">
                    <h5 class="pb-4" :style="{ color: `${color(hub)}` }">
                      {{ getChapterCount(hub) }} Chapter{{
                        getChapterCount(hub) > 1 ? 's' : ''
                      }}
                    </h5>
                    <div class="d-flex flex-column justify-content-between">
                      <div
                        v-for="(chapter, index) in hub.chapters"
                        :key="index"
                      >
                        <p
                          class="pe-2 font-weight-light d-flex flex-row justify-content-start fs-5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            :fill="color(hub)"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M16 12l-6 6V6z" />
                          </svg>

                          <span class="flex-fill">{{ chapter.title }}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 align-self-end">
                <Button
                  appearance="outline-secondary"
                  class="btn-block"
                  size="large"
                  type="link"
                  :link="`/hubs/${hub.slug}`"
                >
                  Start Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    hubs: {
      type: Array,
      default: () => [],
    },
  },

  computed: {},

  methods: {
    color(hub) {
      const mixedColor = hub?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },
    getDesign(hub) {
      return (
        hub?.design_url ??
        'https://api.backlinko.com/app/uploads/2020/05/seo-fundamentals.svg'
      )
    },
    getChapterCount(hub) {
      return hub?.chapters?.length ?? 0
    },
  },
}
</script>

<style scoped>
</style>