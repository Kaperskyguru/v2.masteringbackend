<template>
  <main>
    <section class="container mx-auto">
      <div class="row mt-5 writer">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-10 w-50" id="hero_text">
            <p>
              Before you can receive free updates, advance backend engineeing
              tips and resources,
              <strong>you need to confirm your email right now.</strong>
            </p>

            <p>(It's easy)</p>

            <p>
              Just go to your inbox, open the email from Masteringbackend, and
              click the link.
            </p>

            <p>
              If you're looking to kick start your backend engineering skils,
              these 2 checklists can help:
            </p>

            <p>And that's it!</p>

            <p>
              <strong> PS: </strong>If you don't see a confirmation email,
              please check your spam/junk folder. Sometimes the confirmation
              message ends up there by mistake.
            </p>
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
      title: 'Free Updates',
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