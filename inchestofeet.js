// inchestofeet.js
// 1Foot == 12 Inches
function inchestofoot(inches) {
  var foot = inches / 12;
  return foot;
}
var ami = inchestofoot(10);
console.log(ami);
/////////////////////////////foot to inches
function foottoinches(foot) {
  var inches = foot * 12;
  return inches;
}
var getFoot = foottoinches(10);
console.log(getFoot);

// var inches = 200;
// var feet = inches / 12;
// console.log(feet);

//////////////////////mile to kilometer
var mile = 10;
// var kilometer = mile * 1.69;
// console.log(kilometer);

function miletokm(miles) {
  var km = miles * 1.69;
  return km;
}
var kilometer = miletokm(5);
console.log(kilometer);
