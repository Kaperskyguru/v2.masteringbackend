<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="Career py-">
    <div class="container mx-auto mt-5">
      <div class="row">
        <div class="col-lg-9 bordder-primary mx-auto">
          <div class="row text-center">
            <div class="col-lg-12 mt-3">
              <div
                class="fs-4 text-center py-3 mt-3 fw-bold"
                style="color: #001ed3"
              >
                Featured Resource
              </div>
            </div>
            <div class="col-lg mt-3">
              <ArticleHead
                :post="post"
                :show-author="false"
                :show-date="false"
              />

              <div class="col-lg-10 col-md-10 col-sm-12 mx-lg-auto mx-auto">
                <p
                  class="text lh-md fs-5"
                  v-html="
                    'Pursuing a Full-Time Career as a Backend Developer Pursuing a Full-Time Career as a Backend Developer Pursuing a Full-Time Career as a Backend Developer'
                  "
                ></p>
              </div>
            </div>
            <div class="blur-text">
              <div class="col-lg mx-auto text-sm-start">
                <img
                  class="img-fluid base-img"
                  :src="image"
                  :alt="'Pursuing a Full-Time Career as a Backend Developer'"
                />
              </div>
            </div>
            <div class="d-grid col-lg mx-auto">
              <div class="input-group p-3 mb-5 no-border">
                <input
                  class="col-8 py-md-2 form-control shadow-none fs-5"
                  type="email"
                  style="border: 2"
                  placeholder="Enter your email address..."
                />

                <Button
                  type="button"
                  class="col-4 start-btn py-3"
                  @click="openModel"
                >
                  Get The Free Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
  
  <script>
export default {
  name: 'FeaturedComponent',
  props: {
    post: {
      type: Object,
      default: () => ({
        title: 'Backend Engineering: The Ultimate Guide',
      }),
    },
  },

  computed: {
    image() {
      if (this.post) {
        if (this.post?.image) {
          return this.post?.image
        }
      }
      return '/img/Base.png'
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
.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
}

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
  /* opacity: 0.4; */
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
  