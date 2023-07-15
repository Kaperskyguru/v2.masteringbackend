<template>
  <main class="main">
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section class="py-5 my-5">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 hero__title">
            <h1 class="title__text">
              {{ title }} {{ isPDF ? 'Resources' : '' }}
            </h1>
            <p class="title__subtext fs-6">
              {{ description }}
            </p>

            <div class="input-group py-3">
              <Button
                :custom-style="{
                  backgroundColor: `${color}`,
                  color: '#fff',
                }"
                size="large"
                type="link"
                :link="shouldActivateWaitingList ? '#' : getURL"
              >
                Start Now
              </Button>
            </div>
          </div>
          <div class="col-md-6 hero__image">
            <!-- Add Waiting List Form -->
            <div
              v-if="shouldActivateWaitingList"
              class="shadow border p-4 my-4"
              style="background-color: white"
            >
              <form
                id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
                action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain"
                method="POST"
              >
                <div class="form-group py-3">
                  <label
                    class="text-dark"
                    for="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                  >
                    <b>Full Name</b>
                  </label>
                  <input
                    id="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                    name="name"
                    class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div class="form-group py-3">
                  <label
                    class="text-dark"
                    for="7dbc4ccf-238b-4128-9250-634cccb01176"
                  >
                    <b>E-mail</b>
                  </label>
                  <input
                    id="7dbc4ccf-238b-4128-9250-634cccb01176"
                    name="email"
                    class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <input
                  type="hidden"
                  id="31b47661-eae6-42bd-bc02-df3c004a01f9"
                  name="HiddenTag"
                  :value="enchargeTag"
                  class="encharge-form-input sc-htoDjs jmyTNa form-control"
                />

                <div class="field">
                  <div class="control text-center mt-4">
                    <button
                      class="col-12 start-btn py-2 my-2 fs-4 fw-bold"
                      type="submit"
                      :style="{
                        backgroundColor: `${color}`,
                        color: '#fff',
                      }"
                    >
                      Get Notified
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <img
              v-else
              class="img-fluid"
              v-lazy-load
              :data-src="image"
              :alt="title"
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
    <section :class="{ 'py-5 my-5': shouldActivateWaitingList }" class="Conent">
      <div class="container">
        <Chapter
          v-for="(chapter, i) in chapters"
          :key="i"
          :chapter="{
            hub: hub,
            ...chapter,
          }"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  props: {
    hub: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    getURL() {
      return this.isPDF
        ? `/resources/${this.slug}/${this.firstLink}`
        : `/hubs/${this.slug}/${this.firstLink}`
    },

    isPDF() {
      return this.hub.type === 'pdf'
    },

    image() {
      return (
        this.hub?.design_url ??
        'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
      )
    },

    title() {
      return this.hub?.title ?? ''
    },

    color() {
      const mixedColor = this.hub?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        if (color) return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    slug() {
      return this.hub?.slug ?? ''
    },

    shouldActivateWaitingList() {
      return this.hub?.activate_waiting ?? null
    },

    enchargeTag() {
      return this.hub?.encharge_tag ?? ''
    },

    description() {
      return this.hub?.description ?? ''
    },

    chapters() {
      return this.hub?.chapters ?? []
    },

    firstLink() {
      if (this.chapters?.length) return this.chapters[0]?.posts[0]?.slug

      return '#'
    },
  },
}
</script>

<style scoped>
</style>