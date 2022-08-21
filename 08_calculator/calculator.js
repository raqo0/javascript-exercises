const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, currentNumber) => total + currentNumber, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, currentNumber) => total * currentNumber);

};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(n) {
	if(n === 0) return 1;
  let sum = 1;
  for(let i = n; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
