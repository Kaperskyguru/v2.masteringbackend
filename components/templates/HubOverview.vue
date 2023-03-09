<template>
  <main class="main">
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section class="hero">
      <div class="container">
        <div class="row hero__grid">
          <div class="col-md-6 hero__title">
            <h1 class="title__text">{{ title }}</h1>
            <p class="title__subtext fs-6">
              {{ description }}
            </p>

            <div class="input-group my-3">
              <Button
                appearance="outline-secondary"
                size="large"
                type="link"
                :link="`/hubs/${slug}/${firstLink}`"
              >
                Start Now
              </Button>
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
    <section class="Content">
      <div class="container">
        <Chapter
          v-for="(chapter, i) in chapters"
          :key="i"
          :chapter="{
            hub: hub.slug,
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
    title() {
      return this.hub?.title ?? ''
    },

    slug() {
      return this.hub?.slug ?? ''
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