<!-- eslint-disable vue/no-v-html -->
<template>
  <span class="card px-5">
    <!-- <div class="row">
      <div class="d-md-flex align-items-center pt-5">
        <img class="hero-img" src="~/assets/img/Oval.png" alt="" />
        <div class="ps-md-3 pt-2">
          <p class="fs-7 text-start profile-text">
            By Solomon Eseme. Updated Oct. 12, 2021
          </p>
        </div>
      </div>
    </div> -->

    <div class="col-lg-12 mt-5 w-100 card-body">
      <article v-highlight class="lh-sm w-100" v-html="post.content"></article>
    </div>
  </span>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
figure iframe {
  width: 100%;
  height: 400px !important;
}

article img {
  height: auto;
  width: 100%;
  background-size: cover;
}
</style>