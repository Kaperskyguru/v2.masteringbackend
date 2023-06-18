<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="Career-three mt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="row mt-5">
            <div class="col-md-1 pt-3 ms-3">
              <img
                class="d-lg-block pattern"
                src="~/assets/img/combined-shape.png"
                alt=""
              />
            </div>

            <div class="col-lg-10">
              <ArticleHead class="mb-3" :post="post" />
            </div>

            <div
              class="col-lg-10 col-md-10 col-sm-12 mx-auto text-sm-start test"
            >
              <img
                v-lazy-load
                class="img-fluid cover"
                :data-src="image"
                :alt="post.title"
              />
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 mx-lg-auto mx-auto">
              <article
                class="text lh-md fs-5 mt-4"
                v-html="post.excerpt"
              ></article>
            </div>
            <div class="d-grid col-lg-10 col-md-10 col-sm-12 mx-auto my-4">
              <a
                :href="`/posts/${post.slug}`"
                class="btn btn-primary btn-lg mt-4 fs-3 mb-4"
                >Continue Reading<span>
                  <!-- <img class="lock" src="~/assets/img/Lock.png" alt="" /> -->
                </span></a
              >
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Article',

  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    image() {
      return (
        this.post &&
        (this.post?.image ??
          this.post?.featured_image?.url ??
          '/img/backend-2023.jpg')
      )
    },
  },
}
</script>

<style scoped>
.pattern {
  width: 70px;
}

.btn-primary {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #100c5cda;
  color: #fff;
}

.cover {
  max-width: 871.5px;
  background-size: cover;
  background-position: center;
  background-clip: content-box;
  width: 100%;
  height: 350px;
  object-fit: cover;
  object-position: 50% 50%;
}

footer small {
  color: #fff;
  opacity: 70%;
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