<template>
  <section>
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section style="background-color: #f7f5fa">
      <div class="container mx-auto">
        <div class="row d-flex align-items-center justify-content-between">
          <div id="chapter" class="col-lg-6 position-relative w-50" style="">
            <h1
              class="title__text py-4"
              style="font-size: 52px; font-weight: 800; line-height: 62px"
            >
              {{ title }}
            </h1>

            <p class="title__subtext fs-4">
              {{ description }}
            </p>
            <div class="gradient"></div>

            <div class="input-group py-3" v-if="isLaravelBreeze">
              <Button
                v-if="!isPDF"
                :custom-style="{
                  backgroundColor: `${color}`,
                  color: '#fff',
                }"
                size="large"
                type="link"
                link="https://store.masteringbackend.com/l/laravel-breeze"
              >
                {{ 'Grab Your Copy Now' }}
              </Button>
            </div>
            <!-- Automate this process -->
            <div class="input-group py-3" v-if="isDocker">
              <Button
                v-if="!isPDF"
                :custom-style="{
                  backgroundColor: `${color}`,
                  color: '#fff',
                }"
                size="large"
                type="link"
                link="https://store.masteringbackend.com/l/docker-ultimate-guide"
              >
                {{ 'Grab Your Copy Now' }}
              </Button>
            </div>
          </div>

          <div class="col-lg-6 ml-auto p-2">
            <div id="chapter" class="container mx-auto w-75">
              <div
                class="shadow border p-4 my-4"
                style="background-color: white"
              >
                <ResourceForm
                  v-if="!isLaravelBreeze || !isDocker"
                  :tag="enchargeTag"
                  :color="color"
                  :isWaiting="false"
                />

                <img
                  v-else-if="isDocker"
                  class="img-fluid"
                  v-lazy-load
                  data-src="https://public-files.gumroad.com/4b4q5j1x03zq6t19w7wnxizu5048"
                  alt="Laravel breeze PDF"
                  srcset=""
                />

                <img
                  v-else
                  class="img-fluid"
                  v-lazy-load
                  data-src="https://strapi-images-aws-s3.s3.us-west-2.amazonaws.com/1694963417_e55e6533b9.png?updated_at=2023-09-17T16:31:10.286Z"
                  alt="Laravel breeze PDF"
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-100" style="background-color: rgb(243, 246, 250)">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="container mx-auto">
          <div class="my-5">
            <h2
              class="fw-bolder"
              style="font-size: 50px; font-weight: 800; line-height: 65px"
            >
              What is the Ebook about?
            </h2>
          </div>
        </div>
        <div class="container mx-auto" id="hero_text">
          <div class="row py-1">
            <div class="col-lg-6">
              <div class="shadow p-4 border my-4" style="max-width: 500px">
                <img
                  v-lazy-load
                  class="img-fluid cover"
                  :data-src="image"
                  :alt="title"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div>
                <h3
                  class="py-4 fs-2 fw-bold"
                  style="color: #121127; font-size: 40px; line-height: 58.5px"
                >
                  {{ title }}
                </h3>

                <p style="color: #121127">
                  {{ description }}
                </p>
                <hr class="my-4" />

                <h3 class="my-3">What to expect?</h3>

                <li
                  v-for="(outline, i) in outlines"
                  :key="i"
                  style="font-size: 20px; line-height: 28px; color: #121127"
                  class="lh-lg list-unstyled fw-normal"
                >
                  <span
                    class="d-flex flex-row justify-content-start align-items-center title__text"
                    to="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      :fill="color"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16 12l-6 6V6z" />
                    </svg>

                    <span>{{ outline }}</span>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { submit } from '~/helpers/mailchimp'
export default {
  data: () => ({
    message: {},
    res: {},
    show: false,
  }),

  props: {
    post: {
      type: Object,
      default: () => {},
    },

    chapter: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: ['Laravel Tips', 'Laravel Breeze'],
      })
      this.show = true

      if (res.type === 'info')
        return this.$router.push('/emails/already-subscribed')

      if (res.type === 'success')
        return this.$router.push('/emails/free-updates')

      this.res = res
    },
  },

  computed: {
    color() {
      const mixedColor = this.chapter?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    outlines() {
      const outline = this.chapter?.content
      const out = outline
        ?.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim)
        .filter((x) => x.trim() !== '')
      return Array.isArray(out) ? out : []
    },

    enchargeTag() {
      return this.chapter?.encharge_tag ?? ''
    },
    title() {
      return this.chapter?.title
    },

    description() {
      return this.chapter?.description
    },

    isLaravelBreeze() {
      return this.chapter?.slug === 'laravel-breeze'
    },

    isDocker() {
      return this.chapter?.slug === 'docker-guide'
    },

    image() {
      return (
        this.chapter?.design_url ??
        'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
      )
    },
  },
}
</script>

<style scoped>
@media (max-width: 991.98px) {
  #chapter {
    width: 100% !important;
  }
}
</style>