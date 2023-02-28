<template>
  <section class="hero">
    <div class="container">
      <div class="row hero__grid">
        <div class="col-lg-6">
          <div class="row">
            <div
              class="
                bg-white
                col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-6 col
                text-center
                rounded
                mb-3
                mt-5
              "
            >
              <h6 class="mt-2 text-danger py-">Never stop learning</h6>
            </div>
          </div>

          <h1 class="title__text mb-md-2">
            A great resource for backend engineers.
          </h1>
          <!-- <p class="title__subtext">
            “I thought the blog was good. But the newsletter? Even better!”
          </p>
          <p class="fw-bold user-name">Katy Grey</p>
          <p class="job-title fs-6 fw-bold">Product Engineer, SPDC</p> -->

          <!-- ---------------input--------------------------------------------- -->
          <div class="col-md-8">
            <div class="row input-box mt-4 mb-5">
              <input
                class="col-md-8 py-md-2 email-input"
                type="email"
                placeholder="Enter your Email"
              />

              <Button
                type="button"
                class="col-md-4 start-btn my-md-1 py-2 mt-3 mt-lg-0"
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>

        <div class="col-lg-6 hero__image">
          <div class="row">
            <div class="col-12">
              <img
                class="img-fluid"
                src="~/assets/img/hero-img.png"
                alt=""
                srcset=""
              />
            </div>
            <div class="col-12 position-img">
              <img class="img1" src="~/assets/img/2.png" alt="" srcset="" />
              <img class="img2" src="~/assets/img/3.png" alt="" srcset="" />
              <img class="img3" src="~/assets/img/1.png" alt="" srcset="" />
            </div>
            <div class="display-img">
              <img class="img4" src="~/assets/img/imggg.png" alt="" srcset="" />
              <img class="img5" src="~/assets/img/1.png" alt="" srcset="" />
            </div>
            <!-- <div class="col-12">
                                <img class="img-fliud bg" src="~/assets/img/BG.png" alt="" srcset="">
                            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Banner',
}
</script>

<style scoped>
.hero__grid {
  margin-top: 10%;
}

.text-danger {
  color: var(--danger);
}

.title__text {
  font-weight: 800;
  font-size: 40px;
}

.user-name {
  color: #16213e;
  line-height: 0;
}

.job-title {
  color: #001ed3;
}

.input-box {
  border-radius: 8px;
  background-color: #fff;
}

.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
}

.email-input {
  color: #5d5a6f;
  opacity: 60%;
  font-size: 0.8rem;
  border: none;
  background-color: transparent;
}

.email-input:focus {
  border: none;
  outline: none;
}

.hero__image {
  position: relative;
}

.hero__image .position-img img {
  width: 150px;
  height: 150px;
}

.hero__image .position-img .img1 {
  position: absolute;
  top: -70px;
  left: 101px;
  z-index: -1;
  display: none;
}

.hero__image .position-img .img2 {
  position: absolute;
  top: -40px;
  right: 101px;
  display: none;
}

.position-img .img3 {
  position: absolute;
  bottom: 75px;
  right: -8px;
  display: none;
}

.hero__image .display-img img {
  display: none;
}

.bg {
  width: 400px;
  position: absolute;

  top: 0;
  left: 35%;
  z-index: -1;
}
</style>