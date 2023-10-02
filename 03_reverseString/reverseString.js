const reverseString = function(string) {
    let stringArr = string.split('');
    stringArr = stringArr.reverse();
    return stringArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
