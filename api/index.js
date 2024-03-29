const express = require('express')

// Create express instance
const app = express()
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Methods', '*')
  next()
})
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())
// Require API routes
const mailchimp = require('./routes/mailchimp')
const mailbluster = require('./routes/mailbluster')
const slack = require('./routes/slack')
const recaptcha = require('./routes/recaptcha')

// Import API Routes
app.use(mailchimp)
app.use(mailbluster)
app.use(slack)
app.use(recaptcha)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // console.log(`API server listening on port ${port}`)
  })
}
