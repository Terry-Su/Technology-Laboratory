const equalPlainObjects = require('../index')


const test = (name, a, b) => {
  console.log(`${name}'s result: ${equalPlainObjects(a, b)}
`)
}

function testFunctionA() { }
function testFunctionB() { }

test('positive Number test', {
  number: 1,
}, {
    number: 1,
  })

test('nagative Number test', {
  number: 1,
}, {
    number: 2,
  })


test('positive String test', {
  string: 'test',
}, {
    string: 'test',
  })

test('nagative String test', {
  string: 'test',
}, {
    string: 'native test',
  })


test('positive Boolean test', {
  v: true
}, {
    v: true
  })

test('nagative Boolean test', {
  v: true
}, {
    v: false
  })


test('positive Regexp test', {
  v: /123/
}, {
    v: /123/
  })

test('nagative Regexp test', {
  v: /123/
}, {
    v: /abc/
  })


test('positive Date test', {
  v: new Date(1000000000000)
}, {
    v: new Date(1000000000000)
  })

test('nagative Date test', {
  v: new Date(1000000000000)
}, {
    v: new Date(1000000000001)
  })


test('positive Array test', {
  v: [1, 2, 3]
}, {
    v: [1, 2, 3]
  })

test('nagative Array test', {
  v: [1, 2, 3]
}, {
    v: [1, 2, 3, 4, 5]
  })


test('positive Plain Object test', {
  v: {
    v: 123
  }
}, {
    v: {
      v: 123
    }
  })

test('nagative Plain Object test', {
  v: {
    v: 123
  }
}, {
    v: {
      v: 12345
    }
  })


test('positive Function test', {
  v: testFunctionA
}, {
    v: testFunctionA
  })

test('nagative Function test', {
  v: testFunctionA
}, {
    v: testFunctionB
  })



test('positive Object Created By Function test', {
  v: new testFunctionA()
}, {
    v: new testFunctionA()
  })

test('nagative Object Created By Function test', {
  v: new testFunctionA()
}, {
    v: new testFunctionB()
  })
