<template>
  <article class="Career-three mt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
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
                <nuxt-link class="title_header" to="/posts/asas">
                  Pursuing a Full-Time Career as a Backend Developer</nuxt-link
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
              <p class="text lh-md fs-5 mt-4">
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
              <hr />
            </div>
            <div class="d-grid col-lg-10 col-md-10 mx-auto">
              <button class="btn btn-primary-old btn-lg mt-3 fs-3 mb-5 p-3">
                Older post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Article',
}
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

.lock {
  width: 30px;
  margin-left: 3px;
}

.btn-primary-old {
  background-color: #9c4df4;
  color: #fff;
}

.btn-primary-old:hover {
  color: rgba(255, 255, 255, 0.8);
}

footer small {
  color: #fff;
  opacity: 70%;
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