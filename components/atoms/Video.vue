<template>
  <div
    :style="`background-color: #f7f5fa; color: #eee;`"
    class="py-2 px-3 rounded text-black shadow-xs"
  >
    <span style="font-size: 0.875rem; color: rgb(82 82 91)"
      >Video {{ content?.index }}</span
    >
    <div class="d-flex justify-content-between">
      <div class="d-flex gap-2">
        <span class="fw-normal" style="font-size: 1.1rem">{{
          content?.title
        }}</span>
        <span
          v-if="!content.isPremium"
          class="px-2 py-1 text-white"
          :style="`background-color: ${color}; font-size: 10px`"
          >Free</span
        >
      </div>
      <div
        class="px-2 py-1"
        style="font-size: 0.75rem; background-color: #f8f6fb"
      >
        4:30
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoC',
  props: {
    color: {
      type: String,
    },

    content: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style>
</style>