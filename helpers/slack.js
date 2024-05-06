import Superagent from 'superagent'

export const join = async ({ email, fullName, isBootcamp = false }) => {
  try {
    if (!email) return { message: 'Your email is required', type: 'danger' }

    const data = {
      email,
      fullName,
      isBootcamp,
    }
    const res = await Superagent.post('/api/slack/invite').send(data)
    return { message: res.body.message, type: 'info' }
  } catch (error) {
    return { message: 'Error occured, try again', type: 'danger' }
  }
}
