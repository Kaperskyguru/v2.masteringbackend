<template>
  <section>
    <div
      @click.prevent="showVideo"
      :style="{
        backgroundColor: '#f7f5fa',
        color: '#eee',
        cursor: content?.video && !content?.isPremium ? 'pointer' : '',
      }"
      class="py-2 px-3 rounded text-black shadow-xs"
      :class="{ 'pe-auto': !content?.isPremium }"
    >
      <span style="font-size: 0.875rem; color: rgb(82 82 91)"
        >{{ content?.video ? 'Video' : 'Article' }} {{ content?.index }}</span
      >
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-2">
          <span class="fw-normal" style="font-size: 1.1rem">{{
            content?.title
          }}</span>
          <span
            v-if="content?.video && !content.isPremium"
            class="px-2 py-1 text-white"
            :style="`background-color: ${color}; font-size: 10px`"
            >Free</span
          >
        </div>
        <!-- <div
          class="px-2 py-1"
          style="font-size: 0.75rem; background-color: #f8f6fb"
        >
          4:30
        </div> -->
      </div>
    </div>
    <Dialog
      :color="color"
      :visible="shouldPreview"
      @update:visible="shouldPreview = false"
      :title="content?.title"
    >
      <div class="w-100 px-4 pb-4 pt-2">
        <div v-if="isLocked" style="background-color: #eee">
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
                <div class="pt-3"><h4 class="fs-2">Watch for free</h4></div>
                <div>Enter your email below to watch this video</div>
                <!--  -->
                <div class="w-100">
                  <form
                    @submit.prevent="onSubmit"
                    ref="form"
                    class="w-100"
                    id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
                    method="POST"
                  >
                    <div class="d-flex align-items-center gap-2">
                      <div class="pt-3">
                        <input
                          id="7dbc4ccf-238b-4128-9250-634cccb01176"
                          name="email"
                          class="encharge-form-input sc-gqjmRU liSvtx shadow-none form-control fs-5 my-"
                          type="email"
                          required
                          v-model="email"
                          placeholder="Email"
                        />
                      </div>

                      <div class="pt-3">
                        <div class="">
                          <Button
                            :waiting="loading"
                            class="col- px-2 py-2 fs-6 fw-bold rounded"
                            type="submit"
                            :style="{
                              backgroundColor: `${color}`,
                              color: '#fff',
                            }"
                          >
                            Play video
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div class="sc-jzJRlG hjFAqE text-center">
                      <div
                        name="nativeFormMarketingConsent"
                        class="encharge-form-group sc-jTzLTM bPowmp"
                      >
                        <label
                          for="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4"
                          class="encharge-form-label sc-VigVT bSCkYy"
                        >
                          <small style="font-size: xx-small"
                            >By clicking, I agree to receive emails from you
                            (unsubscribe anytime).</small
                          >
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="!m- rounded-xl overflow-hidden">
          <div class="w-100">
            <div style="position: relative; padding: 56.25% 0 0 0">
              <iframe
                :src="`https://player.vimeo.com/video/${content?.video}?autoplay=1&title=false&byline=false`"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                allow="autoplay; encrypted-media"
                data-ready="true"
                data-vimeo-autoplay="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </section>
</template>

<script>
import { recaptcha } from '~/helpers/recaptcha'
import LockIcon from '~/assets/icons/lock.svg?inline'
import request from 'request'
export default {
  name: 'VideoC',
  components: {
    LockIcon,
  },
  props: {
    color: {
      type: String,
    },
    tag: { type: String },
    content: {
      type: Object,
      default: () => {},
    },
  },

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }
  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  },

  data: () => ({
    shouldPreview: false,
    isLocked: true,
    email: '',
    loading: false,
  }),

  methods: {
    showVideo() {
      if (this.content?.video && !this.content?.isPremium) {
        this.shouldPreview = !this.shouldPreview
      }
    },

    async onSubmit() {
      try {
        this.loading = true
        const token = await this.$recaptcha.execute('login')

        const data = await recaptcha({ token })

        if (!data?.success) return

        this.isLocked = false

        this.loading = true
        subscribe({ email: this.email, tag: this.tag })
        // await fetch(`https://api.encharge.io/v1/people`, {
        //   method: 'POST',
        //   body: JSON.stringify([
        //     {
        //       email: this.email,
        //       HiddenTag: this.tag,
        //     },
        //   ]),
        //   headers: {
        //     'X-Encharge-Token': process.env.ENCHARGE_KEY,
        //   },
        //   mode: 'no-cors',
        // })
      } catch (error) {
        this.isLocked = false
        this.loading = false
        console.log('Login error:', error)
      }
    },

    subscribe({ email, tag }) {
      return new Promise(function (resolve, reject) {
        request.post(
          {
            url: 'https://api.encharge.io/v1/people',
            body: {
              email: email,
              HiddenTag: tag,
            },
            json: true,
            dataType: 'jsonp',
            headers: {
              'X-Encharge-Token': process.env.ENCHARGE_KEY,
            },
          },
          function (err, httpResponse, body) {
            console.log(err, httpResponse, body)
            if (err) {
              console.log(err)
              reject(err)
            }
            body = JSON.parse(body)
            resolve(body)
          }
        )
      })
    },
  },
}
</script>
<style>
</style>