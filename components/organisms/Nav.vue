<template>
  <nav class="navbar navbar-expand-xl pt-3">
    <div class="container">
      <Logo />

      <button
        @click="show = !show"
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        id="nav-menu"
        class="collapse navbar-collapse"
        :class="{ show: show }"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" :class="{ active: isActive('/posts') }">
            <a
              :href="`/posts?ref=${$route.query?.ref ?? 'homepage'}`"
              class="links nav-link"
              >Blog</a
            >
          </li>
          <li class="nav-item" :class="{ active: isActive('/courses') }">
            <a
              :href="`/courses?ref=${$route.query?.ref ?? 'homepage'}`"
              class="links nav-link"
              >Courses</a
            >
          </li>
          <li class="nav-item" :class="{ active: isActive('/books') }">
            <a
              :href="`/books?ref=${$route.query?.ref ?? 'homepage'}`"
              class="links nav-link"
              >Books</a
            >
          </li>
          <li class="nav-item" :class="{ active: isActive('/hubs') }">
            <a
              :href="`/hubs?ref=${$route.query?.ref ?? 'homepage'}`"
              class="links nav-link"
              >Hubs</a
            >
          </li>
          <li class="nav-item" :class="{ active: isActive('/podcasts') }">
            <a
              class="links nav-link"
              target="_blank"
              href="https://backendweekly.dev/podcasts?ref=masteringbackend&utm_source=masteringbackend&utm_medium=blog&utm_campaign=footer"
              >Podcasts</a
            >
          </li>
          <li class="nav-item">
            <a
              class="links nav-link"
              target="_blank"
              href="https://store.masteringbackend.com"
              >Our Store</a
            >
          </li>
          <li class="nav-item" :class="{ active: isActive('/community') }">
            <a
              :href="`/community?ref=${$route.query?.ref ?? 'homepage'}`"
              class="nav-link"
              >Community</a
            >
          </li>
        </ul>
        <div class="ms-5 d-flex">
          <div>
            <a
              target="_blank"
              :href="`https://app.masteringbackend.com?ref=${
                $route.query?.ref ?? 'homepage'
              }`"
              class="start-btn px-3 py-3"
            >
              Learn Backend Free
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',

  data: () => ({ show: false }),

  methods: {
    isActive(slug = '/') {
      return this.$route.path === slug
    },
  },
}
</script>

<style scoped>
.navbar .navbar-nav .nav-item a {
  font-size: 1rem;
  font-weight: 500;
}

.navbar .nav-item::after {
  content: '';
  width: 0;
  height: 4px;
  display: block;
  background-color: var(--primary-color);
  transition: all 0.3s ease;
}

.navbar .nav-item:hover::after {
  width: 100%;
}

.navbar .nav-item {
  padding-right: 30px;
}

.navbar .navbar-nav .active a {
  background-color: #0a083b;
  -webkit-background-clip: text;
  background-clip: text;
  background: text;
  font-weight: bold;
}

.navbar .navbar-nav .nav-item a:hover {
  color: #0a083b;
}

.nav-link {
  color: #57586e;
  font-size: 0.8rem;
}

.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
}
</style>