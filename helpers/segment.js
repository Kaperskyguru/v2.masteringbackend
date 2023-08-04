import { AnalyticsBrowser } from '@segment/analytics-next'
export default AnalyticsBrowser.load({
  writeKey: process.env.SEGMENT_WRITE_KEY,
})
