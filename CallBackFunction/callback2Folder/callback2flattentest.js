const {nestedArray} = require('./callback2dataitems');
const flatten = require('./callback2flatten');

const result = flatten(nestedArray);
console.log(result);