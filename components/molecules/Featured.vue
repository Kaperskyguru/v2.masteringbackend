<!-- eslint-disable vue/no-v-html -->
<template>
  <article class="Career">
    <div class="container mx-auto mt-5">
      <div class="row">
        <div class="col-lg-9 bordder-primary mx-auto">
          <div class="row text-center px-4">
            <div class="col-lg-12 mt-3">
              <div
                class="fs-4 text-center py-3 mt-3 fw-bold"
                style="color: #001ed3"
              >
                Featured Resource
              </div>
            </div>
            <div class="col-lg my-3">
              <ArticleHead
                :post="post"
                :show-author="false"
                :show-date="false"
              />

              <div class="col-lg-10 col-md-10 col-sm-12 mx-lg-auto mx-auto">
                <p
                  class="text lh-md fs-5"
                  v-html="
                    'Kickstart or advance your software engineering career with the latest backend engineering strategies, tips, and tactics working today.'
                  "
                ></p>
              </div>
            </div>
            <div class="blur-text">
              <div class="col-lg mx-auto text-sm-start">
                <img
                  class="img-fluid base-img rounded-4"
                  :src="image"
                  :alt="'Pursuing a Full-Time Career as a Backend Developer'"
                />
              </div>
            </div>
            <div class="d-grid col-lg mx-auto">
              <form
                id="form-d2fcdd82-c699-490c-8895-be934ad75feb"
                action="https://api.encharge.io/v1/forms/d2fcdd82-c699-490c-8895-be934ad75feb/submission/plain"
                method="POST"
              >
                <div class="input-group py-3 mb-5 no-border">
                  <input
                    type="email"
                    id="0d9879cb-e9dc-4d00-9bd9-faf84f9a1a2c"
                    name="email"
                    style="border: 2"
                    placeholder="Enter your email address..."
                    class="encharge-form-input sc-jTzLTM JGOZS form-control py-md-2 col-12 col-lg-8 form-control shadow-none fs-5 my-2"
                  />

                  <Button
                    type="submit"
                    class="encharge-form-submit-button sc-gzVnrw HOnGD btn btn-primary col-lg-4 col-12 start-btn py-3 my-2"
                  >
                    Get The Free Guide
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
  
  <script>
import { submit } from '~/helpers/mailchimp'
export default {
  name: 'FeaturedComponent',

  data: () => ({ email: '', res: {}, show: false }),

  props: {
    post: {
      type: Object,
      default: () => ({
        title: 'Backend Engineering: The Ultimate Guide (2023)',
      }),
    },
  },

  computed: {
    image() {
      return (
        this.post &&
        (this.post?.image ??
          this.post?.featured_image?.url ??
          '/img/backend-2023.jpg')
      )
    },
  },

  methods: {
    async subscribe() {
      const res = await submit({
        email: this.email,
        tags: ['Start Backend Dev'],
      })
      this.show = true

      if (!res.type.includes('danger')) {
        return this.$router.push('/hubs/backend-engineering')
      }
      this.res = res
    },
  },
}
</script>
  
  <style scoped>
.start-btn {
  background: #191489;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  background-color: #2119ad;
}

h1 {
  color: #0a083b;
}

p {
  color: #57586e;
  font-size: 0.8rem;
}

.bordder-primary {
  border: 2px solid #1c168c;
  border-radius: 5px;
}

small {
  color: #57586e;
}
</style>
  