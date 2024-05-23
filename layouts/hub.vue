<template>
  <main>
    <header>
      <Nav />
    </header>
    <Nuxt class="mb-5" />

    <Footer />
  </main>
</template>

<script>
// import '~/assets/css/hub/style.css'
export default {
  name: 'HubLayout',

  data() {
    return {
      baseURL: process.env.BASE_URL || 'https://masteringbackend.com',
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `${this.baseURL}${this.$route.path}`,
        },
      ],
    }
  },
}
</script>

<style>
</style>