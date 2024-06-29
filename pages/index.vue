<template>
  <HomeOverview />
</template>

<script>
export default {
  name: 'IndexPage',

  head() {
    return {
      title:
        'Learn Backend Engineering, JavaScript, Node.js, PHP, Java, Rust, Ruby and System Design',
      titleTemplate: null,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Advance your backend engineering and software engineering skills from system design, databases, data structures and algorithms to backend',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'Learn Backend Engineering, JavaScript, Node.js, PHP, Java, Rust, Ruby and System Design',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Advance your backend engineering and software engineering skills from system design, databases, data structures and algorithms to backend',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
