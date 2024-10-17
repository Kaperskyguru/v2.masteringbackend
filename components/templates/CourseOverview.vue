<template>
  <section style="background-color: #fff" class="-2">
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
    <section>
      <section class="container mx-auto my-5 py-5">
        <div id="hero_text" class="">
          <div class="row py-1">
            <div class="col-md-3" v-for="(chapter, i) in chapters" :key="i">
              <div class="d-flex flex-column my-3">
                <div class="d-flex align-items-center gap-3">
                  <div
                    class="d-flex justify-content-center align-items-center rounded-circle"
                    :style="`border: 2px solid ${color}; width: 50px; height: 50px`"
                  >
                    <span style="font-size: 20px; font-weight: 700">{{
                      i + 1
                    }}</span>
                  </div>
                  <!-- <span
                    v-if="
                      !course?.roadmap?.topics?.find(
                        (t) => t?.title === chapter?.title
                      )
                    "
                    class="py-1 px-2 rounded-pill"
                    :style="`background-color: ${color}; color:white; font-size:10px`"
                    >Coming soon</span
                  > -->
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
      </section>
    </section>

    <!-- Reviews from others -->
    <!-- <section class="container mx-auto my-5 py-5">
      <div>
        <CourseTestimonials title="Reviews from others" />
      </div>

      <div class="">
        <div class="py-3 input-group d-flex justify-content-center">
          <CourseButton :color="color" :link="link" :title="btnText" />
        </div>
      </div>
    </section> -->

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

    <section class="my-5 py-5" v-if="course?.roadmap?.topics">
      <div
        class="row justify-content-center align-items-center px-lg-5 mx-auto w-100"
      >
        <PageTitle>
          <template #title>
            <h3 class="fs-1 my-5 text-sentence text-center">What to expect</h3>
          </template>
        </PageTitle>

        <div v-for="(topic, i) in course?.roadmap?.topics" :key="i">
          <Module :color="color" :topic="topic" />
        </div>
      </div>
    </section>

    <section class="my-5 py-5" style="background-color: #f7f5fa">
      <section class="container mx-auto my-5 py-5">
        <PageTitle>
          <template #title>
            <h3
              class="sponsor-header-text fs-1 fw-bold text-sentence text-center"
            >
              Start learning today
            </h3>
          </template>
        </PageTitle>
        <p class="text-center">
          {{ description }}
        </p>
      </section>

      <div class="container mx-auto" id="pricing">
        <div class="row justify-content-center px-2 align-items-center">
          <div class="shadow border p-4 my-4 col-lg-4 col-md-6 col-12">
            <div>
              <span class="fs-3 fw-bold">Full Course - Early Access!</span>
              <div class="d-flex py-4 gap-3">
                <span class="fs-1 fw-bold"
                  ><sup class="">$</sup>{{ price }}
                </span>
                <div class="d-flex flex-column">
                  <span :style="`color: ${color}; text`" class="fs-5"
                    ><del>$270 </del></span
                  >
                  <span>USD, one-time </span>
                </div>
              </div>
              <p
                class="text-center"
                style="font-style: italic; font-weight: bold; font-size: 12px"
              >
                Note that more modules are coming soon
              </p>
              <div class="w-100">
                <CourseButton
                  class="w-100"
                  :color="color"
                  :customStyle="{ width: '100%' }"
                  title="Buy Now"
                  type="btn"
                  @click.prevent="buynow"
                />
              </div>

              <div>
                <span
                  class="d-flex gap-1 align-items-center"
                  :style="`color: ${color};`"
                >
                  <MarkIcon style="width: 2rem; height: 2rem" />
                  <span class="text-black"
                    >Over 100+ in-depth video tutorials</span
                  >
                </span>

                <span
                  class="d-flex gap-1 align-items-center"
                  :style="`color: ${color};`"
                >
                  <MarkIcon style="width: 2rem; height: 2rem" />
                  <span class="text-black">Lifetime access</span>
                </span>

                <span
                  class="d-flex gap-1 align-items-center"
                  :style="`color: ${color};`"
                >
                  <MarkIcon style="width: 2rem; height: 2rem" />
                  <span class="text-black"
                    >Deep dive into {{ language }} for backend engineering</span
                  >
                </span>

                <span
                  class="d-flex gap-1 align-items-center"
                  :style="`color: ${color};`"
                >
                  <MarkIcon style="width: 2rem; height: 2rem" />
                  <span class="text-black"
                    >Access to over 10+ modules (coming soon)</span
                  >
                </span>
              </div>
            </div>
          </div>
          <div class="border p-4 my-4 col-lg-4 col-md-6 col-12">
            <div>
              <div>
                <span class="fs-3 fw-bold">Team Pricing</span>
                <select
                  name="team"
                  id="team"
                  style="border: 0px; background: none"
                  v-model="team"
                >
                  <option value="3">3 seats</option>
                  <option value="5">5 seats</option>
                  <option value="10">10 seats</option>
                  <option value="15">15 seats</option>
                  <option value="25">25 seats</option>
                </select>
              </div>
              <div class="d-flex py-4 gap-3">
                <span class="fs-1 fw-bold"
                  ><sup class="">$</sup
                  >{{ team * price - Math.floor(team * price * (13 / 100)) }}
                </span>
                <div class="d-flex flex-column">
                  <span :style="`color: ${color}; text`" class="fs-5"
                    ><del>${{ team * price }} </del></span
                  >

                  <span>USD, one-time </span>
                </div>
              </div>
              <p class="fs-6">
                We offer team discounts on the full course based on the number
                of team members you'd like to purchase for.
              </p>
              <div class="w-100">
                <CourseButton
                  class="w-100"
                  color="#a7a7a7"
                  :link="linkToPay"
                  :customStyle="{ width: '100%' }"
                  title="Buy Now"
                />
              </div>
            </div>
            <p class="fs-6 fw-light">
              Need more seats?
              <a
                style="text-decoration: underline"
                href="mailto:info@masteringbackend.com"
                >Email us.</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <div class="py-5 mx-auto">
        <PageTitle>
          <template #title>
            <h3
              class="sponsor-header-text fs-1 fw-bold text-sentence text-center"
            >
              Meet Your Instructors:
            </h3>
          </template>
        </PageTitle>

        <div
          class="w-75 container mx-auto border-bottom"
          id="meta"
          v-if="hub?.author?.name"
        >
          <div class="my-5">
            <h5 class="fw-bold">
              {{ hub?.author?.description }}
            </h5>
          </div>
          <div class="row pt-1 gap-3">
            <div class="col-lg-5" id="hero_text">
              <div class="shadow px-4 pt-4 border" style="max-width: 300px">
                <img
                  :src="hub?.author?.image"
                  class="img-fluid rounded"
                  alt=""
                  srcset=""
                />

                <div class="text-center">
                  <div class="py-2">
                    <h3 class="fw-bold fs-4">{{ hub?.author?.name }}</h3>
                    <span>(Lead Instructor)</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div v-html="hub?.author?.content" class="article"></div>
            </div>
          </div>
        </div>

        <div
          class="w-75 container mx-auto"
          id="meta"
          v-if="hub?.author?.nickname !== 'kaperskyguru'"
        >
          <div class="my-5">
            <h5 class="fw-bold">
              A Passionate Software Engineer with 6+ years of experience in
              developing scalable and innovative softwares.
            </h5>
          </div>
          <div class="row gap-3 px-1 pt-1">
            <div class="col-lg-5" id="hero_text">
              <div class="shadow px-4 pt-4 border" style="max-width: 300px">
                <img
                  src="~/assets/img/solomon-eseme.jpg"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />

                <div class="text-center">
                  <div class="py-2">
                    <h3 class="fw-bold fs-4">Solomon Eseme</h3>
                    <span>(Assistant Instructor)</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="article">
                <p>
                  Solomon Eseme is the founder of Mastering Backend and the
                  author of
                  <a href="http://enterprisevue.dev" target="_blank"
                    >Architecting Enterprise Vue</a
                  >.
                </p>

                <p>
                  Solomon Eseme is an experienced Software Engineer specializing
                  in backend technologies.
                </p>
                <p>
                  After working across different frontend and backend stacks in
                  a variety of workplaces from start-ups to larger
                  consultancies,
                </p>
                <p>
                  He founded Masteringbackend to train and share resources on
                  building high-performing, scalable and innovative applications
                  following best practices and industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FAQ :hub="hub" />

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
        Need help? Email info[at]masteringbackend.com
      </div>
    </section>
  </section>
