
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
                Join 8,500+ Backend Engineers Across our communities TODAY!
              </h1>
              <div class="my-4">
                <p class="title__subtext">
                  Chat and share with over a thousand backend engineers
                  worldwide. We have live discussions. We're building the
                  biggest Backend Development virtual user group in the world.
                  Come join the fun.
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

    <section id="jobs" class="dev-job text-center mt-5">
      <PageTitle class="col-lg-6 mx-auto p-5 text-center">
        <template #title>
          <h2 class="fw-bold">Why you should join now</h2>
        </template>
        <p class="dev-text">
          For vetted backend software engineering jobs for highly skilled and
          qualified backend engineers like you.
        </p>
      </PageTitle>
      <div class="container">
        <Jobs />
      </div>
    </section>

    <div class="border my-5"></div>

    <section class="container mx-auto">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="w-75 container mx-auto text-center">
          <div class="my-5">
            <h2 class="fw-bold">
              Also, join 5,500+ Senior (and aspiring) backend engineers from:
            </h2>
          </div>
        </div>
        <div class="pt-5 text-center">
          <Sponsors />
        </div>
        <div class="w-75 container mx-auto" id="hero_text">
          <div class="w-75 container mx-auto text-center" id="hero_text">
            <div class="my-5">
              <h2 class="fw-bold">
                ...sharing Backend Engineering Tips and building together
              </h2>
            </div>
          </div>
          <div class="row py-1 gap-5">
            <div class="container mx-auto w-50" id="hero_text">
              <h4>Join Our <strong>1,000+</strong> Community</h4>
              <div
                class="shadow border p-4 mt-4"
                style="background-color: white"
              >
                <form
                  ref="form"
                  method="post"
                  action="https://masteringbackend.us17.list-manage.com/subscribe/post?u=39ffc375608455a6fe549290a&amp;id=e42cd7d4b3"
                  class="form-slak"
                  @submit.prevent="submit"
                >
                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>First Name</b>
                    </label>
                    <input
                      v-model="user.firstname"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="text"
                      name="FNAME"
                      placeholder="Enter your firstname"
                      required
                    />
                  </div>

                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>Last Name</b>
                    </label>
                    <input
                      v-model="user.lastname"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="text"
                      name="LNAME"
                      placeholder="Enter your lastname"
                      required
                    />
                  </div>
                  <div class="form-group py-3">
                    <label class="text-dark" for="text">
                      <b>E-mail</b>
                    </label>
                    <input
                      v-model="user.email"
                      class="col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                      type="email"
                      name="EMAIL"
                      required
                      placeholder="Enter your email address"
                    />
                    <span class="text-danger">Enter a valid email</span>
                  </div>

                  <div class="form-group py-3">
                    <div class="form-check">
                      <input
                        id="gridCheck"
                        class="form-check-input"
                        checked
                        type="checkbox"
                      />
                      <label class="form-check-label text-muted" for="gridCheck"
                        >Weekly Newsletter</label
                      >
                    </div>
                  </div>
                  <small class="text-muted fs-7" style=""
                    >By clicking Newsletter, you agree to receive our Weekly
                    Mastering Backend emails. You can unsubscribe
                    anytime.</small
                  >

                  <div class="field">
                    <div class="control text-center mt-4">
                      <Button
                        class="col-lg-4 col-12 start-btn py-3 my-2"
                        type="submit"
                        >Join now</Button
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="col-lg-4">
              <h4>...and Join <strong>4,500+</strong> People On Socials</h4>
              <div class="d-flex flex-column">
                <a
                  href="http://twitter.com/master_backend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/twitter-big.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Twitter</h6>
                  </div>
                </a>
                <a
                  href="http://facebook.com/masteringbackend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/fb.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Facebook</h6>
                  </div>
                </a>
                <a
                  href="http://linkedin.com/company/masteringbackend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class="py-3 d-flex gap-1 align-items-center">
                    <div style="max-width: 50px">
                      <img
                        src="~/assets/img/linkedin.png"
                        class="img-fluid"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <h6>Linkedin</h6>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border my-5"></div>

    <section class="container mx-auto text-center">
      <div class="py-5 container mx-auto">
        <div class="w-75 container mx-auto" id="hero_text">
          <div class="my-5">
            <h2 class="fw-bold">
              ...with 3,000+ People That Get Our Weekly Backend Engineering Tips
              via Email
            </h2>
          </div>
        </div>
        <div class="pt-5">
          <Sponsors />
        </div>
        <div id="hero_text" class="w-75 container mx-auto">
          <div class="py-2">
            <div class="container mx-auto w-75 input-group" id="hero_text">
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
  name: 'CommunityPage',
  data: () => ({ user: {} }),
}
</script>

<style scoped>
.hero__grid {
  margin-top: 10%;
}

@media screen and (max-width: 991.98px) {
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