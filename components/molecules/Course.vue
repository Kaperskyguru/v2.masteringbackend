<template>
  <div
    style="min-width: 300px; max-width: 388px; overflow: hidden"
    class="col-md-2 col-12 p-0 border rounded bg-white"
  >
    <div
      class="position-relative d-flex w-ful align-items-center justify-content-center"
    >
      <div class="w-100">
        <div class="h-100 w-100">
          <span
            style="
              box-sizing: border-box;
              display: block;
              overflow: hidden;
              width: initial;
              height: initial;
              background: none;
              opacity: 1;
              border: 0px;
              margin: 0px;
              padding: 0px;
              inset: 0px;
            "
          >
            <img class="img-fluid w-100" :src="banner" :alt="title" />
          </span>
        </div>
      </div>
    </div>
    <div class="p-3" style="min-height: 148px; margin-top: 0.5rem">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h3
          class="text-uppercase bg-success rounded py-1 px-2 text-white"
          style="font-size: 1rem"
        >
          {{ type }}
        </h3>

        <span class="border-primary border rounded px-2 text-primary">{{
          isPremium ? `$${amount}` : 'Free'
        }}</span>
      </div>
      <div class="course-content">
        <h2
          class="font-weight-bold"
          style="font-size: 1.5rem; line-height: 2.5rem"
        >
          {{ title }}
        </h2>
        <p style="font-size: 0.5rem" v-html="substring(summary)"></p>
      </div>
    </div>

    <div class="d-flex justify-content-between align-items-center px-3 pb-4">
      <div class="d-flex align-items-center ga-2">
        <span>
          <img class="star-img" src="~/assets/icons/openbook-icon.png" alt="" />
        </span>
        <span style="font-size: 0.875rem" class="pl-2"
          >{{ totalContent }}+ Contents</span
        >
      </div>
      <Button
        type="link"
        appearance="primary"
        target="_blank"
        :href="`https://app.masteringbackend.com/courses/${slug}`"
      >
        Start Learning
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseComponent',

  props: {
    course: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    title() {
      return this.course?.title ?? ''
    },
    type() {
      return this.course?.type ?? ''
    },
    slug() {
      return this.course?.slug ?? ''
    },
    summary() {
      return this.course?.summary ?? ''
    },

    isPremium() {
      return this.course?.isPremium ?? ''
    },

    amount() {
      return this.course?.amount ?? 'Paid'
    },

    totalContent() {
      return this.course?.chapters?.reduce((a, c) => {
        return a + (c.videos?.length + c.articles?.length)
      }, 0)
    },

    banner() {
      return (
        this.course?.banner ??
        'https://pub-63da695b9ece47c5b3b49bd78b86d884.r2.dev/nodejs%20essential.png'
      )
    },
  },

  methods: {
    substring(str) {
      if (!str || str.length <= 160) return str
      return str.substring(0, 160) + '...'
    },
  },
}
</script>

<style>
.course-content p {
  font-size: 0.874rem !important;
}
</style>