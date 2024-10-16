<template>
  <main>
    <section class="container mx-auto">
      <div class="row mt-5 writer">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10 w-50" id="hero_text">
            <p class="py-4">
              Thank you very much for purchasing the
              <strong>{{ title }}</strong>
            </p>

            <img
              src="https://sm8n3.mjt.lu/img2/sm8n3/e841d190-4480-4aa9-ab48-33de154a8023/content"
            />

            <p>(Thanks once again)</p>

            <p class="fw-bold">
              Just go to your inbox, open the email from Masteringbackend, and
              click the link to access the resource.
            </p>

            <!-- <p>
              You can continue reading with the PDF version or you can to save
              all your PDFs and track all your reading activities. Read more why
              you should
              <NuxtLink to="/app" style="color: rgb(187, 74, 3) !important">
                sign up here</NuxtLink
              >.
            </p> -->

            <p>And that's it!</p>

            <p>
              <strong> PS: </strong>If you don't see an email, please check your
              spam/junk folder. Sometimes the email ends up there by mistake.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
    
<script>
export default {
  name: 'PurchasedC',
  computed: {
    title() {
      return this.$route.query?.title
    },
  },
  head() {
    return {
      title: 'Thanks for purchasing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'A great resource for backend engineers. Next-level Backend Engineering training and Exclusive resources.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
    
    <style scoped>
@media (max-width: 991.98px) {
  #hero_text {
    width: 100% !important;
  }
}
</style>