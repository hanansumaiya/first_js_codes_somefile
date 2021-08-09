function simpleInterest(p, r, t) {
  var interest = (p * r * t) / 100 + p;

  return interest;
}
let getInter = simpleInterest(200, 5, 2);
console.log(getInter);
