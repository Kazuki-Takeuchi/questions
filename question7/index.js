window.onload = function () {
  const answer = createAnswer()
  let input = ''
  let count = 0
  while (answer !== input) {
    input = window.prompt('4桁の数字は？')
    if (input === '') {
      // 途中で辞めれるように
      break
    }

    count++
    const result = checkInput(answer, input)
    if (result) {
      console.log(result)
    } else {
      break // 正解の場合
    }
  }
  if (input) {
    console.log(count + '回で正解！')
  } else {
    console.log('キャンセル')
  }
}
function checkInput (answer, input) {
  const result = ''
  if (answer === input) {
    // 正解の場合は空を返す
    return result
  }
  let hitCount = 0
  let browCount = 0
  const answerArray = answer.split('')
  input.split('').forEach(function (inputChar, index) {
    if (inputChar === answerArray[index]) {
      hitCount++
    } else if (answerArray.some(answerChar => answerChar === inputChar)) {
      browCount++
    }
  })
  return '外れ： ' + hitCount + 'Hits, ' + browCount + 'Blow'
}
function createAnswer () {
  const seed = [...Array(10).keys()]
  let answer = ''
  for (let i = 0; i < 4; i++) {
    const getNumberIndex = Math.floor(Math.random() * (10 - i))
    answer += seed[getNumberIndex]
    seed.splice(getNumberIndex, 1)
  }
  return answer
}
