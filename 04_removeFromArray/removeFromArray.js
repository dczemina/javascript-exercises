const removeFromArray = function(arr) {
    let returnArr = [...arr];
    for (let i=1; i<arguments.length; i++) {
        returnArr = returnArr.filter(element => element !== arguments[i]);
    }
    return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
