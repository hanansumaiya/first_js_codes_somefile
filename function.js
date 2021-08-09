// FUNCTION

function coffee(taka){
    // console.log('amr kace ace ' + taka +' taka');
    var coffeePrice = 15;
    var coffeePabo = taka / coffeePrice;
    return coffeePabo;
}

var coffeeKhabo = coffee(200);
// console.log(coffeeKhabo);

// 2ta value multiply

function multiply(num1,num2,num3){
    console.log(num1,num2,num3);
    var multiplication = num1 * num2;
    var addition = multiplication + num3;
    return addition;

}
var result = multiply(5,12,20);
// console.log("total number is " + result);



// 2ta value subtraction
function difference(number1, number2){
    var differ = number1 - number2;
    return differ;
}
var somo = difference(20, 50);
console.log(somo);
