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
}
