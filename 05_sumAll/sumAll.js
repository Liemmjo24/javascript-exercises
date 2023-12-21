const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    let result = 0;
    for(let x = min; x <= max; x++)
    {
        result += x;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
