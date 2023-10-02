const convertToCelsius = function(tempF) {
  if (isInvalidType(tempF)) return 'ERROR';
  return +((tempF - 32) * (5/9)).toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  if (isInvalidType(tempC)) return 'ERROR';
  return +(tempC * 9/5 + 32).toFixed(1);
};

function isInvalidType(val) {
  return (typeof val !== 'number');
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
