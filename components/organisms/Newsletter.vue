<template>
  <div class="container bg-update position-relative">
    <img src="~/assets/img/img1.png" alt="" />
    <img src="~/assets/img/img2.png" alt="" />
    <img src="~/assets/img/img3.png" alt="" />
    <img src="~/assets/img/img4.png" alt="" />
    <img src="~/assets/img/img5.png" alt="" />
    <img src="~/assets/img/img6.png" alt="" />
    <div class="row">
      <div class="col-lg-6 mx-auto p-5 text-center">
        <div class="cent">
          <h4 class="update-head-text text-white">
            Subscribe To Get Update From Us
          </h4>
          <p class="update-text">
            20k+ students daily learn with Masteringbackend. Subscribe for new
            courses.
          </p>
          <div class="input-group mt-3">
            <input
              type="email"
              class="form-control text-white"
              placeholder="Enter your Email"
            />
            <Button appearance="outline-secondary" type="button">
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Newsletter',
}
</script>

<style scoped>
.bg-update {
  background: #0a033c;
  border-radius: 20px;
  max-width: 800px;
  position: relative;
}

.bg-update img {
  width: 30px;
}

.bg-update img:nth-of-type(1) {
  position: absolute;
  top: 10%;
  left: 5%;
}

.bg-update img:nth-of-type(2) {
  position: absolute;
  top: 40%;
  left: 15%;
}

.bg-update img:nth-of-type(3) {
  position: absolute;
  bottom: 10%;
  left: 5%;
}

.bg-update img:nth-of-type(4) {
  position: absolute;
  top: 10%;
  right: 5%;
}

.bg-update img:nth-of-type(5) {
  position: absolute;
  top: 40%;
  right: 15%;
}

.bg-update img:nth-of-type(6) {
  position: absolute;
  bottom: 10%;
  right: 5%;
}

.update-head-text {
  font-weight: 600;
  font-size: 1.4rem;
}

.update-text {
  font-size: 1.2rem;
  color: #fff;
  opacity: 70%;
}

.bg-update .form-control {
  background: rgba(255, 255, 255, 0.2);
  border: none;
}

.update .input-group::placeholder {
  color: #fff;
}

.bg-update .btn-outline-secondary {
  background-color: #9c4df4;
  color: #fff;
  border: none;
  font-size: 0.9rem;
}
</style>