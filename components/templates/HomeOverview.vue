
<template>
  <main class="main">
    <Banner />

    <section class="p-3 sponsors text-center" v-if="false">
      <PageTitle>
        <template #title>
          <h3 class="sponsor-header-text mb-5">
            Some of our students works in
          </h3>
        </template>
      </PageTitle>
      <Sponsors />
    </section>

    <!-- DEV Articles -->

    <section id="Articles" class="Dev-art my-5">
      <div class="container pt-5">
        <PageTitle>
          <template #title>
            <h2 class="Dev-art__header-text mt-5">
              Latest Backend<br />
              Articles for you
            </h2>
          </template>

          <div class="col-lg-6">
            <p class="Dev-art__para-text mb-5 mr-2">
              Latest backend engineering resources curated daily by the
              engineers for engineers.
            </p>
          </div>
        </PageTitle>
        <ArticleBoards />
      </div>
    </section>

    <section class="Article mb-5 text-center p-3">
      <AcademyAdvert />
    </section>

    <section class="update p-3">
      <Newsletter />
    </section>

    <section id="jobs" class="dev-job text-center mt-5">
      <PageTitle class="col-lg-6 mx-auto p-5 text-center">
        <template #title>
          <h3 class="dev-header-text">Latest Backend Dev. Job</h3>
        </template>
        <p class="dev-text">
          Highly vetted backend software engineering jobs for highly vetted and
          qualified backend engineers.
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

.card {
  border-radius: 10px;
}

.card .card-head-text {
  color: #0a083b;
}

.card .btn-primary {
  background: #9c4df4;
  border-radius: 5px;
  border: none;
}

.article-intro-text {
  color: #0a083b;
  font-weight: 600;
}

.card .btn-primary-1 {
  background: #2178ff;
  color: #fff;
  border-radius: 5px;
  border: none;
}

.card .btn-primary-2 {
  background: #f29c1f;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  border: none;
}

.card .btn-primary-3 {
  background: #0a083b;
  color: #fff;
  border-radius: 5px;
  border: none;
}

small {
  color: #57586e;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 30px;
}

.card-text {
  color: #57586e;
  font-size: 1.2rem;
}

.btn-col {
  color: #9c4df4;
  font-weight: 600;
}

.btn-col-1 {
  color: #2178ff;
  font-weight: 600;
}

.btn-col-2 {
  color: #f29c1f;
  font-weight: 600;
}

.btn-col-3 {
  color: #0a083b;
  font-weight: 600;
}

.card .card-head-text {
  font-size: 1.5rem;
}
/*  */

/*  */

/*  */

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

/*  */
@media (max-width: 1400px) {
  .bg-img {
  }

  .bg {
    position: absolute;

    top: -15%;
    left: 20%;
    z-index: -1;
  }
}

@media (max-width: 1200px) {
  .bg {
    position: absolute;
    top: -18%;
    left: 10%;
    z-index: -1;
  }
}

@media (max-width: 992px) {
  .bg {
    position: absolute;

    top: -5%;
    left: 20%;
    z-index: -1;
    width: 500px;
  }
}

@media (max-width: 768px) {
  .input-box {
    background: none;
  }

  .email-input {
    border: none;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
  }

  .bg {
    position: absolute;

    top: -15%;
    left: 18%;
    z-index: -1;
  }
}

@media screen and (max-width: 576px) {
  .bg-img {
  }

  .bg {
    position: absolute;

    top: -25%;
    left: 4%;
    z-index: -1;
  }

  .hero__image .position-img img {
    width: 100px;
    height: 100px;
    display: none;
  }

  .showcase-img .bg-img {
    z-index: 2;
    display: none;
  }

  .hero__image .position-img .img2 {
    top: -80px;
    left: -30px;
    z-index: 2;
  }

  .hero__image .position-img .img1 {
    bottom: px;
    right: px;
    z-index: 2;
    display: none;
  }

  .position-img .img3 {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    display: -3;
    display: none;
  }

  .hero__image .display-img img {
    display: none;
  }

  .hero__image .display-img .img4 {
    position: absolute;
    top: 27%;
    left: 43%;
    transform: translate(-50%, -50%);
    width: 300px;
    display: none;
  }

  .hero__image .display-img .img5 {
    position: absolute;
    top: 20%;
    left: 3%;
    width: 100px;
    height: 100px;
    display: none;
  }
}

@media (max-width: 425px) {
  .bg {
    position: absolute;

    top: -30%;
    left: 13%;
    z-index: -1;
    width: 350px;
  }
}

@media (max-width: 375px) {
  .bg-img {
  }

  .bg {
    position: absolute;

    top: -35%;
    left: 3%;
    z-index: -1;
    width: 300px;
  }
}

@media (max-width: 320px) {
  .bg {
    position: absolute;
    width: 300px;
    top: -35%;
    left: 3%;
    z-index: -1;
    display: none;
  }
}
</style>
