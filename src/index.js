exports.min = function min (array) {
    return !Array.isArray(array) || array.length == 0 ? 0 : Math.min(...array)
}

exports.max = function max (array) {
    return !Array.isArray(array) || array.length == 0 ? 0 : Math.max(...array)
}

exports.avg = function avg (array) {
    return !Array.isArray(array) || array.length == 0
        ? 0
        : array.reduce((a, b) => a + b) / array.length
}
