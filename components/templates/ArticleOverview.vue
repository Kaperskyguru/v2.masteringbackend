<template>
  <span v-if="post">
    <ArticleHeader :post="post" />
    <section class="pt-5" style="background-color: white">
      <div class="container mx-auto">
        <div class="row m-0">
          <div class="col-md-12">
            <div id="article" class="container mx-auto w-md-100 w-75">
              <ReadArticle :post="post" />
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
</style>