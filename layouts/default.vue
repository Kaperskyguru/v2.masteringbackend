<template>
  <main style="background-color: #f7f5fa; width: 100% !important">
    <div
      style="
        position: sticky;
        top: 0;
        display: flex;
        padding: 10px;
        z-index: 91;
        justify-content: center;
        background-color: rgb(250 204 21/1);
      "
    >
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
    <Nuxt class="pb-5" />

    <Footer />
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Default',

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

  watch: {
    $route: {
      handler(value) {
        console.log(value)
      },
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

p > code {
  font-style: italic;
  font-size: 90%;
  color: #bd4147 !important;
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  padding: 0.2rem 0.4rem !important;
  border-radius: 0.25rem;
  display: inline !important;
}

:root {
  --primary-color: #0a083b;
  --danger: #ff6652;
  --para-color: #57586e;
  --gradient-warning: linear-gradient(180deg, #edac3d 8.09%, #f0c419 69.16%);
  --gradient-skyblue: linear-gradient(180deg, #3b43f2 8.09%, #2178ff 69.16%);
  --gradient-sea-blue: linear-gradient(180deg, #18aacd 8.09%, #19e3f0 69.16%);
  --gradient-pink: linear-gradient(180deg, #f22452 37.71%, #ff5364 60.98%);
  --gradient-purple: linear-gradient(180deg, #8214fc 8.09%, #9e6cff 69.16%);
  --gradient-dark-blue: linear-gradient(
    181.08deg,
    #001ed3 47.89%,
    #247bde 106.65%
  );
  --skyblue: #3b43f2;
  --sea-blue: #18aacd;
  --pink: #f22452;
  --warning: #edac3d;
  --dark-blue: #011ed3;
  --purple: #8214fc;
  --card-radius: 15px;
}

body {
  font-family: 'Avenir Next', 'inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  background: rgb(241, 241, 241);
  overflow-x: hidden;
}

.link {
  text-decoration: none;
  color: var(--primary-color);
}

.link:hover {
  color: #15117a;
}

h1 {
  color: #0a083b;
}

p {
  /* color: #57586e; */
  font-size: 1.3rem;
}
</style>