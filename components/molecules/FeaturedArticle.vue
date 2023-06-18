<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="Updated">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <div class="col-md-1 pt-3 ms-3">
              <img
                class="d-lg-block pattern"
                src="~/assets/img/combined-shape.png"
                alt=""
              />
            </div>
            <div class="col-lg-10">
              <ArticleHead :post="post" />
            </div>
          </div>

          <div
            class="col-lg-10 col-md-12 mx-lg-auto col-sm-12 text-sm-start mt-5"
          >
            <p class="lh-md fs-5" v-html="getFirstParagraph()"></p>
          </div>
          <div class="row">
            <div class="col-lg-10 col-md-12 mx-lg-auto">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <p class="lh-md fs-5" v-html="get2Paragraphs()"></p>
                </div>
                <div class="col-lg-4 col-md-10 col-sm-10">
                  <img
                    class="img-fluid car-img"
                    :src="image"
                    :alt="post.title"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-10 mx-lg-auto col-sm-12 text-sm-start">
            <p class="lh-md fs-5" v-html="getLastParagraph()"></p>
          </div>

          <div class="d-grid col-md-10 col-sm-12 mx-md-auto">
            <a
              :href="`/posts/${post.slug}`"
              class="btn btn-primaryy btn-lg mt-4 fs-3 mb-4"
              >Continue Reading</a
            >
          </div>
        </div>
      </div>
    </div>
  </article>
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
      console.log(this.post)
      return (
        this.post &&
        (this.post?.image ??
          this.post?.featured_image?.url ??
          '/img/backend-2023.jpg')
      )
    },
  },

  methods: {
    getPostExcerpt(str, start = 0, limit = 150) {
      if (str.length > 0) {
        return str.substring(start, limit) + '...'
      }
    },

    getFirstParagraph() {
      const arr = this.paragraphs()
      if (!arr.length) return
      return arr[0][0]
    },

    get2Paragraphs() {
      const arr = this.paragraphs()
      if (!arr.length < 3) return
      return arr[1][0] + arr[2][0]
    },

    getLastParagraph() {
      const arr = this.paragraphs()
      if (!arr.length < 4) return
      return arr[3][0]
    },

    paragraphs() {
      if (!this.post) return
      const firstPara =
        this.post?.content?.matchAll('<p>(.*?)</p>') ??
        this.post?.excerpt?.matchAll('<p>(.*?)</p>')
      return [...(firstPara ?? [])]
    },

    stripTags(text) {
      if (text) {
        return text.replace(/(<([^>]+)>)/gi, '')
      }
    },
  },
}
</script>

<style scoped>
.pattern {
  width: 70px;
}

.btn-primaryy {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primaryy:hover {
  background-color: #100c5cda;
  color: #fff;
}

.car-img {
  width: 400px;
}

@media screen and (max-width: 576px) {
  .pattern {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .pattern {
    display: none;
  }
}
</style>