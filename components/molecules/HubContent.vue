<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="col-md-8">
    <span v-if="isChapter" class="fw-light">
      <p :style="{ color: color }" class="pb-1">{{ title }}</p>
    </span>

    <h1 v-else class="fw-light fs-3 fw-bold pb-4">
      {{ title }}
    </h1>

    <ReadArticle
      :post="{
        ...post,
        content: content,
      }"
    ></ReadArticle>

    <div v-if="showReadMore" :class="{ 'pb-5': !isChapter }">
      <CustomAlert
        :bgColor="color"
        :showRead="true"
        :showDownload="hasPDF"
        :Readlink="generateReadLink"
        :link="generatePdfURL"
      >
        <template #title>
          {{ title }}
        </template>

        <template #description>
          Click on the buttons below to download for offline or read the "{{
            title
          }}" online
        </template>
      </CustomAlert>
    </div>

    <div v-if="isChapter" class="w-100 pt-5">
      <ChapterOutline
        :key="i"
        :color="color"
        v-for="(post, i) in post?.posts"
        :post="{ ...post, hub: hubSlug }"
      />
    </div>
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

  methods: {},

  computed: {
    hasPDF() {
      const chapter = this.post.chapter
      const chapters = this.post.chapters
      return Array.isArray(chapters) && chapters.length > 0 && !!chapter?.id
    },
    showReadMore() {
      return (
        this.post?.chapters?.length > 0 && this.$route.path.startsWith('/hubs/')
      )
    },
    generateReadLink() {
      return `/posts/${this.post?.slug}`
    },
    generatePdfURL() {
      return `/resources/${this.post?.chapter?.hub?.slug}/${this.post?.slug}`
    },
    hubSlug() {
      return this.post?.hub?.slug ?? ''
    },
    content() {
      return this.post?.content ?? this.post?.description ?? ''
    },

    description() {
      return this.post?.description ?? ''
    },

    title() {
      if (this.isChapter) return 'Overview'
      return this.post?.title ?? ''
    },
  },
}
</script>

<style scoped>
figure iframe {
  width: 100%;
  height: 400px !important;
}

@media (max-width: 991.98px) {
  #article,
  #meta {
    width: 100% !important;
  }
}

article img {
  height: auto;
  width: 100%;
  background-size: cover;
}

article > * {
  font-family: 'Georgia', serif !important;
}

article p {
  font-size: 1.125rem;
  margin-bottom: 1.3rem;
  font-weight: 400;
  line-height: 1.8;
  /* font-family: 'Georgia', serif; */
}

article h1,
article h2,
article h3,
article h4,
article h5,
article h6 {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}

article h3,
article h4 {
  font-weight: normal;
}

article h5,
article h6 {
  font-weight: lighter;
}

article h1,
article h2 {
  font-weight: bold;
}

article ul {
  list-style: disc;
  margin-bottom: 1.3rem;
}

article ul li {
  line-height: 32px;
  font-size: 1.125rem;
  font-weight: 400;
}

article figure figcaption {
  line-height: 32px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
}

article figure img,
img {
  outline: none !important;
  margin: 0 auto !important;
  /* border: 5px solid #cccccc; */
  display: inline-block;
  width: 10%;
  height: auto;
  border-radius: 0 !important;
}

#article a,
#article a:hover {
  color: rgb(187, 74, 3);
  transition: all 0.2s ease-in-out 0s;
  background-color: transparent;
}

@media screen and (min-width: 769px) {
  .share-box {
    display: none;
  }

  .newletter-box {
    display: none;
  }
}
</style>