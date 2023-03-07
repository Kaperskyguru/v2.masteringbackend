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

          <span>
            <li class="ps-4 my-4 fw-bold fs-8">
              <a class="text-decoration-none text-dark" href="">Sponsored</a>
            </li>
          </span>
        </ul>
      </div>
    </section>

    <section class="mx-2">
      <!-----------------------Featured Article----------------------->
      <FeaturedArticle v-if="featuredPost" :post="featuredPost" />

      <!-----------------------Advert----------------------->
      <ArticleAdvert />

      <span v-for="(post, index) in getAllArticles" :key="index" :post="post">
        <!-----------------------Locked Article----------------------->
        <LockArticle v-if="post.is_sticky" :post="post" />

        <!-----------------------Article----------------------->
        <Article v-else :post="post" />
      </span>

      <div class="d-grid col-lg-10 col-md-10 mx-auto">
        <button class="btn btn-primary-old btn-lg mt-3 fs-3 mb-5 p-3">
          Older post
        </button>
      </div>
    </section>
  </section>
</template>
  
  <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'PostOverview',

  props: {
    posts: {
      type: Array,
      default: () => [],
    },
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

    removeSponsored() {
      return [...this.posts].filter(
        (post) => !post?.categories?.find((cat) => cat.slug === 'sponsored')
      )
    },
  },
}
</script>
  
  <style scoped>
.no-border {
  border: 0;
  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */
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

.btn-primary-old {
  background-color: #9c4df4;
  color: #fff;
}

.btn-primary-old:hover {
  color: rgba(255, 255, 255, 0.8);
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
  box-shadow: none; /* You may want to include this as bootstrap applies these styles too */
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