// eslint-disable-next-line no-undef
const mapFunction = require("../map.js");

const items = [1, 2, 3, 4, 5, 5];

//Callback function
function cb(x) {
  return [x, x * x];
}

//calling map()
const result = mapFunction.map(items, cb);
console.log(result);
