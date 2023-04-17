/* eslint-disable no-unused-vars */
// const baseURl = 'http://masteringbackend.solomoneseme.com/api'

// import ENUM from '@/enums'
// import DevtoPost from '~/Services/DevtoPosts'
// import LogRocketPosts from '~/Services/LogRocketPosts'
import qs from 'qs'

export const state = () => ({
  postState: 1, // ENUM.INIT,
  posts: [],
  worldPosts: [],
  post: [],
  total_post_pages: 0,
  recent_posts: [],
  definitiveGuides: [],
  category_posts: [],
  tag_posts: [],
  author_posts: [],
  sticky_posts: [],
  related_posts: [],
})

export const getters = {
  getPost: (state) => (slug) => {
    // eslint-disable-next-line array-callback-return
    return state.posts?.find((post) => {
      if (post.slug === slug) {
        return post
      }
    })
  },
  getDefinitiveGuides: (state) => () => {
    return state.definitiveGuides
  },
  getPosts: (state) => () => {
    return state.posts
  },

  getRecentPosts: (state) => () => {
    return state.recent_posts
  },

  getCategoryPosts: (state) => () => {
    return state.category_posts
  },

  getRelatedPosts: (state) => () => {
    return state.related_posts
  },

  getPostsByAuthor: (state) => (author) => {
    return state.author_posts
  },
  getStickyPosts: (state) => () => {
    return state.sticky_posts
  },
}

export const mutations = {
  setPosts(state, data) {
    state.posts = data.posts
    state.total_post_pages = data.pages
    state.postState = 'loaded'
  },
  setRecentPosts(state, data) {
    state.recent_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = 'loaded'
  },
  setStickyPosts(state, data) {
    state.sticky_posts = data.posts
    state.postState = 'loaded'
  },
  setPost(state, post) {
    state.post = post
  },

  setCategoryPosts(state, data) {
    state.category_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = 'loaded'
  },

  setTagPosts(state, data) {
    state.tag_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = 'loaded'
  },

  setDefinitiveGuides(state, data) {
    state.definitiveGuides = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setAuthorPosts(state, data) {
    state.author_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = 'loaded'
  },

  setRelatedPosts(state, data) {
    state.related_posts = data.posts
    state.total_post_pages = data.pages
    state.postState = 'loaded'
  },

  setWorldPost(state, posts) {
    const postData = []
    for (const i in posts) {
      postData.push(posts[i])
    }
    state.worldPosts = postData.map((post) => {
      const resolvedPost = {}
      resolvedPost.title = post.title
      resolvedPost.content = post.description
      resolvedPost.url = post.url
      resolvedPost.date = post.published_at || post.created
      resolvedPost.image = post.social_image || post.image
      resolvedPost.from = new URL(post.url).host
      return resolvedPost
    })
  },

  setPostState(state, postState) {
    state.postState = postState
  },
}

export const actions = {
  async getPosts({ commit }, { page, count = 22, populate = '*' }) {
    try {
      const res = await this.$axios.get(
        `/posts?filters[is_public][$eq]=true&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc&populate=${populate}`
      )

      const { data } = res

      if (data?.data) {
        commit('setPosts', mapPosts(data.data))
      }
      return mapPosts(data.data)
    } catch (error) {
      commit('setPostState', 'error')
      throw error
    }
  },

  async getDefinitiveGuides({ commit }, { page, count = 22 }) {
    try {
      // 0 for definitive guides
      const res = await this.$axios.get(
        `/posts?filters[type][$eq]=DEFINITIVE&populate[chapters][populate]=posts&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
      )

      const { data } = res

      if (data?.data) {
        commit('setDefinitiveGuides', mapPosts(data.data))
      }

      return mapPosts(data.data)
    } catch (error) {
      commit('setHubState', 'error')
      throw error
    }
  },

  async getRecentPosts({ commit }) {
    try {
      const res = await this.$axios.get(`/get_posts?count=6`)

      const { data } = res

      if (data.posts) {
        commit('setRecentPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  async getStickyPosts({ commit }) {
    try {
      const res = await this.$axios.get(`/get_sticky_posts`)

      const { data } = res
      if (data.posts) {
        commit('setStickyPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  async getRelatedPosts({ commit }, postId) {
    try {
      const res = await this.$axios.get(
        `/get_related_posts?post_id=${postId}&count=3`
      )

      const { data } = res

      if (data.posts) {
        commit('setRelatedPosts', data)
      }
      return data.posts
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  async getCategoryPosts({ commit }, { count, page = 1, slug, populate = '' }) {
    try {
      const res = await this.$axios.get(
        `/posts?filters[is_public][$eq]=true&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}&populate=${populate}`
      )

      const { data } = res

      if (data?.data.length) {
        const posts = mapPosts(data?.data)
        commit('setCategoryPosts', posts)
        return posts
      }
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  async getTagPosts({ commit }, { count, page = 1, slug, populate = '' }) {
    try {
      const res = await this.$axios.get(
        `/posts?filters[is_public][$eq]=true&filters[tags][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}&populate=${populate}`
      )

      const { data } = res

      if (data?.data.length) {
        const posts = mapPosts(data?.data)
        commit('setTagPosts', posts)
        return posts
      }
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  async getAuthorPosts({ commit }, { count, page = 1, slug, populate = '' }) {
    try {
      const res = await this.$axios.get(
        `/posts?filters[is_public][$eq]=true&filters[author][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}&populate=${populate}`
      )

      const { data } = res

      if (data?.data.length) {
        const posts = mapPosts(data?.data)
        commit('setAuthorPosts', posts)
        return posts
      }
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  async getPost({ commit }, { slug, populate = {} }) {
    // populate[chapters][populate]=posts

    const query = qs.stringify(
      {
        populate,
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    )

    try {
      const res = await this.$axios.get(
        `/posts/?filters[slug][$eq]=${slug}&${query}`
      )

      const { data } = res

      if (data?.data?.length) {
        commit('setPost', mapPosts(data.data)[0])
        return mapPosts(data.data)[0]
      }
    } catch (error) {
      commit('setPostState', 'error')
    }
  },

  getLatestPosts({ commit }, page = 1, perPage = 3) { },
}

function mapPosts(posts) {
  return posts?.map((post) => {
    return {
      id: post.id,
      ...post.attributes,
      categories: post.attributes?.categories?.data?.map((cat) => ({
        id: cat.id,
        ...cat.attributes,
      })),
      tags: post.attributes?.tags?.data?.map((tag) => ({
        id: tag.id,
        ...tag.attributes,
      })),
      user: {
        id: post.attributes?.user?.data?.id,
        ...post.attributes?.user?.data?.attributes,
      },
      author: {
        id: post.attributes?.author?.data?.id,
        ...post.attributes?.author?.data?.attributes,
      },

      chapters: post.attributes?.chapters?.data?.map((chapter) => ({
        id: chapter.id,
        ...chapter.attributes,
        posts: mapPosts(chapter?.attributes?.posts?.data ?? []),
      })),

      chapter: {
        id: post.attributes?.chapter?.data?.id,
        ...post.attributes?.chapter?.data?.attributes,
      },

    }
  })
}
