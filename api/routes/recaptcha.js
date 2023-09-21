import recaptcha from '../services/Recaptcha'
const { Router } = require('express')

const router = Router()

router.post('/recaptcha', async function (req, res, next) {
  return await recaptcha(req, res)
})
module.exports = router
