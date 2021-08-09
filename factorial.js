// Factorial

// var fact = 1;
// for (var i = 1; i <= 6; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// //////////////////////////////////Function factorial

// function getFactorial(number) {
//   var fact = 1;
//   for (var i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// var value = 5;
// var factorial = getFactorial(value);
// console.log(value, " factorial is ", factorial);

// //////////////////////////////////Function factorial recursive

function getFactorial(number) {
  let fact = 1;
  let i = number;
  while (i >= 1) {
    fact = fact * i;
    i--;
  }
  return fact;
}
let factorial = getFactorial(6);
console.log(factorial);
