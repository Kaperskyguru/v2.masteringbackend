<template>
  <span v-if="post" class="position-relative">
    <DefinitiveArticleOverview v-if="post.type === 'definitive'" :post="post" />
    <ArticleOverview v-else :post="post" />

    <div class="position-absolute" style="top: 10rem; left: 8rem">
      <div
        class="position-fixed p-4"
        style="background-color: white; border-radius: 10px"
      >
        <div class="justify-content-start d-flex flex-column">
          <vue-goodshare-facebook has_icon />
          <vue-goodshare-twitter has_icon />
          <vue-goodshare-linkedin has_icon />
        </div>
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

  data: () => ({
    data: {},
  }),

  mounted() {
    // this.displayAds()
    this.displayNewsletterBackend()
    this.displayNewsletterLaravel()
  },

  methods: {
    //   displayAds() {
    //     const h4AdSpaces = document.querySelectorAll('article h4:nth-child(2n+1)')
    //     if (h4AdSpaces) {
    //       h4AdSpaces.forEach((adSpace) => {
    //         const firstPara = adSpace.nextElementSibling
    //         const data = {
    //           mystyle: 'display:block; text-align:center;',
    //           adLayoutKey: 'in-article',
    //           adslot: '2329133294',
    //           adformat: 'fluid',
    //         }
    //         this.createAdvert(firstPara, data)
    //       })
    //     }

    //     const h3AdSpaces = document.querySelectorAll('article h3:nth-child(2n+1)')
    //     if (h3AdSpaces) {
    //       h3AdSpaces.forEach((adSpace) => {
    //         const firstPara = adSpace.nextElementSibling
    //         const data = {
    //           // adLayoutKey,
    //           mystyle: 'display:block; text-align:center;',
    //           adLayoutKey: '-fb+5w+4e-db+86',
    //           adslot: '1795351646',
    //           adformat: 'auto',
    //         }
    //         this.createAdvert(firstPara, data)
    //       })
    //     }
    //   },

    //   createAdvert(el, data = {}) {
    //     const newNode = document.createElement('div')
    //     newNode.id = 'advert_id'
    //     const AdvertComp = Vue.extend(InlineAdvert)
    //     if (el) {
    //       el.insertAdjacentElement('afterend', newNode)
    //       new AdvertComp({
    //         propsData: data,
    //       }).$mount('#advert_id')
    //     }
    //   },
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

<style></style>