window.onload = function () {
  const text = window.prompt('数字を入力してください。')
  if (isNaN(text)) {
    console.log('入力値は数字ではありません。')
    return
  }
  const total = function (number) {
    let next = number - 1
    if (next > 0) {
      next += total(next)
    }
    return next
  }
  const number = Number(text)
  console.log(total(number) + number)
}
