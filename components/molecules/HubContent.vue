<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="col-md-8 right-col my-">
    <span v-if="isChapter" class="fw-light">
      <p :style="{ color: color }" class="pb-1">{{ title }}</p>
    </span>

    <h1 v-else class="fw-light fs-3 fw-bold pb-4">
      {{ title }}
    </h1>

    <article v-highlight class="lh-sm w-100" v-html="content"></article>

    <div v-if="isChapter">Outline here</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },

    color: {
      type: String,
      default: '',
    },

    isChapter: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    content() {
      return this.post?.content ?? this.post?.description ?? ''
    },

    title() {
      if (this.isChapter) return 'Overview'
      return this.post?.title ?? ''
    },
  },
}
</script>

<style >
article p {
  line-height: 2rem;
  color: #000;
}
</style>