// Basic function definition
function greet(name) {
  return `Hello, ${name}`
}

function add(a, b) {
  return a + b
}

console.log(greet("Alice"))
console.log(add(10, 5))

// Function expression
const mul = function (a, b) {
  return a * b
}

let result = mul(2, 3)
console.log(result)

// Arrow functions
const div = (a, b) => a / b
let result2 = div(10, 2)
console.log(result2)