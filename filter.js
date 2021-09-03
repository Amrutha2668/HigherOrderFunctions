function filter(elements, cb) {
  // to store the passed elements and return at once
  let result = [];
  if (Array.isArray(elements)) {
    //looping over elements array.
    for (let i = 0; i < elements.length; i++) {
      //if element satisfies the condition, store in result array
      if (cb(elements[i]) == true) {
        result.push(elements[i]);
      }
    }
    return result;
  } else return "Works only with Array";
}

// eslint-disable-next-line no-undef
module.exports = {
  filter: filter,
};
