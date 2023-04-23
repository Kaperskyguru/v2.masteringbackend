<template>
  <span v-if="post" class="position-relative">
    <DefinitiveArticleOverview v-if="post.type === 'definitive'" :post="post" />
    <ArticleOverview v-else :post="post" />

    <div class="sharebox shadow rounded border">
      <div class="content p-3">
        <div class="justify-content-start d-flex flex-column">
          <vue-goodshare-facebook has_icon />
          <vue-goodshare-twitter has_icon />
          <vue-goodshare-linkedin has_icon />
        </div>
      </div>
    </div>

    <div class="newletter-box">
      <div class="content1 p-4">
        <SideNewsletter :color="color" />
      </div>
    </div>
  </span>

  <p v-else class="text-center">
    We are currently experiencing server issues after migration and upgrading.
    We are working on it. Please refresh the page or check again later. Thanks
  </p>
</template>

<script>
import Vue from 'vue'
import utils from '~/helpers/utils'
import InlineNewsletter from '~/components/molecules/InlineNewsletter.vue'
export default {
  name: 'PostDetail',

  async asyncData({ params, store }) {
    try {
      const getPost = await store.getters['post/getPost']

      let post = await getPost(params.slug)
      if (post === undefined || !post || post === null) {
        post = await store.dispatch('post/getPost', {
          slug: params.slug,
          populate: {
            categories: true,
            author: true,
            tags: true,
            chapter: true,
            chapters: {
              populate: ['posts'],
            },
          },
        })
      }

      return { post }
    } catch (error) {
      console.log(error, 'error')
    }
  },

  computed: {
    color() {
      return utils.color(this.post.color)
    },
  },

  data: () => ({
    data: {},
  }),

  mounted() {
    this.displayNewsletterBackend()
    this.displayNewsletterLaravel()
  },

  methods: {
    displayNewsletterLaravel() {
      const newsletterLaravel = document.querySelectorAll('.newsletter-laravel')
      const newsletterNode = document.querySelectorAll('.newsletter-node')

      if (newsletterNode) {
        this.data.title = 'Get free NODEJS tips straight to your inbox!'
        this.data.subtitle =
          'Get my free 10 NODEJS tips that make you more productive.'
        this.data.tags = ['Node Tips']
        newsletterNode.forEach((newsletter) => {
          this.createNewsletter(newsletter, this.data)
        })
      }
      // Build it in such a way that its automated from WordPress
      if (newsletterLaravel) {
        this.data.title = 'Get free LARAVEL tips straight to your inbox!'
        this.data.subtitle =
          'Get my free 10 LARAVEL tips that make you more productive.'
        this.data.tags = ['Laravel Tips']
        newsletterLaravel.forEach((newsletter) => {
          this.createNewsletter(newsletter, this.data)
        })
      }
    },

    createNewsletter(newsletter, data = {}) {
      if (newsletter != null) {
        const mountNode = document.createElement('div')
        mountNode.id = 'mount-node'
        newsletter.appendChild(mountNode)
        const ToastComp = Vue.extend(InlineNewsletter)
        if (Object.keys(data).length !== 0) {
          new ToastComp({
            propsData: {
              title: data.title,
              subtitle: data.subtitle,
              tags: data.tags,
            },
          }).$mount('#mount-node')
        } else {
          new ToastComp().$mount('#mount-node')
        }
      }
    },

    displayNewsletterBackend() {
      const newsletters = document.querySelectorAll('.article-newsletter')
      newsletters.forEach((newsletter) => {
        this.createNewsletter(newsletter)
      })
    },
  },
}
</script>

<style scoped>
.sharebox {
  position: absolute;
  top: 10rem;
  left: 2rem;
}

.sharebox .content {
  position: fixed;
  background-color: white;
  border-radius: 10px;
}

@media screen and (max-width: 768px) {
  .sharebox,
  .newletter-box {
    display: none;
  }

  .sharebox .content,
  .newletter-box .content1 {
    position: relative;
  }
}
.newletter-box .content1 {
  position: fixed;
}

.newletter-box {
  position: absolute;
  top: 10rem;
  right: 15rem;
}
</style>