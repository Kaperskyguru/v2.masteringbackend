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
          <p class="mb-4">Menu</p>
          <div class="d-md-flex">
            <ul class="footer-nav">
              <li class="mb-3"><a href=""></a>Home</li>
              <li><a href="/blog/"></a>Articles</li>
            </ul>
            <ul class="footer-nav">
              <li class="mb-3"><a href=""></a>Jobs</li>
              <li><a href=""></a>Projects</li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 text-col">
          <p class="mb-4">Learn</p>
          <ul>
            <li class="mb-3"><a href=""></a>Join the Academy</li>
            <li><a href=""></a>Join our Community</li>
          </ul>
        </div>
      </div>
      <hr />

      <div class="d-md-flex align-items-center justify-content-between">
        <div class="d-flex socia-links mb-3 align-items-center">
          <div class="socia-link p-2">
            <img
              class="img-fluid face"
              src="~/assets/img/facebook.png"
              alt=""
            />
          </div>
          <div class="socia-link p-2">
            <img class="img-fluid" src="~/assets/img/twitter.png" alt="" />
          </div>
          <div class="socia-link p-2">
            <img class="img-fluid" src="~/assets/img/instagram.png" alt="" />
          </div>
        </div>
        <div>
          <small class="text-light fs-7"
            >© 2022 Masteringbacked. All right reserved.</small
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