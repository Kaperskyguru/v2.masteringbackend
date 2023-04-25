<template>
  <div class="w-100">
    <div class="card rounded mb-3 shadow">
      <div class="card-body w-100">
        <p class="card-text h6">Backend Tips, Every week</p>
        <div class="my-3">
          <input
            type="email"
            v-model="email"
            class="form-control"
            placeholder="Email address"
          />
        </div>
        <button
          :style="{ backgroundColor: color }"
          class="btn text-white w-100 fs-6"
          type="button"
          @click.prevent="subscribe"
        >
          Join Now
        </button>
      </div>
    </div>

    <div
      v-if="res.message || show"
      class="alert mt-1 fade d-flex font-weight-normal"
      style="justify-items;: space-between"
      :class="[`alert-${res.type}`, { show: show }]"
      role="alert"
    >
      <p class="w-100 font-weight-normal small">{{ res.message }}</p>
      <button
        v-if="res.message"
        type="button"
        data-dismiss="alert"
        aria-label="Close"
        @click="
          show = false
          res = {}
        "
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
</template>

<script>
import { submit } from '~/helpers/mailchimp'
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
  },

  data: () => ({ email: '', res: {}, show: false }),

  methods: {
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: [],
      })
      this.show = true
      this.res = res
    },
  },
}
</script>

<style>
</style>