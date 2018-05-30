window.onload = function () {
  const text = window.prompt('数字を入力してください。')
  if (isNaN(text)) {
    console.log('入力値は数字ではありません。')
    return
  }
  const number = Number(text)
  const range = Array.from(Array(number - 1), (_, i) => i + 1)
  let outputArray = []
  range.forEach(function (val) {
    let convertStr = ''
    if (val % 3 === 0) {
      convertStr = 'Fizz'
    }
    if (val % 5 === 0) {
      convertStr += 'Buzz'
    }
    if (!convertStr) {
      convertStr = val
    }
    outputArray.push(convertStr)
  })
  console.log(outputArray.join(', '))
}
