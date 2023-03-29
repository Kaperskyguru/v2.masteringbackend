<template>
  <section class="showcase pt-4" :style="{ backgroundColor: color }">
    <div class="container">
      <div class="container col-lg-8 mx-auto text-center pt-5">
        <h1 class="content-text text-white text-center fs-1 my-4">
          {{ post.title || '' }}
        </h1>
        <div class="d-flex flex-row justify-content-center gap-3">
          <a :href="'/authors/' + authorSlug" class="subtitle">
            <p class="text-white fs-6">by {{ authorName }}</p> </a
          >.
          <p class="text-white fs-6">Updated {{ dateFormat }}</p>
        </div>
        <div class="pb-5 text-white">
          <a
            v-for="category in getCategories"
            :key="category.id"
            :href="`/categories/${category.slug}`"
          >
            {{ category.name }},
          </a>
        </div>
        <figure class="cover-img figure">
          <img id="cover" class="img-fluid" :src="image" :alt="post.title" />
        </figure>
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
    authorSlug() {
      return this.post?.author?.slug
    },

    dateFormat() {
      return new Date(this.post.updatedAt).toDateString()
    },

    getCategories() {
      return this.post?.categories ?? []
    },

    color() {
      const mixedColor = this.post?.color ?? '#191489'
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    authorName() {
      return this.post?.author?.name
    },

    image() {
      if (this.post) {
        if (this.post.thumbnail_images) {
          if (this.post.thumbnail_images['post-thumbnail']) {
            return this.post.thumbnail_images['post-thumbnail'].url
          } else {
            if (this.post.thumbnail_images.full) {
              return this.post.thumbnail_images.full.url
            }
            return '/img/baseb.png'
          }
        }
      }
      return '/img/Base.png'
    },
  },
}
</script>

<style scoped>
.profile-img {
  margin-bottom: 0px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-img img {
  width: 100%;
  height: 100%;
  max-width: 100%;
}

.cover-img {
  position: relative;
  margin: 0 auto;
  max-width: 600px;
  margin-top: -10px;
}

.cover-img img {
  border-radius: 10px;
  position: relative;
}

.showcase {
  overflow: hidden;
  position: relative;
}

figure::before {
  content: '';
  position: absolute;
  left: -100vw;
  right: -100vw;
  bottom: 0;
  height: 50%;
  background-color: white;
}
</style>