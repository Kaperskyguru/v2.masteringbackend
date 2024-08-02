<template>
  <section>
    <div
      @click.prevent="showVideo"
      :style="{
        backgroundColor: '#f7f5fa',
        color: '#eee',
        cursor: !content?.isPremium ? 'pointer' : '',
      }"
      class="py-2 px-3 rounded text-black shadow-xs"
      :class="{ 'pe-auto': !content?.isPremium }"
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
    <Dialog
      :color="color"
      :visible="shouldPreview"
      @update:visible="shouldPreview = false"
      :title="content?.title"
    >
      <div class="w-100 px-4 pb-4 pt-2">
        <div class="!m- rounded-xl overflow-hidden">
          <div class="w-100">
            <div style="position: relative; padding: 56.25% 0 0 0">
              <iframe
                :src="`https://player.vimeo.com/video/${content?.video}?autoplay=1&title=false&byline=false`"
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                "
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                allow="autoplay; encrypted-media"
                data-ready="true"
                data-vimeo-autoplay="true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </section>
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

  data: () => ({ shouldPreview: false }),

  methods: {
    showVideo() {
      if (!this.content?.isPremium) {
        this.shouldPreview = !this.shouldPreview
      }
    },
  },
}
</script>

<style>
</style>