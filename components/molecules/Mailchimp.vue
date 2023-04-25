<template>
  <div
    v-if="data.message || show"
    class="alert mt-1 fade d-flex font-weight-normal"
    style="justify-items;: space-between"
    :class="[`alert-${data.type}`, { show: show }]"
    role="alert"
  >
    <p class="w-100 font-weight-normal small">{{ data.message }}</p>
    <button
      v-if="data.message"
      type="button"
      data-dismiss="alert"
      aria-label="Close"
      @click="
        show = false
        $emit('close', {})
      "
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'MailChimp',
  data: () => ({ show: false }),
  props: {
    data: { type: Object, default: () => {} },
  },
}
</script>

<style>
</style>