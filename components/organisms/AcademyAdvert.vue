<template>
  <div class="container position-relative">
    <img class="ellipse" src="~/assets/img/Ellipse_170.png" alt="" />
    <div
      class="row mt-5 pt-5 ps-2 align-items-center art-bg justify-content-between article-row"
    >
      <div class="col-md-6 text-start">
        <div class="ps-md-5">
          <Button appearance="purple" class="mb-3">Learn here</Button>
          <h2 class="card-head-text fw-bold">
            Don't waste time in roaming around, start learning Backed dev now
          </h2>
          <p class="art-card-text lh-sm fs-6">
            Starting Backend Development is a journey into a career that can
            open many great opportunities from working on complex projects to
            landing your dream job and the best way to get the most out of it is
            to start now.
          </p>
          <Button href="" class="mb-4 px-4 button">Register Now</Button>
        </div>
      </div>
      <div class="col-md-6 right-col">
        <div class="d-sm-flex patt-box">
          <img class="pattern" src="~/assets/img/Pattern.png" alt="" />
          <img src="~/assets/img/image.png" class="img-fluid img-flu" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.Article .container {
  max-width: 1000px;
}

.ellipse {
  width: 500px;
  position: absolute;
  bottom: 0;
  right: 0;
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