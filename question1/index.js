window.onload = function () {
  const text = window.prompt('数字を入力してください。')
  if (isNaN(text)) {
    console.log('入力値は数字ではありません。')
    return
  }
  const number = Number(text)
  const range = Array.from(Array(number).keys()).map(function (val) {
    return val + 1
  })
  range.forEach(function (val) {
    let outputStr = ''
    if (val % 3 === 0) {
      outputStr = 'Fizz'
    }
    if (val % 5 === 0) {
      outputStr += 'Buzz'
    }
    if (outputStr === '') {
      outputStr = val
    }
    console.log(outputStr)
  })
}
