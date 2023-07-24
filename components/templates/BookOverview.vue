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
            <div class="py-3 input-group">
              <Button
                v-if="!activateDownload"
                :custom-style="{
                  backgroundColor: `${color}`,
                  color: '#fff',
                }"
                size="large"
                class="py-2 my-2 fs-4 fw-bold"
                type="link"
                :link="`/hubs/${slug}`"
              >
                Read Online
              </Button>

              <!-- <Button
                v-if="!activateDownload"
                :custom-style="{
                  border: `1px solid ${color}`,
                  color: `${color} !important`,
                }"
                @click.native="showDownload = !showDownload"
                size="large"
                type="link"
                class="py-2 my-2 fs-4 fw-bold"
                link="#"
              >
                Download Now
              </Button> -->
            </div>
          </div>
          <div class="col-md-5 hero__image">
            <img
              v-if="!showDownload && !activateDownload"
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
              <form
                id="form-bacf371b-b382-4024-9adb-99ea3c829eae"
                action="https://api.encharge.io/v1/forms/bacf371b-b382-4024-9adb-99ea3c829eae/submission/plain"
                method="POST"
              >
                <div class="form-group py-3">
                  <label
                    class="text-dark"
                    for="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                  >
                    <b>Full Name</b>
                  </label>
                  <input
                    id="1bf52140-11b8-46e9-8115-8fa21b589cfb"
                    name="name"
                    class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div class="form-group py-3">
                  <label
                    class="text-dark"
                    for="7dbc4ccf-238b-4128-9250-634cccb01176"
                  >
                    <b>E-mail</b>
                  </label>
                  <input
                    id="7dbc4ccf-238b-4128-9250-634cccb01176"
                    name="email"
                    class="encharge-form-input sc-gqjmRU liSvtx col-lg-8 py-md- col-12 form-control shadow-none fs-5 my-"
                    type="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <input
                  type="hidden"
                  id="31b47661-eae6-42bd-bc02-df3c004a01f9"
                  name="HiddenTag"
                  :value="enchargeTag"
                  class="encharge-form-input sc-htoDjs jmyTNa form-control"
                />

                <div class="field">
                  <div class="control text-center mt-4">
                    <button
                      class="col-12 start-btn py-2 my-2 fs-4 fw-bold"
                      type="submit"
                      :style="{
                        backgroundColor: `${color}`,
                        color: '#fff',
                      }"
                    >
                      {{ activateDownload ? 'Get Notified' : 'Get The Book' }}
                    </button>
                  </div>
                </div>
              </form>
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
                  {{ description }}
                </p>
                <hr class="my-4" />

                <h3 class="my-3">What to expect?</h3>

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
    showDownload: false,
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

    slug() {
      return this.hub?.slug ?? '#'
    },

    activateDownload() {
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
    chapters() {
      const chapters = this.hub?.chapters
      if (chapters && chapters.length > 1) return chapters ?? []

      return chapters[0].posts ?? []
    },

    animatedBookCover() {
      return (
        this.hub &&
        (this.hub?.image ??
          'https://res.cloudinary.com/kaperskydisk/image/upload/v1685032766/masteringbackend/posts/vectors/laravel-design-color.png')
      )
    },

    bookCover() {
      return (
        this.hub &&
        (this.hub?.design_url ??
          'https://files.selar.co/product-images/2023/products/masteringbackend/technical-writing-the-com-selar.co-64999ea31aafb.png')
      )
    },
  },
}
</script>
  
