<template>
  <div class="container">
    <div class="my-5">
      <h5 class="topic__title--text text-center" :style="{ color: `${color}` }">
        More Topics
      </h5>
    </div>
    <div class="row g-4">
      <div class="col-lg-4">
        <div class="card bg-pink pt-4">
          <div class="row">
            <div class="col-md-10 mb-5 ps-5">
              <h6 class="text-white fw-bold">Resources</h6>
              <p class="">Content Promotion and Distribution</p>
            </div>
            <div class="col-lg-12 mb-3">
              <img
                class="img-fluid"
                src="~/assets/img/image24(1).png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card bg-pur pt-4">
          <div class="row">
            <div class="col-md-10 mb-5 ps-5">
              <h6 class="text-white fw-bold">Resources</h6>
              <p>Content Promotion and Distribution</p>
            </div>
            <div class="col-lg-12 mb-3">
              <img
                class="img-fluid"
                src="~/assets/img/image24(1).png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card bg-sea-blue pt-4">
          <div class="row">
            <div class="col-md-10 mb-5 ps-5">
              <h6 class="text-white fw-bold">Resources</h6>
              <p>Content Promotion and Distribution</p>
            </div>
            <div class="col-lg-12 mb-3">
              <img
                class="img-fluid"
                src="~/assets/img/image24(1).png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: '#1c168c' },
  },
}
</script>

<style>
</style>