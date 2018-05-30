window.onload = function () {
  const handForms = ['グー', 'チョキ', 'パー']
  while (true) {
    console.log('「じゃんけん・・・」')
    const text = window.prompt('0.グー 1.チョキ 2.パー')
    const youShowHand = Number(text)
    console.log('「ぽい！」')
    if (!handForms[youShowHand]) {
      console.log('不正な手です')
      break // 不正な手–>抜ける
    }
    const myShowHand = Math.floor(Math.random() * 3)
    console.log('＊コンピュータ：' + handForms[myShowHand])
    console.log('＊あなた ：' + handForms[youShowHand])

    if (myShowHand === youShowHand) {
      console.log('「アイコでしょ！」')
      continue
    }
    switch (myShowHand - youShowHand) {
      case 1:
      case -2:
        console.log('「あなたの勝ち！」')
        return
      case -1:
      case 2:
        console.log('「あなたの負け！」')
        return
    }
  }
}
