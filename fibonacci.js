// //////////////////////////////nth =(n-1)th + (n-2)th;
// let fibo = [0, 1];
// for (let i = 2; i <= 15; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);
////////////////////////////
// 6=(6-1)+(6-2);
function getFibonacci(number) {
  if (typeof number != "number") {
    return "Please enter a valid number";
  }
  if (number < 2) {
    return "please enter a number greater than 2";
  }
  let fibo = [0, 1];
  for (let i = 2; i < number; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
let fibonacci = getFibonacci(5);
console.log(fibonacci);
