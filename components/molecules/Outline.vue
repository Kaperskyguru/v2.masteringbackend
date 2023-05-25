<template>
  <div class="col-md-3 left-col">
    <p class="fs-6 py-1 text-uppercase" :style="{ color: `${color}` }">
      {{ outlines.length }} Resources
    </p>

    <li
      v-for="(outline, i) in outlines"
      :key="i"
      style="list-style: none"
      class="lh-lg"
      :style="[
        { color: '#57586E' },
        isActive(outline) ? { color: '#000000' } : '',
      ]"
    >
      <nuxt-link
        class="d-flex flex-row justify-content-start"
        :to="`${getBaseURL}/${$route.params.hub}/${outline.slug}`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          :fill="color"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16 12l-6 6V6z" />
        </svg>

        <span>{{ outline.title }}</span>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  name: 'HubOutline',
  props: {
    color: {
      type: String,
      default: '#1c168c',
    },

    outlines: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    getBaseURL() {
      if (this.$route?.name?.includes('pdfs-hub-slug')) return `/pdfs`
      return `/hubs`
    },
  },

  methods: {
    isActive(outline) {
      return outline.slug === this.$route.params.slug
    },
  },
}
</script>

<style>
</style>