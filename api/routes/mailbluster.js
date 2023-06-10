const { Router } = require('express')
const { default: Mailbluster } = require('../services/Mailbluster')

const router = Router()

/* POST Add subscriber to list. */
router.post('/mailbluster/subscribe', async function (req, res, next) {
  // Validate data first
  try {
    if (!validateEmail(req.body.email)) {
      return res.json({
        message: 'Please enter a valid email address',
        status: 422,
      })
    }

    const { data: data } = await new Mailbluster().subscribe(req.body)

    if (data?.lead?.id && data?.message === 'Lead created') {
      return res.json({
        message: 'User subscribed successfully. User is pending verification',
        status: 200,
        data,
      })
    }

    if (data?.lead?.id && data?.message === 'Lead updated')
      return res.json({
        message: 'User already exist and data updated',
        status: 409,
        data,
      })

    if (data?.lead?.id && data?.message === 'pending')
      return res.json({
        message:
          'Seems like you have already subscribed, Please check your email for pending confirmation',
        status: 202,
        data,
      })

    return res.json({
      message: 'An error occurred',
      status: 400,
    })
  } catch (error) {
    return res.json({
      message: 'An error occurred',
      status: 400,
      error: error,
    })
  }
})

function validateEmail(email) {
  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email && email.match(mailformat)) {
    return true
  }
  return false
}

module.exports = router
