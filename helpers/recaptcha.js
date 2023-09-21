import Superagent from 'superagent'

export const recaptcha = async ({ token }) => {
  try {
    if (!token)
      return { message: 'invalid token', type: 'danger', success: false }

    const res = await Superagent.post('/api/recaptcha').send({ token })
    return {
      message: res.body.message,
      success: res.body.success,
      type: 'info',
    }
  } catch (error) {
    return {
      message: 'Error occured, try again',
      type: 'danger',
      success: false,
    }
  }
}
