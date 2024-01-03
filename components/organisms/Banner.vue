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

          <iframe
            src="https://embeds.beehiiv.com/8f12fd1d-bf52-4a8e-a14f-c33d3745fa49?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameborder="0"
            scrolling="no"
            style="
              margin: 0;
              border-radius: 0px !important;
              background-color: transparent;
            "
          ></iframe>

          <!-- <div id="custom-substack-embed"></div>

          <script>
            window.CustomSubstackWidget = {
              substackUrl: 'backendmasters.substack.com',
              placeholder: 'Enter your email address...',
              buttonText: 'Get the Guide',
              theme: 'custom',
              colors: {
                primary: '#191489',
                input: '#000000',
                email: '#FFFFFF',
                text: '#fff',
              },
            }
          </script>
          <script src="/substack.js" async></script> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { submit } from '~/helpers/mailchimp'
import { recaptcha } from '~/helpers/recaptcha'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
  data: () => ({ email: '', res: {}, show: false }),
  components: {
    // CheckIcon: () => import('~/assets/icons/check.svg?inline'),
  },

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }

    // window.CustomSubstackWidget.link2 = '/emails/free-updates'
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

    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: ['Laravel Tips', 'Laravel Breeze'],
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