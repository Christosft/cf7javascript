const initial = { name: "Alice", age: 30, adress: { street: "Patission", num: 76 } }

//1. With spreading. Spread operator gives a shollow copy
const copyInitial = { ...initial }

console.log(initial)

//2. Object type
const copyInitial2 = Object.assign({}, initial)

//3. With JSON function -- deep copy
const copyInitial3 = JSON.parse(JSON.stringify(initial))

const initial2 = { name: "Alice", age: 30, adress: { street: "Patission", num: 76 } }
console.log(JSON.stringify(initial2))

//4. Deep copy
const copyInitial4 = structuredClone(initial)