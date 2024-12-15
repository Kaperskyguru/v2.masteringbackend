<template>
  <div>
    <footer class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="col mb-3">
              <div>
                <Logo is-white />
                <p class="fs-6 mt-2 text-white">
                  A great resource for backend engineers. Next-level Backend
                  Engineering training and Exclusive resources.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-between">
              <div class="col-md-3 text-col">
                <p class="mb-4">Learn</p>
                <div class="d-md-flex text-white">
                  <ul class="footer-nav fs-6">
                    <li class="mb-3">
                      <NuxtLink to="/posts">Blog</NuxtLink>
                    </li>
                    <li class="mb-3">
                      <NuxtLink to="/courses">Courses</NuxtLink>
                    </li>
                    <li class="mb-3">
                      <NuxtLink to="/books">Books</NuxtLink>
                    </li>
                    <li class="mb-3">
                      <NuxtLink to="/hubs">Hubs</NuxtLink>
                    </li>
                    <li>
                      <a
                        href="https://store.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer"
                        >Our Store</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 text-col">
                <p class="mb-4">Products</p>
                <div class="d-md-flex text-white">
                  <ul class="footer-nav fs-6">
                    <li class="mb-3">
                      <a
                        target="_blank"
                        :href="`https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`"
                        >MB Platform</a
                      >
                    </li>
                    <li class="mb-3">
                      <a
                        target="_blank"
                        :href="`https://playground.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`"
                        >Code Playground</a
                      >
                    </li>
                    <li class="mb-3">
                      <a
                        target="_blank"
                        :href="`https://getbackendjobs.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`"
                        >Get Backend Jobs</a
                      >
                    </li>

                    <li class="mb-3">
                      <a target="_blank" href="#">Backend Interview Preps</a>
                    </li>
                    <li class="mb-3">
                      <a
                        target="_blank"
                        href="https://projects.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer"
                        >Access 200+ Backend Projects</a
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 text-col">
                <p class="mb-4">Join</p>
                <div class="d-md-flex text-white">
                  <ul class="footer-nav fs-6">
                    <li class="mb-3">
                      <a
                        target="_blank"
                        :href="`https://app.masteringbackend.com?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer`"
                        >Learn Backend Free</a
                      >
                    </li>
                    <li class="mb-3">
                      <NuxtLink to="/newsletter">Join Our Newsletter</NuxtLink>
                    </li>
                    <li class="mb-3">
                      <nuxt-link to="/community">Join Our Community</nuxt-link>
                    </li>

                    <li class="mb-3">
                      <nuxt-link to="/academy">Join The Academy </nuxt-link>
                    </li>

                    <li class="mb-3">
                      <a
                        target="_blank"
                        href="https://backendweekly.dev/podcasts?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer"
                        >Listen to GBE Podcast
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3 text-col">
                <p class="mb-4">Company</p>
                <ul class="footer-nav fs-6">
                  <li class="mb-3"><nuxt-link to="/">Home</nuxt-link></li>
                  <li class="mb-3"><nuxt-link to="/about">About</nuxt-link></li>
                  <li class="mb-3">
                    <nuxt-link to="/contact">Contact</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div class="d-md-flex align-items-center justify-content-between">
          <div class="d-flex socia-links mb-3 align-items-center">
            <a
              href="https://facebook.com/masteringbackend"
              aria-label="facebook"
            >
              <div class="socia-link p-2">
                <img
                  class="img-fluid face"
                  src="~/assets/img/facebook.png"
                  alt=""
                />
              </div>
            </a>
            <a href="https://twitter.com/master_backend" aria-label="twitter">
              <div class="socia-link p-2">
                <img class="img-fluid" src="~/assets/img/twitter.png" alt="" />
              </div>
            </a>
            <a href="https://instagram.com/kaperskyguru" aria-label="instagram">
              <div class="socia-link p-2">
                <img
                  class="img-fluid"
                  src="~/assets/img/instagram.png"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div>
            <small class="text-light fs-7"
              >© {{ new Date().getFullYear() }} Masteringbackend. All right
              reserved.</small
            >
          </div>
        </div>
        <div class="col-md-8">
          <div>
            <nuxt-link to="/terms-and-conditions"
              >Terms and Conditions</nuxt-link
            >
            |&nbsp;
            <nuxt-link to="/privacy-policy">Privacy</nuxt-link>
            |&nbsp;
            <nuxt-link to="/disclaimer">Disclaimer</nuxt-link>
            |&nbsp;
            <nuxt-link to="/return-policy">Return Policy</nuxt-link>
            <!-- |&nbsp;
            <nuxt-link to="#" @click.prevent="showLogin = !showLogin">Login</nuxt-link>
            |&nbsp;
            <nuxt-link to="#" @click.prevent="showRegister = !showRegister"
              >Register</a
            > -->
          </div>
        </div>

        <small
          >This site is protected by reCAPTCHA and the Google
          <nuxt-link to="https://policies.google.com/privacy"
            >Privacy Policy</nuxt-link
          >
          and
          <nuxt-link to="https://policies.google.com/terms"
            >Terms of Service</nuxt-link
          >
          apply.
        </small>
      </div>
    </footer>
    <Login v-if="showLogin"></Login>
    <Register v-if="showRegister"></Register>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',

  data: () => ({
    showLogin: false,
    showRegister: false,
  }),
}
</script>

<style scoped>
footer {
  background: #05041b;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.6rem;
  font-weight: normal;
}

a {
  text-decoration: none;
  color: white;
}

footer ul {
  list-style-type: none;
  padding-left: 0;
}

footer .email {
  color: #fff;
  opacity: 70%;
}

.text-col p {
  color: #fff;
  font-size: 1.1rem;
  font-weight: 300;
}

footer .footer-nav:nth-of-type(2) {
  margin-left: 20px;
}

footer .socia-link {
  border: 1px solid #e5e5e5;
  border-radius: 50%;
}

footer .socia-link img {
  width: 12px;
  height: 12px;
  color: #fff;
  opacity: 90%;
}

footer .socia-link .face {
  width: 11px;
  height: 11px;
  font-weight: 300;
}

footer .text-light {
  font-size: 0.8rem;
}

footer small {
  color: #fff;
  opacity: 70%;
}

footer .footer-nav:nth-of-type(2) {
  margin-left: 0;
}
</style>