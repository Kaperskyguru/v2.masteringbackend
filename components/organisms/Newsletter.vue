<template>
  <div class="container bg-update position-relative">
    <img src="~/assets/img/img1.png" alt="" />
    <img src="~/assets/img/img2.png" alt="" />
    <img src="~/assets/img/img3.png" alt="" />
    <img src="~/assets/img/img4.png" alt="" />
    <img src="~/assets/img/img5.png" alt="" />
    <img src="~/assets/img/img6.png" alt="" />
    <div class="row">
      <div class="col-lg-10 mx-auto p-5 text-center">
        <div class="cent">
          <h4 class="update-head-text text-white fs-2">
            Want to Level-up Your Backend Engineering career?
          </h4>
          <p class="update-text fs-6 text-white">
            Then join 3,000+ others (including top backend engineers from
            Salesforce, Razorpay, Directi, and SentinelOne) that get our weekly
            Backend Engineering tips via email.
          </p>
          <div class="input-group mt-3">
            <input
              type="email"
              class="form-control text-white"
              v-model="email"
              placeholder="Enter your Email"
            />
            <Button
              appearance="outline-secondary"
              type="button"
              @click.prevent="subscribe"
            >
              Start Now
            </Button>
          </div>

          <div
            v-if="res.message || show"
            class="alert mt-1 fade d-flex font-weight-normal"
            style="justify-items;: space-between"
            :class="[`alert-${res.type}`, { show: show }]"
            role="alert"
          >
            <p class="w-100 font-weight-normal small">{{ res.message }}</p>
            <button
              v-if="res.message"
              type="button"
              data-dismiss="alert"
              aria-label="Close"
              @click="
                show = false
                res = {}
              "
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { submit } from '~/helpers/mailchimp'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Newsletter',
  data: () => ({ email: '', res: {}, show: false }),

  mounted() {},

  methods: {
    async subscribeTo() {
      await this.$axios.$post('https://vec.emlsend.com/api/1/addSubscriber/', {
        auth_token: '87e93c2f36b947b5bb42db688c3d9f91',
        list_id: 738756,
        merge_fields: {
          email: this.email,
        },
        update_subscriber: 1,
        welcome_email: 1,
        complete_json: 1,
        double_optin: 1,
      })
    },

    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: [],
      })
      this.show = true

      if (res.type === 'info')
        return this.$router.push('/emails/already-subscribed')

      if (res.type === 'success')
        return this.$router.push('/emails/free-updates')

      this.res = res
    },
  },
}
</script>

<style scoped>
.bg-update {
  background: #0a033c;
  border-radius: 20px;
  max-width: 800px;
  position: relative;
}

.bg-update img {
  width: 30px;
}

.bg-update img:nth-of-type(1) {
  position: absolute;
  top: 10%;
  left: 5%;
}

.bg-update img:nth-of-type(2) {
  position: absolute;
  top: 40%;
  left: 15%;
  opacity: 0.3;
}

.bg-update img:nth-of-type(3) {
  position: absolute;
  bottom: 10%;
  left: 5%;
}

.bg-update img:nth-of-type(4) {
  position: absolute;
  top: 10%;
  right: 5%;
}

.bg-update img:nth-of-type(5) {
  position: absolute;
  top: 40%;
  right: 15%;
  opacity: 0.3;
}

.bg-update img:nth-of-type(6) {
  position: absolute;
  bottom: 10%;
  right: 5%;
}

.update-head-text {
  font-weight: 600;
  font-size: 1.4rem;
}

.update-text {
  font-size: 1.2rem;
  color: #fff;
  opacity: 70%;
}

.bg-update .form-control {
  background: rgba(255, 255, 255, 0.2);
  border: none;
}

.update .input-group::placeholder {
  color: #fff;
}

.bg-update .btn-outline-secondary {
  background-color: #9c4df4;
  color: #fff;
  border: none;
  font-size: 0.9rem;
}
</style>