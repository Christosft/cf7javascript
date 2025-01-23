const vat = "123";
const num = 123;


let compl1 = num == vat;
let compl2 = num === vat;
console.log(compl1, compl2);

let temp = prompt("give temp");
//let temp = 40;
let isSunny = temp > 40;
let isSunnyStr = (isSunny) ? "Big-Sun" : "Small-Sun"

//console.log(isSunny, isSunnyStr);
//document.write(isSunny, isSunnyStr);

if (isSunny) {
  isSunnyStr = "Big-Sun"
} else {
  isSunnyStr = "Small-Sun"
}

document.write(isSunnyStr);