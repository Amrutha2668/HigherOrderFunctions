function map(elements, cb) {
  let results = [];
  // Checking if element is an array.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      // result is the reference for the returned array from cb
      let result = cb(elements[i]);

      // Pushes the result to results array.
      results.push(result);
    }
    return results;
  } else return "Works only with Array";
}

// eslint-disable-next-line no-undef
module.exports = {
  map: map,
};
