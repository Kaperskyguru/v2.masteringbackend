<template>
  <section>
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section style="background-color: #f7f5fa">
      <div class="container mx-auto">
        <div class="row d-flex align-items-center justify-content-between">
          <div id="chapter" class="col-lg-6 position-relative w-50" style="">
            <h1
              class="title__text py-4 px-2"
              style="font-size: 52px; font-weight: 800; line-height: 62px"
            >
              Build Real-world Projects while learning Backend
              <span class="hide"> Engineering.</span>
            </h1>

            <p class="title__subtext fs-4">
              Build real-world backend projects without coding the frontend. We
              will build the frontend and set up everything for you while you
              focus only on the backend APIs and databases.
            </p>
            <p class="title__subtext fs-4">
              If you code the API properly, the frontend will start working and
              the project will be added to your personal backend portfolio.
            </p>
            <p class="title__subtext fs-4">
              You can choose project from difficulty level ranging from Master,
              Elite, Guru, Prodigy, Expert-level, etc or from business domains
              such as Fintech, InsurTech, EduTech, etc.
            </p>
            <div class="gradient"></div>
          </div>
          <div class="col-lg-6 ml-auto p-2 col-sm-12">
            <div id="chapter" class="container mx-auto w-75">
              <div
                class="shadow border p-4 my-4"
                style="background-color: white"
              >
                <form
                  id="form-d75bfe02-7eac-42ee-8144-966ed7c82aac"
                  action="https://api.encharge.io/v1/forms/d75bfe02-7eac-42ee-8144-966ed7c82aac/submission/plain"
                  method="POST"
                >
                  <div class="form-group py-3">
                    <label
                      class="text-dark"
                      for="592f4650-1c19-4fa6-aa0f-32a30b399281"
                    >
                      <b>Full Name</b>
                    </label>
                    <input
                      id="592f4650-1c19-4fa6-aa0f-32a30b399281"
                      name="name"
                      class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div class="form-group py-3">
                    <label
                      class="text-dark"
                      for="afcb22f3-2906-43fe-b73d-0ccfebc003b4"
                    >
                      <b>E-mail</b>
                    </label>
                    <input
                      id="afcb22f3-2906-43fe-b73d-0ccfebc003b4"
                      name="email"
                      class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="email"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <input
                    type="hidden"
                    id="31b47661-eae6-42bd-bc02-df3c004a01f9"
                    name="HiddenTag"
                    :value="enchargeTag"
                    class="encharge-form-input sc-htoDjs jmyTNa form-control"
                  />

                  <div class="field">
                    <div class="control text-center mt-4">
                      <button
                        class="col-12 start-btn py-2 my-2 fs-4 fw-bold"
                        type="submit"
                        :style="{
                          backgroundColor: `${color ? color : '#FF715D'}`,
                          color: '#fff',
                        }"
                      >
                        Notify Me
                      </button>
                    </div>
                  </div>
                </form>
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
              What are the other Features?
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
      const mixedColor = this.chapter?.color ?? '#FF715D'
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    outlines() {
      const out = [
        'Personal Backend Portfolio to showcase your skills',
        'Learn to build from Thousands Real-world Projects',
        'Track your learnings and set schedules',
        'Follow Expert Vetted roadmaps to learn backend engineering.',
        'Map courses to Backend Projects to help you master your skills',
        'Online coding challenges by experts to improve your skills',
        'Pick projects from different business domains to practice.',
      ]
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
  .hide {
    display: none;
  }
}

.hide {
  display: inline;
}
</style>

