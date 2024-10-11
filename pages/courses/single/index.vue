<template>
  <main class="main">
    <section class="hero">
      <div class="container">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 hero__title">
            <h1 class="title__text">Single Backend Engineering Courses</h1>
            <p class="title__subtext fs-6">
              Whether you're new to backend engineering, or want to scale up,
              this is your home for backend engineering courses
            </p>

            <div class="mt-5">
              <div class="mb-1" style="color: #0a083b">
                Be notified when we publish new courses.
              </div>
              <iframe
                src="https://embeds.beehiiv.com/78d77170-5724-4176-ad4a-9b9c6447f3ec?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                frameborder="0"
                scrolling="no"
                style="
                  margin: 0;
                  border-radius: 0px !important;
                  background-color: transparent;
                  width: 100%;
                "
              ></iframe>
            </div>
          </div>
          <div class="col-md-6 hero__image">
            <img
              class="img-fluid"
              v-lazy-load
              data-src="https://res.cloudinary.com/kaperskydisk/image/upload/v1684533784/masteringbackend/posts/vectors/2842680.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="row gap-3 p-2">
        <Course v-for="(course, i) in courses" :course="course" :key="i" />
      </div>
    </section>
  </main>
</template>
  
  <script>
export default {
  name: 'AllCourses',

  async asyncData({ params, store }) {
    try {
      const res = await store.dispatch('hubs/fetchAllCourses')
      if (res?.message === 'Success') return { courses: res?.courses }
      return { courses: [] }
    } catch (error) {
      return { courses: [] }
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
  
  <style>
</style>