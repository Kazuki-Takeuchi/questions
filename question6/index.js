window.onload = function () {
  const answer = Math.floor(Math.random() * 101)
  let text = '0-100で数字を当てて'
  let count = 0
  while (true) {
    const input = Number(window.prompt(text))
    if (!input) {
      // 途中で辞めれるように
      break
    }
    count++
    if (answer === input) {
      console.log('正解！・・・' + count + '回目で当てました')
      return
    } else if (answer < input) {
      text = 'もっと下'
    } else {
      text = 'もっと上'
    }
  }
}
