import Vue from 'vue'

import { AnalyticsBrowser } from '@segment/analytics-next'

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.SEGMENT_WRITE_KEY,
})

Vue.use('segment', analytics)

// if (store) {
//   store.$segment = Vue.$segment
// }

// context.$segment = Vue.$segment

// if (Vue.$segment) {
//   inject('segment', Vue.$segment)
// }
