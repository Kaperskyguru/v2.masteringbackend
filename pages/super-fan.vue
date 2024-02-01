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
              Become A Super Fan
            </h1>

            <p class="title__subtext fs-4">
              Don't just be a fan – be a super fan with a lifetime of
              extraordinary benefits. Seize this opportunity to make your
              backend engineering journey with us truly legendary. Limited
              availability, so grab your lifetime pass now and forever elevate
              your backend engineering career with us!
            </p>

            <div class="py-3 d-flex flex-column input-group">
              <Button
                :custom-style="{
                  backgroundColor: `${color}`,
                  color: '#fff',
                }"
                size="large"
                class="py-2 my-2 fs-4 fw-bold"
                @click.prevent="joinSuperFan"
              >
                Activate Lifetime for $150
                <span
                  style="
                    text-decoration-color: #ef4444;
                    text-decoration-line: line-through;
                    color: #dedede;
                  "
                  >($500)</span
                >
              </Button>
              <span class="text-center" style="font-size: smaller"
                >Use <strong>SuperFan</strong> coupon code (expiring on the
                <strong>1st of Feb, 2024</strong>)</span
              >
            </div>
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
        <div class="py-3 input-group d-flex flex-column justify-content-center">
          <Button
            :custom-style="{
              backgroundColor: `${color}`,
              color: '#fff',
            }"
            size="large"
            class="py-2 my-2 fs-4 fw-bold"
            @click.prevent="joinSuperFan"
          >
            Activate Lifetime for $150
            <span
              style="
                text-decoration-color: #ef4444;
                text-decoration-line: line-through;
                color: #dedede;
              "
              >($500)</span
            >
          </Button>
          <span class="text-center" style="font-size: smaller"
            >Use <strong>SuperFan</strong> coupon code (expiring on the
            <strong>1st of Feb, 2024</strong>)</span
          >
        </div>
      </div>
    </section>

    <!-- What You'll Learn Inside of the Course -->
    <section style="background-color: #f7f5fa">
      <section class="container mx-auto my-5 py-5">
        <PageTitle>
          <template #title>
            <h3 class="sponsor-header-text my-5 text-sentence text-center">
              What You'll Benefit
            </h3>
          </template>
        </PageTitle>

        <div id="hero_text" class="">
          <div class="row py-1">
            <div class="col-md-3">
              <div class="d-flex flex-column my-3">
                <div
                  class="d-flex justify-content-center align-items-center rounded-circle"
                  :style="`border: 2px solid ${color}; width: 50px; height: 50px`"
                >
                  <span style="font-size: 20px; font-weight: 700">1</span>
                </div>

                <h3 class="my-3">
                  Lifetime Access to MasteringBackend Platform
                </h3>
                <p class="fs-6">
                  Lifetime access to MasteringBackend Platform, including
                  unlimited access to all courses(Text, Video), Projects,
                  Roadmaps, Tasks, Backend Challenges, etc
                </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="d-flex flex-column my-3">
                <div
                  class="d-flex justify-content-center align-items-center rounded-circle"
                  :style="`border: 2px solid ${color}; width: 50px; height: 50px`"
                >
                  <span style="font-size: 20px; font-weight: 700">2</span>
                </div>

                <h3 class="my-3">Lifetime Access to GetBackendJobs Platform</h3>
                <p class="fs-6">
                  Lifetime access to the Get Backend Jobs platform, including
                  unlimited access to Backend-Only Jobs, Manage Job
                  Applications, Create Job Streak, etc.
                </p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="d-flex flex-column my-3">
                <div
                  class="d-flex justify-content-center align-items-center rounded-circle"
                  :style="`border: 2px solid ${color}; width: 50px; height: 50px`"
                >
                  <span style="font-size: 20px; font-weight: 700">3</span>
                </div>

                <h3 class="my-3">
                  Unlimited Access to our Backend Engineering Community
                </h3>
                <p class="fs-6">
                  Participate in all free bootcamps, attend all our conferences,
                  and interact with senior backend engineers from Salesforce,
                  Kora, Choco, etc
                </p>
              </div>
            </div>

            <div class="col-md-3">
              <div class="d-flex flex-column my-3">
                <div
                  class="d-flex justify-content-center align-items-center rounded-circle"
                  :style="`border: 2px solid ${color}; width: 50px; height: 50px`"
                >
                  <span style="font-size: 20px; font-weight: 700">4</span>
                </div>

                <h3 class="my-3">Unlimited Access to our Premium Newsletter</h3>
                <p class="fs-6">
                  Automatically subscribe to a free and premium newsletter where
                  we digest complex backend engineering concepts every week.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <div
            class="py-3 flex-column input-group d-flex justify-content-center"
          >
            <Button
              :custom-style="{
                backgroundColor: `${color}`,
                color: '#fff',
              }"
              size="large"
              class="py-2 my-2 fs-4 fw-bold"
              @click.prevent="joinSuperFan"
            >
              Activate Lifetime for $150
              <span
                style="
                  text-decoration-color: #ef4444;
                  text-decoration-line: line-through;
                  color: #dedede;
                "
                >($500)</span
              >
            </Button>
            <span class="text-center" style="font-size: smaller"
              >Use <strong>SuperFan</strong> coupon code (expiring on the
              <strong>1st of Feb, 2024</strong>)</span
            >
          </div>
        </div>
      </section>
    </section>

    <!-- Reviews from others -->
    <section class="container mx-auto my-5 py-5">
      <div>
        <CourseTestimonials title="Reviews from others" />
      </div>
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
        <div class="shadow p-2 text-center border my-4" style="width: 60%">
          <img
            v-lazy-load
            class="img-fluid w-full cover"
            data-src="https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/MB Demo 2.gif"
            alt="Product demo"
          />
        </div>
      </div>
    </section>

    <section class="container mx-auto my-5 py-5">
      <div class="mt-5">
        <PageTitle>
          <template #title>
            <h3 class="sponsor-header-text fw-bold text-sentence text-center">
              Unlock Your Backend Engineering Career Today
            </h3>
          </template>

          <h4 class="text-sentence text-center py-2">
            Pay once and never pay again to learn backend engineering forever.
          </h4>
        </PageTitle>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="">
          <div
            class="py-3 input-group d-flex flex-column justify-content-center"
          >
            <Button
              :custom-style="{
                backgroundColor: `${color}`,
                color: '#fff',
              }"
              size="large"
              class="py-2 my-2 fs-4 fw-bold"
              @click.prevent="joinSuperFan"
            >
              Activate Lifetime for $150
              <span
                style="
                  text-decoration-color: #ef4444;
                  text-decoration-line: line-through;
                  color: #dedede;
                "
                >($500)</span
              >
            </Button>
            <span class="text-center" style="font-size: smaller"
              >Use <strong>SuperFan</strong> coupon code (expiring on the
              <strong>1st of Feb, 2024</strong>)</span
            >
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
import Segment from '~/helpers/segment'
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
      return (
        (this.hub && this.hub?.design_url) ??
        'https://files.selar.co/product-images/2023/products/masteringbackend/technical-writing-the-com-selar.co-64999ea31aafb.png'
      )
    },
  },

  methods: {
    async joinSuperFan() {
      let plan = '871011'
      if (this.isDev()) plan = '63184'

      // eslint-disable-next-line no-undef
      await Paddle.Checkout.open({
        product: plan,
        allowQuantity: false,
        disableLogout: true,
        frameInitialHeight: 416,
        successCallback: (data) => this.checkoutComplete(data),
        closeCallback: (data) => this.checkoutClosed(data),
      })
    },

    checkoutComplete(data) {
      if (!data?.checkout?.completed) return

      this.sendSegment('SuperFanPaid', {
        product: data?.product ?? {},
        user: data?.user ?? {},
      })

      if (!data?.checkout?.redirect_url) return

      this.$router.push(data?.checkout?.redirect_url)
    },

    isDev() {
      return ['dev', 'development', 'staging'].includes(process.env.NODE_ENV)
    },
    async sendSegment(name, data) {
      if (this.isDev()) return
      const slug = this.$route?.params?.slug

      await Segment.identify(slug, {
        slug,
        ...(data?.user ?? {}),
      })
      await Segment.track(name, data)
    },
    getImage(topic) {
      return (
        topic?.image ??
        `https://assets-global.website-files.com/6478b97e8a7a81e06c1cff93/64901c79fa7af9474d6ed402_10%20pieces.svg`
      )
    },
  },

  head() {
    return {
      title: 'Become a Super Fan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
  
  <style>
</style>