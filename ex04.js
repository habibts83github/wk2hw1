// exo4 simple calculator
//declare variable for the result
let result;
// take the operator input of the operation to be made
let prompt = require("prompt-sync")();
const operator = prompt(
  "Enter one of the following operators ( +, -, * or / ): "
);
// take the operand input perseFloat to add and avoid conca
const number1 = parseFloat(prompt("Enter first number: "));

const number2 = parseFloat(prompt("Enter second number: "));
//control input to be between 1-5
if (0 > number1 || number2 > 5) {
  console.log("enter num between 1 and 5");
} else
  switch (operator) {
    case "+":
      result = number1 + number2;
      console.log(`${number1} + ${number2} = ${result}`);
      break;

    case "-":
      result = number1 - number2;
      console.log(`${number1} - ${number2} = ${result}`);
      break;

    case "*":
      result = number1 * number2;
      console.log(`${number1} * ${number2} = ${result}`);
      break;

    case "/":
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
      break;
    default:
      console.log("wrong operator, you have exited the calculator");
  }
