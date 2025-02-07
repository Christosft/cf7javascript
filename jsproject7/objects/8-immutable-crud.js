const obj = { id: 1, firstname: "Alice" }

// Add properties

// Modify the object
obj.lastname = "W."
console.log(obj)

// Immutable - fresh copy
const addToObj = (obj, field, value, field2, value2) => ({ ...obj, [field]: value, [field2]: value2 })
const objCopy = addToObj(obj, "lastname", "Doe", "city", "Athens")
console.log(objCopy)


// Update the object

// Modifies / updates the object
obj.firstname = "Chris"
console.log(obj)

// Immutable - fresh copy
const updateObj = (obj, field, newVal) => ({ ...obj, [field]: newVal })
const objUpdate = updateObj(obj, "lastname", "Ftoulis")
console.log(objUpdate)


// Delete a property of an object

// Immutable delete
const deleteIdFromObj = (obj, field) => {
  const { [field]: _, ...objToReturn } = obj
  return objToReturn
}

const objFromDelete = deleteIdFromObj(obj, "id")
console.log(objFromDelete)