</template>


<script>
export default {
  data: () => ({
    message: {},
    res: {},
    team: 3,
  }),

  components: {
    MarkIcon: () => import('~/assets/icons/mark.svg?inline'),
  },

  props: {
    hub: {
      type: Object,
      default: () => {},
    },

    course: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    language() {
      const text = this.hub?.title?.split('Become A ')[1]
      return text?.split('Backend Engineer')[0]
    },
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
      if (this.isPremium) return '#pricing'
      return `#pricing` // TODO:: change URL to `books` instead of `hubs`
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

  mounted() {
    if (this.isDev()) {
      // eslint-disable-next-line no-undef
      Paddle.Environment.set('sandbox')
    }
    // eslint-disable-next-line no-undef
    Paddle.Setup({
      vendor: Number(process.env.PADDLE_VENDOR),
    })
  },

  methods: {
    async buynow() {
      let plan = this.hub?.paddlePlanId ?? undefined
      if (this.isDev()) plan = '63184'

      if (!plan) return this.$router.push('#' + this.enchargeTag)

      // eslint-disable-next-line no-undef
      await Paddle.Checkout.open({
        product: plan,
        allowQuantity: false,
        disableLogout: true,
        frameInitialHeight: 416,
        passthrough: {
          type: 'roadmap', // Change this to be dynamic
          slug: this.slug,
          isExternal: true,
        },
        successCallback: (data) => this.checkoutComplete(data),
        closeCallback: (data) => this.checkoutClosed(data),
      })

      // Track buying intent
    },

    isDev() {
      return ['dev', 'development', 'staging'].includes(process.env.NODE_ENV)
    },

    checkoutComplete(data) {
      if (!data?.checkout?.completed) return

      if (!data?.checkout?.redirect_url)
        return this.$router.push('/emails/purchased?title=' + this.title)

      this.$router.push(data?.checkout?.redirect_url)
    },
    checkoutClosed(data) {
      // this.sendSegment(PREMIUM_UNLOCK_FAILED, {
      //   product: data?.product ?? {},
      //   user: data?.user ?? {},
      // })
      // Todo:: Show failed Alert here
    },

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
.article a {
  color: rgb(187, 74, 3) !important;
}
</style>

