import recaptcha from '../services/recaptcha'
const { Router } = require('express')

const router = Router()

router.post('/recaptcha', async function (req, res, next) {
  return await recaptcha(req, res)
})
module.exports = router
