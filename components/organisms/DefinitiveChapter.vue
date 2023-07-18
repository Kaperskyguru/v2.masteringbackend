<!-- eslint-disable vue/no-v-html -->
<template>
  <span>
    <section
      :id="chapter.slug"
      class="mb-5 text-white"
      :style="{ backgroundColor: color }"
    >
      <div id="chapter" class="container mx-auto w-md-100 w-75">
        <div id="chapter" class="row my-5 container mx-auto w-md-100 w-75">
          <div class="mx-auto text-center pt-5">
            <h2 class="fs-1 text-white">
              <span class="d-block fw-bolder mb-3 fs-3"
                >{{ splitTitle.title }}:</span
              >
              {{ splitTitle.subtitle }}
            </h2>
          </div>

          <div class="border-bottom mt-3 align-items-center"></div>

          <div class="row py-5">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <article v-highlight class="w-100" v-html="content"></article>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12">
              <img :src="designURL" class="img-fluid cover" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  -->

    <div id="article" class="container mx-auto w-md-100 w-75">
      <DefinitiveArticle
        :isPremium="isPremium"
        v-for="(post, index) in getPosts"
        :key="index"
        :post="post"
      />
    </div>
  </span>
</template>
    
<script>
export default {
  props: {
    chapter: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    color() {
      const mixedColor = this.chapter?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },
    content() {
      return this.chapter?.excerpt ?? this.chapter?.content ?? ''
    },

    designURL() {
      return this.chapter?.design_url
    },

    splitTitle() {
      if (!this.chapter?.title) return { title: '', subtitle: '' }
      const titles = this.chapter?.title?.split(':')
      return {
        title: titles[0],
        subtitle: titles[1],
      }
    },

    isPremium() {
      return this.chapter?.is_premium
    },

    getPosts() {
      if (this.isPremium) return [this.chapter?.posts[0] ?? []]
      return this.chapter?.posts ?? []
    },
  },
}
</script>
    
<style scoped>
figure iframe {
  width: 100%;
  height: 400px !important;
}

.cover {
  max-width: 425.5px;
  height: auto;
  width: 100%;
}

@media (max-width: 991.98px) {
  #chapter {
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

article figure img {
  outline: none !important;
  margin: 0 auto !important;
  border: 5px solid #cccccc;
  display: inline-block;
  width: 100%;
  height: auto;
  border-radius: 0 !important;
}

#article a,
#article a:hover {
  color: rgb(187, 74, 3);
  transition: all 0.2s ease-in-out 0s;
  background-color: transparent;
}
</style>