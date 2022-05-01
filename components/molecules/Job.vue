<template>
  <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="card px-3 py-2">
      <div class="card-img align-self-center mb-3 mt-3">
        <img class="img-fluid" src="~/assets/img/num5.png" alt="" />
      </div>
      <h6 class="card-header-text">Standard Five</h6>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci auctor et,
        ac
      </p>
      <div>
        <Button appearance="outline-primary" class="mb-3">Read more</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Job',
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