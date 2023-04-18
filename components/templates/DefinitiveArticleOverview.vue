<!-- eslint-disable vue/no-v-html -->
<template>
  <section>
    <section class="text-white mb-5" :style="{ backgroundColor: color }">
      <div id="chapter" class="container mx-auto w-75">
        <div id="chapter" class="row py-5 container mx-auto w-md-100 w-75">
          <div class="mx-auto text-center">
            <h1 class="fs-1 text-white">
              <span class="d-block mb-3 fw-bolder fs-3">{{ splitTitle.title }}:</span>
              {{ splitTitle.subtitle }}
            </h1>
          </div>

          <div class="border-bottom mt-3 align-items-center"></div>

          <div class="row py-5">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <article v-highlight class="w-100" v-html="content"></article>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 mt-2">
              <img src="~/assets/img/image7.png" class="img-fluid cover" :alt="post.title" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="Content mb-5">
      <div class="container">
        <div class="my-5">
          <h2 class="text-center content-title my-5">Contents</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4 chapter col-md mb-3 " v-for="(chapter, i) in mapChapters" :key="i">
            <nuxt-link :to="`/posts/${post.slug}#${chapter.slug}`">
              <div class="d-flex flex-column align-items-center text-center">
                <div class="rounded-circle border overflow-hidden" style="height: 140px; width: 140px">
                  <img class="img" width="100" height="100" :src="chapter.design_url" :alt="chapter.title" srcset="" />
                </div>
                <h6 class="chapter-title mt-2">{{ splitChapterTitle(chapter).title }}</h6>
                <p class="chapter-subtitle lh-md">{{ splitChapterTitle(chapter).subtitle }}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>

    <DefinitiveChapter v-for="(chapter, index) in chapters" :key="index" :chapter="chapter" />

    <div id="chapter" class="container mx-auto w-75">
      <div id="chapter" class="py-3 container mx-auto w-md-100 w-75">
        <div id="article" class="chapter">
          <a v-for="tag in post.tags" :key="tag.id" :href="`/tags/${tag.slug}`">
            {{ tag.name }},
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => { },
    },
  },

  computed: {
    color() {
      const mixedColor = this.post?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },
    content() {
      return this.post?.excerpt ?? this.post?.content ?? ''
    },
    chapters() {
      return this.post?.chapters ?? []
    },

    mapChapters() {
      return [...this.post?.chapters ?? []].filter(item => !item.title.includes('Conclusion'))
    },

    splitTitle() {
      if (!this.post?.title) return { title: '', subtitle: '' }
      const titles = this.post?.title?.split(':')
      return {
        title: titles[0],
        subtitle: titles[1],
      }
    },
  },

  methods: {
    splitChapterTitle(chapter) {
      if (!chapter?.title) return { title: '', subtitle: '' }
      const titles = chapter?.title?.split(':')
      return {
        title: titles[0],
        subtitle: titles[1],
      }
    },
  }
}
</script>
  
<style scoped>
.chapter img {
  max-width: 100%;
}

.chapter .img {
  display: block;
  height: auto;
  margin: 1rem auto 0;
  object-fit: cover;
  object-position: center;
}

.chapter-title {
  font-size: 1.25rem;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
  margin-top: 15px;
  font-weight: 800;
}

.cover {
  max-width: 425.5px;
  height: auto;
  width: 100%;
}

/* 
@media (max-width: 991.98px) {
  #chapter {
    width: 100% !important;
  }
} */

.chapter-subtitle {
  font-size: 17px;
}
</style>