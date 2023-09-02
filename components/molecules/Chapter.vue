<template>
  <div class="row bg-white mb-5 shadow">
    <div
      class="col-xl-3 col-lg-12 text-center text-white"
      :style="{ backgroundColor: `${color}` }"
    >
      <nuxt-link
        :to="
          shouldActivateWaitingList || isPremium
            ? '#'
            : {
                path: `${getBaseURL}/${chapterSlug}/${firstPostSlug}`,
              }
        "
        v-if="isPDF"
      >
        <h3 class="py-5 font-weight-normal fs-4">{{ chapter.title }}</h3>
        <img
          v-lazy-load
          class="img-fluid hub mt-3"
          :data-src="getDesign"
          :alt="chapter.title"
        />
      </nuxt-link>

      <nuxt-link
        v-else
        :to="
          shouldActivateWaitingList || isPremium
            ? '#'
            : { path: `${getBaseURL}/${chapterSlug}/${chapter.slug}` }
        "
      >
        <h3 class="py-5 font-weight-normal fs-4">{{ chapter.title }}</h3>
        <img
          v-lazy-load
          class="img-fluid hub mt-3"
          :data-src="getDesign"
          :alt="chapter.title"
        />
      </nuxt-link>
    </div>
    <div class="col-xl-9 col-lg-12">
      <div class="row py-5 px-4">
        <div class="col-12 row">
          <div class="col-lg-6">
            <h5
              class="font-weight-normal fs-4 pb-4"
              :style="{ color: `${color}` }"
            >
              What you will learn
            </h5>
            <p
              class="lh-lg font-weight-light fs-5"
              v-html="chapter.description"
            ></p>
          </div>
          <div class="col-lg-6">
            <h5
              class="font-weight-normal fs-4 pb-4"
              :style="{ color: `${color}` }"
            >
              <span v-if="isPDF">Outline</span>

              <span v-else> {{ postCount }} Resources </span>
            </h5>

            <span
              v-if="isPDF"
              class="overflow-auto d-flex flex-column justify-content-between"
              style="height: 300px"
            >
              <p v-for="(outline, i) in outlines" :key="i">
                <span class=""
                  ><nuxt-link
                    class="font-weight-light d-flex flex-row justify-content-start fs-5"
                    :to="
                      shouldActivateWaitingList || isPDF || isPremium
                        ? '#'
                        : {
                            path: `${getBaseURL}/${chapterSlug}/${firstPostSlug}`,
                          }
                    "
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

                    <span class="flex-fill" v-html="outline"></span></nuxt-link
                ></span>
              </p>
            </span>

            <span v-else>
              <p v-for="(post, i) in chapter.posts" :key="i">
                <span>
                  <nuxt-link
                    class="font-weight-light d-flex flex-row justify-content-start fs-5"
                    :to="
                      shouldActivateWaitingList || isPremium
                        ? '#'
                        : { path: `${getBaseURL}/${chapterSlug}/${post.slug}` }
                    "
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

                    <span class="flex-fill">{{ post.title }}</span>
                  </nuxt-link>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div class="col-12 align-self-end" v-if="isPDF">
          <Button
            class="btn-block"
            size="large"
            type="link"
            :link="`${getBaseURL}/${chapterSlug}/${firstPostSlug}`"
            :custom-style="{
              backgroundColor: `${color}`,
              color: '#fff',
            }"
          >
            Get PDF Now
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HubChapter',
  props: {
    chapter: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    isPDF() {
      return this.chapter.hub.type === 'pdf'
    },

    shouldActivateWaitingList() {
      return this.chapter?.hub?.activate_waiting ?? false
    },

    isPremium() {
      return this.chapter?.hub?.is_premium ?? false
    },

    getBaseURL() {
      return this.isPDF ? `/resources` : `/hubs`
    },

    outlines() {
      const outline = this.chapter.content
      const out = outline
        ?.split(/<[a-zA-Z0-9]*>([^<.*>;]*)<\/[a-zA-Z0-9]*>/gim)
        .filter((x) => x.trim() !== '')
      return Array.isArray(out) ? out : []
    },

    firstPostSlug() {
      const post = this.chapter?.posts[0] ?? undefined

      if (!post) return '#'
      return post?.slug ?? '#'
    },

    getDesign() {
      return (
        this.chapter?.design_url ??
        'https://api.backlinko.com/app/uploads/2020/05/seo-fundamentals.svg'
      )
    },

    chapterSlug() {
      return this.chapter?.hub?.slug
    },

    color() {
      const mixedColor = this.chapter?.color ?? ''
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        if (color) return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    postCount() {
      return this.chapter?.posts?.length ?? 0
    },
  },
}
</script>

<style scoped>
.hub {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  margin-right: 1rem;
  padding: 1.25rem 1.5rem;
  background-repeat: no-repeat;
  -webkit-background-position: 50% 80%;
  background-position: 50% 80%;
  -webkit-background-size: 50%;
  background-size: 50%;
}
</style>