
<template>
  <main>
    <Banner />

    <section class="p-3 sponsors text-center">
      <PageTitle>
        <template #title>
          <h3 class="sponsor-header-text mb-5 text-uppercase fw-bold">
            Join 3,000+ senior (and aspiring) backend software engineers at:
          </h3>
        </template>
      </PageTitle>
      <Sponsors />
    </section>

    <Testimonials />

    <section class="mb-2 d-flex justify-content-center">
      <div style="color: #191489; width: 100px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2 11H4V13H2V11ZM6 11H18V13H6V11ZM20 11H22V13H20V11Z"></path>
        </svg>
      </div>
    </section>

    <section id="Articles" class="Dev-art my-5">
      <div class="container pt-">
        <Featured />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
}
</script>

<style scoped>
.sponsors {
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.04);
}

.sponsor-header-text {
  color: #191489;
  font-weight: 600;
}

.Dev-art .container {
  max-width: 1000px;
}

small {
  color: #57586e;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 30px;
}

.dev-job .container {
  max-width: 900px;
}
</style>
