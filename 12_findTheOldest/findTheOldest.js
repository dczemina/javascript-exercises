const findTheOldest = function(peopleArr) {
    let oldest;
    for (let p=0; p<peopleArr.length; p++) {
        peopleArr[p].age = (peopleArr[p].yearOfDeath || new Date().getFullYear()) - peopleArr[p].yearOfBirth;
        if (!oldest || oldest.age < peopleArr[p].age) {
            oldest = peopleArr[p];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
