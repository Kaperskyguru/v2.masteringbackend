<template>
  <div class="text-whie my-5">
    <div class="position-relative pad" :style="{ backgroundColor: white }">
      <div class="py-3" :style="`border-bottom: 4px solid ${bgColor}`">
        <h3>Whenever you're ready</h3>
        <p>There are 3 ways we can help you become a great backend engineer:</p>
      </div>
      <div class="py-3">
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2"
          style="border-bottom: 1px solid #ddd"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/3.png" alt="" />
          </div>
          <div class="w-100">
            <a target="_blank" href="https://app.masteringbackend.com">
              <h4 style="color: rgb(187, 74, 3)">The MB Platform</h4>
            </a>
            <p>
              Join 1000+ backend engineers learning backend engineering. Build
              real-world backend projects, learn from expert-vetted courses and
              roadmaps, track your learnings and set schedules, and solve
              backend engineering tasks, exercises, and challenges.
            </p>
          </div>
        </div>
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2"
          style="border-bottom: 1px solid #ddd"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/2.png" alt="" />
          </div>
          <div class="w-100">
            <a target="_blank" href="https://masteringbackend.com/academy">
              <h4 style="color: rgb(187, 74, 3)">The MB Academy</h4></a
            >
            <p>
              The “MB Academy” is a 6-month intensive Advanced Backend
              Engineering BootCamp to produce great backend engineers.
            </p>
          </div>
        </div>
        <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2"
          style="border-bottom: 1px solid #ddd"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/1.png" alt="" />
          </div>
          <div class="w-100">
            <a target="_blank" href="https://masteringbackend.com/newsletter">
              <h4 style="color: rgb(187, 74, 3)">Join Backend Weekly</h4></a
            >
            <p>
              If you like post like this, you will absolutely enjoy our
              exclusive weekly newsletter, Sharing exclusive backend engineering
              resources to help you become a great Backend Engineer.
            </p>
          </div>
        </div>

        <!-- <div
          class="d-flex flex-md-row flex-column align-items-center justify-content-center py-2"
          style="border-bottom: 1px solid #ddd"
        >
          <div class="w-lg-25">
            <img class="w-100" src="~/assets/img/1.png" alt="" />
          </div>
          <div class="w-100">
            <a target="_blank" href="https://masteringbackend.com/academy">
              <h4 style="color: rgb(187, 74, 3);">MB Text-Based Courses</h4></a
            >
            <p>
              Access 1000+ resources, including PDF guides, comprehensive
              reference materials, and text-based courses that cater to learners
              at various stages of their backend engineering journey.
            </p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: '#5227AD',
    },
  },
}
</script>

<style>
</style>