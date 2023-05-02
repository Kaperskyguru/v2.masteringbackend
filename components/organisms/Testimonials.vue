<template>
  <section class="Article mb-5 text-center p-3 Dev-art my-5" id="Articles">
    <PageTitle>
      <template #title>
        <h3 class="sponsor-header-text my-5 text-uppercase">
          What others are saying:
        </h3>
      </template>
    </PageTitle>
    <Testimonial
      v-for="(testimonial, index) in testimonials"
      :key="index"
      :testimonial="testimonial"
    />
  </section>
</template>

<script>
export default {
  name: 'TestimonialComponent',
  data: () => ({
    testimonials: [
      {
        feedback:
          'Mastering Backend has evolved from a blog into an all-encompassing learning hub, providing valuable resources, courses, and tools to help individuals advance their knowledge and skills. I strongly recommend exploring Mastering Backend as a resource for your personal and/or professional growth.',
        name: 'Agoro, Adegbenga. B',
        position: 'Co-Founder/CTO, Crenet',
        image: '/img/people/agoro.jpeg',
      },
    ],
  }),
}
</script>

<style>
</style>