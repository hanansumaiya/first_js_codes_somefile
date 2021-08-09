let arr = [1, 5, 2, 5, 7, 8, 9, 6, 4, 2, 1, 5, 8, 45, 25, 1, 2, 3, 6, 85, 54];
// let unique = [];
// for (const element of arr) {
//   if (unique.indexOf(element) == -1) {
//     unique.push(element);
//   }
// }
// console.log(unique);
////////////////////////////////////////////
let unique = [];
for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (unique.indexOf(element) == -1) {
    unique.push(element);
  }
}
console.log(unique);
