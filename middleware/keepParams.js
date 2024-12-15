export default function ({ query, route, redirect }) {
  // Check if `ref` exists in the query parameters
  if (query.ref) {
    // Append `ref` to all navigation routes
    const ref = query.ref

    // Check if the current route already has `ref`, if not, append it
    if (!route.query.ref) {
      const newQuery = { ...route.query, ref }

      // Redirect to the current route with the `ref` query parameter
      redirect({ path: route.path, query: newQuery })
    }
  }
}
