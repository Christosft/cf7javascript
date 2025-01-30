const arr = [1, 2, 3, 4]
delete arr[0] //κακη πρακτικη

console.log(arr)

arr.push(5)   //ο ιδιος array παραμενει
arr.push(6, 7)
console.log(arr)