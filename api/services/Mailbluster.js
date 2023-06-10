import axios from 'axios'
require('dotenv').config()
const crypto = require('crypto')

class Mailbluster {
  constructor() {
    axios.defaults.baseURL = 'https://api.mailbluster.com/api'
    axios.defaults.headers.common['Authorization'] = process.env.MAILBLUSTER_KEY
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.common['Cache-Control'] = 'no-cache'
  }

  async getLead(email) {
    try {
      const subscriber_hash = this.generateHash(email)
      const response = await axios.get(`/leads/${subscriber_hash}`)

      return response
    } catch (error) {
      return false
    }
  }

  async updateMember(data) {
    try {
      const subscriber_hash = this.generateHash(data?.email)

      const response = await axios.put(`/leads/${subscriber_hash}`, {
        email: data.email,
        subscribed: true,
        firstName: data.firstname ? data.firstname : '',
        lastName: data.lastname ? data.lastname : '',
        tags: data.tags ? data.tags : [],
      })

      return response
    } catch (error) {
      return false
    }
  }

  async addMember(data) {
    return await axios.post(`/leads`, {
      email: data.email,
      subscribed: false,
      doubleOptIn: true,
      overrideExisting: true,
      firstName: data.firstname ? data.firstname : '',
      lastName: data.lastname ? data.lastname : '',
      tags: data.tags ? data.tags : [],
    })
  }

  async upsertMember(data) {
    try {
      const response = await this.getLead(data.email)

      if (!response) return this.addMember(data)

      const member = response.data

      if (member && !member?.subscribed) {
        return {
          data: {
            lead: {
              ...member,
            },
            message: 'pending',
          },
        }
      }

      return this.updateMember(data)
    } catch (error) {
      throw error
    }
  }

  async subscribe(data) {
    try {
      return this.upsertMember(data)
    } catch (error) {
      throw error
    }
  }

  generateHash(email) {
    return crypto.createHash('md5').update(email).digest('hex')
  }
}

export default Mailbluster
