<template>
  <HubsOverview
    title="Backend Engineerng Courses"
    desc="Whether you're new to backend engineering, or want to scale up, this is your home for backend engineering courses."
    :hubs="courses"
  />
</template>
      
      <script>
export default {
  name: 'HubIndex',
  layout: 'hub',

  async asyncData({ query, store }) {
    try {
      const getCourses = store.getters['hubs/getCourses']
      let courses = await getCourses()
      if (!courses?.length) {
        const data = {}
        data.page = query.page ? query.page : 1
        data.count = 22
        courses = await store.dispatch('hubs/getCourses', {
          ...data,
          populate: {
            image: true,
            chapters: {
              populate: {
                posts: true,
              },
            },
          },
        })
      }
      return { courses }
    } catch (error) {
      const courses = []
      return { courses }
    }
  },

  head() {
    return {
      title: 'Best Backend Engineering Courses',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Access to a catalog of backend courses, backend development courses, advanced backend engineering courses, nestjs courses and backend web development courses. Next-level Backend Engineering courses and Exclusive resources.`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `Access to a catalog of backend courses, backend development courses, advanced backend engineering courses, nestjs courses and backend web development courses. Next-level Backend Engineering courses and Exclusive resources.`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `Access to a catalog of backend courses, backend development courses, advanced backend engineering courses, nestjs courses and backend web development courses. Next-level Backend Engineering courses and Exclusive resources.`,
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
      
      <style scoped>
</style>