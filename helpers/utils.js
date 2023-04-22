// import Superagent from 'superagent'
export default {
  color(color) {
    const mixedColor = color ?? '#2f2b94'
    if (mixedColor.includes('gradient')) {
      const first = mixedColor.split('#')[1]
      const color = first.split(' ')[0]
      return `#${color.replace(/[^a-zA-Z0-9 ]/g, '')}`
    }
    return mixedColor
  },

  substack(email) {
    return
    // if (!email) return false
    // const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // if (!re.test(email)) return false

    // const baseURL = process.env.SUBSTACK ?? 'https://kaperskyguru.substack.com'
    // const form = document.createElement('form')
    // form.setAttribute('method', 'post')
    // form.setAttribute('action', `${baseURL}/api/v1/free?nojs=true`)
    // form.style.visibility = 'hidden'

    // // Create an input element for Full Name
    // const emailField = document.createElement('input')
    // emailField.setAttribute('type', 'email')
    // emailField.setAttribute('name', 'email')
    // emailField.setAttribute('value', email)
    // emailField.setAttribute('placeholder', 'Type your email…')

    // form.appendChild(emailField)
    // document.body.appendChild(form)
    // form.submit()

    // const data = {
    //   email,
    // }

    // fetch('https://us-central1-substackapi.cloudfunctions.net/subscribe', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email: 'testmaster@gmail.com',
    //     domain: 'kaperskyguru.substack.com',
    //   }),
    // })
    //   .then(function (e) {
    //     return e.json()
    //   })
    //   .catch(function (e) {
    //     console.log(e)
    //   })

    // const res = await Superagent.post('/api/substack/subscribe').send(data)
    // console.log(res)
  },
}
