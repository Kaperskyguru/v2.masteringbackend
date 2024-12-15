<template>
  <Dialog v-model="show">
    <template #left>
      <!-- title -->
      <h2>Join the Academy</h2>
      <!-- Image -->

      <!-- Add Sliding one line testimony here -->

      <div class="w-100 mt-5">
        <LearnerIcon class="mw-100" />
      </div>
    </template>

    <template #right>
      <div class="rounded border">
        <div class="d-flex justify-content-start align-items-center gap-2 p-1">
          <GoogleIcon />
          <div style="align-self: center">Signup with Google</div>
        </div>
      </div>

      <div class="my-4 d-flex justify-content-center align-items-center">
        <div style="width: 10%" class="border"></div>
        <div class="w-100 px-2" style="max-width: fit-content">
          Or signup with your email
        </div>
        <div style="width: 10%" class="border"></div>
      </div>

      <!-- Form -->
      <form ref="form" method="post" class="form-slak">
        <div class="form-group">
          <label class="text-dark" for="text">
            <b>Full Name</b>
          </label>
          <input
            class="col-lg-8 col-12 form-control shadow-none fs-5"
            type="text"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div class="form-group py-3">
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

        <div class="form-group py-3">
          <label class="text-dark" for="text">
            <b>Password</b>
          </label>
          <input
            required
            class="col-lg-8 col-12 form-control shadow-none fs-5"
            type="password"
          />
        </div>

        <div class="form-group py-2">
          <input type="checkbox" id="terms" />
          <label class="form-check-label text-muted" for="terms"
            >I agree to the
            <nuxt-link to="/terms-and-conditions" target="_blank">
              Terms & Conditions</nuxt-link
            ></label
          >
        </div>

        <div class="text-center mt-2">
          <Button
            appearance="purple"
            class="col-12 py-3 my-2 fw-bold"
            type="submit"
            >Register</Button
          >
        </div>

        <div class="text-center">
          <p class="form-check-label text-muted fs-6">
            Already have account? <a href="#" style="color: #9c4df4">Sign in</a>
          </p>
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
    GoogleIcon: () => import('~/assets/icons/googleIcon.svg?inline'),
  },

  data: () => ({
    show: true,
  }),
}
</script>

<style scoped>
a {
  color: #0a033c;
}
</style>