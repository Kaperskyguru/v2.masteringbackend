<template>
  <section class="hero px-3">
    <div class="container mx-auto">
      <div class="row hero__grid">
        <div id="hero_text" class="col-lg-6 col-md w-75">
          <div class="position-relative w-100">
            <h1 class="title__text mb-md-2 display-4 mt-2 text-capitalize">
              Get Exclusive Backend Engineering Resources <br />We Only Share
              With Email Subscribers
            </h1>
            <!--   -->
            <div class="my-4">
              <p class="title__subtext fw-bold">
                Get immediate value: Laravel Breeze Tutorial: The Definitive
                Guide (2023)
              </p>
              <div class="gradient"></div>
              <ol style="list-style: none; padding-left: 1rem">
                <li class="job-title fs-6">
                  <CheckIcon style="width: 20px; height: 20px" />
                  Explore everything you need to master Laravel Breeze
                </li>
                <li class="job-title fs-6">
                  <CheckIcon style="width: 20px; height: 20px" />
                  Explore different authentication processes generated with
                  Laravel Breeze
                </li>
              </ol>
            </div>
          </div>
          <!-- ---------------input--------------------------------------------- -->
          <div class="col-md-8">
            <div class="input-group mt-4 py-4">
              <input
                class="col-lg-8 py-md-2 col-12 form-control shadow-none fs-5 my-2"
                type="email"
                v-model="email"
                style="border: 2"
                placeholder="Enter your email address..."
              />

              <Button
                @click.prevent="subscribe"
                type="button"
                class="col-lg-4 col-12 start-btn py-3 my-2"
              >
                Get the Guide
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
  </section>
</template>

<script>
import { submit } from '~/helpers/mailchimp'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
  data: () => ({ email: '', res: {}, show: false }),
  components: {
    CheckIcon: () => import('~/assets/icons/check.svg?inline'),
  },
  methods: {
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: ['Laravel Tips'],
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
.hero__grid {
  margin-top: 5%;
}

@media (max-width: 991.98px) {
  #hero_text {
    width: 100% !important;
  }
}

.title__text {
  font-weight: 800;
  /* font-size: 50px; */
}

.user-name {
  color: #16213e;
  line-height: 0;
}

.job-title {
  color: #001ed3;
}

.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
}
</style>