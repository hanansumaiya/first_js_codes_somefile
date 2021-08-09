function animalPerMiles(miles) {
  let firstTenMilesanimal = 10;
  let secondTenMilesanimal = 20;
  let fthirdTenMilesanimal = 30;
  if (miles <= 10) {
    let firstTen = miles * firstTenMilesanimal;
    return firstTen;
  } else if (miles > 10 && miles <= 20) {
    firstTen = firstTenMilesanimal * 10;
    let restmiles = miles - 10;
    let secondTen = restmiles * secondTenMilesanimal;
    let firstSecond = firstTen + secondTen;
    return firstSecond;
  } else if (miles <= 30) {
    firstTen = firstTenMilesanimal * 10;
    secondTen = secondTenMilesanimal * 10;
    let restmiles = miles - 20;
    let thirdTen = restmiles * fthirdTenMilesanimal;
    let firstSecondThird = firstTen + secondTen + thirdTen;
    return firstSecondThird;
  }
}
var total = animalPerMiles(12);
console.log(total);
