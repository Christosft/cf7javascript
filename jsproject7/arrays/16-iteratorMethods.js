const students = ["Alice", "Andreas", "Bob", "Costas", "Andreas"]

students.forEach(function (stu, _, arr) {
  console.log(stu, arr)
})

let filtered = students.filter(student => student == "Andreas")
console.log(filtered)

let mapped = students.map(student => "student: " + student)
console.log(mapped)

const nmbers = [1, 6, 9, 12]
let sum = numbers.reduce((total, val) => total + val, 0)
console.log(sum)