<template>
  <section class="modal-container modal" v-if="visible">
    <section
      class="d-flex mw-100 w-100 justify-items-center justify-content-center"
      tabindex="-1"
      role="dialog"
      v-if="visible"
      ref="dialog"
    >
      <div
        class="position-relative"
        style="max-width: 1000px; margin: 29px 10px"
        role="document"
      >
        <div class="close p-3 text-black" @click.prevent="close">
          <CloseIcon style="width: 20px; height: 20px" />
        </div>

        <div class="modal-content">
          <div class="col-12 w-100">
            <div class="row p-5" :class="contentClass">
              <div class="col-lg-5 col-12" v-if="$slots.left">
                <slot name="left" />
              </div>
              <div
                class="col-lg-6 col-12 border-start ps-4 pe-4"
                v-if="$slots.right"
              >
                <slot name="right" />
              </div>
            </div>
          </div>
          <slot />
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'DialogComponent',
  components: {
    CloseIcon: () => import('~/assets/icons/close.svg?inline'),
  },

  model: {
    prop: 'visible',
    event: 'update:visible',
  },

  emits: ['answer', 'update:visible'],

  props: {
    contentClass: {
      type: String,
      default: '',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isDialogOpen: true,
  }),

  destroyed() {
    document.removeEventListener('keyup', this.closeByKey)
  },

  watch: {
    async visible(value) {
      await this.$nextTick()

      if (value) {
        document.addEventListener('keyup', this.closeByKey)

        const dialog = this.$refs.dialog
        if (dialog && dialog.focus) dialog.focus()
        else if (dialog && dialog.$el && dialog.$el.focus) dialog.$el.focus()
      } else {
        document.removeEventListener('keyup', this.closeByKey)
      }
    },
    $route: 'closeByChangeRoute',
  },

  methods: {
    close(event) {
      if (!event.keyCode || event.keyCode === 27) {
        this.c(false)
      }
    },

    closeByBackdrop() {
      this.c(false)
    },

    c(value) {
      this.$emit('answer', value)
      this.$emit('update:visible', false)
    },

    closeByKey(event) {
      if (event.keyCode === 13) {
        this.c(true)
      } else if (event.keyCode === 27) {
        this.c(false)
      }
    },

    closeByChangeRoute() {
      this.$emit('update:visible', false)
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 768px) {
  #border {
    border-bottom: 1px solid #dee2e6 !important;
    border-right: 0px solid #dee2e6 !important;
  }
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  display: block;
}

.modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(5 4 27/0.6);
  backdrop-filter: blur(8px);
  display: flex;
}
</style>