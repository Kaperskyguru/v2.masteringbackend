import Superagent from 'superagent'

export const submit = async ({ email, firstname, lastname, tags }) => {
  try {
    if (!email) return { message: 'Your email is required', type: 'danger' }

    const data = {
      email,
      firstname,
      lastname,
      tags,
    }
    const res = await Superagent.post('/api/mailchimp/subscribe').send(data)
    if (res.body.status === 200) {
      return {
        message:
          'Success. Please check your email to confirm your subscription',
        type: 'success',
      }
    } else if (res.body.status === 400) {
      return {
        message:
          'Seems like you have already subscribed, You can input another email',
        type: 'info',
      }
    }
    return { message: 'Error occured, try again', type: 'danger' }
  } catch (error) {
    return { message: 'Error occured, try again', type: 'danger' }
  }
}
