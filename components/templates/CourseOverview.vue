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
        <CourseTestimonials
          title="What Students Are Saying About The Creator MBA
"
        />
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
                    >In progress</span
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
          <Module :tag="enchargeTag" :color="color" :topic="topic" />
        </div>
      </div>
    </section>

    <!-- Reviews from others -->
    <section class="container mx-auto my-5 py-5">
      <div>
        <CourseTestimonials
          :data="testimonials"
          :showImage="false"
          title="Reviews from others"
        />
      </div>

      <div class="">
        <div class="py-3 input-group d-flex justify-content-center">
          <CourseButton :color="color" :link="link" :title="btnText" />
        </div>
      </div>
    </section>

    <section class="my-5 py-5" style="background-color: #f7f5fa">
      <div class="container mx-auto mt-5 py-3">
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
      </div>

      <div class="mb-3 container mx-auto text-center">
        <h4 class="text-xl fw-bold">Limited Offer:</h4>
        <p class="fw-bold">44% off for PRESALE orders</p>
        <span
          class="text-white px-3 py-2 rounded"
          :style="`background-color:${color}; font-weight: bold;`"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="icon"
            data-v-16c05a91=""
            style=""
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            data-v-bd832875=""
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m7.75-4.25a.75.75 0 0 0-1.5 0V8c0 .414.336.75.75.75h3.25a.75.75 0 0 0 0-1.5h-2.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <em> Next 100 orders only (49 left)</em></span
        >
      </div>

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
                  @click.prevent="() => buynow('single')"
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
              <div class="d-flex gap-2">
                <span class="fs-4 fw-bold">Cohort & Team Pricing</span>
                <select
                  name="team"
                  id="team"
                  style="border: 0px; background: none"
                  v-model="team"
                  @change="onSelected"
                >
                  <option value="cohort">Cohort</option>
                  <option value="3">3 seats</option>
                  <option value="5">5 seats</option>
                  <option value="10">10 seats</option>
                  <option value="15">15 seats</option>
                  <option value="25">25 seats</option>
                </select>
              </div>
              <div class="d-flex py-4 gap-3">
                <span class="fs-1 fw-bold" v-if="team == 'cohort'"
                  ><sup class="">$</sup>500
                </span>
                <span class="fs-1 fw-bold" v-else
                  ><sup class="">$</sup
                  >{{ team * price - Math.floor(team * price * (13 / 100)) }}
                </span>
                <div class="d-flex flex-column">
                  <span :style="`color: ${color}; text`" class="fs-5">
                    <del v-if="team == 'cohort'">$1000 </del>
                    <del v-else>${{ team * price }} </del>
                  </span>

                  <span>USD, one-time </span>
                </div>
              </div>
              <p class="fs-6" v-if="team == 'cohort'">
                Join our comprehensive backend engineering cohort and learn from
                the instructor directly.
              </p>
              <p class="fs-6" v-else>
                We offer team discounts on the full course based on the number
                of team members you'd like to purchase for.
              </p>

              <div class="w-100">
                <CourseButton
                  class="w-100"
                  :link="linkToPay"
                  :customStyle="{ width: '100%' }"
                  title="Buy Now"
                  type="btn"
                  @click.prevent="() => buynow('team')"
                />
              </div>

              <div v-if="team == 'cohort'">
                <span
                  class="d-flex gap-1 align-items-center"
                  :style="`color: ${color};`"
                >
                  <MarkIcon style="width: 2rem; height: 2rem" />
                  <span class="text-black">Everything in Course plan</span>
                </span>

                <span
                  class="d-flex gap-1 align-items-center"
                  :style="`color: ${color};`"
                >
                  <MarkIcon style="width: 2rem; height: 2rem" />
                  <span class="text-black"
                    >3-month access to the instructor</span
                  >
                </span>
              </div>
            </div>
            <p class="fs-6 pt-3 fw-light">
              Need more seats or info?
              <a
                style="text-decoration: underline"
                href="mailto:info@masteringbackend.com"
                >Email us.</a
              >
            </p>
          </div>

          <p class="text-center">
            Prefer a payment plan? Join for 3 payments of
            <a
              :style="`color: ${color};`"
              @click.prevent="showPlans = true"
              href="#"
              >${{ price / 3 + 10 }}/month <small>(click here)</small></a
            >
          </p>
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

    <Dialog
      :color="color"
      :visible="showPlans"
      @update:visible="showPlans = false"
      title="Prefer a payment plan? Join for 3 payments"
    >
      <div class="w-100 px-4 pb-4 pt-2">
        <div style="background-color: #eee">
          <div class="w-100">
            <div
              style="position: relative; padding: 56.25% 0 0 0"
              class="d-flex top-50 start-50 translate-middle w-100 h-100 flex-column justify-content-center align-items-center"
            >
              <div
                style="position: absolute"
                class="flex-column justify-content-center align-items-center d-flex"
              >
                <div style="height: 25px; width: 25px">
                  <LockIcon />
                </div>
                <div class="pt-3">
                  <h4 class="fs-2">Want a 3-month payment plan?</h4>
                </div>
                <div>Shoot us an email at: info@masteringbackend.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </section>
