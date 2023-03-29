<template>
  <div class="col-lg-10">
    <h1 class="fs-1 fw-bolder mb-1 Career-header-text">
      <nuxt-link class="title_header" :to="link">
        {{ post.title || '' }}</nuxt-link
      >
    </h1>
    <small class="fw-bold"
      >By {{ authorName
      }}<span v-if="showDate">. Updated {{ dateFormat }}</span></small
    >
  </div>
</template>

<script>
export default {
  name: 'ArticleHead',
  props: {
    post: {
      type: Object,
      default: () => {},
    },

    showDate: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    authorName() {
      return this.post?.author?.name
    },

    link() {
      if (!this.showDate) return ''
      return this.post?.slug
    },

    authorSlug() {
      return this.post?.author?.slug
    },

    dateFormat() {
      return new Date(this.post.updatedAt).toDateString()
    },
  },
}
</script>

<style scoped>
h1 {
  color: #0a083b;
}

.title_header {
  text-decoration: none;
  color: var(--primary-color);
  transition: 0.3s ease all;
}

.title_header:hover {
  color: #14107c;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

small {
  color: #57586e;
}
</style>