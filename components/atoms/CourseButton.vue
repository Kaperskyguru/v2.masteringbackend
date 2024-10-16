<template>
  <Button
    :custom-style="{
      backgroundColor: `${color}`,
      color: '#fff',
      ...customStyle,
    }"
    size="large"
    class="py-2 my-2 fs-4 fw-bold"
    :type="type"
    :link="link"
    :href="link"
    v-on="$listeners"
    v-bind="$attrs"
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
    type: {
      type: String,
      default: 'link',
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