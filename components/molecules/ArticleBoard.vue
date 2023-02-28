<template>
  <div class="col-lg-6">
    <div class="card py-4 px-3 shadow">
      <div class="mb-5">
        <Button
          type="link"
          :link="`categories/${slug}`"
          appearance="primary"
          class="mb-3 mt-3"
          >{{ title }}</Button
        >
        <div v-for="(post, i) in posts" :key="i">
          <h3 class="card-head-text mt-3">
            <nuxt-link class="link" :to="`/posts/${post.slug}`">{{
              post.title
            }}</nuxt-link>
          </h3>
          <div class="mb-4">
            <small
              >By<a :href="'/authors/' + post.author.slug" class="subtitle">
                {{ post.author.name }} </a
              >. Updated Oct. 12, 2021</small
            >
          </div>
          <article
            class="card-text text-justify"
            style="text-align: justify"
            v-html="getPostExcerpt(stripTags(post.excerpt), 150)"
          ></article>
        </div>
      </div>

      <nuxt-link :to="`/posts#${slug}`" class="btn btn-sm ms-auto btn-col"
        >Read more
      </nuxt-link>
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

  watch: {
    slug: {
      immediate: true,
      handler() {
        this.getCategoryPosts()
      },
    },
  },

  updated() {
    // this.getCategoryPosts()
  },

  methods: {
    getPostExcerpt(str, limit) {
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
          console.log(this.posts)
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
  width: 500px;
  position: absolute;
  bottom: 0;
  right: 0;
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
  font-weight: 700;
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
  font-size: 1.2rem;
}
</style>