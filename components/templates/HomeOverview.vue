
<template>
  <main class="main">
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

    <section class="Article mb-5 text-center p-3">
      <AcademyAdvert />
    </section>

    <!-- DEV Articles -->

    <section id="Articles" class="Dev-art my-5">
      <div class="container pt-">
        <ArticleBoards />
      </div>
    </section>

    <!-- <section class="Article mb-5 text-center p-3">
      <AcademyAdvert />
    </section>

    <section class="update p-3">
      <Newsletter />
    </section> -->

    <section id="jobs" class="dev-job text-center mt-5">
      <PageTitle class="col-lg-6 mx-auto p-5 text-center">
        <template #title>
          <h3 class="dev-header-text">Join our community</h3>
        </template>
        <p class="dev-text">
          For highly vetted backend software engineering jobs for highly vetted
          and qualified backend engineers like you.
        </p>
      </PageTitle>
      <div class="container">
        <Jobs />
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

/*  */

.Dev-art .container {
  max-width: 1000px;
}

.Dev-art__header-text {
  color: #0a083b;
  font-weight: 700;
}

.Dev-art__para-text {
  color: #57586e;
  font-size: 1.2rem;
}

small {
  color: #57586e;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 30px;
}

.dev-header-text {
  color: #0a033c;
  font-size: 1.4rem;
  font-weight: 800;
}

.dev-text {
  font-size: 1.2rem;
  color: #5d5a6f;
}

.dev-job .container {
  max-width: 900px;
}
</style>
