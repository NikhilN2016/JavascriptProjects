// Code for a simple calculator

// Input the operator 
const operator = prompt('Enter Calculator operator ( only +, -, * or / ): ');

// Input both the operands
const number1 = parseFloat(prompt('Please Enter the first number: '));
const number2 = parseFloat(prompt('Please Enter the second number: '));

let result;


if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}


console.log(`${number1} ${operator} ${number2} = ${result}`);
