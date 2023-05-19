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

export const substack = (email) => {
  return
  // if (!email) return false
  // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // if (!re.test(email)) return false

  // const baseURL = process.env.SUBSTACK ?? 'https://kaperskyguru.substack.com'
  // const form = document.createElement('form')
  // form.setAttribute('method', 'post')
  // form.setAttribute('action', `${baseURL}/api/v1/free?nojs=true`)
  // form.style.visibility = 'hidden'

  // // Create an input element for Full Name
  // const emailField = document.createElement('input')
  // emailField.setAttribute('type', 'email')
  // emailField.setAttribute('name', 'email')
  // emailField.setAttribute('value', email)
  // emailField.setAttribute('placeholder', 'Type your email…')

  // form.appendChild(emailField)
  // document.body.appendChild(form)
  // form.submit()

  // const data = {
  //   email,
  // }

  // fetch('https://us-central1-substackapi.cloudfunctions.net/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     email: 'testmaster@gmail.com',
  //     domain: 'kaperskyguru.substack.com',
  //   }),
  // })
  //   .then(function (e) {
  //     return e.json()
  //   })
  //   .catch(function (e) {
  //     console.log(e)
  //   })

  // const res = await Superagent.post('/api/substack/subscribe').send(data)
  // console.log(res)
}

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

export default { getPosts, getJobs, color }
