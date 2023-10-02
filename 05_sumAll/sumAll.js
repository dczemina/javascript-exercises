const sumAll = function(num1, num2) {
    // Handle invalid arguments
    if (num1 < 0 || num2 < 0) return 'ERROR'
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';

    let returnVal = 0;
    // If num1 > num2, swap order in loop
    for (let i=(num1 > num2? num2 : num1); i<=(num1 > num2? num1 : num2); i++) {
        returnVal += i;
    }
    return returnVal;
};

// Do not edit below this line
module.exports = sumAll;
