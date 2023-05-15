<template>
  <div class="container position-relative" v-if="!isArticle">
    <img class="ellipse" src="~/assets/img/Ellipse_170.png" alt="" />
    <div
      class="row mt-5 pt-5 ps-2 align-items-center art-bg justify-content-between article-row"
    >
      <div class="col-md-6 text-start">
        <div class="ps-md-5">
          <h2 class="card-head-text fw-bold">
            {{ title }}
          </h2>
          <p class="art-card-text lh-sm fs-6">{{ desc }}</p>
          <Button type="link" to="/academy" class="mb-4 px-4 button">{{
            btnText
          }}</Button>
        </div>
      </div>
      <div class="col-md-6 right-col p-0">
        <div class="d-sm-flex patt-box">
          <img class="pattern" src="~/assets/img/Pattern.png" alt="" />
          <img src="~/assets/img/Image.png" class="img-fluid img-flu" alt="" />
        </div>
      </div>
    </div>
  </div>
  <section class="Article my-5" v-else>
    <div class="container-fluid position-relative">
      <img class="ellipse2" src="~/assets/img/Ellipse_170.png" alt="" />
      <div class="row">
        <div class="col-11 mx-auto">
          <div class="row article-row">
            <div class="col-lg-6 col-md-12 col-sm-12 mt-5">
              <h2 class="card-head-text fs-1 fw-bold">
                {{ title }}
              </h2>
              <p class="art-card-text">
                {{ desc }}
              </p>
              <nuxt-link
                to="/academy"
                class="btn btn-lg-primary mb-4 p-3 button"
                >{{ btnText }}</nuxt-link
              >
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 right-col p-0">
              <img src="~/assets/img/Image.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isArticle: {
      type: Boolean,
      default: false,
    },

    btnText: {
      type: String,
      default: 'Join The Academy',
    },
    title: {
      type: String,
      default: "Don't waste time roaming around, start learning Backend now",
    },

    desc: {
      type: String,
      default:
        'Starting Backend Engineering is a journey into a career that can open many great opportunities from working on complex projects to landing your dream job and the best way to get the most out of it is to start now.',
    },
  },
}
</script>

<style scoped>
h1 {
  color: #0a083b;
}

p {
  /* color: #57586e; */
  font-size: 0.8rem;
}

small {
  color: #57586e;
}

.Article .article-row {
  background: #ede9f2;
  border-radius: 20px;
  z-index: -1;
  padding: 30px 0px 0px 30px;
}

.art-card-text {
  font-size: 1.2rem;
  color: #5d5a6f;
}

.Article .button {
  color: #fff;
  background: #0a033c;
  border-radius: 6px;
}

.Article .container {
  max-width: 1000px;
}

.ellipse {
  width: 500px;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 15px;
}

.ellipse2 {
  width: 500px;
  position: absolute;
  bottom: 1px;
  right: 50px;
  border-radius: 15px;
}

.article-intro-text {
  color: #0a083b;
  font-weight: 600;
}

.Article .article-row {
  background: #ede9f2;
  border-radius: 20px;
  z-index: -1;
}

.card-head-text {
  color: #0a083b;
  font-weight: 700;
}

.art-card-text {
  font-size: 1.2rem;
  color: #5d5a6f;
}

.Article .button {
  color: #fff;
  background: #0a033c;
  border-radius: 6px;
  outline: none;
}

.pattern {
  width: 130px;
  position: absolute;
  top: 7%;
  right: 19%;
  z-index: 1;
}

.Article .img-flu {
  z-index: 2;
}
</style>