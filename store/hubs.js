import qs from 'qs'
import { resolveChapters, resolvePosts } from '../helpers/utils'

export const state = () => ({
  hubState: 1, // ENUM.INIT,
  hubs: [],
  pdfs: [],
  books: [],
  courses: [],
  worldHubs: [],
  hub: [],
  definitiveGuides: [],
  chapters: [],
  chapter: [],
  total_hub_pages: 0,
  recent_hubs: [],
  category_hubs: [],
  sticky_hubs: [],
  related_hubs: [],
})

export const getters = {
  getHub: (state) => (slug) => {
    // eslint-disable-next-line array-callback-return
    return state.hubs?.find((hub) => {
      if (hub.slug === slug) {
        return hub
      }
    })
  },

  getHubs: (state) => () => {
    return state.hubs
  },

  getPDFs: (state) => () => {
    return state.pdfs
  },

  getBooks: (state) => () => {
    return state.books
  },

  getCourses: (state) => () => {
    return state.courses
  },

  getRecentHubs: (state) => () => {
    return state.recent_hubs
  },

  getCategoryHubs: (state) => () => {
    return state.category_hubs
  },

  getChapter: (state) => (slug) => {
    // eslint-disable-next-line array-callback-return
    return state.chapters?.find((chapter) => {
      if (chapter.slug === slug) {
        return chapter
      }
    })
  },

  getRelatedHubs: (state) => () => {
    return state.related_hubs
  },

  getHubsByAuthor: (state) => (author) => {
    return state.hubs.filter((hub) => hub.author.slug === author)
  },
  getStickyHubs: (state) => () => {
    return state.sticky_hubs
  },
}

