function reduce(elements, cb, startingValue) {
  let accumulator =
    typeof startingValue != "undefined" ? startingValue : elements[0];
  // Checking if elements is an array object.
  if (Array.isArray(elements)) {
    for (let i = 1; i < elements.length; i++) {
      accumulator = cb(elements[i], accumulator);
    }
    return accumulator;
  } else return "Works only with Array";
}

module.exports = {
  reduce: reduce,
};
