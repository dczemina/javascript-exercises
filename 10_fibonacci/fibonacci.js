const fibonacci = function(n) {
    if ((typeof n !== 'number' && !+n) || n < 0) return 'OOPS';

    const sequence = [];
    for (let f=0; f<n; f++) {
        if (f<2) {
            sequence.push(1);
        } else {
            sequence.push(sequence[f-2] + sequence[f-1])
        }
    }
    return sequence[sequence.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
