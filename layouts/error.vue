<template>
  <div
    style="
      background-color: #f7f5fa;
      width: 100% !important;
      min-height: auto;
      margin: 20rem 0px;
    "
  >
    <div v-if="error.statusCode === 404">
      <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">404</span>
              <div class="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <a href="/" class="btn btn-link">Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 v-if="error.statusCode !== 404">
      <div class="page-wrap d-flex flex-row align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">500</span>
              <div class="mb-4 lead">
                An error occurred, please reload the page
              </div>
              <a href="/" class="btn btn-link">Back to Home</a>
            </div>
          </div>
        </div>
      </div>
    </h1>
  </div>
</template>
  
  <script>
export default {
  name: 'errorPage',
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },

  head() {
    return {
      title: `${this.error.statusCode} error occurred`,
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