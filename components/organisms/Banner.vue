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
            <div class="my-4">
              <p class="title__subtext">
                “I thought the blog was good. But the courses? Even better!”
              </p>
              <div class="gradient"></div>
              <p class="fw-bold user-name">Solomon Eseme</p>
              <p class="job-title fs-6 fw-bold">Founder, Masteringbackend</p>
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
                Try it
              </Button>
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
  methods: {
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: [],
      })
      this.show = true
      this.res = res
    },
  },
}
</script>

<style scoped>
.hero__grid {
  margin-top: 10%;
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

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  /* left: 0; */
  transform: translate(0, -50%);
  top: 50%;
  background: rgba(255, 102, 82, 0.2);
  filter: blur(325px);
}
</style>