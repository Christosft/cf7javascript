const cities = ["Paris", "London", "Berlin", "Athens"]
const numbers = [10, 101, 102, 77, 99, 123, 690, 590]

console.log(cities.sort())
console.log(numbers.sort())


//numbers.sort(function (a, b) {
//if (a > b) return 1
//if (a < b) return -1
//if (a === b) return 0
//})

//Ascending
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers)


//Desending
numbers.sort(function (a, b) {
  return b - a
})

console.log(numbers)