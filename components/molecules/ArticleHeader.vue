<template>
  <section class="showcase p-5 pt-4">
    <div class="container position-relative">
      <div class="col-lg-8 mx-auto text-center mt-2" style="color: #191489">
        <h4 class="">We give you more than articles daily</h4>
        <h1 class="content-text text-center fs-1 my-4">
          {{ post.title || '' }}
        </h1>
        <div class="mb-5">
          <img class="img-fluid" :src="image" :alt="post.title" />
        </div>

        <div class="d-flex justify-content-end gap-3">
          <div class="share">
            <a :href="'/authors/' + post.author.slug" class="subtitle is-6">
              <p>{{ post.author.name }}</p>
            </a>
            <p>May 5, 3 min read</p>
          </div>
          <div class="share">
            <img class="width me-3" src="~/assets/img/share(1).png" alt="" />
            <img class="width" src="~/assets/img/share(2).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    image() {
      if (this.post) {
        if (this.post.thumbnail_images) {
          if (this.post.thumbnail_images['post-thumbnail']) {
            return this.post.thumbnail_images['post-thumbnail'].url
          } else {
            if (this.post.thumbnail_images.full) {
              return this.post.thumbnail_images.full.url
            }
            return '/img/Importance-of-UI-UX-3.png'
          }
        }
      }
      return '/img/Importance-of-UI-UX-3.png'
    },
  },
}
</script>

<style scoped>
img {
  height: auto;
  width: 100%;
  background-size: cover;
}
</style>