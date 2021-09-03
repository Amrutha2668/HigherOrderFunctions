// eslint-disable-next-line no-undef
const eachFunction = require("../each.js");

const items = [1, 2, 3, 4, 5, 5];

// Callback function
function cb(x, index) {
  return [x, index];
}

// Calling each function
const result = eachFunction.each(items, cb);
console.log(result);
