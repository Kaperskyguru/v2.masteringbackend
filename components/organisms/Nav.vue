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
          <li class="nav-item" :class="{ active: isActive() }">
            <a href="/" class="links nav-link">Home</a>
          </li>
          <li class="nav-item" :class="{ active: isActive('/posts') }">
            <a href="/posts" class="links nav-link">Blog</a>
          </li>
          <!-- <li class="nav-item"><a href="/jobs" class="nav-link">Jobs</a></li> -->
          <li class="nav-item" :class="{ active: isActive('/community') }">
            <a href="/community" class="nav-link">Community</a>
          </li>
        </ul>
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
</style>