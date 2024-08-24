<template>
  <Button
    :custom-style="{
      backgroundColor: `${color}`,
      color: '#fff',
      ...customStyle,
    }"
    size="large"
    class="py-2 my-2 fs-4 fw-bold"
    type="link"
    :link="link"
    :href="link"
  >
    {{ title }}
  </Button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    customStyle: {
      type: [String, Object],
      default: '',
    },
    color: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
</style>