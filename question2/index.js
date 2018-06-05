window.onload = function () {
  const text = window.prompt('入力してください。')
  const hash = {}
  text.split(' ').forEach(str => {
    if (str in hash) {
      hash[str] += 1
    } else if (str) {
      hash[str] = 1
    }
  })
  const result = Object.keys(hash).map(key => {
    return `${key}:${hash[key]}`
  })
  console.log(`{${result.join(', ')}}`)
}