export const mutations = {
  setHubs(state, data) {
    state.hubs = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setPDFs(state, data) {
    state.pdfs = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setBooks(state, data) {
    state.books = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setCourses(state, data) {
    state.courses = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setRecentHubs(state, data) {
    state.recent_hubs = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },
  setStickyHubs(state, data) {
    state.sticky_hubs = data.hubs
    state.hubState = 'loaded'
  },
  setHub(state, hub) {
    state.hub = hub
  },

  setChapters(state, chapter) {
    state.chapters = chapter
  },

  setChapter(state, chapter) {
    state.chapters.push(chapter)
  },
  setCategoryHubs(state, data) {
    state.category_hubs = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setRelatedHubs(state, data) {
    state.related_hubs = data.hubs
    state.total_hub_pages = data.pages
    state.hubState = 'loaded'
  },

  setWorldHub(state, hubs) {
    const hubData = []
    for (const i in hubs) {
      hubData.push(hubs[i])
    }
    state.worldHubs = hubData.map((hub) => {
      const resolvedHub = {}
      resolvedHub.title = hub.title
      resolvedHub.content = hub.description
      resolvedHub.url = hub.url
      resolvedHub.date = hub.published_at || hub.created
      resolvedHub.image = hub.social_image || hub.image
      resolvedHub.from = new URL(hub.url).host
      return resolvedHub
    })
  },

  setHubState(state, hubState) {
    state.hubState = hubState
  },
}

export const actions = {
  async getHubs({ commit }, { page, count = 22 }) {
    try {
      const res = await this.$axios.get(
        `/hubs?filters[type][$eq]=hub&populate=*&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
      )

      const { data } = res

      if (data?.data) {
        commit('setHubs', mapHubs(data.data))
      }

      return mapHubs(data.data)
    } catch (error) {
      commit('setHubState', 'error')
      throw error
    }
  },

  async getPDFs({ commit }, { page, count = 22, populate }) {
    try {
      const query = qs.stringify(
        {
          populate,
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      )

      const res = await this.$axios.get(
        `/hubs?filters[type][$eq]=pdf&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
      )

      const { data } = res

      if (data?.data) {
        commit('setPDFs', mapHubs(data.data))
      }

      return mapHubs(data.data)
    } catch (error) {
      commit('setHubState', 'error')
      throw error
    }
  },

  async fetchCourseContent(ctx, { slug }) {
    try {
      const response = await fetch(process.env.MB_API_URL + '/roadmap/' + slug)

      return await response.json()
    } catch (error) {
      console.log(error)
    }
  },

  async getBooks({ commit }, { page, count = 22, populate }) {
    try {
      const query = qs.stringify(
        {
          populate,
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      )
      const res = await this.$axios.get(
        `/hubs?filters[type][$eq]=book&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
      )

      const { data } = res

      if (data?.data) {
        commit('setBooks', mapHubs(data.data))
      }

      return mapHubs(data.data)
    } catch (error) {
      commit('setHubState', 'error')
      throw error
    }
  },

  async getCourses({ commit }, { page, count = 22, populate }) {
    try {
      const query = qs.stringify(
        {
          populate,
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      )
      const res = await this.$axios.get(
        `/hubs?filters[type][$eq]=course&${query}&pagination[page]=${page}&pagination[pageSize]=${count}&sort[1]=createdAt%3Adesc`
      )

      const { data } = res

      if (data?.data) {
        commit('setCourses', mapHubs(data.data))
      }

      return mapHubs(data.data)
    } catch (error) {
      commit('setHubState', 'error')
      throw error
    }
  },

  async getRecentHubs({ commit }) {
    try {
      const res = await this.$axios.get(`/get_hubs?count=6`)

      const { data } = res

      if (data.hubs) {
        commit('setRecentHubs', data)
      }
      return data.hubs
    } catch (error) {
      commit('setHubState', 'error')
    }
  },

  async getStickyHubs({ commit }) {
    try {
      const res = await this.$axios.get(`/get_sticky_hubs`)

      const { data } = res
      if (data.hubs) {
        commit('setStickyHubs', data)
      }
      return data.hubs
    } catch (error) {
      commit('setHubState', 'error')
    }
  },

  async getRelatedHubs({ commit }, hubId) {
    try {
      const res = await this.$axios.get(
        `/get_related_hubs?hub_id=${hubId}&count=3`
      )

      const { data } = res

      if (data.hubs) {
        commit('setRelatedHubs', data)
      }
      return data.hubs
    } catch (error) {
      commit('setHubState', 'error')
    }
  },

  async getCategoryHubs({ commit }, { count, page = 1, slug }) {
    try {
      const res = await this.$axios.get(
        `/hubs?filters[type][$eq]=0&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${count}`
      )

      const { data } = res

      if (data?.data.length) {
        const hubs = mapHubs(data?.data)
        commit('setCategoryHubs', hubs)
        return hubs
      }
    } catch (error) {
      commit('setHubState', 'error')
    }
  },

  async getHub({ commit }, { slug, populate = '*' }) {
    try {
      const query = qs.stringify(
        {
          populate,
        },
        {
          encodeValuesOnly: true, // prettify URL
        }
      )
      // populate[chapters][populate]=posts
      const res = await this.$axios.get(
        `/hubs/?${query}&filters[slug][$eq]=${slug}`
      )

      const { data } = res

      if (data?.data?.length) {
        commit('setHub', mapHubs(data.data)[0])
        return mapHubs(data.data)[0]
      }
    } catch (error) {
      commit('setHubState', 'error')
    }
  },

  async getChapter({ commit }, { slug, populate = '*' }) {
    try {
      const res = await this.$axios.get(
        `/chapters/?populate=${populate}&filters[slug][$eq]=${slug}`
      )

      const { data } = res
      if (data?.data?.length) {
        commit('setChapter', mapChapters(data.data)[0])
        return mapChapters(data.data)[0]
      }
    } catch (error) {
      commit('setHubState', 'error')
    }
  },

  getChapters({ commit }, page = 1, perPage = 3) {},
}

function mapHubs(hubs) {
  return hubs?.map((hub) => {
    console.log(hub)
    return {
      id: hub.id,
      ...hub.attributes,

      image: {
        id: hub.attributes?.image?.data?.id,
        ...hub.attributes?.image?.data?.attributes,
      },

      topics: hub.attributes?.topics?.data?.map((topic) => ({
        id: topic.id,
        ...topic.attributes,
      })),

      chapters: hub.attributes?.chapters?.data?.map((chapter) => ({
        id: chapter.id,
        ...chapter.attributes,
        posts: resolvePosts(chapter?.attributes?.posts?.data ?? []),
      })),
    }
  })
}

function mapChapters(chapters) {
  return resolveChapters(chapters)
}
