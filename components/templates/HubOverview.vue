<template>
  <main class="main">
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section>
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
                :link="getURL"
              >
                Start Now
              </Button>
            </div>
          </div>
          <div class="col-md-6 hero__image">
            <img
              class="img-fluid w-"
              v-lazy-load
              :data-src="image"
              :alt="title"
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>
    <section class="Conent">
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