const leapYears = function(year) {
    // not part of test spec, but keeping to be consistent with other exercises
    if (typeof year !== 'number') return 'ERROR';

    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0)
            return false;
        return true;
    }
    return false; // default
};

// Do not edit below this line
module.exports = leapYears;
