<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <article
      v-if="!ispremium"
      data-clarity-region="article"
      v-highlight
      class="w-100"
      v-html="content"
    ></article>

    <span style="display: inline-block; position: relative" v-else>
      <div class="overlay p-3 d-flex align-items-center justify-content-center">
        <div class="text-center text-white mt-4">
          <div
            class="position-relative"
            :style="{ backgroundColor: `#5227AD`, padding: '5rem' }"
            id="notify"
          >
            <h3 class="fs-2 py-4">Don't Stop Learning</h3>
            <h6 class="fs-5 text-white">
              Continue reading the {{ title }} for ${{ price }} only or Get
              instant access to all current and upcoming courses and content
              through subscription.
            </h6>
            <Button
              appearance="primary"
              size="large"
              type="button"
              @click.native="openPremium"
              :custom-style="{
                backgroundColor: `#633db5`,
                color: '#fff',
              }"
              >Unlock Now</Button
            >
          </div>
        </div>
      </div>
      <div class="row g-3">
        <article
          data-clarity-region="article"
          v-highlight
          class="w-100"
          v-html="content"
        ></article>
      </div>
    </span>

    <Dialog v-model="isPremiumialogOpen" contentClass="">
      <template #left>
        <h3>Don't Stop Learning</h3>

        <div class="py-3">
          <div
            class="w-100 p-2 my-4 d-flex hover justify-content-center align-items-center"
            :class="{ active: showPremiumContent }"
            @click="openPremiumContent"
          >
            <!-- <PremiumIcon class="w-50 h-50" /> -->
            <div class="ps-2">
              <h4>Continue reading</h4>
              <p class="fs-6">
                Continue reading the "{{ title }}" for ${{ price }} only
              </p>
            </div>
          </div>

          <div
            class="w-100 p-2 my-4 hover d-flex justify-content-center align-items-center"
            :class="{ active: showSubscription }"
            @click="openSubscription"
          >
            <!-- <PremiumIcon class="w-50 h-50" /> -->
            <div class="ps-2">
              <h4>Monthly Subscription</h4>
              <p class="fs-6">
                Get instant access to all current and upcoming courses and
                content through subscription.
              </p>
            </div>
          </div>
        </div>

        <div class="w-100">
          <LearnerIcon class="mw-100" />
        </div>
      </template>

      <template #right>
        <span v-if="showPremiumContent">
          <div class="d-flex justify-content-center align-items-center">
            <div class="w-100 px-2" style="max-width: fit-content">
              <h4>Unlock Advanced Chapters</h4>

              <p class="fs-6 my-4" v-html="chapterContent"></p>
            </div>
          </div>

          <div class="text-center mt-2">
            <Button
              appearance="purple"
              type="button"
              class="col-12 py-3 my-2 fw-bold"
              @click.prevent="unlock"
              >Unlock now for ${{ price }}</Button
            >
          </div>
        </span>
        <!-- Subscription -->

        <span v-if="showSubscription">
          <div class="d-flex justify-content-center align-items-center">
            <div class="w-100 px-2" style="max-width: fit-content">
              <h4>Own your backend jouney</h4>

              <p class="fs-6 my-4">
                Get instant access to all current and upcoming courses and
                content through subscription.
              </p>
              <ul>
                <li>Personal Backend Portfolio to showcase your skills</li>
                <li>Learn to build from Thousands Real-world Projects</li>
                <li>Track your learnings and set schedules</li>
                <li>
                  Follow Expert Vetted roadmaps to learn backend engineering.
                </li>
                <li>
                  Map courses to Backend Projects to help you master your skills
                </li>
                <li>
                  Online coding challenges by experts to improve your skills
                </li>
                <li>
                  Pick projects from different business domains to practice.
                </li>
              </ul>
            </div>
          </div>

          <!-- <form
            ref="form"
            id="form-773de7a2-8769-4e6d-88ed-e978d69bae4d"
            action="https://api.encharge.io/v1/forms/773de7a2-8769-4e6d-88ed-e978d69bae4d/submission/plain"
            method="POST"
          >
            <div class="form-group py-3">
              <label class="text-dark" for="name">
                <b>Full name</b>
              </label>
              <input
                class="col-lg-8 py-md-2 col-12 form-control shadow-none fs-5 my-2"
                type="text"
                id="name"
                name="name"
                required
                style="border: 2"
                placeholder="Enter your full name..."
              />
            </div>
            <div class="form-group py-3">
              <label class="text-dark" for="email">
                <b>E-mail</b>
              </label>
              <input
                class="col-lg-8 col-12 form-control shadow-none fs-5"
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email address"
              />
            </div>

            <div class="py-3">
              <input
                type="hidden"
                id="31b47661-eae6-42bd-bc02-df3c004a01f9"
                name="HiddenTag"
                class="encharge-form-input sc-htoDjs jmyTNa form-control"
              />
            </div>
          </form> -->

          <div class="text-center mt-2">
            <Button
              appearance="purple"
              type="button"
              class="col-12 py-3 my-2 fw-bold"
              @click.prevent="subscribe"
              >Subscribe Now</Button
            >
          </div>
        </span>
      </template>
    </Dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import CustomAlert from '../molecules/CustomAlert.vue'
