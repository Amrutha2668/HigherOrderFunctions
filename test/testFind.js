const findFunction = require("../find.js");

const items = [1, 2, 3, 4, 5, 5];

function cb(x) {
  return x % 2 == 0;
}

//calling find()
const result = findFunction.find(items, cb);
console.log(result);
