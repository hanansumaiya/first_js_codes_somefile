// var day = 12;
// switch (day) {
//   case 0:
//     console.log("Friday");
//     break;
//   case 1:
//     console.log("Saturday");
//     break;
//   case 2:
//     console.log("Sunday");
//     break;
//   case 3:
//     console.log("Monday");
//     break;
//   case 4:
//     console.log("Tuesday");
//     break;
//   case 5:
//     console.log("Wednesday");
//     break;
//   case 6:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("tui akta gadha!!!");
// }

// var add = 0;
// var i = 0;
// while (i <= 100) {
//   add = add + i;
//   i++;
// }
// console.log(add);

// var student = {
//   id: 870,
//   name: "arif",
//   class: 10,
//   phone: 098765,
// };
// console.log(student.id);
// student.id = 901;
// console.log(student.id);

// var i = 0;
// while (i <= 20) {
//   if (i == 9) {
//     continue;
//   }
//   console.log("this is " + i);
//   i++;
// }

// for (var i = 0; i < 20; i++) {
//   if (10 <= i <= 15) {
//     continue;
//   }
//   console.log(i);
// }

// for (var i = 1; i <= 50; i++) {
//   if (i >= 10 && i <= 40) {
//     if (i % 10 == 0) {
//       console.log("print jai " + i);
//     }
//   }
// }

// 5 * 4 * 3 * 2 * 1;

// let aa = 4;
// function fact(aa) {
//   let number = 1;
//   for (let i = aa; i >= 1; i--) {
//     number = number * i;
//   }

//   return number;
// }

// let myFact = fact(aa);

// console.log(`${aa} factorial is ${myFact}`);

// /////////////////////////////////////////////TARNARY OPERATOR(?)
// var n = 9;

// var m = n % 2 == 0 ? "even" : "odd";
// console.log(m);
// if (n % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
////////////////////////////////////////////////////////////STRING REVERSE
// let string = "hello its me";
// let reverse = "";
// for (let letter of string) {
//   //   console.log(letter);
//   reverse = letter + reverse;
// }
// console.log(reverse);
////////////////////STRING REVERSE FUNCTION
// let stringArr = "i am a student.";
// function getreverse(string) {
//   let letterreverse = "";
//   for (let letter of stringArr) {
//     letterreverse = letter + letterreverse;
//   }
//   return letterreverse;
// }
// let sumaiya = getreverse(stringArr);
// console.log(sumaiya);
//
//
//
//
//////////////////////////////////////////////////////////////////
//
//
for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FooBar 3 & 5");
  } else if (i % 3 == 0) {
    console.log("FOO 3");
  } else if (i % 5 == 0) {
    console.log("BAR 5");
  } else {
    console.log(i);
  }
}
