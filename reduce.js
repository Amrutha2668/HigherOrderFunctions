function reduce(elements, cb, initialValue) {
  let accumulator = typeof initialValue != "undefined" ? initialValue : elements[0];
  // Checking if elements is an array object.
  if (Array.isArray(elements)) {
    for (let i = 1; i < elements.length; i++) {
      accumulator = cb(elements[i], accumulator);
    }
    return accumulator;
  } else return "Works only with Array";
}

// eslint-disable-next-line no-undef
module.exports = {
  reduce: reduce,
};
