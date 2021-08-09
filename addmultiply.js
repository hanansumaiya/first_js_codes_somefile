function getTotalValue(
  burgerquantity,
  pizzaquantity,
  cocacolaquantity,
  frenchfryquantity
) {
  let burgerPrice = 10;
  let pizzaPrice = 15;
  let cocacolaPrice = 5;
  let frenchfryPrice = 10;
  let burger = burgerPrice * burgerquantity;
  let pizza = pizzaPrice * pizzaquantity;
  let cocacola = cocacolaPrice * cocacolaquantity;
  let frenchfry = frenchfryPrice * frenchfryquantity;
  let total = burger + pizza + cocacola + frenchfry;
  return total;
}
let sumaiya = getTotalValue(4, 4, 4, 4);
console.log(sumaiya);
