window.onload = function () {
  const text = window.prompt('数字を入力してください。')
  if (isNaN(text)) {
    console.log('入力値は数字ではありません。')
    return
  }
  const division = function (sum, number) {
    const next = number - 1
    if (next > 0) {
      sum += division(sum, next)
    }
    return sum + number
  }
  const number = Number(text)
  console.log(division(0, number))
}
