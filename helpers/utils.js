// import Superagent from 'superagent'
import axios from 'axios'
// export default {
export const color = (color) => {
  const mixedColor = color ?? '#2f2b94'
  if (mixedColor.includes('gradient')) {
    const first = mixedColor.split('#')[1]
    const color = first.split(' ')[0]
    return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
  }
  return mixedColor
}

export const resolveChapters = (chapters) => {
  return chapters?.map((chapter) => {
    return {
      id: chapter.id,
      ...chapter.attributes,
      posts: resolvePosts(chapter?.attributes?.posts?.data ?? []),
      post: {
        ...chapter?.attributes.post?.data?.attributes,
      },
      hub: {
        id: chapter.attributes?.hub?.data?.id,
        ...chapter.attributes?.hub?.data?.attributes,
      },
    }
  })
}

export const substack = (email) => {}

export const getPosts = async () => {
  try {
    const response = await axios.get(
      process.env.BASE_ENDPOINT_URL + '/posts?filters[is_public][$eq]=true',
      {
        headers: {
          Authorization: `bearer ${process.env.STRAPI_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const { data } = response

    if (data?.data) {
      return mapPosts(data.data)
    }
    return []
  } catch (error) {
    return []
  }
}

export const getJobs = async () => {
  try {
    const response = await axios.get(
      process.env.BASE_ENDPOINT_URL + '/get_jobs?page=20&count=9'
    )
    if (response.data) {
      return response.data.jobs
    }
    return []
  } catch (error) {
    return []
  }
}

export const resolvePosts = (posts) => {
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
      featured_image: {
        id: post.attributes?.featured_image?.data?.id,
        ...post.attributes?.featured_image?.data?.attributes,
      },
      user: {
        id: post.attributes?.user?.data?.id,
        ...post.attributes?.user?.data?.attributes,
      },
      author: {
        id: post.attributes?.author?.data?.id,
        ...post.attributes?.author?.data?.attributes,
      },

      chapters: resolveChapters(post.attributes?.chapters?.data),

      chapter: {
        id: post.attributes?.chapter?.data?.id,
        ...post.attributes?.chapter?.data?.attributes,

        hub: {
          id: post?.attributes?.chapter?.data?.attributes?.hub?.data?.id,
          ...post?.attributes?.chapter?.data?.attributes?.hub?.data?.attributes,
        },

        post: {
          ...post.attributes?.chapter?.data?.attributes.post?.data?.attributes,
        },
      },
    }
  })
}

export default { getPosts, getJobs, color }
