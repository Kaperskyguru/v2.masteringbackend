<template>
  <section>
    <section class="d-flex align-items-center justify-content-center mb-5">
      <div class="container">
        <div class="row mt-5 text-justify">
          <div class="col-lg-6 mx-auto mt-5 text-cener">
            <h1 class="hero-text mb-4">Get Full-Time Backend Tips</h1>
            <div class="d-flex flex-column justify-content-center mt-5">
              <div class="d-flex justify-content-center">
                <div class="mx-3">
                  <img
                    class="hero-img rounded-circle"
                    src="~/assets/img/solomon-eseme.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p class="lead text-start fs-5">
                    Receive the same tips I used to land <br />
                    my my dream job in
                    <span class="fw-bold text-dark">backend engineering!</span>
                  </p>
                </div>
              </div>
              <div class="input-group mt-3 p-2 bg-white no-border">
                <input
                  type="email"
                  v-model="email"
                  class="form-control p-2 shadow-none"
                  style="border: 0"
                  placeholder="Enter your Email"
                />
                <Button
                  class="btn btn-outline-secondary start-btn btn-primaryy"
                  type="button"
                  @click.prevent="subscribe"
                >
                  Start Now
                </Button>
              </div>
            </div>
            <div
              v-if="res.message || show"
              class="alert mt-1 fade d-flex font-weight-normal"
              style="justify-items;: space-between"
              :class="[`alert-${res.type}`, { show: show }]"
              role="alert"
            >
              <p class="w-100">{{ res.message }}</p>
              <button
                v-if="res.message"
                type="button"
                data-dismiss="alert"
                aria-label="Close"
                @click="
                  show = false
                  res = {}
                "
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>

        <div class="d-lg-flex align-items-center justify-content-center">
          <ul
            class="col-10 d-lg-flex d-sm-flex mt-5 list-unstyled pt-5 bor-btm"
          >
            <span :class="{ active: tab === '' }">
              <li class="ps-4 my-4 fw-bold fs-8">
                <a class="text-decoration-none text-dark" href="/posts">All</a>
              </li>
            </span>
            <span :class="{ active: tab === 'hub' }">
              <li class="ps-4 my-4 fw-bold fs-8">
                <a
                  class="text-decoration-none text-dark"
                  href="#hub"
                  @click.prevent="getPosts('#hub')"
                  >Backend Content Hubs</a
                >
              </li>
            </span>
            <span :class="{ active: tab == 'ultimate' }">
              <li class="ps-4 my-4 fw-bold fs-8">
                <a
                  class="text-decoration-none text-dark"
                  @click.prevent="getPosts('#ultimate')"
                  >Ultimate Guides</a
                >
              </li>
            </span>
            <span :class="{ active: tab == 'definitive' }">
              <li class="ps-4 my-4 fw-bold fs-8">
                <a
                  class="text-decoration-none text-dark"
                  @click.prevent="getPosts('#definitive')"
                  >Definitive Guides</a
                >
              </li>
            </span>
            <span :class="{ active: tab == 'sponsored' }">
              <li class="ps-4 my-4 fw-bold fs-8">
                <a
                  class="text-decoration-none text-dark"
                  @click.prevent="getPosts('#sponsored')"
                  >Sponsored</a
                >
              </li>
            </span>
          </ul>
          <ul
            class="d-flex d-sm-flex mt-lg-5 list-unstyled pt-lg-5 bor-btm position-relative"
          >
            <div
              v-if="showSearch"
              class="position-absolute"
              style="right: 30px; bottom: 20px"
            >
              <input
                class="form-control shadow-none fs-5"
                style="width: auto"
                type="text"
                v-model="searchText"
                placeholder="Enter text and press enter"
              />
            </div>
            <span @click.prevent="showSearch = !showSearch">
              <li class="ps-4 my-4 fw-bold fs-8">
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7871 20.7106L17.9547 15.4071C19.5193 13.7716 20.4665 11.6376 20.4665 9.30524C20.4665 4.17115 15.874 0 10.2332 0C4.58713 0 0 4.17599 0 9.30524C0 14.4345 4.59245 18.6105 10.2332 18.6105C12.7982 18.6105 15.145 17.7491 16.9436 16.3265L22.776 21.63C22.9144 21.7558 23.1006 21.8235 23.2815 21.8235C23.4625 21.8235 23.6487 21.7606 23.7871 21.63C24.0638 21.3783 24.0638 20.9622 23.7871 20.7106ZM1.43148 9.30524C1.43148 4.89215 5.38003 1.30651 10.2279 1.30651C15.0811 1.30651 19.0244 4.89698 19.0244 9.30524C19.0244 13.7135 15.0811 17.3088 10.2279 17.3088C5.38003 17.3088 1.43148 13.7183 1.43148 9.30524Z"
                    fill="#434343"
                  />
                </svg>
              </li>
            </span>
          </ul>
        </div>
      </div>
    </section>

    <section class="mx-auto container">
      <!-----------------------Featured Article----------------------->
      <FeaturedArticle
        v-if="featuredPost && !removeFeatured"
        :post="featuredPost"
      />

      <!-----------------------Advert----------------------->
      <AcademyAdvert is-article v-if="!removeFeatured || !allPosts.length" />

      <span v-for="(post, index) in getAllArticles" :key="index" :post="post">
        <!-----------------------Locked Article----------------------->
        <LockArticle v-if="post.is_sticky" :post="post" />

        <!-----------------------Article----------------------->
        <Article v-else :post="post" />

        <ArticleAdvert v-if="removeFeatured && index === 0" />
      </span>
    </section>
  </section>
