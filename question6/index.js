window.onload = function () {
  const answer = Math.floor(Math.random() * 101)
  let text = '0-100で数字を当てて'
  let input = -1
  let count = 0
  while (answer !== input) {
    input = Number(window.prompt(text))
    if (answer < input) {
      text = 'もっと下'
    } else {
      text = 'もっと上'
    }
    count++
  }
  console.log('正解！・・・' + count + '回目で当てました')
}
