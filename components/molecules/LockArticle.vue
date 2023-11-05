<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="Career py-5">
    <div class="container mt-5">
      <div class="row">
        <a
          href="#"
          class="col-lg-10 bordder-primary mx-auto"
          @click.prevent="openModel"
        >
          <div class="row mt-5">
            <div class="col-md-1 pt-3 ms-3">
              <img
                class="d-lg-block pattern"
                src="~/assets/img/combined-shape.png"
                alt=""
              />
            </div>
            <div class="col-lg-10">
              <ArticleHead class="mb-3" :post="post" :show-date="false" />
            </div>
            <div class="blur-text">
              <div
                class="col-lg-10 col-md-10 col-sm-12 mx-auto text-sm-start test"
              >
                <img
                  class="img-fluid base-img cover"
                  :src="image"
                  :alt="title"
                />
              </div>
              <div class="col-lg-10 col-md-10 col-sm-12 mx-lg-auto mx-auto">
                <p class="text lh-md fs-5 mt-4" v-html="excerpt"></p>
              </div>
            </div>
            <div class="d-grid col-lg-10 col-md-10 col-sm-12 mx-auto my-4">
              <a
                href="#"
                class="btn btn-primaryy btn-lg mt-4 fs-3 mb-4"
                @click.prevent="openModel"
                >Unlock Now<span
                  ><img class="lock" src="~/assets/img/Lock.png" alt="" /></span
              ></a>
            </div>
          </div>
        </a>
      </div>
    </div>

    <Dialog v-model="isEmailDialogOpen">
      <template #left>
        <h3>Read {{ title }}</h3>

        <div class="w-100">
          <LearnerIcon class="mw-100" />
        </div>
      </template>

      <template #right>
        <div class="mt-4 d-flex justify-content-center align-items-center">
          <div class="w-100 px-2" style="max-width: fit-content">
            <h4>Confirm Your Email to Access The Exclusive Content</h4>

            <p class="fs-6 my-4">
              AAlmost there! Please complete this form and click the button
              below to gain instant access.
            </p>
          </div>
        </div>

        <div id="custom-substack-embed"></div>

        <script>
          window.CustomSubstackWidget = {
            substackUrl: 'masteringbackend.substack.com',
            placeholder: 'Enter your email address...',
            buttonText: 'Unlock',
            theme: 'custom',
            colors: {
              primary: '#191489',
              input: '#000000',
              email: '#FFFFFF',
              text: '#fff',
            },
          }
        </script>
        <script src="/substack.js" async></script>
      </template>
    </Dialog>
  </article>
</template>

<script>
import { submit } from '~/helpers/mailchimp'
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    LearnerIcon: () => import('~/assets/icons/mb-learner.svg?inline'),
  },

  data: () => ({ isEmailDialogOpen: false, email: '', res: {}, show: false }),

  computed: {
    title() {
      return this.post?.title ?? ''
    },

    slug() {
      return this.post?.slug ?? ''
    },

    excerpt() {
      return this.post?.excerpt ?? ''
    },

    image() {
      return (
        this.post &&
        (this.post?.image ??
          this.post?.featured_image?.url ??
          '/img/backend-2023.jpg')
      )
    },
  },

  mounted() {
    window.CustomSubstackWidget.link = '/posts/' + this.slug
  },

  methods: {
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: [],
      })
      this.show = true

      if (res.type === 'info' || res.type === 'success')
        return this.$router.push(`/posts/${this.slug}`)

      this.res = res
    },

    openModel() {
      this.isEmailDialogOpen = true
    },
  },
}
</script>

<style scoped>
h1 {
  color: #0a083b;
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
