<template>
  <a href="/">
    <img
      data-not-lazy
      v-if="isWhite"
      src="~/assets/img/logo-white.png"
      alt="logo"
      width="200"
      height="auto"
      class="d-inline-block align-text-top"
    />

    <img
      data-not-lazy
      v-else
      src="~/assets/img/logo.png"
      alt="logo"
      width="200"
      height="auto"
      class="d-inline-block align-text-top"
    />
  </a>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',

  props: {
    isWhite: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
</style>
