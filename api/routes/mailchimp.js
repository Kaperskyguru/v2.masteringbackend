import Mailchimp from '../services/Mailchimp'
const { Router } = require('express')
import Superagent from 'superagent'
import request from 'request'

const router = Router()

/* GET jobs listing. */
router.get('/mailchimp/lists', async function (req, res, next) {
  const data = await new Mailchimp().getLists()
  res.json(data)
})

router.post('/substack/subscribe', async (req, res, next) => {
  const baseURL = process.env.SUBSTACK ?? 'https://kaperskyguru.substack.com'
  const headers = {
    'User-Agent': Math.random(),
    Accept: '*/*',
    'Accept-Language': 'en-US,en;q=0.5',
    Referer: `${baseURL}/embed`,
    'Content-Type': 'application/json',
    Origin: `${baseURL}`,
    Connection: 'keep-alive',
  }

  const data = JSON.stringify({
    first_url: `${baseURL}/embed`,
    first_referrer: '',
    current_url: `${baseURL}/embed`,
    current_referrer: '',
    referral_code: '',
    source: 'embed',
    email: req.body.email,
  })
  return await Superagent.post(`${baseURL}/api/v1/free`).set(headers).send(data)
})
/* POST Add subscriber to list. */
router.post('/mailchimp/subscribe', async function (req, res, next) {
  // Validate data first
  try {
    if (validateEmail(req.body.email)) {
      const data = await new Mailchimp().subscribe(req.body)
      if (data.id && data.status === 'subscribed') {
        res.json({
          message: 'User subscribed successfully',
          status: 200,
          data,
        })
      } else if (!isNaN(data.status)) {
        return res.json({
          message: 'An error occurred',
          error: data,
        })
      }
    }
    return res.json({
      message: 'Please enter a valid email address',
      status: 422,
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
  //   console.log(email)
  const mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email && email.match(mailformat)) {
    return true
  }
  return false
}

module.exports = router
