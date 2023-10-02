const repeatString = function(string, num) {
    // Handle expected errors
    if (num < 0) return 'ERROR';

    const stringArr = [];
    for (let i=0; i<num; i++) {
        stringArr.push(string);
    }
    return stringArr.join('');
};

// Do not edit below this line
module.exports = repeatString;
