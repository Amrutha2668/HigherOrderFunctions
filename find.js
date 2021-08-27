function find(elements, cb) {
  // Checks if elements is an array object.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      if (cb(elements[i]) == true) {
        // return the element
        return elements[i];
      }
      //even if last element doesn't satisfy the condition then return undefined
      else if (i == elements.length - 1) {
        return "undefined";
      }
    }
  } else return "Works only with Array";
}

module.exports = {
  find: find,
};
