<template>
  <div class="shadow-sm">
    <div class="container d-flex align-items-center flex-row py-3 flex-wrap">
      <nuxt-link :to="{ path: `${getBaseURL}/${$route.params.hub}` }">
        <p :style="{ color: `${color}` }" class="fs-5">
          {{ hub.title }}
          <span>
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
          </span>
        </p>
      </nuxt-link>

      <nuxt-link
        v-if="postTitle"
        class="fs-5"
        :to="{ path: `${getBaseURL}/${$route.params.hub}/${chapter.slug}` }"
      >
        <p :style="{ color: `${color}` }" class="fs-5">
          {{ title
          }}<span>
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
          </span>
        </p>
      </nuxt-link>

      <p v-else class="fs-5">{{ title }}<span class="mx-4"></span></p>

      <p v-if="postTitle" class="fs-5" style="color: #57586e">
        {{ postTitle }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    color: {
      type: String,
      default: '#1c168c',
    },

    hub: { type: Object, default: () => {} },

    chapter: {
      type: Object,
      default: () => {},
    },

    post: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    getBaseURL() {
      if (this.$route?.name?.includes('resources-hub-slug')) return `/resources`
      return `/hubs`
    },
    title() {
      return this.chapter?.title ?? ''
    },

    postTitle() {
      return this.post?.title ?? ''
    },
  },
}
</script>

<style>
</style>