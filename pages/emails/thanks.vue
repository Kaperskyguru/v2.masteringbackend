<template>
  <main>
    <section class="container mx-auto">
      <div class="row mt-5 writer">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10 w-50" id="hero_text">
            <p>You're all set.</p>

            <p>
              Your email is now confirmed and you're now the newest member of
              the Mastering Backend community. Check your email for a message
              from us.
            </p>

            <p>In the meantime, go ahead and follow us on Twitter:</p>

            <p>
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
            </p>

            <a href="https://store.masteringbackend.com" target="_blank"
              >Click here to visit our store
            </a>
            for any resources you're looking for.

            <p>With that, welcome to the Mastering Backend community!</p>

            <p>
              Now that you're signed up, you'll start to receive insanely
              actionable content to help you become a great backend engineer.
            </p>

            <p>Talk Soon, <br />Mastering Backend</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
      
  <script>
export default {
  name: 'ThanksPage',
  head() {
    return {
      title: 'Thank You For Signing Up',
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
          content: 'Thank You For Signing Up',
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