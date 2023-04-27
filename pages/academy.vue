<template>
  <main class="m-0 position-relative">
    <section class="pb-5">
      <div class="container mx-auto">
        <div class="row hero__grid">
          <div id="hero_text" class="col-lg-6 col-12 w-75">
            <div class="position-relative w-100">
              <h1
                class="title__text fw-bold mb-md-2 display-4 mt-2 text-capitalize"
              >
                Advanced Backend Engineering Training
              </h1>
              <div class="my-4">
                <p class="title__subtext">
                  Advanced Backend 2.0: a proven way to learn Backend
                  Engineering. Learn from experts.
                </p>
                <div class="gradient"></div>
              </div>
            </div>
            <!-- ---------------input--------------------------------------------- -->
            <div class="col-md-8">
              <Button
                type="button"
                @click.prevent="openDialog"
                class="col-lg-4 col-12 start-btn py-3 my-2 fw-bold"
              >
                Join the Waiting List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border my-5"></div>

    <section class="p-3 sponsors text-center">
      <PageTitle>
        <template #title>
          <h3 class="sponsor-header-text mb-5 text-uppercase fw-bold">
            Trusted by backend software engineers at:
          </h3>
        </template>
      </PageTitle>
      <Sponsors />
    </section>

    <section class="py-3 text-white" style="background-color: #05041b">
      <div class="container mx-auto">
        <div class="row p-5">
          <div class="col-lg-12 col-md">
            <div class="gap-5 justify-content-between row">
              <div class="col-12 col-lg-4">
                <p class="pt-5">
                  Finally, a Backend Engineering course that shows you exactly
                  how to level up your backend engineeing skills, step-by-step.
                </p>
              </div>

              <div class="col-12 col-lg-6">
                <ul class="pt-2 px-0">
                  <li class="pb-2">
                    Even if... you've struggled with Backend Engineering in the
                    past
                  </li>
                  <li class="py-2">
                    Even if... you're new to Backend Engineering
                  </li>
                  <li class="py-2">
                    Even if... you're overwhelmed with no idea where to start
                  </li>
                  <li class="py-2">
                    Even if... you've thought to yourself “Backend Engineering
                    doesn't work for me”
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="w-75 container mx-auto text-center">
          <div class="my-5">
            <h2 class="fw-bold">Meet Your Instructor: Solomon Eseme</h2>
          </div>
        </div>
        <div class="w-75 container mx-auto" id="hero_text">
          <div class="my-5">
            <h5 class="fw-bold">
              A Passionate Software Engineer with 6+ years of experience in
              developing scalable and innovative softwares.
            </h5>
          </div>
          <div class="row py-1">
            <div class="container mx-auto w-50" id="hero_text">
              <div class="shadow p-4 border my-4" style="max-width: 300px">
                <img
                  src="~/assets/img/solomon-eseme.jpg"
                  class="img-fluid"
                  alt=""
                  srcset=""
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div>
                <p>
                  Solomon Eseme is the founder of Mastering Backend and the
                  author of
                  <a
                    href="http://architectingvue.com"
                    style="color: rgb(187, 74, 3) !important"
                    target="_blank"
                    >Architecting Enterprise Vue</a
                  >.
                </p>

                <p>
                  Solomon Eseme is an experienced Software Engineer specializing
                  in backend technologies.
                </p>
                <p>
                  After working across different frontend and backend stacks in
                  a variety of workplaces from start-ups to larger
                  consultancies,
                </p>
                <p>
                  He founded Masteringbackend to train and share resources on
                  building high-performing, scalable and innovative applications
                  following best practices and industry standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="border my-5"></div>

    <!-- Results (Testimonial) -->

    <section class="container mx-auto">
      <div class="py-5 container mx-auto">
        <!-- <div class="w-75 container mx-auto" id="hero_text"> -->
        <div class="row py-1">
          <div class="col-lg-6">
            <h2 class="fw-bold" style="color: #05041b">
              Introducing Advanced Backend 2.0
            </h2>
          </div>

          <div class="col-lg-6">
            <div>
              <p>
                Since that initial launch of Advanced Backend, we've made dozens
                of updates to the program.
              </p>

              <p>
                For the first time ever we're releasing Advanced Backend 2.0, my
                new Backend Engineering course that shows you exactly how to
                become a backend engineer, step-by-step.
              </p>

              <p>
                The best part? The strategies in the course are what I use to
                land my dream job at Friday Finance (Airbank).
              </p>

              <p>
                Here's exactly what's inside of the new Advanced Backend 2.0
                training program.
              </p>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <div class="row p-0 gap-">
          <div class="col-lg-6 col-12 mt-4">
            <div class="p-5 box" style="background-color: white">
              <h3 class="fs-4 py-4">In-Depth Backend Engineering Training</h3>
              <p class="fs-5">
                No fluff. No theory. Just 100% actionable and practical approach
                to help you learn backend engineering in record time.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-12 mt-4">
            <div class="p-5 box" style="background-color: white">
              <h3 class="fs-4 py-4">All About Results</h3>
              <p class="fs-5">
                If you want a theoretical approach, this isn't for you. Advanced
                Backend is engineered uses practical based, one-on-one approach
                to deliver RESULTS.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-12 mt-4">
            <div class="p-5 box" style="background-color: white">
              <h3 class="fs-4 py-4">Always Up-To-Date</h3>
              <p class="fs-5">
                You never have to worry about outdated stuff. Our material is
                always current and up-to-date. It follows industry standards and
                best practices specifically for next level backend engineers.
              </p>
            </div>
          </div>
          <div class="col-lg-6 col-12 mt-4">
            <div class="p-5 box" style="background-color: white">
              <h3 class="fs-4 py-2">Works In Any Industry</h3>
              <p class="fs-5">
                Our material has been tested by hundreds students that works in
                different industries such as FinTech, HealthTech, EduTech, etc
                and companies including top backend engineers from Salesforce,
                Razorpay, Directi, and SentinelOne.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <!-- </div> -->
    </section>

    <div class="border my-5"></div>

    <section class="container mx-auto mb-5">
      <div class="py-5 container mx-auto text-center">
        <!-- <div id="hero_text" class="w-75 container mx-auto text-center"> -->
        <div class="my-5">
          <h2 class="fw-bold">A Peek Inside of the Course</h2>
          <p>
            Here's a sneak preview of what you'll learn in Advanced Backend 2.0.
          </p>
        </div>
      </div>
      <div class="container mx-auto" id="hero_text">
        <div class="row py-1">
          <div class="col-lg-6" id="hero_text">
            <div class="p-4 mt-4" style="background-color: white">
              <h3 class="text-center pt-3 fw-bold">Node.js Backend Track</h3>

              <ul class="py-5">
                <li class="py-2">Overview of Frontend Development</li>
                <li class="py-2">Design and Deploy Standard REST APIs</li>
                <li class="py-2">Design MongoDB & PostgreSQL Database(s)</li>
                <li class="py-2">Career Coaching for Backend Engineers</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="p-4 mt-4" style="background-color: white">
              <h3 class="text-center fw-bold pt-3">PHP Backend Track</h3>
              <ul class="py-5">
                <li class="py-2">Overview of Frontend Development</li>
                <li class="py-2">Design and Deploy Standard REST APIs</li>
                <li class="py-2">Design MongoDB & PostgreSQL Database(s)</li>
                <li class="py-2">Career Coaching for Backend Engineers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>

    <section class="" style="background-color: rgb(243, 246, 250)">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="w-75 container mx-auto text-center">
          <div class="my-5">
            <h2 class="fw-bold">Next Level Backend Engineering Training</h2>
          </div>
        </div>
        <div class="container mx-auto" id="hero_text">
          <div class="row py-1">
            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Lifetime Updates</h3>
                <p class="fs-5">
                  Get access to updated and upgraded versions of the program no
                  extra charge.
                </p>
              </div>
            </div>

            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Community</h3>
                <p class="fs-5">
                  Learn from a thriving community of helpful students and
                  graduates from top companies.
                </p>
              </div>
            </div>

            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Lifetime Access</h3>
                <p class="fs-5">
                  You get access to the classes and webinars replays for life at
                  no extra cost.
                </p>
              </div>
            </div>

            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Proven System</h3>
                <p class="fs-5">
                  A learning method that works in ANY industry.
                </p>
              </div>
            </div>

            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">At your pace/Join class</h3>
                <p class="fs-5">
                  No need to rush. You can take the course on your own schedule.
                </p>
              </div>
            </div>

            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Practice Projects</h3>
                <p class="fs-5">
                  Real-life practice projects to help you build momentum and
                  insight.
                </p>
              </div>
            </div>

            <div class="col-lg-4" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Career Services</h3>
                <p class="fs-5">
                  Access to career services such as Resume, Cover letter
                  reviews, mock interviews and job placements.
                </p>
              </div>
            </div>

            <div class="col-lg-8" id="hero_text">
              <div class="p-5 mt-4 box" style="background-color: white">
                <h3 class="fs-4 py-4">Bonus For You</h3>
                <p class="fs-5">
                  Introduction to Frontend Engineering. Access to class and
                  webinars replays. Close guidance to land internship, job, or
                  freelance opportunities. Mentorship from software engineers at
                  tech companies. Access to Alumni private group (channel)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background-color: rgba(47, 43, 148, 1)">
      <div class="container mx-auto">
        <div class="row justify-content-center">
          <div class="col-lg-10 col-sm-12 col-md-12">
            <div class="p-5 my-4" style="background-color: white">
              <div class="text-center">
                <h2 class="fw-bold">
                  Enrollment For Advanced Backend Will Open Soon
                </h2>

                <p>
                  We open up enrollment for Advanced Backend once per year. Hop
                  on the waiting list to get notified the next time we open up.
                </p>
              </div>
              <div class="row justify-content-center">
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
                      class="col-lg-4 col-12 start-btn py-3 my-2 fw-bold"
                    >
                      Join the Waiting List
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Dialog v-model="isEmailDialogOpen">
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
              <label class="form-check-label" for="php"
                >PHP Backend Track</label
              >
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
  </main>
</template>

<script>
export default {
  name: 'AcademyPage',

  components: {
    LearnerIcon: () => import('~/assets/icons/mb-learner.svg?inline'),
  },

  data: () => ({ isEmailDialogOpen: false }),

  methods: {
    openDialog() {
      this.isEmailDialogOpen = true
    },
  },
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

main {
  padding-block: 0px !important;
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

.box {
  max-height: 600px;
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