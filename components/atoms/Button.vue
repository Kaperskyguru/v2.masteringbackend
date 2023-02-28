<template>
  <div v-if="type.includes('link')">
    <NuxtLink
      v-if="!link.includes('http')"
      :to="link"
      :class="classNames"
      class="btn"
      ><div v-if="waiting" class="custom-icon" role="presentation">
        <!-- <SvgLoader class="-my-px" /> -->
      </div>

      <template v-else>
        <slot />
        <div v-if="$slots.icon" class="custom-icon" role="presentation">
          <slot name="icon" />
        </div> </template
    ></NuxtLink>

    <a v-else v-bind="$attrs" target="_blank" :class="classNames" class="btn">
      <div v-if="waiting" class="custom-icon" role="presentation">
        <!-- <SvgLoader class="-my-px" /> -->
      </div>

      <template v-else>
        <slot />
        <div v-if="$slots.icon" class="custom-icon" role="presentation">
          <slot name="icon" />
        </div>
      </template>
    </a>
  </div>
  <button v-else class="btn" :class="classNames">
    <div v-if="waiting" class="custom-icon" role="presentation">
      <!-- <SvgLoader class="-my-px" /> -->
    </div>

    <template v-else>
      <slot />
      <div v-if="$slots.icon" class="custom-icon" role="presentation">
        <slot name="icon" />
      </div>
    </template>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',

  props: {
    appearance: {
      type: String,
      validate: (value) =>
        [
          'primary',
          'secondary',
          'warning',
          'outline-primary',
          'primary-3',
          'outline-secondary',
          'purple',
        ].includes(value),
      default: 'primary',
    },

    size: {
      type: String,
      validate: (value) => ['small', 'normal', 'large'].includes(value),
      default: 'normal',
    },

    waiting: {
      type: Boolean,
      default: false,
    },

    type: {
      type: String,
      default: 'btn',
    },

    link: {
      type: [Object, String],
      default: '#',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classNames() {
      const classNames = [`btn-${this.appearance}`]

      if (this.active) {
        classNames.push('active')

        if (this.activeAutoDisables) {
          classNames.push('pointer-events-none')
        }
      }

      if (!this.hasHiddenClass && !this.hasDisplayClass) {
        classNames.push('d-inline-flex')
      }

      if (!this.hasTextPositioningClass) {
        classNames.push('text-center')
      }

      classNames.push(this.textSizeClass)
      classNames.push(this.justifyClass)

      if (this.disabled || this.waiting) {
        classNames.push(
          'opacity-50 pointer-events-none cursor-default active:shadow-none'
        )
      }

      classNames.push(this.heightClass)

      if (this.appearance === 'tertiary') {
        classNames.push(this.widthClass)
      } else {
        if (!this.hasPaddingXClass) classNames.push(this.paddingXClasses)
        if (!this.hasPaddingYClass) classNames.push(this.paddingYClasses)
      }

      return classNames.join(' ').trim()
    },

    heightClass() {
      return this.hasHeightClass
        ? undefined
        : this.size === 'small'
        ? 'h-6'
        : this.size === 'normal'
        ? 'h-[2.1875rem]'
        : 'h-[2.625rem]'
    },

    widthClass() {
      return this.size === 'small'
        ? 'w-6'
        : this.size === 'normal'
        ? 'w-[2.1875rem]'
        : 'w-[2.625rem]'
    },

    textSizeClass() {
      return this.hasTextSizeClass
        ? undefined
        : this.size === 'small'
        ? 'text-xs'
        : this.size === 'normal'
        ? 'text-sm'
        : this.appearance === 'tertiary'
        ? 'text-lg'
        : 'text-base'
    },

    paddingXClasses() {
      return this.size === 'small'
        ? 'px-1 lg:px-2'
        : this.size === 'normal'
        ? 'px-3 lg:px-6'
        : 'px-4'
    },

    paddingYClasses() {
      return this.size === 'small'
        ? 'py-1'
        : this.size === 'normal'
        ? 'pb-1.5 pt-[0.4375rem]'
        : 'py-2'
    },

    justifyClass() {
      return this.hasJustifyClass
        ? undefined
        : !this.$slots.icon || !this.$slots.default || this.waiting
        ? 'justify-center'
        : 'justify-between'
    },

    staticClasses() {
      return this.$attrs.class || this.$vnode?.data?.staticClass || ''
    },

    hasDisplayClass() {
      return /\b((inline-)?flex|(inline-)?grid|(inline-)?block)\b/g.test(
        this.staticClasses
      )
    },

    hasHeightClass() {
      return /\bh-\d+\b/g.test(this.staticClasses)
    },

    hasHiddenClass() {
      return /\b(^overflow-)hidden\b/g.test(this.staticClasses)
    },

    hasTextPositioningClass() {
      return /\btext-(left|right|center)\b/g.test(this.staticClasses)
    },

    hasTextSizeClass() {
      return /\btext-(2?xs|sm|base|lg|2?xl)\b/g.test(this.staticClasses)
    },

    hasJustifyClass() {
      return /\bjustify-(start|end|center|between|around|evenly)\b/g.test(
        this.staticClasses
      )
    },

    hasPaddingXClass() {
      const classes = this.staticClasses
      return /\bp(x)?-\d\b/g.test(classes)
    },

    hasPaddingYClass() {
      return /\bp(y)?-\d\b/g.test(this.staticClasses)
    },
  },
}
</script>

<style scoped>
.btn-primary-3 {
  background: #0a083b;
  color: #fff;
  border-radius: 5px;
  border: none;
}

.btn-primary-1 {
  background: #2178ff;
  color: #fff;
  border-radius: 5px;
  border: none;
}

.btn-primary-2 {
  background: #f29c1f;
  color: #000;
  font-weight: 600;
  border-radius: 5px;
  border: none;
}

.btn-outline-primary {
  border: 1px solid #9c4df4;
  color: #9c4df4;
  font-size: 0.7rem;
  transition: 0.5s ease;
}

.btn-outline-primary:hover {
  border: 1px dashed #9c4df4;
  background-color: transparent;
}

.btn-outline-secondary {
  background-color: #9c4df4;
  color: #fff;
  border: none;
  font-size: 0.9rem;
}

.btn-warning {
  background-color: #1c168c;
  color: #fff;
  border-radius: 15px;
  border: none;
}

.btn-warning:hover {
  background-color: #1c168cbd;
  color: #fff;
  border: none;
}

.btn-purple {
  background-color: var(--purple);
  font-size: 0.8rem;
  border: none;
  color: white;
}
</style>