import { compose } from "redux"

const add = num => num + 1

const multiply = num => num * 3

const subtract = num => num - 1


// # Sequence:
// 1. add()
// 2. multiply()
// 3. subtract()
console.log( compose( subtract, multiply, add )( 1 ) )