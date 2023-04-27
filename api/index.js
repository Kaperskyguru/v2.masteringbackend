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
const slack = require('./routes/slack')

// Import API Routes
app.use(mailchimp)
app.use(slack)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // console.log(`API server listening on port ${port}`)
  })
}
