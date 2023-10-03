const add = function(a, b) {
  if (isInvalidType(a) || isInvalidType(b)) return 'ERROR';
	return a+b;
};

const subtract = function(a, b) {
  if (isInvalidType(a) || isInvalidType(b)) return 'ERROR';
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(el => {
    if (isInvalidType(el)) {
      return 'ERROR'
    }
    sum += el;
  })
  return sum;	
};

const multiply = function(arr) {
  let product;
  arr.forEach(el => {
    if (isInvalidType(el)) {
      return 'ERROR'
    }
    if (!product) {
      product = el;
    } else {
      product *= el;
    }
  })
  return product;	

};

const power = function(a, b) {
  if (isInvalidType(a) || isInvalidType(b)) return 'ERROR';
  return a**b;
};

const factorial = function(a) {
  if (isInvalidType(a)) return 'ERROR';
	if (a < 0) return 'ERROR';
  if (a===1 || a===0) return 1;
  return a * factorial(a-1);
};

function isInvalidType(val) {
  return (typeof val !== 'number');
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
