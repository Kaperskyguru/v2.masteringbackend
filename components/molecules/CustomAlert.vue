<template>
  <div class="text-center text-white my-4">
    <div
      class="position-relative pad"
      :style="{ backgroundColor: bgColor, padding: '5rem' }"
      :id="showClip ? 'notify' : ''"
    >
      <h3 class="fs-2 py-4">
        <slot name="title"> {{ title }} </slot>
      </h3>
      <p class="fs-5">
        <slot name="description"> {{ description }} </slot>
      </p>

      <slot name="btn">
        <div class="d-flex justify-content-center gap-4">
          <Button
            v-if="showRead"
            appearance="primary"
            size="large"
            type="link"
            target="_blank"
            :link="readLink"
            :custom-style="{
              backgroundColor: adjust(bgColor, 20),
              color: '#fff',
            }"
          >
            Click here to Read Online</Button
          >

          <Button
            v-if="showDownload"
            appearance="primary"
            target="_blank"
            size="large"
            type="link"
            :link="link"
            :custom-style="{
              backgroundColor: adjust(bgColor, 40),
              color: '#fff',
            }"
            >Click here to download</Button
          >
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#',
    },
    showRead: {
      type: Boolean,
      default: false,
    },
    showDownload: {
      type: Boolean,
      default: false,
    },
    readLink: {
      type: String,
      default: '#',
    },
    bgColor: {
      type: String,
      default: '#5227AD',
    },
    title: {
      type: String,
      default: 'In a hurry? Save this article as a PDF.',
    },
    description: {
      type: String,
      default:
        'Tired of scrolling? Download a PDF version for easier offline reading and sharing with coworkers.',
    },
    showClip: {
      type: Boolean,
      default: true,
    },
    btnColor: {
      type: String,
      default: '#633db5',
    },
  },

  methods: {
    adjust(color, amount) {
      if (!color.startsWith('#')) return '#4f57ff'
      return (
        '#' +
        color
          .replace(/^#/, '')
          .replace(/../g, (color) =>
            (
              '0' +
              Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
                16
              )
            ).slice(-2)
          )
      )
    },
  },
}
</script>

<style scoped>
#notify::after {
  border-width: 0 0 100px 100px;
  border-color: transparent transparent #fff transparent;

  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

#notify::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 100px 0 0;
  border-color: #000 transparent transparent transparent;
}

@media (max-width: 991.98px) {
  .pad {
    padding: 2rem !important;
  }
}
</style>