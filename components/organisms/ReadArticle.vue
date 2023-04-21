<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- <span class="px-5 container mx-auto"> -->
  <div>
    <div id="article" class="container mx-auto w-md-100 w-75">
      <article v-highlight class="w-100" v-html="post.content"></article>

      <div
        class="py-2 d-flex flex-column flex-md-row my-5"
        style="justify-content: space-between"
      >
        <div class="d-flex gap-2 py-1">
          <div>Topic:</div>
          <div class="text-white">
            <a
              v-for="category in getCategories"
              :key="category.id"
              class="p-2 text-white"
              :style="{ backgroundColor: color }"
              :href="`/categories/${category.slug}`"
            >
              {{ category.name }}
            </a>
          </div>
        </div>
        <div class="d-flex gap-2 py-1">
          <div style="width: 24px; height: 24px">
            <TagIcon />
          </div>
          <div class="d-flex">
            <a
              v-for="tag in post.tags"
              class="font-weight-bold px-1"
              :key="tag.id"
              :style="{ color: color }"
              :href="`/tags/${tag.slug}`"
            >
              {{ tag.name }},
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="meta" class="container mx-auto w-md-100 w-75">
      <div class="newletter-box w-100 mb-1">
        <SideNewsletter :color="color" />
      </div>
      <div class="w-100 share-box">
        <vue-goodshare-facebook has_icon />
        <vue-goodshare-twitter has_icon />
        <vue-goodshare-linkedin has_icon />
        <vue-goodshare-reddit has_icon />
        <vue-goodshare-pinterest has_icon />
      </div>
      <div class="w-100">
        <Comments v-if="post" />
      </div>
    </div>
  </div>
  <!-- </span> -->
</template>

<script>
import utils from '../../helpers/utils'
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    TagIcon: () => import('~/assets/icons/tag.svg?inline'),
  },

  computed: {
    getCategories() {
      return this.post?.categories ?? []
    },

    color() {
      return utils.color(this.post.color)
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

article figure img {
  outline: none !important;
  margin: 0 auto !important;
  /* border: 5px solid #cccccc; */
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

@media screen and (min-width: 769px) {
  .share-box {
    display: none;
  }

  .newletter-box {
    display: none;
  }
}
</style>