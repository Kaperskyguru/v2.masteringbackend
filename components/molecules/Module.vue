<template>
  <div class="py-3">
    <div class="py-2 d-flex flex-column">
      <span class="fw-bold" style="font-size: 0.875rem; color: rgb(82 82 91)"
        >Module {{ topic?.number }}</span
      >
      <span class="fs-3 fw-bold">{{ topic?.title }}</span>
    </div>
    <div class="d-flex row">
      <div
        class="col-12 col-md-6 p-2 col-lg-4"
        v-for="(content, i) in topic?.content"
        :key="i"
      >
        <Video
          :color="color"
          :content="{
            ...content,
            index: i + 1,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModuleC',
  props: {
    color: {
      type: String,
    },

    topic: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
</style>