<template>
  <main>
    <section>
      <div class="container mx-auto">
        <div class="row hero__grid">
          <div id="hero_text" class="col-lg-6 col-md w-75">
            <div class="position-relative w-100">
              <h1
                class="title__text fw-bold mb-md-2 display-4 mt-2 text-capitalize"
              >
                Proven Backend Engineering Tips Straight to Your Inbox
              </h1>
              <div class="my-4">
                <p class="title__subtext">
                  Get access to exclusive tips, strategies and case studies that
                  we don't share anywhere else.
                </p>
                <div class="gradient"></div>
              </div>
            </div>
            <!-- ---------------input--------------------------------------------- -->
            <div class="col-md-8">
              <div class="input-group mt-4 py-4">
                <input
                  class="col-lg-8 py-md-2 col-12 form-control shadow-none fs-5 my-2"
                  type="email"
                  style="border: 2"
                  placeholder="Enter your email address..."
                />

                <Button
                  type="button"
                  class="col-lg-4 col-12 start-btn py-3 my-2"
                >
                  Try it
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border my-5"></div>

    <section class="container mx-auto text-center">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="w-75 container mx-auto">
          <div class="my-5">
            <h2 class="fw-bold">
              Join 3,000+ People That Get Our Weekly Backend Engineering Tips
              via Email
            </h2>
          </div>
        </div>
        <div class="pt-5">
          <Sponsors />
        </div>
        <div id="hero_text" class="w-75 container mx-auto">
          <div class="py-2">
            <div id="hero_text" class="container mx-auto w-75 input-group">
              <input
                class="col-lg-8 py-md-2 col-12 form-control shadow-none fs-5 my-2"
                type="email"
                style="border: 2"
                placeholder="Enter your email address..."
              />

              <Button type="button" class="col-lg-4 col-12 start-btn py-3 my-2">
                Try it
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'NewsletterPage',
}
</script>

<style scoped>
.hero__grid {
  margin-top: 10%;
}

@media (max-width: 991.98px) {
  #hero_text {
    width: 100% !important;
  }
}

.title__text {
  font-weight: 800;
  /* font-size: 50px; */
}

.user-name {
  color: #16213e;
  line-height: 0;
}

.job-title {
  color: #001ed3;
}

.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
}

.gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  /* left: 0; */
  transform: translate(0, -50%);
  top: 50%;
  background: rgba(255, 102, 82, 0.2);
  filter: blur(325px);
}
</style>