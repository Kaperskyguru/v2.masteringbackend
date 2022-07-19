<template>
  <section>
    <section class="d-flex align-items-center justify-content-center mb-5">
      <div class="container">
        <div class="row mt-5 text-justify">
          <div class="col-lg-6 mx-auto mt-5 text-center">
            <h1 class="hero-text mb-4">Get Full-Time Career Tips</h1>
            <div class="d-flex justify-content-center mt-5">
              <div>
                <img class="hero-img" src="~/assets/img/Oval.png" alt="" />
              </div>
              <div>
                <p class="lead text-start">
                  Receive the same tips I used to double <br />
                  my traffic in just
                  <span class="fw-bold text-dark">two weeks!</span>
                </p>
              </div>
            </div>
            <div class="input-group mt-3 bg-white no-border">
              <input
                type="email"
                class="form-control p-3 shadow-none"
                placeholder="Enter your Email"
              />
              <button
                class="btn btn-outline-secondary btn-primaryy"
                type="button"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>

        <ul class="d-sm-flex mt-5 list-unstyled pt-5 bor-btm">
          <span>
            <li class="ps-4 my-4 fw-bold fs-8">
              <a class="text-decoration-none text-dark" href="">All</a>
            </li>
          </span>
          <span>
            <li class="ps-4 my-4 fw-bold fs-8">
              <a class="text-decoration-none text-dark" href=""
                >Backend Content Hubs</a
              >
            </li>
          </span>
          <span>
            <li class="ps-4 my-4 fw-bold fs-8">
              <a class="text-decoration-none text-dark" href=""
                >Ultimate Guides</a
              >
            </li>
          </span>
          <span>
            <li class="ps-4 my-4 fw-bold fs-8">
              <a class="text-decoration-none text-dark" href=""
                >Definitive Guides</a
              >
            </li>
          </span>
          <span>
            <li class="ps-4 my-4 fw-bold fs-8">
              <a class="text-decoration-none text-dark" href=""
                >Tips & Tricks</a
              >
            </li>
          </span>
        </ul>
      </div>
    </section>
    <section class="mx-2">
      <!-----------------------Article One----------------------->

      <!------------------Updated Article Two------------------>

      <FeaturedArticle />

      <!-----------------------Advert----------------------->

      <ArticleAdvert />

      <!-----------------------Article Threee----------------------->

      <LockArticle />

      <!----------------------------------Article Four------------------>

      <Article />
    </section>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Categories',

  data() {
    return {
      show: false,
    }
  },
  head() {
    return {
      title: this.$route.params.slug,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `weekly ${this.$route.params.slug} articles curated by backend developers`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `weekly ${this.$route.params.slug} articles curated by the community`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `weekly ${this.$route.params.slug} articles curated by the community`,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
  computed: {},
  methods: {
    async getPaginatedPosts(page) {
      this.show = true
      this.$router.push('/categories/backend?page=' + page)
      const data = {}
      data.page = page
      data.count = 12
      data.slug = this.$route.params.slug || 'backend'
      await this.$store.dispatch('post/getCategoryPosts', data)
      this.show = false
    },
  },
}
</script>

<style></style>
