// Takes in the first value
let value1 = parseFloat(prompt('Input your first value: '));

// Takes in the operator input
let operator = prompt('Input your basic operator ( either +, -, *, % or / ): ');

//Takes in the second value
let value2 = parseFloat(prompt('Input your second value: '));

let result;

if (operator == '+') {
    result = value1 + value2;
}
else if (operator == '-') {
    result = value1 - value2;
}
else if (operator == '*') {
    result = value1 * value2;
}
  else if (operator == '%'){
    result = value1 % value2
  }
else {
    result = value1 / value2;
}

// Outputs the result
console.log(`${value1} ${operator} ${value2} = ${result}`);




