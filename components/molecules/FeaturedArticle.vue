<template>
  <article class="Updated">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mx-auto">
          <div class="row">
            <div class="col-md-1 pt-3 ms-3">
              <img
                class="d-lg-block pattern"
                src="~/assets/img/combined-shape.png"
                alt=""
              />
            </div>
            <div class="col-lg-10">
              <h1 class="fs-1 fw-bold mb-1 Career-header-text">
                <nuxt-link class="title_header" to="/posts/asas">
                  Pursuing a Full-Time Career as a Backend Developer</nuxt-link
                >
              </h1>
              <small class="fw-bold"
                >By Solomon Eseme. Updated Oct. 12, 2021</small
              >
            </div>
          </div>

          <div
            class="col-lg-10 col-md-12 mx-lg-auto col-sm-12 text-sm-start mt-5"
          >
            <p class="lh-md fs-5">
              I’m super excited to announce the completely updated Content
              Marketing Hub. I’m super excited to announce the completely
              updated Content Marketing I’m super excited to announce the
              completely updated Content Marketing
            </p>
          </div>
          <div class="row">
            <div class="col-lg-10 col-md-12 mx-lg-auto">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                  <p class="lh-md fs-5">
                    I’m super excited to announce the completely updated Content
                    Marketing Hub. I’m super excited to announce the completely
                    updated Content Marketing I’m super excited to announce the
                    completely updated Content Marketing
                  </p>
                  <p class="lh-md fs-5">
                    I’m super excited to announce the completely updated Content
                    Marketing Hub. I’m super excited to announce the completely
                    updated Content Marketing I’m super excited to announce the
                    completely updated Content Marketing
                  </p>
                  <p class="lh-md fs-5">
                    I’m super excited to announce the completely updated Content
                    Marketing Huub.
                  </p>
                </div>
                <div class="col-lg-4 col-md-10 col-sm-10">
                  <img
                    class="img-fluid car-img"
                    src="~/assets/img/featured1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-10 mx-lg-auto col-sm-12 text-sm-start">
            <p class="lh-md fs-5">
              I’m super excited to announce the completely updated Content
              Marketing Hub. I’m super excited to announce the completely
              updated Content Marketing I’m super excited to announce the
              completely updated Content Marketing
            </p>
          </div>

          <div class="d-grid col-md-10 col-sm-12 mx-md-auto">
            <a href="#" class="btn btn-primaryy btn-lg mt-4 fs-3 mb-4"
              >Continue Reading</a
            >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {}
</script>

<style scoped>
.title_header {
  text-decoration: none;
  color: var(--primary-color);
  transition: 0.3s ease all;
}

.title_header:hover {
  color: #14107c;
}

h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

small {
  color: #57586e;
}

.pattern {
  width: 70px;
}

.btn-primaryy {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primaryy:hover {
  background-color: #100c5cda;
  color: #fff;
}

.car-img {
  width: 400px;
}

@media screen and (max-width: 576px) {
  .pattern {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .pattern {
    display: none;
  }
}
</style>