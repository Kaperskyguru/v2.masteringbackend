<!-- eslint-disable vue/no-v-html -->
<template>
  <div :style="[showImage ? { 'margin-top': '150px' } : '']" class="shadow">
    <div class="position-relative mt-5">
      <div
        class="bordder-primary text-center d-flex flex-column justify-content-center align-items-center"
        :style="[showImage ? { 'max-width': '950px', height: '500px' } : '']"
      >
        <div style="width: 200px; margin: -100px auto 30px" v-if="showImage">
          <img
            class="hero-img rounded-circle img-fluid w-80"
            :src="image"
            :alt="name"
          />
        </div>

        <div
          class="p-lg-3 w- p-2 pt-10 d-flex flex-column justify-content-center align-items-center"
        >
          <div class="w-100">
            <p
              class="text lh-md"
              style="font-size: 16px; font-weight: 500; text-align: left"
              :style="[showImage ? { 'text-align': 'left' } : '']"
              v-html="feedback"
            ></p>
          </div>
          <div
            class="d-flex pt-3 flex-row justify-content-center w-100"
            style="width: auto"
          >
            <p class="fs-5 fw-bold">
              {{ name }}
              <span class="fw-normal">. {{ position }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
      
      <script>
export default {
  name: 'TestimonialComponent',

  props: {
    showImage: {
      type: Boolean,
      default: true,
    },
    testimonial: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    image() {
      if (this.testimonial) {
        if (this.testimonial?.image) {
          return this.testimonial?.image
        }
      }
      return '/img/backend-2023.jpg'
    },

    feedback() {
      return `"${this.testimonial?.feedback ?? ''}"`
    },

    name() {
      return this.testimonial?.name ?? ''
    },

    position() {
      return this.testimonial?.position ?? ''
    },
  },
}
</script>
      
      <style scoped>
h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

.bordder-primary {
  border: 1px solid #1c168c;
  border-radius: 5px;
}

small {
  color: #57586e;
}
</style>
      