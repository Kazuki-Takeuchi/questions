window.onload = function () {
  const text = window.prompt('数字を入力してください。')
  if (isNaN(text)) {
    console.log('入力値は数字ではありません。')
    return
  }
  const total = function (number) {
    if (number > 0) {
      number += total(number - 1)
    }
    return number
  }
  const number = Number(text)
  console.log(total(number))
}
