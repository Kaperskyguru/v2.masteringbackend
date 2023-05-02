<!-- eslint-disable vue/no-v-html -->
<template>
  <div style="margin-top: 100px">
    <div class="container mx-auto mt-5">
      <div class="bordder-primary mx-auto text-center" style="max-width: 950px">
        <div style="width: 200px; margin: -100px auto 30px">
          <img
            class="hero-img rounded-circle img-fluid w-80"
            :src="image"
            :alt="name"
          />
        </div>

        <div class="p-lg-5 p-2">
          <div>
            <p class="text lh-md fs-3" v-html="feedback"></p>
          </div>
          <div class="d-flex pt-3 flex-row justify-content-center">
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
      return '/img/Base.png'
    },

    feedback() {
      return this.testimonial?.feedback ?? ''
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
  border: 2px solid #1c168c;
  border-radius: 5px;
}

small {
  color: #57586e;
}
</style>
    