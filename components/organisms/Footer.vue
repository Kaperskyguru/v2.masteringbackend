<template>
  <footer class="mt-5 py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3">
          <div>
            <Logo />
            <p class="fs-6 mt-2">+234 678-690-1542</p>
            <a href="" class="text-white text-decoration-none email fs-6"
              >support@masteringbackend.com</a
            >
          </div>
        </div>
        <div class="col-md-4 text-col">
          <p class="mb-4">Learn</p>
          <div class="d-md-flex text-white">
            <ul class="footer-nav">
              <li class="mb-3"><nuxt-link to="/posts">Blog</nuxt-link></li>
              <li class="mb-3"><a href="/blog/">Newsletter</a></li>
              <li class="mb-3"><a href="">Join the Academy </a></li>
              <li><a href="">Join our Community</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 text-col">
          <p class="mb-4">Company</p>
          <ul class="footer-nav">
            <li class="mb-3"><a href="">Home</a></li>
            <li class="mb-3"><a href="">About</a></li>
            <li class="mb-3"><a href="">Contact</a></li>
          </ul>
        </div>
      </div>
      <hr />

      <div class="d-md-flex align-items-center justify-content-between">
        <div class="d-flex socia-links mb-3 align-items-center">
          <a href="https://facebook.com/masteringbackend">
            <div class="socia-link p-2">
              <img
                class="img-fluid face"
                src="~/assets/img/facebook.png"
                alt=""
              />
            </div>
          </a>
          <a href="https://twitter.com/master_backend">
            <div class="socia-link p-2">
              <img class="img-fluid" src="~/assets/img/twitter.png" alt="" />
            </div>
          </a>
          <a href="https://instagram.com/kaperskyguru">
            <div class="socia-link p-2">
              <img class="img-fluid" src="~/assets/img/instagram.png" alt="" />
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
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
}
</script>

<style scoped>
footer {
  background: #17154b;
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