
<template>
  <main>
    <section class="p-3 text-center">
      <PageTitle>
        <template #title>
          <h1 class="sponsor-header-text text-uppercase fw-bold">Contact us</h1>
        </template>
      </PageTitle>
    </section>

    <section class="container mx-auto">
      <div class="py-5 container mx-auto">
        <div class="w-75 container mx-auto" id="hero_text">
          <div class="row py-1 gap-5">
            <div class="container mx-auto w-50" id="hero_text">
              <h4>
                You can get in touch with Masteringbackend using this form.
              </h4>
              <div
                class="shadow border p-4 mt-4"
                style="background-color: white"
              >
                <form ref="form" method="post" @submit.prevent="submit">
                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>Full Name</b>
                    </label>
                    <input
                      v-model="message.fullname"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>E-mail</b>
                    </label>
                    <input
                      v-model="message.email"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="email"
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>Subject</b>
                    </label>
                    <input
                      v-model="message.subject"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="text"
                    />
                  </div>

                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>Message</b>
                    </label>
                    <textarea
                      v-model="message.message"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="text"
                    ></textarea>
                  </div>

                  <div class="field">
                    <div class="control text-center mt-4">
                      <button class="col-12 start-btn py-3 my-2" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-lg-4">
              <h4>Or you can find Masteringbackend on:</h4>
              <div class="d-flex flex-column">
                <a
                  href="http://twitter.com/master_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/twitter-big.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Twitter</h6>
                  </div>
                </a>
                <a
                  href="http://facebook.com/masteringbackend"
                  target="_blank"
                  aria-label="facebook"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/fb.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Facebook</h6>
                  </div>
                </a>
                <a
                  href="http://linkedin.com/company/masteringbackend"
                  target="_blank"
                  aria-label="linkedin"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/linkedin.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Linkedin</h6>
                  </div>
                </a>
                <a
                  href="https://medium.com/backenders-club"
                  target="_blank"
                  aria-label="medium"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/medium.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Medium Publication</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="mt-5 container mx-auto" id="hero_text">
            <p>
              If you have any query or suggestion then fill the form above I
              will be in touch with you shortly. Or mail us at –
              <strong> masteringbackend[at]gmail.com</strong>, we will get back
              to you within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  data: () => ({ message: {} }),

  head() {
    return {
      title: 'Contact Us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },

        { hid: 'og:title', property: 'og:title', content: 'Contact Us' },
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

<style scoped>
@media screen and (max-width: 991.98px) {
  #hero_text {
    width: 100% !important;
  }
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