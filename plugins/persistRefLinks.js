export default ({ app }, inject) => {
  app.router.beforeEach((to, from, next) => {
    // If `ref` exists in the current route, append it to the next route
    if (from.query.ref && !to.query.ref) {
      const newQuery = { ...to.query, ref: from.query.ref }
      next({ ...to, query: newQuery })
    } else {
      next()
    }
  })
}
