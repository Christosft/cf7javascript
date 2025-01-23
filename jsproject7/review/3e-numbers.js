let num1 = 10;
let num2 = 3;


let divResult = num1 / num2;
let expr = (num2 / num1) * (8.5 / 3.3);

let fixedDiv = (num1 / num2).toFixed(2);  //3.3333
let intResult = Math.floor(num1 / num2);  //Returns int -- the bottom limit
let upperInt = Math.ceil(num1 / num2);    //Returns int -- the upper limit
let roundResult = Math.round(num1 / num2);//Rounds up for .5 and up, rounds down otherwise

//Το modulo διατηρει το προσιμο του διαιρετεου
let modResult = num1 % num2;    //JS & Java remaining part of a division

console.log(divResult, expr, fixedDiv, intResult, upperInt, roundResult, modResult);