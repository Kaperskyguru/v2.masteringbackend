<template>
  <section
    class="Article mb-5 text-center p-3 Dev-art my-5 container mx-auto"
    id="Articles"
  >
    <PageTitle>
      <template #title>
        <h3 class="sponsor-header-text my-5 text-uppercase">
          {{ title }}
        </h3>
      </template>
    </PageTitle>
    <div class="flex-column d-flex">
      <div class="w-100 mx-auto">
        <div class="masonry-grid">
          <div
            :style="{ 'grid-row': 'span ' + 3 * index }"
            class="gri"
            v-for="(testimonial, index) in allTestimonials"
            :key="index"
          >
            <CourseTestimonial
              :showImage="showImage"
              :testimonial="testimonial"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  props: {
    showImage: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'What students are saying about the course',
    },

    data: {
      type: Array,
      default: () => [],
    },
  },
  name: 'TestimonialComponent',
  data: () => ({
    testimonials: [
      {
        feedback:
          'I strongly recommend exploring Mastering Backend as a resource for your personal and/or professional growth.',
        name: 'Agoro, Adegbenga. B',
        position: 'CTO, Crenet',
        image: '/img/people/agoro.jpeg',
      },
      {
        feedback: `The practical examples and hands-on exercises were particularly beneficial. They not only reinforced the theoretical concepts but also allowed me to apply them in real-world scenarios. The inclusion of best practices and common pitfalls added a practical dimension to the learning process.`,
        name: 'Daniel Tinivella',
        position: 'Software Engineer, Globant',
        image: '/img/people/daniel.webp',
      },

      {
        feedback: `The course is an excellent resource for beginners. Your explanations of the basics are clear, making it easy for newcomers to grasp. I particularly enjoyed the task management application; it's a practical example that helps solidify the concepts.`,
        name: 'Eshan Shafeeq',
        position: 'Blockchain & Web3 Engineer, Cake Defi',
        image: '/img/people/eshan.jpeg',
      },
    ],
  }),

  computed: {
    allTestimonials() {
      return [...this.testimonials, ...this.data]
    },
  },
}
</script>
  
  <style>
.masonry-grid {
  display: grid;
  justify-content: center;
  gap: 1px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-template-rows: masonry;
}
.gri {
  /* grid-row: span 20; */
  opacity: 1;
  padding-left: 7px;
  padding-right: 7px;
}
</style>