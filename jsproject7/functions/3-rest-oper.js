function max(...numbers) {
  let maxVal = -Infinity

  for (let n of numbers) {
    if (n > maxVal) {
      maxVal = n
    }
  }
  return maxVal
}
console.log(max(1, 105, 9, 3, 88))

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum(1, 5, 3, 47, 56))

// Spread vs rest
function maxx(...numbers) {
  return Math.max(...numbers)
}

console.log(maxx(5, 25, 6, 9, 65))

function greet(message, ...names) {
  console.log(message + ", " + names.join(", "))
}

greet("Hello", "Alice", "Bob", "Kostas")