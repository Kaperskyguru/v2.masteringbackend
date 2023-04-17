<template>
  <nav class="navbar navbar-expand-xl pt-3">
    <div class="container">
      <Logo />
      <i class="bx bx-menu navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav-menu"></i>
      <div id="nav-menu" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" :class="{ 'active': isActive() }">
            <a href="/" class=" links nav-link">Home</a>
          </li>
          <li class="nav-item" :class="{ 'active': isActive('/posts') }">
            <a href="/posts" class="links nav-link">Blog</a>
          </li>
          <!-- <li class="nav-item"><a href="/jobs" class="nav-link">Jobs</a></li> -->
          <li class="nav-item" :class="{ 'active': isActive('/slack') }">
            <a href="/slack" class="nav-link">Community</a>
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

  methods: {
    isActive(slug = '/') {
      return this.$route.path === slug
    }
  }

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

.btn-warning {
  background-color: #1c168c;
  color: #fff;
  border-radius: 15px;
  border: none;
}

.btn-warning:hover {
  background-color: #1c168cbd;
  color: #fff;
  border: none;
}
</style>