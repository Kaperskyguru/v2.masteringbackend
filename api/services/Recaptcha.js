import axios from 'axios'

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  try {
    const { token } = req.body

    if (!token) {
      res.end(
        JSON.stringify({
          success: false,
          message: 'Invalid token',
        })
      )
      return
    }

    axios
      .get(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
      )
      .then((answer) => {
        if (answer.status) {
          res.end(
            JSON.stringify({
              success: true,
              message: 'Token verified',
            })
          )
        } else {
          res.end(
            JSON.stringify({
              success: false,
              message: 'Invalid token',
            })
          )
        }
      })
  } catch (e) {
    console.log('ReCaptcha error:', e)
    res.end(
      JSON.stringify({
        success: false,
        message: 'Internal error',
      })
    )
  }
}
