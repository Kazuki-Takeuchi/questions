window.onload = function () {
  hash = {
    main: {
      first: { text: 'foobar' },
      second: { text: 'fizzbuzz', child: { text: 'foobar' } }
    },
    sub: {
      first: { text: 'fizzbuzz', child: { text: 'foobar' } },
      second: {
        third: { text: 'barfoo', child: { text: 'foobar' } },
        forth: { child: { text: 'jit_foo_foo' } }
      }
    },
    text: 'foofava'
  }

  function to_ury (hash) {
    Object.keys(hash).forEach(function (key) {
      if (key === 'text') {
        // textが末端なので置換
        this[key] = this[key].replace(/foo/g, 'uryyyy!!')
      } else {
        to_ury(this[key])
      }
    }, hash)
  }
  to_ury(hash)
  this.console.log(JSON.stringify(hash, null, '\t'))
}
