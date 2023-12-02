<template>
  <span v-if="post">
    <ArticleHeader :post="post" />

    <section class="pt-5" style="background-color: white">
      <div class="container mx-auto">
        <div class="row m-0">
          <div class="col-md-12">
            <div id="article" class="container mx-auto w-md-100 w-75">
              <div class="text-center text-white mt-4" v-if="isASeries">
                <div
                  class="text-black shadow-sm"
                  :style="{
                    backgroundColor: `rgb(244, 244, 246)`,
                  }"
                >
                  <p class="py-3">
                    This post is part of the
                    <NuxtLink :to="generateURL"
                      >"{{ parentPostTitle }}"</NuxtLink
                    >
                    series
                  </p>
                </div>
              </div>

              <ReadArticle :post="post" />

              <div class="text-center text-white my-5" v-if="isASeries">
                <div
                  class="position-relative"
                  :style="{ backgroundColor: `#5227AD`, padding: '5rem' }"
                  id="notify"
                >
                  <h3 class="fs-2 py-4">Read Full "{{ parentPostTitle }}"</h3>
                  <p class="fs-5" v-html="getPostExcerpt"></p>
                  <Button
                    appearance="primary"
                    size="large"
                    type="link"
                    :link="generateURL"
                    :custom-style="{
                      backgroundColor: `#633db5`,
                      color: '#fff',
                    }"
                    >Click here to read now</Button
                  >
                </div>
              </div>

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
                      v-for="tag in getTags"
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
        </div>
      </div>
    </section>
  </span>
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

  computed: {
    getCategories() {
      return this.post?.categories ?? []
    },

    getTags() {
      return this.post?.tags ?? []
    },

    color() {
      return utils.color(this.post.color)
    },

    isHub() {
      return this.post.type === 'hub'
    },

    isASeries() {
      return (this.post.type === 'definitive' || this.isHub) && this.chapter
    },

    getPostExcerpt() {
      if (this.isHub) return this.chapter.hub.description

      return this.chapter?.post?.excerpt ?? ''
    },

    generateURL() {
      if (this.isHub)
        return `/hubs/${this.chapter?.hub?.slug ?? '#'}/${this.parentPostSlug}`

      return `/posts/${this.parentPostSlug}#${this.chapter.slug}`
    },

    parentPostTitle() {
      if (this.isHub) return this.chapter.hub.title

      return this.chapter?.post?.title ?? ''
    },

    parentPostSlug() {
      if (this.isHub) return this.post.slug

      return this.chapter?.post?.slug ?? '#'
    },

    chapter() {
      return this.post?.chapter
    },
  },

  components: {
    TagIcon: () => import('~/assets/icons/tag.svg?inline'),
  },
}
</script>

<style scoped>
@media screen and (min-width: 769px) {
  .share-box {
    display: none;
  }

  .newletter-box {
    display: none;
  }
}

#notify::after {
  border-width: 0 0 100px 100px;
  border-color: transparent transparent #fff transparent;

  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
}

#notify::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 100px 0 0;
  border-color: #000 transparent transparent transparent;
}
</style>