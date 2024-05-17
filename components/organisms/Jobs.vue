<template>
  <div style="display: inline-block; position: relative">
    <div
      class="overlay p-3 d-flex align-items-center justify-content-center"
      v-if="!jobs.length"
    >
      <p class="fs-6 fw-bold">Coming Soon</p>
    </div>
    <div class="row g-3" :style="[{ 'opacity: 0.1': !jobs.length }]">
      <Job :job="job" v-for="(job, index) in jobs?.slice(0, 8)" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Jobs',

  props: {
    jobs: {
      default: () => [],
      type: Array,
    },
  },
}
</script>

<style scoped>
.overlay {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(47, 48, 49, 0.1);
  transition: background-color 0.5s;
}

.overlay p {
  color: #001ed3;
}
</style>