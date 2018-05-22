window.onload = function () {
  const handForms = ['グー', 'チョキ', 'パー']
  let isAiko = true
  while (isAiko) {
    console.log('「じゃんけん・・・」')
    const text = window.prompt('0.グー 1.チョキ 2.パー')
    const youShowHand = Number(text)
    console.log('「ぽい！」')
    if (!handForms[youShowHand]) {
      console.log('不正な手です')
      continue // 不正な手–>戻る
    }
    const myShowHand = Math.floor(Math.random() * 3)
    console.log('＊コンピュータ：' + handForms[myShowHand])
    console.log('＊あなた ：' + handForms[youShowHand])

    if (myShowHand === youShowHand) {
      console.log('「アイコでしょ！」')
      continue
    }
    let youWin = false
    switch (youShowHand) {
      case 0:
      case 1:
        youWin = myShowHand === youShowHand + 1
        break
      case 2:
        youWin = myShowHand === 0
        break
    }
    if (youWin) {
      console.log('「あなたの勝ち！」')
    } else {
      console.log('「あなたの負け！」')
    }
    isAiko = false
  }
}
