<template>
  <Dialog v-model="visibleDialog">
    <template #left>
      <h3>Join Advanced Backend 2.0</h3>

      <div class="w-100">
        <LearnerIcon class="mw-100" />
      </div>
    </template>

    <template #right>
      <div class="mt-4 d-flex justify-content-center align-items-center">
        <div class="w-100 px-2" style="max-width: fit-content">
          <h4>
            Enter your email below to hop on the Advanced Backend waiting list
          </h4>

          <p class="fs-6 my-4">
            Almost there! Just enter your email address and choose your track
            below to join the waiting list!
          </p>
        </div>
      </div>

      <form ref="form" method="post" action="#" class="form-slak">
        <div class="form-group">
          <label class="text-dark" for="text">
            <b>E-mail</b>
          </label>
          <input
            class="col-lg-8 col-12 form-control shadow-none fs-5"
            type="email"
            required
            placeholder="Enter your email address"
          />
        </div>

        <div class="py-3">
          <div class="form-check py-2">
            <input
              type="radio"
              class="form-check-input"
              name="track"
              id="nodejs"
            />
            <label class="form-check-label" for="nodejs"
              >Node.js Backend Track</label
            >
          </div>
          <div class="form-check py-2">
            <input
              type="radio"
              class="form-check-input"
              name="track"
              id="php"
            />
            <label class="form-check-label" for="php">PHP Backend Track</label>
          </div>
        </div>
        <div class="text-center mt-2">
          <Button
            appearance="purple"
            class="col-12 py-3 my-2 fw-bold"
            type="submit"
            >Join the waiting list</Button
          >
        </div>
      </form>
    </template>
  </Dialog>
</template>
    
    <script>
export default {
  name: 'RegisterComponent',
  components: {
    LearnerIcon: () => import('~/assets/icons/mb-learner.svg?inline'),
  },

  data: () => ({ visibleDialog: false }),

  model: {
    prop: 'visible',
    event: 'update:visible',
  },

  visibleDialog: {
    get() {
      return this.visible
    },

    set(value) {
      console.log('asa')
      this.$emit('update:visible', value)
    },
  },

  watch: {
    visible(value) {
      console.log(value, 'watch')
      if (value) {
        this.visibleDialog = value
      }
    },
  },

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
    
    <style scoped>
a {
  color: #0a033c;
}
</style>