/* eslint-disable no-inner-declarations */
function flatten(elements) {
  let result = [];
  // Checking if elements is an array.
  if (Array.isArray(elements)) {
    for (let i = 0; i < elements.length; i++) {
      recurse(elements[i]);
    }
    // Recursive function.
    function recurse(element) {
      // Check if the element is an array if not store that to cb array.
      if (!Array.isArray(element)) {
        result.push(element);
      }
      // Loop over the nested array and call recurse() to check it is an array or not
      else {
        for (let i = 0; i < element.length; i++) {
          recurse(element[i]);
        }
      }
    }
    return result;
  } else return "Works only with Array";
}

// eslint-disable-next-line no-undef
module.exports = {
  flatten: flatten,
};
