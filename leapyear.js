function leapyear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(leapyear(2100));
console.log(leapyear(2017));
console.log(leapyear(2018));
console.log(leapyear(2019));
console.log(leapyear(2020));
