<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="card px-3 py-2">
      <div class="card-img align-self-center mb-3 mt-3">
        <img class="img-fluid" :src="job.company_logo" alt="" />
      </div>
      <h6 class="card-header-text">{{ job.position }}</h6>
      <p class="card-text">
        <span class="fw-bold">{{ job.company_name }}</span> is currently hiring
        a {{ job.position }}. Click on APPLY to view more information.
      </p>
      <div>
        <p style="font-size: small; font-weight: bold">
          Date Posted: {{ timeAgo(job.created_at) }}
        </p>
        <Button
          type="link"
          :link="`https://getbackendjobs.com/jobs/${job.slug}?ref=masteringbackend&utm_source=masteringbackend&utm_campaign=community&utm_medium=${job.slug}`"
          appearance="outline-primary"
          class="mb-3"
          >Apply</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Job',

  props: {
    job: {
      default: () => {},
      type: Object,
    },
  },

  methods: {
    timeAgo(timestamp, locale = 'en') {
      let value
      const diff = (new Date().getTime() - new Date(timestamp).getTime()) / 1000
      const minutes = Math.floor(diff / 60)
      const hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)
      const months = Math.floor(days / 30)
      const years = Math.floor(months / 12)
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

      if (years > 0) {
        value = rtf.format(0 - years, 'year')
      } else if (months > 0) {
        value = rtf.format(0 - months, 'month')
      } else if (days > 0) {
        value = rtf.format(0 - days, 'day')
      } else if (hours > 0) {
        value = rtf.format(0 - hours, 'hour')
      } else if (minutes > 0) {
        value = rtf.format(0 - minutes, 'minute')
      } else {
        value = rtf.format(0 - diff, 'second')
      }
      return value
    },
  },
}
</script>

<style scoped>
.dev-header-text {
  color: #0a033c;
  font-size: 1.4rem;
  font-weight: 800;
}

.dev-text {
  font-size: 1.2rem;
  color: #5d5a6f;
}

.dev-job .card:hover {
  border: 1px dashed #9c4df4;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.04);
}

.dev-job .container {
  max-width: 900px;
}

.dev-job .card-img {
  width: 40px;
}

.card-header-text {
  color: #0a033c;
  font-weight: 700;
}

.dev-job .card-text {
  font-size: 1rem;
  color: #5d5a6f;
}

.dev-job .btn-outline-primary {
  border: 1px solid #9c4df4;
  color: #9c4df4;
  font-size: 0.7rem;
  transition: 0.5s ease;
}

.dev-job .btn-outline-primary:hover {
  border: 1px dashed #9c4df4;
  background-color: transparent;
}
.card {
  border-radius: 10px;
}
</style>