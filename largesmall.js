// function largestValue(number) {
//   let largest = number[0];
//   for (let i = 0; i < number.length; i++) {
//     let element = number[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// let ages = [2, 10, 185, 45, 98, 25, 45];
// let sumaiya = largestValue(ages);
// console.log(sumaiya);
/////////////////////////////////////  Large Value
function getLargeValue(numbers) {
  let large = arr[0];
  for (let i = 0; i < arr.length; i++) {
    var element = arr[i];
    if (element > large) {
      large = element;
    }
  }
  return large;
}
let arr = [2, 5, 7, 45, 1, 5, 24, 1, 85, 96];
var largeValue = getLargeValue(arr);
console.log("Largest Value is ", largeValue);
/////////////////////////////////////

/////////////////////////////////////////////////////SMALL VALUE
function getsmallValue(numbers) {
  let small = age[0];
  for (let i = 0; i < age.length; i++) {
    var value = age[i];
    if (value < small) {
      small = value;
    }
  }
  return small;
}
let age = [0, 5, 2, -1, 4, -6, 8, 7, 2];
var smallValue = getsmallValue(age);
console.log("Smallest Value is ", smallValue);
