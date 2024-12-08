<template>
  <section>
    <!-- ------------------------------------------Hero Section----------------------------------------------------------- -->
    <section style="background-color: #f7f5fa">
      <div class="container mx-auto">
        <div class="row d-flex">
          <div id="chapter" class="col-md-7 position-relative" style="">
            <h1
              class="title__text py-4"
              style="font-size: 52px; font-weight: 800; line-height: 62px"
            >
              {{ title }} for Backend Engineers
            </h1>

            <p class="title__subtext fs-4">
              {{ description }}
            </p>
            <div class="gradient"></div>
            <div
              class="py-3 input-group"
              v-if="!slug.includes('design-patterns')"
            >
              <Button
                v-if="!activateDownload"
                :custom-style="{
                  backgroundColor: `${color}`,
                  color: '#fff',
                }"
                size="large"
                class="py-2 my-2 fs-4 fw-bold"
                type="link"
                :link="link"
              >
                {{ isPremium ? 'Grab Your Copy Now' : 'Read Online' }}
              </Button>

              <!-- 

                Trigger Payment Model if linkToPay is (# or null) and Price > 0

               -->

              <Button
                v-if="linkToPay && !isWaiting && !isPremium"
                :custom-style="{
                  border: `1px solid ${color}`,
                  color: `${color} !important`,
                }"
                size="large"
                type="link"
                class="py-2 my-2 fs-4 fw-bold"
                :link="linkToPay"
              >
                Download Now
              </Button>
            </div>
          </div>
          <div class="col-md-5 hero__image">
            <img
              v-if="!isWaiting"
              class="img-fluid"
              v-lazy-load
              :data-src="bookCover"
              :alt="title"
              srcset=""
            />

            <!-- Add Waiting List Form -->
            <div
              v-else
              class="shadow border p-4 my-4"
              style="background-color: white"
            >
              <ResourceForm
                :tag="enchargeTag"
                :color="color"
                :isWaiting="activateDownload"
                :slug="slug"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="w-100" style="background-color: rgb(243, 246, 250)">
      <div class="py-5 container mx-auto">
        <div id="hero_text" class="container mx-auto">
          <div class="my-5">
            <h2
              class="fw-bolder"
              style="font-size: 50px; font-weight: 800; line-height: 65px"
            >
              Take a peek inside
            </h2>
          </div>
        </div>
        <div class="container mx-auto" id="hero_text">
          <div class="row py-1">
            <div class="col-lg-6">
              <div class="shadow p-4 border my-4" style="max-width: 500px">
                <img
                  v-lazy-load
                  class="img-fluid cover"
                  :data-src="animatedBookCover"
                  :alt="title"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div>
                <h3
                  class="py-4 fs-2 fw-bold"
                  style="color: #121127; font-size: 40px; line-height: 58.5px"
                >
                  {{ title }}
                </h3>

                <p style="color: #121127">
                  {{ content }}
                </p>
                <hr class="my-4" />

                <h3 v-if="chapters?.length" class="my-3">What to expect?</h3>

                <li
                  v-for="(outline, i) in chapters"
                  :key="i"
                  style="font-size: 20px; line-height: 28px; color: #121127"
                  class="lh-lg list-unstyled fw-normal"
                >
                  <span
                    class="d-flex flex-row justify-content-start align-items-center title__text"
                    to="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      :fill="color"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16 12l-6 6V6z" />
                    </svg>

                    <span>{{ outline.title }}</span>
                  </span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
  
  <script>
export default {
  data: () => ({
    message: {},
    res: {},
  }),

  props: {
    hub: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    color() {
      const mixedColor = this.hub?.color ?? '#FF715D'
      if (mixedColor.includes('gradient')) {
        const first = mixedColor.split('#')[1]
        const color = first.split(' ')[0]
        return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
      }
      return mixedColor
    },

    isPremium() {
      return this.hub?.is_premium
    },

    link() {
      if (this.isPremium) return this.linkToPay
      return `/hubs/${this.slug}` // TODO:: change URL to `books` instead of `hubs`
    },

    linkToPay() {
      return this.hub?.link ?? ''
    },

    slug() {
      return this.hub?.slug ?? '#'
    },

    isWaiting() {
      return this.hub?.activate_waiting ?? false
    },

    enchargeTag() {
      return this.hub?.encharge_tag ?? ''
    },
    title() {
      return this.hub?.title
    },

    description() {
      return this.hub?.description
    },

    content() {
      return this.hub?.content ?? this.hub?.description
    },

    chapters() {
      const chapters = this.hub?.chapters
      if (chapters && chapters.length > 1) return chapters ?? []

      return (chapters && chapters[0].posts) ?? []
    },

    animatedBookCover() {
      return (
        (this.hub && this.hub?.image?.url) ??
        'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png'
      )
    },

    bookCover() {
      return (
        (this.hub && this.hub?.design_url) ??
        'https://files.selar.co/product-images/2023/products/masteringbackend/technical-writing-the-com-selar.co-64999ea31aafb.png'
      )
    },
  },
}
</script>
  
