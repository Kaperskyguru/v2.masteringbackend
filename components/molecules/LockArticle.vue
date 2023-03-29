<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="Career py-5">
    <div class="container mt-5">
      <div class="row">
        <a
          href="#"
          class="col-lg-10 bordder-primary mx-auto"
          @click="openModel"
        >
          <div class="row mt-5">
            <div class="col-md-1 pt-3 ms-3">
              <img
                class="d-lg-block pattern"
                src="~/assets/img/combined-shape.png"
                alt=""
              />
            </div>
            <ArticleHead class="mb-3" :post="post" :show-date="false" />

            <div class="blur-text">
              <div
                class="col-lg-10 col-md-10 col-sm-12 mx-auto text-sm-start test"
              >
                <img
                  class="img-fluid base-img"
                  :src="image"
                  :alt="post.title"
                />
              </div>
              <div class="col-lg-10 col-md-10 col-sm-12 mx-lg-auto mx-auto">
                <p class="text lh-md fs-5 mt-4" v-html="post.excerpt"></p>
              </div>
            </div>
            <div class="d-grid col-lg-10 col-md-10 col-sm-12 mx-auto my-4">
              <a
                href="#"
                class="btn btn-primaryy btn-lg mt-4 fs-3 mb-4"
                @click="openModel"
                >Unlock Now<span
                  ><img class="lock" src="~/assets/img/Lock.png" alt="" /></span
              ></a>
            </div>
          </div>
        </a>
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

  methods: {
    openModel(e) {
      e.preventDefault()
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

.bordder-primary {
  border: 2px solid #1c168c;
  border-radius: 5px;
}

small {
  color: #57586e;
}

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

.blur-text {
  opacity: 0.4;
}

.lock {
  width: 30px;
  margin-left: 3px;
}

.Career .bord {
  border: 2px solid #1c168c;
  border-radius: 10px;
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
