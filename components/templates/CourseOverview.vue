<template>
  <section style="background-color: #fff" class="px-2">
    <section class="py-5">
      <div class="container mx-auto">
        <div class="row my-5 d-flex">
          <div id="chapter" class="col-md-7 position-relative" style="">
            <h1
              class="title__text py-4"
              style="font-size: 52px; font-weight: 800; line-height: 62px"
            >
              {{ title }}
            </h1>

            <p class="title__subtext fs-4">
              {{ description }}
            </p>

            <div class="py-3 input-group">
              <CourseButton :color="color" :link="link" :title="btnText" />
            </div>
          </div>
          <div class="col-md-5 hero__image" :id="enchargeTag">
            <!-- Add Waiting List Form -->
            <div v-if="isWaiting" class="shadow border p-4 my-4">
              <ResourceForm
                :tag="enchargeTag"
                :color="color"
                :isWaiting="isWaiting"
              />
            </div>
            <img
              v-else
              class="img-fluid"
              v-lazy-load
              :data-src="bookCover"
              :alt="title"
              srcset=""
            />
          </div>
        </div>
        <div class="d-flex justify-content-center my-5"></div>
      </div>
    </section>

    <section class="container mx-auto my-5 py-5">
      <div>
        <CourseTestimonials />
      </div>

      <div class="">
        <div class="py-3 input-group d-flex justify-content-center">
          <CourseButton :color="color" :link="link" :title="btnText" />
        </div>
      </div>
    </section>

    <!-- What You'll Learn Inside of the Course -->
    <section style="background-color: #f7f5fa">
      <section class="container mx-auto my-5 py-5">
        <PageTitle>
          <template #title>
            <h3 class="sponsor-header-text my-5 text-sentence text-center">
              What You'll Learn Inside of the Course
            </h3>
          </template>
        </PageTitle>

        <div id="hero_text" class="">
          <div class="row py-1">
            <div class="col-md-3" v-for="(chapter, i) in chapters" :key="i">
              <div class="d-flex flex-column my-3">
                <div
                  class="d-flex justify-content-center align-items-center rounded-circle"
                  :style="`border: 2px solid ${color}; width: 50px; height: 50px`"
                >
                  <span style="font-size: 20px; font-weight: 700">{{
                    i + 1
                  }}</span>
                </div>

                <h3 class="my-3">{{ chapter.title }}</h3>
                <p
                  class="fs-6"
                  v-html="
                    chapter.description ? chapter.description : chapter.excerpt
                  "
                ></p>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div class="py-3 input-group d-flex justify-content-center">
            <CourseButton :color="color" :link="link" :title="btnText" />
          </div>
        </div>
      </section>
    </section>

    <!-- Reviews from others -->
    <section class="container mx-auto my-5 py-5">
      <div>
        <CourseTestimonials title="Reviews from others" />
      </div>

      <div class="">
        <div class="py-3 input-group d-flex justify-content-center">
          <CourseButton :color="color" :link="link" :title="btnText" />
        </div>
      </div>
    </section>

    <!--  What will you learn inside? -->
    <section style="background-color: #f7f5fa">
      <section class="container mx-auto my-5 py-5">
        <PageTitle>
          <template #title>
            <h3
              class="sponsor-header-text fw-bold my-5 text-sentence text-center"
            >
              What will you learn inside?
            </h3>
          </template>
        </PageTitle>

        <div id="hero_text">
          <span v-for="(topic, i) in topics" :key="i">
            <div
              v-if="i % 2 == 0"
              class="row justify-content-center align-items-center py-1"
            >
              <div class="col-md-4">
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    :src="getImage(topic)"
                    :alt="topic.title"
                    class="img-fluid"
                  />
                </div>
              </div>

              <div class="col-md-8">
                <div class="px-5">
                  <h3 class="my-3 fw-bold">
                    {{ topic.title }}
                  </h3>
                  <article v-html="topic.description" class="fs-5"></article>
                </div>

                <div class="">
                  <div class="py-3 input-group d-flex justify-content-center">
                    <CourseButton
                      :color="color"
                      :link="link"
                      :title="btnText"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              v-else
              class="row justify-content-center align-items-center py-1"
            >
              <div class="col-md-8">
                <div class="px-5">
                  <h3 class="my-3 fw-bold">
                    {{ topic.title }}
                  </h3>
                  <article class="fs-5" v-html="topic.description"></article>
                </div>

                <div class="">
                  <div class="py-3 input-group d-flex justify-content-center">
                    <CourseButton
                      :color="color"
                      :link="link"
                      :title="btnText"
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="d-flex justify-content-center align-items-center">
                  <img
                    :src="getImage(topic)"
                    :alt="topic.title"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </span>
        </div>
      </section>
    </section>

    <section class="container mx-auto my-5 py-5">
      <PageTitle>
        <template #title>
          <h3
            class="sponsor-header-text fw-bold my-5 text-sentence text-center"
          >
            Take A Sneak Peek
          </h3>
        </template>
      </PageTitle>
      <div class="row justify-content-center align-items-center">
        <div class="shadow p-2 border my-4" style="width: 60%">
          <img
            v-lazy-load
            class="img-fluid cover"
            :data-src="animatedBookCover"
            :alt="title"
          />
        </div>
      </div>
    </section>

    <section class="container mx-auto my-5 py-5">
      <div class="mt-5">
        <PageTitle>
          <template #title>
            <h3 class="sponsor-header-text fw-bold text-sentence text-center">
              Unlock <strong>{{ title }}</strong> Today
            </h3>
          </template>

          <h4 class="text-sentence text-center py-2">
            Last week, another
            <span class="p-1 rounded" :style="`color: ${color}`"
              >107 new students</span
            >
            signed up.
          </h4>
        </PageTitle>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="">
          <div class="py-3 input-group d-flex justify-content-center">
            <CourseButton :color="color" :link="link" :title="btnText" />
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-5">
      <div class="text-center fs-6">
        Need help? Email info@masteringbackend.com
      </div>
    </section>
  </section>
