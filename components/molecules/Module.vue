<template>
  <div
    class="my-2"
    :class="{
      'p-3 border rounded': topic?.number === toggleNumber && show,
      'py-3': !(topic?.number === toggleNumber && show),
    }"
  >
    <div
      class="py-2 d-flex justify-content-between px-3 align-items-center shadow-sm"
    >
      <div class="d-flex flex-column">
        <span class="fw-bold" style="font-size: 0.875rem; color: rgb(82 82 91)"
          >Module {{ topic?.number }}</span
        >
        <span class="fs-3 fw-bold">{{ topic?.title }}</span>
      </div>
      <div @click="toggle(topic?.number)" :style="`color: ${color}`">
        <UpIcon v-if="topic?.number === toggleNumber && show" />
        <DownIcon v-else />
      </div>
    </div>
    <div class="d-flex row pt-2" v-if="topic?.number === toggleNumber && show">
      <div
        class="col-12 col-md-6 p-2 col-lg-4"
        v-for="(content, i) in topic?.content"
        :key="i"
      >
        <Video
          :tag="tag"
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
  components: {
    DownIcon: () => import('~/assets/icons/toggle-down.svg?inline'),
    UpIcon: () => import('~/assets/icons/toggle-up.svg?inline'),
  },
  data: () => ({
    show: true,
    toggleNumber: 1,
  }),
  props: {
    color: {
      type: String,
    },
    tag: { type: String },
    topic: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    toggle(number) {
      this.toggleNumber = number
      this.show = !this.show
    },
  },
}
</script>

<style>
</style>