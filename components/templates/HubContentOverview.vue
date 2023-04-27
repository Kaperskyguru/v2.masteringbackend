<!-- eslint-disable vue/no-v-html -->
<template>
  <main>
    <HubBanner :chapter="chapter" :color="color" />

    <section class="" style="background-color: #fff">
      <Breadcrumb :hub="hub" :color="color" :chapter="chapter" :post="post" />

      <div class="container">
        <div class="row Resources pt-4 p-0 m-0">
          <div class="pt-4 col-md-3">
            <Outline :color="color" :outlines="outlines" />
          </div>

          <HubContent style="background-color: white" :post="post" />
        </div>
      </div>
    </section>

    <section>
      <div class="slides" :style="{ background: `${color}` }">
        <div class="container">
          <HubPagination :chapter="chapter" :outlines="outlines" />
        </div>
      </div>
    </section>

    <section>
      <!-- <RelatedHubs :color="color" /> -->
    </section>
  </main>
</template>

<script>
export default {
  props: {
    chapter: {
      type: Object,
      default: () => {},
    },

    post: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({ hubs: [] }),
  computed: {
    color() {
      const mixedColor = this.chapter?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    hub() {
      return this.chapter?.hub ?? {}
    },

    outlines() {
      return (
        this.chapter?.posts.map((post) => ({
          title: post.title,
          slug: post.slug,
        })) ?? ''
      )
    },
  },
}
</script>

<style>
</style>