
exports.min = function min (array) {
    if ((array === undefined) || (array.length === 0)) {
      return 0;
    }
    let n = array[0];
    for (let i = 1; i < array.length; i++) {
      if(n > array[i]) {
        n = array[i];
      }
    }
    return n;
}

exports.max = function max (array) {
    if ((array === undefined) || (array.length === 0)) {
      return 0;
    }
    let n = array[0];
    for (let i = 1; i < array.length; i++) {
        if (n < array[i]) {
          n = array[i];
        }
    }
    return n;
}

exports.avg = function avg (array) {
    if ((array === undefined) || (array.length === 0)) {
      return 0;
    }
    let sum = array.reduce((previous, current) => current += previous);
    return sum / array.length;
}
