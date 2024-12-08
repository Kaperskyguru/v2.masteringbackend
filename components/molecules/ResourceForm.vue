<template>
  <iframe
    v-if="slug.includes('design-patterns')"
    src="https://embeds.beehiiv.com/638ed077-b961-4a71-80a7-cefc821c28d4"
    data-test-id="beehiiv-embed"
    width="100%"
    height="320"
    frameborder="0"
    scrolling="no"
    style="
      border-radius: 4px;
      border: 2px solid #e5e7eb;
      margin: 0;
      background-color: transparent;
    "
  ></iframe>

  <form
    v-else
    @submit.prevent="onSubmit"
    ref="form"
    id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
    action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain"
    method="POST"
  >
    <div class="form-group py-3">
      <label class="text-dark" for="1bf52140-11b8-46e9-8115-8fa21b589cfb">
        <b>Full Name</b>
      </label>
      <input
        id="1bf52140-11b8-46e9-8115-8fa21b589cfb"
        name="name"
        class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
        type="text"
        placeholder="Enter your full name"
        required
      />
    </div>

    <div class="form-group py-3">
      <label class="text-dark" for="7dbc4ccf-238b-4128-9250-634cccb01176">
        <b>E-mail</b>
      </label>
      <input
        id="7dbc4ccf-238b-4128-9250-634cccb01176"
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
      :value="tag"
      class="encharge-form-input sc-htoDjs jmyTNa form-control"
    />

    <div class="field mt-4">
      <small class="text-center fst-italic fw-bold"
        >If you only want the resource, please peacefully unsubscribe when you
        recieve it</small
      >
      <div class="control text-center">
        <button
          class="col-12 start-btn py-2 my-2 fs-4 fw-bold"
          type="submit"
          :style="{
            backgroundColor: `${color}`,
            color: '#fff',
          }"
        >
          {{ isWaiting ? 'Get Notified' : 'Get The Book' }}
        </button>
      </div>
    </div>

    <div class="sc-jzJRlG hjFAqE">
      <div
        name="nativeFormMarketingConsent"
        class="encharge-form-group sc-jTzLTM bPowmp form-group"
      >
        <input
          type="checkbox"
          id="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4"
          name="nativeFormMarketingConsent"
          required
          class="encharge-form-checkbox sc-gqjmRU gCOwty form-check-input"
        />
        <label
          for="193ff0f2-d701-4df3-a0bf-e9d1e1f30aa4"
          class="encharge-form-label sc-VigVT bSCkYy"
        >
          <small
            >I agree to receive emails from you (unsubscribe anytime).</small
          >
        </label>
      </div>
    </div>
  </form>
</template>

<script>
import { recaptcha } from '~/helpers/recaptcha'
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: '',
    },
    isWaiting: {
      type: Boolean,
      default: true,
    },

    slug: {
      type: String,
      default: '',
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

  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')

        const data = await recaptcha({ token })

        if (!data?.success) return

        this.$refs.form?.submit()
      } catch (error) {
        console.log('Login error:', error)
      }
    },
  },
}
</script>

<style>
</style>