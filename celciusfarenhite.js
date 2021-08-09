// celciusfarenhite.js
//
//
//
//
// farenhite to celcius

function farenhite(number) {
  let divide = 5 / 9;
  let cel = (number - 32) * divide;
  return cel;
}
let farenhiteDegree = 55;
var celcius = farenhite(farenhiteDegree);
console.log(farenhiteDegree, "F equals to celcius = ", celcius);
farenhiteDegree = 44;
var celcius = farenhite(farenhiteDegree);
console.log(farenhiteDegree, "F equals to celcius = ", celcius);
//
//
//
//
//

//
// celcius to farenhite
function celciusValue(number) {
  let farenhite = number * (9 / 5) + 32;
  return farenhite;
}
let celciusDegree = 10;
let getFarenhit = celciusValue(celciusDegree);
console.log(celciusDegree, "C equals to =", getFarenhit, "F");
