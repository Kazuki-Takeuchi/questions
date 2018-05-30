window.onload = function () {
  const text = window.prompt('入力してください。')
  const hash = {}
  text.split(' ').forEach(function (str) {
    if (str in hash) {
      hash[str] += 1
    } else if (str) {
      hash[str] = 1
    }
  })
  let hasItem = false
  let logArray = []
  Object.keys(hash).forEach(function (key) {
    logArray.push(`${key}:${hash[key]}`)
  })
  console.log(`{${logArray.join(', ')}}`)
}
