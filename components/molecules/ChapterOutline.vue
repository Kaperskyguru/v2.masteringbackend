<template>
  <div class="col-lg-12 col-12 mt-4 rounded">
    <div class="p-5 box" style="background-color: white">
      <h3 class="fs-4 py-4">{{ post.title }}</h3>
      <p class="fs-5" v-html="post.excerpt"></p>
      <div
        class="d-flex justify-content-between pt-4"
        :style="{ color: color }"
      >
        <h5 class="fs-5">Explore this Resource</h5>

        <div
          class="rounded-circle d-flex justify-content-center align-items-center"
          style="width: 40px; height: 40px"
          :style="{ backgroundColor: color, color: 'white' }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            fill="currentColor"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M16 12l-6 6V6z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: { type: String, default: '' },
    post: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
</style>