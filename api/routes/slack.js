import Slack from '../services/Slack'
const { Router } = require('express')

const router = Router()

router.post('/slack/invite', async function (req, res, next) {
  // Validate data first
  try {
    const data = await new Slack().invite(req.body)

    return res.json({
      message: data,
    })
  } catch (error) {
    return res.json({
      message: 'An error occurred',
    })
  }
})
module.exports = router
