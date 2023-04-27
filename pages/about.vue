<template>
  <main>
    <section>
      <div class="container mx-auto">
        <div class="row hero__grid">
          <div id="hero_text" class="col-lg-6 col-md w-75">
            <div class="position-relative w-100">
              <h1
                class="title__text fw-bold mb-md-2 display-4 mt-2 text-capitalize"
              >
                Want to Level-up your Backend Engineering career?
              </h1>
              <div class="my-4">
                <p class="title__subtext">
                  You've come to the right place. Masteringbackend is a great
                  resource for backend engineers and next-level Backend
                  Engineering training and Exclusive resources.
                </p>
                <div class="gradient"></div>
              </div>
            </div>
            <!-- ---------------input--------------------------------------------- -->
            <div class="col-md-8">
              <div class="input-group mt-4 py-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border my-5"></div>

    <section class="p-3 sponsors text-center">
      <PageTitle>
        <template #title>
          <h3 class="sponsor-header-text mb-5 text-uppercase fw-bold">
            As seen on:
          </h3>
        </template>
      </PageTitle>
      <Sponsors />
    </section>

    <section class="container mx-auto">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="w-75 container mx-auto text-center">
          <div class="my-5">
            <h2 class="fw-bold">What Masteringbackend is all about</h2>
          </div>
        </div>
        <div class="w-75 container mx-auto" id="hero_text">
          <div class="row py-1 gap-5">
            <div class="container mx-auto w-50" id="hero_text">
              <p>If you’ve ever wondered:</p>
              <p>
                “Where can I find next level backend engineering training and
                resources?”, you’re in the right place. Masteringbackend is
                where professional backend engineers turn for proven backend
                engineering skills and resources.
              </p>
              <p>
                Our effective Backend Engineering courses and resources are why
                backend engineers from companies like Salesforce, Razorpay,
                Directi, and SentinelOne subscribe to our email newsletter.
              </p>
            </div>

            <div class="col-lg-4">
              <div class="d-flex flex-column"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="border my-5"></div>
    <section class="update p-3">
      <Newsletter />
    </section>
    <section class="p-3 sponsors text-center">
      <PageTitle>
        <template #title>
          <h3 class="sponsor-header-text mb- text-uppercase fw-bold">
            Trusted by:
          </h3>
        </template>
      </PageTitle>
      <Sponsors />
    </section>
    <div class="border my-5"></div>

    <section class="container mx-auto">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="w-75 container mx-auto text-center">
          <div class="my-5">
            <h2 class="fw-bold">About Solomon Eseme</h2>
          </div>
        </div>
        <div class="w-75 container mx-auto" id="hero_text">
          <div class="my-5">
            <h5 class="fw-bold">
              Meet Solomon, a Passionate Software Engineer with 6+ years of
              experience in developing scalable and innovative softwares.
            </h5>
          </div>
          <div class="row py-1">
            <div class="container mx-auto w-50" id="hero_text">
              <div
                class="shadow border p-4 mt-4"
                style="background-color: white; max-width: 300px"
              >
                <img
                  src="~/assets/img/solomon-eseme.jpg"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div>
                <p>
                  Solomon Eseme is the founder of Mastering Backend and the
                  author of
                  <a
                    href="http://architectingvue.com"
                    style="color: rgb(187, 74, 3) !important"
                    target="_blank"
                    >Architecting Enterprise Vue</a
                  >.
                </p>

                <p>
                  Solomon Eseme is an experienced Software Engineer specializing
                  in backend technologies.
                </p>
                <p>
                  After working across different frontend and backend stacks in
                  a variety of workplaces from start-ups to larger
                  consultancies,
                </p>
                <p>
                  He founded Masteringbackend to train and share resources on
                  building high-performing, scalable and innovative applications
                  following best practices and industry standards
                </p>
              </div>
              <div class="d-flex flex-row gap-3">
                <a href="https://kap.codes" target="_blank">
                  <div class="py-3 d-flex gap-1 align-items-baseline">
                    <div style="max-width: 30px">
                      <img
                        src="~/assets/img/website.png"
                        class="img-fluid"
                        alt="my official website"
                      />
                    </div>
                    <h6>Website</h6>
                  </div>
                </a>
                <a
                  href="http://twitter.com/kaperskyguru"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-baseline">
                    <div style="max-width: 30px">
                      <img
                        src="~/assets/img/twitter-big.png"
                        class="img-fluid"
                        alt="Twitter logo"
                      />
                    </div>
                    <h6>Twitter</h6>
                  </div>
                </a>

                <a
                  href="http://linkedin.com/in/solomon.eseme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-baseline">
                    <div style="max-width: 30px">
                      <img
                        src="~/assets/img/linkedin.png"
                        class="img-fluid"
                        alt="Linkedin logo"
                      />
                    </div>
                    <h6>Linkedin</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutPage',
  data: () => ({ user: {} }),

  head() {
    return {
      title: 'About Solomon Eseme and Masteringbackend',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "I'm Solomon Eseme. If you're not advancing in your backend engineering career… If you're confused by all the conflicting Backend Engineering information out there… Then we'll help you get where you want to be.",
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            "I'm Solomon Eseme. If you're not advancing in your backend engineering career… If you're confused by all the conflicting Backend Engineering information out there… Then we'll help you get where you want to be.",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            "I'm Solomon Eseme. If you're not advancing in your backend engineering career… If you're confused by all the conflicting Backend Engineering information out there… Then we'll help you get where you want to be.",
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
.hero__grid {
  margin-top: 10%;
}

@media screen and (max-width: 991.98px) {
  #hero_text {
    width: 100% !important;
  }
}

.title__text {
  font-weight: 800;
  /* font-size: 50px; */
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