import request from 'request'
const Client = require('@mailchimp/mailchimp_marketing')
require('dotenv').config()
const crypto = require('crypto')

class Mailchimp {
  constructor() {
    Client.setConfig({
      apiKey: process.env.MAILCHIMP_KEY,
      server: process.env.MAILCHIMP_SERVER || 'us17',
    })
  }

  async getLists() {
    const response = await Client.lists.getListMergeFields(
      process.env.MAILCHIMP_LIST_ID
    )
    return response
  }

  async getMember(email) {
    const subscriber_hash = this.generateHash(email)
    const response = await Client.lists.getListMember(
      process.env.MAILCHIMP_LIST_ID,
      subscriber_hash
    )

    return response
  }

  async updateMember(data) {
    const subscriber_hash = this.generateHash(data?.email)
    const response = await Client.lists.updateListMember(
      process.env.MAILCHIMP_LIST_ID,
      subscriber_hash,
      {
        email_address: data.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: data.firstname ? data.firstname : '',
          LNAME: data.lastname ? data.lastname : '',
        },
        tags: data.tags ? data.tags : [],
      }
    )

    return response
  }

  async upsertMember(data) {
    const member = await this.getMember(data.email)

    if (
      member.status.includes('archived') ||
      member.status.includes('unsubscribed')
    ) {
      return this.updateMember(data)
    }

    const subscriber_hash = this.generateHash(data?.email)
    const response = await Client.lists.setListMember(
      process.env.MAILCHIMP_LIST_ID,
      subscriber_hash,
      {
        email_address: data.email,
        status_if_new: 'pending',
        merge_fields: {
          FNAME: data.firstname ? data.firstname : '',
          LNAME: data.lastname ? data.lastname : '',
        },
        tags: data.tags ? data.tags : [],
      }
    )

    return response
  }

  async addMember(data) {
    return await Client.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: data.email,
      status: 'pending',
      merge_fields: {
        FNAME: data.firstname ? data.firstname : '',
        LNAME: data.lastname ? data.lastname : '',
      },
      tags: data.tags ? data.tags : [],
    })
  }

  async subscribe(data) {
    try {
      return this.upsertMember(data)
    } catch (error) {
      throw error
    }
  }

  generateHash(email) {
    return crypto.createHash('md5').update(email.toLowerCase()).digest('hex')
  }

  static sub({ firstname, lastname, email }) {
    const url = `https://masteringbackend.us17.list-manage.com/subscribe/post-json?u=39ffc375608455a6fe549290a&amp;id=e42cd7d4b3&c=?`

    const data = []
    data.LNAME = lastname || ''
    data.FNAME = firstname || ''
    data.EMAIL = email
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: url,
          form: {
            EMAIL: email,
            LNAME: lastname || '',
            FNAME: firstname || '',
          },
          json: true,
          dataType: 'jsonp',
        },
        function (err, httpResponse, body) {
          // console.log(err, httpResponse, body)
          if (err) {
            // console.log(err)
            reject(err)
          }
          body = JSON.parse(body)
          if (body) {
            const message =
              'Success! Check &ldquo; ' +
              email +
              ' &rdquo; for an invite from Slack.'
            // console.log(body)
            resolve(message)
          } else {
            let { error } = body
            if (
              error === 'already_invited' ||
              error === 'already_in_team' ||
              error === 'already_in_team_invited_user'
            ) {
              const message =
                'Success! You were already invited. Visit <a href="https://backend-community.slack.com">Backend Community </a>'
              resolve(message)
            } else if (error === 'invalid_email') {
              error = 'The email you entered is an invalid email.'
            } else if (error === 'invalid_auth') {
              error =
                'Something has gone wrong. Please contact a system administrator.'
            } else if (error === 'internal_error') {
              error = 'Please enter your name'
            }
            // console.log(error)
            resolve(error)
          }
        }
      )
    })
  }
}

export default Mailchimp
