<template>
  <main>
    <section class="container mx-auto">
      <div class="row mt-5 writer">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10 w-50" id="hero_text">
            <h2>You Are Already a Subscriber</h2>

            <p>
              It looks like you're already part of the Masteringbackend
              community.
            </p>

            <p>
              In other words, you're already awesome and don't need to sign up
              again.
            </p>

            <p>
              If you're looking to kick start your backend engineering skils,
              these 2 checklists can help:
            </p>

            <ul class="list-unstyled" style="color: rgb(187, 74, 3) !important">
              <li class="py-2">
                <a href="/posts/backend-development"
                  >Backend Engineering Hub: The Ultimate Guide</a
                >
              </li>
              <li class="py-2">
                <a href="/posts/api-security-best-practices">
                  API Security Best Practices</a
                >
              </li>
            </ul>
            <p>Talk Soon,</p>
            <p>Masteringbackend</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
    
    <script>
export default {
  head() {
    return {
      title: 'Email Subscribed',
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