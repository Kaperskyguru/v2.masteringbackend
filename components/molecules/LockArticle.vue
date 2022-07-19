<template>
  <article class="Career py-5">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-10 bordder-primary mx-auto">
          <div class="row mt-5">
            <div class="col-md-1 pt-3 ms-3">
              <img
                class="d-lg-block pattern"
                src="~/assets/img/combined-shape.png"
                alt=""
              />
            </div>
            <div class="col-lg-10">
              <h1 class="fs-1 fw-bolder mb-1 Career-header-text">
                <nuxt-link class="title_header" to="/posts/asas"
                  >Video Marketing Guidelines for beginners</nuxt-link
                >
              </h1>
              <small class="fw-bold"
                >By Solomon Eseme. Updated Oct. 12, 2021</small
              >
            </div>

            <div
              class="col-lg-10 col-md-10 col-sm-12 mx-auto text-sm-start test"
            >
              <img
                class="img-fluid base-img"
                src="~/assets/img/Base.png"
                alt=""
              />
            </div>
            <div class="col-lg-10 col-md-10 col-sm-12 mx-lg-auto mx-auto">
              <p class="blur-text text lh-md fs-5 mt-4">
                I’m super excited to announce the completely updated Content
                Marketing Hub. We launched the first version of Content
                Marketing Hub last year. Since then, we’ve made hundreds of
                edits, additions, improvements and updates. This new resource
                30+ covers pretty much everything you need to know about content
                marketing all in one place… including content promotion,
                copywriting, blog design, content repurposing, and more.
              </p>
            </div>
            <div class="d-grid col-lg-10 col-md-10 col-sm-12 mx-auto my-4">
              <a href="#" class="btn btn-primaryy btn-lg mt-4 fs-3 mb-4"
                >Unlock Now<span
                  ><img class="lock" src="~/assets/img/Lock.png" alt="" /></span
              ></a>
            </div>
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

.bordder-primary {
  border: 2px solid #1c168c;
  border-radius: 5px;
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

.blur-text {
  font-size: 0.8rem;
  color: transparent;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.lock {
  width: 30px;
  margin-left: 3px;
}

.Career .bord {
  border: 2px solid #1c168c;
  border-radius: 10px;
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
