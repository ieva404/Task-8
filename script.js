/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
let number1 = 8;
let number2 = 7;

function Calculator(number1, number2) {
  this.number1 = number1;
  this.number2 = number2;
  this.sumFunction = function sumTwoNumbers(number1, number2) {
    let result = number1 + number2;
    console.log(result);
    return result;
  };
  this.subFunction = function subTwoNumbers(number1, number2) {
    let result = number1 - number2;
    console.log(result);
    return result;
  };
  this.multiFunction = function multiTwoNumbers(number1, number2) {
    let result = number1 * number2;
    console.log(result);
    return result;
  };
  this.diviFunction = function diviTwoNumbers(number1, number2) {
    let result = number1 / number2;
    console.log(result);
    return result;
  };
}

const calculatedNumber = new Calculator(number1, number2);

calculatedNumber.sumFunction(number1, number2);
calculatedNumber.sumFunction(5, 2);

calculatedNumber.subFunction(number1, number2);
calculatedNumber.subFunction(5, 2);

calculatedNumber.multiFunction(number1, number2);
calculatedNumber.multiFunction(5, 2);

calculatedNumber.diviFunction(number1, number2);
calculatedNumber.diviFunction(5, 2);
