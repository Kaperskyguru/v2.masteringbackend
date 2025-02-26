<template>
  <main>
    <div class="notif">
      <h2
        class="d-flex justify-center gap-1.5 text-xs font-medium text-black text-base"
        style="font-size: 1rem; font-weight: bold"
      >
        Unlock Your Python Backend Career: Build 30 Projects in 30 Days.

        <a
          class="justify-center gap-1.5 rounded bg-black px-2 py-0.5 text-sm text-xs font-medium uppercase tracking-wide text-white hover:bg-zinc-800 px-sm-3 py-sm-1"
          target="_blank"
          href="https://python30.masteringbackend.com?ref=masteringbackend"
          >Join now for just $54</a
        >
      </h2>
    </div>
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
.notif {
  position: sticky;
  top: 0;
  display: flex;
  padding: 10px;
  z-index: 91;
  justify-content: center;
  background-color: rgb(250 204 21/1);
}
</style>