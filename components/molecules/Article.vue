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
              <h1 class="fs-1 fw-bolder mb-1 Career-header-text">
                <nuxt-link class="title_header" :to="`/posts/${post.slug}`">
                  {{ post.title || '' }}</nuxt-link
                >
              </h1>
              <small class="fw-bold"
                >By Solomon Eseme. Updated Oct. 12, 2021</small
              >
            </div>

            <div
              class="col-lg-10 col-md-10 col-sm-12 mx-auto text-sm-start test"
            >
              <img
                v-lazy-load
                class="img-fluid base-img"
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
      if (this.post) {
        if (this.post?.image?.formats) {
          if (this.post?.image?.formats?.thumbnail) {
            return this.post?.image?.thumbnail?.url
          } else {
            if (this.post?.image?.url) {
              return this.post?.image?.url
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
.title_header {
  text-decoration: none;
  color: var(--primary-color);
  transition: 0.3s ease all;
}

.title_header:hover {
  color: #14107c;
}

h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

small {
  color: #57586e;
}

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

.lock {
  width: 30px;
  margin-left: 3px;
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