import Segment from '~/helpers/segment'
import {
  OPEN_PREMIUM,
  OPEN_PREMIUM_UNLOCK,
  OPEN_PREMIUM_SUBSCRIPTION,
  PREMIUM_UNLOCK,
  PREMIUM_UNLOCK_PAID,
  PREMIUM_UNLOCK_FAILED,
  PREMIUM_SUBSCRIPTION,
} from '~/helpers/enum'
export default {
  data: () => ({
    isPremiumialogOpen: false,
    showPremiumContent: true,
    showSubscription: false,
  }),
  props: {
    ispremium: { type: Boolean, default: false },
    post: {
      type: Object,
      default: () => {},
    },

    chapter: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    LearnerIcon: () => import('~/assets/icons/mb-learner.svg?inline'),
    // PremiumIcon: () => import('~/assets/icons/premium.svg?inline'),
  },

  mounted() {
    this.displayCustomReadMoreAlert()
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
    openPremium() {
      this.isPremiumialogOpen = !this.isPremiumialogOpen
      this.sendSegment(OPEN_PREMIUM, {})
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

    openPremiumContent() {
      this.showPremiumContent = true
      this.showSubscription = false
      this.sendSegment(OPEN_PREMIUM_UNLOCK, {})
    },

    isDev() {
      return ['dev', 'development', 'staging'].includes(process.env.NODE_ENV)
    },

    openSubscription() {
      this.showSubscription = true
      this.showPremiumContent = false
      this.sendSegment(OPEN_PREMIUM_SUBSCRIPTION, {})
    },

    createComponent(element, props = {}) {
      if (element != null) {
        const mountNode = document.createElement('div')
        mountNode.id = 'mount-node'
        mountNode.style.color = 'red' // .add('m-5')
        element?.replaceWith(mountNode)
        const ToastComp = Vue.extend(CustomAlert)
        if (Object.keys(props).length !== 0) {
          new ToastComp({
            propsData: props,
          }).$mount('#mount-node')
        } else {
          new ToastComp().$mount('#mount-node')
        }
      }
    },

    createCustomAlert(element, data = {}) {
      const props = {
        title: data?.title,
        description: data?.description,
        tags: data?.tags,
        Readlink: data?.url,
        showRead: true,
      }

      this.createComponent(element, props)
    },

    displayCustomReadMoreAlert() {
      const tables = document.querySelectorAll('table')

      const customTables = []

      tables.forEach((item) => {
        const table = item.querySelector('tbody tr td:nth-child(2) p')

        if (table.textContent.includes('custom')) {
          customTables.push(item)
        }
      })

      customTables.forEach((table) => {
        const data = {}
        const item = table.querySelectorAll('tbody tr')

        item.forEach((i) => {
          const key = i.querySelectorAll('td').item(0).textContent.toLowerCase()
          const value = i.querySelectorAll('td').item(1).textContent

          if (value === 'custom') return

          data[key] = value
        })

        this.createCustomAlert(table, data)
      })
    },

    async unlock() {
      let plan = this.chapter?.plan_id
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

      this.sendSegment(PREMIUM_UNLOCK, {})
    },

    checkoutComplete(data) {
      if (!data?.checkout?.completed) return

      this.sendSegment(PREMIUM_UNLOCK_PAID, {
        product: data?.product ?? {},
        user: data?.user ?? {},
      })

      if (!data?.checkout?.redirect_url) return

      this.$router.push(data?.checkout?.redirect_url)
    },
    checkoutClosed(data) {
      this.sendSegment(PREMIUM_UNLOCK_FAILED, {
        product: data?.product ?? {},
        user: data?.user ?? {},
      })

      // Todo:: Show failed Alert here
    },

    subscribe() {
      this.sendSegment(PREMIUM_SUBSCRIPTION, {})
    },
  },

  computed: {
    chapterContent() {
      return this.chapter?.excerpt ?? this.chapter?.content ?? ''
    },
    content() {
      return this.post?.content
    },
    price() {
      return this.chapter?.price ?? '14.99'
    },
    title() {
      return this.post?.title
    },
  },
}
</script>

<style scoped>
figure iframe {
  width: 100%;
  height: 400px !important;
}

.hover:hover {
  background-color: #eee;
}

.active {
  background-color: #eee;
}

article img {
  height: auto;
  max-width: 100%;
  background-size: cover;
}

article table {
  border: 1px solid #eee;
}

article > * {
  font-family: 'Georgia', serif !important;
}

article p,
article {
  font-size: 1.125rem;
  margin-bottom: 1.3rem;
  font-weight: 400;
  line-height: 2;
}

article h1,
article h2,
article h3,
article h4,
article h5,
article h6 {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}

article h3,
article h4 {
  font-weight: normal;
}

article h5,
article h6 {
  font-weight: lighter;
}

article h1,
article h2 {
  font-weight: bold;
}

article ul,
article ol {
  list-style: disc;
  margin-bottom: 1.3rem;
}

article ul li {
  line-height: 32px;
  font-size: 1.125rem;
  font-weight: 400;
}

article figure figcaption {
  line-height: 32px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
}

article figure img,
img {
  outline: none !important;
  margin: 0 auto !important;
  /* border: 5px solid #cccccc; */
  display: inline-block;
  width: 10%;
  height: auto;
  border-radius: 0 !important;
}

#article a,
#article a:hover {
  color: rgb(187, 74, 3);
  transition: all 0.2s ease-in-out 0s;
  background-color: transparent;
}

.overlay {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: #eee; */
  transition: background-color 0.5s;
}

.overlay p {
  color: #001ed3;
}
</style>