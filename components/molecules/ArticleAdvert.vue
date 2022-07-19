<template>
  <section class="Article my-5">
    <div class="container-fluid position-relative">
      <div class="row">
        <div class="col-11 mx-auto">
          <div class="row article-row">
            <div class="col-lg-6 col-md-12 col-sm-12 mt-5">
              <a href="" class="btn btn-primary mb-3 mt-5">Learn here</a>
              <h2 class="card-head-text fs-1 fw-bold">
                Don't waste time in roaming around, start learning Backed dev
                now
              </h2>
              <p class="art-card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
                quisque magna facilisis dictumst. Dictumst nulla augue posuere
                sed egestas nunc diam aliquam. Dolor porttitor donec sed diam
                eleifend.
              </p>
              <a href="" class="btn btn-lg-primary mb-4 px-4 button"
                >Register Now</a
              >
            </div>

            <div class="col-lg-6 col-md-12 col-sm-12 right-col">
              <img
                src="~/assets/img/man_laptop_advert_2.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
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
</style>