</template>


<script>
export default {
  data: () => ({
    message: {},
    res: {},
  }),

  props: {
    hub: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    color() {
      const mixedColor = this.hub?.color ?? '#FF715D'
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    isPremium() {
      return this.hub?.is_premium
    },

    link() {
      if (this.isWaiting) return `#${this.enchargeTag}`
      if (this.isPremium) return this.linkToPay
      return `/hubs/${this.slug}` // TODO:: change URL to `books` instead of `hubs`
    },

    linkToPay() {
      return this.hub?.link ?? ''
    },

    slug() {
      return this.hub?.slug ?? '#'
    },

    price() {
      return this.hub?.price ?? 9.99
    },

    isWaiting() {
      return this.hub?.activate_waiting ?? false
    },

    enchargeTag() {
      return this.hub?.encharge_tag ?? ''
    },
    title() {
      return this.hub?.title
    },

    btnText() {
      return this.isPremium ? `Access for $${this.price}` : 'Get Started'
    },

    description() {
      return this.hub?.description
    },
    chapters() {
      const chapters = this.hub?.chapters
      if (chapters && chapters?.length > 1) return chapters ?? []

      return (chapters?.length && chapters[0]?.posts) ?? []
    },

    topics() {
      return this.hub?.topics ?? []
    },

    animatedBookCover() {
      return (
        (this.hub && this.hub?.image?.url) ??
        'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
      )
    },

    bookCover() {
      return this.hub && this.hub?.design_url
    },
  },

  methods: {
    getImage(topic) {
      return (
        topic?.image ??
        `https://assets-global.website-files.com/6478b97e8a7a81e06c1cff93/64901c79fa7af9474d6ed402_10%20pieces.svg`
      )
    },
  },
}
</script>

<style>
</style>