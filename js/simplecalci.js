// program for a simple calculator

// take the operator input
 const operator = prompt('Enter operator ( either +, - , * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using switch statement
switch (operator) {
    case '+':
        result = number1 + number2;
        break;
    case '-':
        result = number1 - number2;
        break;
    case '*':
        result = number1 * number2;
        break;
    case '/':
        result = number1 / number2;
        break;
    default:
        console.log('Invalid operator');
        break;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);