</template>


<script>
import { initializePaddle } from '@paddle/paddle-js'

export default {
  data: () => ({
    message: {},
    res: {},
    paddle: null,
    team: 3,
    showPlans: false,
    testimonials: [
      {
        feedback:
          "The course stood out because of its practical approach, clear structure, and focus on real-world projects. The instructor's expertise shines through every module, and the curriculum covered both fundamentals and advanced topics, which seemed comprehensive.",
        name: 'Imran Munawar',
        position: 'Backend Engineer (Node.js)',
        image: '',
      },

      {
        feedback:
          'There is order to the way your topics are handled making sure necessary concepts are learned before the next one because the previous concept is needed for understand the upcoming one.',
        name: 'Orevaoghene Eguwe',
        position: 'Backend Engineer',
        image: '',
      },

      {
        feedback:
          'The practical approach to learning Java backend development, especially through real-world examples, makes a lot of sense and helps me connect concepts to real scenarios. This course stood out because it comes with hands-on, structured learning path tailored for backend engineering rather than generic software development.',
        name: 'Deepak Vishwakarma',
        position: 'Software Engineer',
        image: '',
      },

      {
        feedback:
          'This course is exhaustive and covers basic to professional level Python that is needed in real life software development due to the in-depth course content',
        name: 'Mohammad Imteyaz Mohsin',
        position: 'Software Engineer',
        image: '',
      },

      {
        feedback:
          'The course covers from Basics to Advanced concepts breaking each concepts down with proper practical examples and projects. I think this is the best course to learn backend engineering.',
        name: 'Debasish Mohanta',
        position: 'Backend Engineer',
        image: '',
      },
      {
        feedback:
          "I love the course because it's project based and there are lots tasks.",
        name: 'Anuoluwapo Hammed',
        position: 'Software Engineer',
        image: '',
      },

      {
        feedback:
          'The course structure and progression make sense, especially the clear explanations of core Node.js concepts like modules, event-driven architecture, and asynchronous programming. The hands-on coding examples also help solidify the concepts.',
        name: 'Imran Munawar',
        position: 'Software Engineer',
        image: '',
      },

      {
        feedback:
          'I truly appreciate the high-quality material in this course. The structured lessons, hands-on projects, and clear explanations make learning a great experience. I look forward to future additions and updates! Thanks for your polite and friendly attitude.',
        name: 'Lyle Christine',
        position: 'A Happy Student from Scotland',
        image: '/img/people/lyle.webp',
      },
    ],
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
      return this.isPremium ? `Start Learning Now` : 'Get Started'
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
    this.track('ViewContent', {
      content_name: 'Landing Page',
      content_type: this.slug,
    })

    const PADDLE_ENVIRONMENT = this.isDev() ? 'sandbox' : 'production'
    // if (this.isDev()) {
    //   // eslint-disable-next-line no-undef
    //   Paddle.Environment.set('sandbox')
    // }
    // // eslint-disable-next-line no-undef
    // Paddle.Setup({
    //   vendor: Number(process.env.PADDLE_VENDOR),
    // })

    console.log(process.env)

    initializePaddle({
      token: process.env?.PADDLE_TOKEN,
      eventCallback: function (data) {
        switch (data.name) {
          case 'checkout.closed':
            this.checkoutClosed(data)
            break
          case 'checkout.completed':
            this.checkoutComplete(data)
            break
        }
      },
      environment: PADDLE_ENVIRONMENT,
    }).then((paddleInstance) => {
      if (paddleInstance) {
        this.paddle = paddleInstance
      }
    })
  },

  methods: {
    buynow(package1 = 'single') {
      let priceId = ''
      if (this.team === 'cohort') priceId = 'pri_01k4h94naarbwfwew78qd5xmpr'
      if (this.team === 3) priceId = 'pri_01k4h90625rvq6ew242dbwthpf'
      if (this.team === 5) priceId = 'pri_01k4h90w13v8748cmkdgvxsced'
      if (this.team === 10) priceId = 'pri_01k4h91ecbwc2s93pbe9k3n4ry'
      if (this.team === 15) priceId = 'pri_01k4h92b968k864nqw3k28q1e6'
      if (this.team === 25) priceId = 'pri_01k4h93746fkbphm9h044c0jfr'
      if (package1 === 'single') priceId = this.hub?.paddlePlanId
      if (this.isDev()) priceId = 'pri_01k44zz0g2v7g5q3kqb2chv303'

      if (!priceId) return this.$router.push('#' + this.enchargeTag)

      // eslint-disable-next-line no-undef
      // await Paddle.Checkout.open({
      //   product: plan,
      //   allowQuantity: false,
      //   disableLogout: true,
      //   frameInitialHeight: 416,
      //   coupon: package1 === 'single' ? 'PRESALE' : '',
      //   passthrough: {
      //     type: 'roadmap', // Change this to be dynamic
      //     slug: this.slug,
      //     isExternal: true,
      //     package: package1,
      //     ref:
      //       this.$route.query?.ref ??
      //       this.$route.query?.utm_source ??
      //       this.$route.query?.source ??
      //       'payment_unknown',
      //   },
      //   successCallback: (data) => this.checkoutComplete(data),
      //   closeCallback: (data) => this.checkoutClosed(data),
      // })

      this.paddle?.Checkout.open({
        settings: {
          allowedPaymentMethods: [
            'alipay',
            'apple_pay',
            'bancontact',
            'card',
            'google_pay',
            'ideal',
            'paypal',
          ],
        },
        discountCode: package1 === 'single' ? 'PRESALE' : '',
        items: [{ priceId }],
        customData: {
          type: 'roadmap', // Change this to be dynamic
          slug: this.slug,
          isExternal: true,
          package: package1,
          ref:
            this.$route.query?.ref ??
            this.$route.query?.utm_source ??
            this.$route.query?.source ??
            'payment_unknown',
        },
      })

      // Track buying intent
      // eslint-disable-next-line no-undef
      this.track('InitiateCheckout')
    },

    track(name, data = {}) {
      if (!this.isDev())
        // eslint-disable-next-line no-undef
        fbq('track', name, data)
    },

    onSelected() {
      this.track('CustomizeProduct')
    },

    isDev() {
      return ['dev', 'development', 'staging'].includes(process.env.NODE_ENV)
    },

    checkoutComplete(data) {
      if (data?.status !== 'completed') return

      const price = data?.totals?.total

      // Track purchase
      this.track('Purchase', {
        value: price,
        currency: data?.currency_code ?? 'USD',
      })

      return this.$router.push('/emails/purchased?title=' + this.title)
    },
    checkoutClosed(data) {
      console.log(data)
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

