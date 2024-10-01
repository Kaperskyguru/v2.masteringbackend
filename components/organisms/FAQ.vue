<template>
  <section class="my-5 py-5" style="background-color: #f7f5fa">
    <div class="container mx-auto my-5 py-5">
      <PageTitle>
        <template #title>
          <h3
            class="sponsor-header-text fs-1 fw-bold text-sentence text-center"
          >
            Frequently Asked Questions
          </h3>
        </template>
      </PageTitle>
      <div class="row justify-content-center my-5">
        <div class="col-11 col-xl-10">
          <div class="accordion accordion-flush" id="faqAccount">
            <div
              class="accordion-item bg-transparent border-top border-bottom py-3"
            >
              <h2 class="fs-3">What is the duration of the course?</h2>
              <div>
                <div class="py-3">
                  <p class="fs-5">
                    This self-paced course allows you to fit it into your
                    personal and professional schedule. We suggest allocating at
                    least 5 hours per week to complete it in approximately 12
                    weeks. However, the duration may vary due to the
                    comprehensive nature of the course, which includes over 200
                    video lessons, practical activities, and a capstone project.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="fs-3">Why should I enroll in this course?</h2>
              <div>
                <div class="py-3">
                  <p class="fs-5">
                    You should enroll in the course to expand your skills and
                    become a more competitive engineer. By becoming a Certified
                    {{ language }} Backend Engineer, you’ll be well-equipped to
                    lead engineeing projects and significantly contribute to
                    your organization’s success. This certification will not
                    only bolster your skill set but also expand your career
                    opportunities in backend engineeing.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="fs-3">Are there any prerequisites for this course?</h2>
              <div>
                <div class="py-3">
                  <p class="fs-5">
                    No prerequisites are required to enroll in the
                    {{ language }} Backend Engineering course. However, because
                    the course covers advanced topics, we recommend that
                    students have a background in software engineering or
                    computer science.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="fs-3">What if I am not satisfied with the course?</h2>
              <div>
                <div class="py-3">
                  <p class="fs-5">
                    We are dedicated to providing a high-quality learning
                    experience. If, for any reason, you are not satisfied with
                    the course, please reach out to us within the first 7 days
                    of enrollment for a full refund. Your feedback is invaluable
                    as it helps us improve our offerings and better meet the
                    needs of our learners.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="fs-3">Do I get lifetime access?</h2>
              <div>
                <div class="py-3">
                  <p class="fs-5">
                    Absolutely, YES! You can access the course forever,
                    including any future updates, with no extra payment.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item bg-transparent border-bottom py-3">
              <h2 class="fs-3">
                How and where can I display my certification upon completing the
                course?
              </h2>
              <div>
                <div class="py-3">
                  <p class="fs-5">
                    After successfully completing the course, you’ll receive a
                    digital certification. You can showcase your certificate
                    virtually or print it. We encourage you to display it on
                    your LinkedIn profile, other social media platforms, and
                    personal or professional website to highlight your newly
                    acquired expertise to potential employers and peers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hub: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    language() {
      const text = this.hub?.title?.split('Become A ')[1]
      return text?.split('Backend Engineer')[0]
    },
  },
}
</script>

<style>
</style>