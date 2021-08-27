const flattenFunction = require("../flatten.js");

const nestedArray = [1, [2], [[3]], [[[4]]]];
const result = flattenFunction.flatten(nestedArray);
console.log("Flattened array:");
console.log(result);
