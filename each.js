function each(elements, cb) {
  if (Array.isArray(elements)) {
    // Looping over elements array.
    for (let i = 0; i < elements.length; i++) {
      // Passing parameters to the callback function
      cb(elements[i], i);
    }
  } else return "Works only with Array";
}

module.exports = {
  each: each,
};
