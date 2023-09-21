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

          <!-- 
          <form id="form-d2fcdd82-c699-490c-8895-be934ad75feb" action="https://api.encharge.io/v1/forms/d2fcdd82-c699-490c-8895-be934ad75feb/submission/plain" method="POST">
	<div class="sc-jzJRlG hjFAqE">
		<div class="encharge-form-top-text sc-chPdSV exFeUc">
			<p>Enter your details and submit the form.</p>
		</div>
	</div>
	<div class="sc-jzJRlG hjFAqE">
		<div name="email" class="encharge-form-group sc-jTzLTM frRvjZ form-group">
			<label for="0d9879cb-e9dc-4d00-9bd9-faf84f9a1a2c" class="encharge-form-label sc-VigVT eRaSpr">
				<p>Email</p>
				<span class="sc-fjdhpX hIkOpy">*</span>
			</label>
			<input type="email" id="0d9879cb-e9dc-4d00-9bd9-faf84f9a1a2c" required name="email" placeholder="Enter your email" class="encharge-form-input sc-kAzzGY cfqAPA form-control"/>
		</div>
	</div>
	<div class="sc-jzJRlG hjFAqE">
		<div name="nativeFormMarketingConsent" class="encharge-form-group sc-jTzLTM bPowmp form-group">
			<input type="checkbox" id="2fe10423-9080-45d1-ad68-eac0064430c0" name="nativeFormMarketingConsent" required class="encharge-form-checkbox sc-gqjmRU gCOwty form-check-input"/>
			<label for="2fe10423-9080-45d1-ad68-eac0064430c0" class="encharge-form-label sc-VigVT bSCkYy">
				<p>I agree to receive emails from you.</p>
				<span class="sc-fjdhpX hIkOpy">*</span>
			</label>
		</div>
	</div>
	<div class="sc-cSHVUG ebRkVm">
		<button type="submit" class="encharge-form-submit-button sc-gZMcBi guPYmq btn btn-primary">Submit</button>
	</div>
</form> -->

          <div class="col-md-8">
            <form
              ref="form"
              @submit.prevent="onSubmit"
              id="form-607bce50-9e43-4d2d-87d5-7bfb30cc5b00"
              action="https://api.encharge.io/v1/forms/607bce50-9e43-4d2d-87d5-7bfb30cc5b00/submission/plain"
              method="POST"
            >
              <div class="mt-4 pt-4 pb-2">
                <small class="text-center fst-italic fw-bold"
                  >If you only want the resource, please peacefully unsubscribe
                  when you recieve it</small
                >
                <div class="input-group">
                  <input
                    class="col-lg-8 py-md-2 col-12 form-control shadow-none fs-5 my-2"
                    type="email"
                    id="2bddc629-7e6f-4d94-9a84-49dd84483fb5"
                    name="email"
                    style="border: 2"
                    required
                    placeholder="Enter your email address..."
                  />

                  <Button
                    type="submit"
                    class="col-lg-4 col-12 start-btn py-3 my-2"
                  >
                    Get the Guide
                  </Button>
                </div>
              </div>

              <div class="sc-jzJRlG hjFAqE">
                <div
                  name="nativeFormMarketingConsent"
                  class="encharge-form-group sc-jTzLTM bPowmp form-group"
                >
                  <input
                    type="checkbox"
                    id="2fe10423-9080-45d1-ad68-eac0064430c0"
                    name="nativeFormMarketingConsent"
                    required
                    class="encharge-form-checkbox sc-gqjmRU gCOwty form-check-input"
                  />
                  <label
                    for="2fe10423-9080-45d1-ad68-eac0064430c0"
                    class="encharge-form-label sc-VigVT bSCkYy"
                  >
                    <small>
                      I agree to receive emails from you (unsubscribe anytime)
                    </small>
                  </label>
                </div>
              </div>
            </form>
          </div>
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
    CheckIcon: () => import('~/assets/icons/check.svg?inline'),
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