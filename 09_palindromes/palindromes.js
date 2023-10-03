const palindromes = function (str) {
  const regex = /[^A-Za-z0-9]*/g;
  const cleanStr = str.replace(regex, '').toUpperCase();
  const cleanStrArr = cleanStr.split('');
  const cleanStrRev = cleanStrArr.reverse().join('')
  return cleanStr === cleanStrRev;
};

// Do not edit below this line
module.exports = palindromes;
