<template>
  <Dialog v-model="show" class="p-10">
    <template #left>
      <!-- title -->
      <h3>Welcome back</h3>
      <!-- Image -->
      <div class="w-100 mt-5">
        <LearnerIcon class="mw-100" />
      </div>
    </template>

    <template #right>
      <div class="rounded border mb-2">
        <div class="d-flex justify-content-start align-items-center gap-2 p-1">
          <GoogleIcon />
          <div style="align-self: center">Signin with Google</div>
        </div>
      </div>

      <div class="rounded border">
        <div class="d-flex justify-content-start align-items-center gap-2 p-1">
          <GithubIcon />
          <div style="align-self: center">Signin with Github</div>
        </div>
      </div>

      <div class="my-4 d-flex justify-content-center align-items-center">
        <div style="width: 10%" class="border"></div>
        <div class="w-100 px-2" style="max-width: fit-content">
          Or signin with your email
        </div>
        <div style="width: 10%" class="border"></div>
      </div>

      <!-- Form -->
      <form ref="form" method="post" class="form-slak">
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

        <!--  -->

        <div class="text-center mt-2">
          <Button appearance="purple" class="col-12 py-3 my-2" type="submit"
            >Login</Button
          >
        </div>

        <div class="d-flex justify-content-between py-2">
          <div class="form-group">
            <input type="checkbox" id="terms" />
            <label class="form-check-label text-muted" for="terms"
              >Keep me logged in</label
            >
          </div>

          <div class="text-center">
            <a href="#" style="color: #9c4df4">Forgot Password?</a>
          </div>
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
    GithubIcon: () => import('~/assets/icons/github.svg?inline'),
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