const s = "Coding Factory"
const s2 = "CODING Factory"

const replaced = s.replace("Coding", "Code")
const lower = s.toLowerCase()
const upper = s.toUpperCase()

if (s.toUpperCase() === s2.toUpperCase()) {
  console.log("EQUALS")
}

const firstname = "Alice    "
if (firstname.trim() === "Alice") {
  console.log("EQUAL")
}

console.log("Coding".repeat(10))
console.log(replaced)
