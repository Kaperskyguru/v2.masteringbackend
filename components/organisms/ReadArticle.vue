<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <article
      v-if="!ispremium"
      data-clarity-region="article"
      v-highlight
      class="w-100"
      v-html="content"
    ></article>

    <span style="display: inline-block; position: relative" v-else>
      <div class="overlay p-3 d-flex align-items-center justify-content-center">
        <div class="text-center text-white mt-4">
          <div
            class="position-relative"
            :style="{ backgroundColor: `#5227AD`, padding: '5rem' }"
            id="notify"
          >
            <h3 class="fs-2 py-4">Don't Stop Learning</h3>
            <h6 class="fs-5 text-white">
              Continue reading the {{ title }} for $14.99 only or Get instant
              access to all current and upcoming courses and content through
              subscription.
            </h6>
            <Button
              appearance="primary"
              size="large"
              type="link"
              :custom-style="{
                backgroundColor: `#633db5`,
                color: '#fff',
              }"
              >Coming Soon</Button
            >
          </div>
        </div>
      </div>
      <div class="row g-3">
        <article
          data-clarity-region="article"
          v-highlight
          class="w-100"
          v-html="content"
        ></article>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    ispremium: { type: Boolean, default: false },
    post: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    content() {
      return this.post?.content
    },
    title() {
      return this.post?.title
    },
  },
}
</script>

<style scoped>
figure iframe {
  width: 100%;
  height: 400px !important;
}

article img {
  height: auto;
  width: 100%;
  background-size: cover;
}

article table {
  border: 1px solid #eee;
}

article > * {
  font-family: 'Georgia', serif !important;
}

article p,
article {
  font-size: 1.125rem;
  margin-bottom: 1.3rem;
  font-weight: 400;
  line-height: 2;
}

article h1,
article h2,
article h3,
article h4,
article h5,
article h6 {
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;
}

article h3,
article h4 {
  font-weight: normal;
}

article h5,
article h6 {
  font-weight: lighter;
}

article h1,
article h2 {
  font-weight: bold;
}

article ul,
article ol {
  list-style: disc;
  margin-bottom: 1.3rem;
}

article ul li {
  line-height: 32px;
  font-size: 1.125rem;
  font-weight: 400;
}

article figure figcaption {
  line-height: 32px;
  text-align: center;
  font-style: italic;
  font-weight: 400;
}

article figure img,
img {
  outline: none !important;
  margin: 0 auto !important;
  /* border: 5px solid #cccccc; */
  display: inline-block;
  width: 10%;
  height: auto;
  border-radius: 0 !important;
}

#article a,
#article a:hover {
  color: rgb(187, 74, 3);
  transition: all 0.2s ease-in-out 0s;
  background-color: transparent;
}

.overlay {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: #eee; */
  transition: background-color 0.5s;
}

.overlay p {
  color: #001ed3;
}
</style>