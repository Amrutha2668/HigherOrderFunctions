const reduceFunction = require("../reduce.js");

const items = [1, 2, 3, 4, 5, 5];

// callback()
function cb(element, accumulator) {
  return (accumulator += element);
}

//calling reduce()
const result = reduceFunction.reduce(items, cb);
console.log(result);
