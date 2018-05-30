window.onload = function () {
  const answer = createAnswer()
  let count = 0
  while (true) {
    const input = window.prompt('4桁の数字は？')
    if (input === '') {
      // 途中で辞めれるように
      console.log('キャンセル')
      break
    }

    count++
    const result = checkInput(answer, input)
    if (result) {
      console.log(result)
    } else {
      console.log(count + '回で正解！')
      break // 正解の場合
    }
  }
}
function checkInput (answer, input) {
  const result = ''
  if (answer === input) {
    // 正解の場合は空を返す
    return result
  }
  let hitCount = 0
  let blowCount = 0
  const answerArray = answer.split('')
  input.split('').forEach(function (inputChar, index) {
    if (inputChar === answerArray[index]) {
      hitCount++
    } else if (answerArray.some(answerChar => answerChar === inputChar)) {
      blowCount++
    }
  })
  return `外れ： ${hitCount}Hits, ${blowCount}Blow`
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
