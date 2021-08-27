const filterFunction = require("../filter.js");

const items = [1, 2, 3, 4, 5, 5];

//callback()
function cb(x) {
  return x % 2 == 1;
}

//calling filter()
const result = filterFunction.filter(items, cb);
//printing result array
console.log(result);