</template>
  
<script>
import { submit } from '~/helpers/mailchimp'
export default {
  name: 'PostOverview',
  data() {
    return {
      page: 1,
      allPosts: [],
      tab: '',
      res: {},
      show: false,
      searchText: '',
      showSearch: false,
      substack: false,
      email: '',
      removeFeatured: false,
    }
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },

  watch: {
    searchText: {
      handler(value) {
        this.search(value)
      },
    },
  },

  created() {
    this.allPosts = this.getAllArticles
  },

  computed: {
    featuredPost() {
      const posts = this.removeSponsored
      return posts.shift()
    },

    getAllArticles() {
      const posts = this.removeSponsored

      return posts.filter((post) => {
        const fPost = this.featuredPost
        return post.slug !== fPost?.slug
      })
    },

    getUltimate() {
      return [...this.posts].filter((post) => post?.type?.includes('ultimate'))
    },

    getSponsored() {
      return [...this.posts].filter((post) => {
        return post?.categories?.find((cat) => cat.slug === 'sponsored')
      })
    },

    getDefinitive() {
      return [...this.posts].filter((post) =>
        post?.type?.includes('definitive')
      )
    },

    getHub() {
      return [...this.posts].filter((post) => post?.type?.includes('hub'))
    },

    removeSponsored() {
      return [...this.posts].filter(
        (post) => !post?.categories?.find((cat) => cat.slug === 'sponsored')
      )
    },
  },

  methods: {
    search(value) {
      this.$emit('search', value)
    },

    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: [],
      })

      this.show = true

      if (res.type === 'info')
        return this.$router.push('/emails/already-subscribed')

      if (res.type === 'success')
        return this.$router.push('/emails/free-updates')
      this.res = res
    },

    getTab(tab) {
      return this.tab === tab
    },

    getPosts(slug = '') {
      if (slug) this.removeFeatured = true

      if (slug.includes('ultimate')) {
        this.allPosts = this.getUltimate
        this.tab = 'ultimate'
        return
      }

      if (slug.includes('hub')) {
        this.allPosts = this.getHub
        this.tab = 'hub'
        return
      }

      if (slug.includes('definitive')) {
        this.allPosts = this.getDefinitive
        this.tab = 'definitive'
        return
      }

      if (slug.includes('sponsored')) {
        this.tab = 'sponsored'
        this.allPosts = this.getSponsored
        return
      }

      this.allPosts = this.getAllArticles
    },
  },
}
</script>
  
<style scoped>
.no-border {
  border: 0;
  box-shadow: none;
  /* You may want to include this as bootstrap applies these styles too */
}

.hero-text {
  font-weight: 800;
  color: #0a083b;
  font-size: 40px;
}

.lead {
  color: #000;
}

.hero-img {
  width: 50px;
  height: 50px;
}

.btn-outline-secondary {
  background: #191489;
  color: #fff;
}

.form-control {
  color: #5d5a6f;
  opacity: 60%;
  font-size: 0.8rem;
}

h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

/* ---------------End Navbar----------------------------- */

/*----------------------Hero Section------------------*/
/*----------------------Hero Section------------------*/
.no-border {
  border: 0;
  box-shadow: none;
  /* You may want to include this as bootstrap applies these styles too */
}

.hero-text {
  font-weight: 800;
  color: #0a083b;
  font-size: 40px;
}

.lead {
  color: #000;
}

.hero-img {
  width: 50px;
  height: 50px;
}

.btn-outline-secondary {
  background: #191489;
  color: #fff;
}

.form-control {
  color: #5d5a6f;
  opacity: 60%;
  font-size: 0.8rem;
}

.bor-btm {
  border-bottom: 1px solid #c8c8c8;
  margin-top: 5px;
}

ul.bor-btm span::after {
  content: '';
  display: block;
  width: 0;
  height: 4px;
  background-color: #1c168c;
  transition: 0.5s ease;
}

.active {
  /* width: 0; */
  /* height: 4px; */
  border-bottom: 3px solid #1c168c;
  /* background-color: #1c168c; */
  /* width: 100%; */
}

ul.bor-btm span:hover::after {
  width: 100%;
}

small {
  color: #57586e;
}

.btn-primaryy {
  background-color: #1c168c;
  color: #fff;
  transition: all 0.3s ease;
}

.btn-primaryy:hover {
  background-color: #100c5cda;
  color: #fff;
}

footer {
  background: #17154b;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.6rem;
  font-weight: normal;
}

footer ul {
  list-style-type: none;
  padding-left: 0;
}

footer small {
  color: #fff;
  opacity: 70%;
}
</style>