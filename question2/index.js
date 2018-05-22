window.onload = function () {
  const text = window.prompt('入力してください。')
  let hash = {}
  text.split(' ').forEach(function (str) {
    if (str in hash) {
      hash[str] += 1
    } else if (str) {
      hash[str] = 1
    }
  })
  let hasItem = false
  let logStr = '{'
  Object.keys(hash).forEach(function (key) {
    logStr += key + ':' + hash[key] + ', '
    hasItem = true
  })
  if (hasItem) {
    logStr = logStr.slice(0, -2)
  }
  logStr += '}'
  console.log(logStr)
}
