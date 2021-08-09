// let things = [
//   { name: "samsung", price: 1000, color: "gold" },
//   { name: "hp", price: 28000, color: "silver" },
//   { name: "vivo", price: 23000, color: "black" },
//   { name: "oppo", price: 2000, color: "gold" },
// ];
// let cheapestPrice = things[0];
// for (let element of things) {
//   if (element.price < cheapestPrice.price) {
//     cheapestPrice = element;
//   }
// }
// console.log(cheapestPrice);
//
//
// ////////////////////////// /////////// ////////// /////////// //////////// ///////////
//
//
//
// let shopping = [
//   { name: "phone", price: 10000 },
//   { name: "watch", price: 2500 },
//   { name: "shirt", price: 500 },
//   { name: "laptop", price: 20000 },
// ];
// let totalPrice = 0;
// for (let element of shopping) {
//   console.log(element);
//   totalPrice = totalPrice + element.price;
// }
// console.log(totalPrice);
// ////////////////////////// /////////// ////////// /////////// //////////// ///////////
//

let shopping = [
  { name: "phone", price: 10000, quantity: 1 },
  { name: "watch", price: 2500, quantity: 3 },
  { name: "shirt", price: 500, quantity: 5 },
  { name: "laptop", price: 20000, quantity: 1 },
];
let total = 0;
for (element of shopping) {
  console.log(element);
  let multiply = element.price * element.quantity;
  total = total + multiply;
}
console.log(total);
