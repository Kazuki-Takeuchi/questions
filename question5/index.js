window.onload = function () {
  const inputArray = [20, 31, 42, 13, 5, 38]
  const sum = inputArray.reduce(function (prev, input) {
    return prev + input
  }, 0)
  console.log('合計:' + sum)
  console.log('平均:' + sum / inputArray.length)
  let max = inputArray[0]
  let min = inputArray[0]
  inputArray.forEach(function (input) {
    if (max < input) {
      max = input
    }
    if (min > input) {
      min = input
    }
  })
  console.log('最大値:' + max)
  console.log('最小値:' + min)
  console.log('小さい順(bubble):' + bubbleSort(inputArray, true))
  console.log('大きい順(bubble):' + bubbleSort(inputArray, false))
  console.log('小さい順(quick):' + quickSort(inputArray, true))
  console.log('大きい順(quick):' + quickSort(inputArray, false))
}

function bubbleSort (inputs, isAsc) {
  const results = inputs.concat()
  let isContinue = true
  while (isContinue) {
    isContinue = false
    inputs.forEach(function (input, index) {
      if (index === 0) {
        return
      }
      let isReplace = false
      const next = results[index - 1]
      if (isAsc) {
        // 小さい順
        if (input < next) {
          isReplace = true
        }
      } else {
        // 大きい順
        if (input > next) {
          isReplace = true
        }
      }
      if (isReplace) {
        results[index] = next
        results[index - 1] = input
        isContinue = true // どれか入れ替えた場合継続
      }
    })
    inputs = results.concat()
  }
  return results
}

function quickSort (inputs, isAsc) {
  if (inputs.length < 1) {
    return inputs
  }
  const base = inputs[0]
  let left = []
  let right = []
  inputs.slice(1).forEach(function (input, index) {
    if (input <= base) {
      left.push(input)
    } else {
      right.push(input)
    }
  })
  left = quickSort(left, isAsc)
  right = quickSort(right, isAsc)
  let results = []
  if (isAsc) {
    results = results.concat(left).concat([base]).concat(right)
  } else {
    results = results.concat(right).concat([base]).concat(left)
  }
  return results
}
