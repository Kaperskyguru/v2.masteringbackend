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
              <div class="py-3 my-5">
                <!-- <div id="custom-substack-embed" class="here"></div> -->
                <iframe
                  src="https://embeds.beehiiv.com/5d69366b-1960-40c2-a8dc-49e561c3406a?slim=true"
                  data-test-id="beehiiv-embed"
                  height="52"
                  frameborder="0"
                  scrolling="no"
                  style="
                    margin: 0;
                    border-radius: 0px !important;
                    background-color: transparent;
                    width: 100%;
                  "
                ></iframe>
              </div>
              <!-- <script>
                window.CustomSubstackWidget = {
                  substackUrl: 'backendmasters.substack.com',
                  placeholder: 'Enter your email address...',
                  buttonText: 'Get The Free Guide',
                  theme: 'custom',
                  colors: {
                    primary: '#191489',
                    input: '#000000',
                    email: '#FFFFFF',
                    text: '#fff',
                  },
                }
              </script>
              <script src="/substack.js" async></script> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
  
  <script>
import { submit } from '~/helpers/mailchimp'
import { recaptcha } from '~/helpers/recaptcha'
export default {
  name: 'FeaturedComponent',

  data: () => ({
    email: '',
    res: {},
    show: false,
    ur: '/hubs/backend-engineering',
  }),

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

  async mounted() {
    try {
      await this.$recaptcha.init()
    } catch (e) {
      console.error(e)
    }

    // window.CustomSubstackWidget.link = '/hubs/backend-engineering'
  },

  beforeDestroy() {
    this.$recaptcha.destroy()
  },

  methods: {
    async onSubmit() {
      try {
        const token = await this.$recaptcha.execute('login')

        const data = await recaptcha({ token })

        if (!data?.success) return

        this.$refs.form?.submit()
      } catch (error) {
        console.log('Login error:', error)
      }
    },

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
  