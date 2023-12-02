<template>
  <div class="col-lg-6 position-relative">
    <div class="ellipse"></div>
    <div class="card shadow z-1" style="border: none; height: 650px">
      <div class="card-header p-0 m-0" :style="{ backgroundColor: color }">
        <Button
          appearance="none"
          class="text-white"
          style="outline: none; border: none"
          >{{ title }}</Button
        >
      </div>
      <div class="card-body py-4 px-3">
        <div v-for="(post, i) in posts" :key="i" class="pb-5">
          <h3 class="card-head-text fs-4 mt-3">
            <NuxtLink class="link" :to="`/posts/${post.slug}`">{{
              post.title
            }}</NuxtLink>
          </h3>
          <!-- <div class="mb-2">
            <small
              >By<a :href="'/authors/' + authorSlug(post)" class="subtitle">
                {{ authorName(post) }} </a
              >. Updated Oct. 12, 2021</small
            >
          </div> -->
          <article
            class="card-text mt-4"
            v-html="getPostExcerpt(stripTags(post.excerpt), 150)"
          ></article>
        </div>
      </div>

      <div class="card-footer text-right">
        <NuxtLink
          :to="`/posts#${slug}`"
          :style="{ color: color }"
          class="btn btn-sm ms-auto btn-col fs-5"
          >Read more
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'ArticleBoard',
  props: {
    title: {
      type: String,
      default: '',
    },
    color: { type: String, default: '#02020d' },
    slug: {
      type: String,
      default: '',
    },
    articles: {
      type: [Array, Object],
      default: () => [],
    },
  },
  data: () => ({
    posts: [],
  }),

  computed: {},

  // watch: {
  //   slug: {
  //     immediate: true,
  //     handler() {
  //       this.getCategoryPosts()
  //     },
  //   },
  // },

  created() {
    this.getCategoryPosts()
  },

  methods: {
    authorSlug(post) {
      return post?.author?.slug
    },

    authorName(post) {
      return post?.author?.name
    },
    getPostExcerpt(str, limit) {
      if (str.length <= limit) return str
      if (str.length > 0) {
        return str.substring(0, limit) + '...'
      }
    },

    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, '')
      }
    },

    async getCategoryPosts() {
      try {
        const getPosts = this.$store.getters['post/getCategoryPosts']
        this.posts = getPosts()
        if (!this.posts.length) {
          const data = {}
          data.count = 2
          data.slug = this.slug
          this.posts = await this.$store.dispatch('post/getCategoryPosts', data)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.Article .container {
  max-width: 1000px;
}

.ellipse {
  width: 100px;
  height: 100px;
  position: absolute;
  left: -1.67%;
  right: 88.85%;
  top: 2%;
  bottom: 70.14%;
  background-image: url('~/assets/img/combined-shape.png');
}

.article-intro-text {
  color: #0a083b;
  font-weight: 600;
}

.Article .article-row {
  background: #ede9f2;
  border-radius: 20px;
  z-index: -1;
}

.btn-purp {
  background-color: var(--purple);
  font-size: 0.8rem;
  border: none;
  color: white;
}

.card-head-text {
  color: #0a083b;
  font-weight: 600;
}

.art-card-text {
  font-size: 1.2rem;
  color: #5d5a6f;
}

.Article .button {
  color: #fff;
  background: #0a033c;
  border-radius: 6px;
}

.pattern {
  width: 130px;
  position: absolute;
  top: 7%;
  right: 19%;
  z-index: 1;
}

.Article .img-flu {
  z-index: 2;
}

.card {
  border-radius: 10px;
}

.card .card-head-text {
  color: #0a083b;
}

.card .btn-primary {
  background: #9c4df4;
  border-radius: 5px;
  border: none;
}

.card .btn-primary-1 {
  background: #2178ff;
  color: #fff;
  border-radius: 5px;
  border: none;
}

.card .btn-primary-2 {
  background: #f29c1f;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  border: none;
}

.card .btn-primary-3 {
  background: #0a083b;
  color: #fff;
  border-radius: 5px;
  border: none;
}

small {
  color: #57586e;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 30px;
}

.card-text {
  color: #57586e;
  font-size: 1rem;
}
</style>